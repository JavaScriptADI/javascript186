import { getStars } from "./utils.js";

const productsDiv = document.querySelector("#products");
const loadMoreButton = document.querySelector("#load-more-products");
const searchForm = document.querySelector("#search-form");
const searchTray = document.querySelector("#search-tray");
let currentPage = 1;
const LIMIT = 10;

function createProductDiv(product) {
    const div = document.createElement("div");
    div.classList.add("col")
    div.innerHTML = (`
        <div class="card h-100 shadow product position-relative">
            <div class="position-absolute d-flex gap-1 m-2 opacity-0 tags">
                ${product.tags.reduce((acc, tag) => acc + (`<span class="bg-success badge">${tag}</span>`), "")}
            </div>
            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">${product.title}</h5>
                <div class="d-flex justify-content-between">
                    <span>${product.price}$</span>
                    <div class="text-warning d-flex align-middle">
                        ${getStars(product.rating)}
                    </div>
                </div>
                <p class="card-text">${product.description}</p>
                <a href="productDetails.html?id=${product.id}" class="btn btn-primary">Details</a>
            </div>
        </div>
    `);
    return div;
}

function renderProducts(products) {
    products.forEach((product) => {
        productsDiv.appendChild(createProductDiv(product));
    });
}


function fetchAndLoadProducts(url) {
    fetch(url)
    .then(
        (response) => response.json(), 
        (error) => productsDiv.innerHTML = "There has been an error"
    )
    .then(
        (data) => {
            renderProducts(data.products);
            if (data.total <= currentPage * LIMIT) {
                loadMoreButton.classList.add("disabled")
            }
        },
        (error) => productsDiv.innerHTML += "There was an error during the parse!"
    );
}


loadMoreButton.addEventListener("click", () => {
    fetchAndLoadProducts(`https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage * LIMIT}`);
    currentPage++;
    // loadMoreButton.innerHTML = currentPage;
});


fetchAndLoadProducts(`https://dummyjson.com/products?limit=${LIMIT}`);

searchForm.addEventListener("submit", (event) => {
    // TODO: Implement debounce search
    event.preventDefault();
    console.log(searchForm.search.value);
    fetch(`https://dummyjson.com/products/search?limit=10&q=${searchForm.search.value}`)
        .then((response) => response.json())
        .then(data => {
            searchTray.innerHTML = "";
            data.products.forEach((product) => {
                const div = document.createElement("div");
                div.innerHTML = (`
                    <a class="row p-2 rounded shadow m-1 product d-flex align-items-center text-decoration-none text-white" 
                       style="background: rgba(75, 75, 75, 0.6); cursor: pointer;" href="productDetails.html?id=${product.id}">
                        <span class="col-2 bg-light rounded d-flex justify-content-center align-items-center">
                            <img src="${product.thumbnail}" width="50" height="50"/>
                        </span>
                        <span class="col-7">${product.title}</span>
                        <span class="col-2">${product.price}$</span>
                    </a>
                `);

                searchTray.appendChild(div);
            });
            searchTray.classList.remove("d-none");
        })
});

searchForm.search.addEventListener("input", () => {
    searchTray.innerHTML = "";
    searchTray.classList.add("d-none");
});

searchForm.search.addEventListener("focus", () => {
    if (searchForm.search.value.length > 0) {
        searchTray.classList.remove("d-none");
    }
});

document.addEventListener("click", (event) => {
    if (!searchTray.contains(event.target) && !searchForm.contains(event.target)) {
        searchTray.classList.add("d-none");
    }
});
