 let btncancel = document.querySelector('.btncancelbook');
 // loop through cancel button

 btncancel.addEventListener('click' , () =>{

 	var confirmcancel = confirm("Sure To Cancel Book");
 	if(confirmcancel){
 		document.querySelector('.holder').innerHTML = "";
 	}else{
 		alert("Opparaion canceled")
 	}

 		
 		
 	})

 /*for (let i = 0 ; i < btncancel.length ;  i++) {
 	
 	btncancel[i].addEventListener('click' , () =>{
 		document.querySelector('.holder').innerHTML = "";
 		alert('helloe');
 	})
 }*/