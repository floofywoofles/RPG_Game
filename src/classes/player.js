const {Inventory} = require('./inventory');

class Player {
    constructor(name){
        this.name = name;
        this.health = 10;
        this.inventory = new Inventory();
        this.currentArea = "main"
        this.stats = {"strength": 2,"xp": 0};
        this.position = 0;
    }

    reduce(stat){
        
    }
}

module.exports = {
    Player: Player
};