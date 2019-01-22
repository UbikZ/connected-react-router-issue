(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('history'), require('redux'), require('connected-react-router'), require('react-redux')) :
  typeof define === 'function' && define.amd ? define(['react', 'history', 'redux', 'connected-react-router', 'react-redux'], factory) :
  (global = global || self, global.Issue = factory(global.React, global.History, global.Redux, global.ConnectedReactRouter, global.ReactRedux));
}(this, function (React, history, redux, connectedReactRouter, reactRedux) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var Issue =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(Issue, _PureComponent);

    function Issue() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Issue);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Issue)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillMount", function () {
        var createdHistory = history.createBrowserHistory();
        var reducers = {
          router: connectedReactRouter.connectRouter(createdHistory)
        };
        var middleware = [connectedReactRouter.routerMiddleware(createdHistory)];
        var createdStore = redux.createStore(redux.combineReducers(reducers), redux.compose(redux.applyMiddleware.apply(void 0, middleware)));
        _this.conf = {
          createdHistory: createdHistory,
          createdStore: createdStore
        };
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
        var _this$conf = _this.conf,
            createdStore = _this$conf.createdStore,
            createdHistory = _this$conf.createdHistory;
        return React__default.createElement(reactRedux.Provider, {
          store: createdStore
        }, React__default.createElement(connectedReactRouter.ConnectedRouter, {
          history: createdHistory
        }, "Issue"));
      });

      return _this;
    }

    return Issue;
  }(React.PureComponent);

  var src = Issue.default || Issue;

  return src;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNzdWUuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9pc3N1ZS5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2NyZWF0ZUJyb3dzZXJIaXN0b3J5fSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge0Nvbm5lY3RlZFJvdXRlciwgY29ubmVjdFJvdXRlciwgcm91dGVyTWlkZGxld2FyZX0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXNzdWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWRIaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcblxuICAgIGNvbnN0IHJlZHVjZXJzID0ge3JvdXRlcjogY29ubmVjdFJvdXRlcihjcmVhdGVkSGlzdG9yeSl9O1xuICAgIGNvbnN0IG1pZGRsZXdhcmUgPSBbcm91dGVyTWlkZGxld2FyZShjcmVhdGVkSGlzdG9yeSldO1xuXG4gICAgY29uc3QgY3JlYXRlZFN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpLFxuICAgICAgY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXG4gICAgKTtcbiAgICB0aGlzLmNvbmYgPSB7Y3JlYXRlZEhpc3RvcnksIGNyZWF0ZWRTdG9yZX07XG4gIH07XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtjcmVhdGVkU3RvcmUsIGNyZWF0ZWRIaXN0b3J5fSA9IHRoaXMuY29uZjtcblxuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e2NyZWF0ZWRTdG9yZX0+XG4gICAgICAgIDxDb25uZWN0ZWRSb3V0ZXIgaGlzdG9yeT17Y3JlYXRlZEhpc3Rvcnl9Pklzc3VlPC9Db25uZWN0ZWRSb3V0ZXI+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuIiwiY29uc3QgSXNzdWUgPSByZXF1aXJlKCcuL2lzc3VlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gSXNzdWUuZGVmYXVsdCB8fCBJc3N1ZTtcbiJdLCJuYW1lcyI6WyJJc3N1ZSIsImNyZWF0ZWRIaXN0b3J5IiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJyZWR1Y2VycyIsInJvdXRlciIsImNvbm5lY3RSb3V0ZXIiLCJtaWRkbGV3YXJlIiwicm91dGVyTWlkZGxld2FyZSIsImNyZWF0ZWRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbmYiLCJSZWFjdCIsIlByb3ZpZGVyIiwiQ29ubmVjdGVkUm91dGVyIiwiUHVyZUNvbXBvbmVudCIsIm1vZHVsZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFPcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUdBQ0UsWUFBTTtFQUN6QixVQUFNQyxjQUFjLEdBQUdDLDRCQUFvQixFQUEzQztFQUVBLFVBQU1DLFFBQVEsR0FBRztFQUFDQyxRQUFBQSxNQUFNLEVBQUVDLGtDQUFhLENBQUNKLGNBQUQ7RUFBdEIsT0FBakI7RUFDQSxVQUFNSyxVQUFVLEdBQUcsQ0FBQ0MscUNBQWdCLENBQUNOLGNBQUQsQ0FBakIsQ0FBbkI7RUFFQSxVQUFNTyxZQUFZLEdBQUdDLGlCQUFXLENBQzlCQyxxQkFBZSxDQUFDUCxRQUFELENBRGUsRUFFOUJRLGFBQU8sQ0FBQ0MscUJBQWUsTUFBZixTQUFtQk4sVUFBbkIsQ0FBRCxDQUZ1QixDQUFoQztFQUlBLFlBQUtPLElBQUwsR0FBWTtFQUFDWixRQUFBQSxjQUFjLEVBQWRBLGNBQUQ7RUFBaUJPLFFBQUFBLFlBQVksRUFBWkE7RUFBakIsT0FBWjtFQUNEOzt1RkFFUSxZQUFNO0VBQUEsdUJBQzBCLE1BQUtLLElBRC9CO0VBQUEsVUFDTkwsWUFETSxjQUNOQSxZQURNO0VBQUEsVUFDUVAsY0FEUixjQUNRQSxjQURSO0VBR2IsYUFDRWEsNkJBQUNDLG1CQUFEO0VBQVUsUUFBQSxLQUFLLEVBQUVQO0VBQWpCLFNBQ0VNLDZCQUFDRSxvQ0FBRDtFQUFpQixRQUFBLE9BQU8sRUFBRWY7RUFBMUIsaUJBREYsQ0FERjtFQUtEOzs7Ozs7SUF0QmdDZ0I7O0VDTG5DQyxPQUFBLEdBQWlCbEIsS0FBSyxDQUFDbUIsT0FBTixJQUFpQm5CLEtBQWxDOzs7Ozs7OzsifQ==
