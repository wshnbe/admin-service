package com.wll.test.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wll.test.dao.UserMessageMapper;
import com.wll.test.po.UserMessageInfo;

/**
 * 留言service
 * @author wulinli
 */
@Service
public class UserMessageInfoService {
	
	@Autowired
	UserMessageMapper mapper;
	
	public int insert(UserMessageInfo data){
		return mapper.insertSelective(data);
	}
	
	public List<UserMessageInfo> getAll(){
		List<UserMessageInfo> datas = mapper.selectAll();
		return datas;
	}
	
	public UserMessageInfo getUserMessageInfo(long id){
		UserMessageInfo info = mapper.selectById(id);
		return info;
	}
	
	public int deleteUserMessageInfo(long id){
		return mapper.deleteById(id);
	}
	
	public List<UserMessageInfo> getConditionsUserMessageInfo(UserMessageInfo info){
		List<UserMessageInfo> datas = mapper.selectByUserMessageInfo(info);
		if(datas != null && datas.size() > 0){
			return datas;
		}
		return null;
	}
}
