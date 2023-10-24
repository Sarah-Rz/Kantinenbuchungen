// SELECT FOODS BUTTON (left side)
const foodsEl = document.querySelector(".foods");
// ORDERED FOODS (right side)
const orderedFoodsEl = document.querySelector(".ordered-foods");
const sumPriceEl = document.querySelector(".sum-price");
const sumPopupEl = document.querySelector(".sumPopup");

// RENDER FOODS
function renderProducts() {
  // fetch JSON
  let http = new XMLHttpRequest();
  http.open('get', 'data.json', true);
  http.send();
  http.onload = function(){
  if(this.readyState == 4 && this.status == 200){
    let data = JSON.parse(this.responseText);
    
    // render foods
    data.forEach( (food) => {
      foodsEl.innerHTML += `
      <button type="button" class="btn food" id="d-1" onclick= "addToOrder(${food.id})">${food.name}</button>
      `;
    })
  }
}
}
renderProducts();

//ORDER ARRAY
let order = [];

// ADD TO ORDER
function addToOrder(id) {
  // fetch JSON
  let http = new XMLHttpRequest();
  http.open('get', 'data.json', true);
  http.send();
  http.onload = function(){
  if(this.readyState == 4 && this.status == 200){
    let data = JSON.parse(this.responseText);
    
    // check if selected food already exist in order
    // if some food in the order has the same id as this id in function addToOrder(id)
    if (order.some((food) => food.id === id)) {
      changeNumberOfFoods("plus", id);
    } else {
      // add selected food to order with special id
      const food = data.find((food) => food.id === id);
      order.push({
        //change the structure of food data, push an object to array: save all the old property of foods using (...food), and add a new property for "Anzahl" area
        ...food,
        numberOfFoods: 1
      }); 
    }
  }
}

updateOrder();
}

// UPDATE ORDER
function updateOrder() {
  renderOrderedFoods();
  renderSumPrice();
}

//CALCULATE AND RENDER TOTAL PRICE
function renderSumPrice() {

  let http = new XMLHttpRequest();
  http.open('get', 'data.json', true);
  http.send();
  http.onload = function(){
  if(this.readyState == 4 && this.status == 200){
    let data = JSON.parse(this.responseText);

    let sumPrice = 0;

    order.forEach((food) => {
      sumPrice += food.price * food.numberOfFoods;
   });

    //to fix numbers to show just two numbers after "." (decimal numbers), using .toFixed()
    sumPriceEl.innerHTML = `${sumPrice.toFixed(2)}€`;
    sumPopupEl.innerHTML = `Gesamtsumme: ${sumPrice.toFixed(2)}€`;
  }
}   
}

// RENDER ORDERED FOODS
function renderOrderedFoods() {
   // fetch JSON
   let http = new XMLHttpRequest();
   http.open('get', 'data.json', true);
   http.send();
   http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
     let data = JSON.parse(this.responseText);

     orderedFoodsEl.innerHTML = "";  //clear orders (order area), to prevent duplicate items
     order.forEach((food) => {
      orderedFoodsEl.innerHTML += `
        <div class="row">
          <div class="col-lg-6 data-1">
              <div>
                  <p class="data" id="data-name">${food.name}</p>
              </div>
          </div>
          <div class="col-lg-6 grid-count-price data-2">
              <div>
                  <p class="dataCount" id="countNum">${food.numberOfFoods}</p>
              </div>
              <div>
                  <p class="data" id="price">${food.price}€</p>
              </div>
          </div> 
        </div>
      `
    })
   }    
  } 
  
}

//INCREASE THE NUMBER OF SELECTED FOODS
function changeNumberOfFoods(action, id) {
  order = order.map((food) => {
    let numberOfFoods = food.numberOfFoods;

    if (food.id === id) {
    //Maximale Anzahl der verfügbaren Getränke sind 9
      if (action === "plus" && numberOfFoods < food.amount) {
        numberOfFoods++;
      }
    }
    return {
      ...food,
      numberOfFoods
    };
  });

  updateOrder()
}


// DELETE ALL DATAS
del = () => {
  orderedFoodsEl.innerText = " ",
  sumPriceEl.innerText = "0€"
}

// POPUP MESSAGE
let popup = document.getElementById("popup")

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}


// ACTIVE NAVBAR
const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName ==="ice.html") {
  document.querySelector(".eis").classList.add("activeNav");
}
if(pageName ==="food.html") {
  document.querySelector(".essen").classList.add("activeNav");
}
if(pageName ==="breakfast.html") {
  document.querySelector(".bf").classList.add("activeNav");
}
if(pageName ==="drinks.html") {
  document.querySelector(".drink").classList.add("activeNav");
}











