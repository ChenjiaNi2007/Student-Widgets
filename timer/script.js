const form = document.querySelector("#form");

const YearInput = document.getElementById('year').value;
const MonthInput = document.getElementById('month').value;
const DayInput = document.getElementById('day').value;
const HourInput = document.getElementById('hour').value;
const MinuteInput = document.getElementById('minute').value;
const SecondInput = document.getElementById('second').value;

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();
    var countDownDate = new Date();
    var add = new Date(YearInput, MonthInput, DayInput, HourInput, MinuteInput, SecondInput, 0);
    countDownDate = countDownDate + add;
    console.log(countDownDate)
    /*
    countDownDate.setSeconds = countDownDate.getSeconds + SecondInput;
    countDownDate.setMinutes = countDownDate.getMinutes + MinuteInput.value;
    countDownDate.setHours = countDownDate.getHours + HourInput.value;
    countDownDate.setDay = countDownDate.getDay + DayInput.value;
    countDownDate.setWeek = countDownDate.getWeek + WeekInput.value;
    countDownDate.setMonths = countDownDate.getMonths + MonthInput.value;
    countDownDate.setYears = countDownDate.getYears + YearInput.value;
   
    countDownDate.setYear(countDownDate.getFullYear() + YearInput.value);
    countDownDate.setMonth(countDownDate.getMonth() + MonthInput.value);
    countDownDate.setDay(countDownDate.getDay() + DayInput.value + WeekInput.value*7);
    countDownDate.setHour(countDownDate.getHour() + HourInput.value);
    countDownDate.setMinute(countDownDate.getMinute() + MinuteInput.value);
    countDownDate.setSecond(countDownDate.getSecond() + SecondInput.value);
	console.log(countDownDate);
	*/

    var myfunc = setInterval(function() {

		var now = new Date();
		var timeleft = countDownDate - now;
		        
		// Calculating the days, hours, minutes and seconds left
		var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
		var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
		        
		 // Result is output to the specific element
		document.getElementById("days").innerHTML = days + "d ";
		document.getElementById("hours").innerHTML = hours + "h "; 
		document.getElementById("mins").innerHTML = minutes + "m ";
		document.getElementById("secs").innerHTML = seconds + "s ";
		        
		 // Display the message when countdown is over
		if (timeleft < 0) {
		    clearInterval(myfunc);
		    document.getElementById("weeks").innterHTML = ""
		    document.getElementById("days").innerHTML = ""
		    document.getElementById("hours").innerHTML = "" 
		    document.getElementById("mins").innerHTML = ""
		    document.getElementById("secs").innerHTML = ""
		    document.getElementById("end").innerHTML = "TIME UP!!";
		}
    }, 1000);
}