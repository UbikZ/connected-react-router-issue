import React, {PureComponent} from 'react';
import {createBrowserHistory} from 'history';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router';
import {Provider} from 'react-redux';


export default class Issue extends PureComponent {
  componentWillMount = () => {
    const createdHistory = createBrowserHistory();
    const createdStore = createStore(
      combineReducers({router: connectRouter(createdHistory)}),
      compose(applyMiddleware([routerMiddleware(createdHistory)]))
    );
    this.conf = {createdHistory, createdStore};
  }

  render = () => {
    const {createdStore, createdHistory} = this.conf;

    return (
      <Provider store={createdStore}>
        <ConnectedRouter history={createdHistory}>Issue</ConnectedRouter>
      </Provider>
    )
  }
}
