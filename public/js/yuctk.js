
var picurl_data = []
$(function () {
    console.log("error")
    $.ajax({
        type: "get",
        url: "tukuadmin/getAllTuku",
        dataType: "json",
        success: function (data) {
            picurl_data = data;
            var templi = "";
            for (var a = 0; a < data.length; a++) {
                templi += "<li id='"+data[a].id+"' onclick='showimg(" +data[a].id+")'>" + data[a].name + "</li>"
            }
            $(".caizhonglist_first").html(templi);
            $(".caizhonglist_first>li:first-child").addClass("checked")
            $(".listheadl").html("<p>" + data[0].name + "</p>")
            $(".listbox").html(data[0].imgurl)
        }
    })
});

function showimg(id) {
    $(".caizhonglist_first>li").removeClass("checked")
    $(".caizhonglist_first>#"+id).addClass("checked")
    console.log(id)
    $.ajax({
        type: "get",
        url: "tukuadmin/getTukuById",
        dataType: "json",
        data: {
            id: id
        },
        async: false,
        success: function (data) {

            $(".listheadl").html("<p>" + data.name + "</p>")
            $(".listbox").html(data.imgurl)
        }
    })

}

