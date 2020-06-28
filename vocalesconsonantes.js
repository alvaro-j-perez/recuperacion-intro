function vocalesconsonantes()
{
    var name = document.getElementById("convoc").value;

    let allVowels = 'aeiouAEIOU';
    let vCounter = 0;
    for(let i = 0; i < name.length; i++) {
        if(allVowels.indexOf(name[i]) !== -1) {
          console.log("El valor name[i] is: " + name[i]);
          vCounter += 1;
        }   
      }

      
    let consonantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let conContador = 0;

    for(let i = 0; i < name.length; i++) {
        if(consonantes.indexOf(name[i]) !== -1) {
          console.log("El valor name[i] is: " + name[i]);
          conContador += 1;
        }   
      }
  

    document.getElementById('resultado').innerHTML=vCounter + " Vocales " + conContador + " Consonantes" ;
    
    
}

 

