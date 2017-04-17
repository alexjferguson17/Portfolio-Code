console.log('Test');
$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		navigation: true,
		navigationPosition: 'right',
		slidesNavigation: true,
		loopBottom: true,
	});
});

jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});

