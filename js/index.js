$(function() {
    var $card = $('.card');
    //关闭定时器
    var lastCard = $(".card-list .card").length - 1;
    $(".card-stack").on("mouseenter", function() {
        clearInterval(timer);
        timer = null;
    });
    //开启定时器
    $(".card-stack").on("mouseleave", function() {
        timer = setInterval(function() {
            $('.next').click();
        }, 2000)
    })

    //左右按钮功能
    $('.next').click(function() {
        var prependList = function() {
            if ($('.card').hasClass('activeNow')) {
                var $slicedCard = $('.card').slice(lastCard).removeClass('transformThis activeNow');
                $('.focus ul').prepend($slicedCard);
            }
        }
        $('.focus li').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
        setTimeout(function() { prependList(); }, 150);
    });

    $('.prev').click(function() {
        var appendToList = function() {
            if ($('.card').hasClass('activeNow')) {
                var $slicedCard = $('.card').slice(0, 1).addClass('transformPrev');
                $('.card-list').append($slicedCard);
            }
        }
        $('.focus li').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');
        setTimeout(function() { appendToList(); }, 150);
    });
    let timer = setInterval(function() {
        $('.next').click();
    }, 2000);

    $("img.thumb").each(function(i, element) {
        $(element).attr("src", "./images/img" + (i + 1) + ".png");
    });
    $(".white-panel").each(function(i, element) {
        let arr = ["#CCCC00", "#CCFFFF", "#99CCCC", "#996699", "#FFCCCC", "#99CC00", "#FF9900", "red", "#993366", "#CCCCFF", "#CC0033", "#CCCC99", "#FFFF00", "#CCCC00", "#CCFFFF", "#99CCCC", "#996699", "#FFCCCC", "#99CC00", "#FF9900", "#993366", "#CCCCFF", "#CC0033", "#CCCC99", "#FFFF00", "white", "#CCCCFF", "#CC0033", "#CCCC99", "#FFFF00", "#CCFFFF", "#99CCCC", "#993366", "#CCCCFF"];
        $(element).css("background", arr[i]);
    });
    //瀑布流
    jQuery(document).ready(function($) {
        $("#my-gallery-container").mpmansory({
            childrenClass: 'white-panel', // default is a div
            columnClasses: '', //add classes to items
            distributeBy: { height: true },
            breakpoints: {
                lg: 3,
                md: 4,
                sm: 6,
                xs: 12
            }
        })
    });
    //点击轮播图实现跳转功能
    function leap() {
        if ($(this).hasClass("meishi")) {
            $("html,body").stop().animate({ scrollTop: $(".school_life").offset().top }, 1000);
        } else if ($(this).hasClass("meijing")) {
            $("html,body").stop().animate({ scrollTop: $(".view").offset().top }, 1000);
        } else if ($(this).hasClass("xuekejianjie")) {
            $("html,body").stop().animate({ scrollTop: $(".subject").offset().top }, 1000);
        } else if ($(this).hasClass("lishi")) {
            $("html,body").stop().animate({ scrollTop: $(".history").offset().top }, 1000);
        } else {
            $("html,body").stop().animate({ scrollTop: $(".introduction").offset().top }, 1000);
        }
    };
    $(".card").on("click", leap);
    //回到顶部出现条件
    $(document).on("scroll", function() {
        if ($(document).scrollTop() > $(".introduction").offset().top - 1) {
            $(".xhj").css("display", "block");
            $(".fixedtool").css("display", "block");
        } else {
            $(".fixedtool").css("display", "none");
        }
    });
    //回到顶部功能
    $(".xhj").on({
        mouseenter: function() {
            $(this).css("backgroundPosition", "-150px")
        },
        mouseleave: function() {
            $(this).css("backgroundPosition", "0")
        },
        click: function() {
            $(this).addClass("fly");
            $("html,body").stop().animate({ scrollTop: 0 }, 1000);
            $(this).stop().animate({ bottom: "10rem" }, 2000, function() {
                $(".xhj").css({ "bottom": ".1rem", display: "none" });
                $(".xhj").removeClass("fly");
            });
        }
    });
    $(".fixedtool a").on("click", leap);
})