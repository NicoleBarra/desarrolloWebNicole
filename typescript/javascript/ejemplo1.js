"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _emai;
console.log("Hola mundo");
let nombre = "Juan";
console.log(nombre);
let numero1 = 1;
console.log(numero1);
nombre = "Juan Velez";
let imprimirNombre = (name, matricula) => {
    console.log(name + " Matricula" + matricula);
    console.log(nombre);
};
imprimirNombre(nombre, "123456");
let verdadero = true;
// Crear un objeto de tipo array del tipo NuevoTipo
let listado = [];
let listadoNumber;
let arr;
arr = [1, "1", true];
//insertando un elemento de tipo NuevoTipo al arreglo de de tipo Arregle
listado.push(arr);
const constante1 = 2;
const constante2 = 4;
let variable = 2;
function suma(primero, segundo) {
    return primero + segundo;
}
console.log(suma(constante1, constante2));
let Num = 2;
console.log(Num);
var alumnos;
alumnos = [
    [213, "Juan"],
    [123, "Sandra"],
    [23, "Pedro"],
];
console.log(alumnos[0][0]);
alumnos.push([23, "Luis"]);
var Salon;
(function (Salon) {
    Salon["Profesor"] = "Juan Profesor";
    Salon["NombreMateria"] = "Desarrollo Web";
    Salon["Carrera"] = "ITC";
    Salon[Salon["Calificacion"] = 100] = "Calificacion";
})(Salon || (Salon = {}));
var Salon2;
(function (Salon2) {
    Salon2[Salon2["Calificacion"] = 100] = "Calificacion";
})(Salon2 || (Salon2 = {}));
console.log(getSalon("web"));
function getSalon(materia) {
    return Salon.Profesor;
}
console.log("orientado a objetos");
//declaracion de las clases
class Libro {
    // todos los atributos tienen que estar dentro del constructor
    constructor(author, titulo) {
        this.author = author;
        this.titulo = titulo;
    }
    // no llevan function
    getNombreLibro() {
        return this.author + " " + this.titulo;
    }
}
let libro1 = new Libro("Garcia Marquez", "100 años de soledad");
console.log(libro1);
libro1.author = "autor2";
console.log(libro1);
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mover() {
        console.log("se mueve");
    }
}
class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }
}
class Gato extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    mover() {
        console.log("el gato se mueve");
    }
}
let benito = new Gato("Benito");
let snoopy = new Perro("Snoopy");
snoopy.mover();
benito.mover();
snoopy = benito;
snoopy.mover();
class Telefono {
    constructor(emai) {
        _emai.set(this, void 0);
        __classPrivateFieldSet(this, _emai, emai);
    }
    getEmai() {
        return __classPrivateFieldGet(this, _emai);
    }
}
_emai = new WeakMap();
let iphone = new Telefono("234452412334");
console.log("Emai " + iphone.getEmai());
class Persona {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}
class Ingeniero extends Persona {
    constructor(carrera, nombre, telefono) {
        super(nombre, telefono);
        this.carrera = carrera;
    }
    getNombre() {
        return this.nombre;
    }
}
let itc = new Ingeniero("ITC", "Diana", "32424232");
console.log(itc.getNombre());
//Genericos
function loquesea(valor) {
    if (valor) {
        return 100;
    }
    else {
        return "string";
    }
}
console.log("el valor de la funcion de lo que sea 1" + loquesea(true));
console.log("el valor de la funcion de lo que sea 2" + loquesea(false));
class ClaseTec {
    constructor(valor, valor2) {
        this.valor = valor;
        this.valor2 = valor2;
    }
    operacion() {
        return this.valor2;
    }
}
class Clase1 {
    constructor(number1) {
        this.num1 = number1;
    }
}
class Clase2 {
    constructor(number1) {
        this.num1 = number1;
    }
}
let obj1 = new ClaseTec(new Clase1(1), new Clase2(2));
console.log(obj1.operacion());
//# sourceMappingURL=ejemplo1.js.map