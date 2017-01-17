/**
 * Created by Administrator on 2017/1/17.
 */
$(function () {
    var topContent="<div class='main_top'>" +
        "<div class='top_nav'>" +
        "<div class='mian_nav'>网站首页</div>" +
        "<div class='mian_nav'>关于奥秘</div>" +
        "<div class='mian_nav'>奥秘动态</div>" +
        "<div class='mian_nav'>产品中心</div>" +
        "<div class='mian_nav'>荣誉证书</div>" +
        "<div class='mian_nav'>奥秘球手</div>" +
        "<div class='mian_nav'>防伪方法</div>" +
        "</div>" +
        "</div>" +
        "<div class='head_nav'>" +
        "<!--<div class='center_image'></div>-->" +
        "<img class='center_image'>" +
        "<div class='center_image_nav'>" +
        "<div><span data-index='1' class='clicked'>&nbsp;</span ><span data-index='2'>&nbsp;</span><span data-index='3'>&nbsp;</span><span data-index='4'>&nbsp;</span></div> " +
        "</div>" +
        "</div>";
       $(".main_center").before($(topContent));
})