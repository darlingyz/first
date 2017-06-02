			var oMidImg=document.getElementsByClassName("MidImg")[0];
			var oBox_Left=document.getElementById("box_Left");
			var oSpan1=document.getElementsByClassName("span1")[0];
			var oBigImg=document.getElementsByClassName("BigImg")[0];
			var oImg=oBigImg.getElementsByTagName("img")[0];
			var oBoy=document.getElementsByClassName("boy")[0];
			var oBoy_down=document.getElementsByClassName("boy_down")[0];
			var oLi=oBoy_down.getElementsByTagName("li");
			var oBtn=document.getElementsByClassName("btn");
			
			oMidImg.onmousemove=function(e){
				var evt=e||event;
				var evt= e||event;
				var x=evt.pageX-oBox_Left.offsetLeft-oSpan1.offsetWidth/2;
				var y=evt.pageY-oBox_Left.offsetTop-oSpan1.offsetHeight/2;
				oSpan1.style.display="block";
				oBigImg.style.display="block";
				if(x<=0){
					x=0;
				}if(x>=oMidImg.offsetWidth-oSpan1.offsetWidth){
					x=oMidImg.offsetWidth-oSpan1.offsetWidth;
				}if(y<=0){
					y=0;
				}if(y>=oMidImg.offsetHeight-oSpan1.offsetHeight){
					y=oMidImg.offsetHeight-oSpan1.offsetHeight;
				}
				oSpan1.style.left=x+"px";
				oSpan1.style.top=y+"px";
				oImg.style.left=-oImg.offsetWidth/oMidImg.offsetWidth*x+"px";
				oImg.style.top=-oImg.offsetHeight/oMidImg.offsetHeight*y+"px";
			}
			oMidImg.onmouseleave = function(){
				oSpan1.style.display = "none";
				oBigImg.style.display = "none";
			}
			$(".btn_prev").click(function(){
			$(".small_Pic").animate({left:"+=248px"},"slow");
			/*if(){
				$(".small_Pic").stop();
				
				
				
			}*/
		});
		$(".btn_next").click(function(){			
		$(".small_Pic").animate({left:"-=248px"},"slow");	
		});	
		oBoy.onmouseover=function(){
			oBoy_down.style.display="block";			
				for(var i=0;i<oLi.length;i++){
					oLi[i].onclick=function(){
					oBoy.value=this.innerHTML;
					oBoy_down.style.display= "none";					
				}
			}			
		}	
		var data={"10001":{
			
				"imgUrl":"img/1.jpg",
				"title":"纯境",
				"price":"￥2330",
				"size":"14",	
				"id":"10001",
				}
		};		
		
		var html="";
	for (var i in data){
	html+="<tr><td><img src='"+data[i].imgUrl+"'/><span>"+data[i].title+"</span></td><td>"+data[i].price+"</td><td>"+data[i].size+"</td><td>data-id='"+data[i].id+"'</td></tr>";
		};
			var str = getCookie("cart");
			var obj = str ? JSON.parse(str) : {};//用来存商品ID（attr）和添加的数量（value）
			var sum = 0;
			for(var i in obj){
				sum+=obj[i];
			}	
			for(var i = 0; i < oBtn.length; i++){
				oBtn[i].onclick = function(){
					var id = "10001";
					console.log(id);
					obj[id] = obj[id] ? ++obj[id] : 1;					
					var objToStr = JSON.stringify(obj);					
					setCookie("cart",objToStr,7);					
					 ++sum;					
				}
			}
			
		
		