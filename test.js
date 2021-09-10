(function () {
    let result = []
    let temp = [1, 2, 3]
    result.push(temp)
    temp.push(4)
    temp = []
    console.log(result)
    // for (let i = 0; i < 10; i++) {
    //     if (temp.length === 0) {
    //         result.push(temp)
    //     }
    //     temp.push(i)
    //     if (temp.length === 3) {
    //         temp = []
    //     }
    // }
    // console.log(result)
})()