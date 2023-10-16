// initialize DOM elements
const sourceText = document.getElementById("srctext");
const resultText = document.getElementById("resulttext");
const radioButton0 = document.getElementById('textToMorseRadioBtn');
const radioButton1 = document.getElementById('morseToTextRadioBtn');

const sourceCopyBtn = document.getElementById('src-copy');
const sourcePasteBtn = document.getElementById('src-paste');
const sourceOptionsBtn = document.getElementById('src-options');
const sourceOptions = {
    removeSpaces: document.getElementById('src-opt-remove-spaces'),
    lettersOnly: document.getElementById('src-opt-letters-only'),
    reverse: document.getElementById('src-opt-reverse'),
    upper: document.getElementById('src-opt-upper'),
    lower: document.getElementById('src-opt-lower'),
    undo: document.getElementById('src-opt-undo'),
    group: document.getElementById('src-options-group'),
    groupNr: document.getElementById('src-options-group-nr'),
}

const resultCopyBtn = document.getElementById('result-copy');
const resultOptionsBtn = document.getElementById('result-options');
const resultOptions = {
    removeSpaces: document.getElementById('result-opt-remove-spaces'),
    lettersOnly: document.getElementById('result-opt-letters-only'),
    reverse: document.getElementById('result-opt-reverse'),
    upper: document.getElementById('result-opt-upper'),
    lower: document.getElementById('result-opt-lower'),
    undo: document.getElementById('result-opt-undo'),
    group: document.getElementById('result-options-group'),
    groupNr: document.getElementById('result-options-group-nr'),
}

const sourceOptionsUndo = [];
const resultOptionsUndo = [];
let currentSourceText = "";
let currentResultText = "";

let mode = 0;
let nr = 0;
let srcOptionsMode = false;
let resultOptionsMode = false;


if(navigator.userAgent.indexOf("Firefox") > 0) {
    sourcePasteBtn.style.display = "none";
}

function textToMorse(){
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
    resultText.value = translateText;
}

function setMode() {
    if(radioButton0.checked && mode !== 0){
        console.log("set mode 0");     
        mode = 0;
        currentSourceText = resultText.value;
        sourceText.value = resultText.value;
        currentResultText = sourceText.value;
        sourceText.removeAttribute("placeholder");
        sourceText.setAttribute('placeholder', 'Type message text here');
        if(sourceText.value !== ''){
            translate();
        }
    } else if (radioButton1.checked && mode !== 1) {
        console.log("set mode 1");
        mode = 1;
        currentSourceText = resultText.value;
        sourceText.value = resultText.value;
        currentResultText = sourceText.value;
        sourceText.removeAttribute("placeholder");
        sourceText.setAttribute('placeholder', "Type morse code here, for example: .... . .-.. .-.. ---");
        if(sourceText.value !== ''){
            translate();
        }
    } else{
        console.log('Already pressed');
    }
}

function removeSpaces(){
    //src
    if(nr === 0 && (sourceText.value).indexOf(' ') !== -1 && sourceText.value.replaceAll(" ", "") !== currentSourceText){
        console.log('remove spaces 0');
        sourceOptionsUndo.push(sourceText.value);
        sourceText.value = sourceText.value.replaceAll(" ", "");
        currentSourceText = sourceText.value;
        translate();
    }
    //result
    else if (nr === 1 && (resultText.value).indexOf(' ') !== -1 && resultText.value.replaceAll(" ", "") !== currentSourceText){
        console.log('remove spaces 1');
        resultOptionsUndo.push(resultText.value);
        resultText.value = resultText.value.replaceAll(" ", "");
        currentResultText = resultText.value;
    }
    else{
        console.log('Repeat: remove spaces');
    }
}
function lettersOnly(){
    //src
    if(nr === 0){
        console.log('letters only 0');
        let tempSourceText = sourceText.value.replaceAll("0", "").replaceAll("1", "").replaceAll("2", "").replaceAll("3", "").replaceAll("4", "").replaceAll("5", "").replaceAll("6", "").replaceAll("7", "").replaceAll("8", "").replaceAll("9", "").replaceAll("&", "").replaceAll("'", "").replaceAll("@", "").replaceAll(")", "").replaceAll("(", "").replaceAll(":", "").replaceAll(",", "").replaceAll("=", "").replaceAll("!", "").replaceAll("+", "").replaceAll('"', '').replaceAll("?", "");
        if(tempSourceText !== currentSourceText){
            sourceOptionsUndo.push(sourceText.value);
            sourceText.value = tempSourceText;
            currentSourceText = sourceText.value;
            translate();
        }
    }
    //result
    else if (nr === 1){
        console.log('letters only 1');
        let tempResultText = sourceText.value.replaceAll("0", "").replaceAll("1", "").replaceAll("2", "").replaceAll("3", "").replaceAll("4", "").replaceAll("5", "").replaceAll("6", "").replaceAll("7", "").replaceAll("8", "").replaceAll("9", "").replaceAll("&", "").replaceAll("'", "").replaceAll("@", "").replaceAll(")", "").replaceAll("(", "").replaceAll(":", "").replaceAll(",", "").replaceAll("=", "").replaceAll("!", "").replaceAll("+", "").replaceAll('"', '').replaceAll("?", "");
        if(tempResultText !== currentResultText){
            resultOptionsUndo.push(resultText.value);
            resultText.value = tempResultText;
            currentResulteText = resultText.value;
        }
    }
    else{
        console.log('Repeat: letters only');
    }
}

