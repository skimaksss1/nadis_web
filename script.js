$(document).ready(function() {
	addEventListener('load',()=>setTimeout(()=>{
		$(".informAccordion").click(function(){
			$(this).find(".disclosure").toggle();
			$(this).find('svg').toggleClass('rotate'); 
			$(this).find('.informName').toggleClass('greyColor'); 
			$(this).find('.informAtr svg path').toggleClass('whiteColor'); 
			$(this).toggleClass('borderWhite'); 
		});
		$(".main-btn").click(function(){
				$(this).find('.mobile_main').toggleClass('hide');
				$(this).find('.open_close-btn').toggleClass('filter_invert');
				$('.left_content').toggleClass('filter_invert');
		});
		$(".active_lang").click(function(){
			$('.right_block').find(".dropdown").toggle();
		});
		
	}))
});

$("body").on('click', '[href*="#"]', function(e){
	var fixed_offset = 100;
	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	e.preventDefault();
  });


  function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		change.target.classList.add('element-show');
		}
	});
	}

	let options = {
	threshold: [0.25] };
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll('.element-animation');

	for (let elm of elements) {
	observer.observe(elm);
	}




	var $spiro = $('.nadis_circle'),
    $body = $('body'),
    bodyHeight = $body.height();

	function getScrollTop() {
		if (typeof pageYOffset != 'undefined') {
			//most browsers except IE before #9
			return pageYOffset;
		} else {
			var B = document.body; //IE 'quirks'
			var D = document.documentElement; //IE with doctype
			D = (D.clientHeight) ? D : B;
			return D.scrollTop;
		}
	}

	// $(window).scroll(function () {
	// 	var scroll = getScrollTop();
	// 	$('.nadis_circle').css({
	// 		'transform': 'rotate(' + (scroll / bodyHeight * 800) + 'deg)',
	// 		'-moz-transform': 'rotate(' + (scroll / bodyHeight * 800) + 'deg)',
	// 		'-ms-transform': 'rotate(' + (scroll / bodyHeight * 800) + 'deg)',
	// 		'-o-transform:rotate': 'rotate(' + (scroll / bodyHeight * 800) + 'deg)'
	// 	});
	// });

	const sun = document.querySelector(".nadis_circle");

	window.addEventListener("scroll", () => {
		  const scroll = window.scrollY;
		  sun.style.transform = `rotate(${scroll / 10}deg)`;
	});




	

	let viewHeight = window.innerHeight;
	let viewWidth = window.innerWidth;

	let textContainers = document.querySelectorAll('.text-container');

	textContainers.forEach((element, index) => {
	let top = element.getBoundingClientRect().top;
	let start = 0;

	let firstText = element.querySelector('.parallax-text:first-child');
	let secondText = element.querySelector('.parallax-text:last-child');

	gsap.to(firstText, {
		scrollTrigger: {
		trigger: element,
		scrub: true,
		start: start + "px bottom",
		end: "bottom top"
		},
		x: '-20vw',
		transformOrigin: "left center", 
		ease: "none"
	});
	gsap.to(secondText, {
		scrollTrigger: {
		trigger: element,
		scrub: true,
		start: start + "px bottom",
		end: "bottom top"
		},
		x: '40vw',
		transformOrigin: "left center", 
		ease: "none"
	});
	});

	// // for presentation
	// let tl = gsap.timeline({
	//   repeat: -1
	// });

	// tl.set({}, {}, 0.6);
	// tl.to(window, {
	//   duration: 4,
	//   scrollTo: {
	//     y:"max"
	//   },
	//   ease: Power2.easeInOut
	// });
	// tl.to(window, {
	//   delay: 0.6,
	//   duration: 4,
	//   scrollTo: 0,
	//   ease: Power2.easeInOut
	// });

	window.onmousemove = function(e) {
		w = document.documentElement.clientWidth;
		h = document.documentElement.clientHeight;
		let offsetX = 0.5 - e.pageX / w;
		let offsetY = 0.5 - e.pageY / h;
		
		let div = document.querySelectorAll("div");
		console.log(div.toString());
		
		for(let i = 0; i < div.length; i++) {
			let data = div[i].getAttribute("data-offset");
			data = parseInt(data);
			let trans = "translate3d("+Math.round(offsetX*data)+"%,"+Math.round(offsetY*data)+"%, 0)";
			div[i].style.transform = trans;
		}
	}



