import { updateTable } from './updateTable'

export function getPrices(){
    return fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP,BRO&tsyms=EUR')
        .then((res)=>res.json())
        .then((data)=> updateTable(data));
}