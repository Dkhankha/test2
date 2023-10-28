let button = document.getElementById("btn");
button.addEventListener("click", function saveData(event) {
    event.preventDefault()
    let name = document.querySelector('#todo-name').value;
    let desc = document.querySelector('#todo-desc').value;
    let obj = {
        'name': name,
        'desc': desc
    }
     showUsers(obj);
});

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get('https://crudcrud.com/api/1638159a006d40959c12883e1a74cc57/todos');
        for (var i = 0; i < response.data.length; i++) {
            await showCompletedTodos(response.data[i]);
        }
    } catch (err) {
        console.log(err);
    }
});

async function showCompletedTodos(obj) {
    let completedList = document.querySelector('#completed-list');

    // Create a new list item for the completed todos list
    let completedLi = document.createElement('li');
    completedLi.className = 'childList';
    let listItemText = `${obj.name}:${obj.desc}`;
    completedLi.innerHTML = `${listItemText} `;

    // Add the completed list item to the completed todos list
    completedList.appendChild(completedLi);
}

async function showUsers(obj) {
    let parentList = document.querySelector('#list');
    let completedList = document.querySelector('#completed-list');
    // Create a new list item
    let newLi = document.createElement('li');
    newLi.className = 'childList';
    let listItemText = `${obj.name}:${obj.desc}`;

    // Create "DONE" and "DELETE" buttons for each list item
    let donebtn = document.createElement('button');
    let deletebtn = document.createElement('button');
    donebtn.className = 'done';
    deletebtn.className = 'delete';
    donebtn.appendChild(document.createTextNode('DONE'));
    deletebtn.appendChild(document.createTextNode('DELETE'));

    // Append the "DONE" and "DELETE" buttons to the list item
    newLi.innerHTML = `${listItemText} `;
    newLi.appendChild(donebtn);
    newLi.appendChild(deletebtn);

    // Add the new list item to the remaining todos list
    parentList.appendChild(newLi);

    deletebtn.onclick = () => {
        parentList.removeChild(newLi);
    }

    // Event listener for the "DONE" button
    donebtn.addEventListener('click', async function () {
        // Remove the list item from the remaining todos list
        parentList.removeChild(newLi);

        // Create a new list item for the completed todos list
        let completedLi = document.createElement('li');
        completedLi.className = 'childList';
        completedLi.innerHTML = `${listItemText} `;

        // Add the completed list item to the completed todos list
        completedList.appendChild(completedLi);

        try {
            // Send the completed todo data to the API
            const response = await axios.post('https://crudcrud.com/api/1638159a006d40959c12883e1a74cc57/todos', obj);
            // Handle the API response if needed
            console.log('Todo marked as completed and sent to API:', response.data);
        } catch (err) {
            document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong with API request </h4>";
            console.log(err);
        }
    });
}
