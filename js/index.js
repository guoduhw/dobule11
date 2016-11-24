$(function(){

	//无逢滚动
	var $oBox = $(".scrollCont"),
		$iTem = $(".item"),
		$oUl = $iTem.find('ul').eq(0),
		$oUl2 = $iTem.find('ul').eq(1),
		$oUlcont = $oUl.html(),
	 	$count = 0,
	 	timer = null;
	 	$oUl2.html($oUlcont);
	 function scroll(){
	 	$count++;
	 	if($count >= $oUl.height()){
	 		$count = 0;
	 	}
	 	$iTem.css("top",("-"+$count)+'px');
	 }
	 if(timer){
		 clearInterval(timer);
	 }else{
		 setInterval(scroll,100);
	 }


	 $(".rule").bind("click",function(){
		 $(".rule_info").show();
		 boxShow();
	}); 
	function boxShow(){
		  var outerHeight = $(document).height();
		  var outzqbg = $(".rule_info_bg").outerHeight();
		  var wdHeight = $(window).height();
		  if(outerHeight > wdHeight && outzqbg > wdHeight){
		      $(".rule_info").css({"position":"absolute","height":outerHeight});
		  }else{
		      $(".rule_info").css({"position":"fixed","height":"100%"});
		      $(".rule_info_bg").css("top","5%");
		  }
		  $(".rule_info,.rule_info_bg").click(function(e){
		    e.stopPropagation();
		  });
		  $(".box_closed").click(function(){
		    $('.rule_info').fadeOut();
		  });
	}
});
