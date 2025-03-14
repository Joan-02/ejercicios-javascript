//EJERCICIOS DE INTERNET O CHAT GPT


/*
  Crear una función que me diga si un número está entre 0 y 10  
   => utilizar un return;
*/

const betweenZeroAndTen = (num) => {
    if (num < 10 && num > 5){
        console.log ('El numero esta entre 0 y 10')
    } else {
        console.log ('El numero no esta entre 0 y 10')
    }
}

betweenZeroAndTen(20);

/*
  Crea una función que me diga si un parámetro es de tipo cadena de texto o número.
*/

const stringOrNumber = (param) => {
    if (typeof param === 'string') {
        return 'String';
    } else (typeof param === 'number') 
        return 'Number'
    }


console.log(stringOrNumber(6))

/*
  Crea una función que me diga si una cadena de texto tiene el valor 'pending'. Debe ser case insensitive, es decir,
  me dirá "true" en todas las variantes mayúsculas/minúsculas de este texto: 'Pending', 'PEnding', 'PeNdIng', etc.
*/

const isPending = (text) => {

    if (text.toLowerCase().includes('pending')) {
        return true;
    } return false;
}

console.log(isPending('pending'));

/*
  Crea una función que simule una compra con tarjeta de crédito. Tendrá tres parámetros: 
    - El precio del producto
    - El dinero gastado este mes
    - El límite mensual
  Si me queda dinero suficiente para comprar el producto, la función debe devolver el dinero gastado este
  mes incluyendo el precio del producto. Si no puedo comprar el producto pq el dinero no me da, debe escribir 
  en pantalla un mensaje diciendo que no se puede comprar por llegar al límite mensual.
*/


const canBuy = (productPrice, spentMoney, limit) => {
    if (productPrice < (limit - spentMoney)) {
        return (spentMoney + productPrice);
    } return 'no me queda dinero';
}

console.log(canBuy(10, 12, 100));

/*
  Crea una función que indique si un número es par o impar.
*/

const isEvenOrOdd = (num) => {
    if (num % 2 === 0) {
        return 'par'
    } return 'impar'
}

console.log(isEvenOrOdd(63));

/*
  Crea una función que indique el mayor de dos números
*/

const maxOfTwoNumbers = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } return num2;
}

console.log (maxOfTwoNumbers(1,2));

const yearsGap = (x, y) => {
    return Math.abs(x - y);
}

console.log (yearsGap(5, 15));

/*
  1. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. 
*/

const tareas = [
    {
        task: 'hacer deberes',
        completado: true
    },
    {
        task: 'ducharse',
        completado: true
    },
    {
        task: 'comprar',
        completado: false
    }
]

/*
  3. Imagina que estás en un supermercado haciendo la compra y tienes que comprar lo que está 
  en la variable shoppingList.

  Crea una función a la que le pases dos parámetros, el array de la compra, y el elemento que has comprado
  esa función debe buscar el elemento en el array y eliminarlo.

  Por ejemplo, si le paso un array ['pepino', 'tomate', 'sandía'] y el string 'tomate', 
  debe devolver un array ['pepino', 'sandía']
*/
const shoppingList = [
    'x2 leche de coco',
    'pimiento rojo',
    'pimiento verde',
    'x6 garrafas de agua',
    'aguacates',
    'avena',
    'tomate frito',
    'pepino'
];


const boughtShoppingList = (shoppingList, product) => {
    
    const productPosition = shoppingList.indexOf(product)

    if (productPosition > -1) {
        shoppingList.splice(productPosition, 1);
    } 
    return shoppingList;
}

console.log(boughtShoppingList(shoppingList, 'pimiento verde'));

