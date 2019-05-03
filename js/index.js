let teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = 150000;

function beep () {
    console.log(this.make + ' '+ this.model + ' beep-beep');
}

teslaX.beep = beep;

teslaX.beep();


let seatIbiza = {
    make: 'Seat',
    model: 'Ibiza',
    price: '11000',
    beep: beep
};

seatIbiza.beep();


function Car(make,model,price){
    this.make = make;
    this.model = model;
    this.price = price;
    return this;
}

Car.prototype.beep = beep;

let volkswagenBeetle = new Car ('Volkswagen', 'Beetle', 20000);

volkswagenBeetle.beep();

let zazlanos = Object.create(null);
zazlanos.make = 'Zaz';
zazlanos.model = 'Lanos';
zazlanos.price = 3000;
zazlanos.beep = beep;

zazlanos.beep();

let zazSence = Object.create(zazlanos);
zazSence.model = 'Sence';
zazSence.beep();

const serverData = `{
    "make": "Chevrolet",
    "model": "Corvette",
    "price": 10000
}`;

const chevroletCorvette = JSON.parse(serverData);

const zazLanosSerialized = JSON.stringify(zazLanos);


class SuperCar extends Car{
    constructor(make, model, price){
       super(make, model,price);
       this.isSuperCar = true;
    }
    nitro(){
        console.log (`SuperCar ${this.make} ${this.model} NITRO!!!`);
    }
}

const ferrarilaFerrari = new SuperCar('Ferrari', 'Laferrari', 300000);
ferrarilaFerrari.beep();
ferrarilaFerrari.nitro();







































