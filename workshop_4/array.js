let temperatures = [7, 10, 9, 5, -1, -2];

console.log(`in total we recorded ${temperatures.length} Days`);
console.log(`on first day we recorded ${temperatures[0]}°C`);
if (temperatures.length % 2 == 0) {
    let rightIndex = (temperatures.length / 2);
    let leftIndex = (temperatures.length / 2) - 1;

    let leftDay = rightIndex;
    let rightDay = rightIndex + 1;

    let leftTemp = temperatures[leftIndex];
    let rightTemp = temperatures[rightIndex];

    console.log(`on days: ${leftDay} / ${rightDay} we recorded: ${leftTemp}°C / ${rightTemp}°C`);
    console.log(`AVG: ${(leftTemp + rightTemp) / 2}`);
} else {
    console.log(`on day ${Math.floor(temperatures.length / 2) + 1} we recorded ${temperatures[Math.floor(temperatures.length / 2)]}°C`);
}
console.log(`on last day we recorded ${temperatures[temperatures.length - 1]}°C`);


console.log('Daily:')
for (let i = 0; i < temperatures.length; i++) {
    console.log(`Day ${i + 1} we recorded ${temperatures[i]}°C`)
}