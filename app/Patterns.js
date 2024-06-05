class Patterns {
    constructor() {
        this.stillLifes = [
            {
                name: "Block",
                structure: [
                    [1, 1],
                    [1, 1]
                ]
            },
            {
                name: "Beehive",
                structure: [
                    [0, 1, 1, 0],
                    [1, 0, 0, 1],
                    [0, 1, 1, 0]
                ]
            },
            {
                name: "Loaf",
                structure: [
                    [0, 1, 1, 0],
                    [1, 0, 0, 1],
                    [0, 1, 0, 1],
                    [0, 0, 1, 0]
                ]
            },
            {
                name: "Boat",
                structure: [
                    [1, 1, 0],
                    [1, 0, 1],
                    [0, 1, 0]
                ]
            },
            {
                name: "Tub",
                structure: [
                    [0, 1, 0],
                    [1, 0, 1],
                    [0, 1, 0]
                ]
            }
        ];

        this.oscillators = [
            {
                name: "Blinker",
                structure: [
                    [1],
                    [1],
                    [1]
                ]
            },
            {
                name: "Toad",
                structure: [
                    [0, 1, 1, 1],
                    [1, 1, 1, 0]
                ]
            },
            {
                name: "Beacon",
                structure: [
                    [1, 1, 0, 0],
                    [1, 1, 0, 0],
                    [0, 0, 1, 1],
                    [0, 0, 1, 1]
                ]
            },
            {
                name: "Pulsar",
                structure: [
                    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                ]
            },
            {
                name: "Pentadecathlon",
                structure: [
                    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                    [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
                    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            {
                name: "Figure Eight",
                structure: [
                    [1, 1, 1, 0, 0, 0],
                    [1, 1, 1, 0, 0, 0],
                    [1, 1, 1, 0, 0, 0],
                    [0, 0, 0, 1, 1, 1],
                    [0, 0, 0, 1, 1, 1],
                    [0, 0, 0, 1, 1, 1]
                ]
            }
        ];

        this.spaceships = [
            {
                name: "Glider",
                structure: [
                    [0, 1, 0],
                    [0, 0, 1],
                    [1, 1, 1]
                ]
            },
            {
                name: "Lightweight Spaceship",
                structure: [
                    [0, 1, 0, 0, 1],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 1],
                    [1, 1, 1, 1, 0]
                ]
            },
            {
                name: "Middleweight Spaceship",
                structure: [
                    [0, 0, 0, 1, 0, 0],
                    [0, 1, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1, 0]
                ]
            },
            {
                name: "Heavyweight Spaceship",
                structure: [
                    [0, 0, 0, 1, 1, 0, 0],
                    [0, 1, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1, 1, 0]
                ]
            },
        ];

        this.metuselahs = [
            {
                name: "R-pentomino",
                structure: [
                    [0, 1, 1],
                    [1, 1, 0],
                    [0, 1, 0]
                ]
            },
        ];
    }

    find(name) {
        let structure = this.stillLifes.find(struct => struct.name === name);
        if (structure) {
            return structure;
        }

        structure = this.oscillators.find(struct => struct.name === name);
        if (structure) {
            return structure;
        }

        structure = this.spaceships.find(struct => struct.name === name);
        if (structure) {
            return structure;
        }

        structure = this.metuselahs.find(struct => struct.name === name);
        if (structure) {
            return structure;
        }

        return null;
    }

    getNames() {
        return this.stillLifes.map(struct => struct.name)
            .concat(this.oscillators.map(struct => struct.name))
            .concat(this.spaceships.map(struct => struct.name))
            .concat(this.metuselahs.map(struct => struct.name));
    }
}

export default Patterns;
