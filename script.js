$(document).ready(function() {
	addEventListener('load',()=>setTimeout(()=>{
		$(".informAccordion").click(function(){
			$(this).find(".disclosure").toggle();
				$(this).find('svg').toggleClass('rotate'); 
				$(this).find('.informName').toggleClass('greyColor'); 
				$(this).find('.informAtr svg path').toggleClass('whiteColor'); 
				$(this).toggleClass('borderWhite'); 
			});
	}))
});