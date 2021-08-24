
  // show number of tickets 

var ticketNumber = document.getElementById('ticket-number');
var ticketCategory = document.getElementById('ticket-category');
var ticketDepatureTerminal = document.getElementById('ticket-depature-terminal');
var ticketDestinationtTerminal = document.getElementById('ticket-destination-terminal');
var ticketDate = document.getElementById('ticket-date');
var ticketTime = document.getElementById('ticket-time');
var processingTickets = document.querySelector('.processing-tickets');

 // populate ticket

 function populateticket() {
 	// body...
 		let ticketDetails = localStorage.getItem('myTicket');
  ticketDetails = JSON.parse(ticketDetails);
 		 let ticketHolder = document.querySelector('.holder');

 		 if(ticketDetails){
 		processingTickets.innerHTML = "Booking in progress"
 		 processingTickets.style.color = "green";
 		 	 ticketCategory.innerHTML = ticketDetails.TicketCategory;

 		 
 		 }else{
 		 
 		 	processingTickets.innerHTML = "No Bookings yet"
 		 	processingTickets.style.color = "dogerblue";
 		 }


 }

  // show number of tickets
    (function showNoOfTicket() {
   	// body...

   	let ticketNumber = localStorage.getItem('NumberOfTickets');
   	document.querySelector('.mytickes').innerHTML = ticketNumber;
   }());
 populateticket();