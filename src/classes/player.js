const {Inventory} = require('./inventory');

class Player {
    constructor(name){
        this.name = name;
        this.health = 10;
        this.inventory = new Inventory();
        this.currentArea = "main"
        this.currentMenu = ""
        this.stats = {"strength": 2,"xp": 0};
        this.position = 0;
        this.isInMenu = false;
    }

    reduce(stat,amount){
        if(typeof this.stats[stat] === undefined){
            console.error(`${stat} is not a valid stat`);
            return false;
        } else {
            this.stats[stat] -= amount;
        }
    }

    resetMenu(){
        this.isInMenu = false;
        this.currentMenu = "";
    }
}

module.exports = {
    Player: Player
};