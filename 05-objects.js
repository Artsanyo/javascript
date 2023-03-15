const cookie = {
    name: "Chocolate Chip",
    isGlutenFree: false,
    origin: "Texas",
    "+Yummy": true
};

cookie.origin = "Kenya"

console.log(cookie);
console.log(cookie.name) // property of name
console.log(cookie["name"]) // property of name
//using square bracket to access object properties
//using square bracket to access object properties  object["key"] or object.name
console.log(cookie["+Yummy"]);
