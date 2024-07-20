

    // creating the book object with an internal method
    const book = {
        Title: "The Hitchhiker's Guide to the Galaxy",
        Author: "Douglas Adams",
        Published: 1979,

         changePublished(date){
            this.Published = date;
         },
        details(){
            console.log(`${this.Author},${this.Published}`);
        }
    }
    book.changePublished(2000);
    book.details()
    console.log(book.Published);

    // using for in loop on book 
    for(let i in book){
        console.log(i+':'+book[i]);
   }

    // using  the objectvalues and object keys methods
    console.log(Object.keys(book));   
    console.log(Object.values(book));

    // creating a nested object library
    const library = {
        Name: "The Great Library",
        Books:[
        {
            title: "1984",
            author: "George Orwell",
            genre: "Dystopian",
            yearPublished: 1949
    },{
        title : "The Great Gatsby",
        author: "F. Scott Fitzgerald" ,
        genre: "Fiction",
        yearPublished: 1925
    },{
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        yearPublished: 1960
    }]
    }
   library.Books.forEach((value)=>console.log(value.title));
   


   