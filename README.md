# Conway's Game of Life

A very simple implementation of Conway's Game of Life in Javascript.

## About

The approach I use is not the most efficient, as it uses a 2D array to represent the grid and updates the grid in place. This is not a problem for small grids, but it can be a bottleneck for larger grids.
I plan to (at least try) implement a more efficient version using [Hashlife](https://en.wikipedia.org/wiki/Hashlife) by Bill Gosper.

Furthermore, I use the toroidal grid approach, which means that the grid wraps around itself. 
This is a common approach in Game of Life implementations to avoid simulating an infinite grid, 
but it distorts some patterns evolution (like metuselahs and others that needs to continue to grow).

I also plan to add more patterns and features in the future.

## How to run

Just open the `index.html` file in your browser (The project is not hosted anywhere for now, but will be soon).

## How to use

- Select a pattern from the dropdown menu
- Click the `Start` button to start the simulation
- Click the `Pause` button to pause the simulation
- Click the `Stop` button to reset the simulation

## Patterns

### Still Life Patterns

- **Block**: A 2x2 square that remains static through generations.
- **Beehive**: A six-cell pattern that remains static through generations.
- **Loaf**: An eight-cell pattern that remains static through generations.
- **Boat**: A five-cell pattern that remains static through generations.
- **Tub**: A four-cell pattern that remains static through generations.

### Oscillator Patterns

- **Blinker**: A three-cell pattern that oscillates every generation.
- **Toad**: A six-cell pattern that oscillates every 2 generations.
- **Beacon**: An eight-cell pattern that oscillates every 2 generations.
- **Pulsar**: A 48-cell pattern that oscillates every 3 generations.
- **Pentadecathlon**: A 10-cell pattern that oscillates every 15 generations.
- **Figure Eight**: A 24-cell pattern that oscillates every 8 generations.

### Spaceship Patterns

- **Glider**: A five-cell pattern that translates itself across the grid.
- **Lightweight Spaceship (LWSS)**: A nine-cell pattern that translates itself across the grid.
- **Middleweight Spaceship (MWSS)**: An eleven-cell pattern that translates itself across the grid.
- **Heavyweight Spaceship (HWSS)**: A thirteen-cell pattern that translates itself across the grid.

## About Conway's Game of Life

Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.
One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively).
Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.
At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

These rules, which compare the behavior of the automaton to real life, can be condensed into the following:

1. Any live cell with two or three live neighbours survives.
2. Any dead cell with three live neighbours becomes a live cell.
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

The initial pattern constitutes the seed of the system.

Source: [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## Authors and Contributors

- Léo Paillard