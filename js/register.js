/****************************************************/
/* 注册界面部分 */
/****************************************************/
// 获取元素
var $accountNum = $(".regUserName"),
	$psw 		= $(".regPwd"),
	$rePsw      = $(".regRePwd"),
	$btn        = $(".regBtn");
var $form       = $(".signUpInfoForm")
 // 添加存储用户
 
//验证电话
$(function(){
	$accountNum.on({
		blur:function(){
			var regs = /^1[34578]\d{9}$/;
			var thisVal = $(this).val();
			if(!regs.test(thisVal)){
				$(this).after("<p class='errMesg'>请输入正确的11位手机号码</p>");
			}
		},
		focus: function(){
			$(this).next().remove();
		}
	})
});
// 密码验证
$(function(){
	$rePsw.on({
		blur:function(){
			var pswVal = $(".regPwd").val();
			var rePswVal = $(".regRePwd").val();
			if(pswVal !== rePswVal){
				$(this).after("<p class='errMesg'>两次密码输入不一致，请重新输入！</p>")
			}
		},
		focus:function(){
			$(this).next().remove();
		}
	})
});


// 添加存储用户
function add(key,user,callBack) {
    var users = null;
    if(localStorage[key]){
        users = JSON.parse(localStorage[key]);
    }else {
        users = [];
    }
    users.push(user);
    localStorage[key] = JSON.stringify(users);
    if(callBack){
        callBack();
    }
};
// 判断用户是否纯在
function judge(key,gist,value,response) {
    if(!localStorage[key]){
        response(1);
        return;
    }
    var users = JSON.parse(localStorage[key]);
    console.log(users);
    //默认用户不存在
    var tag = false;
    for(var i = 0; i < users.length; i++){
        if (users[i][gist] === value){
            tag = true;
        }
    }
    tag ? response(0) : response(1);
};
//判断注册是否成功
$(function(){
	$btn.on("click",function(){
        var user ={
			"username":$accountNum.val(),
			"password":$psw.val(),
			"repassword":$rePsw.val()
			};
		judge("users","username",$accountNum.val(),function(status){
			if(status === 0){
				alert("用户已经存在");
				$accountNum.val("");
			}else if($accountNum.val()==="" || $psw.val()==="" || $rePsw.val()!== $psw.val() ){
				alert("表单信息有误，请重新输入")
					
			}else if(status ===1){
				add("users",user,function(){
					alert("注册成功");
					location.href = "login.html";
				})
			}
		})
	})
});



