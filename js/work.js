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
			_this.imgList.append("<li><a href=''></a></li>"); //tupian
			_this.picNum.append("<li></li>"); //jiaobiao
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
		
				
})