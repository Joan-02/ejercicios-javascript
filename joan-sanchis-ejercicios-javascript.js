/*
- Arrays sencillas
- Operar con arrays (.map .filter .find .some. every)
- Funciones complejas
- Ternarios
- Bucles for
- Ejercicio cupones Gutufacio
- WHAT-IT-DOES
- Dates
*/

/*ARRAYS  for.Each  .push   indexOf   .includes   .splice*/
/*Tareas y coches, listados de compra*/

/*
  1. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. 
*/

const taskList = [
  {
    tarea1: "estudiar",
    completed: true,
  },
  {
    tarea2: "limpiar",
    completed: true,
  },
  {
    tarea3: "comprar",
    completed: false,
  },
];

const taskIncompleted = [];

taskList.forEach(function (task) {
  /** task es el nombre del objeto */ console.log("se está llamando", task);
  if (!task.completed) {
    taskIncompleted.push(task);
  }
});

console.log(taskIncompleted);

/*
  2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. 
  A continuación filtra el array para mostrar todas las tareas que están completadas y luego todas las tareas que están pendientes.
*/

const tasks = [
  { name: "shopping", completed: false },
  { name: "homework", completed: true },
  { name: "clean", completed: true },
  { name: "sport", completed: true },
  { name: "reading", completed: false },
  { name: "cooking", completed: true },
];

const taskCompleted = [];
const taskIncompleted = [];

tasks.forEach(function (task) {
  if (task.completed === true) {
    taskCompleted.push(task);
  } else {
    taskIncompleted.push(task);
  }
});

console.log(taskCompleted);
console.log(taskIncompleted);

/*
  3. Crea un array que contenga un listado de vehículos. Usa al menos 5 propiedades en cada vehículo. 
*/

const vehicle = [
  {
    marca: "ford",
    modelo: "focus",
    tamaño: "mediano",
    color: "azul",
    año: 2022,
  },
  {
    marca: "citroen",
    modelo: "C4",
    tamaño: "grande",
    color: "gris",
    año: 2015,
  },
  {
    marca: "ferrari",
    modelo: "la ferrari",
    tamaño: "mediano",
    color: "rojo",
    año: 2024,
  },
  {
    marca: "toyota",
    modelo: "raptor",
    tamaño: "grande",
    color: "negro",
    año: 2020,
  },
  {
    marca: "fiat",
    modelo: "500",
    tamaño: "pequeño",
    color: "blanco",
    año: 2019,
  },
];

const taskIncompleted = [];

vehicle.forEach(function (ruperto) {
  /** ruperto es el nombre del objeto */
  console.log("se está llamando", ruperto);

  if (ruperto.color === "blanco") {
    taskIncompleted.push(ruperto);
  }
});

console.log(taskIncompleted);

/*
  4. Imagina que estás en un supermercado haciendo la compra y tienes que comprar lo que está 
  en la variable shoppingList.

  Crea una función a la que le pases dos parámetros, el array de la compra, y el elemento que has comprado
  esa función debe buscar el elemento en el array y eliminarlo.

  Por ejemplo, si le paso un array ['pepino', 'tomate', 'sandía'] y el string 'tomate', debe devolver un array ['pepino', 'sandía']
*/

const shoppingList = [
  "x2 leche de coco",
  "pimiento rojo",
  "pimiento verde",
  "x6 garrafas de agua",
  "aguacates",
  "avena",
  "tomate frito",
  "pepino",
];

function itemBought(list, itemToRemove) {
  const indexToRemove = list.indexOf(itemToRemove);

  if (indexToRemove > -1) {
    list.splice(indexToRemove, 1);
  }
}

itemBought(shoppingList, "pepino");
console.log(shoppingList);

/*
  Repite el ejercicio anterior sin modificar el array que le pasas como parámetro a la función.
  Si ya has hecho el ejercicio anterior sin modificar el array, hazlo modificándolo.
*/

const shoppingList = [
  "x2 leche de coco",
  "pimiento rojo",
  "pimiento verde",
  "x6 garrafas de agua",
  "aguacates",
  "avena",
  "tomate frito",
  "pepino",
];

function itemBought(list, itemToRemove) {
  const listCopy = [...list]; // list.slice()
  const indexToRemove = listCopy.indexOf(itemToRemove);

  if (indexToRemove > -1) {
    listCopy.splice(indexToRemove, 1);
  }

  return listCopy;
}

const arrayReturned = itemBought(shoppingList, "pepino");
console.log("returned", arrayReturned);
console.log("original", shoppingList);

/*
 5. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual 
 longitud donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
  - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const frutas = [
  "manzana",
  "pera",
  "uva",
  "sandía",
  "granada",
  "plátano",
  "melón",
];

const frutasConInfo = [];
const crecenEnArbol = ["manzana", "pera", "granada", "plátano"];

frutas.forEach(function (fruta) {
  if (crecenEnArbol.includes(fruta)) {
    frutasConInfo.push({ nombre: fruta, creceEnArbol: true });
  }
});

console.log(frutasConInfo);

/*
  6. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/

const shoppingCart = [
  { product: "Red wine", price: 20, quantity: 1 },
  { product: "water", price: 1, quantity: 2 },
  { product: "Pizza carbonara", price: 10, quantity: 3 },
  { product: "Tiramisú", price: 5.99, quantity: 2 },
];

let totalPriceProducts = 0;

shoppingCart.forEach(function (item) {
  totalPriceProducts += item.price * item.quantity;
});

console.log(totalPriceProducts);

/* 
   Dado el carrito de la compra del ejercicio anterior, transforma ese array en otro que contenga además los impuestos. 
   Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/

const shoppingCart = [
  { product: "Red wine", price: 20, quantity: 1 },
  { product: "water", price: 1, quantity: 2 },
  { product: "Pizza carbonara", price: 10, quantity: 3 },
  { product: "Tiramisú", price: 5.99, quantity: 2 },
];

const shoppingCartWithTaxes = [];

shoppingCart.forEach(function (item) {
  let totalPrice = item.price * item.quantity;
  const taxes = totalPrice * 0.1;
  const newItem = { ...item, taxes };

  shoppingCartWithTaxes.push(newItem);
});

console.log(shoppingCartWithTaxes);

/*
   7. Dado el carrito de la compra, implementa una función que permita 
   eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", 
   el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/

const shoppingCart = [
  { product: "Red wine", price: 20, quantity: 1 },
  { product: "water", price: 1, quantity: 2 },
  { product: "Pizza carbonara", price: 10, quantity: 3 },
  { product: "Tiramisú", price: 5.99, quantity: 2 },
];

function removeProduct(productName) {
  shoppingCart.forEach(function (item, index) {
    if (item.product === productName) {
      if (item.quantity === 1) {
        shoppingCart.splice(index, 1);
      } else {
        item.quantity -= 1;
      }
    }
  });
}

removeProduct("Tiramisú");
removeProduct("Red wine");

console.log(shoppingCart);

/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array.*/

function invert(array) {
  return array.map(function (number) {
    return number * -1;
  });
}

/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filter_list(l) {
  return l.filter(function (e) {
    return typeof e === "number";
  });
}

/*TIPOS DE ARRAYS  .filter    .map    .find   .some   .every*/
/*Diferentes tipos de arrays aplicadas al arbol*/

/*Indica las frutas que crecen en el arbol*/

const fruits = [
  "manzana",
  "pera",
  "granada",
  "plátano",
  "uva",
  "melón",
  "sandía",
];
const fruitsComplete = [];

fruits.forEach(function (fruitName) {
  fruitsComplete.push({
    name: fruitName,
    growInTree:
      fruitName === "manzana" ||
      fruitName === "pera" ||
      fruitName === "granada" ||
      fruitName === "plátano",
  });
});

console.log(fruitsComplete);

/*Filtra las frutas que crecen en el arbol con .filter*/

const fruits = [
  "manzana",
  "pera",
  "granada",
  "plátano",
  "uva",
  "melón",
  "sandía",
];
const fruitsComplete = [];

