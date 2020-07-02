$(document).ready(function () {
    var title, author, publisher, bookLink, bookImg, bookIsbn, description, categories;
    var outputList = document.getElementById("list-output");
    var bookList = document.querySelector(".book-list");
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    var placeHldr = "<img src='https://via.placeholder.com/150'>";
    var searchData;
    var myBtn = document.querySelector(".myBtn");
    var chk = document.getElementById('chk');


    myBtn.addEventListener('click', function () {
        bookList.style.visibility = 'hidden';
    });

        

    chk.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });

    document.querySelector(".fiction").addEventListener("click", function searchBtn() {

        searchData = 'subject:fiction';
        search(searchData);
    });

    document.querySelector(".science").addEventListener("click", function searchBtn() {

        searchData = 'subject:science';
        search(searchData);
    });

    document.querySelector(".art").addEventListener("click", function searchBtn() {

        searchData = 'subject:art';
        search(searchData);
    });

    document.querySelector(".business").addEventListener("click", function searchBtn() {

        searchData = 'subject:business';
        search(searchData);
    });


    document.querySelector(".poetry").addEventListener("click", function searchBtn() {

        searchData = 'subject:poetry';
        search(searchData);
    });

    document.querySelector(".history").addEventListener("click", function searchBtn() {

        searchData = 'subject:history';
        search(searchData);
    });
    document.querySelector(".horror").addEventListener("click", function searchBtn() {

        searchData = 'subject:horror';
        search(searchData);
    });
    document.querySelector(".religion").addEventListener("click", function searchBtn() {

        searchData = 'subject:religion';
        search(searchData);
    });
    document.querySelector(".romance").addEventListener("click", function searchBtn() {

        searchData = 'subject:romance';
        search(searchData);
    });

    document.querySelector("#search").addEventListener("click", function searchBtn() {
         event.preventDefault();
        search($("#searchTerm").val());
    });
    search('subject:fiction');
    function search(searchData) {

        

        bookList.style.visibility = 'visible';

        outputList.innerHTML = "";
        // searchData=$("#searchTerm").val();
        if (searchData === "", searchData === null) {
            displayError();
        }
        else {
            $.ajax({
                url: bookUrl + searchData,
                dataType: "json",
                success: function (res) {

                    console.log(res);
                    if (res.totalItem === 0) {
                        alert("no results!... try again");
                    }
                    else {


                        displayResults(res);

                    }
                },

                error: function () {
                    alert("Something went wrong...")
                }

            });
        }

        $("#searchTerm").val("");
    };


    function displayResults(res) {

        for (var i = 0; i < res.items.length; i++) {

            // item=res.items[i];
            // console.log(item);
            title = res.items[i].volumeInfo.title;
            //  console.log(title);
            author = res.items[i].volumeInfo.authors;
            //console.log(author);
            publisher = res.items[i].volumeInfo.publisher;
            description = res.items[i].volumeInfo.description;
            bookLink = res.items[i].volumeInfo.previewLink;
            bookIsbn = res.items[i].volumeInfo.industryIdentifiers[0].identifier;
            bookImg = res.items[i].volumeInfo.imageLinks.smallThumbnail;
            categories = res.items[i].volumeInfo.categories[0];

            outputList.innerHTML += '<div class="row mt-4">' +
                formatOutput(bookImg, title, author, publisher, bookIsbn) + '</div>';

        }
    }


    function formatOutput(bookImg, title, author, publisher, bookIsbn) {

        var viewUrl = 'read.html?isbn=' + bookIsbn;

        var htmlCard = `
        <div class = 'card searchCard' style= 'background: #DF0D51'>
                <div  class="card-body">
                    <div  class="row">
                        <div  class="col-md-4 imgCol">
                                <img src="${bookImg}" class="card-img" alt="...">
                        </div>
                        <div  class="col-md-8 textCol">
                                <h3 class="card-title">${title}</h3> 

                                <p class="card-text"><b> Author : </b> ${author}</p> 
                                <p class="card-text"><b> Publisher : </b> ${publisher}</p>
                                <p class="card-text"><b> Categories : </b> ${categories}</p>  
                                <p class="card-text"><b> Description : </b><textarea class="form-control text" rows="4" >${description}</textarea></p> 
                                <a target="_blank" href="${viewUrl}" class="btn btn-outline-warning hvr-push">Read More </a>
                                <a target=" href="" class="btn btn-outline-warning hvr-push add">Add My Books </a>
                        </div>
                </div>
            </div>
        </div>                                 
        `

        return htmlCard;
    }

});

// // GIT PULL NO CONFLICTS
$('.book-list').on('click', function (event) {
    let target = event.target;
    let author, genre, title, cover;
    if (target.matches('a.add')) {
        title = event.target.parentElement.children[0].innerHTML,
            author = event.target.parentElement.children[1].innerHTML,
            genre = event.target.parentElement.children[3].innerHTML,
            cover = event.target.parentElement.parentElement.children[0].children[0].getAttribute("src");


        console.log(title);

    }
    const search = '<b>(.*?)</b> ';

    const searchRegExp = new RegExp(search, 'g');
    const replaceWith = '';
    const trimmedTitle = title.replace(searchRegExp, replaceWith);
    const trimmedAuthor = author.replace(searchRegExp, replaceWith);
    const trimmedGenre = genre.replace(searchRegExp, replaceWith);


    const obj = {
        "title": trimmedTitle,
        "genre": trimmedGenre,
        "author": trimmedAuthor,
        "review": "96.0",
        "cover": cover
    }
  
    $.ajax("/api/books", {
        type: "POST",
        data: JSON.stringify(obj),
        dataType: "json",
        contentType: "application/json"
    })
    console.log(obj);
})


