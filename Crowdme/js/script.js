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

	$('.header__burger').click(function (event) {
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
			$('body').removeClass('lock');
		}

	});



});



