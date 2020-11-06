package com.wll.test.po;

/**
 * 用户信息实体类
 * @author wulinli
 * @date 20200128
 */
public class UserMessageInfo {

	private Long id;
	//用户名称
	private String messName; 
	//用户电话
	private String messPhone;
	//留言信息
	private String messInfo;
	//留言状态(1 未处理，0 已处理)
	private int messStatus;
	//创建时间
	private String createTime;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getMessName() {
		return messName;
	}
	public void setMessName(String messName) {
		this.messName = messName;
	}
	public String getMessPhone() {
		return messPhone;
	}
	public void setMessPhone(String messPhone) {
		this.messPhone = messPhone;
	}
	public String getMessInfo() {
		return messInfo;
	}
	public void setMessInfo(String messInfo) {
		this.messInfo = messInfo;
	}
	public int getMessStatus() {
		return messStatus;
	}
	public void setMessStatus(int messStatus) {
		this.messStatus = messStatus;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
}
