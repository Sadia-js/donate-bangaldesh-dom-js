const totalBalance = getTextValueById('needed-amount');

// For campaign-1 card
document.getElementById('donate-btn').addEventListener('click', function(){
    const getMoney = document.getElementById('donate-noakhali').value;

    if(getMoney !== "" && !isNaN(getMoney) && getMoney > 0 && getMoney < totalBalance){
        // add money
        const donatedMoney = getInputFieldValueById('donate-noakhali');
        const campaignAmount = getTextValueById('campaign1-amount');
        const totalDonation = donatedMoney + campaignAmount;
        setTextElementById('campaign1-amount', totalDonation);

        // Updated Balance
        const addMoney = document.getElementById('campaign1-amount').innerText;
        const updatedBalance = totalBalance - addMoney;
        document.getElementById('needed-amount').innerText = updatedBalance;
        document.getElementById('my_modal_1').showModal();   
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
        const campaignAmount = getTextValueById('campaign2-amount');
        const totalDonation = donatedMoney + campaignAmount;
        setTextElementById('campaign2-amount', totalDonation);

        // Updated Balance
        const addMoney = document.getElementById('campaign2-amount').innerText;
        const updatedBalance = totalBalance - addMoney;
        document.getElementById('needed-amount').innerText = updatedBalance;
        document.getElementById('my_modal_2').showModal();   
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
        const campaignAmount = getTextValueById('campaign3-amount');
        const totalDonation = donatedMoney + campaignAmount;
        setTextElementById('campaign3-amount', totalDonation);

        // Updated Balance
        const addMoney = document.getElementById('campaign3-amount').innerText;
        const updatedBalance = totalBalance - addMoney;
        document.getElementById('needed-amount').innerText = updatedBalance;
        document.getElementById('my_modal_3').showModal();   
        document.getElementById('donate-quota').value = '';
    }
    else{
        alert('Invalid Data');
        document.getElementById('donate-quota').value = '';
        return;
    }

})

// history button triggered
function historyBtn(){
    document.getElementById('campaign-cards').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');
    const date = new Date();
    const localDate = date.toLocaleString();
    const div = document.createElement('div');
    div.innerHTML = 
    `
    <h3 class="text-lg font-semibold">1000 Taka is Donated for Flood at Noakhali, Bangladesh</h3>
    <p class="text-base font-medium">yfyfyfyu</p>
    `
    document.getElementById('history-container').prepend(div);
}

// donation button triggered
function donationBtn(){
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('campaign-cards').classList.remove('hidden');
}

