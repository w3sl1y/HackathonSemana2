// Ejercicio #0
let john = { 
    name: "John", 
    surname: "Smith", 
    id: 1 
};
let pete = { 
    name: "Pete", 
    surname: "Hunt", 
    id: 2 
};
let mary = { 
    name: "Mary", 
    surname: "Key", 
    id: 3 
};
let users = [ 
    john, 
    pete, 
    mary 
];
 
const usersMapped = users.map((item) => {
    return {
        fullname: `${item.name} ${item.surname}`,
        id:item.id
    }
})

    console.log(usersMapped)

// Ejercicio #1
let fruits = ["Apples", "Pear", "Orange"];// insertar un nuevo valor en la "copia"
let shoppingCart = fruits;shoppingCart.push("Banana");// ¿Qué hay en las frutas?
alert( fruits.length ); // ?
// Mostrará la nueva longitud de los objetos de "fruits" que sería 4, ya que se ha añadido "Banana" //

//Ejercicio #2
let styles = [
    "jazz", "blues"
];

styles.push ("Rock-n-Roll");

styles[Math.floor((styles.length - 1) / 2)] = "Classics";

alert( styles.shift() );

styles.unshift("Rap", "Reggae");

//Ejercicio #3
function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Un número...", 0);
  
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );

//Ejercicio #4
function filterRange(arr, a, b){
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered );

alert( arr );

//Ejercicio #5
function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted)

console.log(arr)

//Ejercicio #6
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

  let powerCalc = new Calculator;
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);

  //Ejercicio #8
  let message;

if (login == 'Empleado') {
  message = 'Hola';
} else if (login == 'Director') {
  message = 'Felicidades';
} else if (login == '') {
  message = 'Sin sesión';
} else {
  message = '';
}

  let message = (login == 'Empleado') ? 'Hola' :
  (login == 'Director') ? 'Saludos' :
  (login == '') ? 'Sin inicio de sesión' :
  '';