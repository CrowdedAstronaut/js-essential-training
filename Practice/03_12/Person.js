class Person {
  constructor(
    // Defines parameters:
    firstName,
    lastName,
    age,
    employed,
    height,
    weight,
    married
  ) {
    // Define properties:
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.employed = employed;
    this.height = height;
    this.weight - weight, (this.married = married);
  }
  // Add methods like normal functions:
  getAJob(employedStatus) {
    this.employed = employedStatus;
  }
  getMarried(marriedStatus) {
    this.married = marriedStatus;
  }
  ageOneYear() {
    this.age++;
  }
}

export default Person;
