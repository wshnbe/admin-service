$(function(){
	//构建表格数据
	$("#data_table").datagrid({
		url:'/user/queryByConditions',
		method:'post',
		queryParams:JSON.stringify({'messName':null,'messPhone':null})
	});
	
	//查询按钮事件
	$("#search_btn").click(function(){
		var messName_value = $("#search_messName").val();
		var messPhone_value = $("#search_messPhone").val();
		$("#data_table").datagrid('load',{
			messName:$.trim(messName_value),
			messPhone:$.trim(messPhone_value)
		});
	});

	/* 查看留言详情 */
	$("#search").click(function(){
		var row = $('#data_table').datagrid('getChecked');
		if(row.length == 0){
			alert("请选中一行进行查看！");
			return ;
		}
		var id = $('#data_table').datagrid('getChecked')[0].id; 
		$.post('/user/queryOne',{id:id},function(data){
			if(data != null & data !=""){
				alert("用户姓名:    "+formatString(data.messName)+"\n"
						+"用户手机:   "+formatString(data.messPhone)+"\n"
						+"用户留言:   "+formatString(data.messInfo));
			}
		});
	});
	
	/* 设置为已读*/
	$("#set").click(function(){
		var row = $('#data_table').datagrid('getChecked');
		if(row.length == 0){
			reflashTable();
			alert("请选中一行进行设置！");
			return ;
		}
		if(confirm("确定要设为已读吗？")){
			var id = $('#data_table').datagrid('getChecked')[0].id; 
			$.post('/user/deleteOne',{id:id},function(data){
				if(data == 1){
					//刷新表格
					reflashTable();
					alert("设置成功！");
				}else{
					alert("设置失败！");
				}
			});
		}
	});
	
	/* 刷新表格 */
	function reflashTable(){
		var userName_value = $("#search_userName").val();
		var userPhone_value = $("#search_userPhone").val();
		$("#data_table").datagrid('load',{
			userName:$.trim(userName_value),
			userPhone:$.trim(userPhone_value)
		});
	}
	
	/* 格式化字符串 */
	function formatString(str){
		if(str == null || str == ''){
			return "空";
		}
		return str;
	}
});