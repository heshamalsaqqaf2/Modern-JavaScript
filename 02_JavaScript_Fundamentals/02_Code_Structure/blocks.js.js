if (true) {
    let blockScoped = "I'm inside the block";
    console.log(blockScoped);
}
// console.log(blockScoped); // This would cause an error
for (let i = 0; i < 3; i++) {
    console.log("Loop iteration: " + i);
}
let sum =
    1 +
    2 +
    3;
console.log(sum); // Outputs: 6