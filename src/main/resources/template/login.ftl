<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>后台登录</title>
  	<script src="../static/js/jquery/jquery.min.js"></script>
  	<script src="../static/js/jquery/jquery.easyui.min.js"></script>
  	<link rel="stylesheet" type="text/css" href="../static/js/jquery/themes/default/easyui.css">
	<link rel="stylesheet" type="text/css" href="../static/js/jquery/themes/icon.css">
</head>
<body>
	<div id="detail_dlg" style="width:300px;height:400px;padding:10px">
		<div>用户姓名：<input id="userName"  style="width:150px"></div>
		<div>用户密码：<input id="userPass" style="width:150px"></div>
		<br>
		<div style="text-align:'center';height:200px;width:100%">
			<input id="login" style="width:80px;height:30px" type="button" value="登录">
			<input id="reset" style="width:80px;height:30px" type="button" value="重置">
		</div>
	</div>
</body>
<script src="../static/js/login.js"></script>
</html>
