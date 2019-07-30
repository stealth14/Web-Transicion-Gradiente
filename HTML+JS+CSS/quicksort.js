

function Quicksort (a, pinicial, pfinal)
{

    var i = pinicial;
    var j = pfinal;
    var pivote = mitad(a, pinicial, pfinal);
    console.log("--->"+pivote)
    var temp;

    do
    {
        while(a[i]<pivote)
        {
            i++;
        }
        while(a[j]>pivote)
        {
            j--;
        }
        if(i <= j)
        {
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
            i++;
            j--;
        }
    }
    while (i <= j);

    if (pinicial < j)
        Quicksort(a, pinicial, j);
    if (i < pfinal)
        Quicksort(a, i, pfinal);
}

function ingresadrDatos(arreglo,n)
{
    for(var k=0; k<n;k++)
    {
        var datos=parseInt(prompt("INGRESA LOS ELEMENTOS"));
        arreglo[k]=datos;
    } 
}

function mitad(arreglo, pinicial, pfinal){
    var mid = arreglo[Math.floor((pinicial+pfinal)/2)];
    return mid;
}

function PrincipalQuicksort()
{
    var arreglo123=[];
    var n=parseInt(prompt("ORDENAMIENTO QUICKSORT\nINGRESE EL TAMAÑO"));
    var pini, pfin;
    
    ingresadrDatos(arreglo123,n);
    var t=arreglo123.length;

    pini=0;
    pfin=t-1;

    alert("El arreglo desordenado es: " + arreglo123)    

    console.log(arreglo123);

    Quicksort(arreglo123,pini,pfin);

    alert("El arreglo ordenado por quicksort es: " + arreglo123)

    console.log(arreglo123);
}
