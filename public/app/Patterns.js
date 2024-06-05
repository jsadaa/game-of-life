class Patterns {
    constructor() {
        this.patterns = [
            {
                name: "Block",
                type: "stillLife",
                structure: [
                    [1, 1],
                    [1, 1]
                ]
            },
            {
                name: "Beehive",
                type: "stillLife",
                structure: [
                    [0, 1, 1, 0],
                    [1, 0, 0, 1],
                    [0, 1, 1, 0]
                ]
            },
            {
                name: "Loaf",
                type: "stillLife",
                structure: [
                    [0, 1, 1, 0],
                    [1, 0, 0, 1],
                    [0, 1, 0, 1],
                    [0, 0, 1, 0]
                ]
            },
            {
                name: "Boat",
                type: "stillLife",
                structure: [
                    [1, 1, 0],
                    [1, 0, 1],
                    [0, 1, 0]
                ]
            },
            {
                name: "Tub",
                type: "stillLife",
                structure: [
                    [0, 1, 0],
                    [1, 0, 1],
                    [0, 1, 0]
                ]
            },
            {
                name: "Blinker",
                type: "oscillator",
                structure: [
                    [1],
                    [1],
                    [1]
                ]
            },
            {
                name: "Toad",
                type: "oscillator",
                structure: [
                    [0, 1, 1, 1],
                    [1, 1, 1, 0]
                ]
            },
            {
                name: "Beacon",
                type: "oscillator",
                structure: [
                    [1, 1, 0, 0],
                    [1, 1, 0, 0],
                    [0, 0, 1, 1],
                    [0, 0, 1, 1]
                ]
            },
            {
                name: "Pulsar",
                type: "oscillator",
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
                type: "oscillator",
                structure: [
                    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                    [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
                    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
                ]
            },
            {
                name: "Figure Eight",
                type: "oscillator",
                structure: [
                    [1, 1, 1, 0, 0, 0],
                    [1, 1, 1, 0, 0, 0],
                    [1, 1, 1, 0, 0, 0],
                    [0, 0, 0, 1, 1, 1],
                    [0, 0, 0, 1, 1, 1],
                    [0, 0, 0, 1, 1, 1]
                ]
            },
            {
                name: "Glider",
                type: "spaceship",
                structure: [
                    [0, 1, 0],
                    [0, 0, 1],
                    [1, 1, 1]
                ]
            },
            {
                name: "Lightweight Spaceship",
                type: "spaceship",
                structure: [
                    [0, 1, 0, 0, 1],
                    [1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 1],
                    [1, 1, 1, 1, 0]
                ]
            },
            {
                name: "Middleweight Spaceship",
                type: "spaceship",
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
                type: "spaceship",
                structure: [
                    [0, 0, 0, 1, 1, 0, 0],
                    [0, 1, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1, 1, 0]
                ]
            },
        ];
    }

    find(name) {
        return this.patterns.find(pattern => pattern.name === name);
    }

    getNames() {
        return this.patterns.reduce((acc, pattern) => {
            if (!acc[pattern.type]) {
                acc[pattern.type] = [];
            }
            acc[pattern.type].push(pattern.name);
            return acc;
        }, {});
    }
}

export default Patterns;