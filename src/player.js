class Player{
  constructor(init){
    this.name = init.name,
    this.race = init.race,
    this._weapon = {},
    this.stats = init.stats,
    this.level = init.level,
    this.alive = true
  }

  get title(){
    return `${this.name} - ${this.race}`
  }

  get totalDamage(){
    const boost = (this._weapon.damage*this.stats.attack)/100
    return this._weapon.damage+boost
  }

  set weapon(value){
    this._weapon = value
  }

  get weapon(){
    return this._weapon
  }

  takeDamage(val){
    let damage = val-this.stats.defence
    this.stats.health -= damage
    return this.stats.health
  }

  die(){
    this.alive = false
    return `${this.name} has been defeated`
  }
}

module.exports = Player
