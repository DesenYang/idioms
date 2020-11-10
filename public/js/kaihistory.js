$(".xzhm>li:not(title)").click(function () {
    var a = $(this).toggleClass("active").find("a").attr("href").replace("#zhma", "");
    $("." + a).toggleClass("opacity");
    detailCheck()
});
$(function () {
    $.ajax({
        type: "get",
        url: "Number/findPreDrawYearAll",
        dataType: "json",
        async: false,
        success: function (c) {
            console.log(c);
            yearArr = c.result.data;
            var b = "";
            for (var a = 0; a < yearArr.length; a++) {
                // b += "<li onclick='gethistorybyyear(" + yearArr[a] + ")'>" + yearArr[a] + "</li>"
                b += "<li  >"+ yearArr[a] + "</li>"
            }
            $(".years_list").html(b);
            $(".years_list>li:first-child").addClass("active")
        }
    })
});
$(".xzsx>li:not(title)").click(function (b) {
    b.preventDefault();
    $(this).find("a").addClass("checked").parent().siblings().find("a").removeClass("checked");
    var a = $(this).find("a").attr("href").replace("#", "");
    console.log(a);
    $("." + a).css("display", "block").siblings("div").css("display", "none")
});
$(".xztj>div li").click(function () {
    $(this).toggleClass("active");
    detailCheck()
});

function gethistorybyyear(year) {
    window.location.href = "/kaihistory?year=" + year;
}

function detailCheck() {
    $("#hmfbTable>.number_box>ul>li:contains('双')").css("color", "#F8223C");
    $("#hmfbTable>.number_box>ul>li:contains('大')").css("color", "#F8223C");
    $("#hmfbTable>.number_box>ul>li:contains('红')").css("color", "#F8223C");
    $("#hmfbTable>.number_box>ul>li:contains('蓝')").css("color", "#0093E8");
    $("#hmfbTable>.number_box>ul>li:contains('绿')").css("color", "#1FC26B");
    $("li.hisNum_detail>ul>li>span:contains('红')").css("color", "#F8223C");
    $("li.hisNum_detail>ul>li>span:contains('蓝')").css("color", "#0093E8");
    $("li.hisNum_detail>ul>li>span:contains('绿')").css("color", "#1FC26B");
    var a = $(".hisNum_detail>ul>li,.temaNum.Seven");
    var d = $(".opacity");
    var g = $(".xztj>div>ul>li.active");
    if (d.length == 0 && g.length == 0) {
        $(".hisNum_detail>ul>li,.temaNum.Seven").css("opacity", "1");
        return false
    } else {
        if (d.length == 0 && g.length != 0) {
        }
    }
    for (var f = 0; f < a.length; f++) {
        if (a[f].classList.contains("opacity") == true) {
            a[f].style.opacity = "1"
        } else {
            a[f].style.opacity = "0.1"
        }
    }
    var e = $(".xztj>div li.active").find("a").text();
    var b = $(".opacity");
    if (e.length == 0 && b.length == 0) {
        $(".hisNum_detail>ul>li,.Seven").css("opacity", "1")
    } else {
        if (e.length == 0 && b.length != 0) {
            $(".opacity").css("opacity", "1")
        }
    }
    if (b.length == 0) {
        b = $(".hisNum_detail>ul>li,.Seven")
    }
    for (var f = 0; f < b.length; f++) {
        for (var h = 0; h < e.length; h++) {
            if (b[f].getAttribute("data-text") == e[h]) {
                b[f].style.opacity = "1";
                break
            } else {
                b[f].style.opacity = "0.1"
            }
        }
    }
    var g = $(".xztj>div>ul>li.active")
}

$(".xztj>div li>input").click(function () {
    $(this).parent().siblings().removeClass("active")
});
$(".years_list").on("click", "li", function () {
    $(this).addClass("active").siblings().removeClass("active");
    var b = $(this).text();
    $(".listhead>span").text(b + "年开奖记录");
    var a = "";
    var a = "";
    if ($(".xzsx>li .checked").length != 0) {
        a = $(".xzsx>li>.checked").parent().attr("lang")
    } else {
        a = 1
    }
    yearsFun(a, b)
});
$(".xzsx>li:not(title)").click(function () {
    var a = $(this).attr("lang");
    var b = $(".years_list>li.active").text();
    $(".xztj>div>ul .active").removeClass("active");
    yearsFun(a, b)
});

