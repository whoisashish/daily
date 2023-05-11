var totalSeconds = 0;
var currActivity = ""
var actCount = 6
var timerVar = setInterval(countTimer, 1000);

checkAct = () => {
    if (actCount == 0){
        document.getElementById("firstimg").style.display = 'flex'
        document.getElementById("secondimg").style.display = 'none'
    } else if(actCount == 6) {
        document.getElementById("firstimg").style.display = 'none'
        document.getElementById("secondimg").style.display = 'flex'
    } else {
        document.getElementById("firstimg").style.display = 'none'
        document.getElementById("secondimg").style.display = 'none'
    }
}

function countTimer(data) {
    if(data == "new"){
        ++totalSeconds;
        totalSeconds = 0;
        var hour = Math.floor(totalSeconds /3600);
        var minute = Math.floor((totalSeconds - hour*3600)/60);
        var seconds = totalSeconds - (hour*3600 + minute*60);
        if(hour < 10)
            hour = "0"+hour;
        if(minute < 10)
            minute = "0"+minute;
        if(seconds < 10)
            seconds = "0"+seconds;
        document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
    } else {
        ++totalSeconds;
        var hour = Math.floor(totalSeconds /3600);
        var minute = Math.floor((totalSeconds - hour*3600)/60);
        var seconds = totalSeconds - (hour*3600 + minute*60);
        if(hour < 10)
            hour = "0"+hour;
        if(minute < 10)
            minute = "0"+minute;
        if(seconds < 10)
            seconds = "0"+seconds;
        document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
    }
}

start = (activity) => {
    currActivity = activity
    document.getElementById("donetimer").style.display = 'block'
    document.getElementById('id01').style.display='flex';
    document.getElementById('startimg').src=`${activity}.png`;
    document.getElementById("doing").innerHTML = `${activity.toUpperCase()}`;
    document.getElementById("timer").style.display = "block";
    document.getElementById("timer").innerHTML = "00:00:00";
    countTimer("new");
    checkAct();
}

stop = () => {
    // clearInterval(timerVar);
}

done = (activity) => {
    document.getElementById("timer").style.display = 'none';
    document.getElementById("donetimer").style.display = 'none';
    stop();
    if (activity) {
        document.getElementById('startimg').src=`${activity}.png`;
        document.getElementById("doing").innerHTML = `Finished ${activity}`
        document.getElementById(activity).style.display = 'none';
        document.getElementById(`${activity}done`).style.display = 'flex';
    } else {
        document.getElementById('startimg').src=`${currActivity}.png`;
        document.getElementById("doing").innerHTML = `Finished ${currActivity}`
        document.getElementById(currActivity).style.display = 'none';
        document.getElementById(`${currActivity}done`).style.display = 'flex';
    }
    document.getElementById('id01').style.display='flex';
    setTimeout(
        function() {
            document.getElementById('id01').style.display='none';
        }, 3000);
    actCount = actCount - 1;
    checkAct();
}

redo = (activity) => {
    document.getElementById(activity).style.display = 'flex';
    document.getElementById(`${activity}done`).style.display = 'none';
    actCount = actCount + 1;
    checkAct();
}