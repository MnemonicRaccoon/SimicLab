function plains() {
	document.getElementById("mana").style.display="none";
	document.getElementById("island").style.display="none";
	document.getElementById("swamp").style.display="none";
	document.getElementById("mountain").style.display="none";
	document.getElementById("forest").style.display="none";
	document.getElementById("plains").style.display="inline-block";
};
function island() {
	document.getElementById("mana").style.display="none";
	document.getElementById("plains").style.display="none";
	document.getElementById("swamp").style.display="none";
	document.getElementById("mountain").style.display="none";
	document.getElementById("forest").style.display="none";
	document.getElementById("island").style.display="block";
};
function swamp() {
	document.getElementById("mana").style.display="none";
	document.getElementById("plains").style.display="none";
	document.getElementById("island").style.display="none";
	document.getElementById("mountain").style.display="none";
	document.getElementById("forest").style.display="none";
	document.getElementById("swamp").style.display="block";
};
function mountain() {
	document.getElementById("mana").style.display="none";
	document.getElementById("plains").style.display="none";
	document.getElementById("island").style.display="none";
	document.getElementById("swamp").style.display="none";
	document.getElementById("forest").style.display="none";
	document.getElementById("mountain").style.display="block";
};
function forest() {
	document.getElementById("mana").style.display="none";
	document.getElementById("plains").style.display="none";
	document.getElementById("island").style.display="none";
	document.getElementById("swamp").style.display="none";
	document.getElementById("mountain").style.display="none";
	document.getElementById("forest").style.display="block";
};

function mana() {
	document.getElementById("plains").style.display="none";
	document.getElementById("island").style.display="none";
	document.getElementById("swamp").style.display="none";
	document.getElementById("mountain").style.display="none";
	document.getElementById("forest").style.display="none";
	document.getElementById("mana").style.display="block";
};
