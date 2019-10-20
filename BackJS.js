var input1=document.getElementById("input1");
var input2=document.getElementById("input2");
var body=document.querySelector("body");
var h3=document.querySelector("h3");

function color1()
{
	body.style.background =	
	"linear-gradient(to right,"
	+input1.value
	+","
	+input2.value
	+")";
	h3.innerHTML=
	"linear-gradient ( to right, "
	+input1.value.toUpperCase()
	+", "
	+input2.value.toUpperCase()
	+" ) ";
}

input2,addEventListener("input",color1);
input1.addEventListener("input",color1);