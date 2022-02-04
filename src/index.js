const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
   let arrayOf01 = [];
   //делим входящий массив на массивы по 10 элементов
    for (let i= 0; i < expr.length; i += 10) {
        let arrayF = [];
        for (let n = i; n < i + 10; n++) {
            arrayF.push(expr[n])
        }
        arrayOf01.push(arrayF);
    }
    //для каждого десятиэлементного массива заменяем внутри парные числа . - ' ' ''
    let resultArray = [];
    arrayOf01.forEach(arrayD => {
        let arrayForEach = [];
        for (let j = 8; j >= 0; j -= 2) {
           if (arrayD[j] + arrayD[j + 1] === '10') {
                arrayForEach.unshift('.');
            } else if (arrayD[j] + arrayD[j + 1] === '11') {
                arrayForEach.unshift('-');
            } else if (arrayD[j] + arrayD[j + 1] === '00')  {
                arrayForEach.unshift('');
            } else if (arrayD[j] + arrayD[j + 1] === '**')  {
            arrayForEach.unshift(' ');
            break;
            }
        }
        /*все получившиеся массивы из . - ' ' '' добавляем в один массив
        к примеру  [ '...',  '.-', '...-', '.', ' ',    '--', '.']*/
        
        resultArray.push(arrayForEach.join(''));
       
    })
    // каждый эдемент resultArray декодируем по таблице Морзе
    let answer =[];
    resultArray.forEach(item => {
        answer.push(MORSE_TABLE[item]);
    })
    //сливаем массив answer в строку
    return answer.join('');
    
}

module.exports = {
    decode
}