fruits.forEach(function (fruitName) {
  fruitsComplete.push({
    name: fruitName,
    growInTree:
      fruitName === "manzana" ||
      fruitName === "pera" ||
      fruitName === "granada" ||
      fruitName === "plátano",
  });
});

const growInTreeArray = fruitsComplete.filter(function (fruitInfo) {
  return fruitInfo.growInTree;
});
console.log(growInTreeArray);

/*Crea un nuevo array con las frutas que crecen en el arbol con .map*/

const fruits = [
  "manzana",
  "pera",
  "granada",
  "plátano",
  "uva",
  "melón",
  "sandía",
];

const fruitsComplete = fruits.map(function (fruitName) {
  return {
    name: fruitName,
    growInTree:
      fruitName === "manzana" ||
      fruitName === "pera" ||
      fruitName === "granada" ||
      fruitName === "plátano",
  };
});

console.log("array original", fruits);
console.log("array nuevo", fruitsComplete);

/*Ecuentra la primera fruta que no crece en un arbol*/

const fruits = [
  "manzana",
  "pera",
  "granada",
  "plátano",
  "uva",
  "melón",
  "sandía",
];

const fruitsComplete = fruits.map(function (fruitName) {
  return {
    name: fruitName,
    growInTree:
      fruitName === "manzana" ||
      fruitName === "pera" ||
      fruitName === "granada" ||
      fruitName === "plátano",
  };
});
console.log(fruitsComplete);

const fruitFound = fruitsComplete.find(function (fruitInfo) {
  return !fruitInfo.growInTree; /*esto es lo mismo que fruitInfo.growInTree === false;*/
});

console.log(fruitFound);

/*FUNCIONES MÁS COMPLEJAS */
/* hello    stringToArray   nameToInitials    golfOpenOrSenior    friends   numeroMenorMayor    smile   stringHighOrLow   
funcionGenerica   cajasYClientesKata*/

/* 1. wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]*/

function wave(str) {
  const result = [];
  const characters = str.split("");

  characters.forEach(function (char, index) {
    if (char === " ") {
      return;
    }

    const charactersCopy = [...characters];
    charactersCopy[index] = char.toUpperCase();
    result.push(charactersCopy.join(""));
  });
  console.log(result);
}

return wave("hello");

/*version 2*/

function wave(str) {
  const result = [];
  const characters = str.split("");

  characters.forEach(function (char, index) {
    characters[index] = char.toUpperCase();
    result.push(characters.join(""));
    characters[index] = char;
  });
  console.log(result);
}

return wave("hello");

/* 2. Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they"*/

function stringToArray(string) {
  return string.split(" ");
}

console.log(stringToArray("Robin Singh"));

/*
Ejercicio: Filtrar números pares y convertirlos a strings

Escribe una función llamada filterAndStringify que tome un array de números enteros como entrada. La función debe:

Filtrar los números pares del array.
Convertir los números pares filtrados a strings.
Devolver un nuevo array que contenga solo los números pares en formato de string, en el mismo orden en que aparecieron 
en el array original.

Reglas:
No debes modificar el array original.
Si el array está vacío o no contiene números pares, la función debe devolver un array vacío.
Ejemplos:

javascript
Copiar código
filterAndStringify([1, 2, 3, 4, 5, 6]); // ["2", "4", "6"]
filterAndStringify([7, 11, 15]);        // []
filterAndStringify([0, -2, 5, 8]);      // ["0", "-2", "8"]
filterAndStringify([]);                 // []
*/

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterAndStringify(numbersArray) {
  const numPar = [];

  numbersArray.forEach(function (number) {
    if (number % 2 === 0) {
      numPar.push(number.toString());
    }
  });

  return numPar;
}

console.log(filterAndStringify(numbersArray));

/*
Escribe una función llamada squareAndSum que:

Reciba un array de números enteros como entrada.
Eleve cada número al cuadrado (por ejemplo, 3 se convierte en 9).
Sume todos los cuadrados.
Devuelva la suma total de los cuadrados.

Reglas:
No debes modificar el array original.
Si el array está vacío, la función debe devolver 0.
*/

const numbers = [1, 2, 3, 4, 5];

function squareAndSum(numbers) {
  let sumTodo = 0;

  numbers.forEach(function (number) {
    const numElevado = Math.pow(number, 2);
    sumTodo += numElevado;
  });

  return sumTodo;
}

console.log(squareAndSum(numbers));

/*OPCION 2 CON .MAP*/

const numbers = [1, 2, 3, 4, 5];

function squareAndSum(numbers) {
  let sumTodo = 0;

  numbers.map(function (number) {
    const numElevado = Math.pow(number, 2);
    sumTodo += numElevado;
  });

  return sumTodo;
}

console.log(squareAndSum(numbers));

/* 3. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:Sam Harris => S.H , patrick feeney => P.F*/

function abbrevName(name) {
  const initials = [];
  const deStringAArray = name.split(" ");

  deStringAArray.forEach(function (word) {
    const firstLetter = word[0].toUpperCase();
    initials.push(firstLetter);
  });

  return initials.join(".");
}

console.log(abbrevName("Sam Harris"));

/* 4. To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the 
respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]*/

