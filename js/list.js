$(function(){
	$.get("list.json",function(data){
		var html=template("nav",data);		
		$("#list ul").html(html);
	})
})
