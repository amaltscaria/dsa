const insertion = arr => {
    for(let i = 1; i < arr.length; i++) {
        let val = arr[i];
        let index = i;
      for(let j = i-1; j >=0 && val<arr[j]; j--){
        arr[j+1] = arr[j];
        index = j;
      }  
      arr[index] = val;
    }
}




const arr = [3,5,4,2,1];
// const arr = [3,5,4,2,2,46,67,543,2,3,2,1];
console.log(arr);
insertion(arr);
console.log(arr);
