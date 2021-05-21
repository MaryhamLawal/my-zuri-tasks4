
function checkYuGioh(n) {
    let myArray = []

    if (n === null || isNaN(n)) {
        console.log(`invalid parameter: ${n}`)
    } else {
        for (let i = 1; i <= n; i++) {
            if (n == 1) {
                console.log(1);
            } else if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
                myArray.push("yu-gi-oh");

            } else if (i % 2 == 0 && i % 3 == 0) {
                myArray.push("yu-gi");
            } else if (i % 2 == 0 && i % 5 == 0) {
                myArray.push("yu-oh");
            } else if (i % 3 == 0 && i % 5 == 0) {
                myArray.push("gi-oh");
            } else if (i % 2 == 0) {
                myArray.push("yu");
            } else if (i % 3 == 0) {
                myArray.push("gi");
            } else if (i % 5 == 0) {
                myArray.push("oh");
            } else {
                myArray.push("" + i)
            }
        }
        console.log(myArray)
    }


}

//checkYuGioh("10");