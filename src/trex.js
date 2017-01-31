class TRex {

  constructor() {
    this.speed = 0
    this.xPos = 0
    this.yPos = 0
    this.status = "WAITING"
  }

  toString() {
    const strToReturn = `STATUS: ${this.status} | SPEED: ${this.speed} | POS: (${this.xPos}, ${this.yPos})`
    return strToReturn
  }

  isJumping() {
    return this.status == "JUMPING"
  }

  isRunning() {
    return this.status == "RUNNING"
  }

  isDucking() {
    return this.status == "DUCKING"
  }

  isActive() {
    return this.status != "CRASHED" ||  this.status != "WAITING"
  }

  update(runnerObject) {
    this.speed = runnerObject.currentSpeed

    let trex = runnerObject.tRex
    this.xPos = trex.xPos
    this.yPos = trex.yPos
    this.status = trex.status
  }
}

export default TRex
