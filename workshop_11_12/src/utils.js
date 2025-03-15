const fullStar = '<i class="bi bi-star-fill text-warning"></i>\n';
const halfStar = '<i class="bi bi-star-half text-warning"></i>\n';
const emptyStar = '<i class="bi bi-star text-warning"></i>\n';

export function getStars(rating) {
    return `${fullStar.repeat(Math.floor(rating))}
            ${rating % 1 >= 0 ? halfStar : ""}
            ${emptyStar.repeat(5 - Math.ceil(rating))}`;
}

export function getFinalPrice(price, discountPercentage) {
    return Math.round((price - (price * discountPercentage / 100)) * 100) / 100;
}
