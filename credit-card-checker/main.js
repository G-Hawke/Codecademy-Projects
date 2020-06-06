// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// create an empty array to store our invalid cards.
const invalidCards = [];

// Create a reducer function for use in array.reduce
const reducer = (accumilator, currrentValue) => accumilator + currrentValue;

// Function to validate whether a card is valid.
const validateCred = array => {

  // Variable to check the curent position.
  let currentDigit = 1;
  // Copy the array into our check array.
  let checkArray = array.slice(0);

  for (let i = checkArray.length -1; i >= 0; i--) {
    if (currentDigit % 2 === 0) {
      // Double the digit.
      checkArray[i] *= 2;
      // If the value of the digit that has been doubled is > 9 - 9
      if (checkArray[i] > 9) {
        checkArray[i] -= 9;
      }
    }
    currentDigit++;
  }
  // Sum all of the digits in the array
  const sumArray = checkArray.reduce(reducer);
  // if the sum % 10 is === 0 then the number is valid.
  return sumArray % 10 === 0 ? true : false;
}

// Function to find all invalid cards within a list.
const findInvalidCards = nestedArray => {
  // itterate over a nested array
  for (let i = 0; i < nestedArray.length; i++) {
    // if the array is invalid
    if (validateCred(nestedArray[i]) === false) {
      // push that array into an invalid cards array.
      invalidCards.push(nestedArray[i]);
    }
  }
}

// Function to list all card companies that sent out invalid cards
const isInvalidCardCompanies = array => {
  // list of accepted companines with unique first digit.
  const Amex = 3;
  const Visa = 4;
  const Mastercard = 5;
  const Discover = 6;

  // create empy array for invalid companies
  let invalidCompaniesList = [];
  let uniqueInvalidCompanies = [];

  // iterate over invalid numbers array
  for (let i = 0; i < array.length; i++) {
    // if the first digit or the first card in the array is === amex
    if (array[i][0] === Amex) {
      // push to Invalid companies array.
      invalidCompaniesList.push('Amex');
    } else if (array[i][0] === Visa) {
      invalidCompaniesList.push('Visa');
    } else if (array[i][0] === Mastercard) {
      invalidCompaniesList.push('Mastercard');
    } else if (array[i][0] === Discover) {
      invalidCompaniesList.push('Discover');
    } else {
      // else log 'Company not found'
      console.log('Company Not Found');
    }
  }
  // Remove any duplicates in the array.
  uniqueInvalidCompanies = [...new Set(invalidCompaniesList)];
  return uniqueInvalidCompanies;
}

findInvalidCards(batch);
console.log(isInvalidCardCompanies(invalidCards));