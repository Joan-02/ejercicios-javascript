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

taskList.forEach(function (task) {  /** task es el nombre del objeto */ 
  console.log("se está llamando",task);
  if (!task.completed) {
    taskIncompleted.push(task);
  }
});

console.log(taskIncompleted);

/*
  2. Crea un array que contenga un listado de vehículos. Usa al menos 5 propiedades en cada vehículo. 
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

vehicle.forEach(function (ruperto) {  /** ruperto es el nombre del objeto */ 
  console.log("se está llamando",ruperto
  );

  if (ruperto.color === "blanco") {
    taskIncompleted.push(ruperto);
  }
});

console.log(taskIncompleted);

/*
  3. Imagina que estás en un supermercado haciendo la compra y tienes que comprar lo que está 
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

/**
 * 4. Repite el ejercicio anterior sin modificar el array que le pasas como parámetro a la función.
 * Si ya has hecho el ejercicio anterior sin modificar el array, hazlo modificándolo.
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
  1. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/
const shoppingCart = [
	{ product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 }
]

let totalPriceProducts = 0;

shoppingCart.forEach(function(item) {
  totalPriceProducts += item.price * item.quantity;
});

console.log (totalPriceProducts);

/*
  2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. 
  A continuación filtra el array para mostrar todas las 
  tareas que están completadas y luego todas las tareas que están pendientes.
*/

const tasks = [
  { name: "shopping", completed: false },
  { name: "homework", completed: true },
  { name: "clean", completed: true },
  { name: "sport", completed: true },
  { name: "reading", completed: false }, 
  { name: "cooking", completed: true }   
];

const taskCompleted = [];
const taskIncompleted = [];

tasks.forEach(function(task) {
  if (task.completed === true) {
    taskCompleted.push(task);
  } else {
    taskIncompleted.push(task);
  }
});

console.log (taskCompleted);
console.log (taskIncompleted);

/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual 
 longitud donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
   - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const frutas = ["manzana", "pera", "uva", "sandía", "granada", "plátano", "melón"];
const frutasConInfo = [];
const crecenEnArbol = ["manzana", "pera", "granada", "plátano"]; 

frutas.forEach(function(fruta) {
  if (crecenEnArbol.includes(fruta)) {
    frutasConInfo.push({nombre: fruta, creceEnArbol: true}); 
  }
});

console.log(frutasConInfo);

/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. 
   Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/

const shoppingCart = [
	{ product: 'Red wine', price: 20, quantity: 1, taxes: 2},
  { product: 'water', price: 1, quantity: 2, taxes: 1 },
  { product: 'Pizza carbonara', price: 10, quantity: 3, taxes: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2, taxes: 2 }
]

let totalPriceProducts = 0;

shoppingCart.forEach(function(item) {
  totalPriceProducts += ((item.price * item.quantity)*2)/100;
});

console.log (totalPriceProducts);

/**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

const shoppingCart = [
	{ product: 'Red wine', price: 20, quantity: 1 },
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 }
];

const shoppingCartWithTaxes = []; 

shoppingCart.forEach(function(item) {
  const totalPrice = item.price * item.quantity; 
  const taxes = totalPrice * 0.1; 
  const newItem = { ...item, taxes: taxes.toFixed(2) };

  shoppingCartWithTaxes.push(newItem); 

});

console.log(shoppingCartWithTaxes);

/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita 
   eliminar una unidad de producto del carrito de la compra basándose 
   en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", 
   el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/

const shoppingCart = [
	{ product: 'Red wine', price: 20, quantity: 1 },
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 }
];

function removeProduct(productName) {
  shoppingCart.forEach(function(item, index) {
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
