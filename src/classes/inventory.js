class Inventory {
    constructor() {
        this.inventory = [];
        this.size = 25; // Each row in inventory is 2 columns and 5 rows
        this.checkSize();
    }

    checkSize() {
        this.check = (this.size % 5 === 0) ? true : false;

        if (this.check) {
            console.log("Size is correct");
        } else {
            console.error("Incorrect size not divisible by 5.");
            process.exit();
        }
    }

    addItem(item) {
        if (item) {
            this.inventory.push(item);
            return true;
        } else {
            console.error("No valid item provided");
            process.exit();
        }
    }
}

module.exports = {
    Inventory: Inventory
}