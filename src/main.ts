/**
 * This program generates 250 random numbers in an array
 * and allows the user to search the array for a number.
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-11-15
 */

import promptSync from 'prompt-sync'

/**
 *
 * This is the binarySearch function.
 *
 * @param {number} array the array.
 * @param {number} target the target.
 * @param {number} lowIndex the lowIndex.
 * @param {number} highIndex the high index
 * @returns {number} the factorial of the number.
 */
function binarySearch (
  array: number[],
  target: number,
  lowIndex: number,
  highIndex: number
): number {
  if (lowIndex > highIndex) {
    return -1
  }

  // Find the middle index
  const middle = Math.floor((lowIndex + highIndex) / 2)

  if (array[middle] === target) {
    return middle
  }

  if (array[middle] > target) {
    return binarySearch(array, target, lowIndex, middle - 1)
  } else {
    return binarySearch(array, target, middle + 1, highIndex)
  }
}

const prompt = promptSync()

// The variables
const min = 1
const max = 999
const arraySize = 250

// The array size
const numArray = new Array(arraySize)

// Getting the random numbers for the array
for (let counter = 0; counter < numArray.length; counter++) {
  numArray[counter] = Math.floor(Math.random() * max + min)
}

// sorting the array
numArray.sort(function (a, b) {
  return a - b
})

// Asks for the users input
console.log('\nBinary Search Program')
console.log('Sorted List of numbers: ')

// the elements in the array.
// https://stackoverflow.com/questions/56262258/how-to-print-array-elements
for (let counter = 0; counter < numArray.length; counter++) {
  process.stdout.write(`${String(numArray[counter])},`)
}

// asks for the user input
console.log('')
console.log('')
const userInput = Number(
  prompt('Enter a number in array (Between 0 and 999): ')
)

// What index it is in
console.log(
  `Your number is in the ${binarySearch(numArray, userInput, 0, arraySize - 1)}`
)
console.log('\nDone.')
