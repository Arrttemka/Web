function Car(name, price, horsepower) {
    this.name = name;
    this.price = price;
    this.horsepower = horsepower;
  }

  Car.prototype.getName = function () {
    return this.name;
  };

  Car.prototype.getPrice = function () {
    return this.price;
  };

  Car.prototype.getHorsepower = function () {
    return this.horsepower;
  };

  Car.prototype.getCarInfo = function () {
    return `Name: ${this.name}, Price: ${this.price}, Horsepower: ${this.horsepower}`;
  };

  function Electric_car(name, price, horsepower, type) {
    Car.call(this, name, price, horsepower);
    this.type = type;
  }

  Electric_car.prototype = Object.create(Car.prototype); //наследование функционально

  Electric_car.prototype.getType = function () {
    return this.type;
  };

  Electric_car.prototype.getCarInfo = function () {
    return `Name: ${this.name}, Price: ${this.price}, Horsepower: ${this.horsepower}, Type: ${this.type}`;
  };

const car = new Car("Ford Mustang", 50000, 300);
document.getElementById("carName").innerText = car.getName();
document.getElementById("carPrice").innerText = car.getPrice();
document.getElementById("carHorsepower").innerText = car.getHorsepower();
document.getElementById("carInfo").innerText = car.getCarInfo();

const electric_car = new Electric_car("Tesla Cybertruck", 70000, 560, "Pickup");
document.getElementById("electric_carName").innerText = electric_car.getName();
document.getElementById("electric_carPrice").innerText = electric_car.getPrice();
document.getElementById("electric_carHorsepower").innerText = electric_car.getHorsepower();
document.getElementById("electric_carType").innerText = electric_car.getType();
document.getElementById("electric_carInfo").innerText = electric_car.getCarInfo();

class CarClass {
    constructor(name, price, horsepower) {
      this.name = name;
      this.price = price;
      this.horsepower = horsepower;
    }

    getName() {
      return this.name;
    }

    getPrice() {
      return this.price;
    }

    getHorsepower() {
      return this.horsepower;
    }

    getCarInfo() {
      return `Name: ${this.name}, Price: ${this.price}, Horsepower: ${this.horsepower}`;
    }
  }

  class Electric_carClass extends CarClass {
    constructor(name, price, horsepower, type) {
      super(name, price, horsepower);
      this.type = type;
    }

    getType() {
      return this.type;
    }

    getCarInfo() {
      return `Name: ${this.name}, Price: ${this.price}, Horsepower: ${this.horsepower}, Type: ${this.type}`;
    }
  }

  const carClass = new CarClass("Ford Mustang", 50000, 300);
  document.getElementById("carNameClass").innerText = car.getName();
  document.getElementById("carPriceClass").innerText = car.getPrice();
  document.getElementById("carHorsepowerClass").innerText = car.getHorsepower();
  document.getElementById("carInfoClass").innerText = car.getCarInfo();

  const electric_carClass = new Electric_carClass("Tesla Cybertruck", 70000, 560, "Pickup");
  document.getElementById("electric_carNameClass").innerText = electric_car.getName();
  document.getElementById("electric_carPriceClass").innerText = electric_car.getPrice();
  document.getElementById("electric_carHorsepowerClass").innerText = electric_car.getHorsepower();
  document.getElementById("electric_carTypeClass").innerText = electric_car.getType();
  document.getElementById("electric_carInfoClass").innerText = electric_car.getCarInfo();
