const totalBalance = getTextValueById('needed-amount');

// For campaign-1 card
document.getElementById('donate-btn').addEventListener('click', function(){
    const getMoney = document.getElementById('donate-noakhali').value;

    if(getMoney !== "" && !isNaN(getMoney) && getMoney > 0 && getMoney < totalBalance){
        // add money
        const donatedMoney = getInputFieldValueById('donate-noakhali');
        setTextElementById('campaign1-amount', donatedMoney);

        // Updated Balance
        const addMoney = document.getElementById('campaign1-amount').innerText;
        const updatedBalance = totalBalance - addMoney;
        document.getElementById('needed-amount').innerText = updatedBalance;
        document.getElementById('my_modal_5').showModal();   
        document.getElementById('donate-noakhali').value = '';
    }
    else{
        alert('Invalid Data');
        document.getElementById('donate-noakhali').value = '';
        return;
    }
})

// For campaign-2 card
document.getElementById('donate-btn2').addEventListener('click', function(){
    const getMoney = document.getElementById('donate-feni').value;

    if(getMoney !== "" && !isNaN(getMoney) && getMoney > 0 && getMoney < totalBalance){
        // add money
        const donatedMoney = getInputFieldValueById('donate-feni');
        setTextElementById('campaign2-amount', donatedMoney);

        // Updated Balance
        const addMoney = document.getElementById('campaign2-amount').innerText;
        const updatedBalance = totalBalance - addMoney;
        document.getElementById('needed-amount').innerText = updatedBalance;
        document.getElementById('my_modal_5').showModal();   
        document.getElementById('donate-feni').value = '';
    }
    else{
        alert('Invalid Data');
        document.getElementById('donate-feni').value = '';
        return;
    }
})
// For campaign-3 card
document.getElementById('donate-btn3').addEventListener('click', function(){
    const getMoney = document.getElementById('donate-quota').value;

    if(getMoney !== "" && !isNaN(getMoney) && getMoney > 0 && getMoney < totalBalance){
        // add money
        const donatedMoney = getInputFieldValueById('donate-quota');
        setTextElementById('campaign3-amount', donatedMoney);

        // Updated Balance
        const addMoney = document.getElementById('campaign3-amount').innerText;
        const updatedBalance = totalBalance - addMoney;
        document.getElementById('needed-amount').innerText = updatedBalance;
        document.getElementById('my_modal_5').showModal();   
        document.getElementById('donate-quota').value = '';
    }
    else{
        alert('Invalid Data');
        document.getElementById('donate-quota').value = '';
        return;
    }

})