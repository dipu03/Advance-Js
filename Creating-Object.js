// -------------------------------------------------------------------------------
// 1. Using Object Literals
let car1 = {
    name : 'GT',
    maker : 'BMW',
    engine : '1998cc'
};

//adding property to the object
car.brakesType = 'All Disc';
//property accessor
console.log(car1.name); //dot notation
console.log(car1['maker']); //bracket notation

// -------------------------------------------------------------------------------
// 2. Using Constructor Function
function vehicle(name,maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}
//new keyword to create an object
let car  = new vehicle('GT','BMW','1998cc');
//property accessors
console.log(car.name);
console.log(car.maker);
console.log(car['engine']);

// -------------------------------------------------------------------------------
// 3. Using Object.create method
let obj = Object.create(car);
console.log(obj);
console.log(obj.name)


// -------------------------------------------------------------------------------
// 4. Using Class
class User{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
}
let myObj = new User("sanjay", 55)
console.log(myObj)
console.log(myObj.name)
// --------------------------------------------------------------------------------