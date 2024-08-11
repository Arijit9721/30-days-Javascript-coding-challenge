
// all global variable declarations 
    let subButton = document.querySelector(".submit");
    let heading = document.querySelector(".city");
    let inputVal = document.querySelector(".cityData");
    let citySearch = document.querySelector(".search");
    let getBody = document.body
    let apiKey = import.meta.env.VITE_APIKEY;
    
    let placeTemp = {}
    const weatherIcon = {
       "01d": "/icons/sun.png",	
    "01n": "/icons/sun.png",	
    "02d": "/icons/cloudy.png",	
    "02n": "/icons/cloudy.png",	
    "03d": "/icons/cloudy.png",	
    "03n": "/icons/cloudy.png",	
    "04d": "/icons/cloudy.png",
    "04n": "/icons/cloudy.png",
    "09d": "/icons/rain.png",
    "09n": "/icons/rain.png",
    "10d": "/icons/rain.png",
    "10n": "/icons/rain.png",
    "11d": "/icons/storm.png",
    "11n": "/icons/storm.png",
    "13d": "/icons/snow.png",
    "13n": "/icons/snow.png",
    "50d": "/icons/mist.png",
    "50n": "/icons/mist.png"
        }

// api call
    const getWeather = async (city)=>{
        try{
        let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        let data = await getData.json();
        placeTemp = {
            location: data.name,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            temperature:parseInt(data.main.temp), 
            icon: data.weather[0].icon,
            description: data.weather[0].description
        }
        }
        catch(error){
            alert("Invalid Location name");
        }
    }

// catching the submited data
    citySearch.addEventListener('submit', async(e)=>{
        e.preventDefault();
        let city = inputVal.value;
        await getWeather(city)
        inputVal.value = "";
        if(placeTemp.location){
        changeHeading(placeTemp.location);
        displayData()
        }
    })

// change heading on search
   const changeHeading =  (name)=>{
    if(name){
    heading.innerText = `The Weather of ${name}`
    }
   }

// function to find icon code
  
   const findIcon = (check)=>{
   
   }


// displaying the data
   const displayData = ()=>{
    // remove any div already present
    let currDiv = document.querySelector(".main")
    if(currDiv){
        getBody.removeChild(currDiv)
    }
   
   let mainDiv = document.createElement("div");
   mainDiv.className = "main";
// making the wind column    
    let windDiv = document.createElement("div");
    windDiv.className  = "windDiv";
    // displaying the wind icon 
    let windIcon = new Image();
    windIcon.src = "/icons/wind.png";
    windIcon.alt = "wind Icon";
    windIcon.className = "windImage";

    // displaying the wind
    const wind = document.createElement("h2");
    wind.innerText = (placeTemp.windSpeed+"Km/hr");
    wind.className = "wind";

    const windDetail = document.createElement("h2");
    windDetail.innerText = "Wind Speed"; 
    windDetail.className = "wind";

    // appending all the elements to their parents
    windDiv.appendChild(windIcon);
    windDiv.appendChild(wind);
    windDiv.appendChild(windDetail);
    mainDiv.appendChild(windDiv);

// making the temperature column
    const weatherDiv = document.createElement("div");
    weatherDiv.className = "weatherDiv";
    // displaying the weather icon
    let check;
    for(const key in weatherIcon){
        if(key === placeTemp.icon){
            check = weatherIcon[key];
            break;
        }      
    }
   let centerIcon = new Image();
   centerIcon.src = check;
   centerIcon.alt = placeTemp.description;
   centerIcon.className = "weatherImage";
    
    // displaying the temperature    
    const temp = document.createElement("h2");
    temp.innerText = (placeTemp.temperature+"°C");
    temp.className = "temp";

    // appending all the elements to their parents
    weatherDiv.appendChild(centerIcon);
    weatherDiv.appendChild(temp);
    mainDiv.appendChild(weatherDiv);
   

    // making the humidity column
    let humidDiv = document.createElement("div");
    humidDiv.className  = "humidDiv";

    // displaying the wind icon 
    let humidIcon = new Image();
    humidIcon.src = "/icons/humidity.png";
    humidIcon.alt = "Humidity Icon";
    humidIcon.className = "humidImage";

    // displaying the humidity
    const humid = document.createElement("h2");
    humid.innerText = placeTemp.humidity + "%";
    humid.className = "humid";

    const humidDetail = document.createElement("h2");
    humidDetail.innerText = "Humidity"; 
    humidDetail.className = "humid";

    // appending all the elements to their parents
    humidDiv.appendChild(humidIcon);
    humidDiv.appendChild(humid);
    humidDiv.appendChild(humidDetail);
    mainDiv.appendChild(humidDiv);

// appending to the body 
    getBody.appendChild(mainDiv);
   }