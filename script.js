// data from right-up the App
let handleEl = document.getElementById("data_save");

const btnChoose = document.querySelectorAll(".food");

let countBtOne = 0;
let countBtTwo = 0;
let countNum = document.getElementById('countNum');

let price = document.getElementById('price');


// Getränk 1
function handleClick1() {

  countBtOne += 1;
  countNum.innerHTML = countBtOne;  





  // let outputCount = "";

  // outputCount += `
  //   <div class="dataCount">
  //     ${countBtOne}
  //   </div>
  // `
  // document.querySelector(".dataCount").innerHTML = countBtOne;


// fetch data
let http = new XMLHttpRequest();


http.open('get', 'data.json', true);


http.send();


http.onload = function(){
// if the button clicked for the first Time (count = 1), write the name of the food on Screen and for another Time, 
// Button is clicked Just increase the count of selected food
  if(countBtOne === 1) {
    if(this.readyState == 4 && this.status == 200){

      let data = JSON.parse(this.responseText);
  
      let output = "";
  
      output += `
          <div class="data">
            ${data[0].artikel}
          </div>
        `
      document.querySelector(".data").innerHTML += output;
     
  }
  } else {
    let output = "";
      document.querySelector(".data").innerHTML += output;

  } 
  
}
}

//   let sum = 0;    
  //   let price = data[0].preis;
  //   sum = sum + parseFloat(price);
  //   countsNum = count.push(sum)
  //   ;
  
  // console.log(typeof countsNum, countsNum);




// Getränk 2
function handleClick2() {
  
  
  countBtTwo += 1;
  countNum.innerHTML = countBtTwo;  




  // let outputCount = "";

  // outputCount += `
  //   <div class="dataCount">
  //     ${countBtTwo}
  //   </div>
  // `
  // document.querySelector(".dataCount").innerHTML = countBtTwo;

let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
  if(countBtTwo === 1) {
    if(this.readyState == 4 && this.status == 200){
      let data = JSON.parse(this.responseText);
      let output = "";
      output += `
          <div class="data">
            ${data[1].artikel}
          </div>
        `
      document.querySelector(".data").innerHTML += output;
     
  }
  } else {
    let output = "";
      document.querySelector(".data").innerHTML += output;

  } 
}
};

// Getränk 3
function handleClick3() {
let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
  if(this.readyState == 4 && this.status == 200){
    let data = JSON.parse(this.responseText);
    let output = "";
      output += `
       <div class="data">
          ${data[2].artikel}
          ${data[2].preis}
        </div>
      `;
    document.querySelector(".data").innerHTML += output;
  }
}
}

// Getränk 4
function handleClick4() {
let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
  if(this.readyState == 4 && this.status == 200){
    let data = JSON.parse(this.responseText);
    let output = "";
      output += `
        <div class="data">
          ${data[3].artikel}
          ${data[3].preis}
        </div>
      `;
    document.querySelector(".data").innerHTML += output;
  }
}
}

// Getränk 5
function handleClick5() {
let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
  if(this.readyState == 4 && this.status == 200){
    let data = JSON.parse(this.responseText);
    let output = "";
      output += `
        <div class="data">
          ${data[4].artikel}
          ${data[4].preis}
        </div>
      `;
    document.querySelector(".data").innerHTML += output;
  }
}
}

// Getränk 6
function handleClick6() {
let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
  if(this.readyState == 4 && this.status == 200){
    let data = JSON.parse(this.responseText);
    let output = "";
      output += `
        <div class="data">
          ${data[5].artikel}
          ${data[5].preis}
        </div>
      `;
    document.querySelector(".data").innerHTML += output;
  }
}
}

// Getränk 7
function handleClick7() {
let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
  if(this.readyState == 4 && this.status == 200){
    let data = JSON.parse(this.responseText);
    let output = "";
      output += `
        <div class="data">
          ${data[6].artikel}
          ${data[6].preis}
        </div>
      `;
    document.querySelector(".data").innerHTML += output;
  }
}
}

// Getränk 8
function handleClick8() {
let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
  if(this.readyState == 4 && this.status == 200){
    let data = JSON.parse(this.responseText);
    let output = "";
      output += `
        <div class="data">
          ${data[7].artikel}
          ${data[7].preis}
        </div>
      `;
    document.querySelector(".data").innerHTML += output;
  }
}
}

// Getränk 9
function handleClick9() {
let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
  if(this.readyState == 4 && this.status == 200){
    let data = JSON.parse(this.responseText);
    let output = "";
      output += `
        <div class="data">
          ${data[8].artikel}
          ${data[8].preis}
        </div>
      `;
    document.querySelector(".data").innerHTML += output;
  }
}
}

// delete all datas
del = () => {
  handleEl.innerText = " "
}

// popup message
let popup = document.getElementById("popup")

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}












