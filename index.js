const sum = document.getElementById('sum');
const from = document.getElementById('from_currency');
const to = document.getElementById('to_currency');
const button = document.getElementById('button');
const result = document.getElementById('result');

let res = 0;

const rub = 1;
const usd = 90;
const eur = 100;
const kzt = 0.2;

button.addEventListener('click', () => {
    if (sum.value < 0 || sum.value == 0) {
        result.textContent = "Введите сумму от 0"
    }
    else {
        res = sum.value
        res = Number(res)
        if (from.value ==  "RUB") {
            res = res * rub
        }
        else if (from.value ==  "USD") {
            res = res * usd
        }
        else if (from.value ==  "EUR") {
            res = res * eur
        }
        else if (from.value ==  "KZT") {
            res = res * kzt
        };
        if (to.value ==  "RUB") {
            res = res / rub
        }
        else if (to.value ==  "USD") {
            res = res / usd
        }
        else if (to.value ==  "EUR") {
            res = res / eur
        }
        else if (to.value ==  "KZT") {
            res =  res / kzt
        };
        res = res.toFixed(2);
        result.textContent = `${sum.value} ${from.value} = ${res} ${to.value}`;
    };
});