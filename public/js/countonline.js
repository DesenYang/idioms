$(function () {
    var a = setInterval(function () {
        $(".hm").css({color: "#fff", background: "#ED2842"});
        $(".tb").css({color: "#333333", background: "#fff"});
        if ($("hm").length != 0) {
            clearInterval(a)
        }
    }, 200)
});

function ToCDB(c) {
    var d = c.replace(/[a-zA-Z\.\s\-、　。，；,':()【】＝=（）\r\n\t]{1,}/g, ",");
    var b = "";
    for (var a = 0; a < d.length; a++) {
        if (d.charCodeAt(a) > 65248 && d.charCodeAt(a) < 65375) {
            b += String.fromCharCode(d.charCodeAt(a) - 65248)
        } else {
            b += String.fromCharCode(d.charCodeAt(a))
        }
    }
    return b
}

function addText(b) {
    var a = "," + document.form.inputtxt.value;
    if (a.charAt(a.length - 1) != ",") {
        document.form.inputtxt.value += "," + b
    } else {
        document.form.inputtxt.value += b
    }
}

function addteduan() {
    var b = document.form.hao_from.value;
    var d = document.form.hao_to.value;
    if (b == null || d == null) {
        alert("输入号码段错误！null\n如：01-08 或 20-49 或 31-41 等\n请按自己须要输入号码段");
        return false
    }
    if (b.length <= 0 || d.length <= 0) {
        alert("输入号码段错误！0\n如：01-08 或 20-49 或 31-41 等\n请按自己须要输入号码段");
        return false
    }
    var f = parseInt(b, 10);
    var e = parseInt(d, 10);
    if (f < e && f > 0 && e <= 49) {
        var a = "";
        for (var c = f; c <= e; c++) {
            a += c + ","
        }
        addText(a)
    } else {
        alert("输入号码段错误！d\n如：01-08 或 20-49 或 31-41 等\n请按自己须要输入号码段");
        return false
    }
}

function resetinput() {
    document.form.inputtxt.value = "";
    document.getElementById("resultstxt").innerHTML = ""
}

function strtoarr(c) {
    var b = "aaa"
}

function unique(e) {
    e = e || [];
    var b = {};
    for (var d = 0; d < e.length; d++) {
        var c = e[d];
        if (typeof (b[c]) == "undefined") {
            b[c] = 1
        }
    }
    e.length = 0;
    for (var d in b) {
        e[e.length] = d
    }
    return e
}

function compareNumbers(d, c) {
    return d - c
}

function tongji(a) {
    var h = a.split(",");
    var f = new Array(50);
    for (var d = 0; d < f.length; d++) {
        f[d] = 0
    }
    for (var d = 0; d < h.length; d++) {
        var b = parseInt(h[d], 10);
        f[b] += 1
    }
    var e = new Array();
    for (var d = 1; d <= 49; d++) {
        e.push(f[d])
    }
    e = unique(e);
    e.sort(compareNumbers);
    var l = "";
    for (var d = 0; d < e.length; d++) {
        var m = e[d];
        var g = "〖" + m + "次〗:";
        var k = 0;
        for (var c = 1; c <= 49; c++) {
            if (f[c] == m) {
                k += 1;
                if (c < 10) {
                    c = "0" + c
                }
                g += c + ","
            }
        }
        g += "（共" + k + "个）<br/>";
        l += g
    }
    l += "<br/>";
    return l
}

var lianstr = "红绿蓝兰金木水火土鼠牛虎兔龙蛇马羊猴鸡狗猪大小单双";

function countma() {
    var g = document.form.inputtxt.value;
    if (g.length > 0) {
        g += ",";
        g = ToCDB(g);
        var c = "";
        var b = g.match(/\d{1,}\b[^次码个头尾合门段余]/g);
        if (b != null) {
            var a = b.join(",") + ",";
            var l = a.match(/\d{1,}/g);
            if (l != null) {
                var d = new Array();
                for (var f = 0; f < l.length; f++) {
                    var k = "n_" + l[f];
                    if (k in document.form2) {
                        c += document.form2[k].title
                    }
                }
            }
        }
        g = g.split(",");
        for (var f = 0; f < g.length; f++) {
            var k = "n_" + g[f];
            if (k in document.form) {
                c += document.form[k].title
            } else {
                for (var e = 2; e < k.length; e++) {
                    var h = k.charAt(e);
                    if (lianstr.indexOf(h) != -1) {
                        c += document.form["n_" + h].title
                    }
                }
            }
        }
        document.getElementById("resultstxt").innerHTML = tongji(c)
    }
}

function countstyle(r) {
    var l = r.split(",");
    var h = document.form.inputtxt.value;
    if (h.length > 0) {
        h = ToCDB(h + ",");
        var s = h.split(",");
        var b = new Array();
        for (var e = 0; e < s.length; e++) {
            var n = "n_" + s[e];
            if (n in document.form) {
                b.push(s[e])
            } else {
                for (var c = 2; c < n.length; c++) {
                    var k = n.charAt(c);
                    if (lianstr.indexOf(k) != -1) {
                        b.push(k)
                    }
                }
            }
        }
        var a = new Array(l.length);
        for (var e = 0; e < l.length; e++) {
            a[e] = 0
        }
        for (var c = 0; c < b.length; c++) {
            if (r.indexOf(b[c]) != -1) {
                for (var e = 0; e < l.length; e++) {
                    var g = l[e];
                    var f = b[c];
                    if (f.length == 1 && "红绿蓝".indexOf(f) != -1) {
                        f += "波"
                    }
                    if (g == f) {
                        a[e] += 1;
                        break
                    }
                }
            }
        }
        var o = new Array();
        for (var e = 0; e < l.length; e++) {
            o.push(a[e])
        }
        o = unique(o);
        o.sort(compareNumbers);
        var p = "【168开奖网】http://www.168kai.cc/ \n统计结果：\n";
        for (var e = 0; e < o.length; e++) {
            var q = o[e];
            var m = "〖" + q + "次〗:";
            var d = 0;
            for (var c = 0; c < l.length; c++) {
                if (a[c] == q) {
                    d += 1;
                    m += l[c] + ","
                }
            }
            m += "（共" + d + "个）<br/>";
            p += m
        }
        p += "<br/>";
        document.getElementById("resultstxt").innerHTML = p;
        console.log(p)
    }
};