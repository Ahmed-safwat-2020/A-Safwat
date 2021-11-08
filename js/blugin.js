$(document).ready(function(){
    $(".content-info .btn , .about .btn").on({
        mouseenter:function(){
            $(this).find("i").animate({
                "padding":"0 0px 0 15px",
                "opacity":1
            },250)
        },
        mouseleave:function(){
            $(this).find("i").animate({
                "padding":"0 0px 0 0px",
                "opacity":0
            },250)
        }
    });
    $(".nav-btn").on({
        click:function(){
           if ( $(this).hasClass("opened") ){
            $(this).removeClass("opened");
            $(this).find(".two").fadeIn(10);
            $(this).find(".one").css({
                "transform":"rotate(0deg)",
                "transition":"all .3s ease-in-out",
                "margin":"6px 0",
                "position":"relative",
                "top":"0px"
            });
            $(this).find(".three").css({
                "transform":"rotate(0deg)",
                "transition":"all .3s ease-in-out",
                "margin":"6px 0",
                "position":"relative",
                "top":"0px"
            });
            $(".side").animate({
                "left":"-100vw"
            },500)
           }else{
            $(this).addClass("opened");
            $(this).find(".two").fadeOut(10);
            $(this).find(".one").css({
                "transform":"rotate(63deg)",
                "transition":"all .3s ease-in-out",
                "margin":0,
                "position":"relative",
                "top":"13px"
            });
            $(this).find(".three").css({
                "transform":"rotate(-63deg)",
                "transition":"all .3s ease-in-out",
                "margin":0,
                "position":"relative",
                "top":"11px"
            });
            $(".side").animate({
                "left":0
            },500)
        }
           }
    })
})
$(window).on({
    load: function() {
        $(".preloader").delay(500).fadeOut(500, function() {
                $("body").css("overflow", "auto")
        })
    }
})