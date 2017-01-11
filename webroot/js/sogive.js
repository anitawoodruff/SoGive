// The 'Get email updates' button's functionality
$(document).ready(function (){
	$('#getemailupdates').click(function() {
		$('#getemailupdatesdiv').removeClass('hidden')
		$('#getemailupdatesdiv').toggle( "unfold" );
	});
});

// The 'Get Involved' button's functionality
$(document).ready(function (){
	$('#getinvolvedbutton').click(function() {
		$('#getinvolved-div').removeClass('hidden')
		$('#getinvolved-div').slideToggle();
	});
});

// Parallax Scrolling on Jumbotron
$(document).ready(function() {
	var jumboHeight = $('.jumbotron').outerHeight();
	function parallax(){
    	var scrolled = $(window).scrollTop();
    	$('.bg').css('height', (jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
    	parallax();
	});
});
