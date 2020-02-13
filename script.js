//Creating DOM files for html

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
const randFunc = { 
    lower: getRandomLower, 
    upper: getRandomUpper, 
    number: getRandomNumber, 
    symbol: getRandomSymbol }

//adding Event Listeners

generate.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

    console.log(length, hasUpper, hasLower, hasNumber, hasSymbol);
});


clipboard.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) { return; }

    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
});


//adding function codes

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = upper + lower + number + symbol;
    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item =>Object.values(item)[0]);

    console.log('types Array ',typesArr);

    if(typesCount === 0) {
        return '';
    
    }

//looping
for(let i=0; i<length; i+=typesCount) {
    typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randFunc[funcName]();
    });
  
} console.log(generatedPassword);

return generatedPassword;
}


/*const finalPassword = generatedPassword.slice(0,length);
return finalPassword;
}
*/

// Grabbing upper and lower case letters from character set (http://www.net-comber.com/charset.html)

function getRandomUpper() {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return upperCase[Math.floor(Math.random() * upperCase.length)];
}
 
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()) *26 + 97);
}

function getRandomNumber(){
    return +String.fromCharCode(Math.floor(Math.random()) *10 +  48);
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*()_+{}|:<>?-=[]\;,./'
    return symbols[Math.floor(Math.random() * symbols.length)];
}