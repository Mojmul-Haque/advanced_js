// function stopWatch() {
//     let count = 0;
//     return function() {
//         let result = count++;
//         return result;

//     }


// }

// let output = stopWatch()
// let output2 = stopWatch()
// console.log(output())
// console.log(output())
// console.log(output())

// console.log(output2())
// console.log(output2())
// console.log(output())


// inAnother example

const x = 10;

const outerfun = (a) => {
    const b = 20;
    const innerFun = () => {
        let sum = a + b + x
        console.log(`this is sum of inner function sum in closer. ${sum}`);
        return sum
    }
    return innerFun
}

const innerFun = outerfun(6);
console.log('innerfunction result ', innerFun())