
$('.default').hide();
$('#left-door').hide();
$('#right-door').hide();
                  
$('#navbar li').click(function(){
	$('#left-door').animate({width:'toggle'}).delay(450).animate({width:'toggle'});
	$('#right-door').animate({width:'toggle'}).delay(450).animate({width:'toggle'});
// 	$('.default').delay(200).fadeOut();
	$('#' + this.id +'-content').show();
});



$('#clear').click (function(){
	$('.default').fadeToggle();
});	

$('#activate').click(function(){
	$('#left-door').animate({width:'toggle'});
	$('#right-door').animate({width:'toggle'})
});

