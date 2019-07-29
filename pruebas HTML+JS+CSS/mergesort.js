
function dividir(a, inicial, final){
    var mitad;
    if(inicial<final){
        mitad = Math.floor((inicial+final)/2);

        dividir(a, inicial, mitad);
        dividir(a, mitad+1, final);

        fusionar(a, inicial, final, mitad);
    }
}

function fusionar(a, inicial, final, medio)
{
    var i, j, k , temp;
    
    i = inicial;
    j = medio +1;
    k = 0;
    temp = a[final-inicial+1];

    while(i <= medio && j <= final){
        if(a[i] < a[j]){
            temp[k] = a[i];
            k++;
            i++;
        }else{
            temp[k] = a[j];
            k++;
            j++;
        }
    }

    while(i <= medio){
        temp[k] = a[i];
        k++;
        i++;
    }

    while(j <= final){
        temp[k] = a[j];
        k++;
        j++;
    }

    for(i = inicial; i <= final; i++){
        a[i] = temp[i-inicial];
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


function Principal()
{
    var arreglo123=[];
    var n=parseInt(prompt("INGRESE EL TAMAÑO"));
    ingresadrDatos(arreglo123,n);
    var t=arreglo123.length;

    alert("El arreglo desordenado es: " + arreglo123)
    
    console.log(arreglo123);

    dividir(arreglo123,0,t-1)

    alert(arreglo123)

    console.log("El arreglo ordenado es: " + arreglo123);
}