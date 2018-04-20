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
class Usuario {

    public mNombre:String;
    private mEdad: Number;
    protected mCedula: string;
    constructor (nombre:string,
                 Edad:number,
                 Cedula: string,
                 ){
        this.mNombre=nombre;
        this.mEdad=Edad;
        this.mCedula=Cedula;
    }
    public imprimirConsola() {
        //tempalte Strings tilde invertida
        console.log(`El usuario se llama ${this.mNombre} la cedula del usuario es :${this.mCedula}, la edad del usuario es: ${this.mEdad}`)

    }
}
let usuario: Usuario = new Usuario('Erika',
    25,
    '1721473823')

console.log(usuario);