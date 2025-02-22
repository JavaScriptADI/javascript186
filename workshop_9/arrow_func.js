const button = document.getElementById("main-button");

const onClick = (event) => {
    console.log(event);
}

button.addEventListener("click", (event) => {
    button.style.background = "green";
});