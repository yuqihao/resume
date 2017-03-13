$(function(){
	
	$(".content").css('display', 'none');

	$(".nav ul li").mouseover(function(){
		$(".nav").stop().animate({
			width:"320px",
				
		});

		$(this).stop().animate({
			padding:"40px",
			opacity:"0.9",
			fontSize:"20px"
		},function(){

		$(this).css('boxShadow', '0 0 10px #aaa');
		}).
		addClass('animated pulse');
	});



	$(".nav ul li").mouseout(function(event) {

		$(this).stop().animate({
			padding:"10px",
			opacity:"0.5",
			fontSize:"16px"
		},function(){
		
		$(this).css('boxShadow', 'none');
		}).
		removeClass('animated pulse');
	});



	$(".nav ul li").click(function(event) {
		if($(this).text()!='我的博客'&&$(this).text()!='Github')
		{
		$(".sidebar").animate({
				width:"320px",
		},600,function(){
		
		

		$(".content").css('display', 'block').find('p').text( $(event.target).text());
		$(".content").addClass('animated rotateInUpLeft');
		});

		$(this).siblings().
		bind('mouseout',function(){
				$(this).stop().animate({
			padding:"10px",
			opacity:"0.5",
			fontSize:"16px"
		},function(){
			$(this).css('boxShadow', 'none');
		}).
		removeClass('animated shake');;
		}).
		trigger('mouseout');

		$(this).unbind('mouseout');

		$(".content").css('display','none',function(){
			$(".content").css('display', 'block').find('p').text( $(event.target).text());
		$(".content").addClass('animated rotateInUpLeft');
		});
		}
	});






});