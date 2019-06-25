$(document).ready(function(){	
	var p = "p";
	randomtip(p);
});

this.randomtip = function(tag){
	var pause = 6000;
	var length = $("#tips "+ tag).length; 
	var temp = -1;		
	this.getRan = function(){
	var ran = Math.floor(Math.random()*length) + 1;
	return ran;
};
	this.show = function(){
	var ran = getRan();
	while (ran == temp){
		ran = getRan();
	}; 
	temp = ran;
	$("#tips "+ tag).hide();	
	$("#tips "+ tag +":nth-child(" + ran + ")").fadeIn("fast");		
};
show(); setInterval(show,pause);
};

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
};
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
};

function dropdown(){
	var a = "a";
	var x = document.getElementById("dropdown");
	if (x.style.display === "none") {
		x.style.display = "block";
	  } else {
		x.style.display = "none";
	  }
	  randomtip(a);
}
function dropdownClose(){
	var x = document.getElementById("dropdown");
		x.style.display = "none";
		
}
