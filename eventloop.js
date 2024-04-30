const fs = require('fs');

setTimeout(()=> {
    console.log('Timer 1 Finished');
},0);

setImmediate(()=> {
    console.log('Immediate one finished');
})

fs.readFile('./file.txt', 'utf-8', (err, data)=> {
    console.log('file read');
})

console.log('Hello from the top level code');