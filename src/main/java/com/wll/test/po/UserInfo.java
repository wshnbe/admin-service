package com.wll.test.po;

/**
 * 用户信息实体类
 * @author wulinli
 * @date 20200128
 */
public class UserInfo {

	private Long id;
	//用户名称
	private String userName; 
	//用户密码
	private String userPass;
	//创建时间
	private String createTime;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserPass() {
		return userPass;
	}
	public void setUserPass(String userPass) {
		this.userPass = userPass;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
}
