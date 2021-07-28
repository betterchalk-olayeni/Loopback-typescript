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
