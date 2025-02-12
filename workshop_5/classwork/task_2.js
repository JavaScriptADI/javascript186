/**
 * Ask user for temperature (ensure it's a number but also it should be from [-100, 100])
 * if everything is correct put that number inside temps list
 * 
 * then calculate average of temperatures
 * if user enters q (stop recording)
 * 
 * also show user which day is he wiritng for
 */

const temperatures = [];


while (true) {
    const userInput = prompt(`Enter temperature for day ${temperatures.length + 1} [-100, 100] (enter \"q\" to stop recording)`)

    if (userInput === "q") {
        break;
    }

    const temperature = Number(userInput);
    if (-100 <= temperature && temperature <= 100) {
        temperatures.push(temperature);
        continue
    }
    console.log("Please ensure temperature is in correct range [-100, 100]");
}

console.log(temperatures);
let totalTemp = 0;
for (let i = 0; i < temperatures.length; i++) {
    totalTemp += temperatures[i];
}

console.log(`Average temperature is ${totalTemp / temperatures.length}`);
