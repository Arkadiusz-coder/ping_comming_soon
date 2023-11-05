 const email = document.getElementById("email");
const button = document.querySelector(".email_button");
const validation = document.getElementById("validation");

function emailValidation() {

    let emailValue = email.value;

    if (emailValue.match(/^[a-zA-Z0-9-_.]+@[a-zA-Z]+\.[a-zA-Z]+$/))
    {
        document.querySelector(".invalid_email").style.display = "none";
        validation.textContent = "";
        document.getElementById("email").style.border = "1px solid green";

    }
    else
    {
        document.querySelector(".invalid_email").style.display = "block";
        validation.textContent = "Please provide a valid email address";
        document.getElementById("email").style.border = "1px solid red";

    }
   
}


button.addEventListener("click", function()
{
   button.classList.toggle("clicked");
   emailValidation();
});