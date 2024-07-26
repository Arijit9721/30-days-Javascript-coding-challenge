
    // handling the needed 3rd party imports
    import chunk from 'lodash/chunk.js'
    import axios from 'axios'
    // handling both named and default imports from helper module 
    import helper,{subtract,multiply}  from "./helper.js";
    const{add,user} = helper
    console.log(user);
    console.log(add(5,15));
    console.log(multiply(5,5));

    // installing lodash and using the chunk function
    const arr  = [1,2,3,4];
    const chunkedArray  = chunk(arr,2);
    console.log(chunkedArray); 
    console.log(axios.isCancel('something'));

    // making a network call using axios
    const getData  = async ()=>{
        try{
        const res = await axios.get('https://api.sampleapis.com/beers/ale');
        // console.log(res);
        }
        catch(error){
            console.log(error);
        }
    }
    getData()
