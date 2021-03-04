import fetch from 'node-fetch'
import regeneratorRuntime from "regenerator-runtime";

export const getPlayers = async() => {
  let call = await fetch('http://localhost:5000/players')
  let res = await call.json()
  return res
}
