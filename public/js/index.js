function showtab(inde) {
    $("#t0").css("display", "none")
    $("#t1").css("display", "none")
    $("#t2").css("display", "none")
    $("#t3").css("display", "none")
    $("#t4").css("display", "none")
    $("#t5").css("display", "none")
    $("#t6").css("display", "none")
    $("#t7").css("display", "none")
    $("#t8").css("display", "none")

    if (inde == "0") {
        $("#t0").css("display", "")
    }
    if (inde == "1") {
        $("#t1").css("display", "")
    }
    if (inde == "2") {
        $("#t2").css("display", "")
    }
    if (inde == "3") {
        $("#t3").css("display", "")
    }
    if (inde == "4") {
        $("#t4").css("display", "")
    }
    if (inde == "5") {
        $("#t5").css("display", "")
    }
    if (inde == "6") {
        $("#t6").css("display", "")
    }
    if (inde == "7") {
        $("#t7").css("display", "")
    }
    if (inde == "8") {
        $("#t8").css("display", "")
    }

}

$(function () {
    var b = function () {
        $("#fixbox_").show();
        intervalFun();
        moveBall()
    };

    $("#fixbox_").on("click", ".closespan", function () {
        $("#fixbox_").hide();
        clearInterval(timers1);
        clearInterval(timers2)
    });
    var a = setTimeout(function () {

        if ($(".xy").length != 0) {
            clearTimeout(a)
        }
    }, 100)
});
var indexFunObj = {};
var nextIssue = 0;
//
// $(function () {
//     $("#datebox").calendar({
//         zIndex: 999,
//     });
//     attrTable();
//
//     var a, b;
//     var c = 20;
//     $.ajax({
//         type: "get",
//         //url: url.config140 + "findSpecialNumberTrend.do",
//         url: "Number/findSpecialNumberTrend?rannum=" + Math.ceil(Math.random() * 1000000 + 1000),
//         data: {
//             periods: c
//         },
//         dataType: "json",
//         success: function (l) {
//             console.log(l);
//             if (l.result.data == "") {
//                 return false
//             }
//             b = l.result.data.issues;
//             a = l.result.data.numbers;
//             var E = c1.getContext("2d");
//             E.font = "14px Arial Regular";
//             E.textBaseline = "alphabetic";
//             E.shadowBlur = "";
//             E.beginPath();
//             E.strokeStyle = "#B4B4B4";
//             E.lineWidth = 1;
//             E.lineJoin = "round";
//             E.moveTo(810, 325.5);
//             E.lineTo(50.5, 325.5);
//             E.lineTo(50.5, 25.5);
//             E.stroke();
//             var C = 75.5
//                 , A = 800
//                 , v = 50
//                 , D = 50;
//             for (var n = 0; n < 5; n++) {
//                 E.beginPath();
//                 E.strokeStyle = "#DEDEDE";
//                 E.lineWidth = 1;
//                 p(E, v, C, A, C, 4);
//                 E.stroke();
//                 E.font = "16px Arial Regular";
//                 E.fillStyle = "#999999";
//                 E.fillText(D, v - 25, C);
//                 D -= 10;
//                 C += 50;
//                 if (D == 0) {
//                     E.fillText(D, v - 25, C)
//                 }
//             }
//
//             function p(F, h, z, d, y, f) {
//                 f = f === undefined ? 5 : f;
//                 var k = d - h;
//                 var j = y - z;
//                 var x = Math.floor(Math.sqrt(k * k + j * j) / f);
//                 for (var t = 0; t < x; ++t) {
//                     F[t % 2 === 0 ? "moveTo" : "lineTo"](h + (k / x) * t, z + (j / x) * t)
//                 }
//                 F.stroke()
//             }
//
//             var B = 70
//                 , w = 325
//                 , s = 315;
//             E.font = "14px Arial Regular";
//             for (var u = 0; u < b.length; u++) {
//                 E.beginPath();
//                 E.moveTo(B, w);
//                 E.lineTo(B, s);
//                 E.strokeStyle = "#ccc";
//                 E.lineWidth = 0.5;
//                 E.stroke();
//                 E.fillText(b[u], B - 10, w + 20);
//                 B += 38
//             }
//             var r = [];
//             var o = 70;
//             for (var q = 0; q < a.length; q++) {
//                 var e = 0;
//                 E.beginPath();
//                 if (a[q] > 50) {
//                     e = 25 + (50 - (50 * (((a[q] - 50) * 10) / 100)))
//                 } else {
//                     if (a[q] > 40) {
//                         e = 75 + (50 - (50 * (((a[q] - 40) * 10) / 100)))
//                     } else {
//                         if (a[q] > 30) {
//                             e = 125 + (50 - (50 * (((a[q] - 30) * 10) / 100)))
//                         } else {
//                             if (a[q] > 20) {
//                                 e = 175 + (50 - (50 * (((a[q] - 20) * 10) / 100)))
//                             } else {
//                                 if (a[q] > 10) {
//                                     e = 225 + (50 - (50 * (((a[q] - 10) * 10) / 100)))
//                                 } else {
//                                     e = 275 + (50 - (50 * ((a[q] * 10) / 100)))
//                                 }
//                             }
//                         }
//                     }
//                 }
//                 r.push(e);
//                 E.arc(o, e, 4, 0, 2 * Math.PI);
//                 E.fillStyle = "#FC223B";
//                 E.fill();
//                 E.fillStyle = "#";
//                 E.fillText(a[q], o - 8, e - 13);
//                 o += 38
//             }
//             var g = 70;
//             E.beginPath();
//             for (var q = 0; q < r.length; q++) {
//                 E.lineTo(g, r[q]);
//                 E.strokeStyle = "#F8213B";
//                 E.lineWidth = 0.8;
//                 g += 38
//             }
//             E.stroke()
//         }
//     })
// });

