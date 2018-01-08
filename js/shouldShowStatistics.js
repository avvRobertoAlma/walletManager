import { data, statistics, table } from './domElements'
import { insertRow } from './handleSubmit'

export const wallet = localStorage.getItem('wallet');

export function shouldShowStatistics(){
    if (wallet) {
        data.classList.add('hidden');
        statistics.classList.remove('hidden');
        const parsedWallet = JSON.parse(wallet);
        for(let crypto of parsedWallet){
            insertRow(crypto.id, crypto.amount, crypto.investment);
        }

    } else {
        data.classList.remove('hidden');
        statistics.classList.add('hidden');
    }
}