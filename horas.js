function horas()
{
    var name = document.getElementById("horas").value;
    var fechaActual = new Date();
    var fecha1 = moment(name, "YYYY-MM-DD");
    var fecha2 = moment(fechaActual, "YYYY-MM-DD");
    
    var diff = fecha2.diff(fecha1, 'h'); // Diff in hours
  

    document.getElementById('resultado').innerHTML=diff;
    
    
}


   


