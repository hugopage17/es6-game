import Player from './player'
import fs from 'fs'
import {getPlayers} from './functions'
let players = []

async function Main(){
  await getPlayers().then((p) => {players = p})
  const player = new Player(players[0])
}

Main()
