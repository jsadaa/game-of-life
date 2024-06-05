import Cell from "./Cell.js";

class Grid {

    constructor() {
        this.grid = [];
    }

    init(rows, cols) {
        for (let i = 0; i < rows; i++) {
            this.grid[i] = [];
            for (let j = 0; j < cols; j++) {
                this.grid[i][j] = new Cell(0);
            }
        }
    }

    randomInit(rows, cols) {
        for (let i = 0; i < rows; i++) {
            this.grid[i] = [];
            for (let j = 0; j < cols; j++) {
                this.grid[i][j] = new Cell(Math.round(Math.random()));
            }
        }
    }

    patternInit(pattern) {
        const x = Math.floor((this.grid.length - pattern.structure.length) / 2);
        const y = Math.floor((this.grid[0].length - pattern.structure[0].length) / 2);
        this.setPattern(pattern, x, y);
    }

    setPattern(pattern, x, y) {
        for (let i = 0; i < pattern.structure.length; i++) {
            for (let j = 0; j < pattern.structure[i].length; j++) {
                this.grid[x + j][y + i].updateState(pattern.structure[i][j]);
            }
        }
    }

    getAliveNeighbors(i, j) {
        let count = 0;
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if (x === 0 && y === 0) {
                    continue;
                }
                if (this.grid[i + x] && this.grid[i + x][j + y]) {
                    count += this.grid[i + x][j + y].state;
                }
            }
        }
        return count;
    }

    updateGrid() {
        let newGrid = [];
        for (let i = 0; i < this.grid.length; i++) {
            newGrid[i] = [];
            for (let j = 0; j < this.grid[i].length; j++) {
                const aliveNeighbors = this.getAliveNeighbors(i, j);
                if (this.grid[i][j].state === 1) {
                    if (aliveNeighbors < 2 || aliveNeighbors > 3) {
                        newGrid[i][j] = 0;
                    } else {
                        newGrid[i][j] = 1;
                    }
                } else {
                    if (aliveNeighbors === 3) {
                        newGrid[i][j] = 1;
                    } else {
                        newGrid[i][j] = 0;
                    }
                }
            }
        }

        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                this.grid[i][j].updateState(newGrid[i][j]);
            }
        }
    }

    getPopulation() {
        let count = 0;
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                count += this.grid[i][j].state;
            }
        }
        return count;
    }
}

export default Grid;