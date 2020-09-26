console.log("Hola mundo");

let nombre: string = "Juan";
console.log(nombre);
let numero1: number = 1;
console.log(numero1);
nombre = "Juan Velez";

let imprimirNombre = (name: string, matricula: string) => {
  console.log(name + " Matricula" + matricula);
  console.log(nombre);
};

imprimirNombre(nombre, "123456");
let verdadero: boolean = true;
// esto genera un nuevo tipo de variable
type NuevoTipo = [number, string, boolean];
// Crear un objeto de tipo array del tipo NuevoTipo
let listado: Array<NuevoTipo> = [];
let listadoNumber: Array<number>;

type Arreglo = NuevoTipo;
let arr: Arreglo;
arr = [1, "1", true];
//insertando un elemento de tipo NuevoTipo al arreglo de de tipo Arregle
listado.push(arr);

const constante1 = 2;
const constante2 = 4;
let variable = 2;

function suma(primero: number, segundo: number) {
  return primero + segundo;
}
console.log(suma(constante1, constante2));

let Num: number = 2;
console.log(Num);

var alumnos: [number, string][];
alumnos = [
  [213, "Juan"],
  [123, "Sandra"],
  [23, "Pedro"],
];
console.log(alumnos[0][0]);
alumnos.push([23, "Luis"]);

enum Salon {
  Profesor = "Juan Profesor",
  NombreMateria = "Desarrollo Web",
  Carrera = "ITC",
  Calificacion = 100,
}
enum Salon2 {
  Calificacion = 100,
}

console.log(getSalon("web"));

function getSalon(materia: string): Salon {
  return Salon.Profesor;
}
console.log("orientado a objetos");
//declaracion de las clases
class Libro {
  author: string;
  titulo: string;
  // todos los atributos tienen que estar dentro del constructor
  constructor(author: string, titulo: string) {
    this.author = author;
    this.titulo = titulo;
  }
  // no llevan function
  getNombreLibro(): string {
    return this.author + " " + this.titulo;
  }
}
let libro1 = new Libro("Garcia Marquez", "100 años de soledad");
console.log(libro1);
libro1.author = "autor2";
console.log(libro1);

class Animal {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  mover() {
    console.log("se mueve");
  }
}
class Perro extends Animal {
  constructor(nombre: string) {
    super(nombre);
  }
}
class Gato extends Animal {
  constructor(nombre: string) {
    super(nombre);
  }
  mover() {
    console.log("el gato se mueve");
  }
}
let benito = new Gato("Benito");
let snoopy: Animal = new Perro("Snoopy");
snoopy.mover();
benito.mover();
snoopy = benito;
snoopy.mover();

class Telefono {
  #emai: string;

  constructor(emai: string) {
    this.#emai = emai;
  }
  getEmai() {
    return this.#emai;
  }
}
let iphone: Telefono = new Telefono("234452412334");
console.log("Emai " + iphone.getEmai());

class Persona {
  protected nombre: string;
  private telefono: string;

  constructor(nombre: string, telefono: string) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Ingeniero extends Persona {
  protected carrera: string;
  constructor(carrera: string, nombre: string, telefono: string) {
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
function loquesea(valor: boolean): any {
  if (valor) {
    return 100;
  } else {
    return "string";
  }
}

console.log("el valor de la funcion de lo que sea 1" + loquesea(true));
console.log("el valor de la funcion de lo que sea 2" + loquesea(false));

class ClaseTec<T> {
  valor: T;
  valor2: T;

  constructor(valor: T, valor2: T) {
    this.valor = valor;
    this.valor2 = valor2;
  }

  operacion(): any {
    return this.valor2;
  }
}
class Clase1 {
  num1: number;
  constructor(number1: number) {
    this.num1 = number1;
  }
}
class Clase2 {
  num1: number;
  constructor(number1: number) {
    this.num1 = number1;
  }
}

let obj1 = new ClaseTec<Clase1>(new Clase1(1), new Clase2(2));
console.log(obj1.operacion());
