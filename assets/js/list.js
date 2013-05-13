/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-2-20
 * Time: 下午10:40
 * To change this template use File | Settings | File Templates.
 */
if (typeof Aotulife !== 'object') var Aotulife = {};
Aotulife.list = new (function () {
    function getData() {
        $("#divMesgLoading").show();
        $.get(
            "temp.html",
            function (data) {
                var ul = document.createElement("div");
                $(ul).html(data);
                $(ul).find(".small").each(function () {
                    $(this).appendTo($(".list-show")).hide().fadeIn(1000);
                    $(this).imagesLoaded(function () {
                        $(".list-show").masonry('appended', $(this), true);
                        $("#divMesgLoading").hide();
                    });
                });
            });
    }

    this.onReady = function () {
        var speed = 1000;
        $(".list-show").masonry({
            singleMode:true,
            columnWidth:320,
            itemSelector:'.small',
            animate:true,
            animationOptions:{
                duration:speed,
                queue:false
            }
        });
        //scroll
        var timeout = false;
        // 防止多次发送ajax请求
        var reset = 0;
        $(window).scroll(function () {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(function () {
                var init_scrollTop = parseInt($(".list-show").offset().top) + parseInt($(".list-show").height()) - parseInt($(window).height());
                if ($(window).scrollTop() > init_scrollTop && reset == 0) {
                    getData();
                }
            }, 100);
        });

    }
});
$(function () {
    Aotulife.list.onReady();
})