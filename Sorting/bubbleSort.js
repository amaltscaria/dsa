const bubble = arr => {
    for(let i = 0; i < arr.length - 1; i++) {
        let swap = false;
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap = true;
            }
        }
        if(swap === false) break;
    }
}

const arr = [34,43,23,4,54,54,654,67];
console.log(arr);
bubble(arr);
console.log(arr);

//worst case O(n * n) => best case O(n) => if data is very nearly sorted or sorted 