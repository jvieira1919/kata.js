/**
 * Google books API Docs: https://developers.google.com/books/docs/v1/using#auth
 *
 */

 async function getBooks() {
  let preference = "Thriller",
    max = 17; 

  await $.get(`https://www.googleapis.com/books/v1/volumes?q=${preference}:fiction&maxResults=${max}`, function (data) {
    // console.log(data.items);//array of objects

    const books = data.items;
  console.log(books);
  
    for (let i = 0; i < books.length; i++) {
      let title = books[i].volumeInfo.title,
        cover = books[i].volumeInfo.imageLinks.smallThumbnail,
        // isbn = books[i].volumeInfo.industryIdentifiers[1].identifier,
        authors = books[i].volumeInfo.authors[0],
        summary = books[i].volumeInfo.description;

      let div = $(`<div class='parent' data-result=${i}></div>`);
      let = img = $(`<img>`);
      titlep = $(`<p id="title">Title: ${title}<p>`),
        // isbnp = $(`<p id="isbn">${isbn}<p>`),
        authorsp = $(`<p id="authors">Author: ${authors}<p>`),
        summaryp = $(`<p class="summary">Summary: ${summary}<p>`),
        show = $(`<button class="show-summary">Show Summary</button>`),
        add = $(`<button class="add">add</button>`);

      img.attr('src', cover);

      div.append(img);
      div.append(titlep);
      // div.append(isbnp);
      div.append(authorsp);
      div.append(show);
      div.append(summaryp);
      div.append(add);

      $('#start').append(div);

    }

  })

  $('p.summary').hide()
}

getBooks();

// TO DO ***************
// style main books  page 
// get page to serve 
// @JV create the post route  me 2 consume 
// @JV create the Get route for our libraries table 4 libraries page


$('#start').on('click', ".show-summary", function (event) {
  if (event.target.matches(".show-summary")) {
    $(event.target.parentElement.children[6]).toggle()
  }
})

$('#start').on('click', "button.add", function (event) {
  let title, author;
  if (event.target.matches(".add")) {
    title = event.target.parentElement.children[1].innerHTML;
    author = event.target.parentElement.children[3].innerHTML;
  }
  // $.post();/// post to JV's endpoint 
  const obj = {
    // isbn: 
    authors: author,
    title: title,
    singer: "james"
  }

  console.log(obj);
})





 