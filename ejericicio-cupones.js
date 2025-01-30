
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