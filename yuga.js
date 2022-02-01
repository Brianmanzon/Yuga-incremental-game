var gameData = {
    wood: 0,
    woodPerClick: 1,
    hutPerClickCost: 20,
    huts: 0
  }

function gatherWood() {
    gameData.wood += gameData.woodPerClick
    document.getElementById("woodGathered").innerHTML = gameData.wood+ " Wood"
  }

function buyHut() {
    if (gameData.wood >= gameData.hutPerClickCost) {
      gameData.wood -= gameData.hutPerClickCost
      gameData.huts += 1
      gameData.hutPerClickCost *= 2
      document.getElementById("woodGathered").innerHTML = gameData.wood + " Wood"
      document.getElementById("hutsCreated").innerHTML = gameData.huts + " Huts"
      document.getElementById("buyHut").innerHTML = "Buy hut (Currently " + gameData.huts + ") Cost: " + gameData.hutPerClickCost + " Wood"
    }
  }

var mainGameLoop = window.setInterval(function() {
    gatherWood()
  }, 1000)

var savegame = JSON.parse(localStorage.getItem("yugaSave"))
if (savegame !== null) {
  gameData = savegame
}
var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("yugaSave", JSON.stringify(gameData))
  }, 15000)
