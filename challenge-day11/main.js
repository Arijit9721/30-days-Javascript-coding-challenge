

    // creating a new promise that resolves with a timeout
        const data1  = false;
        promise1  = new Promise((res,rej)=>{
            if(data1){
              setTimeout(()=>{
                res("The data is present");
              },2000)  
            }
            else{
                rej("The data is not present");
            }
        }) 

        promise1
        .then((message)=>console.log(message))
        .catch((error)=>console.log(error))

    // creating a new promise that rejects with a timeout
        const data2  = false;
        promise2  = new Promise((res,rej)=>{
            setTimeout(()=>{
            if(data2){
                res("The data is present");
            }
            else{
                rej("The data is not present");
            }
        },2000) 
        }) 
        promise2
        .then((message)=>console.log(message))
        .catch((error)=>console.log(error))

    // chaining multiple promises from multiple servers
        const fetchData = (msg,delay)=>{
            return new Promise((res)=>{
                setTimeout(()=>{
                 res(msg)   
                },delay) 
            }) 
        }

        fetchData("Data received from server 1",2000)
        .then((message)=>{
            console.log(message);
            return fetchData("Data received from server 2",2000);
        })
        .then((message)=>{
            console.log(message);
            return fetchData("Data received from server 3",2000);
        })
        .then((message)=>{
            console.log(message);
        })
        .catch((error)=>console.log(error))

    // handling multiple data calls simultaneously with promise.all
            Promise.all([
                fetchData("Data received from server 1",2000),
                fetchData("Data received from server 2",2000),
                fetchData("Data received from server 3",2000)
            ])
            .then((message)=>console.log(message))
            .catch((error)=>console.log(error))
        
    // handling promise1 resolve with async await
        const waiter  = async ()=>{
        try{
            const msg = await promise1;
            console.log(msg);
        }
        catch(error){
            console.log(error);
        }
        }

    // handling promise2 rejection with async await
        const waiter2  = async ()=>{
            try{
                const msg = await promise2;
                console.log(msg);
            }
            catch(error){
                console.log(error);
            }
        }

        waiter()
        waiter2()

    // fetching data from an api with promises
        const url  = 'https://jsonplaceholder.typicode.com/todos/1'
        const dataFetched1  =()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! : ${res.status}`)
            }
             return res.json();
        })
        .then((data)=>console.log(data))
        .catch((error)=>console.log(error))
        }
        dataFetched1();

    // fetching the same data using async await
        const dataFetched2  = async ()=>{
            const res = await  fetch(url);
            try{
                if(!res.ok){
                    throw new Error(`HTTP Error!,Code:${res.status}`)
                }
                const data = await res.json();
                console.log(data);
            }
            catch(error){
                console.log(error.message);
            }
        }
        dataFetched2()

        // finding the fastest promise with promise.race
        const prom1 = new Promise((resolve) => {
            setTimeout(()=> resolve("first won"),2000);
        })

        const prom2 = new Promise((resolve) => {
            setTimeout(()=> resolve("second won"),1000);
        })

        Promise.race([
            prom1,prom2
        ])
        .then((res)=>console.log(res))
        .catch((error)=>console.log(error))