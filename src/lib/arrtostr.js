function error(text) {
    console.error(text);
    process.exit();
}

function convert(map, player, position, type) {
    if (!type) {
        error("Type was never specified");
    }

    if (!map) {
        error("Map was never specified");
    }


    switch (type) {
        case "inventory":
            if (position === undefined) {
                error("Position was never specified");
            }
            this.out = "";
            for (let x = 0; x <= map.length - 1; x++) {
                if (position === x) {
                    this.out += `[${x + 1}: ${map[x].name}]`;
                } else {
                    this.out += `${x + 1}: ${map[x].name}`;
                }
                this.out += "\n";
            }

            return this.out;
            break;
        case "map":
            if (!player) {
                error("Player was never specified");
            }
            if (map.length > 0) {
                this.out = "";
                for (let y = 0; y <= map.length - 1; y++) {
                    for (let x = 0; x <= map[y].length - 1; x++) {
                        map[y][x] = map[y][x].replace('$', `${y + 1}`)
                        if (player.position === y) {
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
            break;
    }
}

module.exports = {
    convert: convert
}