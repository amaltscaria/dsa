const removeDuplicates = arr => {
    let j = 0;
    for(let i = 0; i < arr.length ; i++) {
        if(arr[i]!==arr[i+1]) {
           arr[j] = arr[i]
           j++;
        }
    }
    arr.length -= (arr.length-j)
    return arr;   
}


console.log(removeDuplicates([1,2,3,3,4,5,5,5,5,6,7,7,8]));

// output: 1,2,3,4,5,6,7,8