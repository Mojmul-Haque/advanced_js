// 
// let a = [-5, -10, -25]
// let b = [-2, 12, 5]

function compareTriplets(a, b) {
    let point = []
    let forA = 0;
    let forB = 0;
    let text;

    for (let i = 0; i < a.length, i < b.length; i++) {
        let c = a[i];
        let d = b[i]

        if (c > d && 1 <= c && c <= 100 && 1 <= d && d <= 100) {
            forA = forA + 1;
        } else if (c < d && 1 <= c && c <= 100 && 1 <= d && d <= 100) {
            forB = forB + 1;
        } else if (c === d && 1 <= c && c <= 100 && 1 <= d && d <= 100) {
            text = 'nobody receives a point.'
        } else {
            text = 'wrong value'
        }

    }



    point.push(forA)
    point.push(forB)

    return point;
}