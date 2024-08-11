   
   
    const user =  "Arijit";
    const body = document.body;

    // DOM manipulation using id
    const userMessage = document.getElementById("user");
    userMessage.innerText = `Hello to user ${user}`;

    // DOM manipulation using class
    const mainDiv = document.getElementsByClassName('container');
    for(let i of mainDiv){
        i.style.backgroundColor = "red";
        i.style.color = "white";
    }

    // creating a new div and a ul within
    const newDiv  = document.createElement("div");
    const newUl  = document.createElement("ul");
    const newPara  = document.createElement("p");
    newPara.textContent = "The List of Tasks completed:-"
    newDiv.appendChild(newPara);
    newDiv.appendChild(newUl);
    body.appendChild(newDiv);

   
   
    // adding li's to the ul
    const task1  = document.createElement("li");  
    const task2  = document.createElement("li");  
    const task3  = document.createElement("li");  
    task1.innerText = "Selecting by id";
    task2.innerText = "Selecting by class";
    task3.innerText = "Creating new elements";

    newUl.appendChild(task1);
    newUl.appendChild(task2);
    newUl.appendChild(task3);

    // removing an unnecessary element
    const rem = document.getElementById("remove");
    body.removeChild(rem);

    // removing the last element of the container div
    for(let i of mainDiv){
        let last = i.lastElementChild;
       i.removeChild(last);
    }

    
    // changing the src of an image
    const newImg = document.getElementById("image");
    newImg.setAttribute("src","welcome.jpg");

    // removing a class
        userMessage.removeAttribute("class");

    // changing completed on click
    const button1  = document.getElementById("button");
    const taskProgress  = document.getElementById("progress"); 
    let check  = true;
    console.log(button1);
    button1.addEventListener("click",()=>{
        taskProgress.innerText= check ?  "All Tasks Completed":"All Tasks Not Completed ";
        check = !check;
    })

    // chnaging border color on mouseOver and mouseout
    newImg.addEventListener("mouseover",(()=>{
        newImg.style.border = "2px solid brown";
    }))

    newImg.addEventListener("mouseout",(()=>{
        newImg.style.border = "1px solid black";
    }))