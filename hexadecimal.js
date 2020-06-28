function hexadecimal()
{
    let name = document.getElementById("hexa").value;
    var fecha = name.toString();
    console.log(fecha); 
    var cadena2 = fecha.slice(0, 4);
    var cadena3 = fecha.slice(5, 7);
    var cadena4 = fecha.slice(8, 11);
    console.log(cadena4)
    anio = parseInt(cadena2);
    mes = parseInt(cadena3);
    dia = parseInt(cadena4);
    
    
    let hexanio = anio.toString(16); // A la base 16
    let hexmes = mes.toString(16); // A la base 16
    let hexdia = dia.toString(16); // A la base 16
    console.log("El número ", anio, hexanio);
    console.log("El número ", mes, hexmes);
    console.log("El número ", dia, hexdia);


    var hola = hexdia +"/"+hexmes+"/"+hexanio;

    console.log(hola);
    
    
   // $("#resultado").html("<span></span>")
        
    document.getElementById('resultado').innerHTML=hola;
}


    
    