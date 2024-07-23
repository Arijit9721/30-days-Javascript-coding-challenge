

    // hiding and unhiding paragraph on click
    const para = document.getElementById("text");
    const button1 = document.getElementById("toggle");
    let toggle = true;
    button1.addEventListener("click",()=>{
        toggle = !toggle;
        toggle ? para.style.display="none" : para.style.display="block"
    })

    // changing color on mouseover and mouseout
    const heroDiv = document.getElementById("hero");
    heroDiv.addEventListener("mouseover",()=>{
        heroDiv.style.backgroundColor = "red";
    })
    heroDiv.addEventListener("mouseout",()=>{
        heroDiv.style.backgroundColor = "rgba(4, 255, 0, 0.874)";
    })


    // handling input values during keydown and keyup
    const mainInput = document.getElementById("input1");
    const para2  = document.createElement("p");
    heroDiv.appendChild(para2);
    mainInput.addEventListener("keydown",(e)=>{
        console.log(e.key);
    })

    mainInput.addEventListener("keyup",(e)=>{
        para2.innerText = e.target.value;
    })

    // preventing submission and logging the value and clearing the form on submit
    const button2  = document.getElementById("sub");
    button2.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log(mainInput.value);
        mainInput.value  = "";
    })

    
    // finding the clicked list value by the concept of event bubbling
    const listedValue = document.getElementById("clicker");
    listedValue.addEventListener("click",(e)=>{
        console.log(e.target.innerText);
    })

    // it even works on dynamically added values
    const newItem = document.createElement('li');
    newItem.textContent = "four";
    listedValue.appendChild(newItem);

