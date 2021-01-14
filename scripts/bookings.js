
  // show number of tickets 



 let btncancel = document.querySelector('.btncancelallbook');
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
 		let ticketDetails = localStorage.getItem('myTicket');
 		 ticketDetails = JSON.parse(ticketDetails);
 		 let ticketHolder = document.querySelector('.holder');

 		 if(ticketDetails){
 		 	console.log('available')
 		 	Object.values(ticketDetails).map(details =>{
 		 		ticketHolder.innerHTML += `
 		 		<div class="card">
		<div class="card-text">
			Travel in Style
			<br>
			<small>Name : #name #name</small><br>
			<small id="cardcartegory">Category : ${details.TicketCategory}</small><br>
			<small id="cardtime">Depature Time  : ${details.TicketTime}</small><br>
			<small id="carddepature"> Depature Terminal : ${details.TicketDepature}</small><br>
			<small id="carddestination">Destination Terminal :${details.TicketDestination}</small><br>
			<small id="carddate"> Depature Date :${details.TicketDate}</small><br>
			
			<button class="btncancelbook">Cancel Booking</button>
		</div>
		<svg> 
			<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="#00000000" />
			<text fill="green" font-size="18" font-family="Verdana" x="12" y="60">active</text>
		 </svg>
	</div>
 		 		`
 		 	})
 		 }else{
 		 	let buttoninfor = document.querySelector('.btncancelallbook');
 		 	buttoninfor.innerHTML = "No Bookings Yet !!!"
 		 }


 }

  // show number of tickets
    (function showNoOfTicket() {
   	// body...

   	let ticketNumber = localStorage.getItem('NumberOfTickets');
   	document.querySelector('.mytickes').innerHTML = ticketNumber;
   }());
 populateticket();