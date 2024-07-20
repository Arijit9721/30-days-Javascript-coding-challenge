
// when using loosely equals(==) it converts the number 1 to string and then matches them
// as "1" == "1" it returns true
const check1 =  '1' == 1;
console.log(check1);

// when using strictly equals(===) it does no type convertions and so the returns false
const check2 = '1' ===1;
console.log(check2); 

// conditionals to find finalSum  
let finalNum;
const makeCalculations = ()=>{
    const num1 = 20;
    const num2 = 10;
    if(num1 < 50  && num2<=num1)
    finalNum = num1-num2;

    else if(num1 < 10  || num2>num1)
    finalNum = num2 -num1;
} 

makeCalculations()
// check if finalNum less than 5 or not
console.log(finalNum<5 ? "Less than 5" : "equal or more than 5");