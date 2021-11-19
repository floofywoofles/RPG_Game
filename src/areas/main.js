module.exports = {
    "areas": [
        ["$: Explore"],
        ["$: View Inventory"],
        ["$: Sleep"],
        ["$: Stats and Time"]
    ],
    "values": [
        {"index": 0,"value": "explore"},
        {"index": 1, "value": "inventory","type": "menu","open": "./areas/submenu/inventory"},
        {"index": 2, "value": "sleep"},
        {"index": 3, "value": "stats"}
    ]
}