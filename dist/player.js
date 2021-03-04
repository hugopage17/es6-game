"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player(init) {
    _classCallCheck(this, Player);

    this.name = init.name, this.race = init.race, this._weapon = {}, this.stats = init.stats, this.level = init.level, this.alive = true;
  }

  _createClass(Player, [{
    key: "title",
    get: function get() {
      return "".concat(this.name, " - ").concat(this.race);
    }
  }, {
    key: "totalDamage",
    get: function get() {
      var boost = this._weapon.damage * this.stats.attack / 100;
      return this._weapon.damage + boost;
    }
  }, {
    key: "weapon",
    get: function get() {
      return this._weapon;
    },
    set: function set(value) {
      this._weapon = value;
    }
  }, {
    key: "takeDamage",
    value: function takeDamage(val) {
      var damage = val - this.stats.defence;
      this.stats.health -= damage;
      return this.stats.health;
    }
  }, {
    key: "die",
    value: function die() {
      this.alive = false;
      return "".concat(this.name, " has been defeated");
    }
  }]);

  return Player;
}();

module.exports = Player;