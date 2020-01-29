var sectionSelected = false; //This is needed so that when a segment is clicked, the segments dont go back to original position when the segment is hovered off.
var logoSegmentTopMargin;
var logoSegmentLeftMargin;
//Logo segment hover script

$('.logoSegment').hover(function(){ //When a logo segment is hovered on
    //Mouse on
    SlideSegments( $(this) ); //Slide all segments except "this"

    $(".logoSegment:not(#" +$(this).attr('id')+ ")").each(function(){ //Fade out all segments apart from this one
        $(this).css({
            'opacity' : '0.4',
            'transition' : 'cubic-bezier(0,0,0,1) all 4s',
            //'transform' : 'scale(.1)',
        });
    })

    $(this).css({ //Scale up
        'transform' : 'scale(0.12)',
        'z-index' : '10',
    });

    //Fade out elements when a segment is hovered on (e.g. social media icons)
    $('.segmentHoverFade').css({
        'transition' : '1.5s',
        'opacity' : '0.3',
    });


    //Fade in appropriate background text
    $("#"+$(this).attr('id')+"BackgroundText").css({  //#TurquoiseLogoSegmentBackgroundText
        'transition' : '1.5s',
        'opacity' : '0.2',
    }); 


}, function(){
    //Mouse out
    if(sectionSelected == false){ //sectionSelected = false, when a segment is clicked. It equals true when a section is exited and so the user returns to home page.
        //Reset elements which fade out when a segment is hovered on (e.g. social media icons)
        $('.segmentHoverFade').css({
            'transition' : '0.5s',
            'opacity' : '1',
        });

        //Reset segments (position etc)
        $(".logoSegment").each(function(){ 
            $(this).css({
                'transform' : 'translate(0px, 0px) scale(.1)',
                'transition' : 'cubic-bezier(0,0,0,1) all 0.5s',
                'opacity' : '1',
                'z-index' : 1,

            });
        })

        //Fade out appropriate background text
        $("#"+$(this).attr('id')+"BackgroundText").css({  //#TurquoiseLogoSegmentBackgroundText
            'transition' : '0.5s',
            'opacity' : '0',
        });
    }
});

function SlideSegments(hoveredSegment){
    $('#TurquoiseLogoSegment').css('transform','translate(10.0px, -5.0px) scale(.1)');
    $('#OrangeLogoSegment').css('transform','translate(-25.0px, 10.5px) scale(.1)');
    $('#LightBlueLogoSegment').css('transform','translate(10.0px, -20.5px) scale(.1)');
    $('#PurpleLogoSegment').css('transform','translate(-6.0px, 3.0px) scale(.1)');
    $('#DarkBlueLogoSegment').css('transform','translate(10.0px, 12.5px) scale(.1)');
    $('#YellowLogoSegment').css('transform','translate(10.0px, 14.0px) scale(.1)');
    $('#PinkLogoSegment').css('transform','translate(-10.0px, 5.0px) scale(.1)');
    $('#BlueLogoSegment').css('transform','translate(-1.0px, -15.0px) scale(.1)');
    $('#GreenLogoSegment').css('transform','translate(21.0px, -5.7px) scale(.1)');
    $('#PeachLogoSegment').css('transform','translate(-5.0px, 5.0px) scale(.1)');

    hoveredSegment.css('transform','translate(0px, 0px)');
}
