let button = document.querySelector("#btn");
let form = document.querySelector('#my-form');
form.addEventListener('submit', function(event){
 event.preventDefault()
 let name = document.querySelector('#name').value;
 let email = document.querySelector('#email').value;
 let id = new Date().getTime();
 let obj = {
  "id": id,
  "name": name,
  "email": email
 }
 localStorage.setItem(id,JSON.stringify(obj))
})