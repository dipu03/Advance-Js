// Polymorphism = differente behavior of method in different situation(method overriding)
class Animal{
    speak(){
        console.log("Animal can speak");
    }
}
class Dog extends Animal{
    speak(){
        console.log( "Dog does bark");
    }
}
class Cat extends Animal{
    speak(){
        console.log( "Cat does meow");
    }
}
const animal = new Animal();
animal.speak()

const dog = new Dog();
dog.speak()

const cat = new Cat();
cat.speak()