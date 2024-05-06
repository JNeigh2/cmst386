function clock() {
        	document.getElementById('time').innerHTML = new Date();
}
setInterval(clock, 1000);
