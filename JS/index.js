/**
 * Created by Administrator on 2017/1/11.
 */

$(function () {
    var index=0;
    var image=$(".center_content_image");
    var $spans=$(".center_content_image_nav > span");
    var b=new Array("Image/img1.jpg","Image/zhuoqiu1.jpg","Image/zhuoqiu2.jpg","Image/zhuoqiu3.jpg","Image/zhuoqiu4.jpg")
    var lunxun=setInterval(function () {
        var preIndex= index==0?4:index-1;
         $(".center_content_image_nav > span:eq("+index+")").addClass("clicked");
         $(".center_content_image_nav > span:eq("+preIndex+")").removeClass("clicked");
        image.attr("src",b[index]);
/*        curSpan.toggleClass("clicked");
        $spans.get(preIndex).toggleClass("clicked");*/
        index++;
        if(index==5){index=0}
    },2000);
    $.each($spans,function (i,item) {
        item.on("mouseup",function () {
            clearInterval(lunxun)
            allSpanDC();
            $this.addClass("clicked");
        })
        item.on("mouseout",function () {
             lunxun();
        })
    })
    var allSpanDC=function () {
        $.each($spans,function (i,item) {
            item.removeClass("clicked");
        });
    }
})