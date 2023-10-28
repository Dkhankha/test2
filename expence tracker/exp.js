let button = document.getElementById("bt");
button.addEventListener("click",function saveData(event){ 
    event.preventDefault()
    let ExpAmt = document.getElementById('amount').value;
    let description = document.getElementById('desc').value;
    let category = document.getElementById('category').value;
    let uniquekey = Date.now().toString();
    let obj = {
        "uniquekey": uniquekey,
        "ExpAmt": ExpAmt,
        "desc": description,
        "expCat": category
    }
    localStorage.setItem(uniquekey, JSON.stringify(obj));
    showUsers(obj);
}
)
function showUsers(obj) {
    let parentele = document.getElementById("items");
    let childele = document.createElement("li");
    childele.classList = "list-group-item mt-3";
    childele.appendChild(document.createTextNode(`${obj.ExpAmt}: ${obj.desc}:${obj.expCat}`))
    parentele.appendChild(childele);

    let deletebutton = document.createElement("button");
    deletebutton.className = "btn btn-outline-info btn-sm float-right";
    deletebutton.appendChild(document.createTextNode("Delete Expense"));
    childele.appendChild(deletebutton);
    deletebutton.onclick = () => {
        localStorage.removeItem(obj.uniquekey); // Use obj.uniquekey to remove the item
        parentele.removeChild(childele);
    }
    let editbutton = document.createElement("button");
    editbutton.className = "btn btn-outline-info btn-sm float-right";
    editbutton.appendChild(document.createTextNode("Edit Expense"))
    childele.appendChild(editbutton);
   
    editbutton.onclick = () => {
        localStorage.removeItem(obj.uniquekey); // Use obj.uniquekey to remove the item
        parentele.removeChild(childele);
        document.getElementById('amount').value = obj.ExpAmt
        document.getElementById('desc').value = obj.desc
        document.getElementById('category').value = obj.category
    }
}