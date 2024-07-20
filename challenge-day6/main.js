
    // making an array and performing multiple operations
    const arr = [-1,1,2,3,4,5];
    arr.push(6," ");
    arr.pop();
    arr.shift();
    console.log(arr);
    arr.unshift(0);
    console.log(arr);

    // making a doubled array with map 
    const doubled = arr.map((value)=>value*2);
    console.log(doubled);

    // filtering only the even numbers
    const even =arr.filter((value)=>value%2===0);
    console.log(even);

    // finding sum of array using reduce(no need for initial value)
    const sum = arr.reduce((sum,current)=>sum+current);
    console.log(sum);

    // working with 2-d arrays
    const data = [[],[],[]];
    let count = 0;
    for(let i=0;i<data.length;i++){
        for(let j=0;j<3;j++){
            data[i].push(count++);
        }
    }
   data.forEach((value)=>console.log(value));

    // converting the 2d array into a 1d array
    const newArr = data.flat();
    console.log(newArr);
   


