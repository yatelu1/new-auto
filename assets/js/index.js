/**
 * Created with JetBrains WebStorm.
 * User: huangjunyan873
 * Date: 2/6/13
 * Time: 1:54 PM
 * To change this template use File | Settings | File Templates.
 */
if (typeof Aotulife !== 'object') var Aotulife = {};
Aotulife.head = new (function () {
    function ahover(el) {
        var elwith = $(el).width();
        var offset = $(el).position().left;
        $('.back').stop().animate({width:elwith, left:offset}, 400)
    }

    function showIn(el) {
        var elwith = $(el).width();
        var offset = $(el).position().left;
        $('.back').css({'width':elwith, 'left':offset}).fadeIn(500);
    }

    this.onReady = function () {
        var page = $("#current-page").val();
        switch (page) {
            case "index":
                $(".nav li").eq(0).addClass("current");
                break;
            case "list":
                $(".nav li").eq(1).addClass("current");

        }
        showIn('.current');
        $('.nav li a').hover(function () {
            ahover(this);
        }, function () {
            ahover('.current');
        });

        $('#dropDown').hover(function () {
            $(this).addClass('hover').find('.dropDownLayout').slideDown(100);
        }, function () {
            $(this).removeClass('hover').find('.dropDownLayout').slideUp(100);
        });

        $('.search-input').bind({
            blur:function () {
                $(this).parents('.searchBar').css('background-position', '0 0')
            },
            focus:function () {
                $(this).parents('.searchBar').css('background-position', '0 -27px')
            }
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() > 500) {
                $(".gotos").stop(true, true).show();
            } else {
                $(".gotos").stop(true, true).hide();
            }
        });
        $(".goto-top").click(function () {
            $('html,body').animate({ scrollTop:0 }, 500);
        });

    }
});
$(function () {
    Aotulife.head.onReady();
})
