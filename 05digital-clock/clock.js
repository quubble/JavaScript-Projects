//The Clock Function



function updateClock(){


// Get the current date
    let currentTime = new Date();

    // Extract hour, minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let currentMiliSeconds = currentTime.getMilliseconds();

    // Pad 0 if minute or second is less than 10 (single digit)
    
    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds; 
    currentMiliSeconds = (currentMiliSeconds < 10 ? "0": "") + currentMiliSeconds;
    
    // Choose AM/PM as per the time of the day
    let timeOfDay = (currentHour >= 12 ) ? "PM" : "AM";

    // Convert railway clock to AM/PM clock
    currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour==0) ?  12 : currentHour;
    
    // Pad 0 if hour is less than 10 (single digit)
    currentHour = (currentHour >= 10 ? "": "0") + currentHour;

    // Prepare the time string from hours, minutes and seconds
    let currentTimeStr = currentHour + ":" + currentMinutes  
                        + ":" + currentSeconds + ":" + currentMiliSeconds + " " + timeOfDay;

    // Insert the time string inside the DOM
    document.getElementById("clock").innerHTML = currentTimeStr;

}




/* add label/title above the clock

// Other tags.
let breakTag = document.createElement("br");

let timerLabelTag = document.createElement("p");
let timerLabelText = document.createTextNode("Timer Party");
timerLabelTag.appendChild(timerLabelText); */


// This is better code
 

 /*function currentTime(){
    let content = document.getElementById('content');
    let date = new Date();
let time = date.toLocaleTimeString();
 content.innerHTML = time;

   }
    setInterval(currentTime , 1000); */

    //codewithharry.com

