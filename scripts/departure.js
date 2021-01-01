// get date 

let date = new Date();
let today = date.toISOString().slice(0, 10);


var departurearraylist = [
	{'Name' : 'Spark train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '0400hrs', 'Date':today},
	{'Name' : 'Bullet train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '0600hrs', 'Date':today},
	{'Name' : 'King train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '0700hrs', 'Date':today},
	{'Name' : 'Spring train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '0800hrs', 'Date':today},
	{'Name' : 'Cue train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1000hrs', 'Date':today},
	{'Name' : 'Bull train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1100rs', 'Date':today},
	{'Name' : 'Spinner train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1200hrs', 'Date':today},
	{'Name' : 'Wave train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1400hrs', 'Date':today},
	{'Name' : 'Knight train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1500hrs', 'Date':today},
	{'Name' : 'Mini train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1700hrs', 'Date':today},
	{'Name' : 'Zue train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1800hrs', 'Date':today},
	{'Name' : 'Wzauq train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1900hrs', 'Date':today},
	{'Name' : 'Knight train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1500hrs', 'Date':today},
	{'Name' : 'Mini train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1700hrs', 'Date':today},
	{'Name' : 'Zue train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1800hrs', 'Date':today},
	{'Name' : 'Wzauq train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1900hrs', 'Date':today}

]


var mainterminallist = [
	{'Code' : '001', 'Terminal' : 'Nairobi'},
	{'Code' : '002', 'Terminal' : 'Mombasa'},
	{'Code' : '003', 'Terminal' : 'Kisumu'},
	{'Code' : '004', 'Terminal' : 'Nakuru'}
]

var subterminallist = [
	{'Code' : '101', 'Terminal' : 'Naivasha'},
	{'Code' : '102', 'Terminal' : 'Eldoret'},
	{'Code' : '103', 'Terminal' : 'Simba'},
	{'Code' : '103', 'Terminal' : 'Voi'},
	{'Code' : '103', 'Terminal' : 'Molo'},
	{'Code' : '103', 'Terminal' : 'Kericho'}
]


// search function

 let searchengine = document.getElementById('searchinput');
 searchengine.addEventListener('keyup' , () =>{
 var value = document.getElementById('searchinput').value;
 console.log(value);
 	var data = searchnow(value , departurearraylist);
 	var table = document.getElementById('departurelist').innerHTML= "";
 terminallist(data);

 })
 // calling display of terminals list
 subterminals(subterminallist);
  mainterminals(mainterminallist);
 terminallist(departurearraylist);

 function searchnow(value, data) {
 	// body...
 	var filterdata = [];

 	for (var i = 0 ; i < data.length ; i ++) {
		value = value.toLowerCase(); 
		var name = data[i].Name.toLowerCase(); 
		if(name.includes(value)){
			filterdata.push(data[i]);
		}
	}

 	return filterdata;
 }





function terminallist(data) {
	// body...
	var table = document.getElementById('departurelist');

	for (var i = 0 ; i < data.length ; i ++) {
		var row = `
				<tr>
			<td>${data[i].Name}</td>
			<td>${data[i].Departure}</td>
			<td>${data[i].Destination}</td>
			<td>${data[i].Time}</td>
			<td>${data[i].Date}</td>
		    </tr>
		`
		table.innerHTML += row;
	}
}

// main terminal 
function mainterminals(data) {
	// body...
	var table = document.getElementById('main-terminal');

	for (var i = 0 ; i < data.length ; i ++) {
		var row = `
				<tr>
			<td>${data[i].Code}</td>
			<td>${data[i].Terminal}</td>
		    </tr>
		`
		table.innerHTML += row;
	}
}
// sub terminal 

function subterminals(data) {
	// body...
	var table = document.getElementById('sub-terminal');

	for (var i = 0 ; i < data.length ; i ++) {
		var row = `
				<tr>
			<td>${data[i].Code}</td>
			<td>${data[i].Terminal}</td>
		    </tr>
		`
		table.innerHTML += row;
	}
}

// sort out terminal table to display non departed train
function looprows() {
	// body...

var datadisplay = document.getElementById('readrows');
datadisplay.innerHTML = "";
var myrows  = document.getElementById('dep');
   for(i = 0; i = myrows.rows.length; i ++){

   	// get current row cell 

   	let myrowcell = myrows.rows.item(i).cells;
   	// read cell value in a loop 
   	for(r  = 0 ; r  = myrowcell.length; r ++){
   		datadisplay.innerHTML = datadisplay.innerHTML + '' + myrowcell.item(i).innerHTML;

   	}

   	datadisplay.innerHTML = datadisplay.innerHTML + '<br>';

   }
   } 

