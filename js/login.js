
// 提示请输入手机号码
$(function(){
	$(".tel input:text").on({
		blur:function(){
			var thisVal = $(this).val();
			if(thisVal === ""){
				$(this).after("<p class='errMesg'>请输入手机号码</p>");
			}
		},
		focus: function(){
			$(this).next().remove();
		}
	})
})
// 提示请输入密码
$(function(){
	$(".psw input:password").on({
		blur:function(){
			var thisVal = $(this).val();
			if(thisVal === ""){
				$(this).after("<p class='errMesg'>请输入密码</p>");
			}
		},
		focus: function(){
			$(this).next().remove();
		}
	})
});
// 密码是否可见
$(function(){
	$("showPsw").on("click",function(){
		var $psw = $(".userPsw");
		var currentAttr = $psw.attr("type");
		if (currentAttr === "password"){
			$(this).text("可见");
			$psw.attr("type","text");
		}else if (currentAttr === "text") {
			$(this).text("不可见");
			$psw.attr("type","password");
		}
	})
});
//判断是否登陆成功
login("users");
function login(key){
	var $btn = $(".loginBtn"); 	
	$btn.on("click",function(){ 
        event.stopPropagation();
		if (localStorage.getItem("users") == null){
			alert("账号不存在请注册")
		}else {
            var	$accountNum = $(".userName").val();
            var	$psw 		= $(".userPsw").val();
            var user        = JSON.parse(localStorage[key]);
            var userName    = user[0].username;
            console.log(userName);
            console.log(user);
            for (var i = 0; i < user.length; i++) {
                if (user[i].username === $accountNum && user[i].password === $psw) {
                    alert("登录成功");
                    sessionStorage.setItem("curUser",$accountNum)
                    location.href = "../index.html";
                    
                }else if($accountNum === "" || $psw === ""){
                    alert("请输入帐号或密码");

                }else{
                    alert("帐号或密码错误");
                }
            }
		}
    })
}
