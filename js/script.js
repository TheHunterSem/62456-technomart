var link = document.querySelector(".write-to-us");
var writetous = document.querySelector(".write-to-us-block");
var closeicon = document.querySelector(".write-to-us-close");
var write = writetous.querySelector("[name=name]");

link.addEventListener("click", function(event) {
	event.preventDefault();
	writetous.classList.add("write-to-us-show");
	write.focus();
});

closeicon.addEventListener("click", function(event) {
	event.preventDefault();
	writetous.classList.remove("write-to-us-show");
});

var linksb1 = document.querySelector(".services-btn1");
var linksb2 = document.querySelector(".services-btn2");
var linksb3 = document.querySelector(".services-btn3");
var tabcontent1 = document.querySelector(".tab-content1");
var tabcontent2 = document.querySelector(".tab-content2");
var tabcontent3 = document.querySelector(".tab-content3");

linksb1.addEventListener("click", function(event) {
	event.preventDefault();
	linksb1.classList.add("showservices");
	linksb2.classList.remove("showservices");
	linksb3.classList.remove("showservices");
	tabcontent1.classList.remove("closetab");
	tabcontent2.classList.add("closetab");
	tabcontent3.classList.add("closetab");
});

linksb2.addEventListener("click", function(event) {
	event.preventDefault();
	linksb1.classList.remove("showservices");
	linksb2.classList.add("showservices");
	linksb3.classList.remove("showservices");
	tabcontent1.classList.add("closetab");
	tabcontent2.classList.remove("closetab");
	tabcontent3.classList.add("closetab");
});

linksb3.addEventListener("click", function(event) {
	event.preventDefault();	
	linksb1.classList.remove("showservices");
	linksb2.classList.remove("showservices");
	linksb3.classList.add("showservices");
	tabcontent1.classList.add("closetab");
	tabcontent2.classList.add("closetab");
	tabcontent3.classList.remove("closetab");
});

var linkmap = document.querySelector(".map-link");
var modalmap = document.querySelector(".modal-map");
var linkclosemap = document.querySelector(".closemap-icon");

linkmap.addEventListener("click", function(event) {
	event.preventDefault();	
	modalmap.classList.remove("close-map");
linkclosemap.addEventListener("click", function(event) {
	event.preventDefault();
	modalmap.classList.add("close-map");
});});


var linkbuy = document.querySelectorAll(".actions .buy");

linkbuy.addEventListener("click", function(event) {
	event.preventDefault();
});