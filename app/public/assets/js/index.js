/**
 * Google books API Docs: https://developers.google.com/books/docs/v1/using#auth
 *
 */

function getBooks() {
  let preference = "Thriller",
    max = 17; // up to 40



  $.get(`https://www.googleapis.com/books/v1/volumes?q=${preference}:fiction&maxResults=${max}`, function (data) {
    console.log(data.items);//array of objects

    const books = data.items;

    books.forEach(book => {

      let title = book.volumeInfo.title,
        cover = book.volumeInfo.imageLinks.smallThumbnail,
        // isbn = book.volumeInfo.industryIdentifiers[1].identifier,
        authors = book.volumeInfo.authors[0],
        summary = book.volumeInfo.description;

      let div = $(`<div class='parent'></div>`),
        img = $(`<img>`),
        titlep = $(`<p id="title">${title}<p>`),
        // isbnp = $(`<p id="isbn">${isbn}<p>`),
        authorsp = $(`<p id="authors">${authors}<p>`),
        summaryp = $(`<p id="summary">${summary}<p>`),
        add = $(`<button>add</button>`);

      img.attr('src', cover);

      div.append(img);
      div.append(titlep);
      // div.append(isbnp);
      div.append(authorsp);
      div.append(summaryp);
      div.append(add);

      $('#start').append(div);
    })
  });
}

getBooks();


// log book data when you click on add button ( post prep)
// create the layout foe the page 
// get page to serve 
//@JV create the post route  me 2 consume 

$('.parent').on('click', function (event) {

  // const obj = {
  //   isbn: 
  //   // authors: "",
  //   // summary: "",
  //   // id: "",
  //   // title: event.target.parentElement.title
  // }

  if (event.target.matches("button")){
    // console.log(event.target.parentElement.id);
    console.log("success");

  }
    
})
