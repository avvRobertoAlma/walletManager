/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const table = document.querySelector('#table');
/* harmony export (immutable) */ __webpack_exports__["o"] = table;

const actualValue = document.querySelector('#actualValue');
/* harmony export (immutable) */ __webpack_exports__["k"] = actualValue;


const data = document.querySelector('#data');
/* harmony export (immutable) */ __webpack_exports__["l"] = data;

const statistics = document.querySelector('#statistics');
/* harmony export (immutable) */ __webpack_exports__["n"] = statistics;


const formData = document.querySelector('#formData');
/* harmony export (immutable) */ __webpack_exports__["m"] = formData;


const BTCamount = document.querySelector('#BTCamount');
/* harmony export (immutable) */ __webpack_exports__["c"] = BTCamount;

const BTCinvestment = document.querySelector('#BTCinvestment');
/* harmony export (immutable) */ __webpack_exports__["d"] = BTCinvestment;

const LTCamount = document.querySelector('#LTCamount');
/* harmony export (immutable) */ __webpack_exports__["g"] = LTCamount;

const LTCinvestment = document.querySelector('#LTCinvestment');
/* harmony export (immutable) */ __webpack_exports__["h"] = LTCinvestment;

const ETHamount = document.querySelector('#ETHamount');
/* harmony export (immutable) */ __webpack_exports__["e"] = ETHamount;

const ETHinvestment = document.querySelector('#ETHinvestment');
/* harmony export (immutable) */ __webpack_exports__["f"] = ETHinvestment;

const XRPamount = document.querySelector('#XRPamount');
/* harmony export (immutable) */ __webpack_exports__["i"] = XRPamount;

const XRPinvestment = document.querySelector('#XRPinvestment');
/* harmony export (immutable) */ __webpack_exports__["j"] = XRPinvestment;

const BROamount = document.querySelector('#BROamount');
/* harmony export (immutable) */ __webpack_exports__["a"] = BROamount;

const BROinvestment = document.querySelector('#BROinvestment');
/* harmony export (immutable) */ __webpack_exports__["b"] = BROinvestment;

const updateWallet = document.querySelector('#updateWallet');
/* harmony export (immutable) */ __webpack_exports__["p"] = updateWallet;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPrices;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__updateTable__ = __webpack_require__(5);


