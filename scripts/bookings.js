
  // show number of tickets 

var ticketNumber = document.getElementById('ticket-number');
var ticketCategory = document.getElementById('ticket-category');
var ticketDepatureTerminal = document.getElementById('ticket-depature-terminal');
var ticketDestinationtTerminal = document.getElementById('ticket-destination-terminal');
var ticketDate = document.getElementById('ticket-date');
var ticketTime = document.getElementById('ticket-time');
var processingTickets = document.querySelector('.processing-tickets');
var btnsubmitbook = document.querySelector('.submit-book');
var bookedSeatNumbers = "";
 // populate ticket

 function populateticket() {
 	// body...
 		let ticketDetails = localStorage.getItem('myTicket');
  ticketDetails = JSON.parse(ticketDetails);
 		 let ticketHolder = document.querySelector('.holder');

 		 if(ticketDetails){
      var mytime = ticketDetails.TicketTime;
      mytime = parseInt(mytime)
      var myNewtime;
     
      switch (mytime){
        case 4: 
        myNewtime ="4:00 AM";
        break; 
         case 5: 
         myNewtime ="5:00 AM";
        break; 
         case 6: 
         myNewtime ="6:00 AM";
        break; 
         case 7: 
         myNewtime ="7:00 AM";
        break; 
         case 8: 
         myNewtime ="8:00 AM";
        break; 
         case 9: 
         myNewtime ="9:00 AM";
        break; 
        case 10: 
         myNewtime ="10:00 AM";
        break;
        case 11: 
         myNewtime ="11:00 AM";
        break;
        case 12: 
         myNewtime ="12:00 PM";
        break;
        case 13: 
         myNewtime ="1:00 AM";
        break;
        case 14: 
         myNewtime ="2:00 PM";
        break;
          case 15: 
         myNewtime ="3:00 PM";
        break;
          case 16: 
         myNewtime ="4:00 PM";
        break;
          case 17: 
         myNewtime ="5:00 PM";
        break;
          case 18: 
         myNewtime ="6:00 PM";
        break;
          case 19: 
         myNewtime ="7:00 PM";
        break;
          case 20: 
         myNewtime ="8:00 PM";
        break;
          case 21: 
         myNewtime ="9:00 PM";
        break;
          case 22: 
         myNewtime ="10:00 PM";
        break;
          case 23: 
         myNewtime ="11:00 PM";
        break;
        default:
        myNewtime = "null";
      }

 		processingTickets.innerHTML = "Booking in progress"
 		 processingTickets.style.color = "green";
 		 	 ticketNumber.innerHTML = "NULL";
       ticketCategory.innerHTML = ticketDetails.TicketCategory;
       ticketDepatureTerminal.innerHTML = ticketDetails.TicketDepature;
       ticketDestinationtTerminal.innerHTML = ticketDetails.TicketDestination;
       ticketDate.innerHTML = ticketDetails.TicketDate;
       ticketTime.innerHTML = myNewtime;

 		 
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
// seat selectors 

let seat1 = document.getElementById("seat-1");
seat1.addEventListener('click' , () =>{
  document.querySelector('.seat-1').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "1,";
  writeSeatNumber();
})
let seat2 = document.getElementById("seat-2");
seat2.addEventListener('click' , () =>{
  document.querySelector('.seat-2').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "2,";
  writeSeatNumber();
})

function writeSeatNumber() {
  // body...
  let bookedNumbers = document.getElementById('bookedNumbers');
  bookedNumbers.innerHTML = bookedSeatNumbers;
}
