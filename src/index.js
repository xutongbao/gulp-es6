$(function() { 
	let people = new People('新内容');
	$('#back').click(function() {
		let mytlpShow = $('#mytpl>div[data-show=true]');
		let mytlpShowNext = mytlpShow.prev();
		if (mytlpShowNext.length > 0) {
			mytlpShow.removeClass('block').addClass('none').attr('data-show', false);
			mytlpShowNext.removeClass('none').addClass('block').attr('data-show', true);
		}
	});
	$('#next').click(function() {
		let mytlpShow = $('#mytpl>div[data-show=true]');
		let mytlpShowNext = mytlpShow.next();
		if (mytlpShowNext.length > 0) {
			mytlpShow.removeClass('block').addClass('none').attr('data-show', false);
			mytlpShowNext.removeClass('none').addClass('block').attr('data-show', true);
		}
	});
	var a = 3;
});
