var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
if (hour<12)
{
    document.getElementById("ampm").innerText="AM"; 
}
else if (hour>12)
{
    document.getElementById("ampm").innerText="PM"; 
}
document.getElementById("hour").innerText=hour;
document.getElementById("minutes").innerText=min;
document.getElementById("seconds").innerText=sec;
document.getElementById("date").innerText=date;

