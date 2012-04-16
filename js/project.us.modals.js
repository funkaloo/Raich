$(document).ready(function() {
  	
    // $('.modal-body').jScrollPane();
  $('.dropdown-toggle').dropdown();
  $('.chzn-select').chosen();
  
      // fix sub nav on scroll
  var $win = $(window)
    , $nav = $('.subnav')
    , navTop = $('.subnav').length && $('.subnav').offset().top - 40
    , isFixed = 0;

  processScroll();

  $win.on('scroll', processScroll);

  function processScroll() {
    var i, scrollTop = $win.scrollTop();
    if (scrollTop >= navTop && !isFixed) {
      isFixed = 1;
      $nav.addClass('subnav-fixed');
    } else if (scrollTop <= navTop && isFixed) {
      isFixed = 0;
      $nav.removeClass('subnav-fixed');
    }
  }
  $('.subnav').scrollspy();
  $('.carousel').carousel({interval:50000});
  
/*
  $('#summary').editable({
  	'state': 'preview',
  });
  $('.preview-or-edit').on('edit', function() {
  	// test
  });
  */
  
	$('.modal').on('shown', function() {
		
			$('.scrollable').jScrollPane({
		    horizontalGutter:5,
		    verticalGutter:5,
		    'showArrows': false
			});
			
			$('.jspDrag').hide();
			$('.jspScrollable').mouseenter(function(){
		    $(this).find('.jspDrag').stop(true, true).fadeIn('slow');
			});
				$('.jspScrollable').mouseover(function(){
		    $(this).find('.jspDrag').stop(true, true).fadeIn('slow');
			});
			$('.jspScrollable').mouseleave(function(){
		    $(this).find('.jspDrag').stop(true, true).fadeOut('slow');
			});			
	});

	/*
		$('.modal-body').jScrollPane({
	    horizontalGutter:5,
	    verticalGutter:5,
	    'showArrows': false
		});
		
		
		$('.jspDrag').hide();
		$('.jspScrollable').mouseenter(function(){
	    $(this).find('.jspDrag').stop(true, true).fadeIn('slow');
		});
		$('.jspScrollable').mouseleave(function(){
	    $(this).find('.jspDrag').stop(true, true).fadeOut('slow');
		});
		*/
});