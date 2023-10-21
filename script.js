// data from right-up the App
let handleEl = document.getElementById("data_save");


// Getränk 1
function handleClick1() {
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
          <table>
            <tr>
              <td>${data[0].artikel}</td>
              <td>${data[0].preis}</td>
            </tr>
          </table>
        </div>
      `;
    

    document.querySelector(".data").innerHTML += output;
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
          <table>
            <tr>
              <td>${data[1].artikel}</td>
              <td>${data[1].preis}</td>
            </tr>
          </table>
        </div>
      `;
    document.querySelector(".data").innerHTML += output;
  }
}
}

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
          <table>
            <tr>
              <td>${data[2].artikel}</td>
              <td>${data[2].preis}</td>
            </tr>
          </table>
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
          <table>
            <tr>
              <td>${data[3].artikel}</td>
              <td>${data[3].preis}</td>
            </tr>
          </table>
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
          <table>
            <tr>
              <td>${data[4].artikel}</td>
              <td>${data[4].preis}</td>
            </tr>
          </table>
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
          <table>
            <tr>
              <td>${data[5].artikel}</td>
              <td>${data[5].preis}</td>
            </tr>
          </table>
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
          <table>
            <tr>
              <td>${data[6].artikel}</td>
              <td>${data[6].preis}</td>
            </tr>
          </table>
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
          <table>
            <tr>
              <td>${data[7].artikel}</td>
              <td>${data[7].preis}</td>
            </tr>
          </table>
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
          <table>
            <tr>
              <td>${data[8].artikel}</td>
              <td>${data[8].preis}</td>
            </tr>
          </table>
        </div>
      `;
    document.querySelector(".data").innerHTML += output;
  }
}
}

// delete all datas
del = () => {
  handleEl.innerHTML = " ";
}










