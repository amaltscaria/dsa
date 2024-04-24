const moveZeros = arr => {
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]!==0){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    return arr;
}

console.log(moveZeros([1,0,4,3,4,0,0,6,0]));