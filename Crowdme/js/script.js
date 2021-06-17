$(function () {



	// ================= slick slider

	$('.intro').slick({
		infinite: true,
		speed: 300,

		nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
		prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
		slidesToShow: 1,



	});
	// =================


	// ================= tabs

	$('input[type="radio"]').on('click', function () {
		$('input[type="radio"]').removeClass("active");
		$(this).addClass("actived");
		let dataInfo = $(this).attr("data-tab");
		$('.work__tab-content').removeClass('actived').removeClass("in");
		let id = $(dataInfo).addClass('actived');
		setTimeout(function () {
			$(dataInfo).addClass('in');
		}, 200);

	});

	//================= burger

	$('.header__burger').on("click", function (event) {
		$('.header__list, .header__burger').toggleClass('active');

		$('body').toggleClass('lock');
		if ($('.header__list').is('.active')) {
			$('.header__btn').addClass('detached');
			$('.header__btn').appendTo('.header__list');
		}
		else {
			$('.header__btn').removeClass('detached');
			$('.header__btn').appendTo('.header__inner');
		}
	});

	$(window).resize(function (event) {
		if (window.innerWidth > 768) {
			$('.header__list, .header__burger').removeClass('active');
			$('.header__btn').removeClass('detached');
			$('.header__btn').appendTo('.header__inner');
			$('body').removeClass('lock');
		}

	});

	//========= smooth scroll

	$('[data-link]').on("click", function (event) {
		event.preventDefault();
		let dataId = $(this).attr("data-link");

		let dataScroll = $(dataId).offset().top;
		$('.header__burger,.header__list').removeClass('active');
		$('body').removeClass('lock');
		$('html, body').animate({
			scrollTop: dataScroll
		}, 1000)


	})

	//========== fixed header


	let scrollPos = $(window).scrollTop();
	let fixedHeight = $('#work').offset().top;
	let header = $('#header');
	fixControl();

	$(window).on("scroll resize", function () {
		scrollPos = $(window).scrollTop();
		fixedHeight = $('#work').offset().top;
		fixControl();


	});
	function fixControl() {
		if (scrollPos > fixedHeight) {
			$(header).addClass("fixed");
		}
		else {
			$(header).removeClass("fixed");
		}
	}


});



