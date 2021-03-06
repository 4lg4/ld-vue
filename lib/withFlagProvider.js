"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.camelcase"));

var _initLDClient = require("./initLDClient");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = function _default(_ref) {
  var clientSideId = _ref.clientSideId,
      user = _ref.user,
      options = _ref.options;
  return {
    data: function data() {
      return {
        flags: {}
      };
    },
    provide: function provide() {
      return {
        ld: this.$data
      };
    },
    mounted: function mounted() {
      this.initLD();
    },
    methods: {
      initLD: function () {
        var _initLD = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _initLDClient.initLDClient)(clientSideId, user, options);

                case 2:
                  this.flags = _context.sent;

                  _initLDClient.ldClient.on('change', function (changes) {
                    var flattened = {};

                    for (var key in changes) {
                      flattened[(0, _lodash.default)(key)] = changes[key].current;
                    }

                    _this.flags = _objectSpread({}, _this.flags, flattened);
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function initLD() {
          return _initLD.apply(this, arguments);
        };
      }()
    }
  };
};

exports.default = _default;