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


function fib(n) {
  let cur = 1, prev = 1;
  for (let i = 1; i <= n; i++) {
    [cur, prev] = [cur + prev, cur];
    console.log(prev, cur)
  }
}

  console.log(fib(10))


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