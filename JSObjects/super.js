

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("Kevin", 4, 25);
const fish = new Fish("Bob", 2, 15);
const hawk = new Hawk("Susan", 6, 60);