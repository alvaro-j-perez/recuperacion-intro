function parimpar()
{
    var name = document.getElementById("parimpar").value;



var a = name.length;

var z = a-1;

var resultado = z%2;

if(resultado == 0){
document.getElementById('resultado').innerHTML="Es par";
    
 
}else{
   document.getElementById('resultado').innerHTML="Es Impar";

}    
    
}


   

