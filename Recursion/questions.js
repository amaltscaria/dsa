// 1)  Print n to 1 using recursion
// Sample i/p - 5 , o/p => 5, 4, 3, 2, 1

const recursion = n => {
    if(n === 0) return;
    console.log(n);
    recursion(n - 1);
}

recursion(5);

// methodology => Think of a smaller problem whose solution can solve the given problem with some extra steps.
 
console.log('*-------------------*');

// 2) Print 1 to n using recursion
const recursion2 = (i, n) => {
    if(i === n + 1 ) return ;
    console.log(i);
    recursion2(i+1, n);
}
recursion2(1, 5);
console.log('*-------------------*');
const alternativeApproach = n => {
    if(n===0)return;
    alternativeApproach(n-1);
    console.log(n);
}
alternativeApproach(5);

console.log('*-------------------*');
// Palindrome Check using recursion

const palindrome = (word, start, end) => {
    if(start>=end)return true;
    if(word[start]!==word[end])return false;
    return palindrome(word, start+1, end-1);
}

console.log(palindrome('amalama4', 0, 6));

// Alternative approach

const palindrome2 = (word, start, end) => {
    if(start>=end) return true;
    return (word[start] === word[end]) && palindrome(word, start+1, end-1);
}

console.log(palindrome2('amalama', 0, 6));
console.log('*-------------------*');
const sumOfDigits = num => {
    if(num===0) return 0;
    return num%10 + sumOfDigits(Math.floor(num/10));
}
console.log(sumOfDigits(134));
console.log(sumOfDigits(10));