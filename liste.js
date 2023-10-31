var mynodelist=document.getElementsByName("li");
var i;
for(i=0;i< mynodelist.length;i++){
	var span=document.createElement("SPAN");
	var txt=document.createTextNode("\u00D7");
	span.className="close";
	span.appendChild(txt);
	mynodelist[i].appendChild(span);}
var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
close[i].onclick=function(){	
	var div=this.parentElement;
	div.style.display="none";}
}
var list=document.querySelector('ul');
list.addEventListener('click',function(ev){
if(ev.target.tagName==="li"){ev.target.classList.toogle('checked');}},false);
function newElement(){var li=document.createElement("li");
var inputvalue=document.getElementById("myinput").value;
var t=document.createTextNode(inputvalue);
li.appendChild(t);
if(inputvalue===''){alert("You must write!");}
else{document.getElementById("myul").appendChild(i);}
document.getElementById("myinput").value="";
var span=document.createElement("SPAN");
var txt=document.createTextNode("\u00D7");
span.className="close";
span.appendChild(txt);
li.appendChild(span);
for(i=0;i< close.length;i++){
	close[i].onclick=function(){
	var div=this.parentElement;
	div.style.display="none";
}}}