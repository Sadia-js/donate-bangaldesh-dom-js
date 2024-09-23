// get InputField Value By Id
function getInputFieldValueById(id){
    const inputText = document.getElementById(id).value;
    const inputValue = Number(inputText);
    return inputValue;
}

// get innerText value by Id
function getTextValueById(id){
    const text = document.getElementById(id).innerText;
    const textValue = Number(text);
    return textValue;
}

// set value inside the element by Id
// let count = 0;
function setTextElementById(id, balance){
    //  count += balance
    document.getElementById(id).innerText = balance;
}


