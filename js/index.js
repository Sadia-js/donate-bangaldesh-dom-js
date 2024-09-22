// After triggered blog button will take you up the another html page
function blogHandler(){
    window.location.href = "../faq.html";
}

// After triggered home button will take you up the Home page
function homeHandler(){
    window.location.href = "../index.html";
}

// getInputField Value By Id
document.getElementById('donate-btn').addEventListener('click', function(){

    // add money
    const donatedMoney = getInputFieldValueById('donate-noakhali');
    setTextElementById('campaign1-amount', donatedMoney);
    
    // Updated Balance
    const totalBalance = getTextValueById('needed-amount');
    if(donatedMoney > totalBalance){
        showScreen('invalid1');
        return;
    }
    else if(donatedMoney > 0){
        const addMoney = document.getElementById('campaign1-amount').innerText;
        const updatedBalance = totalBalance - addMoney;
        document.getElementById('needed-amount').innerText = updatedBalance;
        console.log(updatedBalance);
    }
    // console.log(totalBalance)
})