var departurearraylist = [
	{'Name' : 'spark train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1700hrs', 'Date':'20-12-2020'},
	{'Name' : 'bullet train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1800hrs', 'Date':'20-12-2020'},
	{'Name' : 'king train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1900hrs', 'Date':'20-12-2020'},
	{'Name' : 'spring train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1700hrs', 'Date':'20-12-2020'},
	{'Name' : 'cue train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1700hrs', 'Date':'20-12-2020'},
	{'Name' : 'bull train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1800hrs', 'Date':'20-12-2020'},
	{'Name' : 'spinner train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1900hrs', 'Date':'20-12-2020'},
	{'Name' : 'wave train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1700hrs', 'Date':'20-12-2020'},
	{'Name' : 'Knight train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1700hrs', 'Date':'20-12-2020'},
	{'Name' : 'mini train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1800hrs', 'Date':'20-12-2020'},
	{'Name' : 'zue train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1900hrs', 'Date':'20-12-2020'},
	{'Name' : 'wauq train','Departure' : 'nairobi','Destination' : 'mombasa','Time' : '1700hrs', 'Date':'20-12-2020'}

]


var mainterminallist = [
	{'Code' : '001', 'Terminal' : 'Nairobi'},
	{'Code' : '002', 'Terminal' : 'Mombasa'},
	{'Code' : '003', 'Terminal' : 'Kisumu'}
]

var subterminallist = [
	{'Code' : '101', 'Terminal' : 'Nakuru'},
	{'Code' : '102', 'Terminal' : 'Eldoret'},
	{'Code' : '103', 'Terminal' : 'Simba'},
	{'Code' : '103', 'Terminal' : 'Voi'}
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