
var form = document.querySelector("form");
var name = form.querySelector("#text");
var email = form.querySelector("#email");
var password = form.querySelector("#password");
form.addEventListener("submit",submitHandler);

function submitHandler(event){
    event.preventDefault();
    
    var userInfo = {
        text : name.value,
        email : email.value,
        password : password.value,
    }
    console.log(userInfo);
    text.value = "";
    email.value = "";
    password.value = "";
}