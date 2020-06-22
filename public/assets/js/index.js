/**
 * Google books API Docs: https://developers.google.com/books/docs/v1/using#auth
 *
 */

//endpoint returns the data on 17 thriller books
function getBooks(){
  let preference = "Thriller",
    max = 17; // up to 40

  $.get(`https://www.googleapis.com/books/v1/volumes?q=${preference}:fiction&maxResults=${max}`, function(data){
    console.log(data.items);//array of objects
  });
}

getBooks();