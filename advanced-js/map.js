let number = [3, 4, 5, 6, 7]
    // all numbers must do square; like = 3*3 = 9;
let number2 = []
for (let i = 0; i < number.length; i++) {
    let square = number[i]
    let result = square * square;
    number2.push(result)
}
console.log(number2)

let show = []
number.map(function(element, index, array) {
    let arr = (element * element * element)
    show.push(arr);
    console.log(element, index, array)
})

console.log('squre', show)

let output = number.map(element => element * element * element)
console.log('arrow function', output)