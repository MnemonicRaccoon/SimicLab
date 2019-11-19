// Terrenos
var plains = {
    "title": "Planície",
	"img": "../display/plains.png",
	"alt": "Planície da Alpha, primeira edição de Magic: The Gathering."
};

var island = {
    "title": "Ilha",
	"img": "../display/island.png",
	"alt": "Ilha da Alpha, primeira edição de Magic: The Gathering."
};
var swamp = {
    "title": "Pântano",
	"img": "../display/swamp.png",
	"alt": "Pântano da Alpha, primeira edição de Magic: The Gathering."
};
var mountain = {
    "title": "Montanha",
	"img": "../display/mountain.png",
	"alt": "Montanha da Alpha, primeira edição de Magic: The Gathering."
};
var forest = {
    "title": "Floresta",
	"img": "../display/forest.png",
	"alt": "Floresta da Alpha, primeira edição de Magic: The Gathering."
};

var gigantossauro = {
    "title": "Gigantossauro",
	"img": "../display/gigantossauro.jpg",
	"alt": "Gigantossauro, custo de mana de cinco verdes."
};

var krenko = {
    "title": "Krenko",
	"img": "../display/krenko.jpg",
	"alt": "Krenko, custo de mana de duas genéricas e uma vermelha"
}

var gorgon = {
    "title": "Górgona Impiedosa",
	"img": "../display/gorgon.jpg",
	"alt": "Krenko, custo de mana de uma genérica e duas híbridas (verde e preto)."
}

var krasis = {
    "title": "Krasis Hidroide",
	"img": "../display/krasis.jpg",
	"alt": "Krasis Hidroide, com custo de mana de X, uma verde e uma azul. Entra com X marcadores +1/+1."
}

var jovem = {
    "title": "Jovem para Sempre",
	"img": "../display/jovem.jpg",
	"alt": "Coloque qualquer número de cards de criatura alvo do seu cemitério no topo de seu deck. Compre uma carta."
}

var ira = {
    "title": "Ira de Kaya",
	"img": "../display/ira.jpg",
	"alt": "Destrua todas as criaturas."
}




// Display
function display(x) {
    if ($(window).width()<=768) {
        $('#myModal').modal('show');
    };
	$("#side-img").attr("src", "");
	$("#modal-img").attr("src", "");
	$("#side-img").attr("src", x.img);
	$("#side-img").attr("alt", x.alt);
	$("#modal-title").html(x.title);
    $("#modal-img").attr("src", x.img);
};


// Hero
$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

// Popover
$(document).ready(function(){
  $('[data-toggle="popover"]').popover({html: true, placement: "top", trigger: "focus"});   
});