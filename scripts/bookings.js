
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

   try {
     document.querySelector('.seat-1').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "1 ,";
  writeSeatNumber();
}catch (enx){
  let oldseat = "1 ,";
  let removeseat = "";
     document.querySelector('.booked-seat').className = "seat-1";
  sliceSeatNumber(oldseat,removeseat);

}
 
})
let seat2 = document.getElementById("seat-2");
seat2.addEventListener('click' , () =>{
try {
     document.querySelector('.seat-2').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "2 ,";
  writeSeatNumber();
}catch (enx){
  let oldseat = "2 ,";
  let removeseat = "";
   document.getElementById("tseat-2").className = "seat-2";
  sliceSeatNumber(oldseat,removeseat);

}
})
let seat3 = document.getElementById("seat-3");
seat3.addEventListener('click' , () =>{
 try {
     document.querySelector('.seat-3').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "3 ,";
  writeSeatNumber();
}catch (enx){
  let oldseat = "3 ,";
  let removeseat = "";
   document.getElementById("tseat-3").className = "seat-3";
  sliceSeatNumber(oldseat,removeseat);

}
})
let seat4 = document.getElementById("seat-4");
seat4.addEventListener('click' , () =>{
  try {
     document.querySelector('.seat-4').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "4 ,";
  writeSeatNumber();
}catch (enx){
  let oldseat = "4 ,";
  let removeseat = "";
   document.getElementById("tseat-4").className = "seat-4";
  sliceSeatNumber(oldseat,removeseat);

}
})
let seat5 = document.getElementById("seat-5");
seat5.addEventListener('click' , () =>{
 try {
     document.querySelector('.seat-5').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "5 ,";
  writeSeatNumber();
}catch (enx){
  let oldseat = "5 ,";
  let removeseat = "";
   document.getElementById("tseat-5").className = "seat-5";
  sliceSeatNumber(oldseat,removeseat);

}
})
let seat6 = document.getElementById("seat-6");
seat6.addEventListener('click' , () =>{
 try {
     document.querySelector('.seat-6').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "6 ,";
  writeSeatNumber();
}catch (enx){
  let oldseat = "6 ,";
  let removeseat = "";
   document.getElementById("tseat-6").className = "seat-6";
  sliceSeatNumber(oldseat,removeseat);

}
})
let seat7 = document.getElementById("seat-7");
seat7.addEventListener('click' , () =>{
   try {
     document.querySelector('.seat-7').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "7 ,";
  writeSeatNumber();
}catch (enx){
  let oldseat = "7 ,";
  let removeseat = "";
   document.getElementById("tseat-7").className = "seat-7";
  sliceSeatNumber(oldseat,removeseat);

}
})
let seat8 = document.getElementById("seat-8");
seat8.addEventListener('click' , () =>{
  try {
     document.querySelector('.seat-8').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "8 ,";
  writeSeatNumber();
}catch (enx){
  let oldseat = "8 ,";
  let removeseat = "";
   document.getElementById("tseat-8").className = "seat-8";
  sliceSeatNumber(oldseat,removeseat);

}
})
let seat9 = document.getElementById("seat-9");
seat9.addEventListener('click' , () =>{
   try {
     document.querySelector('.seat-9').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "9 ,";
  writeSeatNumber();
}catch (enx){
  let oldseat = "9 ,";
  let removeseat = "";
   document.getElementById("tseat-9").className = "seat-9";
  sliceSeatNumber(oldseat,removeseat);

}
})
let seat10 = document.getElementById("seat-10");
seat10.addEventListener('click' , () =>{
  try {
     document.querySelector('.seat-10').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "10 ,";
  writeSeatNumber();
}catch (enx){
  let oldseat = "10 ,";
  let removeseat = "";
   document.getElementById("tseat-10").className = "seat-10";
  sliceSeatNumber(oldseat,removeseat);

}
})
let seat11 = document.getElementById("seat-11");
seat11.addEventListener('click' , () =>{
   try {
     document.querySelector('.seat-11').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "11 ,";
  writeSeatNumber();
}catch (enx){
  let oldseat = "11 ,";
  let removeseat = "";
   document.getElementById("tseat-11").className = "seat-11";
  sliceSeatNumber(oldseat,removeseat);

}
})
let seat12 = document.getElementById("seat-12");
seat12.addEventListener('click' , () =>{
   try {
     document.querySelector('.seat-12').className = "booked-seat";
  bookedSeatNumbers = bookedSeatNumbers + "12 ,";
  writeSeatNumber();
}catch (enx){
  let oldseat = "12 ,";
  let removeseat = "";
   document.getElementById("tseat-12").className = "seat-12";
  sliceSeatNumber(oldseat,removeseat);

}
})

function writeSeatNumber() {
  // body...
  let bookedNumbers = document.getElementById('bookedNumbers');
  bookedNumbers.innerHTML = bookedSeatNumbers;
}
function sliceSeatNumber(oldseat , removeseat){
  let bookedNumbers = document.getElementById('bookedNumbers');
 bookedSeatNumbers = bookedSeatNumbers.replace(oldseat, removeseat) ;
 bookedNumbers.innerHTML = bookedSeatNumbers;
}


btnsubmitbook.addEventListener('click' , () =>{
  let firstName = document.getElementById('customer-fname');
  let secondName = document.getElementById('customer-sname');
  let phoneNumber = document.getElementById('customer-number');
  if (firstName.value == "" || secondName.value == "" || phoneNumber.value == "") {
    alert("fill all fields")
  }else{
       let customerdetails = {
      Fname : firstName.value,
      Sname : secondName.value,
      phoneNumber : phoneNumber.value,
      Seats : bookedSeatNumbers,
      Status : "Active"
   
     }

      localStorage.setItem('customerDetails' , JSON.stringify(customerdetails));
      populateticketName();
      alert('Congratulation book successeful')
  }
})
function populateticketName(){
     let ticketName = localStorage.getItem('customerDetails');
      if (ticketName) {
         ticketName = JSON.parse(ticketName); 
  let displayName = document.getElementById('ticket-name');
  let displaySelection = document.getElementById('myTicketSelection');
  let displayStatus = document.getElementById('myTicketStatus');
  displayName.innerHTML = ticketName.Fname + "  " +ticketName.Sname + "  " +ticketName.phoneNumber;
  displaySelection.innerHTML = ticketName.Seats;
  displayStatus.innerHTML = ticketName.Status;
      }else{
  }
}

 populateticketName();