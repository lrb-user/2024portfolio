$(document).ready(function(){
    //클릭시 해당 섹션으로 이동
    $('.sideBar .gnb').click(function(){
        console.log("확이니ㅣㅣ")
        event.preventDefault();
        let href=$(this).attr('href');
        let o_top = $(href).offset().top;
        console.log("확확인")
        $('html,body').animate({
            scrollTop:o_top
        },1000)
    })
    // skill
    let skill_o_top = $('.skillContent').offset().top;
    let intro_o_top = $('#menu2').offset().top;
    console.log(skill_o_top)
    $(window).scroll(function(){
        // console.log("확인")
        let s_top = $(window).scrollTop();
        if(s_top >= skill_o_top - 300){
            $('.gauge_1').animate({
                left:0+"%"
            },1000)
            $('.gauge_2').animate({
                left:0+"%"
            },1000)
            $('.gauge_3').animate({
                left:-30+"%" 
            },1000)
            $('.gauge_4').animate({
                left:-30+"%"
            },1000)
            $('.gauge_5').animate({
                left:-40+"%"
            },1000)
            $('.gauge_6').animate({
                left:-40+"%"
            },1000)
            $('.gauge_7').animate({
                left:0+"%"
            },1000)
            $('.gauge_8').animate({
                left:-30+"%"
            },1000)
        }

        if(s_top >= intro_o_top - 600){
            setTimeout(function(){
                $('.aboutMe').css({
                    transform:"translateX(0)"
                })
            },100)
            setTimeout(function(){
                $('.profile').css({
                    transform:"translateX(0)"
                })
            },300)
        }
    })
    // Main
    let main_span = $('.homeContentTitle span')
    let main_index = 0;
    let main_chk = true;
    let main_count = $('.homeContentTitle span').length;

    setInterval(function(){
        if(main_chk){
            main_span.eq(main_index).addClass('active');
            main_index++;

            if(main_index > main_count){
                setTimeout(function(){
                    main_span.removeClass('active')
                    main_index = 0;  
                },100)
            }
        }
    },200);
})