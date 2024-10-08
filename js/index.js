const historyContainer = document.getElementById('history-container');
const history1 = document.getElementById('history-container1');
const history2 = document.getElementById('history-container2');
const history3 = document.getElementById('history-container3');

const title1 = document.getElementById('history-title-1').innerText;
const title2 = document.getElementById('history-title-2').innerText;
const title3 = document.getElementById('history-title-3').innerText;

let total = 5500;

// For campaign-1 card
document.getElementById('donate-btn').addEventListener('click', function(){
    const totalBalance = getTextValueById('needed-amount');
    const getMoney = getInputFieldValueById('donate-noakhali');
    if(getMoney !== "" && !isNaN(getMoney) && getMoney > 0 && getMoney <= totalBalance){
  
        // add money
        const campaign1 = getTextValueById('campaign1-amount');
        const add = campaign1 + getMoney;
        setTextElementById('campaign1-amount', add);

        // Updated Balance
        total = total - getMoney;
        document.getElementById('needed-amount').innerText = total;
        document.getElementById('my_modal_1').showModal();   
        document.getElementById('donate-noakhali').value = '';

        // history
        const date = new Date();
        const localDate = date.toString();
        const div = document.createElement('div');
        div.classList.add('border-2', 'p-4', 'rounded-lg', 'mb-4');
        div.innerHTML = `
           <h3 class="text-lg font-semibold">${getMoney} ${title1}</h3>
           <p class="bg-gray-100 p-3 text-base font-medium mt-3 rounded-lg">${localDate}</p>
        `
        history1.insertBefore(div, history1.firstChild);
    }
    else{
        document.getElementById('invalid-modal-1').showModal();
        document.getElementById('donate-noakhali').value = '';
        return;
    }
})

// For campaign-2 card
document.getElementById('donate-btn2').addEventListener('click', function(){
    const totalBalance = getTextValueById('needed-amount');
    const getMoney = getInputFieldValueById('donate-feni');
    if(getMoney !== "" && !isNaN(getMoney) && getMoney > 0 && getMoney <= totalBalance){

        // add money
        const campaign2 = getTextValueById('campaign2-amount');
        const add = campaign2 + getMoney;
        setTextElementById('campaign2-amount', add);
       
        // Updated Balance
        total = total - getMoney;
        document.getElementById('needed-amount').innerText = total;
        document.getElementById('my_modal_2').showModal();
        document.getElementById('donate-feni').value = '';   

        // history
        const date = new Date();
        const localDate = date.toString();
        const div = document.createElement('div');
        div.classList.add('border-2', 'p-4', 'rounded-lg', 'mb-4');
        div.innerHTML = `
           <h3 class="text-lg font-semibold">${getMoney} ${title2}</h3>
           <p class="bg-gray-100 p-3 text-base font-medium mt-3 rounded-lg">${localDate}</p>
        `
        history2.insertBefore(div, history2.firstChild);
    }
    else{
        document.getElementById('invalid-modal-2').showModal();
        document.getElementById('donate-feni').value = '';
        return;
    }
})
// For campaign-3 card
document.getElementById('donate-btn3').addEventListener('click', function(){
    const totalBalance = getTextValueById('needed-amount');
    const getMoney = getInputFieldValueById('donate-quota');
    if(getMoney !== "" && !isNaN(getMoney) && getMoney > 0 && getMoney <= totalBalance){
        // add money
        const campaign3 = getTextValueById('campaign3-amount');
        const add = campaign3 + getMoney;
        setTextElementById('campaign3-amount', add);

        // Updated Balance
        total = total - getMoney;
        document.getElementById('needed-amount').innerText = total;   
        document.getElementById('my_modal_3').showModal();   
        document.getElementById('donate-quota').value = '';

        // history
        const date = new Date();
        const localDate = date.toString();
        const div = document.createElement('div');
        div.classList.add('border-2', 'p-4', 'rounded-lg', 'mb-4');
        div.innerHTML = `
           <h3 class="text-lg font-semibold">${getMoney} ${title3}</h3>
           <p class="bg-gray-100 p-3 text-base font-medium mt-3 rounded-lg">${localDate}</p>
        `
        history3.insertBefore(div, history3.firstChild);
    }
    else{
        document.getElementById('invalid-modal-3').showModal();
        document.getElementById('donate-quota').value = '';
        return;
    }

})


// history button triggered
function historyBtn(){
    document.getElementById('history-btn').classList.add('bg-primary');
    document.getElementById('history-btn').classList.add('hover:bg-lime-200');
    document.getElementById('donation-btn').classList.remove('bg-primary');    
    document.getElementById('donation-btn').classList.remove('hover:bg-lime-200');    
    hideScreen('campaign-cards')
    showScreen('history-container');
}

// donation button triggered
function donationBtn(){
    document.getElementById('history-btn').classList.remove('bg-primary');
    document.getElementById('history-btn').classList.remove('hover:bg-lime-200');
    document.getElementById('donation-btn').classList.add('bg-primary');
    document.getElementById('donation-btn').classList.add('hover:bg-lime-200');
    hideScreen('history-container');
    showScreen('campaign-cards')
}

