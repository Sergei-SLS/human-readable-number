module.exports = function toReadable (number) {
    let strNumber = number.toString();
    let definiteNumber = '';
    let zeroToTen = (one) => {
      switch(one) {
        case 0: return '';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
      }
    }
    let tenToTwenty = (two) => {
      switch(two) {
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 14: return 'fourteen';
        case 15: return 'fifteen';
        case 16: return 'sixteen';
        case 17: return 'seventeen';
        case 18: return 'eighteen';
        case 19: return 'nineteen';
      }
    }
    let twentyToNinety = (three) => {
      switch(three) {
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
      }
    }
    if (number === 0) {
        definiteNumber = 'zero';
    }
    if (number > 0 && number < 10) {
        definiteNumber = zeroToTen(number);
    }
    if (number > 9 && number< 20) {
        definiteNumber = tenToTwenty(number);
    }
    if (number > 19 && number < 100) {
        definiteNumber = `${twentyToNinety(+strNumber[0])} ${zeroToTen(+strNumber[1])}`
    }
    if (number > 99 && number < 1000) {
        if (number % 100 < 10) {
            definiteNumber = `${zeroToTen(+strNumber[0])} hundred ${zeroToTen(number % 100)}`
        }
        if (number % 100 > 9 && number % 100 < 20) {
            definiteNumber = `${zeroToTen(+strNumber[0])} hundred ${tenToTwenty(number % 100)}`
        }
        if (number % 100 > 19) {
            definiteNumber = `${zeroToTen(+strNumber[0])} hundred ${twentyToNinety(+strNumber[1])} ${zeroToTen(+strNumber[2])}`
        }
    }
    return definiteNumber.trim();
};
