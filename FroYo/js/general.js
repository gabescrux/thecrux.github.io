function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            elmnt.removeAttribute("html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  };

  function autoType(elementClass, typingSpeed){
var thhis = $(elementClass);
thhis.css({
  "position": "relative",
  "display": "inline-block"
});
thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
thhis = thhis.find(".text-js");
var text = thhis.text().trim().split('');
var amntOfChars = text.length;
var newString = "";
thhis.text("|");
setTimeout(function(){
  thhis.css("opacity",1);
  thhis.prev().removeAttr("style");
  thhis.text("");
  for(var i = 0; i < amntOfChars; i++){
    (function(i,char){
      setTimeout(function() {        
        newString += char;
        thhis.text(newString);
      },i*typingSpeed);
    })(i+1,text[i]);
  }
},1500);
}

$(document).ready(function(){ 
autoType(".type-js",200);
});

var version = detectIE();
if (version === false) {
  document.getElementById('result').innerHTML = '';
  document.getElementById('msgDiv').style.display = 'none';
} else if (version >= 15) {
  document.getElementById('result').innerHTML = '';
  document.getElementById('msgDiv').style.display = 'none';
} else {
  document.getElementById('result').innerHTML = ':( Internet Explorer ' + version + ' is not supported. For the best experience please choose a different browser.';
  document.getElementById('msgDiv').style.display = 'block';
}
function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }
  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }
  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }
  return false;
}