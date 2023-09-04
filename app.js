const usuarioPermitido = {
    nombres: ['tomas valentino real', 'tomisiyo', 'tomi'],
    documento: 39422412,
    clave: 1593,
    edad: 27
};

class OtrosUsuarios {
    constructor() {
        {
            this.nombre = "nombre";
            this.documento = "documento";
            this.clave = "clave";
            this.edad = "edad";
        }
    }
}

  
const nuevoUsuarioUno = new OtrosUsuarios 
nuevoUsuarioUno.nombre = "Carlos Alberto Lopez"
nuevoUsuarioUno.documento = 41788321
nuevoUsuarioUno.clave = 5674
nuevoUsuarioUno.edad = 25

const nuevoUsuarioDos = new OtrosUsuarios 
nuevoUsuarioDos.nombre = "Esteban Quito Roto"
nuevoUsuarioDos.documento = 87655432
nuevoUsuarioDos.clave = 68321
nuevoUsuarioDos.edad = 67

function deseaEliminar() {

const usuariosParaMostrar = [usuarioPermitido.nombres[0], nuevoUsuarioUno.nombre, nuevoUsuarioDos.nombre];

    let respuesta = prompt('¿Desea eliminar algún usuario?').toLowerCase(); 
    if (respuesta === 'si') {
        alert(usuariosParaMostrar);
        let ingresoNum = parseInt(prompt(
            'Ingrese el número del usuario que desea eliminar.\n' +
            '1- Tomas Valentino Real\n' +
            '2- Carlos Alberto Lopez\n' +
            '3- Esteban Quito Roto'
          ));
        if (ingresoNum === 1) {
            usuariosParaMostrar.splice(0, 1);
            alert(usuariosParaMostrar);
        } else if (ingresoNum === 2) {
            usuariosParaMostrar.splice(1, 1);
            alert(usuariosParaMostrar);
        } else if (ingresoNum === 3) {
            usuariosParaMostrar.splice(2, 1);
            alert(usuariosParaMostrar);
        } else {
            alert('Número de usuario no válido');
        }
    } else {
        alert('No se eliminarán usuarios.');
  
          }
        }



const nuevaListaDeUsuarios = [];

function mostrarTodosLosUsuarios(usuarioPermitido, nuevoUsuarioUno, nuevoUsuarioDos) {
    let quieroSaber = prompt('¿Desea saber la lista de usuarios registrados?');

    if(quieroSaber === 'si'.toLowerCase()) {
        nuevaListaDeUsuarios.push(usuarioPermitido.nombres[0], nuevoUsuarioUno.nombre, nuevoUsuarioDos.nombre);
        alert(JSON.stringify(nuevaListaDeUsuarios.join(' - ')));
        alert('¡Muchas gracias!');
        saberQueOnda();
        deseaEliminar();
    }else if (quieroSaber === 'no'.toLowerCase()) {
        console.log('Usted no quiere conocer la lista completa de usuarios');
        console.log(nuevaListaDeUsuarios.length);
    }else {
        alert('Su opción es incorrecta.¡Disculpe las molestias!');

    }
}

const saberSiExiste = ['Tomás Valentino Real', 'Carlos Alberto López', 'Esteban Quito Roto'];
const nuevoSaberSiExiste = saberSiExiste.map(usuario => usuario.toLowerCase());

function saberQueOnda() {
    let pregunta = prompt('¿Desea saber si algún usuario en particular se encuentra en la base de datos?').toLowerCase();
    let pregunta2 = prompt('Ingrese el usuario que desea buscar').toLowerCase();
    
    if (pregunta === 'si' && nuevoSaberSiExiste.includes(pregunta2)) {
        alert('Efectivamente ' + pregunta2.toUpperCase() + ' se encuentra en la base de datos');
    } else {
        alert(pregunta2 + ' no se encuentra en la base de datos');
    }
}

function giveMeYourDoc () {
    
    let docIngresado = prompt("Esta por ser redireccionado: INGRESE SU DOCUMENTO");
    
    alert('el numero ingresado es ' + docIngresado);

    if (docIngresado != 39422412) {
        giveMeYourDoc();
    }
}


let nombre = prompt('Ingrese su nombre y apellido para corroborar identificación');

if (nombre.toLowerCase() === 'tomas valentino real' || nombre.toLowerCase() === 'tomisiyo' || nombre.toLowerCase() === 'tomi') {
    alert('Bienvenido, Tomas. a la base de datos confidenciales del gobierno argentino');
} else {
    alert('Los datos ingresados son incorrectos.');
    alert('Estas siendo vigilado');
    console.log('La base de datos obtenida es incorrecta, serás ubicado en un tiempo muy breve por el servicio de inteligencia estatal')

    giveMeYourDoc ();
}

let identificationNumber = prompt('Ingrese clave de identificación');

let number = parseInt(identificationNumber);

if (number === 1593) {
    alert("Ahora si puedes realizar cambios en la base de datos");
    mostrarTodosLosUsuarios(usuarioPermitido, nuevoUsuarioUno, nuevoUsuarioDos);
}
else {
    alert('No estás autorizado, puede recibir una demanda civil y/o penal. Queda usted notificado.');
    let edad = prompt('Ingrese su edad ');

    while (edad != "27") {
        alert("Usted ingresó " + edad + " y no es el numero correcto.");
        edad = prompt("Ingrese la edad/número correcto.");
    }


    let intentosPermitidos = 2;
    let identificationCorrectNumber = 1593
    let correctIncome = false;

    for (let intento = 1; intento <= intentosPermitidos; intento++) {
        let identificationNumber = parseInt(prompt("Intento " + intento + ": Ingrese su número de identificación"));

        if (identificationCorrectNumber === 1593) {
            break;
        } else {
            alert("Número incorrecto. Solo tienes " + (intentosPermitidos - intento) + " intento.");
            alert("Número incorrecto. No puedes solicitar mas intentos. Por favor llama a la poli");
        } 
    }

    if (correctIncome === identificationCorrectNumber) {
        alert('Bienvenido.');
        alert('En este momento usted está siendo grabado. ¡sonría!');
    } else {
        alert('No puedes solicitar más ingresos, por favor no insista.');
    }
}

