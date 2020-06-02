// Classes, Properties and Methods
class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getArea() {
        return this.width * this.height;
    }

    printDescription() {
        console.log(
            `i am reactgle of ${this.width} width, ${this.height} height and ${this.color} color.`
        );
    }
}

let myRectangle1 = new Rectangle(5, 10, 'blue');
console.log(myRectangle1);
console.log(myRectangle1.getArea());
console.log(myRectangle1.printDescription());
let myRectangle2 = new Rectangle(6, 8, 'red');
console.log(myRectangle2.printDescription());

// Inheritance
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe() {
        console.log(`Hi, I am ${this.name}. I am ${this.age} yrs old.`);
    }
}

class Programmer extends Person {
    constructor(_name, _age, yrsExperience) {
        super(_name, _age);
        this.yrsExperience = yrsExperience;
    }
}

let person = new Person('Alex', 27);
console.log(person);

let programmer = new Programmer('Dips', 27, 5);
console.log(programmer);

// Static Methods
class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    static equals(a, b) {
        return a.width * a.height === b.width * b.height;
    }
}

let square5 = new Square(5);
let square6 = new Square(6);
console.log(Square.equals(square5, square6));

// Classes Polymorphism
class Animal {
    constructor(_name) {
        this.name = _name;
    }

    makeSound() {
        console.log('Generic Animal Sound');
    }
}

class Dog extends Animal {
    constructor(_name) {
        super(_name);
    }

    makeSound() {
        console.log('Woof!');
    }
}

let animal = new Animal('Dom');
animal.makeSound();

let dog = new Dog('Doggy');
dog.makeSound();