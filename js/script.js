var link = document.querySelector(".write-to-us");
var writetous = document.querySelector(".write-to-us-block");
var closeicon = document.querySelector(".write-to-us-close");
var closewritetous = document.querySelector(".write-to-us-block");

link.addEventListener("click", function(event) {
	event.preventDefault();
	writetous.classList.add("write-to-us-show");
});
closeicon.addEventListener("click", function(event) {
	event.preventDefault();
	closewritetous.classList.remove("write-to-us-show");
});


