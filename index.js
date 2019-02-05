$( document ).ready(function(){
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const DAYNAME = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

  let prevHourDeg = 0;
  let prevMinDeg = 0;
  let prevSecDeg = 0;
  //all elements we are using
  const $hourHand = $('.clock-wrapper .hour-hand');
  const $minHand = $('.clock-wrapper .min-hand');
  const $secHand = $('.clock-wrapper .sec-hand');
  const $hourText = $('.time-wrapper #hour');
  const $minText = $('.time-wrapper #min');
  const $monthText = $('.time-wrapper #month');
  const $dayText = $('.time-wrapper #day');
  const $dayNameText = $('.time-wrapper #day-name');

  // initial set clock
  setClock();

  setInterval(setClock, 1000);

  // set the whole thing in motion (sets clock and date, main function);
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

  // sets the time part. the clock and the time text
  function setTime(hour, min, sec){
    if(sec == 0 && prevSecDeg != sec) smoothTransitionReset($secHand, sec, prevSecDeg*6);
    else $secHand.css('transform', `rotate(${sec*6}deg)`);
    if(min == 0 && prevMinDeg != min) smoothTransitionReset($minHand, min, prevMinDeg*6);
    else $minHand.css('transform', `rotate(${min*6}deg)`);
    if(hour == 0 && prevHourDeg != hour) smoothTransitionReset($hourHand, hour, prevHourDeg);
    else $hourHand.css('transform', `rotate(${hour*30}deg)`);
    $hourText.text(hour);
    $minText.text(min < 10 ? `0${min}` : min);
    prevHourDev = hour;
    prevMinDeg = min;
    prevSecDeg = sec;
  }

  // sets the date text
  function setDate(month, day, dayName){
    $monthText.text(month);
    $dayText.text(` ${day}`);
    $dayNameText.text(dayName);
  }

  // makes the transition smooth when going from a degree to 0 degrees
  function smoothTransitionReset(el, nextTime, prevTime){
    let inverDeg =  -1 * (360 - prevTime);
    el.css('transition', 'transform 0');
    el.css('transform', `rotate(${inverDeg}deg)`)
    // gotta delay the transition so it won't be that instant
    setTimeout(()=>{
      el.css({'transition': 'transform 200ms'});
      el.css('transform', `rotate(0deg)`);
    }, 1)
  }
});
