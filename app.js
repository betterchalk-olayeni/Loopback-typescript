//Lesson 3
var HelloWorld = /** @class */ (function () {
    function HelloWorld(message) {
        console.log(message);
    }
    return HelloWorld;
}());
var hello = new HelloWorld("Olayeni- Welcome to TS");
console.log(hello);
//Lesson 4
function LoggerAndReturn(thing) {
    return thing;
}
var message = LoggerAndReturn("HELLO WOLDR");
console.log(message);
var messageB = LoggerAndReturn(2);
console.log(messageB);
//Lesson 5
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(["Hello", "Olayeni", "Anifowose"]);
//TypeScript can also infer the type of the arguments being passed into the array
var myNumArrInf = getArray([1, 2, 3, 4, 5]);
var myStrArrInf = getArray(["I'm", "learning", "TS"]);
console.log(myNumArr);
console.log(myStrArr);
console.log(myNumArrInf);
console.log(myStrArrInf);
//Lesson 6
//multiple type variables
function getInfo(id, name) {
    console.log(typeof id + ',' + typeof name);
}
getInfo(34, "Yensss");
//generic with non generic type
function displayType(id, name) {
    console.log(typeof id + ',' + typeof name);
}
displayType(32, "STRING!");
//Lesson 7 
//Generic Constraints
var Customer = /** @class */ (function () {
    function Customer(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    return Customer;
}());
function customerLogger(customer) {
    console.log(customer.firstname + " " + customer.lastname);
}
var customer = new Customer("Mobolaji", "Anifowose");
customerLogger(customer);
var person = {
    first: "Olayeni Anifowose",
    second: false
};
var p = {
    first: "Jumia",
    second: 400
};
console.log(person, p);
var c = {
    id: "31034052345",
    run: function () {
        return +c.id;
    }
};
console.log(c.id);
console.log(c.run());
function checkElementAt(items, toBeChecked, atIndex) {
    return items[atIndex] === toBeChecked;
}
var checker = checkElementAt;
var items = [1, 2, 3, 4, 5, 6];
var b = checker(items, 5, 4);
console.log(b);
var b2 = checker(items, 6, 3);
console.log(b2);
var s = {
    graduate: true,
    "6 foot?": false
};
console.log(s);
console.log(s["graduate"]);
