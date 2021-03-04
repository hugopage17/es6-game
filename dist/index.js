"use strict";

var _player = _interopRequireDefault(require("./player"));

var _fs = _interopRequireDefault(require("fs"));

var _functions = require("./functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var players = [];

function Main() {
  return _Main.apply(this, arguments);
}

function _Main() {
  _Main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var player;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _functions.getPlayers)().then(function (p) {
              players = p;
            });

          case 2:
            player = new _player["default"](players[0]);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Main.apply(this, arguments);
}

Main();