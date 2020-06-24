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

    // const books = data.items;

    // books.forEach(book =>{
    //   let div = $('<div></div'),
    //       img = $('<img>'),
    //       p = $('<p><p>');

    //   let title = book.information.title,
    //       cover = book.information.imags.smallthimbnial;
    //   img.addAttribute(src, cover);
    //   p.html(title);

    //   div.append(img);
    //   div.append(p);

    //   $('start').append(div);
    // })

  });
}

getBooks();