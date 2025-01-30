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