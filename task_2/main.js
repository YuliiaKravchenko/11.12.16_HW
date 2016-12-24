/*Условный запрос на сервер для получения информации о состоянии рынка ценных бумаг возвращает на строку типа:

apple:2016/5/27__bid_203.38-ask_203.43|2016/5/28__bid_203.35-ask_203.42|2016/5/29__bid_203.39-ask_203.45

После разбора строки с помощью регулярного выражения нужно получить объект определенного вида*/

let string = "apple:2016/5/27__bid_203.38-ask_203.43|2016/5/28__bid_203.35-ask_203.42|2016/5/29__bid_203.39-ask_203.45",
    firstPart = string.match(/[a-z]+/).toString(),
    obj = {
        stockName: firstPart,
        rates:[]
    };

let strParts = string.match(/([0-9]\w.+?(\||$))/g);// my option, why it not 3 parts 

console.log(strParts);

strParts.forEach(function(el, i , arr){
    let date = el.match(/\d+\/+\d+\/\d+/).toString();
    console.log(date);
    let bid = el.match(/(bid_)+[0-9]+\.[0-9]./).toString().slice(4,10);
    console.log(bid);
    let ask = el.match(/(ask_)+[0-9]+\.[0-9]./).toString().slice(4,10);
    console.log(ask);
    obj.rates.push({date:date , bid:bid , ask:ask });
});
    
    
console.log(firstPart);
console.log(obj);