/*1. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/

const shoppingCart = [
  { product: 'Red wine', price: 20, quantity: 1},
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 }
]

let totalPrice = 0;

shoppingCart.forEach((product) => {

    totalPrice += product.price * product.quantity
});

console.log(totalPrice)

/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual longitud 
 donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
 - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const fruits = ['manzana', 'pera', 'granada', 'platano', 'uva', 'melón', 'sandía'];
const fruitsCompleted = [];

fruits.forEach((fruit) => {
    if (fruit === 'manzana' || fruit === 'pera' || fruit === 'granada' || fruit === 'platano') {
        fruitsCompleted.push({name: fruit, growInTree: true});
    } else {
        fruitsCompleted.push({name: fruit, growInTree: false});
    }    
})

console.log(fruitsCompleted);

/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/

const shoppingCart2 = [
    { product: 'Red wine', price: 20, quantity: 1},
    { product: 'water', price: 1, quantity: 2 },
    { product: 'Pizza carbonara', price: 10, quantity: 3 },
    { product: 'Tiramisú', price: 5.99, quantity: 2 }
]

const shoppingCartWithTaxes = []

shoppingCart2.forEach((item) => {
    
    let taxes = item.price * 0.1;
    shoppingCartWithTaxes.push({...item, taxes});
})

console.log(shoppingCartWithTaxes);

/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto 
   del carrito de la compra basándose en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", 
   el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
   "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/

const shoppingCart3 = [
    { product: 'Red wine', price: 20, quantity: 1},
    { product: 'water', price: 1, quantity: 2 },
    { product: 'Pizza carbonara', price: 10, quantity: 3 },
    { product: 'Tiramisú', price: 5.99, quantity: 2 }
]

const removeProduct = (productList, productName) => {

    const productListCopy = [];
    productList.forEach(function(ruperto, index){
        if (ruperto.product !== productName) {
            productListCopy.push(ruperto);
            return;
        }

        if (ruperto.quantity === 1) {
            return;
        }

        productListCopy.push({
            ...ruperto,
            quantity: ruperto.quantity - 1;
        })
    });

    return productListCopy;
}

console.log(removeProduct (shoppingCart3, 'Red Wine'));


/*Check to see if a string has the same amount of 
// 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/


function XO(str) {
    const stringToArray = str.toLowerCase().split('');

    const charO = [];
    const charX = [];

    stringToArray.forEach((char) => {
        
        if (char === 'o') {
           charO.push(char);
        } 
        
        if (char === 'x') {
           charX.push(char);
        }

    })

    if (charO.length === charX.length) {
        return true;
    } return false;
    
}


console.log(XO("zpzpzpp"));

///wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
    
    const result = [];
    const characters = str.split('');

    characters.forEach((char, index) => {

    })
}



function countSmileys(arr) {

    let totalSmiles = 0;

    arr.forEach((smile) => {
        if ((smile === ':' || smile === ';') && (smile === '-' || smile === '~') && (smile === ')' || smile === 'D')) {
            totalSmiles += 1;
        }
    })

    return totalSmiles;

}

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;

/* 8. In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.
Examples  highAndLow("1 2 3 4 5"); // return "5 1"*/

const highAndLow = (list) => {
    const separatedNumbers = list.split('');
    const stringToNumber = Number(separatedNumbers);
    const highAndLowNumbers = [];

    stringToNumber.forEach((number) => {
        const numMax = Math.max(number);
        highAndLowNumbers.push(numMax);
        const numMin = Math.min(number);
        highAndLowNumbers.push(numMin);
    })

    return highAndLowNumbers;
}

console.log(highAndLow("1 2 3 4 5"));

