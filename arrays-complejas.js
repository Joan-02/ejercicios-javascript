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
  