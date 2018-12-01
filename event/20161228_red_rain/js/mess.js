$(document).ready(function(){
$(".start_bn").click(function(){
	$(".start_bn").addClass("start_bn_m");
	var startAnimation = document.getElementById(".mess");
	//startAnimation();
	function startAnimation(){
	var li = $('.mess').find('li');
	var mess = {
		random: function(low, up){
			return Math.floor((Math.random()*(low-up+1))+up);
		},
		css: function(){
			var rotate = this.random(-30, 30),//旋轉角度
				zindex = this.random(0, li.length),
				degrees = 'rotate('+rotate+'deg)';
			return {'degrees': degrees, 'zindex': zindex }
		},
		degrees: function(element){
			var random = this.css();
			$(element).css({
				'-webkit-transform': random.degrees,
				'-moz-transform': random.degrees,
				'-o-transform': random.degrees,
				'z-index': random.zindex
			});
		},
		animate: function(element, x, y){
			$(element).animate({
				//'transform':'translate('+y+','+x+')' ,				
				top: y,
				left: x,
			}, 500);//紅包撒出去動畫秒數
		}
	}
	
	li.each(function(){
		if( typeof( window.innerWidth ) == 'number' ) {
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
        } else{
        myWidth = document.documentElement.clientWidth;/* for ie*/
        myHeight = document.documentElement.clientHeight;/* for ie*/
        }
		mess.animate($(this), 0, 0);
	    var red_W=(myWidth/10)*1.5+"px";
	    $(".red").width(red_W).height(red_W);//因應不同解析計算紅包大小
		var move_X=myWidth/2;
		var move_Y=myHeight/2;
		var t = $(this), x = mess.random(-1*move_X, move_X), y = mess.random(-1*move_X, move_X);//以目前解析寬度做隨機移動座標
			mess.animate(t, x, y+move_Y);
			t.animate({width:'0px',height:'0px',opacity:'0',borderWidth:'0px'},500).fadeOut();
			mess.degrees(t);
	});
	//mess.prototype();
	}
});
});