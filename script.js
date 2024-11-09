$(document).ready(function() {
    let isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    $(document).on(isTouchDevice ? 'touchstart' : 'click', function(event) {
        let $target = $(event.target);

        // Закрываем .dropdown, если клик был вне области .active_lang и .dropdown
        if (!$target.closest('.active_lang').length && !$target.closest('.dropdown').length) {
            $('.dropdown').hide();
        }
    });

	$(document).ready(function() {
		let isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;
	
		$(document).on(isTouchDevice ? 'touchstart' : 'click', function(event) {
			let $target = $(event.target);
			// Здесь можешь добавить условие для скрытия .mobile_main, если нужно
		});
	
		$(".informAccordion, .main-btn, .active_lang").on(isTouchDevice ? 'touchstart' : 'click', function(e) {
			e.stopPropagation(); // Предотвращаем дальнейшее всплытие события
	
			let $element = $(this);
	
			if ($element.hasClass("informAccordion")) {
				$element.find(".disclosure").toggle();
				$element.find('svg').toggleClass('rotate'); 
				$element.find('.informName').toggleClass('greyColor'); 
				$element.find('.informAtr svg path').toggleClass('whiteColor'); 
				$element.toggleClass('borderWhite'); 
			} else if ($element.hasClass("main-btn")) {
				let $mobileMain = $element.find('.mobile_main');
				let $openCloseBtn = $element.find('.open_close-btn');
	
				if ($openCloseBtn.is(e.target) || $openCloseBtn.find(e.target).length > 0) {
					$mobileMain.toggleClass('hide');
					$openCloseBtn.toggleClass('filter_invert');
					$('.left_content').toggleClass('filter_invert');
				}
			} else if ($element.hasClass("active_lang")) {
				$('.right_block').find(".dropdown").toggle();
			}
		});
	
		// Изменяем обработчик для ссылок внутри .mobile_main
		$('.mobile_main a').on('click', function(e) {
			let href = $(this).attr('href');
			if (href.charAt(0) === '#') {
				e.preventDefault(); // Предотвращаем дефолтное действие ссылки
				$('.mobile_main').addClass('hide');
				// Если нужно, добавьте дополнительные действия
				window.location.hash = href; // Устанавливаем якорь после скрытия .mobile_main
			}
		});
	});
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



	function translateToKazakh() {
		const content = document.getElementById('content').innerText;

		// Замени 'YOUR_API_KEY' на свой API ключ Google Translate
		const apiKey = 'AIzaSyCxfhwYRn5AiRhsSXbrA8E7ROSl9dxZLEE';
		const targetLanguage = 'kk'; // Код казахского языка

		const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
		const data = {
			q: content,
			target: targetLanguage,
		};

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then(response => response.json())
		.then(result => {
			const translatedText = result.data.translations[0].translatedText;
			document.getElementById('content').innerText = translatedText;
		})
		.catch(error => console.error('Ошибка:', error));
	}



	$(document).ready(function () {
		var $phone = $('#phone .phone');
		var $phoneBg = $('#phone .phone-bg');
		var $phoneWrap = $('#phone');
		var width = $phone.width();
		var height = $phone.height();
		var mouseX = 0;
		var mouseY = 0;
		var mouseLeaveDelay;

		function handleMouseMove(e) {
			var offset = $phoneWrap.offset();
			if (offset) {
				mouseX = e.pageX - offset.left - width / 2;
				mouseY = e.pageY - offset.top - height / 2;
				var mousePX = mouseX / width;
				var mousePY = mouseY / height;
				var rX = mousePX * 20;
				var rY = mousePY * -20;
				$phone.css('transform', 'rotateY(' + rX + 'deg) rotateX(' + rY + 'deg)');
			}
		}

		function handleMouseEnter() {
			clearTimeout(mouseLeaveDelay);
		}

		function handleMouseLeave() {
			mouseLeaveDelay = setTimeout(function () {
				mouseX = 0;
				mouseY = 0;
				$phone.css('transform', 'rotateY(0deg) rotateX(0deg)');
			}, 2000);
		}

		// Event Listeners
		$('#phone')
			.mousemove(handleMouseMove)
			.mouseenter(handleMouseEnter)
			.mouseleave(handleMouseLeave);

		// Set initial background image
		var dataImage = 'path_to_your_image.jpg'; // replace with your image path
		$phoneBg.css('background-image', 'url(' + dataImage + ')');
	});