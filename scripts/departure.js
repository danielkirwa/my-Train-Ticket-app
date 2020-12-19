var departurearraylist = [
	{'Name' : 'spark train','Time' : '1700hrs', 'terminal':'terminal 1'},
	{'Name' : 'bullet train','Time' : '1800hrs', 'terminal':'terminal 2'},
	{'Name' : 'king train','Time' : '1900hrs', 'terminal':'terminal 1'},
	{'Name' : 'spring train','Time' : '1700hrs', 'terminal':'terminal 2'},
	{'Name' : 'cue train','Time' : '1700hrs', 'terminal':'terminal 1'},
	{'Name' : 'bull train','Time' : '1800hrs', 'terminal':'terminal 2'},
	{'Name' : 'spinner train','Time' : '1900hrs', 'terminal':'terminal 1'},
	{'Name' : 'wave train','Time' : '1700hrs', 'terminal':'terminal 2'},
	{'Name' : 'Knight train','Time' : '1700hrs', 'terminal':'terminal 1'},
	{'Name' : 'mini train','Time' : '1800hrs', 'terminal':'terminal 2'},
	{'Name' : 'zue train','Time' : '1900hrs', 'terminal':'terminal 1'},
	{'Name' : 'wauq train','Time' : '1700hrs', 'terminal':'terminal 2'}

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
			<td>${data[i].Time}</td>
			<td>${data[i].terminal}</td>
		    </tr>
		`
		table.innerHTML += row;
	}
}