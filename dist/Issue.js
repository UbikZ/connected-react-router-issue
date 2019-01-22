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
        var createdStore = redux.createStore(redux.combineReducers({
          router: connectedReactRouter.connectRouter(createdHistory)
        }), redux.compose(redux.applyMiddleware([connectedReactRouter.routerMiddleware(createdHistory)])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNzdWUuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9pc3N1ZS5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2NyZWF0ZUJyb3dzZXJIaXN0b3J5fSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge0Nvbm5lY3RlZFJvdXRlciwgY29ubmVjdFJvdXRlciwgcm91dGVyTWlkZGxld2FyZX0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXNzdWUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZWRIaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcbiAgICBjb25zdCBjcmVhdGVkU3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIGNvbWJpbmVSZWR1Y2Vycyh7cm91dGVyOiBjb25uZWN0Um91dGVyKGNyZWF0ZWRIaXN0b3J5KX0pLFxuICAgICAgY29tcG9zZShhcHBseU1pZGRsZXdhcmUoW3JvdXRlck1pZGRsZXdhcmUoY3JlYXRlZEhpc3RvcnkpXSkpXG4gICAgKTtcbiAgICB0aGlzLmNvbmYgPSB7Y3JlYXRlZEhpc3RvcnksIGNyZWF0ZWRTdG9yZX07XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge2NyZWF0ZWRTdG9yZSwgY3JlYXRlZEhpc3Rvcnl9ID0gdGhpcy5jb25mO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlciBzdG9yZT17Y3JlYXRlZFN0b3JlfT5cbiAgICAgICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtjcmVhdGVkSGlzdG9yeX0+SXNzdWU8L0Nvbm5lY3RlZFJvdXRlcj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKVxuICB9XG59XG4iLCJjb25zdCBJc3N1ZSA9IHJlcXVpcmUoJy4vaXNzdWUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBJc3N1ZS5kZWZhdWx0IHx8IElzc3VlO1xuIl0sIm5hbWVzIjpbIklzc3VlIiwiY3JlYXRlZEhpc3RvcnkiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsImNyZWF0ZWRTdG9yZSIsImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwicm91dGVyIiwiY29ubmVjdFJvdXRlciIsImNvbXBvc2UiLCJhcHBseU1pZGRsZXdhcmUiLCJyb3V0ZXJNaWRkbGV3YXJlIiwiY29uZiIsIlJlYWN0IiwiUHJvdmlkZXIiLCJDb25uZWN0ZWRSb3V0ZXIiLCJQdXJlQ29tcG9uZW50IiwibW9kdWxlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQU9xQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OzttR0FDRSxZQUFNO0VBQ3pCLFVBQU1DLGNBQWMsR0FBR0MsNEJBQW9CLEVBQTNDO0VBQ0EsVUFBTUMsWUFBWSxHQUFHQyxpQkFBVyxDQUM5QkMscUJBQWUsQ0FBQztFQUFDQyxRQUFBQSxNQUFNLEVBQUVDLGtDQUFhLENBQUNOLGNBQUQ7RUFBdEIsT0FBRCxDQURlLEVBRTlCTyxhQUFPLENBQUNDLHFCQUFlLENBQUMsQ0FBQ0MscUNBQWdCLENBQUNULGNBQUQsQ0FBakIsQ0FBRCxDQUFoQixDQUZ1QixDQUFoQztFQUlBLFlBQUtVLElBQUwsR0FBWTtFQUFDVixRQUFBQSxjQUFjLEVBQWRBLGNBQUQ7RUFBaUJFLFFBQUFBLFlBQVksRUFBWkE7RUFBakIsT0FBWjtFQUNEOzt1RkFFUSxZQUFNO0VBQUEsdUJBQzBCLE1BQUtRLElBRC9CO0VBQUEsVUFDTlIsWUFETSxjQUNOQSxZQURNO0VBQUEsVUFDUUYsY0FEUixjQUNRQSxjQURSO0VBR2IsYUFDRVcsNkJBQUNDLG1CQUFEO0VBQVUsUUFBQSxLQUFLLEVBQUVWO0VBQWpCLFNBQ0VTLDZCQUFDRSxvQ0FBRDtFQUFpQixRQUFBLE9BQU8sRUFBRWI7RUFBMUIsaUJBREYsQ0FERjtFQUtEOzs7Ozs7SUFsQmdDYzs7RUNMbkNDLE9BQUEsR0FBaUJoQixLQUFLLENBQUNpQixPQUFOLElBQWlCakIsS0FBbEM7Ozs7Ozs7OyJ9
