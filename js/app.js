import { getPrices } from './getPrices';
import { wallet, shouldShowStatistics } from './shouldShowStatistics'
import { statistics, formData, updateWallet, data, table } from './domElements';
import { handleSubmit } from './handleSubmit';

shouldShowStatistics();

formData.addEventListener('submit', handleSubmit);

setInterval(function(){
if(!statistics.classList.contains('hidden')){
    getPrices();
 } 
}, 10000);

updateWallet.addEventListener('click', function(){
    statistics.classList.add('hidden');
    data.classList.remove('hidden');
    for (let i = 1; i<table.rows.length; i++){
        table.deleteRow(i);
    }
})