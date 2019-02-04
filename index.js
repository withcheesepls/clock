const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const DAYNAME = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

// initial set clock
setClock();

setInterval(()=>{
  setClock();
}, 1000);

function setClock(){
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  setTime(hour, min, sec);
  let month = MONTHS[date.getMonth()];
  let day = date.getDate();
  let dayName = DAYNAME[date.getDay()];
  setDate(month, day, dayName);
}

function setTime(hour, min, sec){
  $('.clock-wrapper .hour-hand').css('transform', `rotate(${hour*30}deg)`);
  $('.clock-wrapper .min-hand').css('transform', `rotate(${min*6}deg)`);
  $('.clock-wrapper .sec-hand').css('transform', `rotate(${sec*6}deg)`);
  $('.time-wrapper #hour').text(hour);
  $('.time-wrapper #min').text(min);
}

function setDate(month, day, dayName){
  $('.time-wrapper #month').text(month);
  $('.time-wrapper #day').text(` ${day}`); //adds space and day
  $('.time-wrapper #day-name').text(dayName);
}
