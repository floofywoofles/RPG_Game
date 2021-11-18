const { Player } = require('./classes/player');
const { convert } = require('./lib/arrtostr');
const readline = require('readline-sync');
const {getArea} = require('./areas/getArea');

const stdin = process.stdin;
const player = new Player("placeholder");



function game() {
  let key;
  let area;
  while (true) {
    console.clear();
    if(!player.isInMenu){
      switch (player.currentArea) {
        case "main":
          area = getArea(player.currentArea);
          console.log(area);
          this.check = convert(area["areas"], player);
  
          if (this.check === false) {
            console.error("Unable to convert matrix to string");
            process.exit();
          } else {
            console.log(this.check);
          }
          break;
      }
    } else {
      switch(player.currentMenu){
        case "inventory":
          break;
      }
    }

    key = readline.keyIn('', { hideEchoBack: true, mask: '', limit: 'wsq ' });
    
    switch (key) {
      case "w":
        if (player.position > 0) {
          player.position -= 1;
        }
        break;
      case "s":
        if (player.position < area.length - 1) {
          player.position += 1;
        }
        break;
      case "q":
        process.exit();
        break;
      case " ":

        break;
    }
  }
}
/*
OOP

1: Check encounters
2: Load menus
*/

game();