let userName = prompt('Kullanici Adinizi Giriniz!');
function showTime() {

let myName = document.querySelector("#myName")
myName.innerHTML = `${userName}`

let tarih = new Date();

var gunler = 
["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

let myClock = document.querySelector("#myClock")
myClock.innerHTML =`
${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()}
${gunler[tarih.getDay()]}
` ;
}
setInterval(showTime,1000)