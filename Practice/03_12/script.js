/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
import Car from "./Car.js";
import Person from "./Person.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

everydayPack.toggleLid(false);
console.log(everydayPack);

const myFerrari = new Car(
  "Ferrari",
  "556",
  "Red",
  700,
  2,
  false
);
myFerrari.engineOn(true);
console.log(myFerrari);

const bob = new Person(
  "Bob",
  "Jones",
  43,
  false,
  72,
  185,
  false
);

bob.getMarried(true);
bob.getAJob(true);
console.log(bob);
bob.ageOneYear();
console.log(bob);
