const dadoHours = document.getElementById('hours');
const dadoMinutes = document.getElementById('minutes');
const dadoSeconds = document.getElementById('seconds');

setInterval(function(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if(hour < 10){
        hour = '0' + hour;
    }
    if(minute < 10){
        minute = '0' + minute;
    }
    if(second < 10){
        second = '0' + second;
    }

    dadoHours.textContent = hour;
    dadoMinutes.textContent = minute;
    dadoSeconds.textContent = second;
});