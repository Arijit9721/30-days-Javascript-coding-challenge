

    // creating a class called person
    class person{
        constructor(firstName,lastName,age){
            this.firstName = firstName;
            this.lastName = lastName
            this.age = age;
            person.hello();
        }

        // setter function to set the age of the person
        setAge(age){
            this.age  = age;
        }

        // creating a static greeting method
        static hello(){
            console.log("hello everyone");
        }

        // getter function to get the total details of the person
         greetings(){
            console.log(`hello my name is ${this.firstName} ${this.lastName} and my age is ${this.age}`);
        }
    }

    const newPerson  = new person("Arijit","Das",26);
    // console.log(newPerson);
    newPerson.setAge(27);
    // console.log(newPerson);
    newPerson.greetings();

   

    // student class that is a child of the person class
    class student extends person{
        // static property that tracks the number of instances of student class
        static count = 0;
        constructor(firstName,lastName,age,studentId){
            super(firstName,lastName,age);
            this.studentId = studentId
            // incrementing student on each object creation
            student.count++;
            console.log(`the total number of students: ${student.count}`);
        }

        getId(){
            console.log(this.studentId);
        }

        // overriding the greeting method in the person class
        greetings(){
            console.log(`hello student ${this.name}, your id is ${this.studentId}`);
        }
    }

    const student1  = new student("Ramesh","Sahu",24,16566);
    console.log(student1);
    student1.greetings();

    // an account class with private balance field 
      class Account{
        #balance = 10000;
        constructor(name,age){
            this.name  = name;
            this.age = age;
        }
        withdraw(amount){
            if(this.#balance - amount<0){
                return console.log("Insufficient Balance");
            }
            this.#balance -= amount;
            console.log(`${amount} withdrawn successfully, the remaining balance is ${this.#balance}`);
        }

        deposit(amount){
            this.#balance += amount;
            console.log(`${amount} deposited successfully, the remaining balance is ${this.#balance}`);
        }

      }

    // accessing the balance with the withdraw and deposit methods    
      const customer = new Account("Arijit Das",26);
      console.log(customer);
      customer.withdraw(1500)
      customer.deposit(1000)