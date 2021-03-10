module.exports = function toReadable (number) {

    if (number == 0) return 'zero';

    //array from 0..19
    let smallNumbers = [
      '',
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
      'twelve',
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
      'forty',
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
      return `${bigNumbers[indexOfDozen]} ${smallNumbers[indexOfOnes]}`;
    }
  
    let numberToHuman = '';
  
    //numbers [0..19]
    if (number >= 0 && number <= 19) {
      numberToHuman = smallNumbers[number];
      return numberToHuman;
    }
    //numbers[20..99]
    if (number >= 20 && number <= 99) {
      numberToHuman = dozen(number).trim();
      return numberToHuman;
    }
    //numbers[100..999]
    if (number >= 100 && number <= 999) {
      let hundreds = Math.floor(number / 100);
      let tailer = number % 100;
      if (tailer <= 19) {
        numberToHuman = (smallNumbers[hundreds].trim() + ' hundred ' + smallNumbers[tailer]).trim();  
      } else {
        let tail = dozen(tailer);
        numberToHuman = (smallNumbers[hundreds].trim() + ' hundred ' + tail.trim()).trim();
      }
      return numberToHuman;
    }
}
