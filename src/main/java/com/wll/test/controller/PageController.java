package com.wll.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class PageController {

	@RequestMapping("/page/home")
	public String home(){
		return "/index_home";
	}
	
	@RequestMapping("/login")
	public String detail(){
		return "/login";
	}
	
	@RequestMapping("/")
	public String index(){
		return "/index";
	}
}
