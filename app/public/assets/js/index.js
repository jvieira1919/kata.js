$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form#signUp");
    var emailInputt = $("input#emaill-input");
    var passwordInputt = $("input#passwordd-input");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInputt.val().trim(),
        password: passwordInputt.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password);
      emailInputt.val("");
      passwordInputt.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the user page
    // Otherwise we log any errors
    function signUpUser(email, password) {
      $.post("/api/signup", {
        email: email,
        password: password
      })
        .then(function(data) {
          window.location.replace("/user");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  
  
  
  
  
  
  
  
   // Getting references to our form and inputs
   var loginForm = $("form#signIn");
   var emailInput = $("input#email-input");
   var passwordInput = $("input#password-input");
  
   // When the form is submitted, we validate there's an email and password entered
   loginForm.on("submit", function(event) {
     event.preventDefault();
     var userData = {
       email: emailInput.val().trim(),
       password: passwordInput.val().trim()
     };
  
     if (!userData.email || !userData.password) {
       return;
     }
  
     // If we have an email and password we run the loginUser function and clear the form
     loginUser(userData.email, userData.password);
     emailInput.val("");
     passwordInput.val("");
   });
  
   // loginUser does a post to our "api/login" route and if successful, redirects us the the user page
   function loginUser(email, password) {
     $.post("/api/login", {
       email: email,
       password: password
     })
       .then(function() {
         window.location.replace("/user");
         // If there's an error, log the error
       })
       .catch(function(err) {
         console.log(err);
       });
   }
  
  
  
  
  
  
  
  
  
  const signInEl= document.querySelector('.signIn');
  const showcase=document.querySelector('.showcase-content');
  const great=document.querySelector('.great');
  const signInSlider=document.querySelector('#signIn');
  const signUpSlider=document.querySelector('#signUp');
  const btnSlider=document.querySelector('#btn');
  const formBox=document.querySelector('.form-box');
  const bookBrain=document.querySelector('#bookBrain');
  
  const xxx=document.querySelector('.xxx');
  const yyy=document.querySelector('.yyy');
  
  xxx.addEventListener('click', signIn);
  yyy.addEventListener('click', signUp);
  
  signInEl.addEventListener('click', buttonShow);
  great.addEventListener('click', buttonShow);
  
   function buttonShow(){
      
      if( showcase.style.visibility=='hidden') {
          formBox.style.visibility='hidden';
          showcase.style.visibility='visible' ;
          signInEl.innerHTML = 'Sign in';
          bookBrain.style.visibility='visible';
  
      }
      else{
          bookBrain.style.visibility='hidden';
          showcase.style.visibility='hidden';
          signInEl.innerHTML = 'Home';
          formBox.style.visibility='visible';
      }
      
  };
  
   function signUp(){
      signInSlider.style.left="-400px";
      signUpSlider.style.left="50px";
      btnSlider.style.left="110px"
   }
   function signIn(){
      signInSlider.style.left="50px";
      signUpSlider.style.left="450px";
      btnSlider.style.left="0px"
   }
  
  
  
  
  
  
  });