function yearsFun(a, b) {
    $.ajax({
        type: "get",
        //url: url.config140 + "findSmallSixHistory.do",
        url: b == undefined ?"kaihistory/getHistory" : "kaihistory/getHistory?year=" +b,

        dataType: "json",
        success: function (d) {
            $(".box-title").siblings().remove();
            console.log(d);
            var c = "";
            if (d == "") {
                return
            }
            $.each(d, function (g, f) {
                var o = []
                    , r = [];
                var l = [f.n1, f.n2, f.n3, f.n4, f.n5, f.n6, f.tema];
                r = [f.p1, f.p2, f.p3, f.p4, f.p5, f.p6, f.pt]
                for (var index = 0; index < r.length; index++) {
                    // 鼠、牛、虎、兔、龙、蛇、马、羊、猴、鸡、狗、猪
                    if (r[index] == "shu") {
                        r[index] = "鼠"
                    }
                    if (r[index] == "niu") {
                        r[index] = "牛"
                    }
                    if (r[index] == "ma") {
                        r[index] = "马"
                    }
                    if (r[index] == "yang") {
                        r[index] = "羊"
                    }
                    if (r[index] == "hou") {
                        r[index] = "猴"
                    }
                    if (r[index] == "ji") {
                        r[index] = "鸡"
                    }
                    if (r[index] == "gou") {
                        r[index] = "狗"
                    }
                    if (r[index] == "zhu") {
                        r[index] = "猪"
                    }
                    if (r[index] == "long") {
                        r[index] = "龙"
                    }
                    if (r[index] == "hu") {
                        r[index] = "虎"
                    }
                    if (r[index] == "she") {
                        r[index] = "蛇"
                    }
                    if (r[index] == "tu") {
                        r[index] = "兔"
                    }
                }
                if (f.temads == 0) {
                    f.seventhSingleDouble = "单"
                } else {
                    if (f.temads == 1) {
                        f.seventhSingleDouble = "双"
                    } else {
                        f.seventhSingleDouble = "和"
                    }
                }
                if (f.temadx == 0) {
                    f.seventhBigSmall = "大"
                } else {
                    if (f.temadx == 1) {
                        f.seventhBigSmall = "小"
                    } else {
                        f.seventhBigSmall = "和"
                    }
                }
                if (f.sumdx == 0) {
                    f.totalBigSmall = "大"
                } else {
                    if (f.sumdx == 1) {
                        f.totalBigSmall = "小"
                    } else {
                        f.totalBigSmall = "和"
                    }
                }
                if (f.sumds == 0) {
                    f.totalSingleDouble = "单"
                } else {
                    if (f.sumds == 1) {
                        f.totalSingleDouble = "双"
                    }
                }
                if ($(".aone").hasClass("active")) {
                    var m = "opacity"
                } else {
                    var m = ""
                }
                if ($(".atwo").hasClass("active")) {
                    var t = "opacity"
                } else {
                    var t = ""
                }
                if ($(".athree").hasClass("active")) {
                    var e = "opacity"
                } else {
                    var e = ""
                }
                if ($(".afour").hasClass("active")) {
                    var s = "opacity"
                } else {
                    var s = ""
                }
                if ($(".afive").hasClass("active")) {
                    var q = "opacity"
                } else {
                    var q = ""
                }
                if ($(".asix").hasClass("active")) {
                    var h = "opacity"
                } else {
                    var h = ""
                }
                if ($(".aseven").hasClass("active")) {
                    var j = "opacity"
                } else {
                    var j = ""
                }
                if (l[0] < 10) {
                    l[0] = "0" + l[0]
                }
                if (l[1] < 10) {
                    l[1] = "0" + l[1]
                }
                if (l[2] < 10) {
                    l[2] = "0" + l[2]
                }
                if (l[3] < 10) {
                    l[3] = "0" + l[3]
                }
                if (l[4] < 10) {
                    l[4] = "0" + l[4]
                }
                if (l[5] < 10) {
                    l[5] = "0" + l[5]
                }
                if (l[6] < 10) {
                    l[6] = "0" + l[6]
                }

                if (f.temads == 0) {
                    f.seventhSingleDouble = "单"
                } else {
                    if (f.temads == 1) {
                        f.seventhSingleDouble = "双"
                    } else {
                        if (f.temads == 2) {
                            f.seventhSingleDouble = "和"
                        }
                    }
                }
                if (f.temaheds == 0) {
                    f.seventhCompositeDouble = "合单"
                } else {
                    if (f.temaheds == 1) {
                        f.seventhCompositeDouble = "合双"
                    } else {
                        if (f.temaheds == 2) {
                            f.seventhCompositeDouble = "和"
                        }
                    }
                }
                if (f.temahedx == 0) {
                    f.seventhCompositeBig = "合大"
                } else {
                    if (f.temahedx == 1) {
                        f.seventhCompositeBig = "合小"
                    } else {
                        if (f.temahedx == 2) {
                            f.seventhCompositeBig = "和"
                        }
                    }
                }
                if (f.weidx == 0) {
                    f.seventhMantissaBig = "尾大"
                } else {
                    if (f.weidx == 1) {
                        f.seventhMantissaBig = "尾小"
                    } else {
                        if (f.weidx == 2) {
                            f.seventhMantissaBig = "和"
                        }
                    }
                }
                c += "<div class='hisNUm_box number_box'><ul><li class='Time_box'><span>" + f.createtime + "</span><span>" + f.qishu + "期</span></li><li class='hisNum_detail'><ul><li class='One " + m + "'data-text='" + r[0] + "'><img src='img/" + l[0] + ".gif' /> <span>" + r[0] + "</span></li><li class='Two " + t + "'data-text='" + r[1] + "'><img src='img/" + l[1] + ".gif' /> <span>" + r[1] + "</span></li><li class='Three " + e + "'data-text='" + r[2] + "'><img src='img/" + l[2] + ".gif' /> <span>" + r[2] + "</span></li><li class='Four " + s + "'data-text='" + r[3] + "'><img src='img/" + l[3] + ".gif' /> <span>" + r[3] + "</span></li><li class='Five " + q + "'data-text='" + r[4] + "'><img src='img/" + l[4] + ".gif' /> <span>" + r[4] + "</span></li><li class='Six " + h + "'data-text='" + r[5] + "'><img src='img/" + l[5] + ".gif' /> <span>" + r[5] + "</span></li></ul></li><li class='temaNum Seven " + j + "'data-text='" + r[6] + "'><img src='img/" + l[6] + ".gif' /> <span>" + r[6] + "</span></li><li class='Daxia_dansh dansh_ '>" + f.sum + "</li><li class='Daxia_dansh'>" + f.totalSingleDouble + "</li><li class='Daxia_dansh'>" + f.totalBigSmall + "</li><li class='Daxia_dansh'></li><li class='Daxia_dansh'>" + f.seventhSingleDouble + "</li><li class='Daxia_dansh'>" + f.seventhBigSmall + "</li><li class='Daxia_dansh'>" + f.seventhCompositeDouble + "</li><li class='Daxia_dansh'>" + f.seventhCompositeBig + "</li><li class='Daxia_dansh'>" + f.seventhMantissaBig + "</li></ul></div>"
            });
            $(".box-title").after(c);
            detailCheck()
        }
    })
}

$(function () {
    var a = 1;
    var b = $(".years_list>li.active").text();
    $(".listhead>span").text(b + "年开奖记录");
    yearsFun(a, b)
});
var zoo_Aimg = "images/A.jpg", zoo_Bimg = "images/B.jpg";

$("#ABimg_btn").on("click", "button", function () {
    $(this).addClass("active").siblings().removeClass();
    if ($(this).attr("data-text") == "A") {
        $("#add_ABimg img").attr("src", zoo_Aimg)
    } else {
        $("#add_ABimg img").attr("src", zoo_Bimg)
    }
});