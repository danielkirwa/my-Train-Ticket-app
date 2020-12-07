
function validateterminai() {
	// body...
	let depetureterminei = document.getElementById('depatureoption');
	var depeturetermineiname = depetureterminei.options[depetureterminei.selectedIndex].text;
	var depeturetermineicode =  depetureterminei.value;
	let destinstionterminei = document.getElementById('destinstionoption');
	var destinstiontermineiname = destinstionterminei.options[destinstionterminei.selectedIndex].text;
	var destinstiontermineicode =  destinstionterminei.value;

	if (depeturetermineicode == 0) {
		alert("Kindly select Take off Terminai")
	}else if( destinstiontermineicode == 0){
		alert("Kindly select destination Terminai");
	}else if(depeturetermineicode == destinstiontermineicode){
		alert("Destination and Take off are same");
	}else{
		alert("Good to take  off");
		console.log( "form" + "" +depeturetermineicode + " "+ "" + depeturetermineiname + "detination " +
		destinstiontermineicode +  "" +"" + destinstiontermineiname );
	}


	
}