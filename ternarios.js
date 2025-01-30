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