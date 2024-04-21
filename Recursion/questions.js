// 1)  Print n to 1 using recursion
// Sample i/p - 5 , o/p => 5, 4, 3, 2, 1

const recursion = n => {
    if(n === 0) return;
    console.log(n);
    recursion(n - 1);
}

recursion(5);

// methodology => Think of a smaller problem whose solution can solve the given problem with some extra steps.
