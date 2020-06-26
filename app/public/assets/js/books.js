$(document).ready(function(){
    var title, author, publisher, bookLink, bookImg, bookIsbn, description;
    var outputList=document.getElementById("list-output");
    var bookList =document.querySelector(".book-list");
    var bookUrl="https://www.googleapis.com/books/v1/volumes?q=";
    var placeHldr="<img src='https://via.placeholder.com/150'>";
    var searchData;
    var  myBtn =document.querySelector(".myBtn");
    myBtn.addEventListener('click', function(){
     
        bookList.style.visibility='hidden';


    })
   
    $("#search").click(function(){
   
        bookList.style.visibility='visible';

        outputList.innerHTML="";
        searchData=$("#searchTerm").val();
        if (searchData==="", searchData===null){
            displayError();
        }
        else {
            $.ajax({
                url:bookUrl + searchData,
                dataType: "json",
                success: function(res){

                    console.log(res);
                    if(res.totalItem===0){
                        alert("no results!... try again");
                    }
                    else{
                          
                           //$("title").css('visibility: visible');
                          displayResults(res);

                    }
                },

                error: function(){
                    alert("Something went wrong...")
                }         

            });
        }

        $("#searchTerm").val("");
    });


     function displayResults(res) {
         
        for(var i=0; i<res.items.length; i++){

             // item=res.items[i];
             // console.log(item);
            title= res.items[i].volumeInfo.title;
          //  console.log(title);
             author=res.items[i].volumeInfo.authors;
             //console.log(author);
             publisher=res.items[i].volumeInfo.publisher;
             description=res.items[i].volumeInfo.description;
             bookLink=res.items[i].volumeInfo.previewLink;
             bookIsbn = res.items[i].volumeInfo.industryIdentifiers[1].identifier;
             bookImg = res.items[i].volumeInfo.imageLinks.smallThumbnail;


              outputList.innerHTML += '<div class="row mt-4' + 
              formatOutput(bookImg, title, author, publisher, bookIsbn) + '</div>';

        }
     }


    function formatOutput (bookImg, title, author, publisher, bookIsbn){

        var viewUrl='book.html?isbn=' + bookIsbn;

        var htmlCard = `<div class="card searchCard">
         
        <div  class="card-body">
        <div  class="row">
           <div  class="col-md-4 imgCol">
            <img src="${bookImg}" class="card-img" alt="...">
           </div>
     
           <div  class="col-md-8 textCol">
       
           

                
            <h5 class="card-title">${title}</h5> 

            <p class="card-text">Author: ${author}</p> 
            <p class="card-text">Publisher: ${publisher}</p> 
            <p class="card-text">Publisher: ${description}</p> 
             <a target="_blank" href="${viewUrl}" class="btn btn-danger hvr-push">Read More </a>
             <a target="_blank" href="" class="btn btn-danger hvr-push">Add My Books </a>

          

           </div>





           </div>
           </div>
        </div>
        `

       return htmlCard;
    }
         
 
});