function formatDate(b) {
    var e = b.getFullYear();
    var a = b.getMonth() + 1;
    a = a < 10 ? "0" + a : a;
    var c = b.getDate();
    c = c < 10 ? ("0" + c) : c;
    return e + "-" + a + "-" + c
}

function attrTable() {
    $(".propTable").on("click", "ul>li", function (b) {
        b.preventDefault();
        $(this).addClass("checked").siblings().removeClass("checked");
        var a = $(this).find("a").attr("href");
        console.log(a);
        $("#" + a).css("display", "table").siblings("table").css("display", "none")
    })
}

var thisText = "", errorCount = 0, typeSix;
sessionArr = {},
    sessionArr.numberCode = [],
    sessionArr.zooCode = [],
    sessionArr.color = [];
indexFunObj.ifAnimateFun = function (b, c, d) {
    //开奖信用
    return;
    if (b != 8) {
        $(".zongfen").hide();
        $("#zongfen").parent().hide();
        $(".addpic").hide()
    }
    if (b == 8) {
        $(".predrawCode").html(c.result.data.preDrawIssue);
        indexFunObj.elseFun(c, d);
        $(".kjspr .data").show();
        $(".addpic").show();
        if ($("#jnumber>li:last-child").text() != "") {
            $("#kjType").text("开奖结果").css("color", "#646464")
        }
        $(".zongfen").show();
        $("#zongfen").parent().show()
    } else {
        if (b == 6) {
            $("#kjType").text("请不要走开，今天晚上21：30开奖...").css("cssText", "color:#F8223C !important");
            typeSix = setTimeout(function () {
                clearTimeout(typeSix);
                TishIssuc()
            }, 600000)//60000
        } else {
            if (b == 0) {
                $("#kjType").text("准备报码，请稍后...").css("cssText", "color:#F8223C !important");
                typeSix = setTimeout(function () {
                    clearTimeout(typeSix);
                    TishIssuc()
                }, 600000)//10000
            } else {
                if (b == 2) {
                    $("#kjType").text("节目广告中...").css("cssText", "color:#F8223C !important");
                    typeSix = setTimeout(function () {
                        clearTimeout(typeSix);
                        TishIssuc()
                    }, 600000)//10000
                } else {
                    if (b == 3) {
                        $("#kjType").text("主持人解说中...").css("cssText", "color:#F8223C !important");
                        typeSix = setTimeout(function () {
                            clearTimeout(typeSix);
                            TishIssuc()
                        }, 600000)//5000
                    } else {
                        if (b == 1 || b == 4) {
                            if (b == 4) {
                                $("#kjType").text("开奖结果").css("color", "#646464");
                                $(".addpic").show()
                            } else {
                                $("#kjType").text("正在搅珠中...").css("cssText", "color:#F8223C !important")
                            }
                            indexFunObj.elseFun(c, d);
                            var a = setTimeout(function () {
                                TishIssuc();
                                clearTimeout(a)
                            }, 600000)//1000
                        }
                    }
                }
            }
        }
    }
    $(".predrawCode").text(c.result.data.preDrawIssue)
}
;
indexFunObj.elseFun = function (c, f) {
    console.log(c);
    $("#zongfen").text(c.result.data.sumTotal);
    var b = $(".sh_xzlist>li>span:first-child");
    var e = $(".sh_xzlist>li>span:last-child");
    var d = $("#jnumber>li:not(.addpic)");
    b.text("");
    e.text("");
    d.text("");
    d.removeClass();
    for (var a = 0; a < f.ThisCode.length; a++) {
        if (f.ThisCode[a] == undefined || proto.fiveLineArr[c.result.data.fiveElements[a]] == undefined) {
            return false
        }
        if (c.result.data.fiveElements[a] == undefined) {
            return false
        }
        b[a].innerHTML = (proto.Zoo[c.result.data.chineseZodiac[a]]);
        e[a].innerHTML = (proto.fiveLineArr[c.result.data.fiveElements[a]]);
        d[a].className = proto.colorEng[c.result.data.color[a]];
        d[a].innerHTML = f.ThisCode[a] > 9 ? f.ThisCode[a] : "0" + f.ThisCode[a]
    }
    $(".kjspr>.data").html((c.result.data.preDrawTime).slice(0, 10))
}
;
var nexttimeinter;

