let istatus = document.querySelector("h5");
let button = document.querySelector("#btn");
let flag = 1;
button.addEventListener("click", function () {
    if (flag == 1) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green"
        button.innerHTML = "Remove Friend";
        button.style.backgroundColor = "grey";
        flag = 0;
    } else {
        flag = 0;
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        button.innerHTML = "Add Friend";
        button.style.backgroundColor = "cadetblue";
        flag = 1;
    }
})