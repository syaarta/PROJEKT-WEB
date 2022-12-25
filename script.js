let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');


}
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
function validoLogin(){
    var emaili=document.getElementById("email").value;
    var regex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if(emaili.trim()==""){
        alert("Shkruaj nje email: ");
    }
    else if((regex.test(emaili))){
        alert("Sumbitted succesfully");
    }
    else{
        alert("Wrong email");
    }

    var passwordi=document.getElementById("password").value;
    var regex=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if(passwordi.trim()==""){
        alert("Shkruaj passwordin");
    }
    else if((regex.test(passwordi))){
        alert("Password i sakte");
    }
    else{
        alert("Passwordi gabim");
    }
}
