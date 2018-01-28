var count = 0;
var index = 0;
var timer;
var height = 0;
carousel();
function carousel() {
	clearTimeout(timer);
  var i;
  $("#slide1").attr("style","display:none");
  $("#slide2").attr("style","display:none");
  if(index%2 == 0){
  	$("#slide1").attr("style","display:block");
  } 
  else{
  	$("#slide2").attr("style","display:block");
  }
  index++;
  timer = setTimeout(carousel, 8000);
}
$(document).ready(function(){
	$("#home").attr("style", "display:block");
	$("#example").attr("style", "display:none");
	$("#feedback").attr("style", "display:none");
	$("#image-effect").attr("style", "display:none");
	$("#contact-us").attr("style", "display:none");
});
function openNav() {
  var x = document.getElementById("topnav");
  if (x.className == "topnav") {

  console.log("a");
    x.className += " responsive";
  } else {
  console.log("!a");
    x.className = "topnav";
  }
}
function openBlock(blockName){
	$("#welcome").attr("style","display:none;");
	$("#welcome-links").attr("style","display:none;");
	$("#container").attr("style","display:block;");
	if(blockName == "home" || blockName == "example"){
		$("#right-block").attr("style", "display:block");
	}
	else{
		$("#right-block").attr("style", "display:none");
	}
	$("#home-link").removeClass("active");
	$("#example-link").removeClass("active");
	$("#feedback-link").removeClass("active");
	$("#image-effect-link").removeClass("active");
	$("#contact-us-link").removeClass("active");
	$("#"+blockName+"-link").addClass("active");
	$("#home").attr("style", "display:none");
	$("#example").attr("style", "display:none");
	$("#feedback").attr("style", "display:none");
	$("#image-effect").attr("style", "display:none");
	$("#contact-us").attr("style", "display:none");
	$("#"+blockName).attr("style", "display:block");
}
function glow(){
	if(count%2 == 0){
		$("#switch").attr("style","background-color:red");
		$("#bulb").attr("src","assets/images/bulbon.png");
		$("#switch").text("Switch on");
		count++;
	}
	else{
		$("#switch").attr("style","background-color:green");
		$("#bulb").attr("src","assets/images/bulboff.png");
		$("#switch").text("Switch off");
		count++;
	}
}
popup = function() {
	$("#commenter").val(null);
	$("#comment").val(null);
  $("#modal").attr("style","display:block;");
}
closeModel = function() {
  $("#modal").attr("style","display:none;");
}
window.onclick = function(event) {
  if (event.target == modal) {
    $("#modal").attr("style","display:none;");
  }
}
var i=1;
function addComment(commenter,comment){
	var row = '<tr><td> ' + i + ' </td> <td> ' + commenter + ' </td> <td>' + comment + '</td></tr>';
  $("#comments").append(row);
  i++;
  closeModel();
}
function showImage(){
	console.log(height++);
	if(height>100){
		$("#welcome-links img").attr("style","display:block;");
	}
	if(height>130){
		$("#container").attr("style","display:block;");
	}
	if(height>250){
		$("#welcome").attr("style","display:none;");
		$("#welcome-links").attr("style","display:none;");
	}
}