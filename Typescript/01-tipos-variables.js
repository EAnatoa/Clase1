//let nombre= "";
//let segundoNombre = 'Estefania';
//let segundoNombre1: string = 'Erika';   // no es necesario colocar el string
//let segundoNombre2 any = 'Estefania';    se convierte en un variable de js
//const  cedula= '1721473823';
//segundoNombre = 'Erika';
// cedula = '1721473839';  da error
//const URL_POLI = 'http://www.epn.edu.ec';
//segundoNombre = 123; // Duck typing
///////7
/*let nombre1: string;
let edad: number = 28;
let fecha: Date = new  Date();
let casado: boolean = false;
//let mascotas:object = {};
*/
var Usuario = /** @class */ (function () {
    function Usuario(nombre, Edad, Cedula) {
        this.mNombre = nombre;
        this.mEdad = Edad;
        this.mCedula = Cedula;
    }
    Usuario.prototype.imprimirConsola = function () {
        //tempalte Strings tilde invertida
        console.log("El usuario se llama " + this.mNombre + " la cedula del usuario es :" + this.mCedula + ", la edad del usuario es: " + this.mEdad);
    };
    return Usuario;
}());
var usuario = new Usuario('Erika', 25, '1721473823');
console.log(usuario);
