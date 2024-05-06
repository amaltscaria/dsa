const merge = (arr1, arr2) => {
    let left = 0; 
    let right = 0;
    const res = [];
    let index = 0;
    while(left < arr1.length && right < arr2.length) {
        if(arr1[left]<=arr2[right]){
            res[index] = arr1[left];
            left++;
            index++;
        }else {
            res[index] = arr2[right];
            right++;
            index++; 
        }
        console.log(res)
    }
    while(left < arr1.length) {
        res[index] = arr1[left];
        left++;
        index++;
    }
    while(right < arr2.length) {
        res[index] = arr2[right];
        right++;
        index++;
    }
    return res;
}

const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
    
}
const arr = [3,4,2,6,1,6,7,8]
console.log(mergeSort(arr));