
    // switch case for day finding
    const day = new Date().getDay();
    switch(day){
        case 0: 
        console.log("Sunday");
        break;

        case 1: 
        console.log("Monday");
        break;

        case 2: 
        console.log("Tuesday");
        break;

        case 3: 
        console.log("Wednesday");
        break;

        case 4: 
        console.log("Thursday");
        break;

        case 5: 
        console.log("Friday");
        break;

        case 6: 
        console.log("Saturday");
        break;
    }
    
    // Switch case for grading
    const  marks = 0;
    let grade;
    switch(true){
        case (marks<40 && marks>=0):
        grade = 'F';
        break;

        case (marks<=50):
        grade = "D";
        break;

        case (marks<=60):
        grade = 'C';
        break;

        case (marks<=80):
        grade = 'B';
        break; 
        
        case (marks<=90):
        grade = 'A';
        break;

        default:
        grade = "A+";
        break;
    }

    console.log(grade);

    // ternary operator for figuring odd/even
    const num =  122;
    console.log(num%2 ===0 ? "Even": "Odd");

    // leap year calculator
    const year = 1284;
    if(year%4 === 0){
        if(year%100===0 && year%400===0){
            console.log("Leap year");
        }
        else if(year%100===0 && year%400!==0){
            console.log("Not a Leap Year");
        }
        else{
            console.log("Leap year");
        }
    }
    else{
        console.log("Not a Leap Year");
    }