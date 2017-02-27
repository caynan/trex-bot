export default class Obstacle {

  constructor() {
    this.width = 0
    this.xPos = 0
    this.yPos = 0
  }

  update(obstacle) {
    this.width = obstacle.width
    this.xPos = obstacle.xPos
    this.yPos = obstacle.yPos
  }

  toString() {
    return `WIDTH: ${this.width} | POS: (${this.xPos}, ${this.yPos})`
  }
}
