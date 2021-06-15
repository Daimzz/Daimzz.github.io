$(document).ready(function () {

	$('.customer__item').slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true
	});

	// ================= burger menu

	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$(window).resize(function (event) {
		if (window.innerWidth > 768)
			$('.header__burger,.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});

	// =================


	// ================= fixed header

	let header = $('#header');
	let services = $('#services');
	let servicesHeight = services.offset().top;
	let scrollPos = $(window).scrollTop();
	checkScroll(servicesHeight, scrollPos);

	$(window).on('scroll resize unload', function () {
		let servicesHeight = services.offset().top;
		let scrollPos = $(window).scrollTop();
		checkScroll(servicesHeight, scrollPos);
	});

	function checkScroll(servicesHeight, scrollPos) {
		if (scrollPos >= servicesHeight) {
			header.addClass('fixed');
		}
		else {
			header.removeClass('fixed');
		}
	}

	// =================


	// ================= smooth scroll

	$('.header__menu-link').click(function (event) {
		event.preventDefault();
		let getId = $(this).attr('data-scroll');
		console.log(getId);
		let getOffset = $(getId).offset().top;
		console.log(getOffset);

		$('.header__burger,.header__menu').removeClass('active');

		$('html, body').animate({
			scrollTop: getOffset
		}, 1000);

	});

	// =================


});