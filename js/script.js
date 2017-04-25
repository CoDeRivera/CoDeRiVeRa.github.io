
$('.default').hide();
$('#left-door').hide();
$('#right-door').hide();
                  
$('#navbar li').click(function(){
	$('#left-door').animate({width:'toggle'}).delay(450).animate({width:'toggle'});
	$('#right-door').animate({width:'toggle'}).delay(450).animate({width:'toggle'});
	$('.default').delay(500).fadeOut();
	$('#' + this.id +'-content').fadeToggle();
});

