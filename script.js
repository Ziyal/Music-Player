$(document).ready(function() {
    
    var audio = document.getElementById("audio");

    audio.ontimeupdate = function() {
        currTime()
    }

    function currTime() {

        // Converts currentTime into m:ss format
        if(audio.currentTime > 59) {
            var minutes = Math.floor(audio.currentTime/60);
            var seconds = audio.currentTime - minutes * 60;

        } if(audio.currentTime < 10) {
            var minutes = 0;
            var seconds = "0" + Math.floor(audio.currentTime);
        } else {
            var minutes = 0;
            var seconds = Math.round(audio.currentTime);
        }

        console.log(minutes + ":" + seconds);

        $(".curr-time").empty();
        $(".curr-time").append(minutes + ":" + seconds);
    }
    
    
    function play() {
        console.log("Play hit");
        audio.play();

        $("#p-btn").empty();
        $("#p-btn").append("<span class='pause'>&#9208;</span>");
        $("#p-btn").removeClass("play-btn");
        $("#p-btn").addClass("pause-btn");
        
    }


    function pause() {
        console.log("Pause hit");
        audio.pause();

        $("#p-btn").empty();
        $("#p-btn").append("<span class='play'>&#9654;</span>");
        $("#p-btn").removeClass("pause-btn");
        $("#p-btn").addClass("play-btn");
    }

    $(document).on("click", ".play-btn", play);
    $(document).on("click", ".pause-btn", pause);

    currTime();

});