package com.wll.test.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wll.test.dao.UserInfoMapper;
import com.wll.test.po.UserInfo;

/**
 * 用户servcie
 * @author wulinli
 *
 */
@Service
public class UserInfoService {
	
	@Autowired
	UserInfoMapper mapper;
	
	public List<UserInfo> getUserInfo(UserInfo info) {
		return mapper.selectByUserInfo(info);
	}
}
