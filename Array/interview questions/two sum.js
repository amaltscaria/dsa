// Give an array of integers, return the indices of the two numbers that add up to a given target.
// [1,3,7,9,2] => [3,4];

// Step1) Verify the constraints;
// *) Are all the numbers positive or there can be negatives;
// *) Are there duplicates in the array
// *) Will there always be a solution
// *) what do we return if there is no solution.
// *) Can there be multiple pairs that add up to the target.


// Step2) Test Cases;
// 1) Best case [1,3,7,9,2] t=9, => [3,4];
// 2) [1,3,7,9,2] t=25 => null
// 3) [] t=1 null
// 4) [3] t=3 null => because we need two numbers
// 5) [1,4] t=5 => [0, 1];

// Step 3) Come up with a solution without code.

// Step 4) Write out the solution in code

const arr = [1, 3, 7, 9, 2];
const target = 11;

// naive approach

const twoSum = (arr, target) => {
for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i]+arr[j]===target)return [i,j];
    }
}
}
console.log(twoSum(arr, target));

// optimized approach

const obj = {};


const twoSum2 = (arr, target) => {
for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]]) return [i, obj[arr[i]]];
    else {
        obj[target-arr[i]] = i;
    }
}
}
console.log(twoSum2(arr, target));

// step 5) Double check for error
// step 6) Test the solution for the test cases



