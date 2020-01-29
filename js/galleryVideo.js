var myVideo = document.getElementById("videoSectionVideo"); 
function playPause()
{ 
if (myVideo.paused){ 

    $('#mainVideoOverlay').css('opacity', 0);

    $('#pauseButtonWrapper').css('opacity', 1);

    setTimeout(function(){
        $('#videoDarkOverlay').css('opacity', 0.3);
        $('#videoThumbnail').css('opacity', 0);
        myVideo.play();
    }, 1000);
    //$('#mainVideoOverlay').animate({'margin-top': '500px'}, 1000);
} 

else{
    myVideo.pause(); 
    $('#mainVideoOverlay').css('opacity', 1);
    $('#videoDarkOverlay').css('opacity', 1);
    $('#pauseButtonWrapper').css('opacity', 0);
}

};