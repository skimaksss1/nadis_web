$(document).ready(function() {
	addEventListener('load',()=>setTimeout(()=>{
		$(".informAccordion").click(function(){
			$(this).find(".disclosure").toggle();
				$(this).find('svg').toggleClass('rotate'); 
				$(this).find('.informName').toggleClass('greyColor'); 
				$(this).find('.informAtr svg path').toggleClass('whiteColor'); 
				$(this).toggleClass('borderWhite'); 
		});
		$(".right_content").click(function(){
				$(this).find('.mobile_main').toggleClass('hide');
				$(this).find('.open_close-btn').toggleClass('filter_invert');
				$('.left_content').toggleClass('filter_invert');
		});
	}))
});

$("body").on('click', '[href*="#"]', function(e){
	var fixed_offset = 100;
	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	e.preventDefault();
  });