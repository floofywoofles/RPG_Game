function convert(map,player){
    if(map.length > 0){
        this.out = "";
        for(let y = 0; y <= map.length-1; y++){
            for(let x = 0; x <= map[y].length-1; x++){
                map[y][x] = map[y][x].replace('$',`${y+1}`)
                if(player.position === y){
                    this.out += `[${map[y][x]}]`
                } else {
                    this.out += map[y][x];
                }
            }
            this.out += "\n";
        }
        return this.out;
    } else {
        console.error(`Map is not big enough. Put bigger map in`);
        return false;
    }
}

module.exports = {
    convert: convert
}