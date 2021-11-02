# JavaScript Essential Training

This is the repository for the LinkedIn Learning course JavaScript Essential Training. The full course is available from [LinkedIn Learning][lil-course-url].

![JavaScript Essential Training][lil-thumbnail-url]
JavaScript is a scripting language of the web. As the web evolves from a static to a dynamic environment, technology focus is shifting from static markup and styling—frequently handled by content management systems or automated scripts—to dynamic interfaces and advanced interaction. Once seen as optional, JavaScript is now becoming an integral part of the web, infusing every layer with its script.

Through practical examples and mini-projects, this course helps you build your understanding of JavaScript piece by piece, from core principles like variables, data types, conditionals, and functions through advanced topics including loops, and DOM scripting. Along the way, instructor Morten Rand-Hendriksen provides challenges that allow you to put your new skills to the test.

## Instructions

This repository does not have any branches. Download the entire repository and you get the exercise files in their final state.

Each folder corresponds with a movie with an exercise file. The naming convention is `CHAPTER#_MOVIE#`. As an example, the folder named `02_03` corresponds to the second chapter and the third video in that chapter.

Some movies will have a beginning and an end state. In the exercise files, the end-state for a movie is marked with an `e` for "end" as in `02_03e`. This folder contains the code as it is at the end of the movie.

## Installing

1. To use these exercise files, you must have the following installed:
   - A code editor ([VS Code](https://code.visualstudio.com/) is recommended)
   - [Node.js](https://nodejs.org/en/)
   - [Prettier code formatter extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. From the root folder, open the terminal and enter the command `nmp install` to install dependencies.

### Instructor

**Morten Rand-Hendriksen**

_Web Designer and Developer_

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/morten-rand-hendriksen?u=104).

[lil-course-url]: https://www.linkedin.com/learning/javascript-essential-training
[lil-thumbnail-url]: https://cdn.lynda.com/course/2832077/2832077-1610728160487-16x9.jpg

## Core lessons learned section 5

Need to indicate a state change of an element? Add or remove a class.
Need to pass data from one element to the other? Add a data attribute.
Need to change the appearance of a specific element for a specific reason? Add an inline style.

## Tips for className manipulation

Should use class list property as opposed to class name, because it returns a DOM token collection.
Syntax looks like this: `document.querySelector(".backpack").classList.add("second-class")`

One thing worth noting here is the attributes property returns a different type of data from the class name and class list properties. What we get is a named node map and it is not an array. So we can't use array methods on it. There's a simple reason for this. An attribute is a more complex piece of data, it has a key and a value and we need to be able to manipulate just the key or just the value or both at any time and a simple array wouldn't do that.

## 5-08 Practice Notes

The title attribute is removed between has attribute get attributes, set, attribute, and remove attribute. You have all the functions you need to be able to manipulate any attribute inside a tag. And note here that, everything inside the tag is considered an attribute. That means if we target an element that has a class, the class will also show up as an attribute and we can actually use these attribute methods to manipulate classes if we want to.

## Arrays

pop() - off of the end
push() - add to end
shift() - cut off the beginning
unshift() - add one to the beginning

Learned some more basics about arrays. Assigning a value way past the final length means all values in between are undefined.

## Array Methods

Use the MDN Webdocs
This lesson covers .join, .push, .find, .remove.

```
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

```
