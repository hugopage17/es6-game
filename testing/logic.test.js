import Player from '../src/player'
import {getPlayers} from '../src/functions'
import {attack} from '../src/logic'

function runTest(){
  test('test attack system', async()=>{
    const players = await getPlayers()
    const p1 = new Player(players[0])
    const p2 = new Player(players[0])

    const weapon = {
      name:'Gun',
      damage:25
    }
    p1.weapon = weapon
    expect(attack(p1,p2)).toBe(77)
  })
}

runTest()