/*
  6. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/

const shoppingCart = [
    { product: "Red wine", price: 20, quantity: 1 },
    { product: "water", price: 1, quantity: 2 },
    { product: "Pizza carbonara", price: 10, quantity: 3 },
    { product: "Tiramisú", price: 5.99, quantity: 2 },
];

let totalPrice = 0;

shoppingCart.forEach((item) => {
    totalPrice += item.quantity * item.price;
})

console.log(totalPrice);




/// Filtrar y clasificar tareas

const tasks = [
    { name: "Estudiar JavaScript", completed: true, priority: "alta" },
    { name: "Limpiar la casa", completed: false, priority: "media" },
    { name: "Hacer ejercicio", completed: true, priority: "baja" },
    { name: "Leer un libro", completed: false, priority: "alta" },
    { name: "Comprar frutas", completed: false, priority: "media" },
];

const tasksCompleted = {
    alta: [],
    media: [],
    baja: []
};
const tasksIncompleted = {
    alta: [],
    media: [],
    baja: []
};
const tasksByPriority = {
    alta: [],
    media: [],
    baja: []
};


tasks.forEach((task) => {
    if (task.completed){
        tasksCompleted[task.priority].push(task);
    } else {
        tasksIncompleted[task.priority].push(task);    
    }
})

console.log('tareas completadas', tasksCompleted);
console.log('tareas incompletas', tasksIncompleted);


/// Gestión de inventario

const inventory = [
    { name: "TV", price: 300, stock: 20, category: "electrodomésticos" },
    { name: "Laptop", price: 1200, stock: 15, category: "tecnología" },
    { name: "Ventilador", price: 50, stock: 50, category: "hogar" },
    { name: "Teléfono", price: 800, stock: 25, category: "tecnología" },
    { name: "Licuadora", price: 100, stock: 10, category: "electrodomésticos" },
];
  
const removeProduct = (productName, productQuantity) => {
    let productFound = false; // Variable para saber si encontramos el producto

    // Recorremos el inventario con forEach
    inventory.forEach((product) => {
        if (productName === product.name) {
            productFound = true; // Si encontramos el producto, lo marcamos como encontrado

            // Verificamos si hay suficiente stock
            if (productQuantity <= product.stock) {
                product.stock -= productQuantity; // Reducimos el stock
                console.log(`Se vendieron ${productQuantity} unidades de ${productName}.`);
            } else {
                console.log("No hay suficiente stock.");
            }
        }
    });

    // Si el producto no fue encontrado, mostramos un mensaje
    if (!productFound) {
        console.log("Producto no encontrado.");
    }
};


//Carrito de compras

const shoppingCart = [
    { name: "Red wine", price: 20, quantity: 2, discount: 0.1 },
    { name: "Pizza", price: 10, quantity: 3 },
    { name: "Water", price: 1, quantity: 5 },
    { name: "Cheesecake", price: 15, quantity: 1, discount: 0.2 },
];

const calculateTotal = (shoppingCart) => {
    let totalPrice = 0;

    shoppingCart.forEach((product) => {
        let total = (product.price * product.quantity);
        if (product.discount) {
            total -= total * product.discount; 
        }
        totalPrice += total;
    });

    console.log(totalPrice); 
}

calculateTotal(shoppingCart);  

//EJERCICIO VOCALES

const inputString = "Hello World";

const countVowels = (inputString) => {
    const stringArray = inputString.split('')
    let totalVowels = 0;
    
    stringArray.forEach((letter) => {
        letter = letter.toLowerCase();

        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            totalVowels += 1;
        }
    })

    return totalVowels;
}

console.log(countVowels(inputString));

countVowels("Hello World");  // 3
countVowels("Javascript");   // 3
countVowels("aeiou");        // 5
countVowels("BCDFGH");       // 0
countVowels("");  

//EJERCICIO ALMACEN

const PRODUCTS = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Headphones', category: 'Electronics', price: 100 },
    { id: 3, name: 'Shoes', category: 'Fashion', price: 50 },
    { id: 4, name: 'Coffee Maker', category: 'Home Appliances', price: 80 },
    { id: 5, name: 'Watch', category: 'Fashion', price: 150 },
];
  
  // 1. Deduce qué representa el array PRODUCTS y describe su estructura.
  
  /**
   * 2. Escribe una función que reciba un array de productos y devuelva un array con
   * los nombres de los productos en mayúsculas.
   *
   * Por ejemplo, para PRODUCTS debería devolver:
   * ['LAPTOP', 'HEADPHONES', 'SHOES', 'COFFEE MAKER', 'WATCH']
   */

const nameInUpperCase = PRODUCTS.map((item) => {
    return item.name.toUpperCase();
});

  console.log('ejercicio 2',nameInUpperCase);

  /**
   * 3. Escribe una función que reciba un array de productos y devuelva solo los productos
   * de una categoría específica.
   *
   * Por ejemplo, para la categoría 'Fashion', debería devolver:
   * [{ id: 3, name: 'Shoes', category: 'Fashion', price: 50 },
   *  { id: 5, name: 'Watch', category: 'Fashion', price: 150 }]
   */
const onlyFashionItems = PRODUCTS.filter((item) => {
    return item.category === 'Fashion';
})