function openOrSenior(data) {
  const result = [];

  data.forEach(function ([age, handicap]) {
    if (age > 55 && handicap > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  });

  return result;
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);

/*Opcion 2*/

function openOrSenior(data) {
  const categories = [];

  data.forEach(function (memberInfo) {
    const age = memeberInfo[0];
    const handicap = memberInfo[1];

    if (age >= 55 && handicap > 7) {
      categories.push("Senior");
    } else {
      categories.push("Open");
    }
  });

  return categories;
}

/*Opcion 3*/

function openOrSenior(data) {
  return data.map(function (memberInfo) {
    const age = memberInfo[0];
    const handicap = memberInfo[1];

    if (age >= 55 && handicap > 7) {
      return "Senior";
    }
    return "Open";
  });
}

/* 5. Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise,
 you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []*/

function friend(friends) {
  const result = [];

  friends.forEach(function (name) {
    if (name.length === 4) {
      result.push(name);
    }
  });

  return result;
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

/* 6. Dado un array de enteros, elimina el valor más pequeño. No modifiques el array/lista original. 
Si hay múltiples elementos con el mismo valor, elimina el que tenga el índice más bajo. 
Si recibes un array/lista vacío, devuelve un array/lista vacío.
No cambies el orden de los elementos que quedan.

Ejemplos:
Entrada: [1,2,3,4,5]
Salida: [2,3,4,5]

Entrada: [5,3,2,1,4]
Salida: [5,3,2,4]

Entrada: [2,2,1,2,1]
Salida: [2,2,2,1]*/

function removeSmallest(numbers) {
  const copyArray = [...numbers];
  const minNumber = Math.min(...copyArray);
  const minIndex = copyArray.indexOf(minNumber);
  copyArray.splice(minIndex, 1);

  return copyArray;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));

/* 7. Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input 
(input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.*/

function countSmileys(arr) {
  let smileysNum = 0;

  arr.forEach(function (face) {
    if (face.length === 2) {
      if (
        (face[0] === ":" || face[0] === ";") &&
        (face[1] === ")" || face[1] === "D")
      ) {
        smileysNum += 1;
      }
    }

    if (face.length === 3) {
      if (
        (face[0] === ":" || face[0] === ";") &&
        (face[1] === "-" || face[1] === "~") &&
        (face[2] === ")" || face[2] === "D")
      ) {
        smileysNum += 1;
      }
    }
  });

  return smileysNum;
}

console.log(countSmileys([":-)", ";~D", ":-D", ":_D"]));

/*Opcion 2*/

function countSmileys(arr) {
  const validSmiles = arr.filter(function (face) {
    if (
      face.length === 2 &&
      (face[0] === ":" || face[0] === ";") &&
      (face[1] === ")" || face[1] === "D")
    ) {
      return true;
    }

    if (
      face.length === 3 &&
      (face[0] === ":" || face[0] === ";") &&
      (face[1] === "-" || face[1] === "~") &&
      (face[2] === ")" || face[2] === "D")
    ) {
      return true;
    }

    return false;
  });

  return validSmiles.length;
}

/*Función simplificada*/

function countSmileys(arr) {
  let smileysNum = 0;

  arr.forEach(function (face) {
    const hasCorrectEyes = face[0] === ":" || face[0] === ";";
    const mouthPosition = face.length - 1;
    const hasCorrectMouth =
      face[mouthPosition] === ")" || face[mouthPosition] === "D";

    if (face.length === 2) {
      if (hasCorrectEyes && hasCorrectMouth) {
        smileysNum += 1;
      }
    }

    if (face.length === 3) {
      if (
        hasCorrectEyes &&
        (face[1] === "-" || face[1] === "~") &&
        hasCorrectMouth
      ) {
        smileysNum += 1;
      }
    }
  });

  return smileysNum;
}

/* 8. In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.
Examples  highAndLow("1 2 3 4 5"); // return "5 1"*/

function highAndLow(numbers) {
  const numbersArray = numbers.split(" ");
  console.log(numbersArray);

  let highest = Number(numbersArray[0]);
  let lowest = Number(numbersArray[0]);

  numbersArray.forEach(function (numberStr) {
    console.log(typeof numberStr);
    const number = Number(numberStr);
    console.log(typeof number);

    if (number < lowest) {
      lowest = number;
    }

    if (number > highest) {
      highest = number;
    }
  });
  return `${highest} ${lowest}`;
}

console.log(highAndLow("1 1 1 1"));

/* 9. Una función que se llame filterArray y que sirva para filtrar cualquier array en base a unas condiciones que, 
    a priori no sabemos.

Lo que tiene que hacer esa función es recorrer el array que queramos filtrar, y para cada elemento comprobar si devuelve las condiciones. 
Si es así, el elemento se guardará en otro array que solo tendrá los elementos filtrados.

Después de recorrer la función, devolveremos el array filtrado. 


La función aceptará dos parámetros:
El primero será el array que queramos filtrar
El segundo será una función que se llamará para cada elemento del array a filtrar y que debe devolver true o false . 
Esta segunda función aceptará a su vez dos parámetros: el elemento del array (aka ruperto) y el índice que ocupa.*/

function filterArray(array, filterFunction) {
  const filteredArray = [];

  array.forEach(function (arrayItem, index) {
    if (filterFunction(arrayItem, index)) {
      filteredArray.push(arrayItem);
    }
  });

  return filteredArray;
}

const tasks = [
  { text: "hacer deberes", isCompleted: true },
  { text: "hacer funcion dentro de funcion", isCompleted: false },
];

function isTaskCompleted(task, index) {
  console.log("Comprobando tarea con índice", index);

  return task.isCompleted;
}

const completedTasks = filterArray(
  tasks,
  isTaskCompleted
); /*Esto sirve para traducir task y isTaskCompleted a array y fitlerFunction*/
console.log(completedTasks);

/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.
*/

function queueTime(customers, n) {
  const tills = Array(n).fill(0);

  customers.forEach(function (customer) {
    const minTill = Math.min(...tills);
    const positionTill = tills.indexOf(minTill);
    tills[positionTill] += customer;
  });

  return Math.max(...tills);
}

console.log(queueTime([5, 3, 4], 1)); // 12
console.log(queueTime([10, 2, 3, 3], 2)); // 10
console.log(queueTime([2, 3, 10], 2)); // 12

/*Ternarios*/

/** Crear una función que, dados dos parámetros, name y age:
 * Si name y age tienen un valor devolveremos Hola me llamo [NAME] y tengo [AGE] años
 * Si age no tiene valor pero name si devolveremos Hola me llamo [NAME]
 * Si ninguno tiene valor devolvermos No quiero decirte mi nombre, pringao
 */

const nameAndAge = (name, age) => {
  if (name && age) {
    return `Hola me llamo ${name} y tengo ${age} años`;
  } else if (name !== undefined && age === undefined) {
    return `Hola me llamo ${name}`;
  }
  return "No quiero decirte mi nombre, pringao";
};

console.log(nameAndAge("sfs", 7));

/*Opcion con ternarios*/

function greetings(name, age) {
  const normalizedName = name.trim();
  if (age && normalizedName) {
    return `Hola me llamo ${normalizedName} y tengo ${age} años`;
  }

  return !age && normalizedName
    ? `Hola me llamo ${normalizedName}`
    : "No quiero decirte mi nombre, pringao";
}

/**
 * Programa una función, que devuelva un nombre aleatorio para una variable. La función tendrá un
 * parámetro con el número de variables que tiene que devolver. El número de variables máximo es 2
 * y el mínimo es 1.
 *
 * Si el número es 2, la función debe devolver un array con dos cadenas de texto y si es uno, debe
 * devolver una cadena de texto (no un array, solo la cadena de texto).
 *
 * El nombre de las variables siempre será ruperto[sufijo], sufijo será un número aleatorio
 */

function randomName(numVariable) {
  if (numVariable < 1 || numVariable > 2) {
    return "El número de variables debe ser 1 o 2.";
  }

  return numVariable === 1
    ? `ruperto[${Math.floor(Math.random() * 10)}]`
    : [
        `ruperto[${Math.floor(Math.random() * 10)}]`,
        `ruperto[${Math.floor(Math.random() * 10)}]`,
      ];
}

console.log(randomName(0));
console.log(randomName(2));
console.log(randomName(1));
console.log(randomName(3));

/*Crea una función llamada greetPerson que reciba dos parámetros: name y greetingType.

Si ambos parámetros tienen valor:

Si greetingType es "formal", devuelve:
"Saludos cordiales, [NAME]."

Si greetingType es "casual", devuelve:
"¡Hola, [NAME]! ¿Qué tal?"

Si greetingType tiene cualquier otro valor, devuelve:
"Hola, [NAME]. No entiendo tu saludo."

Si solo name tiene valor:
Devuelve: "Hola, [NAME]. ¿Cómo estás?"

Si ningún parámetro tiene valor:
Devuelve: "No sé a quién saludar."

Si name está vacío pero greetingType tiene valor:
Devuelve: "No sé cómo saludar si no me dices tu nombre."*/

function greetPerson(name, greetingType) {
  return name !== undefined && greetingType === "formal"
    ? `Saludos cordiales ${name}`
    : name !== undefined && greetingType === "casual"
    ? `¡Hola, ${name}! ¿Qué tal?`
    : name !== undefined && greetingType !== undefined
    ? `Hola, ${name}. No entiendo tu saludo.`
    : name === undefined && greetingType === undefined
    ? `No sé a quién saludar.`
    : name !== undefined && greetingType === undefined
    ? `Hola, ${name}. ¿Cómo estás?`
    : `No sé cómo saludar si no me dices tu nombre.`;
}

console.log(greetPerson("Ana", "formal")); // "Saludos cordiales, Ana."
console.log(greetPerson("Carlos", "casual")); // "¡Hola, Carlos! ¿Qué tal?"
console.log(greetPerson("Luis", "especial")); // "Hola, Luis. No entiendo tu saludo."
console.log(greetPerson("Marta")); // "Hola, Marta. ¿Cómo estás?"
console.log(greetPerson("", "formal")); // "No sé cómo saludar si no me dices tu nombre."
console.log(greetPerson()); // "No sé a quién saludar."

/*
Ejercicio 1: Encuentra el producto más caro 

Descripción: Tienes un carrito de compras representado como un array de objetos. Escribe una función llamada findMostExpensive 
que:

Devuelva el producto más caro (el que tiene el precio total más alto: price * quantity).
Si el carrito está vacío, la función debe devolver "El carrito está vacío".
*/

const shoppingCart = [
  { product: "Botella de agua", price: 1.5, quantity: 3 },
  { product: "Bolsa de palomitas", price: 2, quantity: 2 },
  { product: "Tarta", price: 10, quantity: 1 },
];

let shoppingCartAndTotalPrice = [];

const findMostExpensive = (shoppingCart) => {
  shoppingCart.forEach((item) => {
    const totalPrice = item.price * item.quantity;
    shoppingCartAndTotalPrice.push(totalPrice);
  });

  return shoppingCart.find((element) => {
    let maxNumber = Math.max(...shoppingCartAndTotalPrice);
    return maxNumber === element.price * element.quantity;
  });
};

console.log(findMostExpensive(shoppingCart));
console.log(shoppingCartAndTotalPrice);
// Salida esperada: { product: "Tarta", price: 10, quantity: 1 }

/*
Descripción: Escribe una función llamada groupTasksByStatus que:

Reciba un array de tareas.
Devuelva un objeto con dos propiedades:
completedTasks: Array con las tareas completadas.
pendingTasks: Array con las tareas pendientes.
*/

const tasks = [
  { name: "Estudiar JavaScript", completed: false },
  { name: "Hacer la compra", completed: true },
  { name: "Leer un libro", completed: false },
  { name: "Limpiar la casa", completed: true },
];

const groupTasksByStatus = (tasks) => {
  const taskCompleted = [];
  const taskIncompleted = [];

  tasks.forEach((task) => {
    if (task.completed === true) {
      taskCompleted.push(task);
    } else {
      ç;
      taskIncompleted.push(task);
    }
  });

  return { taskCompleted, taskIncompleted };
};

console.log(groupTasksByStatus(tasks));
console.log(taskCompleted);
console.log(taskIncompleted);

/*BUCLES FOR*/

/**
 * Escribe una función que dado un número, escriba su tabla de multiplicar en consola
 * Por ejemplo si le digo 1 debe escribir:
 *  1 x 1 = 1
 *  1 x 2 = 2
 *  .........
 */

function consolaMultiplicar(num) {
  for (let multiplicando = 1; multiplicando <= 10; multiplicando++) {
    console.log(`${num} x ${multiplicando} = ${num * multiplicando}`);
  }
}

consolaMultiplicar(1);

/**
 * Haz una función que dado un número, escriba todos los números pares desde el 0 al número introducido.
 * Por ejemplo si introduzco 6, mostrará:
 *  0
 *  2
 *  4
 *  6
 */

const numPar = (num) => {
  for (let par = 0; par <= num; par++) {
    if (par % 2 === 0) {
      console.log(par);
    }
  }
};

numPar(6);

/**
 * Cambia la función anterior para no usar condicionales
 */

const numPar = (num) => {
  for (let par = 0; par <= num; par += 2) {
    console.log(par);
  }
};

numPar(6);

/** Haz una función que, dado un número, escriba una cuenta atrás de ese número en pantalla.
 * Por ejemplo, si introduzco 3, escribirá:
 * 3
 * 2
 * 1
 * 0
 */

const cuentaAtras = (num) => {
  for (let ruperto = num; ruperto >= 0; ruperto--) {
    console.log(ruperto);
  }
};

cuentaAtras(3);

/*EJERCICIO GUTUFACIO CARRITO DE LA COMPRA*/
/**
 * Gutufacio está programando un carrito de la compra y está pensando en como modelar los objetos.
 * Imagina que en el carrito de la compra hay los siguientes elementos:
 *  7 botellas de agua - 700€
 *  2 bolsas de palomitas: 255.5€
 *  1 kg de azúcar: 1000€
 *  728 panes de hamburguesa: 928€
 *  28 kg de tofu ahumado: 2223€
 * Escribe un array para representar esa información.
 */
const shoppingCart = [
  {
    name: "Botellas de agua",
    quantity: 7,
    price: 100,
  },
  {
    name: "Bolsa de palomitas",
    quantity: 2,
    price: 127.75,
  },
  {
    name: "1Kg azúcar",
    quantity: 1,
    price: 1000,
  },
  {
    name: "Pan de hamburguesa",
    quantity: 728,
    price: 1.27,
  },
  {
    name: "1kg tofu",
    quantity: 28,
    price: 79.39,
  },
];

function getShoppingCartTotalPrice(shoppingCart) {
  let totalPrice = 0;
  shoppingCart.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });
  return totalPrice;
}

