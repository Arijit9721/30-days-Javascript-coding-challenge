
    // function to find the bigger of the 2 numbers 
   function findBigger(a,b){
    console.log(Math.max(a,b));
    }

    findBigger(10,20);

    // function to concatenate 2 strings
    const concat = (a,b)=>{
        console.log(a+' '+b);
    }
    concat("hey","i am here");

    // function to return a welcome message from user details
    const welcome = (a,b)=>{
        console.log(`hey ${a} from ${b},Welcome to our website!!`);
    } 
    welcome("Arijit","India");

    // higher order function to call the function to print done n times
        function higherFunc(func,count){
            for(let i=0;i<count;i++){
               func();
            }
        }

        const call = function(){
            console.log("Done");
        }
        higherFunc(call,5);

    // higher order function to find square and double it 
    
        function square(value){
            return (value*value);
        }

        const double = (value)=>{
            return (value+value);
        }

        const doubleSquare = (square,double,value)=>{
            const result = square(value);
            console.log(double(result));
        }
        doubleSquare(square,double,5);