$(function(){
	/* 登录按钮 */
	$("#login").click(function(){
		//获取文本框的值
		var userName = $("#userName").val();
		var userPass= $("#userPass").val();
		if(userPass == '' || userName == null ||userPass == '' || userPass == null ){
			alert("请填写完整登录信息！");
			return;
		}
		$.post('/user/login',{userName:userName,userPass:userPass},
			function(res){
			if(res.code==1){				
				window.location.href=res.result;
			}else{
				alert("用户名密码不正确！");
			}
		});
	});
	
	/* 重置按钮 */
	$("#reset").click(function(){
		//获取文本框的值
		$("#userName").val("");
		$("#userPass").val("");
	});
});