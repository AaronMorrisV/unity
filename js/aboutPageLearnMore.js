//Learn more on about page

function LearnMore(sectionName, sectionColour){   
    setTimeout(function(){ //Wait for other segments to fade out
        $("body").css('overflow-y',"auto"); //To allow scrolling
    }, 1700);

    var sectionTitle = $('#' + sectionName + 'Title'); //e.g. #aboutTitle
    var learnMoreSection =  $('#' + sectionName + 'LearnMoreSection'); //e.g. #aboutLearnMoreSection
    var mainSection = $('#' + sectionName + 'MainSection'); //e.g. #aboutMainSection
    var logoSegment = $('#' + sectionColour + 'LogoSegment'); //e.g. #TurquoiseLogoSegment
    //learnMoreSection.css.marginLeft = 0; 
    //alert(logoSegment.attr("id"));

    if(window.innerWidth > 800){
        sectionTitle.css({
            'transform': 'translateX(-70%)',
            'transition': 'cubic-bezier(.67,.02,.73,.57) all 1.35s',
        });
    }


    learnMoreSection.css({
        'transform': 'translateX(0%)',
    });
    mainSection.css({
        'transform': 'translateX(100%)',
    });

    logoSegment.css({
        'transform': 'translateX(-100%)',
        'transition': 'cubic-bezier(.67,.02,.73,.57) all 1.35s',
    });
    //alert(learnMoreSection.attr("id"));

    if(clickedSegment.attr("id") == "TurquoiseLogoSegment"){
        turquoiseSegmentVisitedAlready = true;
    }
    if(clickedSegment.attr("id") == "PurpleLogoSegment"){
        purpleSegmentVisitedAlready = true;
    }
}