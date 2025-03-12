/**
 * Promise - An Object that is responisble to manage asynchronous operations.
 *           Promises wrap the asynchronous operation and notify the caller when the operation is completed.
 *           "I promise to return a value"
 *           PENDING -> RESOLVED / REJECTED
 *           new Promise((resolve, reject) => {asyncronous operation})
 * 
 * 
 * Synchrounous vs Asynchronous
 * Synchronous code is dependent on the previous code block to execute before it can run.
 * for example:
 *  
 * we have some tasks to do at home
 * 1. Walk the dog
 * 2. Clean the house
 * 3. Take out the trash
 */

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walked = false;
            if (walked) {
                console.log("Walked the dog");
                resolve();
            } else {
                reject("Dog was not walked");
            }

        }, 3000);
    });
}


function cleanHouse() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cleaned the house");
            resolve();
        }, 2000);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Took out the trash");
            resolve();
        }, 1000);
    });
}

// walkDog(() => {
//     cleanHouse(() => {
//         takeOutTrash(() => {
//             console.log("All tasks completed");
//         });
//     });
// });

walkDog()
    .then(cleanHouse)
    .then(takeOutTrash)
    .then(() => {
        console.log("All tasks completed");
    })
    .catch((error) => {
        console.log(error);
    });