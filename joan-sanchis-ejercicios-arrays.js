/*
- Arrays sencillas
- Operar con arrays (.map .filter .find .some. every)
- Funciones complejas
- Ternarios
- Bucles for
- Ejercicio cupones Gutufacio
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

   customers.forEach(function(customer){
   const minTill = Math.min(...tills)
   const positionTill = tills.indexOf(minTill);
   tills[positionTill] += customer;
 })
 
 return Math.max(...tills)
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
  { product: "Tarta", price: 10, quantity: 1 }
];

let shoppingCartAndTotalPrice = [];


const findMostExpensive = (shoppingCart) => {

  shoppingCart.forEach((item) => {

    const totalPrice = item.price * item.quantity;
    shoppingCartAndTotalPrice.push(totalPrice);
  }) 

  return shoppingCart.find((element) => {
    let maxNumber = Math.max(...shoppingCartAndTotalPrice);
    return maxNumber === element.price * element.quantity;
  })

}

console.log (findMostExpensive(shoppingCart));
console.log (shoppingCartAndTotalPrice);
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
  { name: "Limpiar la casa", completed: true }
];

const groupTasksByStatus = (tasks) => {

  const taskCompleted = [];
  const taskIncompleted = [];

  tasks.forEach((task) => {

    if (task.completed === true){
      taskCompleted.push(task)
    } else {
      taskIncompleted.push(task);
    }
  })

  return {taskCompleted, taskIncompleted};
}

console.log(groupTasksByStatus(tasks)); 
console.log(taskCompleted)
console.log(taskIncompleted)









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
    name: 'Botellas de agua',
    quantity: 7,
    price: 100
  },
  {
    name: 'Bolsa de palomitas',
    quantity: 2,
    price: 127.75
  },
  {
    name: '1Kg azúcar',
    quantity: 1,
    price: 1000
  },
  {
    name: 'Pan de hamburguesa',
    quantity: 728,
    price: 1.27
  },
  {
    name: '1kg tofu',
    quantity: 28,
    price: 79.39
  }
];

function getShoppingCartTotalPrice(shoppingCart) {
  let totalPrice = 0;
  shoppingCart.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });
  return totalPrice;
}

function isSpecialSpanishRegion(region) {
  return ['Ceuta', 'Melilla', 'Canarias'].includes(region);
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
  const taxRate = country === 'España' && !isSpecialSpanishRegion(state) ? 0.21 : 0;

  return shoppingCart.map((product) => {
    return {
      ...product,
      taxes: taxRate * product.price
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
      code: 'GUTUFACIO10',
      discount: 0.1,
      minAmount: 1000
    },
    {
      code: 'ROBUSTIO20',
      discount: 0.2,
      minAmount: 20
    },
    {
      code: 'LOSORNITORRINCOSMOLANUNHUEVO50',
      discount: 0.5,
      minAmount: 5000
    }
  ];

  return validCoupons.find((coupon) => {
    return coupon.code === couponCode;
  });
}

function applyCoupon(couponCode, shoppingCart) {
  const coupon = getValidCoupon(couponCode);

  if (!coupon) {
    console.error('Cupón no válido');
    return shoppingCart;
  }

  let totalPrice = getShoppingCartTotalPrice(shoppingCart);

  if (totalPrice < coupon.minAmount) {
    console.error('Cupón no válido porque no has llegado al min amount', coupon.minAmount);
    return shoppingCart;
  }

  return shoppingCart.map((product) => {
    const unitPriceDiscount = product.price * coupon.discount;
    return {
      ...product,
      priceWithDiscount: product.price - unitPriceDiscount
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
  if (country === 'Francia') {
    return state === 'Alsacia' ? 5 : 500;
  }

  let totalPrice = getShoppingCartTotalPrice(shoppingCart);

  if (totalPrice >= 100) {
    return 0;
  }

  if (country === 'España') {
    return isSpecialSpanishRegion(state) ? 2 : 1.5;
  }

  if (country === 'Andorra') {
    return 100;
  }

  return 30;
}
