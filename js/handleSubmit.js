import { table, formData, data, statistics, ETHamount, ETHinvestment, BTCamount, BTCinvestment, XRPinvestment, XRPamount, BROamount, BROinvestment, LTCamount, LTCinvestment, ETNamount, ETNinvestment, XLMamount, XLMinvestment, ADAamount, ADAinvestment} from './domElements'
import { getPrices } from './getPrices'
import { wallet } from './shouldShowStatistics'


export function handleSubmit(event){
    event.preventDefault();
    data.classList.add('hidden');
    statistics.classList.remove('hidden');
    insertRow('BTC', BTCamount.value, BTCinvestment.value);
    insertRow('ETH', ETHamount.value, ETHinvestment.value);
    insertRow('LTC', LTCamount.value, LTCinvestment.value);
    insertRow('XRP', XRPamount.value, XRPinvestment.value);
    insertRow('BRO', BROamount.value, BROinvestment.value);
    insertRow('ETN', ETNamount.value, ETNinvestment.value);
    insertRow('XLM', XLMamount.value, XLMinvestment.value);
    insertRow('ADA', ADAamount.value, ADAinvestment.value);
    let walletObj = [];
    const tableRows = table.rows;
    for (let i = 1; i<tableRows.length; i++){
        const row = tableRows[i];
        const id = row.id;
        const amount = Number(row.cells[1].innerHTML);
        const investment = Number(row.cells[2].innerHTML);
        const obj = {
            id:id,
            amount:amount,
            investment:investment
        };
        walletObj.push(obj);
    }
   
    localStorage.setItem('wallet', JSON.stringify(walletObj));
    formData.reset();
};

export function insertRow(key, amount, investment){
    if (amount > 0){
        let newRow = table.insertRow();
        newRow.id = key;
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = key;
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = amount;
        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = investment;
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
    } else {
        return;
    }
}