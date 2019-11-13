// Terrenos
var plains = {
	"img": "../display/plains.png",
	"txt": "Planície da Alpha, primeira edição de Magic: The Gathering."
};

var island = {
	"img": "../display/island.png",
	"txt": "Ilha da Alpha, primeira edição de Magic: The Gathering."
}
var swamp = {
	"img": "../display/swamp.png",
	"txt": "Pântano da Alpha, primeira edição de Magic: The Gathering."
}
var mountain = {
	"img": "../display/mountain.png",
	"txt": "Montanha da Alpha, primeira edição de Magic: The Gathering."
}
var forest = {
	"img": "../display/forest.png",
	"txt": "Floresta da Alpha, primeira edição de Magic: The Gathering."
}




// Outras palavras
var mana = {
	"img": "none",
	"txt": "No Multiverso de Magic, mana é a energia que serve de combustível para as mágicas conjuradas. Ela flui pelas linhas de força de cada plano, mantendo sua existência.<br>Em uma partida de Magic, o mana das cinco diferentes cores, além do mana incolor, são utilizados para conjurar magias e ativar habilidades. Em geral, magias e habilidades mais poderosas possuem um custo de mana mais elevado."
}

var virar = {
	"img": "none",
	"txt": "As cartas no campo de batalha podem estar em duas posições: viradas ou desviradas. "
}

function display(x) {
	if (x.img === "none") {
		document.getElementById("side-img").src=("");
		document.getElementById("side-txt").innerHTML=(x.txt);
	} else	document.getElementById("side-img").src=(x.img);
	document.getElementById("side-txt").innerHTML=(x.txt)
}