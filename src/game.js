const { Player } = require('./classes/player');
const { convert } = require('./lib/arrtostr');
const readline = require('readline-sync');
const { getArea } = require('./areas/getArea');
const {show} = require('./areas/submenu/show');
let player = new Player("placeholder");
let debug = true;
let oneTime = false;

function input(key,player,area){
  switch (key) {
    case "w":
      if (player.position > 0) {
        player.position -= 1;
      }
      break;
    case "s":
      if (player.position < area["areas"].length - 1) {
        player.position += 1;
      }
      break;
    case "q":
      process.exit();
      break;
    case " ":
      this.ind = area["values"][(player.position)];
      console.log(this.ind)
      if (this.ind["type"] === "menu") {
        player.isInMenu = true;
        player.currentMenu = this.ind["value"]
        console.log("Changed player status")
      } else {
        console.log(`Condition not met. ${this.ind} is not menu?`);
        process.exit();
      }
      break;
  }

  return player;
}

function game() {
  let key;
  let area;
  while (true) {
    console.clear();

    if (debug === true) {
      if (!oneTime) {
        // Also going to add dummy items to inventory
        for(let x = 0; x <= 25; x++){
          player.inventory.addItem({ "name": `Sword${x+1}`, "stats": [{ "strength": Math.floor(Math.random()*50) }] })
        }

        oneTime = true;
      }

      console.log(player)
    }

    if (player.isInMenu === false) {
      switch (player.currentArea) {
        case "main":
          area = getArea(player.currentArea);
          //console.log(area);
          this.check = convert(area["areas"], player,undefined,"map");

          if (this.check === false) {
            console.error("Unable to convert matrix to string");
            process.exit();
          } else {
            console.log(this.check);
          }
          break;
      }
      key = readline.keyIn('', { hideEchoBack: true, mask: '', limit: 'wsq ' });
      player = input(key,player,area);
    } else {
      switch (player.currentMenu) {
        case "inventory":
          // Gosh dang it
          this.position = 0;
          show(player.inventory.inventory,player.currentMenu,this.position)
          player.resetMenu();
          break;
      }
    }


  }
}

game();