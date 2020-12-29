 let btncancel = document.querySelector('.btncancelbook');
 // loop through cancel button

 for (let i = 0 ; i < btncancel.length ;  i++) {
 	
 	btncancel[i].addEventListerner('click' , () =>{
 		document.querySelector('.holder').innerHTML = "";
 		alert('helloe');
 	})
 }