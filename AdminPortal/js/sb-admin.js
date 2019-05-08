(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle").on('click', function(e) {
    e.preventDefault();
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
  
  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
  

  $(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	});

  
  var menu = document.querySelector('.nav-bar');
  var menuPosition = menu.getBoundingClientRect();
  var placeholder = document.createElement('div');
  placeholder.style.width = menuPosition.width + 'px';
  placeholder.style.height = menuPosition.height + 'px';
  var isAdded = false;

  window.addEventListener('scroll', function() {
      if (window.pageYOffset >= menuPosition.top && !isAdded) {
          menu.classList.add('sticky');
          menu.parentNode.insertBefore(placeholder, menu);
          isAdded = true;
      } else if (window.pageYOffset < menuPosition.top && isAdded) {
          menu.classList.remove('sticky');
          menu.parentNode.removeChild(placeholder);
          isAdded = false;
      }
  });
  
})(jQuery); // End of use strict
