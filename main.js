$(function(){
	
	$(".content").css('display', 'none');
	$(".content").css('top','100%');
	$(".nav ul li").mouseover(function(){
		$(".nav").stop().animate({
			width:"320px",
				
		});

		$(this).stop().animate({
			padding:"40px",
			opacity:"0.9",
			fontSize:"20px"
		});		
	});



	$(".nav ul li").mouseout(function(event) {

		$(this).stop().animate({
			padding:"10px",
			opacity:"0.5",
			fontSize:"16px"
		});
	});



	$(".nav ul li").click(function(event) {
		if($(this).text()!='我的博客'&&$(this).text()!='Github')
		{
		$(".sidebar").animate({
				width:"320px",
		},600,function(){
		
		

		$(".content").css('display', 'block').find('p.h').text( $(event.target).text());
			$(".content").animate({top:"0"}, 1000);
		});

		$(this).siblings().
		bind('mouseout',function(){
				$(this).stop().animate({
			padding:"10px",
			opacity:"0.5",
			fontSize:"16px"
		});}).
		trigger('mouseout');

		$(this).unbind('mouseout');

	
			$(".content").css('display', 'block').find('p.h').text( $(event.target).text());
		$(".content").animate({top:"0"}, 1000);
	
		}
	});


	$(".nav ul li").click(function(event)
	{
	setTimeout(function()
	{
		$(".content .person .item1").animate({
			left:"400px",
			
		},800);
	}, 1000);

	
		var i=0;

		setTimeout(function(){
		var timer=setInterval(function(){

		$(".content .person .item2 li:eq("+i++ +")").animate({
			left:"0px",
		},500);	

		},500);
		},1000);




		setTimeout(function(){
			clearInterval(timer);
		},5000);


	});



});