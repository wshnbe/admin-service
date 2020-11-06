$(function(){
	/* 留言添加头部 */
	$("#btn_one").click(function(){
		//获取文本框的值
		var userName = $("#name_one").val();
		var userPhone= $("#phone_one").val();
		var userMessage= $("#message_one").val();
		if(userName == '' || userName == null ||userPhone == '' || userPhone == null || userMessage == '' || userMessage == null ){
			alert("请填写完整姓名、电话、留言等信息！");
			return;
		}
		$.post('/user/addMessage',{messName:userName,messPhone:userPhone,messInfo:userMessage},
			function(res){
				if(res==1){
					alert("提交成功！");
				}else{
					alert("提交失败，请检查提交信息！")
				}
		});
	});
	
	/* 留言添加底部 */
	$("#btn_two").click(function(){
		//获取文本框的值
		var userName = $("#name_two").val();
		var userPhone= $("#phone_two").val();
		var userMessage= $("#message_two").val();
		if(userName == '' || userName == null ||userPhone == '' || userPhone == null || userMessage == '' || userMessage == null ){
			alert("请填写完整姓名、电话、留言等信息！");
			return;
		}
		$.post('/user/addMessage',{messName:userName,messPhone:userPhone,messInfo:userMessage},
			function(res){
				if(res==1){
					alert("提交成功！");
				}else{
					alert("提交失败，请检查提交信息！")
				}
		});
	});
});