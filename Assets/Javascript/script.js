const cardHours = document.getElementById('hours');
const cardMinutes = document.getElementById('minutes');
const cardSeconds = document.getElementById('seconds');

const cardSemana = document.getElementById('semana');

const cardSegundos = document.getElementById('dia');
const cardMinutos = document.getElementById('mes');
const cardHoras = document.getElementById('ano');

setInterval(function(){
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();

    if(hour < 10) hour = '0' + hour;
    if(minute < 10) minute = '0' + minute;
    if(second < 10) second = '0' + second;

    cardHours.textContent = hour;
    cardMinutes.textContent = minute;
    cardSeconds.textContent = second;

    const daysWeek = ['Domingo', 'Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sábado'];

    let week = currentDate.getDay();
    cardSemana.textContent = daysWeek[week];

    let years = currentDate.getFullYear();
    let months = currentDate.getMonth() + 1;
    let days = currentDate.getDate();

    if(days < 10) days = '0' + days;
    if(months < 10) months = '0' + months;
    if(years < 10) years = '0' + years;

    cardSegundos.textContent = days;
    cardMinutos.textContent = months;
    cardHoras.textContent = years;
});