console.log('ejercicio 3',onlyFashionItems);
  
  /**
   * 4. Añade un nuevo atributo "stock" al array PRODUCTS, donde cada producto tendrá un valor
   * aleatorio entre 0 y 20. Usa un bucle como `for` o `.forEach()` para agregar esta propiedad
   * a cada producto.
   */

const PRODUCTS_AND_STOCK = [];

const addStock = (PRODUCTS) => {
    const copyArrayProducts = [...PRODUCTS];
    copyArrayProducts.forEach((item) => {
        item.stock = Math.floor(Math.random() * 21);
        PRODUCTS_AND_STOCK.push(item);
    })

}

addStock(PRODUCTS);
console.log('ejercicio 4', PRODUCTS_AND_STOCK);
  
  /**
   * 5. Crea una función que reciba un array de productos y devuelva solo los productos
   * que están en stock (stock > 0). Si no hay productos en stock, devuelve un mensaje
   * indicando que no hay productos disponibles.
   */
  
  const onlyStockProducts = (PRODUCTS_AND_STOCK, category) => {
    const productsInStock = PRODUCTS_AND_STOCK.filter(item => item.stock > 0);
    
    if (category){
        return productsInStock.filter(item => item.category === category);
    }

    if (productsInStock.length === 0) {
        return 'No hay productos disponibles';
    }
    
    return productsInStock;  
}

console.log('ejercicio 5 y 6', onlyStockProducts(PRODUCTS_AND_STOCK, 'Fashion'));

  /**
   * 6. Modifica la función anterior para que también permita filtrar productos por categoría
   * si se pasa como segundo argumento. Por ejemplo:
   *
   * - Si no se pasa una categoría: Devuelve todos los productos en stock.
   * - Si se pasa una categoría: Devuelve solo los productos en stock de esa categoría.
   */
 
  /**
   * 7. Añade un nuevo atributo "discount" a los productos, que será un porcentaje entre 0 y 50.
   * Luego, escribe una función que calcule el precio final de cada producto aplicando el descuento.
   * 
   * El resultado debe ser un nuevo array con los productos y su precio final.
   *
   * Por ejemplo:
   * [{ id: 1, name: 'Laptop', category: 'Electronics', price: 1000, stock: 10, discount: 20, finalPrice: 800 }, ...]
   *
   * Asegúrate de calcular `finalPrice` directamente sin usar `.reduce()`.
   */
  

const applyDiscounts = (PRODUCTS) => {
    return PRODUCTS.map((product) => {
        const discount = Math.floor(Math.random() * 50);
        let finalPrice = product.price - (product.price * discount / 100);
        let freeShipping = false;

        if (product.category === 'Fashion' && finalPrice >= 100) {
            finalPrice = finalPrice - (finalPrice * 0.1);
        }

        if (product.category === 'Electronics' && finalPrice > 500) {
            freeShipping = true;
        }

        return {
            ...product,
            discount: discount,
            finalPrice: finalPrice,
            freeShipping: freeShipping
        }
    })
}

const productsWithDiscounts = applyDiscounts(PRODUCTS);
console.log('ejercicio 7 y 9', productsWithDiscounts);

  /**
   * 8. Crea una función que reciba un array de productos y un presupuesto máximo, y devuelva
   * todos los productos cuyo precio final (después del descuento) sea menor o igual al presupuesto.
   *
   * Por ejemplo, para un presupuesto de 100:
   * [{ id: 3, name: 'Shoes', category: 'Fashion', price: 50, stock: 5, discount: 10, finalPrice: 45 }, ...]
   */
  
const budget = (productsWithDiscounts, maxBudget) => {
    return productsWithDiscounts.filter((product) => {
        return product.finalPrice <= maxBudget;
    }) 
}