function reverse(){
    //src
    if(nr === 0){
        console.log('reverse 0');
        sourceOptionsUndo.push(sourceText.value);
        sourceText.value = sourceText.value.split("").reverse().join("");
        currentSourceText = sourceText.value;
        translate();
    }
    //result
    else if (nr === 1){
        console.log('reverse 1');
        resultOptionsUndo.push(resultText.value);
        resultText.value = resultText.value.split("").reverse().join("");
        currentResultText = resultText.value;
    }
    else{
        console.log('Repeat: reverse');
    }
}

function upper(){
    //src
    if(nr === 0 && sourceText.value.toUpperCase() !== currentSourceText){
        console.log('upper 0');
        sourceOptionsUndo.push(sourceText.value);
        sourceText.value = sourceText.value.toUpperCase();
        currentSourceText = sourceText.value;
        translate();
    }
    //result
    else if (nr === 1 && resultText.value.toUpperCase() !== currentResultText){
        console.log('upper 1');
        resultOptionsUndo.push(resultText.value);
        resultText.value = resultText.value.toUpperCase();
        currentResultText = resultText.value;
    }
    else{
        console.log('Repeat: upper');
    }
}

function lower(){
    //src
    if(nr === 0 && sourceText.value.toLowerCase() !== currentSourceText){
        console.log('lower 0');
        sourceOptionsUndo.push(sourceText.value);
        sourceText.value = sourceText.value.toLowerCase();
        currentSourceText = sourceText.value;
        translate();
    }
    //result
    else if (nr === 1 && resultText.value.toLowerCase() !== currentResultText){
        console.log('lower 1');
        resultOptionsUndo.push(resultText.value);
        resultText.value = resultText.value.toLowerCase();
        currentResultText = resultText.value;
    }
    else{
        console.log('Repeat: lower');
    }
}

function undo(){
    //src
    if(nr === 0 && sourceOptionsUndo.length != 0){
        console.log('undo 0');
        sourceText.value = sourceOptionsUndo.pop();
        currentSourceText = sourceText.value;
        translate();
    }
    //result
    else if (nr === 1 && resultOptionsUndo.length != 0){
        console.log('undo 1');
        resultText.value = resultOptionsUndo.pop();
        currentResultText = resultText.value;
    }
    else{
        console.log('Undo reached end');
    }
}

function group(){
    removeSpaces();
    //src
    if(nr === 0){
        console.log('group 0');
        sourceOptionsUndo.push(sourceText.value);
        let tempSourceText = "";
        for(let i = 1; i<sourceText.value.length+1; i++){
            tempSourceText += sourceText.value[i-1];
            if(i % parseInt(sourceOptions.groupNr.value) === 0){
                tempSourceText += " ";
            }
        }
        sourceText.value = tempSourceText;
        currentSourceText = sourceText.value;
        translate();
    }
    //result
    else if (nr === 1){
        console.log('group 1');
        resultOptionsUndo.push(resultText.value);
        let tempResultText = "";
        for(let i = 1; i<resultText.value.length+1; i++){
            tempResultText += resultText.value[i-1];
            if(i % parseInt(resultOptions.groupNr.value) === 0){
                tempResultText += " ";
            }
        }
        resultText.value = tempResultText;
        currentResultText = resultText.value;
    }
    else{
        console.log('Repeat: group');
    }
}

