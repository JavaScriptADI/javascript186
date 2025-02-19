const div = document.getElementById("test");
console.log(div.innerText);
div.innerText = "გამარჯობა";
// div.style.background = "blue";
div.style.color = "white";
div.style.padding = "1rem";
div.style.cursor = "pointer";

// div.className = "green box test";
div.classList.add("green");
div.classList.remove("oldClass");
div.classList.toggle("green");

function changeColor(event) {
    event.target.classList.toggle("green");
    console.log(event.target);
}

function mouseEnterCallback(event) {
    event.target.style.background = "red";
}
function mouseLeaveCallback(event) {
    event.target.style.background = "yellow";
}
function removeDiv(event) {
    div.remove();
}
function addNewDiv(text) {
    const div = document.createElement("div");
    function removeDiv(event) {
        div.remove();
    }
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    // div.innerText = "<p>This is a paragraph</p>";
    div.innerHTML = `<p>${text} ${Math.floor(Math.random() * 100)}</p>`;
    div.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", removeDiv);

    console.log(div);
    document.body.appendChild(div);
}
div.addEventListener("click", changeColor);
div.addEventListener("mouseenter", mouseEnterCallback);
div.addEventListener("mouseleave", mouseLeaveCallback);
console.log(div);


const deleteBtn = document.getElementById("deleteBtn");
addForm = document.getElementById("addDivForm");

function submit(event) {
    event.preventDefault();
    console.log(event);
    const textInput = event.target.text;
    console.log(textInput.value);
    addNewDiv(textInput.value);
    textInput.value = null;
}
// const addBtn = document.getElementById("addBtn");
deleteBtn.addEventListener("click", removeDiv);
addForm.addEventListener("submit", submit);
// addBtn.addEventListener("click", addNewDiv);