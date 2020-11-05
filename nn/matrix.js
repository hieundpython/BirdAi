class Matrix {
    constructor (rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
    }

    copy() {
        let m = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j =0; j < this.cols; j++) {
                m.data[i][j] = this.data[i][j];
            }
        }

        return m;
    }

    static fromArray(arr) {
        return new Matrix(arr.length, 1).map((e, i) => arr[i]);
    }

    static subtract(a, b) {
        if (a.rows !== b.rows || a.cols !== b.cols) {
            console.log("Columns and rows of A must match colums and rows of B");
            return;
        }

        return new Matrix(a.rows, a.cols).map((_, i, j) => a.data[i][j] - b.data[i][j]);
    }

    toArray() {
        let arr = [];
        for (let i =0; i < this.rows; i++) {
            for (let j =0; j < this.rows; j++) {
                arr.push(this.data[i][j]);
            }
        }

        return arr;
    }

    randomize() {
        return this.map(() => Math.random() * 2 -1);
    }
    
    add(n) {
        if (n instanceof Matrix) {
            if (this.rows !== n.rows || this.cols !== n.cols) {
                console.log("Columns and rows A must match columns and rows B");
                return;
            } 
            return this.map((e, i, j) => e + n.data[i][j]);
        } else {
            return this.map(e => e + n);
        }
    }

    static transpose(matrix){
        return new Matrix(matrix.cols, matrix.rows).map((_,i,j) => matrix.data[j][i]);
    }

    static multiply(a, b) {
        if (a.cols !== b.rows) {
            console.log('Columns of A must match rows of B');
            return;
        }

    }


    multiply() {

    }

    map(func) {
        for (let i =0; i< this.rows; i++) {
            for (let j =0; j < this.cols; j++) {
                let val = this.data[i][j];
                this.data[i][j] = func(val, i, j);
            }
        }
        return this;
    }

    static map(matrix, func) {
        return new Matrix(matrix.rows, matrix.cols).map((e, i, j) => func(matrix.data[i][j], i, j));
    }

    print() {
        console.table(this.data);
        return this;
    }

    serialize() {
        return JSON.stringify(this);
    }

    static deserialize(data) {
        if (typeof data == 'string') {
            data = JSON.parse(data);
        }
        let matrix = new Matrix(data.rows, data.cols);
        matrix.data = data.data;
        return matrix;
    }
}

if (typeof module !== 'undefined') {
    module.export = Matrix;
}