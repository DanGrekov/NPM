'use strict'
let calculator = {
    read() {
      this.firstNum = +prompt('Первое занчение', 0);
      this.secondNum = +prompt('А второе?', 0);
    },
    
    sum() {
      return this.firstNum + this.secondNum;
    },
  
    mul() {
      return this.firstNum * this.secondNum;
    },
  
  
  };
  
  calculator.read();
  console.log(calculator.sum());
  console.log(calculator.mul());