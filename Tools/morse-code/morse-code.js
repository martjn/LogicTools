const sourceText = document.getElementById("srctext");
const translationText = document.getElementById("resulttext");
const radioButton0 = document.getElementById('textToMorseRadioBtn');
const radioButton1 = document.getElementById('morseToTextRadioBtn');

let mode = 0;

function textToMorse(){
    console.log('run textToMorse');
    let originalText = sourceText.value.toUpperCase();
    let newText = originalText.replaceAll(" ", "/ ").replaceAll("A", ".- ").replaceAll("B", "-... ").replaceAll("C","-.-. ").replaceAll("D", "-.. ").replaceAll("E", ". ").replaceAll("F", "..-. ").replaceAll("G", "--. ").replaceAll("H", ".... ").replaceAll("I", ".. ").replaceAll("J", ".--- ").replaceAll("K", "-.- ").replaceAll("L", ".-.. ").replaceAll("M", "-- ").replaceAll("N", "-. ").replaceAll("O", "--- ").replaceAll("P", ".--. ").replaceAll("Q", "--.- ").replaceAll("R", ".-. ").replaceAll("S", "... ").replaceAll("T", "- ").replaceAll("U", "..- ").replaceAll("V", "...- ").replaceAll("W", ".-- ").replaceAll("X", "-..- ").replaceAll("Y", "-.-- ").replaceAll("Z", "--.. ").replaceAll("0", "----- ").replaceAll("1", ".---- ").replaceAll("2", "..--- ").replaceAll("3", "...-- ").replaceAll("4", "....- ").replaceAll("5", "..... ").replaceAll("6", "-.... ").replaceAll("7", "--... ").replaceAll("8", "---.. ").replaceAll("9", "----. ").replaceAll("Ä", ".-.- ").replaceAll("Õ", "Ö").replaceAll("Ö", "---. ").replaceAll("Ü", "..-- ").replaceAll("&", ".-... ").replaceAll("'", ".----. ").replaceAll("@", ".--.-. ").replaceAll(")", "-.--.- ").replaceAll("(", "-.--. ").replaceAll(":", "---... ").replaceAll(",", "--.-- ").replaceAll("=", "-...- ").replaceAll("!", "-.-.-- ").replaceAll("+", ".-.-. ").replaceAll('"', '.-..-. ').replaceAll("?", "..--.. ");
    return newText;

}
function morseToText(){
    console.log('run morseToText');
    let originalText = sourceText.value.toUpperCase();
    let newTextArray = originalText.split(' ');
    for(i = 0; i < newTextArray.length; i++){
        switch(newTextArray[i]){
            case '/':
                newTextArray[i] = " ";
                break;
            case '.-':
                newTextArray[i] = "A";
                break;
            case '-...':
                newTextArray[i] = "B";
                break;
            case '-.-.':
                newTextArray[i] = "C";
                break;
            case '-..':
                newTextArray[i] = "D";
                break;
            case '.':
                newTextArray[i] = "E";
                break;
            case '..-.':
                newTextArray[i] = "F";
                break;
            case '--.':
                newTextArray[i] = "G";
                break;
            case '....':
                newTextArray[i] = "H";
                break;
            case '..':
                newTextArray[i] = "I";
                break;
            case '.---':
                newTextArray[i] = "J";
                break;
            case '-.-':
                newTextArray[i] = "K";
                break;
            case '.-..':
                newTextArray[i] = "L";
                break;
            case '--':
                newTextArray[i] = "M";
                break;
            case '-.':
                newTextArray[i] = "N";
                break;
            case '---':
                newTextArray[i] = "O";
                break;
            case '.--.':
                newTextArray[i] = "P";
                break;
            case '--.-':
                newTextArray[i] = "Q";
                break;
            case '.-.':
                newTextArray[i] = "R";
                break;
            case '...':
                newTextArray[i] = "S";
                break;
            case '-':
                newTextArray[i] = "T";
                break;
            case '..-':
                newTextArray[i] = "U";
                break;
            case '...-':
                newTextArray[i] = "V";
                break;
            case '.--':
                newTextArray[i] = "W";
                break;
            case '-..-':
                newTextArray[i] = "X";
                break;
            case '-.--':
                newTextArray[i] = "Y";
                break;
            case '--..':
                newTextArray[i] = "Z";
                break;
            case '-----':
                newTextArray[i] = "0";
                break;
            case '.----':
                newTextArray[i] = "1";
                break;
            case '..---':
                newTextArray[i] = "2";
                break;
            case '...--':
                newTextArray[i] = "3";
                break;
            case '....-':
                newTextArray[i] = "4";
                break;
            case '.....':
                newTextArray[i] = "5";
                break;
            case '-....':
                newTextArray[i] = "6";
                break;
            case '--...':
                newTextArray[i] = "7";
                break;
            case '---..':
                newTextArray[i] = "8";
                break;
            case '----.':
                newTextArray[i] = "9";
                break;
            case '.-.-':
                newTextArray[i] = "Ä";
                break;
            case '---.':
                newTextArray[i] = "Ö";
                break;
            case '..--':
                newTextArray[i] = "Ü";
                break;
            case '.-...':
                newTextArray[i] = "&";
                break;
            case '.----.':
                newTextArray[i] = "'";
                break;
            case '.--.-.':
                newTextArray[i] = "@";
                break;
            case '-.--.-':
                newTextArray[i] = ")";
                break;
            case '-.--.':
                newTextArray[i] = "(";
                break;
            case '---...':
                newTextArray[i] = ":";
                break;
            case '--.--':
                newTextArray[i] = ",";
                break;
            case '-...-':
                newTextArray[i] = "=";
                break;
            case '-.-.--':
                newTextArray[i] = "!";
                break;
            case '.-.-.':
                newTextArray[i] = "+";
                break;
            case '.-..-.':
                newTextArray[i] = '"';
                break;
            case '..--..':
                newTextArray[i] = '?';
                break;
        }
    }
    let newText = newTextArray.join('');
    // capitalize first letter of string
    newText = newText.toLowerCase();
    newText = newText.charAt(0).toUpperCase() + newText.slice(1);
    return newText;
}

function translate(){
    let translateText;
    (mode === 0) ? translateText = textToMorse() : translateText = morseToText();
    translationText.value = translateText;
    console.log('run translate');
}

function setMode() {
    if(radioButton0.checked && mode !== 0){
        console.log("set mode 0");     
        mode = 0;
        sourceText.value = translationText.value;
        sourceText.placeholer = "Type message text here";
        translate();
    } else if (radioButton1.checked && mode !== 1) {
        console.log("set mode 1");
        mode = 1;
        sourceText.value = translationText.value;
        sourceText.placeholder = "Type morse code here, for example: .... . .-.. .-.. ---";
        translate();
    } else{
        console.log('Already pressed');
    }
}

function reset(){
    mode = 0;
    sourceText.value = "";
    translationText.value = "";
    radioButton0.checked= "true";
}

// load event listeners
sourceText.addEventListener("keyup", translate);
radioButton0.addEventListener('click', setMode);
radioButton1.addEventListener('click', setMode);
document.addEventListener('DOMContentLoaded', reset);