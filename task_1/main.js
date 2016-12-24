/*Задание 1

На запрос к серверу о дате последнего изменения документа вы получаете ответ в строке, которая имеет формат:
2016/05/20-12:00:35+0300
Задача - получить из этой строки объект класса Date и вывести в консоль эту дату в формате timestamp (1463727635000)

let x = Date.parse("2016-05-20 12:00:35+0300"); right option for Mozilla
*/

let date = "2016/05/20-12:00:35+0300",
    firstPart = date.match(/\d+\/+\d+\/\d+/g).toString().replace( /\//g, "-"),
    secondPart = " "+date.match(/\b-[0-9]+:[0-9]+:[0-9]+/).toString().substring(1),
    thirdPart = date.match(/\+(\d+)/).toString().slice(0,5),
    result = firstPart.concat(secondPart).concat(thirdPart),
    newFormat = Date.parse(result);
console.log(firstPart);
console.log(secondPart);
console.log(thirdPart);
console.log(result);
console.log(newFormat);
