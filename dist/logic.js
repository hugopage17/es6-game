"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attack = void 0;

var attack = function attack(p1, p2) {
  p2.takeDamage(p1.totalDamage);

  if (p2.stats.health == 0) {
    return p2.die();
  } else {
    return p2.stats.health;
  }
};

exports.attack = attack;