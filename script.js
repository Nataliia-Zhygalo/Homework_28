
/*
Створити клас SuperMath.
Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak.
 Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. 
 Якщо хоче, зробити математичну дію znak (яка описана в прототипі), 
 інакше - запитати введення нових даних через метод input() класу SuperMath.

Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

p = new SuperMath();
p.check(obj); // --> no p.input() -> 3 prompt -> рахує

*/

 obj = {
   X: 12,
   Y: 3,
   sign: "/",
}

class superMath {
  check (currentInput) {
    let answer = confirm(`Do you want to do this operation: ${currentInput.X} ${currentInput.sign} ${currentInput.Y}?`);
          if (answer === true) {
           return true;
       }
           else  {
           this.input
       }
   }

input() {
    let getNewInput =  {};
        getNewInput.X = +prompt('Enter first operand X','1,2...');
        getNewInput.Y = +prompt('Enter second operand Y','1,2...');
        getNewInput.sign = prompt('Enter type of operation','+, - ,/ ,* ,%');

return (this.doMath(getNewInput));
}

 doMath (inputOperation) {
       if (inputOperation.sign === '+') {
               return inputOperation.X + inputOperation.Y;
       } else if(inputOperation.sign === '-') {
               return inputOperation.X - inputOperation.Y;
       } else if (inputOperation.sign === '*') {
               return inputOperation.X * inputOperation.Y;
       } else if (inputOperation.sign === '/') {
               return inputOperation.X / inputOperation.Y;
       } else if (inputOperation.sign === '%') {
               return inputOperation.X % inputOperation.Y;
       }
   }
}
let result = 0;
let superMathresult = new superMath();
console.log(superMathresult);
superMathresult.check(obj) ?  result = superMathresult.doMath(obj) : result = superMathresult.input();
alert(`Your result is ${result}`)


    