
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
		//alert("Kindly select  Terminai")
		depetureterminei.style.border = "2px solid red";
		destinstionterminei.style.border = "2px solid red";
	}else if (depeturetermineicode == 0) {
		//alert("Kindly select Take off Terminai");
		depetureterminei.style.border = "2px solid red";
		destinstionterminei.style.border = "2px solid green";
	}else if( destinstiontermineicode == 0){
		//alert("Kindly select destination Terminai");
		depetureterminei.style.border = "2px solid green";
		destinstionterminei.style.border = "2px solid red";
	}else if(depeturetermineicode == destinstiontermineicode){
		//alert("Destination and Take off are same");
		depetureterminei.style.border = "2px solid red";
		destinstionterminei.style.border = "2px solid red";
	}else{


		
		depetureterminei.style.border = "2px solid green";
		destinstionterminei.style.border = "2px solid green";

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
	 	//alert("Current train has departed");
	 	depaturetimeoption.style.border = "2px solid red";
	 }else if(depaturetimecode < hournow){
	 	//alert(" train has departed");
	 	depaturetimeoption.style.border = "2px solid red";
	 }else if(depaturetimecode > hournow){
	 	alert(" Catch the train before : " + depaturetimecode + "  " + "Hours" );
		depaturetimeoption.style.border = "2px solid green";
		alert("Good to take  off");
		// book id validated
	 }

	}else if(period <= -1){
		//alert("Date has already passed");
		depaturedate.style.border = "2px solid red";
	}else if(period >= 1){
		alert(" Catch the train before : " + depaturetimecode + "  " + "Hours" );
		depaturetimeoption.style.border = "2px solid green";
		depaturedate.style.border = "2px solid green";
		alert("Good to take  off");
		 // book id validated
	}
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
	 	//alert("Current train has departed");
	 	depaturetimeoption.style.border = "2px solid red";
	 }else if(depaturetimecode < hournow){
	 	//alert(" train has departed");
	 	depaturetimeoption.style.border = "2px solid red";
	 }else if(depaturetimecode > hournow){
	 	alert(" Catch the train before : " + depaturetimecode + "  " + "Hours" );
		depaturetimeoption.style.border = "2px solid green";
	 }

	}else if(period <= -1){
		//alert("Date has already passed");
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
 	// display the form and populate it with input fieds
 	//document.querySelector('.formcaption').innerHTML = "High Class Ticket";
 	document.querySelector('.ticketcategory').selectedIndex = "1";
 	//document.documentElement.scrollTop = 0;
 	//window.scrollTo({top: 0, behavior: 'smooth'});
 	scrollToTop();
   
 })


 // popup booking form for economy
  let btncallpopup2 = document.getElementById('booknoweconomy');
 btncallpopup2.addEventListener('click', () =>{
 	// display the form and populate it with input fieds
 	//document.querySelector('.formcaption').innerHTML = "Economy Ticket";
 	document.querySelector('.ticketcategory').selectedIndex = "0";
 	//document.documentElement.scrollTop = 0;
 	//window.scrollTo({top: 0, behavior: 'smooth'});
 	scrollToTop();
   
 })

 // for slow motion scroll top 
 const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 30);
  }
};

// animating typing effect

const texts = ['Depature','Ticket'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function typing() {
	// body...
	if(count === texts.length){
		count = 0;
	}
	currentText = texts[count];
	letter = currentText.slice(0, ++index);
	document.querySelector('.formcaption').textContent = letter;
	if(letter.length === currentText.length){
		count++;
		index = 0;
	}
	setTimeout(typing , 400);

}());

