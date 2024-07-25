

    // handling the error thrown by a function using try catch
    const errorFunc = (a,b)=>{
        try{
        const ans = a%b;
        if(ans === 0){
             throw new Error("The numbers are wrong");
            }   
        return ans;
        }
        catch(e){
            console.log(e.message);
        }
    }
   
    errorFunc(25,5);
    

    // creating a function with all blocks to see the flow of execution
    const flow  = ()=>{
        try{
            console.log("Try Block Executed");
            throw new error("catch");
        }
        catch(e){
            console.log("Catch Block Executed");
        }
        finally{
            console.log("Finally Block Executed");
        }
    }
    flow();

    // creating a class that extends the in-built error class and validating the string 
    // and returning custom error if the string is empty
    class validationError extends Error{
        constructor(message){
            super(message);
        }
    }

    let str = "";
    function validate(str){
        if(str.length == 0){
            throw new validationError("The string is empty !!");
        }
         console.log(str);
    }
    
    try{
    validate(str);
    }
    catch(err){
        console.log(err.message);
    }

    // fetching an incorrect url and returning custom error message
    const fetchCheck = async ()=>{
        try{
            const res =  await fetch("https://api.sampleapis.com/beer/ale");
            if(!res.ok){
                throw new Error("The Url is incorrect or the Server is not responding")
            }
            const data = await res.json();
            console.log(data);
        }
        catch(e){
                console.log(e.message);
        }
    } 
    fetchCheck()