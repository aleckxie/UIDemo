/**
 * Created by Administrator on 2017/1/11.
 */

$(function () {
    function getRootPath_web() {
        //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
        var curWwwPath = window.document.location.href;
        //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        //获取主机地址，如： http://localhost:8083
        var localhostPaht = curWwwPath.substring(0, pos);
        //获取带"/"的项目名，如：/uimcardprj
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
        return (localhostPaht + projectName);
    }
    var rooPath=getRootPath_web()+"/";
    //内容轮询
    var image = $(".center_content_image");
    var $spans = $(".center_content_image_nav > span");
    var b = new Array("Image/img1.jpg", "Image/zhuoqiu1.jpg", "Image/zhuoqiu2.jpg", "Image/zhuoqiu3.jpg", "Image/zhuoqiu4.jpg");
    var bSize= b.length;
    var lunxunId;
    var index=0;
    var lunxun = function (locationStr,sizeP) {
        var _size=sizeP;
        lunxunId=setInterval(function () {
            var preIndex = index == 0 ? _size-1 : index - 1;
            $("."+locationStr+" > span:eq(" + index + ")").addClass("clicked");
            $("."+locationStr+" > span:eq(" + preIndex + ")").removeClass("clicked");
            image.attr("src", rooPath+b[index]);
            index++;
            if (index == _size) {
                index = 0
            }
        }, 2000);
        return lunxunId
    };
    lunxunId=lunxun("center_content_image_nav",bSize);
    $.each($spans, function (i, item) {
        var $item = $(item);
        $item.on("mouseenter", function () {
            var $_this = $(this);
            clearInterval(lunxunId);
            allSpanDC();
            //改变图片的src和样式
            var _index=parseInt($item.text())-1;
            image.attr("src", b[_index]);
            $_this.addClass("clicked");
        })
        $item.on("mouseleave", function () {
            // allSpanDC();
            var _index=parseInt($item.text());
            if(_index==bSize){_index=0};
            index= _index;
            lunxun("center_content_image_nav",bSize);
        })
    });
    var allSpanDC = function () {
        $.each($spans, function (i, item) {
            var $_item = $(item);
            $_item.removeClass("clicked");
        });
    }

    var centerIndex=0;
    //抬头图片轮询
    var centerImage = $(".center_image");
    var centerSpans = $(".center_image_nav > div > span");
    var headArr = new Array("Image/img1.jpg", "Image/zhuoqiu1.jpg", "Image/zhuoqiu2.jpg", "Image/zhuoqiu3.jpg");
    var headArrSize=headArr.length;
    var centerlunxunId;
    var centerlunxun = function (locationStr,sizeP) {
        var _size=sizeP;
        centerlunxunId=setInterval(function () {
            var precenterIndex = centerIndex == 0 ? _size-1 : centerIndex - 1;
            $("."+locationStr+" > div > span:eq(" + centerIndex + ")").addClass("clicked");
            $("."+locationStr+" > div > span:eq(" + precenterIndex + ")").removeClass("clicked");
            centerImage.attr("src", rooPath+headArr[centerIndex]);
            centerIndex++;
            if (centerIndex == _size) {
                centerIndex = 0
            }
        }, 2000);
        return centerlunxunId
    };
    centerlunxunId=centerlunxun("center_image_nav",headArrSize);
    $.each(centerSpans, function (i, item) {
        var $item = $(item);
        $item.on("mouseenter", function () {
            var $_this = $(this);
            clearInterval(centerlunxunId);
            allSpanDC1();
            //改变图片的src和样式
            var _centerIndex=parseInt($item[0].dataset.index)-1;
            centerImage.attr("src", rooPath+b[_centerIndex]);
            $_this.addClass("clicked");
        })
        $item.on("mouseleave", function () {
            // allSpanDC();
            var _centerIndex=parseInt($item[0].dataset.index);
            if(_centerIndex==headArrSize){_centerIndex=0};
            centerIndex= _centerIndex;
            centerlunxun("center_image_nav",headArrSize);
        })
    });
    var allSpanDC1 = function () {
        $.each(centerSpans, function (i, item) {
            var $_item = $(item);
            $_item.removeClass("clicked");
        });
    }

    var lists=$(".center_nav_list");
    $.each(lists,function (i,item) {
        var $item = $(item);
        $item.on("click",function () {
            $item.next(".center_nav_list_content").toggle();
        })
/*        $item.on("mouseenter", function () {
            var $_this = $(this);
            var $_toContent=$("<div class='center_nav_list_content'>"+"内容是:"+$_this.text()+"</div>");
            $_this.after($_toContent);
            //添加div
        })
        $item.on("mouseleave", function () {
            //去掉div
            var $_this = $(this);
            $_this.next(".center_nav_list_content").remove();
        })*/
    })

/*    setUpImageLunxun(b,image,$spans,"center_content_image_nav");
    setUpImageLunxun(headArr,centerImage,centerSpans,"center_image_nav");*/
});

/**
 *     var setUpImageLunxun=function (arrayP,imageP,spansP,loacationP) {
        var index = 0;
        var _lunxunId;
        var _array=arrayP;
        var _arraySize=_array.length;
        var _image=imageP;
        var _spans=spansP;
        var _locationStr=loacationP;
        var lunxun = function (locationStr,sizeP) {
            var _size=sizeP;
            _lunxunId=setInterval(function () {
                var preIndex = index == 0 ? _size-1 : index - 1;
                $("."+locationStr+" > span:eq(" + index + ")").addClass("clicked");
                $("."+locationStr+" > span:eq(" + preIndex + ")").removeClass("clicked");
                _image.attr("src", _array[index]);
                index++;
                if (index == _size) {
                    index = 0
                }
            }, 2000);
            return _lunxunId
        };
        var b=lunxun(_locationStr,_arraySize);
        $.each(_spans, function (i, item) {
            var $item = $(item);
            $item.on("mouseenter", function () {
                var $_this = $(this);
                clearInterval(_lunxunId);
                allSpanDC();
                //改变图片的src和样式
                var _index=parseInt($item.text())-1;
                image.attr("src", _array[_index]);
                $_this.addClass("clicked");
            })
            $item.on("mouseleave", function () {
                // allSpanDC();
                var _index=parseInt($item.getAttribute("index"));
                if(_index==bSize){_index=0};
                index= _index;
                lunxun(_locationStr,_arraySize);
            })
        });
        var allSpanDC = function () {
            $.each(_spans, function (i, item) {
                var $_item = $(item);
                $_item.removeClass("clicked");
            });
        }
    }
 */
