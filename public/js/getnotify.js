$(function () {
    console.log("error")
    $.ajax({
        type: "get",
        url: "notify/getNotify",
        dataType: "json",
        async: false,
        success: function (data) {
            picurl_data = data;
            var templi = "";


            $(".notifytxt").text(data.info)
            var notifytxt2 = document.getElementById("tongzhi")
            if(notifytxt2 != undefined){
                notifytxt2.innerHTML = data.info
            }
        }
    })
});