function isSpecialSpanishRegion(region) {
  return ["Ceuta", "Melilla", "Canarias"].includes(region);
}

/**
 * Al carrito vamos a aplicarle los impuestos.
 * Los impuestos dependerán del país. Gutufacio no sabe mucho de esto y lo único que sabe es que en España
 * los impuestos son el 21%, salvo en Ceuta, Melilla y Canarias, que no hay impuestos.
 *
 * Además, Gutufasio es UX, así que ha decidido poner en la interfaz los impuestos de cada elemento del array
 * por lo que necesita que en el array, cada elemento tenga, además de su precio, el impuesto.
 *
 * Crea una función que se llame calculateTaxes, que acepte dos parámetros de entrada:
 * - country
 * - state
 * La función debe devolver un nuevo array incluyendo el precio con impuestos y el precio total para cada elemento.
 */

function shoppingCartWithTaxes(country, state) {
  const taxRate =
    country === "España" && !isSpecialSpanishRegion(state) ? 0.21 : 0;

  return shoppingCart.map((product) => {
    return {
      ...product,
      taxes: taxRate * product.price,
    };
  });
}

/**
 * Gutufasio quiere añadir cupones, porque total, como cobra la botella de agua a 100€, pues se lo puede permitir.
 *
 * Los cupones tienen 3 propiedades:
 * - El código del cupón
 * - El porcentage de descuento que tiene
 * - El mínimo de dinero que tiene que costar el carrito de la compra sin impuestos, para que el cupón aplique
 *
 *
 * Los cupones válidos serán:
 *  GUTUFACIO10, ROBUSTIO20, LOSORNITORRINCOSMOLANUNHUEVO50
 *  Los porcentajes de descuento son 10, 20 y 50 respectivamente, y las cantidades mínimas para que funcionen son
 *  1000€, 20€ y 5000€
 *
 * Como ya hemos dicho, Gutufacio le gusta poner toda la información en la interfaz, y quiere poner el precio original de cada
 * elemento y el precio después de aplicar el cupón.
 *
 * La función para comprobar y aplicar un cupón de descuento se llamará applyCoupon y tendrá dos parámetros:
 *  - El cupón de descuento
 *  - El array con el carrito de la compra
 * La función debe devolver el nuevo carrito con el cupón aplicado si es válido
 *
 * Nota, el descuento se aplica sobre el precio sin impuestos. Los impuestos se calculan sobre el precio base.
 */

function getValidCoupon(couponCode) {
  const validCoupons = [
    {
      code: "GUTUFACIO10",
      discount: 0.1,
      minAmount: 1000,
    },
    {
      code: "ROBUSTIO20",
      discount: 0.2,
      minAmount: 20,
    },
    {
      code: "LOSORNITORRINCOSMOLANUNHUEVO50",
      discount: 0.5,
      minAmount: 5000,
    },
  ];

  return validCoupons.find((coupon) => {
    return coupon.code === couponCode;
  });
}

function applyCoupon(couponCode, shoppingCart) {
  const coupon = getValidCoupon(couponCode);

  if (!coupon) {
    console.error("Cupón no válido");
    return shoppingCart;
  }

  let totalPrice = getShoppingCartTotalPrice(shoppingCart);

  if (totalPrice < coupon.minAmount) {
    console.error(
      "Cupón no válido porque no has llegado al min amount",
      coupon.minAmount
    );
    return shoppingCart;
  }

  return shoppingCart.map((product) => {
    const unitPriceDiscount = product.price * coupon.discount;
    return {
      ...product,
      priceWithDiscount: product.price - unitPriceDiscount,
    };
  });
}

/**
 * Al carrito de la compra de Gutufasio le vamos a aplicar ahora los gastos de envío.
 * Los gastos de envío dependerán del país y de la región.
 *  Si el país es españa:
 *      Si la región es Ceuta, Melilla o Canarias, los gastos de envío serán 2€
 *      Si la región es otra serán de 1.5€
 *  Si el país es Francia los gastos de envío serán 500€, porque Gutufasio odia a los franceses y no quiere enviarles nada
 *  salvo a la región de Alsacia, que está muy bonita en navidad, así que los gastos de envío serán 5€ en ese caso.
 *  Si el país es Andorra, los gastos de envío serán 100€, ya que no pagan impuestos pues que paguen por el envío.
 *  En cualquier otro caso los gastos de envío serán 30€
 */