const productMaxBudget = budget(productsWithDiscounts, 100);
console.log('ejercicio 8', productMaxBudget);
  /**
   * 9. Algunas categorías tienen promociones especiales:
   * - Fashion: 10% de descuento adicional si el precio final es superior a 100.
   * - Electronics: Envío gratuito si el precio final es superior a 500.
   * 
   * Modifica las funciones necesarias para que estos beneficios adicionales se apliquen
   * automáticamente al calcular el precio final.
   */

  /**
   * 10. Escribe una función que permita comprar productos. La función debe recibir el ID de un
   * producto y la cantidad deseada, y devolver un mensaje indicando:
   * - Si el producto está disponible o no.
   * - Si hay suficiente stock.
   * - El precio total de la compra.
   * 
   * Si la compra es exitosa, actualiza el stock del producto en el array PRODUCTS.
   */
  
  const buyProducts = (id, quantity, PRODUCTS_AND_STOCK) => { 
    const product = PRODUCTS_AND_STOCK.find ((product) => {
        product.id === id;
    })

    if (!product) {
        return "Producto no disponible";
    }

    if (product.stock < quantity) {
        return "No hay suficiente stock";

    }

    const totalPrice = product.finalPrice * quantity;
    
    product.stock -= quantity;

    return `Compra exitosa. El precio total es: ${totalPrice}. Quedan ${product.stock} unidades en stock.`;

};

console.log(buyProducts(1, 3, PRODUCTS_AND_STOCK)); 
console.log(buyProducts(4, 1, PRODUCTS_AND_STOCK)); 
console.log(buyProducts(1, 15, PRODUCTS_AND_STOCK)); 
console.log(PRODUCTS_AND_STOCK)

//GESTION DE PRODUCTOS

const PRODUCTS = [
    { id: 1, name: 'Smartphone', category: 'Electronics', price: 600, stock: 30 },
    { id: 2, name: 'Sofa', category: 'Furniture', price: 500, stock: 10 },
    { id: 3, name: 'T-shirt', category: 'Fashion', price: 20, stock: 50 },
    { id: 4, name: 'Blender', category: 'Home Appliances', price: 80, stock: 15 },
    { id: 5, name: 'Laptop', category: 'Electronics', price: 1000, stock: 5 }
  ];

// Crea una función llamada applyDiscount que reciba como parámetro un producto y un descuento. 
// La función debe calcular el precio final aplicando el descuento (debe ser un porcentaje entre 0 y 50) 
// y devolver el precio con descuento.

const applyDiscount = (product, discount) => {
    const finalPrice = product.price - ((product.price * discount)/100);
    return finalPrice;
}

console.log('ejercicio 1',applyDiscount(PRODUCTS[0], 20)); 

// Crea una función llamada applyDiscountsToAll que reciba un array de productos y un descuento general 
// para todos los productos. La función debe aplicar el descuento a todos los productos en el array y 
// devolver un nuevo array con los productos y sus precios finales.

const applyDiscountsToAll = (PRODUCTS, discount) => {
    return PRODUCTS.map((product) => {
        const finalPrice = product.price - ((product.price * discount)/100);
    
        return {
            ...product,
            finalPrice: finalPrice
        }
    })
}


console.log('ejericicio 2', applyDiscountsToAll(PRODUCTS, 10));

// Crea una función llamada filterByCategory que reciba como parámetros un array de productos y una categoría. 
// La función debe devolver un nuevo array con solo los productos que pertenecen a la categoría indicada.

const filterByCategory = (PRODUCTS, category) => {
    return PRODUCTS.filter((product) => {
        return product.category === category;
    })
}

console.log('ejercicio 3', filterByCategory(PRODUCTS, 'Electronics')); 

// Crea una función llamada updateStock que reciba como parámetros un array de productos, un productId 
// y una cantidad. La función debe aumentar o disminuir el stock del producto según la cantidad indicada.

const updateStock = (PRODUCTS, id, stock) => {
    return PRODUCTS.map((product) => {
        let finalStock = product.stock;

        if (product.id === id) {
            finalStock = product.stock - stock;
        }

        return {
            ...product,
            stock: finalStock
        }
    })
}

console.log('ejericico 4', updateStock(PRODUCTS, 2, 5))

// Crea una función llamada filterLowStock que reciba como parámetro un array de productos y un número límite. 
// La función debe devolver un array con los productos que tienen un stock menor o igual al número límite.

const filterLowStock = (PRODUCTS, limitNum) => {
    return PRODUCTS.filter((product) => {
        return product.stock <= limitNum;
    })
}

console.log('ejercicio 5', filterLowStock(PRODUCTS, 10));

