

function Burbuja (arreglo,n)
{

    var i, k, aux;
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (arreglo[i] > arreglo[i + 1]) {
                aux = arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i + 1] = aux;
            }
        }
    }
}

function ingresadrDatos(arreglo,n)
{
    for(var k=0; k<n;k++)
    {
        var datos=parseInt(prompt("INGRESA LOS ELEMENTOS"));
        arreglo[k]=datos;
    } 
}


function PrincipalBurbuja()
{
    var arreglo123=[];
    var n=parseInt(prompt("ORDENAMIENTO POR BURBUJA\nINGRESE EL TAMAÑO"));
    ingresadrDatos(arreglo123,n);
    var t=arreglo123.length;
    
    alert("El arreglo desordenado es: " + arreglo123)
    
    console.log(arreglo123);

    Burbuja(arreglo123,t);

    alert("El arreglo ordenado por burbuja es: " + arreglo123)

    console.log(arreglo123);
}

