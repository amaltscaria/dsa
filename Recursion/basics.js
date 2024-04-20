// Recursive print your name n times;

const fun = n => {
    //base condition
    if(n<=0) return;
    console.log('Amal');
    fun(n-1);
}

fun(5);