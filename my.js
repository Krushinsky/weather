const api = {
    //ссылка
    endpoint: 'https://api.openweathermap.org/data/2.5/',
    key: '6b27633b5bdb600d913f47887d2833c6'
    //API Key
}
const input = document.querySelector('#input');
input.addEventListener("keypress", enter);

function enter(e){
if (e.keyCode ===13 ){
    getInfo(input.value);
}
}
async function getInfo(data){
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const resReceived = await res.json();
    displayResult(resReceived);
}

function displayResult(resReceived) {
let city = document.querySelector('#city');
city.textContent = `${resReceived.name}, ${resReceived.sys.country}`;

getOurDate();

let temperature = document.querySelector('#temperature');
temperature.innerHTML = `${Math.round(resReceived.main.temp)} <span>°</span>`;

let feelsLike = document.querySelector('#feelsLike');
feelsLike.innerHTML = `<span>Feels like:</span> ${Math.round(resReceived.main.feels_like)}<span>°</span> `;

let conditions = document.querySelector('#conditions');
conditions.textContent = `${resReceived.weather[0].main}`;

let variation = document.querySelector('#variation');
variation.innerHTML = 'Min: ' + `${Math.round(resReceived.main.temp_min)}<span>°</span>` + ' Max: ' + `${Math.round(resReceived.main.temp_max)}<span>°</span>`;

function getOurDate(){
    
    const myDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[myDate.getDay()];

    let todayDate = myDate.getDate();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = months[myDate.getMonth()];
    
    let year = myDate.getFullYear()

    let resultDate = document.querySelector('#date').innerHTML = day + ' ' + todayDate + ' ' + month + ' ' + year;
};

}