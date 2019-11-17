// Terrenos
var plains = {
    "title": "Planície",
	"img": "/display/plains.png",
	"alt": "Planície da Alpha, primeira edição de Magic: The Gathering."
};

var island = {
    "title": "Ilha",
	"img": "/display/island.png",
	"alt": "Ilha da Alpha, primeira edição de Magic: The Gathering."
};
var swamp = {
    "title": "Pântano",
	"img": "/display/swamp.png",
	"alt": "Pântano da Alpha, primeira edição de Magic: The Gathering."
};
var mountain = {
    "title": "Montanha",
	"img": "/display/mountain.png",
	"alt": "Montanha da Alpha, primeira edição de Magic: The Gathering."
};
var forest = {
    "title": "Floresta",
	"img": "/display/forest.png",
	"alt": "Floresta da Alpha, primeira edição de Magic: The Gathering."
};

// Display
function display(x) {
    if ($(window).width()<=768) {
        $('#myModal').modal('show');
    };
    document.getElementById("sidebar").display="block";
	if (x.img === "none") {
		document.getElementById("side-img").src = ("");
		document.getElementById("side-txt").innerHTML = (x.txt);
	} else	document.getElementById("side-img").src = (x.img);
	document.getElementById("side-img").alt = (x.alt);
	document.getElementById("modal-title").innerHTML = (x.title);
    document.getElementById("modal-img").src = (x.img);   
};



// Navbar 
function hambMenu() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


// Hero
$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

// Popover
$(document).ready(function(){
  $('[data-toggle="popover"]').popover({html: true, placement: "top", trigger: "focus"});   
});