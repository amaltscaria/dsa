//Typical Structure of a Recursive function

const recursion = () => {
    //Base cases
    //..........
    //..........

    //Recursive call for values that move toward a base case
    //..........
    //..........
}

console.log('*--------------*');

// Recursively print your name n times;

const fun = n => {
    //base condition
    if(n<=0) return;
    console.log('Amal');
    fun(n-1);
}

fun(5);

console.log('*--------------*');
//Guess the output

const recursion2 = n => {
    if(n===0) {
        return;
    }
    console.log(n);
    recursion2(n-1);
    console.log(n);
}
recursion2(3)

// 3
// 2
// 1 
// 1
// 2
// 3

// Guess the output

console.log('*--------------*');

function recursion3(n) {
    if(n === 0) {
        return ;
    }
        recursion3 (n-1);
        console.log(n);
        recursion3(n-1);
    
}

recursion3(3);

// 1
// 2
// 1
// 3
// 1
// 2
// 1 
console.log('*--------------*');
// Guess the output

const recusrsion4 = n => {
    if(n === 1)return 0;
    return 1 + recusrsion4(Math.floor(n/2));
}
console.log(recusrsion4(25));
//4

console.log('*--------------*');
// Guess the output

const recursion5 = n => {
if(n===0) return;
recursion5(Math.floor(n/2));
console.log(n);
}

recursion5(5);

// 1
// 2
// 5