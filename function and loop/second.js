var alarm =730;
var snoze=9;
var time=7000;
if(time>=alarm)
{
	console.log("the alarm is going off");
	var nextAlarm=time+snoze;
	console.log("the sooze will go off after "+ nextAlarm);
}
else
{
	console.log("alaram ringing");
}