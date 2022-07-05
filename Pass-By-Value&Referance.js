// Primitive store into Stack where Non-Primitive store into Heap
let arr1 = [1, 2]; // non-primitive(apss by refearnce)
let arr2 = [1, 2];
let str1 = "hello"; // primitive(pass bt value)
let str2 = "hello";
console.log(arr1===arr2) // false
console.log(arr1==arr2)   // false
console.log(str1===str2)   // true
console.log(str1==str2)   // true


// =----------------------------------------------------------------------------------
// Pass By Value
// Example  - 1
function multiply(temp){
    temp = temp*10;
    return temp
}
let num = 10;
let result = multiply(num);
console.log(num);  // 10  (becouse it is pass by value)(we are making a copy pf value of num  and assign it inito temp so temp and num are in different adress)
console.log(result);  // 100
console.log(num)   // 10

// = ---------------------------------------------------------------------------------
// Example - 2
let a = 70;
let b = a;   // create a new space for be with the value of a
console.log(a);  // 70
console.log(b); // 70

a = 50;
console.log(a);  // 50
console.log(b)   // 70


// =------------------------------------------------------------------------------------
// Pass By Referance
// Example - 1
let arr = [1, 2];
let arr3 = arr;  // asssign arr3 at the same adress where arr is assigned
console.log(arr);  // [1, 2]
console.log(arr3);  // [1 , 2]

arr[1] = 50; 
console.log(arr); // [1, 50]  
console.log(arr3);  // [1, 50] it will alse change becouse it refer to the same adress so when we change arr it will also change arr3

// =---------------------------------------------------------------------------------------------
// Example - 2
function changeArr(a){
    a.push(10);
    return a
}
let x = [1, 2];
console.log(x);  // [1, 2]
let res = changeArr(x); 
console.log(res)  // [ 1, 2, 10 ]
console.log(x)   // [ 1, 2, 10 ]  // pass by referance chnage the original value of x as same referance is passed into function



