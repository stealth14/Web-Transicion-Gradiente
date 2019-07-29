

function Seleccion (arreglo,n)
{
    var i, j, aux,c,m;
    c=0;
    m=0;
    for(i=0; i<n; i++){
        for(j=i+1; j<n; j++){
            c=c+1;
            if(arreglo[i]>arreglo[j]){
                m=m+1;
                aux = arreglo[i];
                arreglo[i]=arreglo[j];
                arreglo[j]=aux;
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


function PrincipalSeleccion()
{
    var arreglo123=[];
    var n=parseInt(prompt("ORDENAMIENTO POR SELECCION\nINGRESE EL TAMAÑO"));
    ingresadrDatos(arreglo123,n);
    var t=arreglo123.length;
    
    alert("El arreglo desordenado es: " + arreglo123)
    
    console.log(arreglo123);

    Seleccion(arreglo123,t);
 
    alert("El arreglo ordenado por seleccion es: " + arreglo123)

    console.log(arreglo123);
}