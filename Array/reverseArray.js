const reverse = arr => {
    for(let i = 0; i < Math.floor(arr.length/2); i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    }
    return arr;
}

console.log(reverse([3,4,5,34,24,5245,4523,54,5,676]));