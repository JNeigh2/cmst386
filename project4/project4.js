function clock() {
        	document.getElementById('time').innerHTML = new Date();
}
setInterval(clock, 1000);
function validation() {
  let x = document.forms["form1"]["info"].value;
  if (x == "") {
    alert("You must enter text in the question/concern to submit the form");
    return false;
  }
} 
