// data from right-up the App
let handleEl = document.getElementById("data_save");

const btnChoose = document.querySelectorAll(".food");

let count = 0;
let countNum = document.getElementById('countNum');

let price = document.getElementById('price');


// Getränk 1
function handleClick1() {
 
  count = count + 1;
  countNum.innerHTML = count;  

  document.querySelector("#countNum").innerHTML = count;


// fetch data
let http = new XMLHttpRequest();


http.open('get', 'data.json', true);


http.send();


http.onload = function(){
  
  if(this.readyState == 4 && this.status == 200){

    let data = JSON.parse(this.responseText);

    let output = "";

    output += `
        <div class="data">
          ${data[0].artikel}
        </div>
      `
    document.querySelector(".data").innerHTML += output;


    
  //   let sum = 0;    
  //   let price = data[0].preis;
  //   sum = sum + parseFloat(price);
  //   countsNum = count.push(sum)
  //   ;
  
  // console.log(typeof countsNum, countsNum);

}
  
}
}




// Getränk 2
function handleClick2() {
let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
  if(this.readyState == 4 && this.status == 200){
    let data = JSON.parse(this.responseText);
    let output = "";
      output += `
        <div class="data">
          ${data[1].artikel}
          ${data[1].preis}
        </div>
      `;
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
  count = 0;
}










