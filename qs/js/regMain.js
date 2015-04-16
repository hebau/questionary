// JavaScript Document
function refreshValiCodeImg() {
    document.getElementById("img_refreshValiCode").src = "valiCodeImg.aspx?" + Math.random();
}


//判断全选状态
$(function () {
    $(".chk_all").click(function () {
        var flag = $(".chk_all").attr("checked");//判断全选按钮的状态
        $(".chk_list").each(function () {
            var chkAttr = $(this).attr("checked");
            var chkDis = $(this).attr("disabled");
            if (chkAttr == undefined && (chkDis != "disabled")) {
                $(this).attr("checked", "checked");
                $("#tb_regID").val($("#tb_regID").attr("value") + ",'" + ($(this).attr("id")) + "'");
            }
            if (chkAttr == "checked") {
                $(this).removeAttr("checked");
                $("#tb_regID").val("");
            }
        });
    });
});

$(function () {
    $(".chk_list").click(function () {
        $("#tb_regID").val("");
        $(".chk_list").each(function () {
            var chkAttr = $(this).attr("checked");
            var chkDis = $(this).attr("disabled");
            if (chkAttr == "checked" && (chkDis != "disabled")) {
                $("#tb_regID").val($("#tb_regID").attr("value") + ",'" + ($(this).attr("id")) + "'");
            }
        });
    });
});

function regSubmit() {
    var regVal = $("#tb_regID").attr("value");
    if (regVal.length < 3) {
        alert("没有选择要注册的对象");
        return false;
    }
    return true;

}
//检查修改密码文本框
function pwdChange() {
    var oldpwd = $("#tb_oldpwd").attr("value").trim();
    var newpwd = $("#tb_newpwd").attr("value").trim();
    var newpwd2 = $("#tb_newpwd2").attr("value").trim();
    if (oldpwd.length == 0) {
        alert("请输入旧密码");
        return false;
    }
    if (newpwd.length == 0) {
        alert("请输入新密码");
        return false;
    }
    if (newpwd2.length == 0) {
        alert("请再次输入新密码");
        return false;
    }
    if (newpwd != newpwd2) {
        alert("两次输入的新密码不一样，请再次输入");
        return false;
    }
    return true;
}

function userAdd() {
    var userName = $("#tb_name").attr("value").trim();
    var pwd = $("#tb_pwd").attr("value").trim();
    var depart = $("#lb_depart").find("option:selected").text();
    var userType = $("input[type='radio']:checked").val();
    if (userName.length == 0) {
        alert("请输入用户名");
        return false;
    }
    if (pwd.length == 0) {
        alert("请输入用户密码，本系统不允许空密码登陆");
        return false;
    }
    if (depart.length == 0 && userType == "rb_1") {
        alert("请选择用户所在学院");
        return false;
    }
    return true;
}