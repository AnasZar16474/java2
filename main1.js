document.querySelector(".registerForm").onsubmit=function(e){
    e.preventDefault();
   var elements= e.target.elements;
   var data=elements[0].value;
   var result= document.querySelector(".result");
var select=document.getElementById("anas");
 if(select.value=="dollar"){
   result.innerHTML=data/3;
 }
 else if(select.value=="dinar"){
    result.innerHTML=data/5;
 }
 else{
   result.innerHTML=data;
 }

}