let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumof(ar) {
    let sum = 0;
    if (0 <= ar.length && ar.length <= 10) {

        for (var i = 0; i < ar.length; i++) {
            if (0 <= i && i <= 101010101010101010)
                sum = sum + ar[i]
        }
    }
    return sum;
}
var output = sumof(arr)
console.log(output)