function getPrices(){
    return fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP,BRO&tsyms=EUR')
        .then((res)=>res.json())
        .then((data)=> Object(__WEBPACK_IMPORTED_MODULE_0__updateTable__["a" /* updateTable */])(data));
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shouldShowStatistics;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domElements__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handleSubmit__ = __webpack_require__(3);



const wallet = localStorage.getItem('wallet');
/* harmony export (immutable) */ __webpack_exports__["b"] = wallet;


function shouldShowStatistics(){
    if (wallet) {
        __WEBPACK_IMPORTED_MODULE_0__domElements__["l" /* data */].classList.add('hidden');
        __WEBPACK_IMPORTED_MODULE_0__domElements__["n" /* statistics */].classList.remove('hidden');
        const parsedWallet = JSON.parse(wallet);
        for(let crypto of parsedWallet){
            Object(__WEBPACK_IMPORTED_MODULE_1__handleSubmit__["b" /* insertRow */])(crypto.id, crypto.amount, crypto.investment);
        }

    } else {
        __WEBPACK_IMPORTED_MODULE_0__domElements__["l" /* data */].classList.remove('hidden');
        __WEBPACK_IMPORTED_MODULE_0__domElements__["n" /* statistics */].classList.add('hidden');
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleSubmit;
/* harmony export (immutable) */ __webpack_exports__["b"] = insertRow;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domElements__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrices__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shouldShowStatistics__ = __webpack_require__(2);





function handleSubmit(event){
    event.preventDefault();
    if(__WEBPACK_IMPORTED_MODULE_2__shouldShowStatistics__["b" /* wallet */]){
        localStorage.removeItem('wallet');
    }
    __WEBPACK_IMPORTED_MODULE_0__domElements__["l" /* data */].classList.add('hidden');
    __WEBPACK_IMPORTED_MODULE_0__domElements__["n" /* statistics */].classList.remove('hidden');
    insertRow('BTC', __WEBPACK_IMPORTED_MODULE_0__domElements__["c" /* BTCamount */].value, __WEBPACK_IMPORTED_MODULE_0__domElements__["d" /* BTCinvestment */].value);
    insertRow('ETH', __WEBPACK_IMPORTED_MODULE_0__domElements__["e" /* ETHamount */].value, __WEBPACK_IMPORTED_MODULE_0__domElements__["f" /* ETHinvestment */].value);
    insertRow('LTC', __WEBPACK_IMPORTED_MODULE_0__domElements__["g" /* LTCamount */].value, __WEBPACK_IMPORTED_MODULE_0__domElements__["h" /* LTCinvestment */].value);
    insertRow('XRP', __WEBPACK_IMPORTED_MODULE_0__domElements__["i" /* XRPamount */].value, __WEBPACK_IMPORTED_MODULE_0__domElements__["j" /* XRPinvestment */].value);
    insertRow('BRO', __WEBPACK_IMPORTED_MODULE_0__domElements__["a" /* BROamount */].value, __WEBPACK_IMPORTED_MODULE_0__domElements__["b" /* BROinvestment */].value);
    let walletObj = [];
    const tableRows = __WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows;
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
    __WEBPACK_IMPORTED_MODULE_0__domElements__["m" /* formData */].reset();
};

function insertRow(key, amount, investment){
    if (amount > 0){
        let newRow = __WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].insertRow();
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

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getPrices__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shouldShowStatistics__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domElements__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handleSubmit__ = __webpack_require__(3);





Object(__WEBPACK_IMPORTED_MODULE_1__shouldShowStatistics__["a" /* shouldShowStatistics */])();

__WEBPACK_IMPORTED_MODULE_2__domElements__["m" /* formData */].addEventListener('submit', __WEBPACK_IMPORTED_MODULE_3__handleSubmit__["a" /* handleSubmit */]);

setInterval(function(){
if(!__WEBPACK_IMPORTED_MODULE_2__domElements__["n" /* statistics */].classList.contains('hidden')){
    Object(__WEBPACK_IMPORTED_MODULE_0__getPrices__["a" /* getPrices */])();
 } 
}, 10000);

__WEBPACK_IMPORTED_MODULE_2__domElements__["p" /* updateWallet */].addEventListener('click', function(){
    __WEBPACK_IMPORTED_MODULE_2__domElements__["n" /* statistics */].classList.add('hidden');
    __WEBPACK_IMPORTED_MODULE_2__domElements__["l" /* data */].classList.remove('hidden');
    for (let i = 1; i<__WEBPACK_IMPORTED_MODULE_2__domElements__["o" /* table */].rows.length; i++){
        __WEBPACK_IMPORTED_MODULE_2__domElements__["o" /* table */].deleteRow(i);
    }
})

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = updateTable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domElements__ = __webpack_require__(0);



function updateTable(prices){
    const tableRows = __WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows;
    for (let i = 1; i<tableRows.length; i++){
        const row = tableRows[i];
        const id = row.id;
        row.cells[3].innerHTML = (Number(prices[id].EUR)*Number(row.cells[1].innerHTML)).toFixed(2);
    }
    calculateVariation();
}

function calculateVariation(){
    for (var i=1; i<__WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows.length; i++){
        const currentValue = Number(__WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows[i].cells[3].innerHTML);
        const currentInvestment = Number(__WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows[i].cells[2].innerHTML)
        const variation = (((currentValue-currentInvestment)*100)/currentInvestment).toFixed(2);
        if(variation > 0){
            __WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows[i].cells[4].innerHTML = `+ ${variation} %`;
            __WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows[i].cells[4].style.color = 'green'
        } else {
            __WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows[i].cells[4].innerHTML = `${variation} %`;
            __WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows[i].cells[4].style.color = 'red'
        }
    }
    calculateWalletVariation();
}

function calculateWalletVariation() {
    const totalInvestment = calculateTotalInvestment();
    const totalValue = calculateTotalValue().toFixed(2);
    const variation = (((totalValue-totalInvestment)*100)/totalInvestment).toFixed(2);
    if (variation > 0){
        __WEBPACK_IMPORTED_MODULE_0__domElements__["k" /* actualValue */].innerHTML = `Investment: ${totalInvestment}, Actual Value: ${totalValue}, Total Variation: + ${variation} %`;
        __WEBPACK_IMPORTED_MODULE_0__domElements__["k" /* actualValue */].style.color = 'green';
    } else {
        __WEBPACK_IMPORTED_MODULE_0__domElements__["k" /* actualValue */].innerHTML = `Investment: ${totalInvestment}, Actual Value: ${totalValue}, Total Variation: + ${variation} %`;
        __WEBPACK_IMPORTED_MODULE_0__domElements__["k" /* actualValue */].style.color = 'red';
    }

}

function calculateTotalInvestment() {
    let totalInvestment = 0;
    for (var i=1; i<__WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows.length; i++){
        totalInvestment += Number(__WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows[i].cells[2].innerHTML);
    }
    return totalInvestment;
}

function calculateTotalValue() {
    let totalValue = 0;
    for (var i=1; i<__WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows.length; i++){
        totalValue += Number(__WEBPACK_IMPORTED_MODULE_0__domElements__["o" /* table */].rows[i].cells[3].innerHTML);
    }
    return totalValue;
}

/***/ })
/******/ ]);