function getArea(area){
    this.out = require(`./${area}`);

    return this.out;
}

module.exports = {
    getArea: getArea
}