// Añade un nuevo atributo promotion a cada producto, que será un valor booleano (true o false) indicando 
// si el producto está en promoción. Los productos con un precio superior a 500 deben tener promotion: true, 
// y los demás promotion: false.

const addPromotion = (PRODUCTS) => {
    return PRODUCTS.map((product) => {
        if (product.price > 500) {
            return {
                ...product,
                promotion: true
            }
        }
        
        if (product.price <= 500) {
            return {
                ...product,
                promotion: false
            }
        }
    })
}

console.log('ejercicio6', addPromotion(PRODUCTS));
const productsWithPromotion = addPromotion(PRODUCTS);

//Crea una función llamada applyFinalPrice que reciba un array de productos. 
// La función debe calcular el precio final de cada producto según su promotion y su precio:
//Si el producto está en promoción, aplica un 15% de descuento adicional.
//Si el producto no está en promoción, aplica un 5% de descuento adicional.
//Deberás devolver un nuevo array con los productos y su finalPrice.

const applyFinalPrice = (productsWithPromotion) => {
    return productsWithPromotion.map((product) => {
        const discount = product.promotion ? 0.15 : 0.05; 
        const finalPrice = product.price - (product.price * discount); 
        return {
            ...product,
            finalPrice: finalPrice, 
        };
    });
};

console.log('ejercicio 7', applyFinalPrice(productsWithPromotion));

//Crea una función llamada countProductsByCategory que reciba un array de productos y devuelva un objeto 
// donde las claves sean las categorías de los productos y los valores sean la cantidad de productos en esa categoría.

const PRODUCTS = [
    { id: 1, name: 'Smartphone', category: 'Electronics', price: 600, stock: 30 },
    { id: 2, name: 'Sofa', category: 'Furniture', price: 500, stock: 10 },
    { id: 3, name: 'T-shirt', category: 'Fashion', price: 20, stock: 50 },
    { id: 4, name: 'Blender', category: 'Home Appliances', price: 80, stock: 15 },
    { id: 5, name: 'Laptop', category: 'Electronics', price: 1000, stock: 5 }
];

const countProductsByCategory = (products) => {
    const categoryCounts = {};

    products.forEach((product) => {
        const category = product.category;

        if (categoryCounts[category]) {
            categoryCounts[category]++;
        } else {
            categoryCounts[category] = 1;
        }
    });

    return categoryCounts;
};

console.log(countProductsByCategory(PRODUCTS));

// Clasificación de tareas completadas

const tasks = [
    { text: 'Hacer la compra', category: 'personal', completed: true },
    { text: 'Estudiar JavaScript', category: 'work', completed: true },
    { text: 'Ir al gimnasio', category: 'personal', completed: false },
    { text: 'Revisar correos', category: 'work', completed: true },
    { text: 'Pasear al perro', category: 'personal', completed: true },
    { text: 'Organizar la reunión', category: 'work', completed: false }
];

const tasksCompleted = {};

const countCompletedByCategory = (tasks) => {
    tasks.forEach((task) => {

        if (!task.completed) {
            return;
        }

        tasksCompleted[task.category] = tasksCompleted[task.category] || 0; 
        tasksCompleted[task.category] += 1;

    })

    return tasksCompleted
}

console.log(countCompletedByCategory(tasks));

// TAREAS COMPLETADAS E INCOMPLETADAS

const tasks = [
    { text: 'Hacer la compra', category: 'personal', completed: true },
    { text: 'Estudiar JavaScript', category: 'work', completed: false },
    { text: 'Ir al gimnasio', category: 'personal', completed: false },
    { text: 'Revisar correos', category: 'work', completed: true },
    { text: 'Pasear al perro', category: 'personal', completed: true },
    { text: 'Organizar la reunión', category: 'work', completed: false }
];

const tasksByCategory = {};

const countTasksByCategory = (tasks) => {
    tasks.forEach((task) => {

        tasksByCategory[task.category] = tasksByCategory[task.category] || 0;
        tasksByCategory[task.category] += 1;
    })
    
    return tasksByCategory
};

console.log(countTasksByCategory(tasks));

// VENTAS

const salesByCategory = { electronics: 200, clothing: 150, groceries: 100, books: 50 };

