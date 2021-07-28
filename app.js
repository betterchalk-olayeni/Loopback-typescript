var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
//Lesson 10-Generic Classes and interfaces
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var List = /** @class */ (function () {
    function List() {
        this.data = [];
    }
    List.prototype.add = function (t) {
        this.data.push(t);
    };
    List.prototype.remove = function (t) {
        var index = this.data.indexOf(t);
        if (index > -1) {
            this.data.splice(index, 1); //array.splice(index, howmany, item1, ....., itemX)
        }
    };
    List.prototype.arrayItems = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List();
numbers.add(11);
numbers.add(12);
numbers.add(13);
numbers.remove(13);
var numbersArray = numbers.arrayItems();
console.log(numbersArray);
//Lesson 11 - Introduction to decorators
/*A decorator is a special kind of declaration that can be attached to a class, declaration, method,
accessor, property or parameter. It uses the form @expression which evaluates a function that will
be called at runtime with information about the decorated declaration.
In the code below, the function log was declared with all its logic and properties then it was
called in the class Calculator.

The target is an object with the function square
Target { square: [Function (anonymous)] }

The key is the name of the function
KEY square

The descriptor is an object with the following properties
Descriptor {
  value: [Function (anonymous)],
  writable: true,
  enumerable: true,
  configurable: true
}
*/
function log(title) {
    return function (target, key, descriptor) {
        console.log("Target", target);
        console.log("KEY", key);
        console.log("Descriptor", descriptor);
        //descriptor is the method
        var original = descriptor.value;
        console.log("Original", original); //This is an anonymous function 
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            //Call the original method, this is pointing to the calculator and its arguments
            var result = original.apply(this.args);
            //Log the call, and the result. .apply method binds the argument and the function together
            console.log("Title: " + title + " with args " + JSON.stringify(args) + " returned " + JSON.stringify(result) + " ");
            //return result
            return result;
        };
        return descriptor;
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    //Using decorator functions: @log
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log('Calculator Function Decorator')
    ], Calculator.prototype, "square", null);
    return Calculator;
}());
var calc = new Calculator();
calc.square(2);
calc.square(4);
//Lesson 14: Property Decorators
/*The descriptor parameter isn't needed here because we can access

*/
function property(target, key) {
    console.log("Target", target);
    console.log("Key", key);
    var value = target[key];
    //Replacement getter
    var getter = function () {
        console.log("Getter for " + key + " returned " + value);
        return value;
    };
    //Replacement Setter
    var setter = function (newVal) {
        console.log("Set " + key + " to " + newVal);
        value = newVal;
    };
    //Replace the property
    var isDeleted = delete this[key];
    if (isDeleted) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
var Person = /** @class */ (function () {
    function Person() {
    }
    __decorate([
        property
    ], Person.prototype, "firstName", void 0);
    return Person;
}());
var individual = new Person();
individual.firstName = "Yensss"; //This calls the setter function
//Calling the getter function 
console.log(individual.firstName);
