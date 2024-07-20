

    // Printing the table of 5
    for(let i=1;i<=10;i++){
        console.log(`5 x ${i} = ${5*i}`);
    }

    // finding the factorials using do-while loop
    let num = 1;
    let fact = 1;
    do{
        fact *= num;
        num++; 
    }
    while(num<=7)

    console.log(fact);

    // make a 90 degree triangle with stars
        for(let i=1;i<=5;i++){
            let star="";
            for(let j=1;j<=i;j++){
                star +="*"
            }
            console.log(star);
        }

    // making a pyramid using stars
   
    let count = 4
    for(let i=1;i<=9;i+=2){
        let gap = "";
        let star= "";
       
        for(let k=count;k>=0;k--){
            gap+=" ";
        }
        for(let j=1;j<=i;j++){
            star +="*"
        }
        console.log(gap + star);
        count--;
    }