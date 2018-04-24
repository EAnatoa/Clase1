let arregloNumeros = [1,2,3,4,5];
let arregloDeudas = [73,123,32,233,44,35,34];
//let  arregloDeUsuarios:Array<UsuarioArreglo> = [       //let arregloUsuario:UsuarioArreglo=[
var arregloUsuarios = [
    {
        nombre: 'vicente',
        edad:28
    },
    {
        nombre:'vicente',
        edad: 10
    },
    {
        nombre:'maria',
        edad: 70
    },
    {
        nombre:'caro',
        edad: 32
    },
    {
        nombre:'raul',
        edad: 25
    },

];

//let sumarDosNumeros = (numeroUno:number,numerodos:number)=>{   // funcion de fecha gorda se cambia la palabra funcion por la fecha gorada
 //   return numeroUno+numerodos;
//};


let totalEdades = arregloDeNumeros => {
    // codigo extra
};

let facultades = arregloDeFacultades => ['facultad1','facultad2'];   // es una funcion que devuelve el arreglo



arregloNumeros.forEach(
    (value,index,arreglo)=> {
 console.log('valor',value);
        console.log('indice',index);
        console.log('arreglo',arreglo);

    }
);
var sumar = 0;
var resultadoForEach = arregloNumeros.forEach(function (valor, indice, arreglo) {
    sumar = sumar + valor;
    console.log(sumar);
});

let resultadoDeLaSuma=arregloNumeros.reduce((totalAcumulado,valorArreglo)=> {

    return totalAcumulado - valorArreglo;
    },
    20
);
console.log('resultadoDelaSuma',resultadoDeLaSuma);

/*let resultadoDeLaSumaDos = arregloNumeros
    .reduce(function (totalAcumulado, valorArreglo) { return totalAcumulado - valorArreglo; }, 20);
console.log('resultadoDeLaSuma', resultadoDeLaSuma);
*/



var resultadoDeLasEdades = arregloUsuarios
    .reduce(function (totalEdadAcumulado, usuarioArreglo) {
        return totalEdadAcumulado + usuarioArreglo.edad;
    }, 0);
console.log('resultadoDeLasEdades', resultadoDeLasEdades);


function calcularDeudaDeUsuario(edad) {
    return arregloDeudas.reduce(function (totalAcumulado, deuda) {
        return totalAcumulado + (((edad) / 100) * deuda);
    }, 0);
}

let usuarioConcincoAniosMenos = arregloUsuarios.map(
     (usuario: UsuarioArreglo)=>{
        usuario.edad = usuario.edad -5;
        usuario.deuda = calcularDeudaDeUsuario(usuario.edad);

        return usuario;
}
)
    .filter(function (usuario) {
        // true se devuelve, false no se devuelve
        return (usuario.deuda < 100);
    });
console.log('usuariosConCincoAniosMenos', usuarioConcincoAniosMenos);

interface UsuarioArreglo {
    nombre:string;
    edad:number;
    deuda?:number
};