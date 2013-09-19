function selectDropdown(){
var dropdownValue=document.getElementById("dropdown").value;
document.getElementById("output").innerHTML="<a href='http://en.wikipedia.org/wiki/" + dropdownValue + "'>Du har valgt " + dropdownValue + "</a>";
}
