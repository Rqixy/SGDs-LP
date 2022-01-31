//ロゴのフェードイン
$(function() {
	setTimeout(function(){
		$('.logo-fade-in p').fadeIn(1000);
	},500);
	setTimeout(function(){
		$('.logo-fade-in').fadeOut(1000);
	},2500);
});

//スクロール時のフェードイン
$(function () {
	var fadeIn = $('.fade-in');
	$(window).on('scroll', function () {
	    $(fadeIn).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop(); 
            var windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 150) {
                $(this).addClass("scroll-in");
            }
	    });
	});
});