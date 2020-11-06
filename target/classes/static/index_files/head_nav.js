document.writeln('<style>');

document.writeln('  body{   overflow-x: hidden;}');
document.writeln('  * {margin: 0;padding: 0;list-style: none;}');
document.writeln('  a {outline: none;text-decoration: none;color: black;}');
document.writeln('  .nav_menu{position: fixed; bottom: 10%; right: 7%; cursor: pointer;z-index: 999999; display: block; width: 83px; height: 83px; }');
document.writeln('  .conta-warper{position: fixed;left: -100%;top:0;-webkit-transition:ease 0.5s;transition:ease 0.5s; width: 100%;height: 100%;z-index: 9999;    top: 89px;}');
document.writeln('  .onC{ left: 0 !important}');
document.writeln('  .menu-nav{height: 100%; background: #f3f5f7; width: 100%;overflow: auto;}');
document.writeln('  .menu-nav-l{width: 30%;height: 100%; float: left}');
document.writeln('  .menu-nav-l span{line-height: 2rem;background: #fff;margin-bottom: 0.2rem;color: #232323;display: block;text-align: center;font-size: 2.8rem;padding: 4rem 0;}');
document.writeln('  .menu-nav-right{overflow: scroll;height: 100%;width: 70%; float: right;}');
document.writeln('  .menu-nav-r{overflow: auto; padding-bottom: 27rem;overflow-x: hidden;}');
document.writeln('  .menu-nav-r h3{margin: 0;background: #fff;font-weight: normal;text-align: center;}');
document.writeln('  .menu-nav-r h3 a{color: #333;line-height: 5rem;font-size: 2.8rem;display: block;}');
document.writeln('  .menu-nav-r h5{margin: 0;font-weight: normal;text-indent: 1rem;}');
document.writeln('  .menu-nav-r h5{margin: 0;font-weight: normal;text-indent: 1rem;}');
document.writeln('  .menu-nav-r h5 a{color: #333;line-height: 4rem;font-size: 2.6rem;display: block;padding: 1rem 0;}');
document.writeln('  .menu-nav-ch{background:#fff;padding: 1rem; }');
document.writeln('  .menu-nav-ch a{color: #555;font-size: 2.4rem;display: inline-block;padding: 0;text-indent: 0.7rem;   line-height: 4.2rem ;}');
document.writeln('  .menu-nav-r{display: none}');
document.writeln('  .onClass{color: red !important;}');
document.writeln('  .onCl{display: block}');
document.writeln('  .address-box table {background-color: #CCCDCC;border-collapse: initial;border-spacing: 1px;}');
document.writeln('  .more-ico{background: url("https://img.wen361.com/more-nav.png") no-repeat}');
document.writeln('  .more-close{background: url("https://img.wen361.com/more-close.png") no-repeat}');
document.writeln('  .goTop {position: fixed;right: 7%; bottom: 18%; z-index: 999;} ');
document.writeln('  .goTop >img {width: 80px; height: 80px; cursor: pointer;} ');
document.writeln('</style>');






document.writeln('<div class=\"goTop\" id=\"js-go_top\" style=\"transform: translate(0px, 0px); transition: transform 0.5s ease-in-out 0s;\">');
document.writeln('    <img src=\"https://img.wen361.com/icon_top.png\" alt=\"回到顶部\">');
document.writeln('</div>');



$(document).ready(function(){
    $('.nav_menu').click(function () {
        var _this= $(this);
        if (_this.hasClass('more-close'))
        {
            $('.gesheng').show();
            _this.removeClass('more-close').addClass('more-ico')
        }else{
            $('.gesheng').hide();
            _this.addClass('more-close').removeClass('more-ico')

        }

        if ($('.conta-warper').hasClass('onC'))
        {
            $('.conta-warper').removeClass('onC');
        }else{
            $('.conta-warper').addClass('onC');
        }
    })


    $('.menu-nav-l span').click(function ()
    {
        var index = $(this).index();
        $(this).addClass('onClass').siblings().removeClass('onClass');
        $('.menu-nav-right li').eq(index).show().siblings().hide();})
    })

    window.onload = function (){
        var oDiv = document.getElementById('moveIcon');
        var disX, moveX, L, T, starX, starY, starXEnd, starYEnd;
        oDiv.addEventListener('touchstart', function (e) {
            disX = e.touches[0].clientX - this.offsetLeft;
            disY = e.touches[0].clientY - this.offsetTop;
            starX = e.touches[0].clientX;
            starY = e.touches[0].clientY;
        });
        oDiv.addEventListener('touchmove', function (e)
        {
            L = e.touches[0].clientX - disX;
            T = e.touches[0].clientY - disY;
            starXEnd = e.touches[0].clientX - starX;
            starYEnd = e.touches[0].clientY - starY;
            if (L < 0) {
                L = 0;
            } else if (L > document.documentElement.clientWidth - this.offsetWidth) {
                L = document.documentElement.clientWidth - this.offsetWidth;
            }

            if (T < 0)
            {
                T = 0;
            } else if (T > document.documentElement.clientHeight - this.offsetHeight) {
                T = document.documentElement.clientHeight - this.offsetHeight;
            }

            moveX = L + 'px';
            moveY = T + 'px';
            this.style.left = moveX;
            this.style.top = moveY;
        });
    }


        jQuery.fn.gotoTop = function(opt){
            var ele = this;
            var win = $(window);
            var doc = $('html,body');
            var index = false;

            //默认icon的css属性值
            var defaultOpt = {
                offset : 420,
                speed : 500,
                iconSpeed : 200,
                animationShow : {'opacity' : '1'},
                animationHide : {'opacity' : '0'}
            };

            //将自定义icon的css属性值更新到options中
            var options = $.extend(defaultOpt,opt);

            //点击icon返回顶部
            ele.click(function(){
                doc.animate({scrollTop : '0px'},options.speed);
            });

            //判断icon动画样式是不是transform
            $.each(options.animationShow,function(i){
                if(i == 'transform'){
                    index = true;
                }
            });

            //icon动画样式显示时
            function animateShow(){
                if(index){
                    ele.css(options.animationShow);
                }else{
                    ele.stop().animate(options.animationShow,options.iconSpeed);
                }
            }

            //icon动画隐藏时
            function animateHide(){
                if(index){
                    ele.css(options.animationHide);
                }else{
                    ele.stop().animate(options.animationHide,options.iconSpeed);
                }
            }

            //当屏幕的高度大于options.offset时，显示icon（前提是icon事先隐藏了）
            win.scroll(function(){
                /*                console.log(win.scrollTop())*/
                if(win.scrollTop() > options.offset){
                    animateShow();
                }else{
                    animateHide();
                }
            });

            //如果屏幕里顶部的高度大于设置的offset，则直接将icon显示出来（而不是等滚动事件发生后才显示出来）
            if(win.scrollTop() > options.offset){
                ele.css(options.animationShow);
            }else{
                ele.css(options.animationHide);
            }
        }

        $('#js-go_top').gotoTop({
            offset : 915, //距离顶部的位置
            speed : 300, //移动到顶部的速度
            animationShow : {
                'transform' : 'translate(0,0)',
                'transition': 'transform .5s ease-in-out'
            }, //icon动画样式显示时
            animationHide : {
                'transform' : 'translate(150px,0)',
                'transition': 'transform .5s ease-in-out'
            } //icon动画样式隐藏时
        });