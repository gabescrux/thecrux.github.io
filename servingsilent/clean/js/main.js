;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Burger Menu
	var burgerMenu = function() {
		$('body').on('click', '.js-fh5co-nav-toggle', function(){
			if ( $('#fh5co-navbar').is(':visible') ) {
				$(this).removeClass('active');	
			} else {
				$(this).addClass('active');	
			}
			
		});
	};
	
	
	//include html
	(function () {
		myHTMLInclude();
		function myHTMLInclude() {
		  var z, i, a, file, xhttp;
		  z = document.getElementsByTagName("*");
		  for (i = 0; i < z.length; i++) {
		    if (z[i].getAttribute("html")) {
		      a = z[i].cloneNode(false);
		      file = z[i].getAttribute("html");
		      var xhttp = new XMLHttpRequest();
		      xhttp.onreadystatechange = function() {
		        if (xhttp.readyState == 4 && xhttp.status == 200) {
		          a.removeAttribute("html");
		          a.innerHTML = xhttp.responseText;
		          z[i].parentNode.replaceChild(a, z[i]);
		          myHTMLInclude();
		        }
		      }      
		      xhttp.open("GET", file, true);
		      xhttp.send();
		      return;
		    }
		  }
		}

		})();


	// Animate Projects
	
	var animateBox = function() {
		if ( $('.animate-box').length > 0 ) {
			$('.animate-box').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					$(this.element).addClass('fadeIn animated');
						
				}
			} , { offset: '80%' } );
		}
	};


	// Animate Leadership
	var animateTeam = function() {
		if ( $('#fh5co-team').length > 0 ) {	
			$('#fh5co-team .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					console.log('yaya');
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};
	var teamWayPoint = function() {
		if ( $('#fh5co-team').length > 0 ) {
			$('#fh5co-team').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {

					setTimeout(animateTeam, 200);
					
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );
		}
	};


	// Animate Feature
	var animateFeatureIcons = function() {
		if ( $('#fh5co-services').length > 0 ) {	
			$('#fh5co-services .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('bounceIn animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};
	var featureIconsWayPoint = function() {
		if ( $('#fh5co-services').length > 0 ) {
			$('#fh5co-services').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					
					
					

					setTimeout(animateFeatureIcons, 200);
					
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '80%' } );
		}
	};

	$(function(){
		
		burgerMenu();
		animateBox();
		teamWayPoint();
		featureIconsWayPoint();
		
		

	});


}());

this.randomtip = function(){

	var pause = 6000; // define the pause for each tip (in milliseconds) Feel free to make the pause longer so users can have time to read the tips :)
	var length = $("#tips li").length; 
	var temp = -1;		

	this.getRan = function(){
		// get the random number
		var ran = Math.floor(Math.random()*length) + 1;
		return ran;
	};
	this.show = function(){
		var ran = getRan();
		// to avoid repeating tips we need to check 
		while (ran == temp){
			ran = getRan();
		}; 
		temp = ran;
		$("#tips li").hide();	
		$("#tips li:nth-child(" + ran + ")").fadeIn("fast");		
	};
	// initiate the script and also set an interval
	show(); setInterval(show,pause);
	
};

$(document).ready(function(){	
	randomtip();
})