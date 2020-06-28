function reversa()
{

    var name = document.getElementById("reversa").value;

    var res = "";
    for (var i = name.length - 1; i >= 0; i--) {
        res += name[i];
    }

    document.getElementById('resultado').innerHTML=res;
    
    
}
