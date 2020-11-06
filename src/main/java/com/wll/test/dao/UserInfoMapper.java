package com.wll.test.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.wll.test.po.UserInfo;

@Mapper
public interface UserInfoMapper {

	List<UserInfo> selectByUserInfo(UserInfo params);
}
