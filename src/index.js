import Game from './game'

// Initialize the game and add it to the element on the given css selector
let game = new Game('#trex')
let trex = game.getTRex()
let obstacle = game.getNextObstacle()

setInterval(() => {
  game.updateState()

  if (trex.isActive()) {
    console.log(trex.toString())
    console.log(obstacle.toString())
    trex.executeAction("DUCKING")
  }
}, 1000)