function nextopenTime(c, a) {
    var d = new Date(c.replace(/-/g, "/")).getTime() + 5695 * 1;
    var b = new Date(a.replace(/-/g, "/")).getTime() * 1;
    nexttimeinter = setInterval(function () {
        var j = b - d;
        var h = parseInt(j / (1000 * 60 * 60) / 24);
        var f = parseInt(j / (1000 * 60 * 60) - (h * 24));
        var g = parseInt((j / (1000 * 60 * 60) - (h * 24) - f) * 60);
        var i = parseInt(((j / (1000 * 60 * 60) - (h * 24) - f) * 60 - g) * 60);
        if (j < 0 || h < 0 || j < 0 || j < 0 || j < 0) {
            TishIssuc();
            return
        } else {
            var e = "<span class='timer'>" + h + "</span><span >天</span><span class='timer'>" + f + "</span><span >时</span><span class='timer'>" + g + "</span><span >分</span><span class='timer'>" + i + "</span><span >秒</span>";
            $("#spadiv").html(e)
        }
        d += 1000
    }, 1000)//1000
}

function TishIssuc() {
    // $.ajax({
    //     type: "get",
    //     //url: url.config140 + "findSmallSixInfo.do",
    //     url: "http://www.xjp888.net/findSmallSixInfo_new.asp?rannum="+Math.ceil(Math.random()*1000000+1000),
    //     dataType: "json",
    //     success: function(a) {
    //         //a = eval("("+a+")");
    //         clearInterval(nexttimeinter);
    //         console.log(a);
    //         nextopenTime(a.result.data.serverTime, a.result.data.drawTime);
    //         nextIssue = a.result.data.drawIssue;
    //         var b = {};
    //         b.nextTime = a.result.data.drawTime;
    //         ymd = b.nextTime.split(" ")[0].split("-")
    //         his = b.nextTime.split(" ")[1].split(":")
    //         b.ThisCode = a.result.data.preDrawCode.split(",");
    //         indexFunObj.ifAnimateFun(a.result.data.type, a, b);
    //         $(".nextcode").next().html(a.result.data.drawIssue).next().next().html("&nbsp;&nbsp;" + ymd[1] + "月" + ymd[2] + "日&nbsp;"
    //             +("0"+his[0]).substr(("0"+his[0]).length-2,2) + "时"
    //             +("0"+his[1]).substr(("0"+his[1]).length-2,2) + "分")
    //     },
    //     error: function() {
    //         setTimeout(function() {
    //             TishIssuc()
    //         }, 600000)
    //     }
    // })
}

