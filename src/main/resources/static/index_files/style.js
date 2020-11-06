//JavaScript
//定制与生产
$(document).ready(function(){
	$('.tab .tabUp li').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
		var _index = $(this).index();
		//alert(index);
		$('.tabCon').eq(_index).css({'display':'block'}).siblings('div').css({'display':'none'});
	});
	/*$('.tabCon ul').click(function(){
		var index = $(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.tabCon .right li').eq(index).show().siblings().hide();
	});*/
	$('.tab-cor li').each(function(i) {
        $(this).click(function(event) {
            $(this).addClass('cur').siblings('li').removeClass('cur');
            $($('.tab-con')[i]).css({display: 'block'}).siblings('div').css({display: 'none'});
        });
    });

    $('.tab-con').eq(0).children('ul').eq(0).addClass('gaicur');
    $('.tab-con').eq(1).children('ul').eq(0).addClass('gaicur');
    $('.tab-con').eq(2).children('ul').eq(0).addClass('gaicur');
    $('.tab-con').eq(0).children().eq(1).css('display' , 'block');
    $('.tab-con').eq(1).children().eq(1).css('display' , 'block');
    $('.tab-con').eq(2).children().eq(1).css('display' , 'block');
    $('.tab-con .left-gai').each(function(i) {
        $(this).click(function(event) {
            $(this).addClass('gaicur').siblings('ul').removeClass('gaicur');
            $($('.tab-con .right-gai')[i]).css('display','block').siblings('div').css('display', 'none');
        });
    });
    $($('.tab-con').eq(0).children('ul')[$('.tab-con').eq(0).children('ul').length - 1]).css('border-bottom','1px solid #ccc');
    $($('.tab-con').eq(1).children('ul')[$('.tab-con').eq(0).children('ul').length - 1]).css('border-bottom','1px solid #ccc');
    $($('.tab-con').eq(2).children('ul')[$('.tab-con').eq(0).children('ul').length - 1]).css('border-bottom','1px solid #ccc');
	//about us
	$('.main-con7-box b').on('click',function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		$('.con7-txt').eq(index).show().siblings('div').hide();
	});
	//头部nav
	$('.header h3').click(function(){
		$('.top_nav').slideToggle('slow');
	});
	var authors = $('.al_tab li');	
	authors.each(function(){
		$(this).click(function(){
			$(this).addClass('active').siblings('li').removeClass('active');
		});
	})

});
	var phoneWidth = parseInt(window.screen.width);
	var phoneScale = phoneWidth/640;
	var ua = navigator.userAgent;
	if (/Android (\d+\.\d+)/.test(ua)){
		var version = parseFloat(RegExp.$1);
		// andriod 2.3
		if(version>2.3){
			document.write('<meta name="viewport" content="width=640,initial-scale = '+phoneScale+', minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
		// andriod 2.3以上
		}else{
			document.write('<meta name="viewport" content="width=640">');
		}
		// 其他系统
	} else {
		document.write('<meta name="viewport" content="width=640, user-scalable=no">');
	}

