import './css/style.css'

import Runner from './runner'
import TRex from './trex'
import Obstacle from './obstacle'

class Game {

  constructor(element, config) {
    this.runner = this.initGame(element, config)
    this.tRex = new TRex()
    this.currentScore = 0
    this.bestScore = 0
    this.nextObstacle = new Obstacle()
  }

  initGame(element, config) {
      let _element = typeof element === "string" ? document.querySelector(element) : element
      _element.classList.add("interstitial-wrapper")
      let runner = new Runner(_element, config)

      return runner
  }

  getRunner() {
    return this.runner
  }

  getObstacles() {
    return this.runner.horizon.obstacles
  }

  getNextObstacle() {
    return this.nextObstacle
  }

  getTRex() {
    return this.tRex
  }

  updateState() {
    const runnerObject = this.runner
    this.updateScore(runnerObject)
    this.tRex.update(runnerObject)
    this.nextObstacle.update(this.getObstacles()[0])
  }

  updateScore(runnerObject) {
    let distanceRan = runnerObject.distanceRan
    let highestScore = runnerObject.highestScore

    this.currentScore = runnerObject.distanceMeter.getActualDistance(distanceRan)
    //FIXME: we' over updating this, probably should only update on a new game
    this.bestScore = runnerObject.distanceMeter.getActualDistance(highestScore)
  }


}

export default Game