function calculateShippingCosts(country, state, shoppingCart) {
  if (country === "Francia") {
    return state === "Alsacia" ? 5 : 500;
  }

  let totalPrice = getShoppingCartTotalPrice(shoppingCart);

  if (totalPrice >= 100) {
    return 0;
  }

  if (country === "España") {
    return isSpecialSpanishRegion(state) ? 2 : 1.5;
  }

  if (country === "Andorra") {
    return 100;
  }

  return 30;
}

/* EJERCICIO WHAT-IT-DOES */

const AVAILABLE_NETWORKS = [
  "twitter",
  "facebook",
  "instagram",
  "tikTok",
  "youtube",
];

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagram: true,
  tikTok: false,
  youtube: false,
};

const CONNECTED_NETWORKS_ACCOUNTS = {
  twitter: "josmidgg",
  facebook: undefined,
  instagram: "gutufacio",
  tikTok: undefined,
  youtube: "robustio",
};

const isConnected = (network) => {
  return CONNECTED_NETWORKS[network];
};

console.log("Ejercicoi1", isConnected("facebook"));

/*
 1. Intenta deducir qué hace el código de arriba y escríbelo aquí.
*/

///Este codigo te dice si la red social que le pones esta conectada o no mediante true o false.

/**
 * 2. Crea una función que, dado el nombre de una red social, te diga cual es la cuenta del usuario
 */

const AVAILABLE_NETWORKS = [
  "twitter",
  "facebook",
  "instagram",
  "tikTok",
  "youtube",
];

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagram: true,
  tikTok: false,
  youtube: false,
};

const CONNECTED_NETWORKS_ACCOUNTS = {
  twitter: "josmidgg",
  facebook: undefined,
  instagram: "gutufacio",
  tikTok: undefined,
  youtube: "robustio",
};

const username = (socialMedia) => {
  return CONNECTED_NETWORKS_ACCOUNTS[socialMedia];
};

console.log(username("facebook"));

/**
 * 3. Crea una función que, dado un array de redes sociales, te devuelva otro array indicando la red,
 * si está conectada y con el nombre de usuario si la red está conectada.
 *
 * Por ejemplo, con el array ['twitter', 'youtube'], debería devolverte un array
 * [{ network: 'twitter', isConnected: true, username: 'josmidgg' }, { network: 'youtube', isConnected: false }]
 */

const AVAILABLE_NETWORKS = [
  "twitter",
  "facebook",
  "instagram",
  "tikTok",
  "youtube",
];

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagram: true,
  tikTok: false,
  youtube: false,
};

const CONNECTED_NETWORKS_ACCOUNTS = {
  twitter: "josmidgg",
  facebook: undefined,
  instagram: "gutufacio",
  tikTok: undefined,
  youtube: "robustio",
};

const isConnected = (network) => {
  return CONNECTED_NETWORKS[network];
};

const username = (socialMedia) => {
  return CONNECTED_NETWORKS_ACCOUNTS[socialMedia];
};

const chekArray = (AVAILABLE_NETWORKS) =>
  AVAILABLE_NETWORKS.map((socialMedia) => ({
    network: socialMedia.toLowerCase(),
    isConnected: isConnected(socialMedia),
    username: username(socialMedia),
  }));

console.log(
  chekArray(["twitter", "facebook", "instagram", "tikTok", "youtube"])
);

/**
 * 4. modifica la función isConnected y la función del ejercicio 2 para que ignore mayúsculas y salga el
 * mismo resultado si el usuario pone 'twitter' o 'tWiTter'
 */

const AVAILABLE_NETWORKS = [
  "twitter",
  "facebook",
  "instagram",
  "tikTok",
  "youtube",
];

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagram: true,
  tikTok: false,
  youtube: false,
};

const CONNECTED_NETWORKS_ACCOUNTS = {
  twitter: "josmidgg",
  facebook: undefined,
  instagram: "gutufacio",
  tikTok: undefined,
  youtube: "robustio",
};

const isConnected = (network) => {
  const networkInLowerCase = network.toLowerCase();

  if (networkInLowerCase === "tiktok") {
    return CONNECTED_NETWORKS.tikTok;
  }

  return CONNECTED_NETWORKS[networkInLowerCase];
};

const username = (socialMedia) => {
  const socialMediaInLowerCase = socialMedia.toLowerCase();

  if (socialMediaInLowerCase === "tiktok") {
    return CONNECTED_NETWORKS_ACCOUNTS.tikTok;
  }

  return CONNECTED_NETWORKS_ACCOUNTS[socialMediaInLowerCase];
};

const chekArray = (AVAILABLE_NETWORKS) =>
  AVAILABLE_NETWORKS.map((socialMedia) => ({
    network: socialMedia.toLowerCase(),
    isConnected: isConnected(socialMedia),
    username: username(socialMedia),
  }));

console.log(
  chekArray(["TWitter", "facebook", "INSTAGRAM", "tikTok", "youtube"])
);

/**
 * 5. Crea un objeto cuyas propiedades sean la red social con un nombre correcto para javascript y cuyo valor sea el nombre de la
 * red social. Por ejemplo el valor de la propiedad tikTok sería Tik Tok
 */

const CORRECT_NETWORKS_NAME = {
  twitter: "Twitter",
  facebook: "Facebook",
  instagram: "Instagram",
  tikTok: "Tik Tok",
  youtube: "YouTube",
};

/**
 * 6. Crea una función que dado un array de redes sociales, te devuelva la misma información del ejercicio 3
 * incluyendo el nombre de la red social.
 */

const AVAILABLE_NETWORKS = [
  "twitter",
  "facebook",
  "instagram",
  "tikTok",
  "youtube",
];

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagram: true,
  tikTok: false,
  youtube: false,
};

const CONNECTED_NETWORKS_ACCOUNTS = {
  twitter: "josmidgg",
  facebook: undefined,
  instagram: "gutufacio",
  tikTok: undefined,
  youtube: "robustio",
};

const CORRECT_NETWORKS_NAME = {
  twitter: "Twitter",
  facebook: "Facebook",
  instagram: "Instagram",
  tikTok: "Tik Tok",
  youtube: "YouTube",
};

const isConnected = (network) => {
  const networkInLowerCase = network.toLowerCase();

  const isNetworkConnected =
    networkInLowerCase === "tiktok"
      ? CONNECTED_NETWORKS.tikTok
      : CONNECTED_NETWORKS[networkInLowerCase];

  return isNetworkConnected;
};

const username = (socialMedia) => {
  const socialMediaInLowerCase = socialMedia.toLowerCase();

  if (socialMediaInLowerCase === "tiktok") {
    return CONNECTED_NETWORKS_ACCOUNTS.tikTok;
  }

  return CONNECTED_NETWORKS_ACCOUNTS[socialMediaInLowerCase];
};

const correctNetworkName = (socialMedia) => {
  return CORRECT_NETWORKS_NAME[socialMedia];
};

const chekArray = (AVAILABLE_NETWORKS) =>
  AVAILABLE_NETWORKS.map((socialMedia) => ({
    network: socialMedia.toLowerCase(),
    isConnected: isConnected(socialMedia),
    username: username(socialMedia),
    correctName: correctNetworkName(socialMedia),
  }));

console.log(
  chekArray(["TWitter", "facebook", "INSTAGRAM", "tikTok", "youtube"])
);

/**
 * 7. Crea una función que dado un array de redes sociales, devuelva lo mismo que la función 6 pero solo
 * de las redes que están conectadas sin modificar la función 6.
 */

const onlyConnectedNetworks = (AVAILABLE_NETWORKS) => {
  chekArray(AVAILABLE_NETWORKS).filter(
    (socialMedia) => socialMedia.isConnected
  ); ///Al escribir return socialMedia.isConnected, estás diciendo: "Incluye este objeto en el array final solo si su propiedad isConnected es true".
};

