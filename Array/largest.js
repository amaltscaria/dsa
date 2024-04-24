const largest = arr => {
    let index = 0;
    for(let i = 1; i < arr.length ; i++) {
        if(arr[i] > arr[index]) {
            index = i;
        }
    }
    return index;
}

const arr = [3,52,23,6345,45,3645,6345,453]

console.log(largest(arr));