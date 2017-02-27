import Game from './game'

// Initialize the game and add it to the element on the given css selector
let game = new Game('#trex')
let trex = game.getTRex()
let obstacle = game.getNextObstacle()
var count = 0;
var table;
var rowCount;
var row;

setInterval(() => {
    game.updateState()

    if (trex.isActive()) {
        //console.log(trex.toString())
        //console.log(obstacle.toString())

        table = document.getElementById("info");
        rowCount = table.rows.length;
        count++;
        if (trex.status == "CRASHED") {
            count = 0;
            for (var i = rowCount - 1; i > 0; i--) {
                table.deleteRow(i);
            }
        }
        if (rowCount >= 10) {
            for (var i = 9; i > 0; i--) {
                table.deleteRow(i);
            }
        }
        if (count != 0) {
            row = table.insertRow(rowCount);
            row.insertCell(0).innerHTML = count;
            row.insertCell(1).innerHTML = trex.status;
            row.insertCell(2).innerHTML = (trex.speed + "").substring(0, 5);
            row.insertCell(3).innerHTML = "x: " + trex.xPos + " , " + "y: " + trex.yPos;
            row.insertCell(4).innerHTML = obstacle.width;
            row.insertCell(5).innerHTML = "x: " + obstacle.xPos + " , " + "y: " + obstacle.yPos;
        }

        trex.executeAction("DUCKING")
    }
}, 500)
