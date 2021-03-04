import Player from '../src/player'
import {getPlayers} from '../src/functions'
let player

function runTest(){
  test('set player', async()=>{
    const players = await getPlayers()
    player = new Player(players[0])
    expect(player.title).toBe('Cyrin - Cyrants')
  })

  test('get player damage', () => {
    const weapon = {
      name:'Gun',
      damage:25
    }
    player.weapon = weapon
    expect(player.totalDamage).toBe(28)
  })
}

runTest()
