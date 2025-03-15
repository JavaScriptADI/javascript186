import { getFinalPrice, getStars } from "./utils.js";


// console.log(window.location.href);
// console.log(window.location.search);
const searchParams = new URLSearchParams(window.location.search);
// console.log(searchParams.get("id"));



function changeImage(event, src) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}

fetch(`https://dummyjson.com/products/${searchParams.get("id")}`)
    .then((response) => response.json())
    .then((product) => {
        document.querySelector("#product-title").innerHTML = product.title;
        document.querySelector("#product-sku").innerHTML = `SKU: ${product.sku}`;
        document.querySelector("#product-final-price").innerHTML = `$${getFinalPrice(product.price, product.discountPercentage)}`;
        document.querySelector("#product-price").innerHTML = `<s>$${product.price}</s>`;
        document.querySelector("#product-description").innerHTML = product.description;
        document.querySelector("#product-rating").innerHTML = (`
            ${getStars(product.rating)}
            <span class="ms-2">${product.rating} (${product.reviews.length} reviews)</span>
        `);
        document.querySelector("#mainImage").src = product.thumbnail;
        const imagesDiv = document.querySelector("#product-images");

        for (const imageUrl of product.images) {
            const img = document.createElement("img");
            img.src = imageUrl;
            img.className = "thumbnail rounded active";
            img.addEventListener("click", (event) => changeImage(event, imageUrl));
            imagesDiv.appendChild(img);
        }
    })
    .catch((error) => {
        // window.location.href = "index.html";
        console.log(error);
        document.querySelector("#main-div").innerHTML = "Product not found!";
    })