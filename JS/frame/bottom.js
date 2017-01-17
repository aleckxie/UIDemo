/**
 * Created by Administrator on 2017/1/17.
 */
$(function () {
    var bottomContent="<div class='main_bottom'>" +
        "<div class='bottom_up'>" +
            "<div>" +
                "<span>奥秘台球有限公司(官网)</span>" +
                "<span>www.omincn.com</span>" +
                "<span>地址：浙江省台州市临海汇溪镇下曼村</span>" +
                "<span>浙ICP备12039146号-2</span>" +
            " </div>" +
            "<div>" +
                "<span>电话：400 9900 147</span>" +
                "<span>传真：0576-85962911</span>" +
                "<span>E-mail:kdbilliards@163.com</span>" +
                "<span>QQ:1351819639</span>" +
                "<span>联系我们</span>" +
            "</div>" +
        "</div>" +
        "<div class='bottom_down'>" +
            "<span>Copyright©2015</span>" +
            "<span>临海市康迪木制品有限公司</span>" +
            "<span>All Rights Reserved.</span>" +
            "<span>浙公网安备</span>" +
            "<span>33108202000324号</span>" +
        "</div>" +
        "</div>" +
        "<div class='aojun'>奥俊</div>";
    $(".main_center").after($(bottomContent));
})