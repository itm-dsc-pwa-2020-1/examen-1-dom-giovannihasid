function normal(){
	document.body.style.background="white";
		document.body.style.color="black";

	document.getElementById('encabezado').style.background="white";
	document.getElementById('seccion').style.background="white";

	document.getElementById('pie').style.background="white";
	document.getElementById('anuncio').style.background='#E9ECF4';
	document.getElementById('anuncio').style.color="black";

	var caja=document.querySelectorAll("button"); //Primer titulo

	for (var i = 0; i < caja.length; i++) {
		caja[i].classList.remove("boton2");
		caja[i].classList.add("boton");
	}

	var caja=document.querySelectorAll("a"); //Primer titulo

	for (var i = 0; i < caja.length; i++) {
		caja[i].classList.remove("enlac2");
		caja[i].classList.add("enlac");
	}
}

function dark(){
	document.body.style.background="black";
		document.body.style.color="white";

	document.getElementById('encabezado').style.background="black";
	document.getElementById('seccion').style.background="black";

	document.getElementById('pie').style.background="black";
	document.getElementById('anuncio').style.background="black";
	document.getElementById('anuncio').style.color="white";

	var caja=document.querySelectorAll("button"); //Primer titulo

	for (var i = 0; i < caja.length; i++) {
		caja[i].classList.remove("boton");
		caja[i].classList.add("boton2");
	}

	var caja=document.querySelectorAll("a"); //Primer titulo

	for (var i = 0; i < caja.length; i++) {
		caja[i].classList.remove("enlac");
		caja[i].classList.add("enlac2");
	}

}