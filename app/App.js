import Grid from "./Grid.js";
import Patterns from "./Patterns.js";

class App {

    canvas = document.getElementById('game');
    generation = document.getElementById('generation');
    population = document.getElementById('population');
    play = document.getElementById('play');
    pause = document.getElementById('pause');
    reset = document.getElementById('reset');
    patternsSelect = document.getElementById('patterns');
    radiusSelect = document.getElementById('radius');
    isPlaying = false;
    isPaused = false;

    constructor() {
        this.radius = 4;
        this.iterations = 0;

        this.grid = new Grid();
        this.grid.randomInit(50, 50);

        this.patterns = new Patterns();

        let names = this.patterns.getNames();
        names.Random = ["Random"];

        for (let type in names) {
            let optGroup = document.createElement('optgroup');
            optGroup.label = type;
            names[type].forEach(name => {
                let option = document.createElement('option');
                option.value = name;
                option.innerText = name;
                optGroup.appendChild(option);
            });
            this.patternsSelect.appendChild(optGroup);
        }

        this.patternsSelect.value = "Random";

        this.addListeners();
    }

    init() {
        this.initCanvas();
        this.drawGrid();
    }

    addListeners() {
        this.play.addEventListener('click', () => {
            if (!this.isPlaying) {
                this.initGame();
                this.interval = this.startInterval();
                this.isPlaying = true;
                this.isPaused = false;
            }
        });

        this.pause.addEventListener('click', () => {
            if (this.isPlaying) {
                clearInterval(this.interval);
                this.isPlaying = false;
                this.isPaused = true;
            }
        });

        this.reset.addEventListener('click', () => {
            this.resetGame();
        });

        this.patternsSelect.addEventListener('change', () => {
            this.resetGame();
            if (this.patternsSelect.value === "Random") {
                this.grid.randomInit(50, 50);
            } else {
                const pattern = this.patterns.find(this.patternsSelect.value);
                this.grid.patternInit(pattern);
            }
            this.drawGrid();
        });

        this.radiusSelect.addEventListener('change', () => {
            this.radius = parseInt(this.radiusSelect.value);
            this.init();
            this.drawGrid();
        });
    }

    initGame() {
        if (!this.isPaused) {
            switch (this.patternsSelect.value) {
                case "Random":
                    this.grid.randomInit(50, 50);
                    break;
                default:
                    const pattern = this.patterns.find(this.patternsSelect.value);
                    this.grid.patternInit(pattern);
                    break;
            }
        }
    }

    resetGame() {
        if (this.interval) {
            clearInterval(this.interval);
        }

        this.isPlaying = false;
        this.isPaused = false;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.grid = new Grid();
        this.grid.init(50, 50);
        this.generation.innerText = "0";
        this.population.innerText = "0";
        this.iterations = 0;
        this.drawGrid();
    }

    initCanvas() {
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '50%';
        this.canvas.style.top = '62%';
        this.canvas.style.transform = 'translate(-50%, -50%)';
        this.canvas.style.border = '3px solid black';
        this.canvas.style.borderRadius = '5px';
        this.canvas.style.backgroundColor = 'lightgray';

        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');

        for (let x = 0; x < 50; x++) {
            for (let y = 0; y < 50; y++) {
                this.ctx.fillStyle = 'lightgray';
                this.ctx.beginPath();
                this.ctx.arc(x * 11, y * 11, 4, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        this.ctx.stroke();
    }

    startInterval() {
        return setInterval(() => {
            this.grid.updateGrid();
            this.generation.innerText = '' + this.iterations;
            this.population.innerText = '' + this.grid.getPopulation();
            this.drawGrid();
            this.iterations++;
        }, 100);
    }

    drawGrid() {
        const cellSize = Math.min(this.canvas.width, this.canvas.height) / 50;
        const radius = Math.min(cellSize / 2, this.radius);

        for (let x = 0; x < 50; x++) {
            for (let y = 0; y < 50; y++) {
                this.ctx.fillStyle = this.grid.grid[x][y].color;
                this.ctx.beginPath();
                this.ctx.arc(x * cellSize + radius, y * cellSize + radius, radius, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }
    }
}

export default App;