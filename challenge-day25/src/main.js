
  // all global variables
  const getBody = document.body;
  const searchBox = document.querySelector(".search-bar");
  const searchInput = document.querySelector(".search-input")
  const deleteSearch = document.querySelector(".deleteButton");
  const search = document.querySelector(".search");
  const suggest = document.querySelector(".suggestions")
  const suggestionsList = document.querySelector(".suggest-list");
  const apiKey = import.meta.env.VITE_API_KEY;
  let apiData = {}
  
  // adding and removing the cross and suggestions to the search bar
   searchInput.addEventListener('input',(e)=>{
    if(searchInput.value.trim() === ""){ 
       deleteSearch.style.display = "none";
       suggestionsList.style.display = "none"
    }
    else if(searchInput.value  !== ""){
      deleteSearch.style.display = "block";
      suggestionsList.style.display = "block"
      // keyNavigation()
   }
   })

  //  adding suggestionsbar on non-empty click
   searchInput.addEventListener("focus",()=>{
    if(searchInput.value !== ""){
       suggestionsList.style.display = "block"
    } 
   })
   
  // functionality of the cross button
   deleteSearch.addEventListener('click',(e)=>{
    e.preventDefault();
    searchInput.value='';
    deleteSearch.style.display = "none";
   });

  // submitting the h3 value of suggestions on click
      suggestionsList.addEventListener("click",(e)=>{
      // find the li and the text value of it's h3
        let li = e.target.closest('li');
       if(li){
        searchInput.value = li.querySelector('h3').textContent;
       }
        formSubmit(searchInput.value);
      })
    
    // function for form submission 
      const formSubmit = async (val)=>{
        await getData(val);
       deleteSearch.style.display = "none";
       suggestionsList.style.display = "none";
     }
 
   // handling form submission
    search.addEventListener('submit',async (e)=>{
       e.preventDefault();
       formSubmit(searchInput.value);
    })
 
   // function to get api data 
     const getData = async ()=>{
       let inputVal = searchInput.value;
       let url = `http://www.omdbapi.com/?t=${inputVal}&apikey=${apiKey}`
       try{
         let response = await fetch(url);
         let data = await response.json();
         
         if(!data.Title){
           throw new Error(`Please enter a valid show/movie`)
         }
         else{
        // hnadling the genre
            let genre = data.Genre.split(',');
            let newDiv = document.createElement('div');
            newDiv.className = "movie-genre"
            for(let i of genre){
                let newP = document.createElement('p');
                newP.innerHTML = `${i}`
                newDiv.appendChild(newP)
              }

          // container data
            let container = document.querySelector(".container");
            container.innerHTML = `<div class="poster-container">
          <img src=${data.Poster} alt="No image available" class="image">
        </div>
        <div class="movie-info">
          <div class="movie-heading">
          <h1 class="movie-title">${data.Title}</h1>
          <h3 class="movie-rating"> <img src="/public/star.png" alt="star" class="rating-star"> ${data.Ratings[0].Value}</h3>
          </div>
          <div class="movie-basic-info">
              <p>${data.Rated}</p>
              <p>${data.Released}</p>
              <p>${data.Runtime}</p>
          </div>`
          let movieBasicInfo = container.querySelector('.movie-basic-info');
          movieBasicInfo.appendChild(newDiv);
        
        // additional movie data
          let additional = document.querySelector(".additional")
          additional.innerHTML = `<div class="movie-plot">
        <span>Plot</span><p>${data.Plot}</p>
      </div>
        <div class="movie-cast">
          <span>Cast</span><p>${data.Actors}</p>
        </div>`
         }
       }
       catch(error){
         alert(error.message);
       }
     } 

  // asking for suggestions
  let timeout = null;
    searchInput.addEventListener('input',()=>{
      clearTimeout(timeout);
      timeout = setTimeout(()=>{
        const query = searchInput.value.trim()
        if(query){
          fetchSuggestions(query)
        }
      },350)
    })

    // calling the api for suggestions
    async function fetchSuggestions(val){
      if(suggestionsList.style.display === "none"){
        suggestionsList.style.display = "block"
      }
      try{
          let response = await  fetch(`https://www.omdbapi.com/?s=${val}&apikey=${apiKey}`);
          let data  = await response.json();

        // if we get a proper response
          if(data.Response === "True"){
             suggestionsList.innerHTML = ""
              for(let i=0;i<data.Search.length;i++){
                let newLi = document.createElement('li');
                newLi.innerHTML = `<img src=${data.Search[i].Poster} alt="N/A" class="poster"/>
                                  <div class="time">
                                  <h3>${data.Search[i].Title}</h3>
                                  <p>${data.Search[i].Year}</p>
                                  </div>`
                suggestionsList.appendChild(newLi)
              }
          }

          else if(data.Response === "False"){
             suggestionsList.innerHTML = ""
            
             if(data.Error === "Too many results.")
            throw new Error("Too many results!!")
             else{
              throw new Error("Not Found!!")
             }
          }
      }
      catch(error){
        let newLi = document.createElement('li');
        newLi.innerHTML = `${error.message}`;
        newLi.style.color = "red"
        suggestionsList.appendChild(newLi);
      }

      // if no suggestions hide the list
      if (suggestionsList.children.length === 0) {
        suggestionsList.style.display = "none";
    }
    }