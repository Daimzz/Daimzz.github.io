$(function () {
	// ============== Parallax effect


	function parallax(event) {

		this.querySelectorAll('.intro__layer').forEach(intro__layer => {
			let speed = intro__layer.getAttribute('data-speed');


			intro__layer.style.transform = `translateX(${event.clientX * speed / 1800}px)`

		});
	}

	document.addEventListener('mousemove', parallax);


	// ================================


	// ================= burger menu

	$('.header__burger').click(function (event) {
		$('.header__menu, .header__burger').toggleClass('active');

		$('body').toggleClass('lock');
		if ($('.header__menu').is('.active')) {
			$('.header__social').addClass('detached');
			$('.header__social').appendTo('.header__menu');
		}
		else {
			$('.header__social').removeClass('detached');
			$('.header__social').appendTo('.header__col:last-child');
		}
	});

	$(window).resize(function (event) {
		if (window.innerWidth > 768) {
			$('.header__menu, .header__burger').removeClass('active');
			$('.header__social').removeClass('detached');
			$('body').removeClass('lock');
		}

	});

	// =================

	// ================= slick slider

	$('.widgets__wrapper').slick({
		infinite: true,
		speed: 300,
		centerMode: true,
		centerPadding: '0px',

		slidesToShow: 3,

		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,

				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,

				}
			}
		]

	});
	// =================


	// ================= smooth scroll


	$('[data-scroll]').click(function (event) {
		let idData = $(this).attr("data-scroll");
		let scrollData = $(idData).offset().top;

		$('.header__menu').removeClass('active');
		$('body').removeClass('lock');

		$('html, body').animate({
			scrollTop: scrollData - 50
		}, 1000)

	});
	$('.intro__circle').click(function (event) {
		event.preventDefault();
		let scrollButtonData = $("#features").offset().top;




		$('html, body').animate({
			scrollTop: scrollButtonData - 50
		}, 1000)


	});


	// ================= intro + padding-top

	$(window).scroll(function () {
		if ($('header').is('.fixed')) {
			$('.intro__inner').css({
				"padding-top": "90px"
			})


		}
		else {
			$('.intro__inner').css({
				"padding-top": "0px"
			})
		}
	});
	//=================

	// ================= fixed header

	let header = $('#header');
	let features = $('#features');
	let featuresHeight = features.offset().top;
	let scrollPos = $(window).scrollTop();
	checkScroll(featuresHeight, scrollPos);

	$(window).on('scroll resize unload', function () {
		let featuresHeight = features.offset().top;
		let scrollPos = $(window).scrollTop();
		checkScroll(featuresHeight, scrollPos);
	});

	function checkScroll(featuresHeight, scrollPos) {
		if (scrollPos >= featuresHeight - 50) {
			header.addClass('fixed');
		}
		else {
			header.removeClass('fixed');
		}
	}

	// =================


});