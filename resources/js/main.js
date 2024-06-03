const inputText = document.getElementById("txtinput");
const outputMessage = document.getElementById("txtmessage");
const buttonClicked = document.getElementById("button-clicked");
const patternLoop = document.getElementById("output-loop");
const inputNumber = document.getElementById("txtinputNum");
const outputNumMessage = document.getElementById('txtmessageNum');
const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');
const stringMonth = document.getElementById("txtCountry");
const stringOutput = document.getElementById("txtStrOutput");

//for loop
const forLoopFunc = () => {
    let str = inputText.value;

    if (str === ""){
        buttonClicked.textContent = "for loop button clicked";
        outputMessage.textContent = 'Please enter some text';
        return;
    }

    const isPalindrome = (str) => {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i]!== str[j]) {
            return false
        }

        j--;
    }
    return true;
}
    
    if (isPalindrome(str)) {
        buttonClicked.textContent = "for loop button clicked";
        outputMessage.textContent = `${str} is Palindrome`;
    } else {
        buttonClicked.textContent = "for loop button clicked";
        outputMessage.textContent = `${str} is not Palindrome`;
    }
}

//while loop

const whileLoopFunc = () => {
    let str = inputText.value;

    if (str === ""){
        buttonClicked.textContent = "while loop button clicked";
        outputMessage.textContent = 'Please enter some text';
        return;
    }

    const isPalindrome = (str) => {
    let j = str.length - 1
    let i = 0;
    while (i < str.length / 2) {
        if (str[i]!== str[j]) {
            return false
        }
        i++;
        j--;
    }
    return true;
}
    
    if (isPalindrome(str)) {
        buttonClicked.textContent = "while loop button clicked";
        outputMessage.textContent = `${str} is Palindrome`;
    } else {
        buttonClicked.textContent = "while loop button clicked";
        outputMessage.textContent = `${str} is not Palindrome`;
    }
}

//foreach

const forEachLoopFunc = () => {
    let str = inputText.value;

    if (str === ""){
        buttonClicked.textContent = "forEach loop button clicked";
        outputMessage.textContent = 'Please enter some text';
        return;
    }

    const isPalindrome = (str) => {
        let isPalindrome = true;
        let j = str.length - 1
        str.split('').forEach((char, i) => {
            if (i < str.length / 2) {
                if (char!== str[j]) {
                    isPalindrome = false
                }
                j--;
            }
        })
        return isPalindrome;
}
    
    if (isPalindrome(str)) {
        buttonClicked.textContent = "forEach loop button clicked";
        outputMessage.textContent = `${str} is Palindrome`;
    } else {
        buttonClicked.textContent = "forEach loop button clicked";
        outputMessage.textContent = `${str} is not Palindrome`;
    }
}

//looping

let row = 5;
let pattern = '';

 for(let i = 1; i <= row; i++) {
    let str = "";
    for(let j = i; j <= row; j++) {
        str += j + " ";
    }
    pattern += `${str} \n`;
 }

 patternLoop.textContent = pattern;


//  check if number entered is odd or even 
const onSubmit = () => {
    let num = inputNumber.value;

    if(!num){
        outputNumMessage.textContent = 'Please enter a number';
        return;
    }
    if (num % 2 === 0) {
        outputNumMessage.textContent = `${num} is an even number`;
    } else {
        outputNumMessage.textContent = `${num} is an odd number`;
    }
} 

const handleChange = (e) => {
    let country = e.target.value;
    citySelect.innerHTML = ''; 

    switch(country){
        case 'Australia':
            citySelect.innerHTML += `<option value="">Select City in ${country}</option>`;
            citySelect.innerHTML += '<option value="sydney">Sydney</option>';
            citySelect.innerHTML += '<option value="melbourne">Melbourne</option>';
            citySelect.innerHTML += '<option value="brisbane">Brisbane</option>';
            break;
        case 'England':
            citySelect.innerHTML += `<option value="">Select City in ${country}</option>`;
            citySelect.innerHTML += '<option value="london">London</option>';
            citySelect.innerHTML += '<option value="birmingham">Birmingham</option>';
            break;
        case 'Germany':
            citySelect.innerHTML += `<option value="">Select City in ${country}</option>`;
            citySelect.innerHTML += '<option value="berlin">Berlin</option>';
            citySelect.innerHTML += '<option value="hamburg">Hamburg</option>';
            break;
        case 'Philippines':
            citySelect.innerHTML += `<option value="">Select City in ${country}</option>`;
            citySelect.innerHTML += '<option value="manila">Manila</option>';
            citySelect.innerHTML += '<option value="quezon">Quezon</option>';
            citySelect.innerHTML += '<option value="makati">Makati</option>';
            break;
        default:
            citySelect.innerHTML += '<option value="">No Selected Country</option>';
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {

    countrySelect.addEventListener('change', handleChange);
});

const onSubmitSorting = () => {
let str = stringMonth.value;

let specialCharacters =  /[-!@#$%^&*(),.?":;{}|<>_/\[\]\\]/g;


let newStr = str.replace(specialCharacters, ' ');
newStr = newStr.toUpperCase()

stringOutput.textContent = newStr;

};

const getMonths = () => {
    let str = stringMonth.value;
    let specialCharacters = /[-!@#$%^&*(),.?":;{}|<>_/\[\]\\]/g;
    let newStr = str.replace(specialCharacters, ' ');
    let monthsArray = newStr.split(' ').filter(month => month.trim() !== '');
    return monthsArray;
}

const renderMonths = () => {
    let monthsArray = getMonths();
    const tableBody = document.getElementById('monthsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';  

    for (let i = 0; i < monthsArray.length; i++) {
        const row = tableBody.insertRow();
        const cellId = row.insertCell(0);
        const cellMonth = row.insertCell(1);
        cellId.textContent = i + 1;
        cellMonth.textContent = monthsArray[i];
    }
}

const getFullNames = () => {

const tbody = document.getElementById('userData');
const rows = tbody.getElementsByTagName('tr');
let fullNames = [];
const userFullnameTbody = document.getElementById('userFullnameData');
userFullnameTbody.innerHTML = ''; 

for (let row of rows) {
    const cells = row.getElementsByTagName('td');
    const lastName = cells[0].textContent;
    const firstName = cells[1].textContent;
    const middleName = cells[2].textContent;
    let fullName = `${lastName}, ${firstName}`; 

    if (middleName) { 
        const middleInitial = middleName.charAt(0); 
        fullName = `${lastName}, ${firstName} ${middleInitial}.`; 
    }
    
    fullNames.push(fullName);

    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    newCell.textContent = fullName;
    newRow.appendChild(newCell);
    userFullnameTbody.appendChild(newRow);
}
}