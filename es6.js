//Defining the class with constructor and method

class Animal{
    constructor(name,sound){
        this.name = name;
        this.name = name;
    }

    makeSound(){
        console.log(`${this.name} says ${this.sound}`);
    }
}
const dog = new Animal("Dog","Woof");
dog.makeSound();