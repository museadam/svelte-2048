

export class Game {
    grid: number[][] = $state();
    score: number = $state();;

    constructor() {
        this.reset();
    }

    reset() {
        this.grid = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        this.score = 0;
        this.addRandomTile();
        this.addRandomTile();
    }

    addRandomTile() {
        const emptyCells = [];
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                if (this.grid[row][col] === 0) {
                    emptyCells.push({ row, col });
                }
            }
        }

        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const { row, col } = emptyCells[randomIndex];
            this.grid[row][col] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    // ... other game logic methods like moveUp, moveDown, moveLeft, moveRight

    moveUp() {
        for (let col = 0; col < 4; col++) {
            for (let row = 1; row < 4; row++) {
                let currentRow = row;
                while (currentRow > 0 && this.grid[currentRow - 1][col] === 0) {
                    this.grid[currentRow - 1][col] = this.grid[currentRow][col];
                    this.grid[currentRow][col] = 0;
                    currentRow--;
                }

                if (currentRow > 0 && this.grid[currentRow - 1][col] === this.grid[currentRow][col]) {
                    this.grid[currentRow - 1][col] *= 2;
                    this.grid[currentRow][col] = 0;
                    this.score += this.grid[currentRow - 1][col];
                }

            }
        }
        this.addRandomTile();

    }

    moveDown() {
        for (let col = 0; col < 4; col++) {
            for (let row = 2; row >= 0; row--) {
                let currentRow = row;
                while (currentRow < 3 && this.grid[currentRow + 1][col] === 0) {
                    this.grid[currentRow + 1][col] = this.grid[currentRow][col];
                    this.grid[currentRow][col] = 0;
                    currentRow++;
                }

                if (currentRow < 3 && this.grid[currentRow + 1][col] === this.grid[currentRow][col]) {
                    this.grid[currentRow + 1][col] *= 2;
                    this.grid[currentRow][col] = 0;
                    this.score += this.grid[currentRow + 1][col];
                    console.log(this.grid)
                }
            }
        }
        this.addRandomTile();

    }

    moveLeft() {
        for (let row = 0; row < 4; row++) {
            for (let col = 1; col < 4; col++) {
                let currentCol = col;
                while (currentCol > 0 && this.grid[row][currentCol - 1] === 0) {
                    this.grid[row][currentCol - 1] = this.grid[row][currentCol];
                    this.grid[row][currentCol] = 0;
                    currentCol--;
                }

                if (currentCol > 0 && this.grid[row][currentCol - 1] === this.grid[row][currentCol]) {
                    this.grid[row][currentCol - 1] *= 2;
                    this.grid[row][currentCol] = 0;
                    this.score += this.grid[row][currentCol - 1];
                }
            }
        }
        this.addRandomTile();

    }

    moveRight() {
        for (let row = 0; row < 4; row++) {
            for (let col = 2; col >= 0; col--) {
                let currentCol = col;
                while (currentCol < 3 && this.grid[row][currentCol + 1] === 0) {
                    this.grid[row][currentCol + 1] = this.grid[row][currentCol];
                    this.grid[row][currentCol] = 0;
                    currentCol++;
                }

                if (currentCol < 3 && this.grid[row][currentCol + 1] === this.grid[row][currentCol]) {
                    this.grid[row][currentCol + 1] *= 2;
                    this.grid[row][currentCol] = 0;
                    this.score += this.grid[row][currentCol + 1];
                }
            }
        }
        this.addRandomTile();

    }

}