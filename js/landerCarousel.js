var i = 0;  // the index of the current item to show
var unityDuration = 1000;
var adjectiveDuration = defaultDuration = 400;



var carouselLooper = function() {
    setTimeout(carouselLooper, adjectiveDuration);
    
    //Get array
    var children=$('#carouselAdjective').children();

    //Hide all
    children.each(function(i) { 
        //$(this).css("display","none");
        $(this).fadeOut(1000);
    });
    
    setTimeout(function(){ //E.g. #OrangeLogoSegment
        //Show only current one
        children[i].style.display = "inline";
    }, 100); //1900
    
    
    i++; //Increment
    
    if (i == children.length){
        i = 0;   // reset to first element if you've reached the end
        adjectiveDuration = unityDuration;
    } 
    else{
        adjectiveDuration = defaultDuration;
    }
}

setTimeout(carouselLooper, adjectiveDuration);