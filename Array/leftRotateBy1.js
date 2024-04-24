const leftRotate = arr => {
    let start = arr[0];
    for(let i = 1; i < arr.length ; i++) {
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = start;
    return arr;
}

console.log(leftRotate([2,34,5,46,2,1,1,3,4,5]));

// output : 34,5,46,2,1,1,,4,5,2;