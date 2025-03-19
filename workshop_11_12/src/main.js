import { getStars } from "./utils.js";

const productsDiv = document.querySelector("#products");
const loadMoreButton = document.querySelector("#load-more-products");
const searchForm = document.querySelector("#search-form");
const searchTray = document.querySelector("#search-tray");
let currentPage = 1;
const LIMIT = 10;
let sorted = {
    by: null,
    asc: true
};

const sorters = document.querySelectorAll(".sorter");


function createProductDiv(product) {
    const div = document.createElement("div");
    div.classList.add("col")
    div.innerHTML = (`
        <div class="card h-100 shadow product position-relative">
            <div class="position-absolute d-flex gap-1 m-2 opacity-0 tags">
                ${product.tags.reduce((acc, tag) => acc + (`<span class="bg-success badge">${tag}</span>`), "")}
            </div>
            <a href="productDetails.html?id=${product.id}">
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
            </a>
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


sorters.forEach((sorter) => {
    sorter.addEventListener("click", (event) => {
        event.preventDefault();
        const sortBy = sorter.textContent.trim();
        console.log(sortBy);
        sorters.forEach((sorter) => {
            if (sorter !== event.target) {
                sorter.innerHTML = sorter.textContent.trim();
            }
        });
        if (sorted.asc === false) {
            // clear sorting
            currentPage = 1;
            sorter.innerText = sortBy;
            sorted.by = null;
            sorted.asc = true;
            productsDiv.innerHTML = "";
            fetchAndLoadProducts(`https://dummyjson.com/products?limit=${LIMIT}`);
            return;
        }
    
        if (sorted.by === sortBy.toLowerCase()) {
            // change sorting direction
            sorted.asc = !sorted.asc;
        } else {
            // change sorting by
            currentPage = 1;
            sorted.by = sortBy.toLowerCase();
            sorted.asc = true;
        }

        if (sorted.asc) {
            // change arrow direction
            sorter.innerHTML = `${sortBy} <i class="bi bi-caret-down-fill"></i>`;
        } else {
            sorter.innerHTML = `${sortBy} <i class="bi bi-caret-up-fill"></i>`;
        }

        productsDiv.innerHTML = "";

        fetchAndLoadProducts(`https://dummyjson.com/products?limit=${LIMIT}&sortBy=${sorted.by}&order=${sorted.asc ? "asc" : "desc"}`);
    });
});

function searchProdcuts() {
    fetch(`https://dummyjson.com/products/search?limit=10&q=${searchForm.search.value}`)
        .then((response) => response.json())
        .then(data => {
            const loadingDiv = searchTray.querySelector('.loading');
            const productList = searchTray.querySelector(".product-list");
            const errorDiv = searchTray.querySelector(".error");
            loadingDiv.classList.add("d-none");
            productList.innerHTML = "";
            if (data.products.length === 0) {
                errorDiv.classList.remove("d-none");
            }
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

                productList.appendChild(div);
            });
            searchTray.classList.remove("d-none");
        });
}


loadMoreButton.addEventListener("click", () => {
    if (sorted.by) {
        fetchAndLoadProducts(`https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage * LIMIT}&sortBy=${sorted.by}&order=${sorted.asc ? "asc" : "desc"}`);
    
    } else {
        fetchAndLoadProducts(`https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage * LIMIT}`);
    }
    currentPage++;

    // loadMoreButton.innerHTML = currentPage;
});


fetchAndLoadProducts(`https://dummyjson.com/products?limit=${LIMIT}`);


function debounce(callback, delay) {
    let timeoutId = null;
    return () => {
        const loadingDiv = searchTray.querySelector('.loading');
        const productList = searchTray.querySelector(".product-list");
        const errorDiv = searchTray.querySelector(".error");
        errorDiv.classList.add("d-none");
        console.log(loadingDiv);
        loadingDiv.classList.remove("d-none");
        searchTray.classList.remove("d-none");
        productList.innerHTML = "";
        // console.log(timeoutId);
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(callback, delay);
    }
}

const debouncedSearch = debounce(searchProdcuts, 500);

searchForm.search.addEventListener("input", () => {
    debouncedSearch();
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


