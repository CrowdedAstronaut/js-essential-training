/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const deskItems = [
  "mouse",
  "phone",
  "glasses",
  "scissors",
  "keyboard",
  "tubiKey",
  "microphone",
  "stapler",
];

console.log("Original Array:", deskItems);

//Remove the last item
deskItems.pop();
console.log(deskItems);

//Add the last item as the first time on the array
deskItems.unshift(deskItems.pop());
console.log("Last Item is now the firt item", deskItems);

//Sort in alphabetical order
console.log(deskItems.sort());
console.log("Sorted Items:", deskItems);

//Use the find method to find a specific item in an array
const found = deskItems.find((item) => item == "stapler");
console.log("Found Item", found);

//Remove item with specific content
let remove = "stapler";
deskItems.splice(deskItems.indexOf(remove), 1);
console.log(`Array with "${remove}" removed:`, deskItems);
