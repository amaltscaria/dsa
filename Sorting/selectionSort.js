const selection = arr => {
    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j]<arr[min])min = j;
        }
        if(min!==i)[arr[min], arr[i]] = [arr[i], arr[min]];
    }
}


const arr = [3,53,345,23,466,7,8,1];
console.log(arr);
selection(arr);
console.log(arr);

