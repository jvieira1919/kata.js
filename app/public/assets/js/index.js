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

    const books = data.items;

      // let title = data.items[6].volumeInfo.title,
      //     cover = data.items[6].volumeInfo.imageLinks;

      //     console.log(title);
      //     console.log(cover);

          
    // books.forEach(book =>{
    //   let div = $('<div></div'),
    //       img = $('<img>'),
    //       p = $('<p><p>');

    //   let title = book.volumeInfo.title,
    //       cover = book.volumeInfo.imageLinks;
    //   img.attr('src', cover);
    //   p.html(title);

    //   div.append(img);
    //   div.append(p);

    //   $('start').append(div);
    // })

  });
}

getBooks();