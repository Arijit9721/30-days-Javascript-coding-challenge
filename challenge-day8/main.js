

    // creating a multiline string using template literals
        const name = "Arijit";
        const age  = 26;
        const st = `Hello my name is ${name}
                    and my age is ${age}`;
        console.log(st);

    // array de-structuring
        const[first,second,] = [1,2,3];
        console.log(first);

    // object de-structuring
        const{title,author} = {
            title:"Nineteen Eighty-Four",
            author:"George Orwell"
        } 

        console.log(title)
        console.log(author)

        
    // spread operator
        const arr1 = [1,2,3];
        const newArr1 = [...arr1,4];
        console.log(newArr1);

    // rest operator
        const func1 = (...nums)=>{
            let total  = 0;
            for(const n of nums){
                total += n;
            }
            console.log(total);
        }

        func1(5,10,45);

    // enhanced object literals
        const property = "dyanmic property";

        const obj1 = {
            name: "Ramesh",
            age: 22,
            [property] : "Welcome to the challenge",
            greetings(){
                return `hello ${this.name} and ${this[property]}`
            } 
        }
        console.log(obj1);
        console.log(obj1.greetings());