console.log(
  onlyConnectedNetworks([
    "TWitter",
    "facebook",
    "INSTAGRAM",
    "tikTok",
    "youtube",
  ])
);

/**
 * 8. Algunas redes sociales no te dan el nombre correcto del usuario y te dan un número muy largo como cadena
 * de texto. Dado el siguiente objeto, modifica las funciones necesarias anteriores para que en ese caso,
 * el nombre del usuario que devuelva sea "Usuario anónimo" en todos los casos.
 */

const CONNECTED_NETWORKS_ACCOUNTS_2 = {
  twitter: "232424124314",
  facebook: undefined,
  instagram: "gutufacio",
  tikTok: undefined,
  youtube: "robustio",
};

const username = (...socialMedias) => {
  return socialMedias.map((socialMedia) => {
    const account = CONNECTED_NETWORKS_ACCOUNTS_2[socialMedia.toLowerCase()];

    if (!isNaN(account)) {
      return "Usuario anónimo";
    } else {
      return account;
    }
  });
};

console.log(username("twitter", "facebook", "instagram", "tikTok", "youtube"));

/**
 9. Crea una función a la que le vamos a pasar un único parámetro, la red social. Usando alguna de las
 funciones que has creado anteriormente y una de las variables definidas (deduce cual), debe devolver
 el nombre del usuario en esa red social si tenemos su información, o 'Nunca has conectado tu cuenta'
 si no la tenemos.
 */

const CONNECTED_NETWORKS_ACCOUNTS_2 = {
  twitter: "232424124314",
  facebook: undefined,
  instagram: "gutufacio",
  tikTok: undefined,
  youtube: "robustio",
};

const username = (...socialMedias) => {
  return socialMedias.map((socialMedia) => {
    const account = CONNECTED_NETWORKS_ACCOUNTS_2[socialMedia.toLowerCase()];

    if (!isNaN(account)) {
      return "Usuario anónimo";
    } else if (account === undefined) {
      return "Nunca has conectado tu cuenta";
    } else {
      return account;
    }
  });
};

console.log(username("instagram"));

/**
 * 11. Algunas redes sociales se pueden conectar de distintas formas en función de ciertas características.
 * Por ejemplo, Tik Tok se puede conectar con cuentas business y cuentas personales. Sin embargo, si tienes
 * una cuenta de tipo business no puedes conectar una de tipo personal y viceversa.
 *
 * Modifica todos los ejercicios anteriores para que tikTok no exista y se convierta en tikTokBusiness
 * y tikTokPersonal, pero que el usuario solo tenga que introducir tikTok.
 *
 * Por ejemplo, si tikTokPersonal o tikTokBusiness están conectado, al introducir isConnected('tikTok') debería
 * decir true.
 */

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagram: true,
  tikTokBusiness: true,
  tikTokPersonal: false,
  youtube: false,
};

const CONNECTED_NETWORKS_ACCOUNTS = {
  twitter: "josmidgg",
  facebook: undefined,
  instagram: "gutufacio",
  tikTokBusiness: "business_account",
  tikTokPersonal: undefined,
  youtube: "robustio",
};

const CORRECT_NETWORKS_NAME = {
  twitter: "Twitter",
  facebook: "Facebook",
  instagram: "Instagram",
  tikTokBusiness: "TikTok Business",
  tikTokPersonal: "TikTok Personal",
  youtube: "YouTube",
};

const isConnected = (network) => {
  const networkInLowerCase = network.toLowerCase();

  if (networkInLowerCase === "tiktok") {
    return (
      CONNECTED_NETWORKS.tikTokBusiness || CONNECTED_NETWORKS.tikTokPersonal
    );
  }

  return CONNECTED_NETWORKS[networkInLowerCase];
};

const username = (socialMedia) => {
  const socialMediaInLowerCase = socialMedia.toLowerCase();

  if (socialMediaInLowerCase === "tiktok") {
    return (
      CONNECTED_NETWORKS_ACCOUNTS.tikTokBusiness ||
      CONNECTED_NETWORKS_ACCOUNTS.tikTokPersonal
    );
  }

  return CONNECTED_NETWORKS_ACCOUNTS[socialMediaInLowerCase];
};

const correctNetworkName = (socialMedia) => {
  return CORRECT_NETWORKS_NAME[socialMedia];
};

const chekArray = (AVAILABLE_NETWORKS) =>
  AVAILABLE_NETWORKS.map((socialMedia) => ({
    network: socialMedia.toLowerCase(),
    isConnected: isConnected(socialMedia),
    username: username(socialMedia),
    correctName: correctNetworkName(socialMedia),
  }));

console.log(isConnected("tikTok")); // true (porque tikTokBusiness está conectado)
console.log(username("tikTok")); // "business_account"
console.log(chekArray(["twitter", "facebook", "tikTok", "youtube"]));

/* EJERCICIO WHAT-IT-DOES-2 */

/**
 * 1. Averigua qué hace la siguiente función
 */
const getFileNameFromUrl = (url, includeExtension = false) => {
  try {
    const urlObject = new URL(url);
    if (urlObject) {
      const fileName = urlObject.pathname.split("/").pop();
      if (fileName) {
        if (includeExtension) return fileName;
        return getFileNameWithoutExtension(fileName);
      }
    }
  } catch (error) {
    console.error("Cannot get filename from url: " + url);
  }
};

const getFileNameWithoutExtension = (fileName) => {
  if (!fileName) return;
  const lastDotIndex = fileName.lastIndexOf(".");
  return lastDotIndex > 0 ? fileName.substring(0, lastDotIndex) : fileName;
};

/* En esta funcion ejecutamos un codigo utilizando el try and catch, primero se ejecuta el codigo del try y en el
caso de que ocurra un error parara el codigo del try y se ejecutara el catch informando del error. En la funcion
estamos intentando obetenr el nombre de una archivo mediante una url, para ello obtenemos la URL e intentamos coger
la parte de la url despues del dominio con .pathname, despues la convertimos en un array con .split(/), y despues
.pop() para coger la utlima parte del array. Si se obtiene el nombre del archivo se escribira en pantalla, 
si no se obtiene se ejecutara la funcion getFileNameWithoutExtension. La funcion getFileWithoutExtendion devuelve el nombre
del archivo y si tiene una extendion la elimina, si no la tiene devuelve el nombre del archivo. Por ultimo,
si no funciona el codigo del try o la funcion getFileNameWithoutExtension, se ejecutara el apartado del catch 
indicando el error*/

/* EJERCICIO WHAT-IT-DOES-3 */
/**
 * 1. Averigüa qué debería hacer esta función
 */
const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;

const getCountdownShapeFromSeconds = (seconds) => {
  if (!seconds) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(seconds / DAY_IN_SECONDS);
  const hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS);

  return {
    days: days,
    hours: hours,
    minutes: Math.floor(seconds / HOUR_IN_SECONDS / MINUTE_IN_SECONDS),
    seconds: Math.floor(seconds % 60),
  };
};

console.log(getCountdownShapeFromSeconds(3661));

/* Esta funcion deberia calcular el numero total de dias, horas, minutos y segundos que caben dentro de la cantidad 
de segundos que le indiquemos a la función.*/

/**
 * 2. La función no está funcionando bien, averigua qué está fallando y arréglalo.
 */

const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;

const getCountdownShapeFromSeconds = (seconds) => {
  if (!seconds) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(seconds / DAY_IN_SECONDS);
  const hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS);

  return {
    days: days,
    hours: hours,
    minutes: Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS),
    seconds: Math.floor(seconds % 60),
  };
};

console.log(getCountdownShapeFromSeconds(3661));

/**
 * 3. Añade un parámetro a la función para que el usuario pueda elegir si quiere que salgan los días como horas.
 */

const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;

