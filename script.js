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



// function gameRPS() {
//   const userChoice = prompt("Choose paper, rock or scissors");

//   const choices = ["rock" , "paper", "scissors"]

//   let computerChoiceKey = Math.floor(Math.random() * Object.keys(choices).length);

//   const computerChoice = choices[computerChoiceKey]
  
//   const result = {
//     paper: {
//         paper: "Drow",
//         rock: "Lose",
//         scissors: "Win"
//     },
//     rock: {
//         paper: "Win",
//         rock: "Drow",
//         scissors: "Lose"
//     },
//     scissors: {
//         paper: "Lose",
//         rock: "Win",
//         scissors: "Drow"
//     }
//   }

//   return result[computerChoice][userChoice]
// }

// console.log(gameRPS()) 

// function camelize(str) {
//   return str.split('-').map(function(word, index) {
//     if(index == 0) {
//       return word
//     }
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   }).join('')
// }

// console.log(camelize("my-short-string"));

// function filterRange(arr, a, b) {
//   let result = []

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] >= a && arr[i] <= b) {
//       result.push(arr[i])
//     }
//   }
//   return result
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log( filtered );

// console.log( arr );

// function filterRangeInPlace(arr, a, b) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1)
//       i--
//     }
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// filterRangeInPlace(arr, 2, 3);

// console.log(arr);




// let arr = [5, 2, 1, -10, 8];

// arr.sort(function(a, b) {
//   return a - b
// });


// console.log( arr ); // 8, 5, 2, 1, -10

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//     fullname: `${user.name} ${user.surname}`,
//     id: user.id
// }))

// console.log( usersMapped[2].fullname )


// function getAverageAge(users) {
//     let sumAge = 0
//     for (let i = 0; i < users.length; i++) {
//         sumAge += users[i].age
//     }
 
//     let middleAge = sumAge / users.length

//     return Math.round(middleAge) 
// }


// let vasya = { name: "Вася", age: 26 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// const arr = [1,6,3,1234,5,67,]

// arr.forEach((elem, index) => arr2[index] = elem * 2)

// const arr2 = arr.map((elem) => elem * 2)

// const result = arr.includes(1234)

// console.log(result)



// const arr2 = []

// const arr2 = arr.filter((elem) => elem < 6)

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < 6) {
//         arr2.push(arr[i])
//     }
// }

// console.log(arr2)


// const arr = [
//     {
//         id: 1,
//         name: "Illia"
//     },
//     {
//         id: 2,
//         name: "Kolya"
//     },
//     {
//         id: 3,
//         name: "Pawel"
//     },
// ]

// const arr2 = arr.map((elem, index) => ({
//     id: elem.id,
//     name: elem.name,
//     index: index,
// }))

// console.log(arr)

// массивы ЗАДАНИЯ


// let arr = [
//     {
//         name: "Illia",
//         age: 28,
//         salary: 1599,
//     },
//     {
//         name: "Kolya",
//         age: 18,
//         salary: 2100,
//     },
//     {
//         name: "Pawel",
//         age: 20,
//         salary: 2000,
//     },
// ]

// console.log(arr)


// function checkSenior(arr) {
//     let oldestAge = 0
//     let oldestEmployee
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i].age > oldestAge) {
//             oldestAge = arr[i].age;
//             oldestEmployee = arr[i].name;
//         }
//     }
//     return oldestEmployee
// }

// console.log(checkSenior(arr))


// let products = [
//     { 
//         name: "Футболка", 
//         price: 900, 
//         rating: 4.5 
//     },
//     { 
//         name: "Джинсы", 
//         price: 2500, 
//         rating: 3.9
//     },
//     { 
//         name: "Кроссовки", 
//         price: 5000, 
//         rating: 4.9 
//     },
//     { 
//         name: "Рюкзак", 
//         price: 3000, 
//         rating: 4.7 
//     },
//     { 
//         name: "Часы", 
//         price: 8000, 
//         rating: 4.6 
//     }
//   ];

// const arr = products.filter((elem) => {
//     return elem.price > 1000 && elem.rating > 4
// })

// console.log(arr)
  


// const products = [
//     { 
//         name: "Телефон", 
//         category: "Электроника", 
//         price: 20000 
//     },
//     { 
//         name: "Футболка", 
//         category: "Одежда", 
//         price: 1000 
//     },
//     { 
//         name: "Ноутбук", 
//         category: "Электроника", 
//         price: 50000 
//     },
//     { 
//         name: "Шорты", 
//         category: "Одежда", 
//         price: 1500 
//     },
// ];
  

// function groupProductsByCategory(products) {
//     const groupedProducts = {};
//     products.forEach(elem => {
//       if (!groupedProducts[elem.category]) {
//         groupedProducts[elem.category] = [];
//       }
//       groupedProducts[elem.category].push(elem);
//     });
//     return groupedProducts;
//   }

// console.log(groupProductsByCategory(products))






// const arr = [
//     [1,5,3],
//     [5,7,2],
//     [9,8,4],
// ]

// function sumTable(arr, index, type) {
//     let sum = 0;
//     if (type === 'row') {
//         arr[index].forEach((elem) => {
//           sum += elem;
//         });
//       } else if (type === 'column') {
//         arr.forEach((elem) => {
//           sum += elem[index];
//         });
//       }
//       return sum;
//   }

//   console.log(sumTable(arr, 1, 'column'))

// const arr = [1, 2, 3, -5, -2, 4, 5, -6, 10, 20];

// function sumPositive(arr) {
//     let sum = 0
//     let average = 0
//     arr.forEach(elem => {
//         if(elem > 0){
//             sum += elem
//             average = Math.round(sum / arr.length) 
//         }
//     });
//     return average
// }

// console.log(sumPositive(arr))


// const student = {
//     name: "Иван",
//     age: 20,
//     city: "Москва",
//     grades: [5,3,4,4,5,8]
// };

// function middleGrade(obj) {
//     let sumMarks = 0
//     let averageMarks = 0
//     const marks = obj.grades
//     marks.forEach(elem => {
//         sumMarks += elem
//         averageMarks = Math.round((sumMarks / marks.length) * 10) / 10
//     });
//     return averageMarks
// }

// console.log(middleGrade(student))


// const cities = ["Варшава", "Краков", "Лодзь", "Вроцлав", "Познань", "Гданьск", "Щецин", "Люблин", "Катовице", "Быдгощ"];

// function filterToUpper(arr) {
//     const filteredCities = arr.filter(elem => elem.includes("а")).map(city => {
//         return city.toUpperCase()
//     })
    
//     return filteredCities
// }

// console.log(cities)

// console.log(filterToUpper(cities))


// const salesData = {
//     "Chocolate": 100,
//     "Coffee": 50,
//     "Tea": 75,
//     "Juice": 120,
//     "Cookies": 200
//   };

//   function findBestProd(obj) {
//     let maxSales = 0
//     let bestProd = ""
//     for(let prod in obj) {
//         if(salesData[prod] > maxSales) {
//             maxSales = salesData[prod]
//             bestProd = prod
//         }
//     }
//     return bestProd
//   }

//   console.log(findBestProd(salesData))

// const students = [
//     {
//       name: "Иван",
//       course: 2,
//       grades: [5, 4, 5, 5, 5, 5, 5, 5, 5]
//     },
//     {
//       name: "Алексей",
//       course: 3,
//       grades: [4, 4, 4, 5, 2, 1, 1,]
//     },
//     {
//       name: "Мария",
//       course: 1,
//       grades: [5, 5, 5, 5]
//     }
//   ];

  
//   function findStudentsWithHighAverage(arr) {

//     const topStudents = students.filter(student => {
//         const average = student.grades.reduce((total, grade) => total + grade) / student.grades.length;
//         return average > 4.5;
//       }).map(({ name, course }) => ({ name, course }));
//       return topStudents
//   }

//   console.log(findStudentsWithHighAverage(students))


const products = [
    { name: "Телефон Samsung", price: 15000, rating: 4.5, available: true },
    { name: "Ноутбук Lenovo", price: 45000, rating: 4.2, available: true },
    { name: "Планшет Apple", price: 35000, rating: 4.8, available: false },
    { name: "Умные часы Xiaomi", price: 5000, rating: 4.1, available: true },
    { name: "Фотоаппарат Canon", price: 25000, rating: 4.4, available: false }
  ];

  function sortProduct(arr) {
    return products.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        }
        if (a.rating > b.rating) {
          return -1;
        } else if (a.rating < b.rating) {
          return 1;
        } 
    })
  }

  console.log(sortProduct(products))




