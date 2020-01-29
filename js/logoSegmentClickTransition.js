var turquoiseSegmentVisitedAlready = false;
var purpleSegmentVisitedAlready = false;

/*var pageData = {
    "aboutPage":{"numberOfPageVisits": 0,}, //"aboutPage":{page:"about", "numberOfPageVisits": 0, "xys": 0},
    "teamPage":{page:"team", "numberOfPageVisits": 0},
    //{page:"team", "numberOfPageVisits": 0},
}*/


//Click transition
$('.logoSegment').click(function(){ //When a logo segment is clicked
    
    clickedSegment = $(this); //For passing the clicked segment's id to the pageLoad function
    sectionSelected = true;
    logoSegmentTopMargin = $(this).css('margin-top'); //saving top margin for resetting in the future
    logoSegmentLeftMargin = $(this).css('margin-left'); //saving left margin for resetting in the future
    logoSegmentLeft = $(this).css('left'); //saving left value for resetting in the future

    //Wait for transition to take place before you are able to return.
    setTimeout(function(){
        document.getElementById("borderExplanationText").outerHTML = '<h1 id = "borderExplanationText" onclick = "exitPage()">CLICK <span>HERE</span> TO GO BACK</h1>';
        document.getElementById("borderUnityWrapper").outerHTML = '<div id = "borderUnityWrapper" onclick = "exitPage()"><img src = "images/BlockLogos/BlackBlockLogo.png"><div class = "verticalSeparator"></div><h2>HOME</h2></div>';
    }, 2000); 
    
    //Fade out logo segments
    $(".logoSegment:not(#" +$(this).attr('id')+ "), #landerCarousel").each(function(){
        $(this).css({
            'transition' : '1s',
            'opacity' : '0',
            'pointer-events' : 'none',
        });
    });  

    //To avoid being able to click multiple segments at once
    clickedSegment.css({
        'pointer-events' : 'none',
    });

    //Fade out background texts
    $(".LogoSegmentBackgroundText").each(function(){
        $(this).css('opacity','0');
    });


    //Animate logo segment enlargement and slide left
    setTimeout(function(){ //Wait for other segments to fade out
        clickedSegment.css({
            'transform' : 'scale(.8125)',
            'margin-top' : '-625px',
            'transition' : 'all 0.4s',
        });
    }, 500);
    setTimeout(function(){ //Wait for segment to scale up
        clickedSegment.css({
            'transition' : 'all .4s',
            'left' : '-45px',
        });
    }, 1000);

    //Fade out text navigation for mobile
    $('.mobileNavItem').each(function(){
        $(this).css({'opacity' : '0', 'transition' : '1s', 'transition-delay' : '0s'});
    });
    
    
    //Load next page
    setTimeout(function(){
        $("#logoBackgroundTexts").css('display',"none"); //Instead of making lander invisible, so that the logo segment will stay on visible
        $("#landerCarousel").css('display',"none");
        
        /*pageName = clickedSegment.attr("page"); //e.g. "about"

        for (var key in pageData) { //pageData Struct

            if(key == pageName+"Page"){
                var object = pageData[key];
                for (var property in object) {
                    var objectProperty = object[property]
                    //alert(property + " = " + object[property]);
                    
                    if(property = "numberOfVisits"){
                        
                        //objectProperty = 1;
                        alert(objectProperty);
                    }
                }
            }
        }*/
        

        
        if(turquoiseSegmentVisitedAlready == false){ //Lock screen for turquoise segment. Variable set to true in LearnMore() function, for about page
            $("body").css('overflow-y',"none");
        }
        else{                                       //Do not lock screen for all other segments
            $("body").css('overflow-y',"auto"); 
        }
        
        if(purpleSegmentVisitedAlready == false){ //Lock screen for turquoise segment. Variable set to true in LearnMore() function, for about page
            $("body").css('overflow-y',"none");
        }
        else{                                       //Do not lock screen for all other segments
            $("body").css('overflow-y',"auto"); 
        }
        
        pageLoad(clickedSegment.attr('id'));

    }, 2000); //1900
});