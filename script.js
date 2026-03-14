
const toggle = document.getElementById("toggleTheme");

if(toggle){
toggle.addEventListener("click",function(){
document.body.classList.toggle("dark-mode");
});
}

const form = document.getElementById("feedbackForm");

if(form){

form.addEventListener("submit",function(e){

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const message=document.getElementById("message").value;
const error=document.getElementById("error");

error.textContent="";

if(name=="" || email=="" || message==""){
e.preventDefault();
error.textContent="All fields are required";
}

});
}
