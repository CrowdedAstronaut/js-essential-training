class Car {
  constructor(
    // Defines parameters:
    type,
    model,
    color,
    horsepower,
    numOfSeats,
    isRunning
  ) {
    // Define properties:
    this.type = type;
    this.model = model;
    this.color = color;
    this.horsepower = horsepower;
    this.numOfSeats = numOfSeats;
    this.isRunning = isRunning;
  }
  // Add methods like normal functions:
  engineOn(engineStatus) {
    this.isRunning = engineStatus;
  }
}

export default Car;
