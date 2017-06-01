$(function(){	
	var data = ["img/banner01.jpg", "img/banner02.jpg", "img/banner03.jpg", "img/banner04.jpg", "img/banner05.jpg"];	
	function Banner(obj, data) {	
		this.wrap = typeof obj === "string" ? $("#" + obj) : obj;
		this.imgList = this.wrap.find(".picBox");
		this.picNum = this.wrap.find(".picNum");
		this.data = data;
		this.init();
	}
	Banner.prototype.init = function() {
		var _this = this;
		$.each(this.data, function(index) {
			_this.imgList.append("<li><a href=''></a></li>");
			_this.picNum.append("<li></li>"); 
		})
		this.picNum.find("li:first").addClass("active");
		this.imgList.find("a").each(function() {
			var index = $(this).parent().index();
			$(this).css("background-image", "url(" + data[index] + ")");
		});
		this.index = 0;
		this.timer = setInterval(function() {
			_this.move(_this);
		}, 3000);
		this.stopInterval(); 
		this.changeByNum(); 
		this.changeByNext(); 
		this.changeByPrev(); 
	};
	Banner.prototype.move = function(_this) {
		_this.index++;

		if(_this.index == _this.imgList.find("li").length) {
			_this.index = 0;
		}

		if(_this.index <= -1) {
			_this.index = _this.imgList.find("li").length - 1;
		}
		_this.imgList.find("li").eq(_this.index).stop().fadeIn(500).siblings().stop().fadeOut(500);
		_this.picNum.find("li").eq(_this.index).addClass("active").siblings().removeClass("active");

	}
	Banner.prototype.changeByNum = function() {
		var _this = this;
		this.picNum.find("li").mouseover(function() {
			_this.index = $(this).index() - 1;
			_this.move(_this);
		})
	}
	Banner.prototype.changeByNext = function() {
		var _this = this;
		this.wrap.find(".prev").on("click", function() {
			_this.move(_this);
		})
	}
	Banner.prototype.changeByPrev = function() {
		var _this = this;
		this.wrap.find(".next").on("click", function() {
			_this.index = _this.index - 2;
			_this.move(_this);
		})
	}
	Banner.prototype.stopInterval = function() {
		var _this = this;
		this.wrap.on("mouseenter", function() {
			clearInterval(_this.timer);
		})
		this.wrap.on("mouseleave", function() {
			_this.timer = setInterval(function() {
				_this.move(_this);
			}, 3000);
		})
	}
	new Banner("banner", data);
		
		
		
	$(".prev").hover(function(){	
				$(".prev").css("background-position-x",-45);
			},function(){
				$(".prev").css("background-position-x",0);
			});
			$(".next").hover(function(){	
				$(".next").css("background-position-x",-45);
			},function(){
				$(".next").css("background-position-x",0);
		});			
	$(".middle_Pic").hover(function(){
		$(".last_img").show();
	},function(){
		$(".last_img").hide();
	});
	
//banner自动轮播	
	var Num = 0;
	function Move(){	
		Num++;
		if(Num==5){Num=0;}
		$(".content1_Img ul").eq(Num).fadeIn().siblings().fadeOut();
		$(".content1_Title li").eq(Num).addClass("active1").siblings().removeClass("active1");
	}
	var timer1=setInterval(Move,2000);
//鼠标划过index,清除定时器，显示对应图片。滑出继续滚动。
	$(".content1_Title li").hover(function(){
		clearInterval(timer1);
		Num = $(this).index();
		$(".content1_Img ul").eq(Num).show().siblings().hide();
		$(".content1_Title li").eq(Num).addClass("active1").siblings().removeClass("active1");
	},function(){
		timer1=setInterval(Move,2000);
	});	
	$(".content3_Top_pre").click(function(){
		$(".content3_Pic").animate({left:"+=260px"},"slow");
		
	});
	$(".content3_Top_next").click(function(){			
		$(".content3_Pic").animate({left:"-=260px"},"slow");	
	});
	
	
	
	$(".content4_pic li").mouseenter(function(){				
		var index=$(this).index();
		console.log(index);
		$(".content4_pic li").eq(index).animate({opacity:"0.5"},100,function(){		
		$(".content4_pic li").eq(index).animate({opacity:"1"},100);			
		});
	});
//	$(".content4_pic li").mouseleave(function(){
//		$(this).animate({opacity:"1"},100);		
//	});
//	
	
	
	
	
	
		var num=0;
	function rollOne(){
		num++;
		console.log("aa")
		if(num==2){num=0;};
		$(".content6_Pic").find("li").eq(num).show().siblings().hide();
		$(".content6_Num").find("li").eq(num).addClass("active2").siblings().removeClass("active2");
	};	
	var rollOnetimer=setInterval(rollOne,2000);
	$(".content6_Num li").hover(function(){
		clearInterval(rollOnetimer);
		num=$(this).index();
		$(".content6_Pic li").eq(num).show().siblings().hide();
		$(".content6_Num li").eq(num).addClass("active2").siblings().removeClass("active2");	
	},function(){
		rollOnetimer=setInterval(rollOne,2000);
	});
	
})