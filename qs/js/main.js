
var selectItem;

$(document).ready(function () {
    $("#btSubmit").click(function () {
        doCheck();
    });
    $('input:radio').click(function () {
        $("#qq" + selectItem + "").removeClass("alert-error");
        $("#qq" + selectItem + "").addClass("alert-success");
    });

});

$(document).ready(function () {
    var bro = $.browser;
    var binfo = "";
    if (bro.msie) { binfo = "Microsoft Internet Explorer " + bro.version; }
    if (bro.mozilla) { binfo = "Mozilla Firefox " + bro.version; }
    if (bro.safari) { binfo = "Apple Safari " + bro.version; }
    if (bro.opera) { binfo = "Opera " + bro.version; }
    if (!$.browser.msie) {
        $("#browser").html("温馨提示：您当前浏览器版本为" + binfo + ",网银部分功能将不能使用，建议使用IE7以上版本。");
        $("#browser").show();
    }
    if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
        $("#browser").html("温馨提示：您当前浏览器版本为" + binfo + ",网银部分功能将不能使用，建议使用IE7以上版本。");
        $("#browser").show();
    }
    doGetQs();
});

function doCheck()
{
    var result="";
    for (var i = 1; i < 10; i++) {
        if ($("input:radio[name='q" + i + "']:checked").val() != undefined) {
            result += $("input:radio[name='q" + i + "']:checked").val();
        }
        else {
            selectItem = i;
            alert("第" + i + "题没有选择，请选择后再提交");
            $("#qq" + i + "").removeClass("alert-info");
            $("#qq" + i + "").addClass("alert-error");
            $("#qq" + i + "").focus();
            mScroll("qq" + i + "");
            return false;
        }
        
    }
    alert(result);
        doAjax(result);
}

function doAjax(item) {
    $.ajax({
        url: "doTijiao.ashx",
        type: "post",
        data: { "checkitem": item },
        dataTyppe: "text",
        async: false,
        beforeSend: function (XHR) { },
        complete: function (XHR, TS) { },
        success: function (data) {
            alert(data);
            window.location.href = "http://registry.jlu.edu.cn";
        }
    });
}

function mScroll(id) {
    $("html,body").stop(true); $("html,body").animate({ scrollTop: $("#" + id).offset().top-160 }, 1000);
}

function doGetQs() {
    $.ajax({
        url: "doGetData.ashx",
        type: "post",
        data: { "ask": "getQs" },
        dataTyppe: "text",
        async: false,
        beforeSend: function (XHR) { },
        complete: function (XHR, TS) { },
        success: function (data) {
            alert(data);
            var divQueryBoard = $("#k_queryBoard");
            divQueryBoard.text("");
            divQueryBoard.append(data);
        }
    });
}