function copy(){
    //src
    if(nr === 0){
        sourceText.select();
        // for mobile
        sourceText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(sourceText.value);
    }
    //result
    else if (nr === 1){
        resultText.select();
        // for mobile
        resultText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(resultText.value);        
    }
}
function paste(){
    let pasteText = navigator.clipboard.readText();
    console.log(pasteText);
    if(currentSourceText !== pasteText){
        if(sourceText.value !== ""){
            sourceOptionsUndo.push(sourceText.value);
        }
        pasteText.then(function(text){
            sourceText.value = text;
            translate();
        });
        console.log(pasteText);
        currentSourceText = sourceText.value;
        curentResultText = resultText.value;
    } else{
        console.log('paste reached end');
    }

}
function hideOptions(){
    //src
    if(nr === 0){
        if(srcOptionsMode){
            srcOptionsMode = false;
            document.getElementById("src-buttons-wrapper-options-1").style.display = "none";
            document.getElementById("src-buttons-wrapper-options-2").style.display = "none";
        } else {
            srcOptionsMode = true;
            document.getElementById("src-buttons-wrapper-options-1").style.display = "block";
            document.getElementById("src-buttons-wrapper-options-2").style.display = "block";
        }
    }
    //result
    else if (nr === 1){
        if(resultOptionsMode){
            resultOptionsMode = false;
            document.getElementById("result-buttons-wrapper-options-1").style.display = "none";
            document.getElementById("result-buttons-wrapper-options-2").style.display = "none";
        } else{
            resultOptionsMode = true;
            document.getElementById("result-buttons-wrapper-options-1").style.display = "block";
            document.getElementById("result-buttons-wrapper-options-2").style.display = "block";
        }

    }
}

function reset(){
    mode = 0;
    sourceText.value = "";
    resultText.value = "";
    radioButton0.checked= "true";
    sourceOptions.groupNr.value = "5";
    resultOptions.groupNr.value = "5";
    resultOptionsUndo.splice();
    sourceOptionsUndo.splice();
}

// load event listeners
sourceText.addEventListener("input", translate);
radioButton0.addEventListener('click', setMode);
radioButton1.addEventListener('click', setMode);
document.addEventListener('DOMContentLoaded', reset);

sourceOptions.removeSpaces.addEventListener('click', function(){
    nr = 0;
    removeSpaces();
});
resultOptions.removeSpaces.addEventListener('click', function(){
    nr = 1;
    removeSpaces();
});

sourceOptions.lettersOnly.addEventListener('click', function(){
    nr = 0;
    lettersOnly();
});
resultOptions.lettersOnly.addEventListener('click', function(){
    nr = 1;
    lettersOnly();
});

sourceOptions.reverse.addEventListener('click', function(){
    nr = 0;
    reverse();
});
resultOptions.reverse.addEventListener('click', function(){
    nr = 1;
    reverse();
});

sourceOptions.upper.addEventListener('click', function(){
    nr = 0;
    upper();
});
resultOptions.upper.addEventListener('click', function(){
    nr = 1;
    upper();
});

sourceOptions.lower.addEventListener('click', function(){
    nr = 0;
    lower();
});
resultOptions.lower.addEventListener('click', function(){
    nr = 1;
    lower();
});

sourceOptions.undo.addEventListener('click', function(){
    nr = 0;
    undo();
});
resultOptions.undo.addEventListener('click', function(){
    nr = 1;
    undo();
});

sourceOptions.group.addEventListener('click', function(){
    nr = 0;
    group();
});
resultOptions.group.addEventListener('click', function(){
    nr = 1;
    group();
});

sourceCopyBtn.addEventListener('click', function(){
    nr = 0;
    copy();
});
resultCopyBtn.addEventListener('click', function(){
    nr = 1;
    copy();
});

sourcePasteBtn.addEventListener('click', function(){
    nr = 0;
    paste();
});

sourceOptionsBtn.addEventListener('click', function(){
    nr = 0;
    hideOptions();
});
resultOptionsBtn.addEventListener('click', function(){
    nr = 1;
    hideOptions();
});
