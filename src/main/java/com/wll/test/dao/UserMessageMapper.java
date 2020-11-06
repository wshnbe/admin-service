package com.wll.test.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.wll.test.po.UserMessageInfo;

@Mapper
public interface UserMessageMapper {

	List<UserMessageInfo> selectAll();
	UserMessageInfo selectById(Long id);
	List<UserMessageInfo> selectByUserMessageInfo(UserMessageInfo params);
	int insertSelective(UserMessageInfo userMessageInfo);
	int deleteById(Long id);
}
