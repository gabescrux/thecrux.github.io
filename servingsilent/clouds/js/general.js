this.randomtip = function(){

	var pause = 6000; // define the pause for each tip (in milliseconds) Feel free to make the pause longer so users can have time to read the tips :)
	var length = $("#tips p").length; 
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
		$("#tips p").hide();	
		$("#tips p:nth-child(" + ran + ")").fadeIn("fast");		
	};
	// initiate the script and also set an interval
	show(); setInterval(show,pause);
	
};

$(document).ready(function(){	
	randomtip();
});