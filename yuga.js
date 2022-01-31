var gameData = {
    wood: 0,
    woodPerClick: 1,
    woodPerClickCost: 10
  }

  function gatherWood() {
    gameData.wood += gameData.woodPerClick
    document.getElementById("woodGathered").innerHTML = gameData.wood+ " Wood gathered"
  }

  function buyWoodPerClick() {
    if (gameData.wood >= gameData.woodPerClickCost) {
      gameData.wood -= gameData.woodPerClickCost
      gameData.woodPerClick += 1
      gameData.woodPerClickCost *= 2
      document.getElementById("woodGathered").innerHTML = gameData.wood + " Wood gathered"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Axe (Currently Level " + gameData.woodPerClick + ") Cost: " + gameData.woodPerClickCost + " Wood"
    }
  }
  var mainGameLoop = window.setInterval(function() {
    gatherWood()
  }, 1000)