

class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return `I am the owner of the ${this.brand}`
    }
}

class Model extends Car {
    constructor(model, name){
        super(name);
        this.make = model;
    }
    show() {
        return `${this.present()} and the model of ${this.make}`
    }
}

const myCar = new Model('Ford', 'Mustang');
myCar.show();

