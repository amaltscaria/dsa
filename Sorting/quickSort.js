const pivotElement = (arr, left = 0, right = arr.length-1) => {
let swapIndex = left;
let pivot = arr[left];
for(let i = left+1; i < arr.length; i++) {
    if(arr[i]<pivot){
        swapIndex++;
        [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
}
[arr[swapIndex], arr[left]] = [arr[left], arr[swapIndex]];

    return swapIndex;
}

const quick = (arr, left = 0, right = arr.length-1)=> {
    if(left < right) {
    let pivot = pivotElement(arr, left, right);
    quick(arr, left, pivot -1);
    quick(arr, pivot+1, right)
    }
    return arr;
}
console.log(quick([4,1,51,6,7,84,3,3,2]));