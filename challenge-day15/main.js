

    // creating a fuction inside a function which returns the inside function
    const first = ()=>{
        const access  = 5;

        return function second(){
            console.log(access);
        }

    }
    // now call the inner function 
    const outer = first();
    outer();

    // creating a private variable that can only be accessed and modified with functions
    const count = ()=>{
      let counter  = 3;

      return{
        getCount: function(){
            console.log(counter);
        },
        setCount: function(value){
            counter += value;
        }
      }
    }

    const counts = count();
    counts.setCount(10);
    counts.getCount();

    // creating a function that takes the user's name and returns a greeting function
    function helloUser(name){
        const username = name;
        return function(){
            console.log(`Hello ${username}, Welcome to the website`);
        }
    }

    const user = helloUser("ram")
    user();

    // handling closure in loop
    let funcArray =[];
   for(let i=0;i<5;i++){
        funcArray.push(
        (function(index){
            return function(){
                console.log(index);
            }
        })(i)
    )
   }
    
    for (let j = 0; j < funcArray.length; j++) {
        funcArray[j](); 
      }


    // memoization using closures in factorial calculation 
      const memoisedFactorial = ((n)=>{
        let cache = {};

        function factorial(n){
            if(cache[n]){
                return cache[n];
            }
            if(n===0 || n===1){
                return 1;
            }
           
            let result = n*factorial(n-1);
            cache[n] = result;
            return result;
        }
        return factorial;
      })();

    // the first function call caches all the factorial values till 5, so the next call just uses the cache   
      console.log(memoisedFactorial(5));
      console.log(memoisedFactorial(4));
