export const attack = (p1, p2) => {
  p2.takeDamage(p1.totalDamage)
  if(p2.stats.health == 0){
    return p2.die()
  }else{
    return p2.stats.health
  }
}
