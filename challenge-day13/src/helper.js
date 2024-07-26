 

    // helper function containing data of a user
        const user = {
        name: "Ramesh Shah",
        age: 25,
        inhand_salary: 50000,
        esops: 75000,
        totalSalary(){
            const total  = this.inhand_salary + this.esops;
            return total;
        }
    }   

    const add = (one,two)=>{
        return one + two;
    }

    // named exports
    const subtract = (one,two) =>{
        return one - two;
    }

     const multiply = (one,two) =>{
        return one * two;
    }

    console.log(user.totalSalary()); 
    // named exports
    export {subtract,multiply};

    // default  exports
    export default { user,add };

