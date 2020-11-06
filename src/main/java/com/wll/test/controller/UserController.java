package com.wll.test.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.druid.util.StringUtils;
import com.alibaba.fastjson.JSON;
import com.wll.test.po.UserInfo;
import com.wll.test.po.UserMessageInfo;
import com.wll.test.service.UserInfoService;
import com.wll.test.service.UserMessageInfoService;

@Controller
@RequestMapping("/user")
public class UserController {
	
	private Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	UserMessageInfoService service;
	@Autowired
	UserInfoService userInfoService;
	
	/**
	 * 用户登录
	 * @param userName
	 * @param userPass
	 * @return
	 */
	@RequestMapping(value="/login", method=RequestMethod.POST)
	@ResponseBody
	public Object login(String userName,String userPass){
		logger.info("[login]接受参数是：userName={},userPass={}",userName,userPass);
		if(userName != null && userPass != null){
			UserInfo param = new UserInfo();
			param.setUserName(userName);
			param.setUserPass(userPass);
			List<UserInfo> infos = userInfoService.getUserInfo(param);
			if(infos != null && infos.size() > 0 ) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("code",1);
				map.put("result", "/page/home");
				logger.info("[login]返回信息是:{}",JSON.toJSONString(map));
				return map;
			}
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("code",0);
		logger.info("[login]返回信息是:{}",JSON.toJSONString(map));
		return map;
	}
	
	/**
	 * 添加用户留言
	 * @param userName
	 * @param userPhone
	 * @param userMess
	 */
	@RequestMapping(value="/addMessage", method=RequestMethod.POST)
	@ResponseBody
	public Object insert(String messName,String messPhone,String messInfo){
		if(!StringUtils.isEmpty(messName)&&!StringUtils.isEmpty(messPhone)&&!StringUtils.isEmpty(messInfo)) {
			UserMessageInfo info = new UserMessageInfo();
			info.setMessName(messName);
			info.setMessPhone(messPhone);
			info.setMessInfo(messInfo);
			info.setMessStatus(1);
			info.setCreateTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
			int result = service.insert(info);
			if(result > 0){
				return 1;
			}
		}
		return 0;
	}
	
	/**
	 * 留言条件查询
	 * @param userName
	 * @param userPhone
	 * @param startTime
	 * @param endTime
	 */
	@RequestMapping(value="/queryByConditions", method=RequestMethod.POST)
	@ResponseBody
	public Object queryByConditions(String messName,String messPhone){
		logger.info("[queryByConditions]接受参数是：messName={},messPhone={}",messName,messPhone);
		UserMessageInfo param = new UserMessageInfo();
		param.setMessName(messName);
		param.setMessPhone(messPhone);
		List<UserMessageInfo> result = service.getConditionsUserMessageInfo(param);
		if(result == null){
			result = new ArrayList<UserMessageInfo>();
		}
		logger.info("[queryByConditions]返回信息是：{}",JSON.toJSONString(result));
		return result;
	}
	
	/**
	 * 单个查询
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/queryOne", method=RequestMethod.POST)
	@ResponseBody
	public Object queryOne(String id){
		logger.info("[queryOne]接受参数是：id={}",id);
		if(id != null){
			UserMessageInfo info = service.getUserMessageInfo(new Long(id));
			logger.info("[queryOne]返回信息是：{}",JSON.toJSONString(info));
			return info;
		}
		logger.info("[queryOne]返回信息是：no");
		return "no";
	}
	
	@RequestMapping(value="/deleteOne", method=RequestMethod.POST)
	@ResponseBody
	public Object deleteOne(String id){
		logger.info("[deleteOne]接受参数是：id={}",id);
		if(id != null){
			int result = service.deleteUserMessageInfo(new Long(id));
			if(result > 0){
				logger.info("[deleteOne]返回信息是：1");
				return 1;
			}
		}
		logger.info("[deleteOne]返回信息是：0");
		return 0;
	}
}
