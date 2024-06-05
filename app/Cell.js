class Cell {

    constructor(state) {
        this.counter = 0;
        this.state = state;
        this.color = 'rgba(211, 211, 211, 0)';
    }

    updateState(newState) {
        this.state = newState;
        if (this.state === 1) {
            this.counter++;
            this.generateColor();
        } else {
            this.counter = 0;
            this.color = 'rgba(211, 211, 211, 0)';
        }
    }

    generateColor() {
          this.color = `rgb(0, 0, ${this.counter * 10})`;
    }
}

export default Cell;