const getTotalSales = (salesByCategory) => {
    let totalSales = 0;

    Object.keys(salesByCategory).forEach((category) => {

        count = salesByCategory[category];
        totalSales += count;
    })

    return totalSales;
}

console.log(getTotalSales(salesByCategory))

const updateSales = (category) => {

    if (salesByCategory[category]) {
      salesByCategory[category] += 1;
    } else {
      salesByCategory[category] = 1;
    }
  };
  
updateSales('electronics'); 
updateSales('furniture');    
console.log(salesByCategory);

// GESTIÓN DE INVENTARIO

const inventory = {
    electronics: 100,
    clothing: 200,
    groceries: 300,
};
  
const sellProduct = (category, quantity) => {
    Object.keys(inventory).forEach((item) => {
      if (item === category) {
        if (quantity >= inventory[item]) {
          inventory[item] = 0;
        } else {
          inventory[item] -= quantity;
        }
      }
    });
};

sellProduct('electronics', 50); // Vende 50 productos de 'electronics'
sellProduct('clothing', 250); // Vende 250 productos de 'clothing'
console.log(inventory);
    
// GESTION DE JUGADORES

const players = {
    Alice: 10,
    Bob: 15,
    Charlie: 8
  };
  
const updatePlayerScore = (players, playerName, score) => {
    let maxScore = 0;

    Object.keys(players).forEach((player) => {

        if (players[playerName] === undefined) {
            players[playerName] = score;
        }

        if (players[playerName] !== undefined) {
            players[playerName] += score;
        }        
    })

    const highestScore = Math.max(...Object.values(players));  // Obtiene el valor más alto

    return highestScore;
}  

const highestScore = updatePlayerScore(players, 'David', 5);
console.log("La puntuación más alta es:", highestScore);
updatePlayerScore(players, 'David', 5); 
console.log(players);

//Registro de Ventas por Tienda y Fecha

const generateRandomSales = (num) => {

    const stores = ["Tienda A", "Tienda B", "Tienda C"];
    const salesList = [];

    for (let i = 0; i < num; i++) {
        const randomStore = stores[Math.floor(Math.random() * stores.length)];
        const randomDollars = Math.floor(Math.random() * 499) + 10;
        const randomDay = Math.floor(Math.random() * 31) + 1;
        const randomMonth = Math.floor(Math.random() * 12);
        const dateRandom = new Date(2025, randomMonth, randomDay);

        salesList.push({
            store: randomStore,
            amount: randomDollars,
            date: dateRandom
        });
    }

    return salesList;
}

const categorizeSalesByStoreAndDate = (salesList) => {

    const salesListObject = {}

    salesList.forEach((sale) => {

        const storeName = sale.store;
        const month = sale.date.getMonth() + 1;  // +1 porque los meses van de 0 a 11
        const day = sale.date.getDate();

        if (!salesListObject[storeName]) {
            salesListObject[storeName] = {}
        }

        if (!salesListObject[storeName][month]) {
            salesListObject[storeName][month] = {};
        }

        if (!salesListObject[storeName][month][day]) {
            salesListObject[storeName][month][day] = [];
        }

        salesListObject[storeName][month][day].push(sale);
    })

    return salesListObject;
}


const sales = generateRandomSales(10);
console.dir(categorizeSalesByStoreAndDate(sales), { depth: null });

// Contador de palabras en una frase

const countWords = (sentence) => {

    const sentenceToArray = sentence.split(" ")
    const counterWords = {};

    sentenceToArray.forEach((word) => {

        if(!counterWords[word]) {
            counterWords[word] = 0;
        }
        
        counterWords[word] += 1;
    })

    return counterWords;
}

console.log(countWords("hola mundo hola hola chatgpt mundo"));

// Contador de letras en una frase

const countLetters = (sentence) => {
    const sentenceToArray = sentence.split("");  

    const counterLetters = {};  

    sentenceToArray.forEach((letter) => {
        if (letter !== " ") { 
            if (!counterLetters[letter]) {
                counterLetters[letter] = 0;  
            }
            counterLetters[letter] += 1;  
        }
    })

    return counterLetters;  
}

console.log(countLetters("hello world"));
