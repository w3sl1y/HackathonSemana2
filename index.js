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
