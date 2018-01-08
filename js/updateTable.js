import { table } from './domElements'
import { actualValue } from './domElements'

export function updateTable(prices){
    const tableRows = table.rows;
    for (let i = 1; i<tableRows.length; i++){
        const row = tableRows[i];
        const id = row.id;
        row.cells[3].innerHTML = (Number(prices[id].EUR)*Number(row.cells[1].innerHTML)).toFixed(2);
    }
    calculateVariation();
}

function calculateVariation(){
    for (var i=1; i<table.rows.length; i++){
        const currentValue = Number(table.rows[i].cells[3].innerHTML);
        const currentInvestment = Number(table.rows[i].cells[2].innerHTML)
        const variation = (((currentValue-currentInvestment)*100)/currentInvestment).toFixed(2);
        if(variation > 0){
            table.rows[i].cells[4].innerHTML = `+ ${variation} %`;
            table.rows[i].cells[4].style.color = 'green'
        } else {
            table.rows[i].cells[4].innerHTML = `${variation} %`;
            table.rows[i].cells[4].style.color = 'red'
        }
    }
    calculateWalletVariation();
}

function calculateWalletVariation() {
    const totalInvestment = calculateTotalInvestment();
    const totalValue = calculateTotalValue().toFixed(2);
    const variation = (((totalValue-totalInvestment)*100)/totalInvestment).toFixed(2);
    if (variation > 0){
        actualValue.innerHTML = `Investment: ${totalInvestment}, Actual Value: ${totalValue}, Total Variation: + ${variation} %`;
        actualValue.style.color = 'green';
    } else {
        actualValue.innerHTML = `Investment: ${totalInvestment}, Actual Value: ${totalValue}, Total Variation: ${variation} %`;
        actualValue.style.color = 'red';
    }

}

function calculateTotalInvestment() {
    let totalInvestment = 0;
    for (var i=1; i<table.rows.length; i++){
        totalInvestment += Number(table.rows[i].cells[2].innerHTML);
    }
    return totalInvestment;
}

function calculateTotalValue() {
    let totalValue = 0;
    for (var i=1; i<table.rows.length; i++){
        totalValue += Number(table.rows[i].cells[3].innerHTML);
    }
    return totalValue;
}