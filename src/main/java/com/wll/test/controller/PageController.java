package com.wll.test.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class PageController {
	
	
	private Logger logger = LoggerFactory.getLogger(PageController.class);

	@RequestMapping("/page/home")
	public String home(){
		return "/index_home";
	}
	
	@RequestMapping("/login")
	public String detail(){
		return "/login";
	}
	
	@RequestMapping("/")
	public String index(HttpServletRequest request){
		logger.info("客户访问:{}",request.getRemoteAddr());
		return "/index";
	}
}