const getCountdownShapeFromSeconds = (seconds, showDaysAsHours = false) => {
  if (!seconds) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(seconds / DAY_IN_SECONDS);
  let hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS);

  if (showDaysAsHours) {
    hours += days * 24;
    return {
      hours: hours,
      minutes: Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS),
      seconds: Math.floor(seconds % 60),
    };
  }

  return {
    days: days,
    hours: hours,
    minutes: Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS),
    seconds: Math.floor(seconds % 60),
  };
};

console.log(getCountdownShapeFromSeconds(86400, true));

/* EJERCICIO WHAT-IT-DOES-4 */
/*
 * 1. Averigua qué debería hacer esta función. Tip: tiene cosas que pueden o no pasarse
 */
const getCountdownFormatted = (params) => {
  const { days, hours, minutes, seconds } = params;

  const zeroPad = (value) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };

  const getFormattedPadOrEmpty = (value) => {
    return value === "undefined" ? "" : `${zeroPad(value)}:`;
  };

  const formattedDays = getFormattedPadOrEmpty(days);
  const formattedHours = getFormattedPadOrEmpty(hours);
  const formattedMinutes = getFormattedPadOrEmpty(minutes);

  return `${formattedDays}${formattedHours}${formattedMinutes}${zeroPad(
    seconds
  )}`;
};

console.log(
  getCountdownFormatted({ days: 2, hours: 5, minutes: 30, seconds: 45 })
);

/* Esta funcion realiza una cuentra a tras formateada. Cuando les pasamos los parametros se almacenan en el objeto params
que se encuentra arriba de todo de la funcion. Despues la funcion getFormattedPadOrEmpty mira si el valor es undefined
y devuelve una cadena vacia, si no lo es ejecuta la funcion zeroPad añadiendo los :. Cuando se ejecuta la funcion
zeroPad se comprueba si el valor es mayor que 10 y se añade un 0 delante, si no se devulve el valor sin añadir nada. Por
ultimo utilizamos un return general que devuelve los numeros en orden.*/

/**
 * 2. Arregla los bugs de la función.
 */

const getCountdownFormatted = (params) => {
  const { days, hours, minutes, seconds } = params;

  const zeroPad = (value) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };

  const getFormattedPadOrEmpty = (value) => {
    return value === "undefined" ? "" : `${zeroPad(value)}:`;
  };

  const formattedDays = getFormattedPadOrEmpty(days);
  const formattedHours = getFormattedPadOrEmpty(hours);
  const formattedMinutes = getFormattedPadOrEmpty(minutes);

  return `${formattedDays}${formattedHours}${formattedMinutes}${zeroPad(
    seconds
  )}`;
};

console.log(
  getCountdownFormatted({ days: 2, hours: 5, minutes: 30, seconds: 45 })
);

/**
 * 3. Añádele un parámetro para que los días vayan en horas.
 */

// DATES

/**
 * 1. Crea una función que sume un número de días a una fecha.
 */

const addDaysToADate = (date, days) => {
  const dateObj = new Date(date);
  const dateToMs = dateObj.getTime();
  const daysToMs = days * 24 * 60 * 60 * 1000;
  const addingDaysToDate = dateToMs + daysToMs;

  return new Date(addingDaysToDate);
};

console.log(addDaysToADate("2024-12-31T15:21:38.207Z", 5));

/**
 * 2. Crea una función que reste un número de días a una fecha.
 */

const subtractDaysToADate = (date, days) => {
  const dateObj = new Date(date);
  const dateToMs = dateObj.getTime();
  const daysToMs = days * 24 * 60 * 60 * 1000;
  const subtractingDaysToDate = dateToMs - daysToMs;

  return new Date(subtractingDaysToDate);
};

console.log(subtractDaysToADate("2024-12-31T15:21:38.207Z", 1));

/**
 * 3. Modifica la función del ejercicio 1 para que sea más genérica y que permita sumar días, horas, minutos o segundos
 */

const addTimeToADate = (date, days, unitToSum) => {
  const dateObj = new Date(date);
  let timeToAdd;

  if (unitToSum === "days") {
    timeToAdd = days * 1000 * 60 * 60 * 24;
  }

  if (unitToSum === "hours") {
    timeToAdd = days * 1000 * 60 * 60;
  }

  if (unitToSum === "minutes") {
    timeToAdd = days * 1000 * 60;
  }

  if (unitToSum === "seconds") {
    timeToAdd = days * 1000;
  }

  const dateToMs = dateObj.getTime();
  const addingTimeToDate = dateToMs + timeToAdd;

  return new Date(addingTimeToDate);
};

console.log(addTimeToADate("2024-12-31T15:21:38.207Z", 1, "days"));

/**
 * 4.  Modifica la función del ejercicio 2 para que sea más genérica y que permita restar días, horas, minutos o segundos
 */

const subtractTimeToADate = (date, days, unitToSum) => {
  const dateObj = new Date(date);
  let timeToAdd;

  if (unitToSum === "days") {
    timeToAdd = days * 1000 * 60 * 60 * 24;
  }

  if (unitToSum === "hours") {
    timeToAdd = days * 1000 * 60 * 60;
  }

  if (unitToSum === "minutes") {
    timeToAdd = days * 1000 * 60;
  }

  if (unitToSum === "seconds") {
    timeToAdd = days * 1000;
  }

  const dateToMs = dateObj.getTime();
  const subtractingTimeToDate = dateToMs - timeToAdd;

  return new Date(subtractingTimeToDate);
};

console.log(subtractTimeToADate("2024-12-31T15:21:38.207Z", 1, "hours"));

/**
 * 5. Crea una función que compruebe si una fecha está entre otras dos fechas.
 */

const isBetweenDates = (startDate, finishDate, dateToCheck) => {
  const startDateObj = new Date(startDate);
  const startDateToMs = startDateObj.getTime();

  const finishDateObj = new Date(finishDate);
  const finishDateToMs = finishDateObj.getTime();

  const dateToCheckObj = new Date(dateToCheck);
  const dateToCheckToMs = dateToCheckObj.getTime();

  if (dateToCheckToMs >= startDateToMs && dateToCheckToMs <= finishDateToMs) {
    return "dateToCheck esta entre startDate y finishDate";
  }
  return "dateToCheck no esta entre startDate y finishDate";
};

console.log(
  isBetweenDates(
    "2024-12-01T15:21:38.207Z",
    "2024-12-03T15:21:38.207Z",
    "2024-12-02T15:21:38.207Z"
  )
);

/**
 * 6. Crea una función que devuelva cuánto tiempo ha pasado desde una fecha y la fecha actual en días, horas, minutos
 * y segundos. Por ejemplo debe devolver un string que sea, "han pasado 2 días, 4 horas, 2 minutos y 1 segundos
 * desde [FECHA_INTRODUCIDA]}"
 */

const calculateTimeSince = (date1) => {
  const date1Obj = new Date(date1);
  const now = new Date();
  const msBetweenDates = Math.abs(date1Obj.getTime() - now.getTime());

  const days = Math.floor(msBetweenDates / (24 * 60 * 60 * 1000));
  const remainingMsAfterDays = msBetweenDates % (24 * 60 * 60 * 1000);

  const hours = Math.floor(remainingMsAfterDays / (60 * 60 * 1000));
  const remainingMsAfterHours = remainingMsAfterDays % (60 * 60 * 1000);

  const minutes = Math.floor(remainingMsAfterHours / (60 * 1000));
  const remainingMsAfterMinutes = remainingMsAfterHours % (60 * 1000);

  const seconds = Math.floor(remainingMsAfterMinutes / 1000);

  return `Han pasado ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos desde ${date1}`;
};

console.log(calculateTimeSince("2025-01-12T09:02:16.459Z"));

/**
 * 7. Si no lo has hecho, modifica la función anterior para que no salga la información que no sea relevante.
 * Por ejemplo, si solo han pasado 10 segundos, no debería decir ni los días, las horas ni los minutos.
 */

