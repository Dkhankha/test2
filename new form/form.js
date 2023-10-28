let email = document.getElementById('email');
let password = document.getElementById("password");
let login = document.getElementById("login");
let emailerr = document.getElementById("emailerror");
let pswrderr = document.getElementById("passerror");
login.addEventListener("click" , ()=>{
    if(email.value === ""){
      emailerr.innerHTML = "Email Req";
      setTimeout(() => {
        emailerr.innerHTML = "";
    }, 2000);
} else if(email.value != "" && password.value == ""){
    pswrderr.innerHTML = "Password Req";
    setTimeout(() => {
        pswrderr.innerHTML = "";
    }, 2000);
} else {
    alert("login sucessfully!");
    document.querySelector(".container").style.display = "none";
    document.querySelector(".welcome_box").style.display = "block";
}
})

let logout = document.getElementById("logout");

logout.addEventListener("click", ()=> {
    window.location.reload();
})