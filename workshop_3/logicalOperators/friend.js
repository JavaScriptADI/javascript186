// we go to movies and we eat popcorn
let weWentToMovies = false;
let weAtePopcorn = false;
// expression 
let didWeFulfilPromise = weWentToMovies && weAtePopcorn;

console.log(`didWeFulfilPromise (AND)? ${didWeFulfilPromise}`);

// we go to park or we go to movies
let weWentToPark = true;
weWentToMovies = true;
didWeFulfilPromise = weWentToPark || weWentToMovies;
console.log(`didWeFulfilPromise (OR)? ${didWeFulfilPromise}`);

