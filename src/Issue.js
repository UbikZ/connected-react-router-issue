import React, {PureComponent} from 'react';
import {createBrowserHistory} from 'history';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router';
import {Provider} from 'react-redux';


export default class Issue extends PureComponent {
  componentWillMount = () => {
    const createdHistory = createBrowserHistory();

    const reducers = {router: connectRouter(createdHistory)};
    const middleware = [routerMiddleware(createdHistory)];

    const createdStore = createStore(
      combineReducers(reducers),
      compose(applyMiddleware(...middleware))
    );
    this.conf = {createdHistory, createdStore};
  };

  render = () => {
    const {createdStore, createdHistory} = this.conf;

    return (
      <Provider store={createdStore}>
        <ConnectedRouter history={createdHistory}>Issue</ConnectedRouter>
      </Provider>
    )
  }
}
