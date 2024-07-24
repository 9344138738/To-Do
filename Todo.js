var ul = document.getElementById("list-container");
var input = document.getElementById("input");

function add() {
    var listItem = document.createElement("li");
    listItem.innerHTML = input.value + ' <button onclick="deleteItem(event)">Delete</button>';
    ul.append(listItem);
}

function deleteItem(event) {
    event.target.parentElement.remove();
}
