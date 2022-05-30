class SumApp {
  constructor() {
    // constructor wird beim Erstellen ausgeführt
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    let sum = 0;
    console.log(this.numbers.length);

    for (let i = 0; i < this.numbers.length; i++) {
      sum += this.numbers[i];
    }
    return sum;
  }

  reset() {
    this.numbers = [];
  }

  // Add you solution here
}

let sumApp = new SumApp();
