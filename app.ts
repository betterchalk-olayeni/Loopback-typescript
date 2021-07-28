//Lesson 3
class HelloWorld {
    constructor(message){
        console.log(message);
        
    }
}

const hello = new HelloWorld("Olayeni- Welcome to TS");
console.log(hello);

//Lesson 4
function LoggerAndReturn<T>(thing:T): T{
    return thing;
}

const message:string = LoggerAndReturn<string>("HELLO WOLDR")
console.log(message);

const messageB: number = LoggerAndReturn(2);
console.log(messageB);

//Lesson 5
function getArray<T>(items:T[]): T[]{
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100,200,300]);
let myStrArr = getArray<string>(["Hello", "Olayeni", "Anifowose"])

//TypeScript can also infer the type of the arguments being passed into the array
let myNumArrInf = getArray([1,2,3,4,5]);
let myStrArrInf = getArray(["I'm", "learning", "TS"])

console.log(myNumArr);
console.log(myStrArr);

console.log(myNumArrInf);
console.log(myStrArrInf);


//Lesson 6
//multiple type variables
function getInfo<T,U>(id:T, name:U):void{
    console.log(typeof id + ',' + typeof name)
}

getInfo<number, string>(34, "Yensss")

//generic with non generic type
function displayType<T>(id:T, name:string):void{
    console.log(typeof id + ',' + typeof name);
}

displayType<number>(32, "STRING!")


//Lesson 7 
//Generic Constraints
class Customer{
    firstname:string;
    lastname:string;

    constructor(fname:string, lname: string){
        this.firstname = fname;
        this.lastname = lname;
    }

}

function customerLogger<T extends Customer>(customer:T):void{
    console.log(`${customer.firstname} ${customer.lastname}`);
}

let customer = new Customer("Mobolaji", "Anifowose");
customerLogger(customer);

