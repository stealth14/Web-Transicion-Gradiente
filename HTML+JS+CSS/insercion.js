

function Insercion (arreglo,n)
{
    var aux,i,j;

    for(i=0; i<n; i++){
        aux=arreglo[i];

        for(j=i; j>0; j--){

            if(arreglo[j-1]>aux){

                arreglo[j]=arreglo[j-1];
                arreglo[j-1]=aux;
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


function PrincipalInsercion()
{
    var arreglo123=[];
    var n=parseInt(prompt("ORDENAMIENTO POR INSERCION\nINGRESE EL TAMAÑO"));
    ingresadrDatos(arreglo123,n);
    var t=arreglo123.length;
    
    alert("El arreglo desordenado es: " + arreglo123)
    
    console.log(arreglo123);

    Insercion(arreglo123,t);
 
    alert("El arreglo ordenado por insercion es: " + arreglo123)

    console.log(arreglo123);
}
