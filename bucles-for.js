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
  