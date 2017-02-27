import {Enum} from 'enumify'

class TRexStatus extends Enum {}
TRexStatus.initEnum(['WAITING', 'JUMPING', 'RUNNING', 'DUCKING', 'CRASHED'])

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

  // Actions
  executeAction(action) {
    // TODO: change constants to Enums
    switch (action) {
      case 'RUNNING':
        this.executeRunningAction()
      case 'DUCKING':
        this.executeDuckingAction()
      case 'JUMPING':
        this.executeJumpingAction()
      }
  }

  triggerKeyboardEvent(keycode, eventType) {
    var ev = new Event(eventType)
    // 32 is the keycode for the space bar
    ev.which = ev.keyCode = keycode
    document.dispatchEvent(ev)
  }

  executeRunningAction() {
    this.triggerKeyboardEvent(38, "keyup") // 38 is the up arrow keycode
    this.triggerKeyboardEvent(40, "keyup") // 40 is the down arrow keycode
  }

  executeDuckingAction() {
    this.triggerKeyboardEvent(38, "keyup") // 38 is the up arrow keycode
    this.triggerKeyboardEvent(40, "keydown") // 40 is the down arrow keycode
  }

  executeJumpingAction() {
    // we can't double jump
    if (!this.isJumping) {
      this.triggerKeyboardEvent(40, "keyup") // 40 is the down arrow keycode
      this.triggerKeyboardEvent(38, "keydown") // 38 is the up arrow keycode
    }
  }
}

export default TRex
