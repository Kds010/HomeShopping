/**
 * 
 */

$('ul.ch_list_tab li').click(function(){
	$('ul.ch_list_tab li').attr({"class":""});
	$(this).addClass("on");
});

$('.date_cont a').click(function(){
	$('.date_cont a').attr({"class":""});
	$(this).addClass("on");
});

function ajax_list_time(){
	
	var array ;
	var str	  = "";
	var date  = new Date();
	
	for(var i = 0; i<array.length; i++){
		
		
		str += "<li data-dt="+date-6+i+">";
		if(i=6){
			str += "<a href=javascript:; class=date_cont on>";
		}else{
			str += "<a href=javascript:; class=date_cont>";
		}
		str += "<span class=num_date>"+date.getDate()+"</span>";				
		str += "<span class=txt_date>"+date.getDay()+"</span></a></li>";
		
	}
	
	$('#scheduleDate').html(str);
	
}


function ajax_list_item(){
	
	var array ;
	var str	  = "";
	var date  = new Date();
	
	var aaa   = "";
	var itemlist = 1;
	
	for(var i = 0; i<array.length; i++){
		
		str += "<div class=timeline-item date-is='00:00'>";
		
		for(var j = 0; j<itemlist;j++){
			str += "<h1>"+aaa+"</h1>";
			str += "<p>"+aaa+"</p>";
		}
		
		str += "</div>";
		
	}
	
	$('.cont-list').html(str);
	
}







