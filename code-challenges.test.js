// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// input: { name: "ford prefect", occupation: "a hitchhiker" },
// { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
// { name: "arthur dent", occupation: "a radio employee" } 

// output:["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// a) Create a test with an expect statement using the variable provided.
describe("aboutThem", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" } 
    ]
    expect(aboutThem(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Pseudo code:
// will need to create a variable that capitalizes the strings in the array of objects
// use .charAt(0) to specify the inex of the string
// use .slice to get another portion of the string which in this case is (1) for the second index
// once we have configured the strings we will need to map the object with in the array
// create a new variable to giving the actions desired for our objects
// use .split to split our array into substrings
// use . join to join our strings together and the return our interporlation message for each object with the array
//key, value
const capitalized = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
const aboutThem = (obj) => {
  return obj.map(obj => {
    const capitalizedFullName = obj.name.split(' ').map(capitalized).join(' ')
    return `${capitalizedFullName} is ${obj.occupation}.`
  })
} 


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("remaindersOf3", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
    expect(remaindersOf3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remaindersOf3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass. 

// Pseudo code:
//use array as our arugment
// create an empty array
// use a for loop
//create another variable holding the array and index. array[i]
//create an if statment for typeof to strictly get the numbers 
//use .push to add the elements to the array

const remaindersOf3 = (array) => {
  const remainders = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (typeof item === 'number') {
      remainders.push(item % 3);
    }
  }

  return remainders;
}
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumOfCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(sumOfCubed(cubeAndSum1)).toBe(99)
    expect(sumOfCubed(cubeAndSum2)).toBe(1125)
  })
})



// b) Create the function that makes the test pass.

// Pseudo code:
//use array as our arugement 
// create a variable with a value of zero to be used to keep track of the running total of the cubes, let sum = 0
//create for loop for iteration 
//Add the sum, which is equal to 0, to Math.pow to add the cubed value to the sum varible
//==> Math.pow takes in two paratmeters and returns the value of the first parameter rasied to the second parameter.
//=====> so for example during our iteration the first index of the cubeAndSum1 would look like so: sum += Math.pow(cubeAndSum1(0), 3) ===> translates to sum += 2 to the power of 3, which is 8. During iteration we would get values of the remaining index so we would end up with 8+27+64 which is 99, our expected output.
// I learned about Math.pow() from the following site: https://www.geeksforgeeks.org/math-pow-method-in-java-with-example/

const sumOfCubed = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += Math.pow(array[i], 3);
  }

  return sum;
}