TishIssuc()
setInterval("TishIssuc()", 120000)

function ready() {
    var a = new Date();
    var d = a.getFullYear();
    var c = a.getMonth() + 1;
    var b = a.getFullYear();
    $("#date_year>p").html(d + "/" + c);
    // dateFun(d, c)
}

ready();

function ycFun(a) {

}

$(".spanlabel>span").mouseenter(function (a) {
    if ($(this).hasClass("right")) {
        $(this).find("img").attr("src", "img/next_2.png")
    } else {
        if ($(this).hasClass("left")) {
            $(this).find("img").attr("src", "img/prev_2.png")
        }
    }
});
$(".spanlabel>span").mouseleave(function (a) {
    if ($(this).hasClass("right")) {
        $(this).find("img").attr("src", "img/next.png")
    } else {
        if ($(this).hasClass("left")) {
            $(this).find("img").attr("src", "img/prev.png")
        }
    }
});
var liWidth = 196;
var viewCount = 6;
var Klfet = 0
    , Kright = 0
    , leftpx = 0;
$(".yctk_more").ready(function () {
    Kright = $(".yctk_more>ul>li").length - 6;
    console.log(Kright);
    if (Kright <= 0) {
        $(".spanlabel>.right").addClass("disabled")
    }
    $(".yctk_more>ul").css({
        width: $(".yctk_more>ul>li").length * 196 + "px"
    })
})
$(".spanlabel").on("click", "span:not('.disabled'),span:not('.disabled')>img", function (a) {
    if ($(a.target).attr("class") == "right" || $(a.target).parent().attr("class") == "right") {
        if (Kright >= 6) {
            leftpx += viewCount * liWidth;
            Klfet += viewCount;
            Kright -= viewCount
        } else {
            leftpx += Kright * liWidth;
            Klfet += Kright;
            Kright -= Kright
        }
    } else {
        if ($(a.target).attr("class") == "left" || $(a.target).parent().attr("class") == "left") {
            if (Klfet >= 6) {
                leftpx -= viewCount * liWidth;
                Kright += viewCount;
                Klfet -= viewCount
            } else {
                leftpx -= Klfet * liWidth;
                Kright += Klfet;
                Klfet -= Klfet
            }
            $(".yctk_more>ul").css("left", leftpx + "px")
        }
    }
    if (Klfet > 0) {
        $(".left").removeClass("disabled")
    } else {
        $(".left").addClass("disabled")
    }
    if (Kright > 0) {
        $(".right").removeClass("disabled")
    } else {
        $(".right").addClass("disabled")
    }
    $(".yctk_more>ul").css("left", -leftpx + "px")
});
ycFun(nextIssue);

