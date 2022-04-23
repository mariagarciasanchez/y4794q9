function go(){
	alert("Welcome");
}
function example(){
	var name=prompt("Enter name");
	alert("Welcome :"+name);
}

var hidden = false;
    function action() {
        hidden = !hidden;
        if(hidden) {
            document.getElementById('tz-gallery').style.visibility = 'hidden';
        } else {
            document.getElementById('tz-gallery').style.visibility = 'visible';
        }
    }
	
	var show = false;
    function action() {
       show= !show;
        if(show) {
            document.getElementById('tz-gallery').style.visibility = 'hidden';
        } else {
            document.getElementById('tz-gallery').style.visibility = 'visible';
        }
    }