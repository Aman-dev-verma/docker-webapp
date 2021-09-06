function op() {
	    var xhr = new XMLHttpRequest();
	    i=document.getElementById("cmd").value
	    xhr.open("GET","http://192.168.1.17/cgi-bin/info.py?info="+i,true);
	    xhr.send();

	    xhr.onload=function(){
		            var output = xhr.responseText;
		        document.getElementById('d4').innerHTML = output;
		        }
}




function os() {
	    var xhrm = new XMLHttpRequest();
	    j = document.getElementById("one").value
	    
	    xhrm.open("GET","http://192.168.1.17/cgi-bin/info.py?info="+j,true);
	    xhrm.send();

	    xhrm.onload=function(){
		            var output = xhrm.responseText;
		        document.getElementById('d4').innerHTML = output;
		        }
}

function b1() {
	    var xhrm = new XMLHttpRequest();
	    j = document.getElementById("b1").value
	    
	    xhrm.open("GET","http://192.168.1.17/cgi-bin/info.py?info=docker ps",true);
	    xhrm.send();

	    xhrm.onload=function(){
		            var output = xhrm.responseText;
		        document.getElementById('d4').innerHTML = output;
		        }
}

function b2() {
	    var xhrm = new XMLHttpRequest();
	    j = document.getElementById("b2").value
	    
	    xhrm.open("GET","http://192.168.1.17/cgi-bin/info.py?info=docker ps -a",true);
	    xhrm.send();

	    xhrm.onload=function(){
		            var output = xhrm.responseText;
		        document.getElementById('d4').innerHTML = output;
		        }
}

function b3() {
	    var xhrm = new XMLHttpRequest();
	    j = document.getElementById("b3").value
	    
	    xhrm.open("GET","http://192.168.1.17/cgi-bin/info.py?info=docker images",true);
	    xhrm.send();

	    xhrm.onload=function(){
		            var output = xhrm.responseText;
		        document.getElementById('d4').innerHTML = output;
		        }
}

function b4() {
	    var xhrm = new XMLHttpRequest();
	    j = document.getElementById("b1").value
	    
	    xhrm.open("GET","http://192.168.1.17/cgi-bin/info.py?info=docker ps -qa",true);
	    xhrm.send();

	    xhrm.onload=function(){
		            var output = xhrm.responseText;
		        document.getElementById('d4').innerHTML = output;
		        }
}

function b5() {
	    var xhrm = new XMLHttpRequest();
	    j = document.getElementById("b5").value
	    
	    xhrm.open("GET","http://192.168.1.17/cgi-bin/info.py?info=systemctl status docker",true);
	    xhrm.send();

	    xhrm.onload=function(){
		            var output = xhrm.responseText;
		        document.getElementById('d4').innerHTML = output;
		        }
}

function b6() {
	    var xhrm = new XMLHttpRequest();
	    j = document.getElementById("b6").value
	    
	    xhrm.open("GET","http://192.168.1.17/cgi-bin/info.py?info=docker info",true);
	    xhrm.send();

	    xhrm.onload=function(){
		            var output = xhrm.responseText;
		        document.getElementById('d4').innerHTML = output;
		        }
}



