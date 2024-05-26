// Find the longest substring without repeating characters

// abcdeffklmnopqrst => klmnopqrst

const string = 'fabcdefklmnopqrst';
let res = '';
let r = '';
let obj = {};
for(const letter of string){
    if(obj[letter]){
        if(r.length>res.length)res  = r;
        r = '';
        obj = {};
        obj[letter] = 1;
    }else {
        r+=letter;
        obj[letter] = 1;
    }
}
if(r.length>res.length)res = r;
console.log(res);