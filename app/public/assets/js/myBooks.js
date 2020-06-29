$(document).ready(function () {
    var title, author, publisher, bookLink, bookImg, bookIsbn, description, categories;
    var outputList = document.getElementById("list-output");
    var bookList = document.querySelector(".book-list");
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    var placeHldr = "<img src='https://via.placeholder.com/150'>";
    var searchData;
    var myBtn = document.querySelector(".myBtn");
    var chk = document.getElementById('chk');


    // myBtn.addEventListener('click', function(){   
    //     bookList.style.visibility='hidden';
    // });


    chk.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });


    search();

    function search() {


        // event.preventDefault();

        bookList.style.visibility = 'visible';

        outputList.innerHTML = "";
        searchData = $("#searchTerm").val();
        if (searchData === "", searchData === null) {
            displayError();
        }
        else {
            $.ajax({
                url: "/api/books",
                dataType: "json",
                success: function (res) {
                    console.log(res);
                    
                    displayResults(res);
                }
            })
        }
    }

              

$("#searchTerm").val("");

function displayResults(res) {

    for (var i = 0; i < res.length; i++) {

        title = res[i].title;
        author = res[i].author;
        review = res[i].review;
        bookImg = res[i].cover;
        categories = res[i].genre;

        outputList.innerHTML += '<div class="row mt-4">' +
            formatOutput(bookImg, title, author, review) + '</div>';

    }
}


function formatOutput(bookImg, title, author, review) {


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
                            <p class="card-text"><b> Categories : </b> ${categories}</p>  
                            <p class="card-text"><b> Review : </b><textarea class="form-control text" rows="4" >${review}</textarea></p> 
                        </div>

                </div>
           </div>
    </div>                                 
        `

    return htmlCard;
}


});





