//Exit
function exitPage(){
    
    if(sectionSelected){
        sectionSelected = false;

        //Remove ability to return to home
        document.getElementById("borderExplanationText").outerHTML = '<h1 id = "borderExplanationText" onclick = "">CLICK A <span>COLOUR</span> TO EXPLORE';
        document.getElementById("borderUnityWrapper").outerHTML = '<div id = "borderUnityWrapper" onclick = ""><img src = "images/BlockLogos/BlackBlockLogo.png"><div class = "verticalSeparator"></div><h2>UNITY</h2></div>';

        $("body").css('overflow-y',"hidden"); //To avoid scrollbar looking strange
        
        $("html, body").animate({ scrollTop: 0 }, '300'); //Scroll to top of page
        
        //Fade out section
        setTimeout(function(){ //Wait for scroll to top of page
            $(".section").each(function(){ 
                FadeSectionOut(this.id);
            });      
        }, 250);
        

        
        //Reset segments (position etc)
        $(".logoSegment").each(function(){ 
            $(this).css({
                'transform' : 'translate(0px, 0px) scale(.1)',
                'transition' : 'cubic-bezier(0,0,0,1) all 0.5s',
                'opacity' : '1',
                'z-index' : 1,
                'pointer-events' : 'auto',

            });
        })

        //Reset position of clicked segment
        clickedSegment.css({
            'left' : logoSegmentLeft,
            'margin-top' : logoSegmentTopMargin, //variable references other script
            'margin-left' : logoSegmentLeftMargin,
        });

        //Reset social icons and email
        $('.segmentHoverFade').css({
            'transform' : 'translate(0, 0)',
            'opacity' : '1',
        });

        //Reset carousel
        $('#landerCarousel').css('transform','translate(-50%, -50%)');

        //Reset main elements
        $("#logoBackgroundTexts").css('display',"inline"); //Instead of making lander invisible, so that the logo segment will stay on visible
        
        

        const mq = window.matchMedia( "(min-width: 480px)" );

        if (mq.matches) {
            // window width is at least 480px
            
            $("#landerCarousel").css('display',"inline");
        } else {
            // window width is less than 480px
            
            //Fade in text navigation for mobile
            $('.mobileNavItem').each(function(){
                $(this).css({'opacity' : '1', 'transition' : '1s', 'transition-delay' : '1s'});
            });
        }
    }
}

function FadeSectionOut(sectionName){
    $("#"+sectionName).css({
        'opacity' : 0,
        'transition' : 'all 1s',
    });

    setTimeout(function(){
        //Fade section out
        $("#"+sectionName).css({
            'display' : 'none',
        });       
    }, 1000);
}

/*function FadeSectionToOpacity(sectionName, targetOpacity){
    $("#"+sectionName).css({
        'opacity' : targetOpacity,
        'transition' : 'all 1s',
    });

    setTimeout(function(){
        alert("hey");
        //Fade section out
        $("#"+sectionName).css({
            if(targetOpacity == 0){
                'display' : 'none',
            }
            else{
                'display' : 'inline',
            }
        });       
    }, 1000);
}*/