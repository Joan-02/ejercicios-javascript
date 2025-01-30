
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


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomTaskArray = (num) => {
  const tasksList = [];

  for (let counter = 1; counter <= num; counter++) {
    const randomNum = getRandomInt(0, 200);
    const randomTask = `Tarea de prueba ${randomNum}`;
    const randomDay = getRandomInt(0, 28);
    const randomMonth = getRandomInt(0, 11);
    const dateRandom = new Date(2025, randomMonth, randomDay);
    const random0Or1 = getRandomInt(0, 1);

    tasksList.push({
      task: randomTask,
      date: dateRandom,
      completed: random0Or1 === 0 ? true : false,
    });
  }

  return tasksList;
};

console.log(getRandomTaskArray(10))

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

console.log(categorizedTasks(getRandomTaskArray(10)));
console.dir(categorizedTasks(getRandomTaskArray(10)), { depth: null });