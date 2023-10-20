
let http = new XMLHttpRequest();


http.open('get', 'data.json', true);


http.send();


http.onload = function(){
  
  if(this.readyState == 4 && this.status == 200){

    let data = JSON.parse(this.responseText);

    let output = "";


    for(let item of data){
      output += `
        <div class="data">
          <p>${item.artikel}</p>
          <p>${item.preis}</p>
        </div>
      `;
    } 

    document.querySelector(".data").innerHTML = output;
  }
}





















// const drinksObj = JSON.parse(drinks);
// const drinksEl = document.getElementById('drink1');

// function handleClick1() {
//   drinksEl.innerHTML = drinksObj.drink[0].artikel + " " + drinksObj.drink[0].preis;
// }

// drinksEl.addEventListener('click', handleClick1);


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


