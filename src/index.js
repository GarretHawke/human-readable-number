module.exports = function toReadable (number) {
//array from 0..19
  let smallNumbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelwe',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  //array from dozens, 20..90
  let bigNumbers = [
    'twenty',
    'thirty',
    'fourty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];
  //fuction for two-division number
  function dozen(number) {
    let dozens = Math.floor(number / 10);
    let indexOfDozen = dozens - 2;
    let ones = number % 10;
    let indexOfOnes = ones;
    return bigNumbers[indexOfDozen] + ' ' + smallNumbers[indexOfOnes];
  }

  //numbers [0..19]
  if (number >= 0 && number <= 19) {
    let numberToHuman = smallNumbers[number];
    return numberToHuman;
  }
  //numbers[20..99]
  if (number >= 20 && number <= 99) {
    let numberToHuman = dozen(number);
    return numberToHuman;
  }
  //numbers[100..999]
  if (number >= 100 && number <= 999) {
    let hundreds = Math.floor(number / 100);
    let tail = dozen(number % 100);
    let numberToHuman = smallNumbers[hundreds] + ' hundred ' + tail;
    return numberToHuman;
  }
  
}
