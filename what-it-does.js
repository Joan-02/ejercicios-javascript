
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
  