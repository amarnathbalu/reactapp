	$('#J_slideShowY').slideShow({ 'events': 'click', 'type': 'y', 'speed': 800, 'time': 2400, 'plus': false, 'minus': false});
var path = window.location.pathname;
var page = path.split("/").pop();

if(page =='itemlist'){	
	

	 $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#header').fadeIn();
		$('.bg-image').fadeOut();
		$('.sidebar').css('top',63);
     }
    else
     {
      $('#header').fadeOut();
	  $('.bg-image').fadeIn();
	  $('.sidebar').css('top',241);
     }
 });
}


