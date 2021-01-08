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

 // populate ticket

 function populateticket() {
 	// body...
 		let depature =  localStorage.getItem('Depatureterminal');
		let detination =  localStorage.getItem('Destinationterminal');
		let date =  localStorage.getItem('Depaturedate');
		let time =  localStorage.getItem('Depaturetime');
		let category =  localStorage.getItem('Depaturecategory');

		 console.log(depature+detination+date+category+time)

		 let depatureholder = document.getElementById('carddepature');
		 let destinationholder = document.getElementById('carddestination');
		 let dateholder = document.getElementById('carddate');
		 let timeholder = document.getElementById('cardtime');
		 let categoryholder = document.getElementById('cardcartegory');
		 depatureholder.innerHTML = "Depatureterminal : "  + depature;
		 destinationholder.innerHTML = "Destinationterminal : "  + detination;
		 dateholder.innerHTML = "Date : "  + date;
		 timeholder.innerHTML =  "Time : "  +time;
		 categoryholder.innerHTML = "Categoty : "  + category;

 }
 populateticket();