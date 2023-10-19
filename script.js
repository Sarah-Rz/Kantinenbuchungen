let drinks = '{ "drink" : [' +
'{"artikel":"Getränk 1", "preis":"1,19€"},'+
'{"artikel":"Getränk 2", "preis":"2,15€"},'+
'{"artikel":"Getränk 3", "preis":"3,49€"},'+
'{"artikel":"Getränk 4", "preis":"1,86€"},'+
'{"artikel":"Getränk 5", "preis":"1,39€"},'+
'{"artikel":"Getränk 6", "preis":"1,06€"},'+
'{"artikel":"Getränk 7", "preis":"0,20€"},'+
'{"artikel":"Getränk 8", "preis":"2,20€"},'+
'{"artikel":"Getränk 9", "preis":"1,40€"}]}';



const drinksObj = JSON.parse(drinks);
const drinksEl = document.getElementById('drink1');

function handleClick1() {
  drinksEl.innerHTML = drinksObj.drink[0].artikel + " " + drinksObj.drink[0].preis;
}

drinksEl.addEventListener('click', handleClick1);


// fetch data from json
// function handleClick1() {
//   fetch('./Data.json')
// .then(response => response.json())
// .then(responseJson => {

//   for (let {drinksObj} of responseJson) {
//     const drinksOrder = document.createElement('p');
//     drinksOrder.innertext = drinksObj;
//     drinksEl.append(drinksOrder);
//   }  
// })
// }



// Getränke
// const target = document.querySelector('food');


