/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-2-20
 * Time: 下午10:40
 * To change this template use File | Settings | File Templates.
 */
if (typeof Aotulife !== 'object') var Aotulife = {};
Aotulife.upload = new (function () {

    this.onReady = function () {
        $("input.title").watermark("视频标题：");
        $("textarea.info").watermark("视频介绍：");
        $("input.tag").watermark("视频标签：");
        $("input.link").watermark("输入宝贝淘宝链接：");
        $("input.price").watermark("填写宝贝价格：");


        var textButton = "<input type='text' name='textfield' id='textfield' class='input file' /> &nbsp;<input type='submit' name='button' id='button' value='浏览本地文件' class='btns' />"
        $(textButton).insertBefore("#fileField");
        $("#fileField").change(function () {
            $("#textfield").val($("#fileField").val());
        })


    }
});

$(function () {
    Aotulife.upload.onReady();
});