let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;
//Array of strings
// let strArr: string[];
// let strArr2: string[];
// let numArr: number[];
// let booleanArr: boolean[];
let strArr: Array<string>;
let strArr2: Array<string>;
let numArr: Array<number>;
let booleanArr: Array<boolean>;

let strNumTuple : [string,number];

myBool = false;
myNum = 22;
myString = 'Hello'.slice(0,2);
myVar = true;

strArr = ['Hello','World','1'];
numArr = [1,2,3,4];
booleanArr = [true,false,true,false,false];

console.log(booleanArr[0]);
numArr.forEach(num => console.log(num));

strNumTuple = ['Hello',3];
console.log(strNumTuple);

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = null;
console.log(myUndefined);
console.log(myNull);
console.log(myVoid);


let strLength = strArr.length;
console.log(strLength);
console.log(myBool);
console.log(myNum);
console.log(myString);
