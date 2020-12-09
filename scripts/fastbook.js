
 let btnvalidatetermiai = document.getElementById('btnhomebooknow');
 btnvalidatetermiai.addEventListener('click' , () =>{
	// body...
	let depetureterminei = document.getElementById('depatureoption');
	var depeturetermineiname = depetureterminei.options[depetureterminei.selectedIndex].text;
	var depeturetermineicode =  depetureterminei.value;
	let destinstionterminei = document.getElementById('destinstionoption');
	var destinstiontermineiname = destinstionterminei.options[destinstionterminei.selectedIndex].text;
	var destinstiontermineicode =  destinstionterminei.value;

	if(depeturetermineicode == 0 && destinstiontermineicode == 0){
		alert("Kindly select  Terminai")
		depetureterminei.style.border = "2px solid red";
		destinstionterminei.style.border = "2px solid red";
	}else if (depeturetermineicode == 0) {
		alert("Kindly select Take off Terminai");
		depetureterminei.style.border = "2px solid red";
		destinstionterminei.style.border = "2px solid green";
	}else if( destinstiontermineicode == 0){
		alert("Kindly select destination Terminai");
		depetureterminei.style.border = "2px solid green";
		destinstionterminei.style.border = "2px solid red";
	}else if(depeturetermineicode == destinstiontermineicode){
		alert("Destination and Take off are same");
		depetureterminei.style.border = "2px solid red";
		destinstionterminei.style.border = "2px solid red";
	}else{


		alert("Good to take  off");
		depetureterminei.style.border = "2px solid green";
		destinstionterminei.style.border = "2px solid green";
	}


	
})


// validate time and date 
var btndatetimevalidate = document.getElementById('depaturetimeoption');
 btndatetimevalidate.addEventListener('change' , function () {
	// body...
	// first validate date to make sure it is ahead

	let depaturedate = document.getElementById('depaturedate');
	var userselecteddate = depaturedate.value; 
	var selecteddatetime = new Date(userselecteddate);
	var userselecteddatetime = selecteddatetime.getTime();
	var realdate = new Date();
	var todaydate = realdate.getTime();
		todaydate = parseInt(todaydate);

	  var  period = Math.floor((userselecteddatetime - todaydate)/(1000 * 60 * 60 * 24)+1);

	
	// get user selected hour of travell
	let depaturetime = document.getElementById('depaturetimeoption');
	var depaturetimecode = depaturetime.value;

	// get real actual time
	var datetoday = new Date();
	var hournow = datetoday.getHours();
	 if(period == 0){
	 	depaturedate.style.border = "2px solid green";
	 if (depaturetimecode == hournow) {
	 	alert("Current train has departed");
	 	depaturetimeoption.style.border = "2px solid red";
	 }else if(depaturetimecode < hournow){
	 	alert(" train has departed");
	 	depaturetimeoption.style.border = "2px solid red";
	 }else if(depaturetimecode > hournow){
	 	alert(" Catch the train before : " + depaturetimecode + "  " + "Hours" );
		depaturetimeoption.style.border = "2px solid green";
	 }

	}else if(period <= -1){
		alert("Date has already passed");
		depaturedate.style.border = "2px solid red";
	}else if(period >= 1){
		alert(" Catch the train before : " + depaturetimecode + "  " + "Hours" );
		depaturetimeoption.style.border = "2px solid green";
		depaturedate.style.border = "2px solid green";
	}
} )


 // validate popup form 

 let btnpopupvalidatetermiai = document.getElementById('btnpopuphomebooknow');
 if(btnpopupvalidatetermiai == null){


 }else {
 btnpopupvalidatetermiai.addEventListener('click' , () =>{
	// body...
	alert("helloe");	
})
}

 // popup booking form  for highclass

 let btncallpopup = document.getElementById('booknowhighclass');
 btncallpopup.addEventListener('click', () =>{
 	let popupform = document.querySelector('.popupbookingform');
 	let hidemainform = document.querySelector('.main-context');
 	// display the form and populate it with input fieds
 	popupform.style.display = "block";
 	hidemainform.style.display = "none";
 	createticketform();
 	//document.documentElement.scrollTop = 0;
 	//window.scrollTo({top: 0, behavior: 'smooth'});
 	scrollToTop();
   
 })


 // popup booking form for economy
  let btncallpopup2 = document.getElementById('booknoweconomy');
 btncallpopup2.addEventListener('click', () =>{
 	let popupform = document.querySelector('.popupbookingform');
 	let hidemainform = document.querySelector('.main-context');
 	// display the form and populate it with input fieds
 	popupform.style.display = "block";
 	hidemainform.style.display = "none";
 	createticketform();
 	document.querySelector('.ticketlabel').innerHTML = "Economy Ticket";
 	//document.documentElement.scrollTop = 0;
 	//window.scrollTo({top: 0, behavior: 'smooth'});
 	scrollToTop();
   
 })

 function createticketform() {
 	// body...
 	let popupform = document.querySelector('.popupbookingform');
 	popupform.innerHTML += `
     	<center>
     	<h2 style="color:crimson;" class="ticketlabel"> High-class Ticket</h2>
	<!-- <form> -->
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>From :</label>
		<select id="depatureoption">
			<option value="0">Depature</option>
			<option value="1">NAIROBI</option>
			<option value="2">MOMBASA</option>
			<option value="3">KISUMU</option>
			<option value="4">NAKURU</option>
		</select>
		<br><br>
		<label>Destination :</label>
		<select id="destinstionoption">
			<option value="0">Arrival</option>
			<option value="1">NAIROBI</option>
			<option value="2">MOMBASA</option>
			<option value="3">KISUMU</option>
			<option value="4">NAKURU</option>
		</select><br><br><br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<label>Date :</label>
		<input type="date" name="" id="highclassdepaturedate"><br><br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<label>Time :</label>
		<select id="depaturetimeoption">
			<option  value="4">4:00 AM</option>
			<option  value="5">5:00 AM</option>
			<option  value="5">6:00 AM</option>
			<option  value="7">7:00 AM</option>
			<option  value="8">8:00 AM</option>
			<option  value="9">9:00 AM</option>
			<option  value="10">10:00 AM</option>
			<option  value="11">11:00 AM</option>
			<option  value="12">12:00 AM</option>
			<option  value="13">1:00 PM</option>
			<option  value="14">2:00 PM</option>
			<option  value="15">3:00 PM</option>
			<option  value="16">4:00 PM</option>
			<option  value="17">5:00 PM</option>
			<option  value="18">6:00 PM</option>
			<option  value="19">7:00 PM</option>
			<option  value="20">8:00 PM</option>
			<option  value="21">9:00 PM</option>
			<option  value="22">10:00 PM</option>
			<option  value="23">11:00 PM</option>
		</select><br><br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>Class :</label>
		<select>
			<option>High-class</option>
			
		</select><br><br>
		<button id="btnpopuphomebooknow" onclick="alert("helloe");">Book Now</button>
	<!-- </form> -->

</center>

     `

 }
 // for slow motion scroll top 
 const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 30);
  }
};
