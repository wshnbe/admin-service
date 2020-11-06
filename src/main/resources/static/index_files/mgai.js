/*左侧菜单js*/
$(function(){
	$($('.menu-qiehuan')[0]).addClass('on');
	$('.menu-qiehuan').click(function (){
		$('.menu-qiehuan').removeClass('on');
		$(this).addClass('on');
	})
	var H = $(window).height() - $('.header').outerHeight() - $('.foot').outerHeight();
	$('.lists').css('height',H);
	$('.am-menu-nav').css('height',H);
	$('.am-offcanvas-bar').css('top',$('.header').outerHeight());
	$('.am-menu-toggle').click(function(){
		$('.am-menu-toggle').html('<i style="font-style: normal;font-size: 5rem;line-height: 40px;">×</i>');
	})
	$('.am-offcanvas').click(function(){
		$('.am-menu-toggle').html('<i class="am-menu-toggle-icon am-icon-bars"></i>');
	})
	$('.am-offcanvas-bar').click(function(event){
		 event.stopPropagation();
	})
	$('.search .but').click(function(){
		$('.search-box').css('display','block');
		$('.header').css('zIndex','101');
	})
	$('.quxiao').click(function(){
		$('.search-box').css('display','none');
		$('.header').css('zIndex','99');
	})
});