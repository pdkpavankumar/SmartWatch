var timevar;
$(document).ready(function(){
	move(0);
});

function move(me) {
	var screen = Number($("#screen").val())+Number(me);
	if(screen<=-1) {
		screen=6;
	}
	if(screen>=7){
		screen=0;
	}
	$("#screen").val(screen);
	if(screen==0) {
		//Time
		var date=new Date();
		$("#mainText").html(date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear());
		$("#subText").html(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
		timevar=setInterval(function(){
					$("#subText").html(new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds())
				},1000);
		$("#subText").css("left","27%");
		$("#img").prop("src","./images/time.png");
	}
	else if(screen == 1) {
		clearInterval(timevar);
		$("#mainText").html("Distance Walked");
		$("#subText").html("200");
		$("#subText").css("left","40%");
		$("#img").prop("src","./images/walk.png");

	}
	else if(screen == 2) {
		$("#mainText").html("Heart Rate");
		$("#subText").html("60bpm");
		$("#subText").css("left","30%");
		$("#img").prop("src","./images/heart.png");
	}
	else if(screen == 3) {
		$("#mainText").html("New Messages");
		$("#subText").html("7");
		$("#subText").css("left","45%");
		$("#img").prop("src","./images/msg.png");
	}
	else if(screen == 4) {
		$("#mainText").html("Missed Calls");
		$("#subText").html("3");
		$("#subText").css("left","45%");
		$("#img").prop("src","./images/missed.png");
	}
	else if(screen == 5) {
		$("#mainText").html("Alarm");
		$("#subText").html("3:30pm");
		$("#subText").css("left","30%");
		$("#img").prop("src","./images/alarm.png");
	}
	else if(screen == 6) {
		$("#mainText").html("Movie at night 7 pm");
		$("#subText").html("Reminder");
		$("#subText").css("left","25%");
		$("#img").prop("src","./images/movie.png");
		clearInterval(timevar);
	}
}

function home() {
	window.location.reload();
}