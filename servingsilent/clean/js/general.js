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

var burgerMenu = function() {
	$('body').on('click', '.js-fh5co-nav-toggle', function(){
		if ( $('#fh5co-navbar').is(':visible') ) {
			$(this).removeClass('active');	
		} else {
			$(this).addClass('active');	
		}
		
	});
};

$(document).ready(function(){	
	randomtip();
	burgerMenu();
});