const calculateTimeSince = (date1) => {
  const date1Obj = new Date(date1);
  const now = new Date();
  const msBetweenDates = Math.abs(date1Obj.getTime() - now.getTime());

  const days = Math.floor(msBetweenDates / (24 * 60 * 60 * 1000));
  const remainingMsAfterDays = msBetweenDates % (24 * 60 * 60 * 1000);

  const hours = Math.floor(remainingMsAfterDays / (60 * 60 * 1000));
  const remainingMsAfterHours = remainingMsAfterDays % (60 * 60 * 1000);

  const minutes = Math.floor(remainingMsAfterHours / (60 * 1000));
  const remainingMsAfterMinutes = remainingMsAfterHours % (60 * 1000);

  const seconds = Math.floor(remainingMsAfterMinutes / 1000);

  const parts = [];

  if (days > 0) {
    parts.push(`${days} día${days > 1 ? "s" : ""}`);
  }

  if (hours > 0) {
    parts.push(`${hours} hora${hours > 1 ? "s" : ""}`);
  }

  if (minutes > 0) {
    parts.push(`${minutes} minuto${minutes > 1 ? "s" : ""}`);
  }

  if (seconds > 0) {
    parts.push(`${seconds} segundo${seconds > 1 ? "s" : ""}`);
  }

  return `Han pasado ${parts.join(", ")} desde la fecha introducida.`;
};

console.log(calculateTimeSince("2024-01-05T09:02:16.459Z"));

/**
 * 8. Modifica la función anterior para que se le pueda pasar un objeto que permita desactivar los días,
 * las horas, los minutos o los segundos. Por ejemplo, si le paso { days: false, hours: false } la función
 * debe devolver solo los minutos y los segundos que han pasado.
 */

const calculateTimeSince = (
  date1,
  options = { days: true, hours: true, minutes: true, seconds: true }
) => {
  const date1Obj = new Date(date1);
  const now = new Date();
  const msBetweenDates = Math.abs(date1Obj.getTime() - now.getTime());
  console.log("Diferencia en ms:", msBetweenDates);

  const days = Math.floor(msBetweenDates / (24 * 60 * 60 * 1000));
  const remainingMsAfterDays = msBetweenDates % (24 * 60 * 60 * 1000);

  const hours = Math.floor(remainingMsAfterDays / (60 * 60 * 1000));
  const remainingMsAfterHours = remainingMsAfterDays % (60 * 60 * 1000);

  const minutes = Math.floor(remainingMsAfterHours / (60 * 1000));
  const remainingMsAfterMinutes = remainingMsAfterHours % (60 * 1000);

  const seconds = Math.floor(remainingMsAfterMinutes / 1000);

  console.log(
    "Días:",
    days,
    "Horas:",
    hours,
    "Minutos:",
    minutes,
    "Segundos:",
    seconds
  );

  const parts = [];

  if (options.days !== false && days > 0) {
    parts.push(`${days} día${days > 1 ? "s" : ""}`);
  }

  if (options.hours !== false && hours > 0) {
    parts.push(`${hours} hora${hours > 1 ? "s" : ""}`);
  }

  if (options.minutes !== false && minutes > 0) {
    parts.push(`${minutes} minuto${minutes > 1 ? "s" : ""}`);
  }

  if (options.seconds !== false && seconds > 0) {
    parts.push(`${seconds} segundo${seconds > 1 ? "s" : ""}`);
  }

  // Si no hay ninguna parte agregada, se devolverá una cadena indicando que no ha pasado tiempo.
  if (parts.length === 0) {
    return "No ha pasado tiempo desde la fecha introducida.";
  }

  return `Han pasado ${parts.join(", ")} desde la fecha introducida.`;
};

console.log(
  calculateTimeSince("2024-01-05T09:02:16.459Z", { minuts: false})
);

/**
 * 9. Crea una función como la anterior, pero que indique cuánto tiempo queda para una fecha específica.
 */

const calculateTimeSince = (date1, date2) => {
  const date1Obj = new Date(date1);
  const date2Obj = new Date(date2);

  if (date2Obj <= date1Obj) {
    return `La fecha ${date2} ya ha pasado.`;
  }

  const msBetweenDates = Math.abs(date1Obj.getTime() - date2Obj.getTime());

  const days = Math.floor(msBetweenDates / (24 * 60 * 60 * 1000));
  const remainingMsAfterDays = msBetweenDates % (24 * 60 * 60 * 1000);

  const hours = Math.floor(remainingMsAfterDays / (60 * 60 * 1000));
  const remainingMsAfterHours = remainingMsAfterDays % (60 * 60 * 1000);

  const minutes = Math.floor(remainingMsAfterHours / (60 * 1000));
  const remainingMsAfterMinutes = remainingMsAfterHours % (60 * 1000);

  const seconds = Math.floor(remainingMsAfterMinutes / 1000);

  return `Quedan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos hasta ${date2}`;
};

console.log(
  calculateTimeSince("2025-01-12T09:02:16.459Z", "2025-01-13T09:02:16.459Z")
);

/**
 * 10. Dado el array de ejemplo que pongo, haz una función que filtre las tareas completadas el
 * 9 de enero durante todo el día
 */

const tasks = [
  {
    text: "Hacer la compra",
    completed: true,
    completedAt: "2025-01-10T15:54:40.088Z",
  },
  {
    text: "Ir a clase",
    completed: true,
    completedAt: "2025-01-09T15:00:40.088Z",
  },
  {
    text: "Comer",
    completed: true,
    completedAt: "2025-01-09T14:00:40.088Z",
  },
  {
    text: "Repasar javascript",
    completed: false,
  },
];

const completedTasks = (tasks) => {
  const startOfDay = new Date("2025-01-09T00:00:00.000Z");
  const endOfDay = new Date("2025-01-09T23:59:59.999Z");
  const startOfDayMs = startOfDay.getTime();
  const endOfDayMs = endOfDay.getTime();

  return tasks.filter((task) => {
    if (
      task.completed === true &&
      new Date(task.completedAt).getTime() >= startOfDayMs &&
      new Date(task.completedAt).getTime() <= endOfDayMs
    ) {
      return true;
    }
  });
};

console.log(completedTasks(tasks));

/**
 * 1. Vamos a hacer una función a la que le pasamos un número y nos va a devolver
 * un array del tamaño igual al número que le pasamos con tareas random.
 *
 * Una tarea random es una tarea con un texto aleatorio, por ejemplo "Tarea de prueba 402"
 * También tiene que tener una fecha random con un mes aleatorio entre 0 y 11, y un dia aleatorio entre 1 y 28
 * y aleatoriamente también, las tareas pueden estar completadas o no
 *
 */

const getRandomTaskArray = (num) => {
  const tasksList = [];

  for (let counter = 1; counter <= num; counter++) {
    const randomNum = Math.floor(Math.random() * 100);
    const randomTask = `Tarea de prueba ${randomNum}`;
    const randomDay = Math.floor(Math.random() * 29) + 1;
    const randomMonth = Math.floor(Math.random() * 12);
    const dateRandom = new Date(2025, randomMonth, randomDay);
    const random0Or1 = Math.floor(Math.random() * 2);

    tasksList.push({
      task: randomTask,
      date: dateRandom,
      completed: random0Or1 === 0 ? true : false,
    });
  }

  return tasksList;
};

const categorizedTasks = (tasksList) => {

  const tasksListObject = {};

  tasksList.forEach((task) => {

    const monthDate = task.date.getMonth() + 1;
    const dayDate = task.date.getDate();

    if (!tasksListObject[monthDate]) {
      tasksListObject[monthDate] = {};
    }

    if (!tasksListObject[monthDate][dayDate]) {
      tasksListObject[monthDate][dayDate] = [];
    }

    tasksListObject[monthDate][dayDate].push(task);
  });
  
  return tasksListObject;
};

console.dir(categorizedTasks(getRandomTaskArray(10)), { depth: null });

/**
 * 2. Haz una función que categorice las tareas por mes, y dentro del mes, por día.
 * Por ejemplo el objeto resultante sería algo así:
 *  {
 *    0: {
 *       1: [ARRAY DE TAREAS]
 *    }
 *  }
 * En [ARRAY DE TAREAS] estarán todas las tareas del día 1 de enero.
 */

// crear un objetto e ir metiendole las tareas del array al objeto, clave valor
