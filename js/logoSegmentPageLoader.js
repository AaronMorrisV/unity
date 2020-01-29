//By default make all sections invisible
$(".section").each(function(){ 
    $(this).css({
        'display' : 'none',
        'opacity' : '0',
    });
})

//Load selected page.
function pageLoad(segment){ 
    
    if(segment == "TurquoiseLogoSegment"){
        FadeSectionIn("about");
    }

    else if (segment == "PinkLogoSegment"){
        //Make section visible
        FadeSectionIn("gallery");
    }

    else if (segment == "LightBlueLogoSegment"){
        //Make section visible
        //$("#car").css('display',"inherit");
    }
    else if (segment == "PurpleLogoSegment"){
        //Make section visible
        FadeSectionIn("blog");
    }
    else if (segment == "GreenLogoSegment"){
        FadeSectionIn("contact");
    }
    else if (segment == "YellowLogoSegment"){
        FadeSectionIn("sponsorship");
    }
    else if (segment == "PeachLogoSegment"){
        FadeSectionIn("identity");
    }
}

function FadeSectionIn(sectionName){
    $("#"+sectionName).css({
        'display' : 'inline',
    });
    setTimeout(function(){
        //Fade section in
        $("#"+sectionName).css({
            'opacity' : '1',
            'transition' : 'all 1s',
        });
    }, 50);
}