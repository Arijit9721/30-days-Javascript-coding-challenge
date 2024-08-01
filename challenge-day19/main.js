

// find a word from the string using regular expression
    const str1 = "Python is good but Javascript is better"
    const find1 = /Javascript/i;
    // console.log(str1.match(find1));

// find all the numbers in the string
const numberString = "The 1st prize is $1000, the 2nd prize is $500, and the 3rd prize is $250. Call 123-456-7890 or 987-654-3210 for more info.";
    const find2 = /[0-9]+/g
//  console.log(numberString.match(find2));

// find all words starting with capital letters
    const capString = "Hello and Welcome to my WebPage, Hope you have a Great Time";
    const find3 = /\b[A-Z]\w*\b/g
    // console.log(capString.match(find3)); 

// find all sequences of one or more digits in the string
const digitString = "In 2024, there were 1234 participants, and 5678 of them finished the race in under 101 minutes. The winning time was 4567 seconds.";
    const find4= /\d+/g
    // console.log(digitString.match(find4));

// find all the numbers separtely from the phone number 
    const phoneNumberString = `International Phone Number Format: +1 (212) 555-1234`; 
    const  find5 = /\d+/g;
    console.log(phoneNumberString.match(find5));

// find the username and domain from the email id
    const email = "test_123@gmail.com";
    const find6 =  /(.+)@(.+)/;
    const userName = email.match(find6)[1];
    const domain = email.match(find6)[2];
    console.log(userName,domain);

// find the word at the start and end 
    const str2 = "Hello is the first word and the last word is everyone";
    const find7 =   /^\w+|\w+$/g
    console.log(str2.match(find7));

// find if the password is valid or not(1 cpital letter,1 small letter,1 number,1 special char and atleast 8-char size)
    const password = "Jsl51@hgFFR66"
    const check = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@%&*!+=-]).{8,}$/
    console.log(check.test(password));