setTableCss = function (a) {
    $("#tableth").attr("colspan", 30);
    $("." + a).attr("colspan", 6)
}
;
$(".propKinds>li:nth-child(3)").one("click", function () {

    var u = metalNumber.split(" ")
        , h = woodNumber.split(" ")
        , l = waterNumber.split(" ")
        , z = fireNumber.split(" ")
        , g = earthNumber.split(" ")
        , c = ""
        , d = ""
        , q = ""
        , n = ""
        , p = ""
        , e = ""
        , w = ""
        , t = ""
        , j = ""
        , f = "";
    var k = "<tiangandizhi></tiangandizhi>";
    var s = false
        , r = false
        , b = false
        , y = false
        , a = false;
    for (var v = 0; v < 10; v++) {
        if (v < 5) {
            c += "<tiangandizhi>" + u[v] + "</tiangandizhi>";
            d += "<tiangandizhi>" + h[v] + "</tiangandizhi>";
            q += "<tiangandizhi>" + l[v] + "</tiangandizhi>";
            n += "<tiangandizhi>" + z[v] + "</tiangandizhi>";
            p += "<tiangandizhi>" + g[v] + "</tiangandizhi>"
        } else {
            if (u[v] != undefined) {
                e += "<tiangandizhi>" + u[v] + "</tiangandizhi>"
            } else {
                e += "<tiangandizhi>&nbsp;</tiangandizhi>"
            }
            if (h[v] != undefined) {
                w += "<tiangandizhi>" + h[v] + "</tiangandizhi>"
            } else {
                w += "<tiangandizhi>&nbsp;</tiangandizhi>"
            }
            if (l[v] != undefined) {
                t += "<tiangandizhi>" + l[v] + "</tiangandizhi>"
            } else {
                t += "<tiangandizhi>&nbsp;</tiangandizhi>"
            }
            if (z[v] != undefined) {
                j += "<tiangandizhi>" + z[v] + "</tiangandizhi>"
            } else {
                j += "<tiangandizhi>&nbsp;</tiangandizhi>"
            }
            if (g[v] != undefined) {
                f += "<tiangandizhi>" + g[v] + "</tiangandizhi>"
            } else {
                f += "<tiangandizhi>&nbsp;</tiangandizhi>"
            }
        }
    }
    if (u.length == 11) {
        c += "<tiangandizhi>" + u[10] + "</tiangandizhi>";
        e += "<tiangandizhi>&nbsp;</tiangandizhi>";
        setTableCss("oneth")
    } else {
        if (h.length == 11) {
            d += "<tiangandizhi>" + h[10] + "</tiangandizhi>";
            w += "<tiangandizhi>&nbsp;</tiangandizhi>";
            setTableCss("twoth")
        } else {
            if (l.length == 11) {
                q += "<tiangandizhi>" + l[10] + "</tiangandizhi>";
                t += "<tiangandizhi>&nbsp;</tiangandizhi>";
                setTableCss("threeth")
            } else {
                if (z.length == 11) {
                    n += "<tiangandizhi>" + z[10] + "</tiangandizhi>";
                    j += "<tiangandizhi>&nbsp;</tiangandizhi>";
                    setTableCss("fourth")
                } else {
                    if (g.length == 11) {
                        p += "<tiangandizhi>" + g[10] + "</tiangandizhi>";
                        f += "<tiangandizhi>&nbsp;</tiangandizhi>";
                        setTableCss("fiveth")
                    }
                }
            }
        }
    }
    var o = "<tr>" + c + k + d + k + q + k + n + k + p + "</tr><tr>" + e + k + w + k + t + k + j + k + f + "</tr>";
    $(".fiveNumber").html(o)
});

function LanmuFun(b, a) {
    // $.ajax({
    //     type: "get",
    //     url: url.config140_2 + "news/findNewsByPIdForPage.do",
    //     async: false,
    //     data: {
    //         programaId: b,
    //         pageNo: 1,
    //         pageSize: 5
    //     },
    //     dataType: "json",
    //     success: function(d) {
    //         $("." + a + ">ul").html("");
    //         console.log(d);
    //         if (d.result.data == "") {
    //             return false
    //         }
    //         var c = "";
    //         $.each(d.result.data.list, function(e, f) {
    //             c += "<li> <a href='html/news_detail.html?" + f.newsId + "'>" + f.title + "</a></li>"
    //         });
    //         $("." + a + ">ul").html(c)
    //     }
    // })
}

$(".box_third>div>div>span").on("click", "a", function () {
    sessionStorage.setItem("bread_title", $(this).parent().prev().text())
});
$(".box_third").on("click", "div>ul>li>a", function () {
    sessionStorage.setItem("bread_text", $(this).text());
    sessionStorage.setItem("bread_title", $(this).parent().parent().prev().find("h1").text())
});
