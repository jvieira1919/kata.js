const signInEl= document.querySelector('.signIn');
const showcase=document.querySelector('.showcase-content');
const great=document.querySelector('.great');
const signInSlider=document.querySelector('#signIn');
const signUpSlider=document.querySelector('#signUp');
const btnSlider=document.querySelector('#btn');
const formBox=document.querySelector('.form-box');
const bookBrain=document.querySelector('#bookBrain');




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

 