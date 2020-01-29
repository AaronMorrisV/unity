const mq = window.matchMedia( "(min-width: 480px)" );
logoClickBox = $('#logoClickBox');


if (mq.matches) {
  // window width is at least 480px
    $('#mobileNavigationText').css({'display' : 'none',});
    logoClickBox.css({'display' : 'none',});

} else {
  // window width is less than 480px

    $('#websiteBorder').css({'opacity' : '0',});
    logoClickBox.css({'display' : 'inline',});

    $('.mobileNavItem').each(function(){
        $(this).css({'opacity' : '0',});
    });
    $('#mobileNavCarouselText').css({'opacity' : '0',});
}


logoClickBox.click(function(){ 

    logoClickBox.css({'display' : 'none',});

    $(".logoSegment").each(function(){
        $(this).css({
            'transition' : 'cubic-bezier(.14,.9,.42,.99) all 1.5s',
            'transition-delay' : '1.5s',
        });
    });  

    $('#mobileNavCarouselText').css({'opacity' : '1', 'transition' : '1s'});

    setTimeout(function(){
        $('#mobileNavCarouselText').css({'opacity' : '0', 'transition' : '.5s',});


        $('.mobileNavItem').each(function(){
            $(this).css({'opacity' : '1', 'transition' : '2s', 'transition-delay' : '2s'});
        });


        setTimeout(function(){
            //LogoSegment Explosion
            $('#TurquoiseLogoSegment').css({'top' : 'calc(-7% + 50px)', 'left' : 'calc(0% + 120px)',});
            $('#OrangeLogoSegment').css({'top' : 'calc(10% + 50px)', 'left' : 'calc(0% + 80px)',});
            $('#LightBlueLogoSegment').css({'top' : 'calc(45% - 30px)', 'left' : 'calc(0% + 100px)',});
            $('#PurpleLogoSegment').css({'top' : 'calc(90% - 70px)', 'left' : 'calc(0% - 20px)',});
            $('#DarkBlueLogoSegment').css({'top' : 'calc(120% + 90px)', 'left' : 'calc(0% + -60px)',});

            $('#YellowLogoSegment').css({'top' : 'calc(-30% + 20px)', 'left' : 'calc(100% + 120px)',});
            $('#PinkLogoSegment').css({'top' : 'calc(23% + 80px)', 'left' : 'calc(100% - 30px)',});
            $('#BlueLogoSegment').css({'top' : 'calc(50% + 200px)', 'left' : 'calc(100% - 80px)',});
            $('#GreenLogoSegment').css({'top' : 'calc(80% + 120px)', 'left' : 'calc(100% - 100px)',});
            $('#PeachLogoSegment').css({'top' : 'calc(110% + 60px)', 'left' : 'calc(100% - 150px)',});
        }, 1500); //1500

        $('#websiteBorder').css({'opacity' : '1', 'transition' : '1.5s', 'transition-delay' : '3s'});
    }, 2000); //2000

});