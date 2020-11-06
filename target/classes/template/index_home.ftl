<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>留言详情</title>
  	<script src="../static/js/jquery/jquery.min.js"></script>
  	<script src="../static/js/jquery/jquery.easyui.min.js"></script>
  	<link rel="stylesheet" type="text/css" href="../static/js/jquery/themes/default/easyui.css">
	<link rel="stylesheet" type="text/css" href="../static/js/jquery/themes/icon.css">
	<style type="text/css"> 
		.align-center{ 
		margin:0 auto;
		width:100%;
		height:80px;
		text-align:center;
		} 
	</style> 
</head>
<body>
	<div class="align-center">
		<div style="margin-top:50px;height:80px;">
			用户姓名：<input id="search_messName" class="easyui-textbox" style="width:150px;">
			用户手机：<input id="search_messPhone" class="easyui-textbox" style="width:150px;">
			<input id="search_btn" style="width:80px;border-color:blue" type="button" value="查询">
		</div>
	</div>
    <table id="data_table" class="easyui-datagrid" title="留言信息列表" style="width:100%;height:500px"
    	toolbar="#toolbar" idField="id" rownumbers="true" fitColumns="true" singleSelect="true"> 
		<thead>
			<tr>
				<th data-options="field:'id',width:100,align:'center',hidden:true">id</th>
				<th data-options="field:'messName',width:100,align:'center'">用户姓名</th>
				<th data-options="field:'messPhone',width:100,align:'center'">用户电话</th>
				<th data-options="field:'messInfo',width:100,align:'center'">留言信息</th>
				<th data-options="field:'createTime',width:100,align:'center'">留言日期</th>
			</tr>
		</thead>
	</table>
	<div id="toolbar">
		<a id ="search" class="easyui-linkbutton" iconCls="icon-search" plain="true">查看详情</a>
		<a id ="set" class="easyui-linkbutton" iconCls="icon-search" plain="true">设为已读</a>
	</div>
</body>
<script src="../static/js/index.js"></script>
</html>
