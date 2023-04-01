// function powFirst(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//     //   result *= x;
//         result = result * x
//     }
//     return result;
// }

// const powSecond = (x, n) => {
//     return x ** n
// }

// const powThird = (x, n) => {
//     return Math.pow(x, n)
// }

// console.log(powSecond(5,2))

// let i = 2
// while( i <= 20) {
//     if(i % 2 === 0) {
//         console.log(i)
//     }
//     i++
// }

// const f = 20

// function isPrime(number) {
//     let result = true

//     for(let i = number - 1; i >= 2; i--) {
//         if (number % i === 0) {
//             result = false
//             break
//         }
//     }

//     return result
// }

// function pushInarr(n) {
//     const arr = []
//     for(let i = 1; i<= n; i++) {
//         arr.push(i)
//     }
//     console.log(arr)
// }

// pushInarr(30)

// F(n-1) + F(n-2)

// function logFib(number) {
//   let x = 1, y = 1;
//   for (let i = 0; i < number - 2; i++) {
//     let z = x + y
//     x = y
//     y = z
//   }
//   console.log(y)
// }

// logFib(1)

// function logFactorial(number) {
//   let result = 1
//   for(let i = 1; i <= number; i++) {
//     result *= i
//   }
//   console.log(result)
// }

// logFactorial(5)

// function getHours(days) {
//   return days * 24
// }

// console.log(getHours())

// const user = {
//   name: "John",
//   surname: "Smith",
// }
// console.log(user)

// user.name = "Max"
// console.log(user)

// delete user.name
// console.log(user)

// function isEmpty(n) {
//   for(let key in n) {
//     return false
//   }
//   return true
// }

// let some = {}

// console.log(isEmpty(some))

// some["name"] = "Max"

// console.log(isEmpty(some))

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0

// for(let key in salaries) {
//   console.log(sum)
//   sum = sum + salaries[key]
// }

// console.log(sum)

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(name) {
//   for(let key in name) {
//     if(typeof name[key] == 'number') {
//       name[key] *= 2
//     }
//   }
// }

// multiplyNumeric(menu);

// console.log(menu)

// function logPrime(n) {
//     for (let i = 1; i <= n; i++) {
//         if(isPrime(i)) {
//             console.log(i)
//         }
//     }
// }

// logPrime(10)

// for(let i = 2; i <= 20; i = i+2) {
//     console.log(i)
// }

//   let x = prompt("x?", '');
//   let n = prompt("n?", '');

//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
//     alert( pow(x, n) );
//   }

// Написать функцию которая возвращает цвет фрукта. Возможные фрукты это: апельсин, банан, яблоко

// getColor("апельсин") => "оранжевый"

// function getColor(fruit) {

//   if(fruit === "апельсин") {
//     console.log("оранжевый")
//   } else if(fruit === "банан") {
//     console.log("желтый")
//   } else if(fruit === "яблоко") {
//     console.log("зеленый")
//   }
// }

// function getColor(fruit) {
//   const fruitColors = {
//     яблоко: "зеленый",
//     апельсин: "оранжевый",
//     банан: "желтый",
//   };

//   return fruitColors[fruit];
// }

// console.log(getColor("яблоко"));
// console.log(getColor("апельсин"));
// console.log(getColor("банан"));

// function countCircle(r) {
//   const circleField = Math.PI * r * r;
//   const circleLenght = 2 * Math.PI * r;

//   return { circleField, circleLenght }
// }

// console.log(countCircle(5));

// function generatePassword(n) {
//   let password = "";
//   const words =
//     "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
//   const max_position = words.length;
//   for (i = 0; i < n; i++) {
//     position = Math.random() * max_position;
//     password = password + words.substring(position, position + 1);
//   }
//   return password;
// }

// console.log(generatePassword(10));
// console.log(generatePassword(10));
// console.log(generatePassword(10));
// console.log(generatePassword(10));
// console.log(generatePassword(10));
// console.log(generatePassword(10));
// console.log(generatePassword(10));

// function isLeap(year) {
//   return year % 4 === 0
// }

// const isLeap = (year) => year % 4 === 0
    
// console.log(isLeap(2024))

// var corners = {
//     paper: "paper",
//     rock: "rock",
//     scissors: "scissors",
// };

// var randCorner = Math.floor(Math.random() * Object.keys(corners).length);

// var res = Object.values(corners);

// console.log(res[randCorner]);








function gameRPS() {
  const userChoice = prompt("Choose paper, rock or scissors");

//   const choices = {
//     0: "paper",
//     1: "rock",
//     2: "scissors"
//   }

  const choices = ["rock" , "paper", "scissors"]

  let computerChoiceKey = Math.floor(Math.random() * Object.keys(choices).length);

  const computerChoice = choices[computerChoiceKey]
  
  const result = {
    paper: {
        paper: "Drow",
        rock: "Lose",
        scissors: "Win"
    },
    rock: {
        paper: "Win",
        rock: "Drow",
        scissors: "Lose"
    },
    scissors: {
        paper: "Lose",
        rock: "Win",
        scissors: "Drow"
    }
  }

  return result[computerChoice][userChoice]
}

console.log(gameRPS()) 
