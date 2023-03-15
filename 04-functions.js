function sum(a, b) {
    return a + b;

}

console.log(sum(10, 10));

function product(a, b) {
    return a * b;
}
console.log(product(10, 7));

const bigProduct = product(53776, 6777);


console.log(bigProduct);


// ANONYMUS FUNCTIONS
setTimeout(function () {
    console.log("Time's up!");
}, 10000);

setTimeout(() => { console.log("Hey you rock!!!"); }, 10000);
// same thing as below
setTimeout(() => console.log("you rock!!!"), 3000);

setTimeout(function () { console.log("Nothing here") }, 2000);