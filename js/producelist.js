var data={"10001":{
			
				"imgUrl":"img/1.jpg",
				"title":"纯境",				
				"size":"14",
				"price":"￥2330",
				"id":"10001",
				}
		};
	

		var oList_datial=document.getElementsByClassName("list_detial")[0];
		var amycarbox_list=document.getElementsByClassName("mycarbox_list")[0];
		var amycar_num=document.getElementsByClassName("mycar_num")[0];
			var strCookie = getCookie("cart");
			var objCookie = JSON.parse(strCookie);
			var html = "";
			var str="";
			for(var attr in objCookie){
				html+="<li><img src='"+data[attr].imgUrl+"'><span>"+data[attr].title+"</span><span>"+data[attr].size+"</span><span>"+data[attr].price+"</span><span id='del'>删除</span></li>"
				
				str+="<li><img src='"+data[attr].imgUrl+"'><em>"+data[attr].title+"</em><em>"+data[attr].size+"</em><em>"+data[attr].price+"</em><em id='delete'>删除</em></li>"
			};
			oList_datial.innerHTML = html;			
			amycarbox_list.innerHTML=str;
	var oDel=document.getElementById("del");
	var aother_01=document.getElementsByClassName("other_01")[0];
	oDel.onclick=function(){
		oList_datial.remove();		
	};
	aother_01.onclick=function(){
		oList_datial.remove();		
	};
	var oDelete=document.getElementById("delete");	
	oDelete.onclick=function(){
		amycarbox_list.remove();
		objCookie[attr];
	};
	
	amycar_num.innerHTML=objCookie[attr];
	