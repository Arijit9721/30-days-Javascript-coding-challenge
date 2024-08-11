

    const form = document.querySelector('.my-form')
    const firstName = document.querySelector('.first-name');
    const lastName = document.querySelector('.last-name');
    const age = document.querySelector('.age');
    const sub = document.getElementById('submit-button');
    const newDiv = document.createElement('div');
    let count = 1;
    sub.addEventListener("click",(e)=>{
        e.preventDefault();
    // storing the values in local storage as an object
        let data = {
            Id : count,
            First_Name : (firstName.value),
            Last_Name : (lastName.value),
            Age : (age.value),
        }
        localStorage.setItem(count, JSON.stringify(data));
        form.reset()

        displaylastData()

        count=count+1; 
    })

    // displaying the last local storage object data in a new paragraph
    function displaylastData(){
    // delete all data if already present
    if(newDiv.childElementCount === 1){
        console.log(newDiv.childElementCount);
         newDiv.innerHTML = "";
    }
    // add the new data as last user's data
    let lastUserData = JSON.parse(localStorage.getItem(count)) || {}
    if(Object.keys(lastUserData).length>0){
    const lastData = document.createElement('p')
    lastData.innerText = `First Name: ${lastUserData.First_Name}
    Last Name:${lastUserData.Last_Name} 
    Age: ${lastUserData.Age}`;
    newDiv.appendChild(lastData)
    document.body.appendChild(newDiv)
        }
    }
    // function called on refresh
    displaylastData()

    // deleting local storage on button click
        const delButton = document.querySelector('#delete-button');
        delButton.addEventListener('click',(e)=>{
            localStorage.clear();
            count = 1; 
            displaylastData();
        }) 
    // make the form empty on refresh
    window.onload = function(){
        form.reset();   
    }