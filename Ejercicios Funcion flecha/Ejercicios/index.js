// EJERCICIO 1
const imprimirMensaje = (mensaje) => mensaje;
// console.log(imprimirMensaje("hola"));
//

// EJERCICIO 2

const crearMultiplicacion = (num1, num2) => num1 * num2;

// EJERCICIO 3

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayMap = array.map(crearMultiplicacion);
// console.log(arrayMap);

// EJERCICIO 4
const arrayNumeros = [1, 3, 4, 78, 6];
const cervezasGradoDeAlcohol = (cerveza) =>
  cerveza.sort((a, b) => b.abv - a.abv).slice(0, 10); //ordenar de mayor a menor

// console.log(cervezasGradoDeAlcohol(beers))

// EJERCICIO 5

const cervezasMenosAmargas = (cerveza) =>
  cerveza.sort((a, b) => a.ibu - b.ibu).slice(0, 10); //ordenar de menor a mayor
// console.log(cervezasMenosAmargas(beers));

// EJERCICIO 6

const cervezaYNombre = (cervezas, nombre) =>
  cervezas.find((cerveza) => cerveza.name === nombre); //me devuelve la primer coincidencia encontrada nombre
// console.log(cervezaYNombre(beers, "Buzz"));

// EJERCICIO 7

const cervezaYvalor = (cervezas, num) =>
  cervezas.find((cerveza) => cerveza.ibu == num); //me devuelve la primer coincidencia encontrada ibu
// let resultado = cervezaYvalor(beers, 45);
// if (resultado === undefined) {
//   console.log("No se encontro la cerveza");
// } else {
//   console.log(resultado);
// }

// EJERCICIO 8

// const array2 = ["hola", "si", "antony"];

// const indiceCerveza = (nombre) => array2.indexOf(nombre);

// console.log(indiceCerveza("si"));

const nombreCerveza = (nombre) =>
  beers.findIndex((cerveza) => cerveza.name === nombre);
// const resultadoNombre = nombreCerveza("khswbdy");

// if (resultadoNombre != -1) {
//   console.log(`La cerveza fue encontrada  en la posicion ${resultadoNombre}`);
// } else {
//   console.log("Nombre de la cerveza ingresada no existe");
// }

// EJERCICIO 9

const valorDeAlcohol = (cervezas, alcohol) =>
  cervezas
    .filter((cerveza) => cerveza.abv < alcohol)
    .map((objeto) => ({
      name: objeto.name,
      ibu: objeto.ibu,
      abv: objeto.abv,
    }));

// const resultadoObjetosNuevos = valorDeAlcohol(beers, 45);
// console.log(resultadoObjetosNuevos);

// EJERCICIO 10

const ordenamiento = (cervezas, propiedad, booleano) => {
  const copia = cervezas.map((cervezas) => cervezas);
  if (booleano)
    copia.sort(function compare(a, b) {
      if (a[propiedad] < b[propiedad]) {
        return -1;
      }
      if (a[propiedad] > b[propiedad]) {
        return 1;
      }
      // a debe ser igual b
      return 0;
    });
};
const resultadoOrdenamiento = ordenamiento(beers, "id", true);
// console.log(resultadoOrdenamiento);
// EJERCICIO 11

// const tablaCervezas = (cervezas, id);

const crearTabla = (cervezas, id) => {
  const creacionTabla = cervezas.map((cerveza) => {
    return ` 
    <tr> 
           <td>${cerveza.name}</td>
            <td>${cerveza.abv}</td>
            <td>${cerveza.ibu}</td>
    <tr>
  `;
  });
  console.log(creacionTabla);
  return (document.getElementById(id).innerHTML = creacionTabla);
};

const resultado = crearTabla(beers, "insertar-tarjeta");
