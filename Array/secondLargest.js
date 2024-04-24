const secondLargest = arr => {

    let largest = 0;
    let sLargest = -1;
    for(let i = 1; i < arr.length ; i++) {
        if(arr[i] > arr[largest]){
            sLargest = largest;
            largest = i;
        }else if(arr[i] < arr[largest]){
            if(arr[i] > arr[sLargest] || sLargest === -1)
            sLargest = i;
        }
    }
    return arr[sLargest];

}

console.log(secondLargest([2,3,54,6,5,7,76,45]));
console.log(secondLargest([100,3,54,6,5,7,76,45]));

// ans: 54

