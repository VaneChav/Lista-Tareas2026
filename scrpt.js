/* Referencias al docucmento del Dom */

const tareaEntrada = document.getElementById("tareaEntrada");
const botonAgregar = document.getElementById("botonAgregar");
const contenedorTareas = document.getElementById("contenedorTareas");

/* Función para crear elemento tarea (Función creadora del nodo Tarea) */
function crearElementoTarea() {
  // Crear los elementos html de la tarea
  const tareaContenedor = document.createElement("div");
  const tareaTexto = document.createElement("p");
  const iconosContenedor = document.createElement("div");
  const iconoCompletada = document.createElement("i");
  const iconoEliminar = document.createElement("i");

  // Creamos la estructura de la tarea
  iconosContenedor.append(iconoCompletada, iconoEliminar);
  tareaContenedor.append(tareaTexto, iconosContenedor);

  //Agragamos las clases a los elementos de la tarea
  tareaContenedor.classList.add("tarea");
  tareaTexto.classList.add("tarea-texto");
  iconosContenedor.classList.add("tareas-iconos");
  iconoCompletada.classList.add("bi", "bi-check-circle");
  iconoEliminar.classList.add("bi", "bi-trash2");

  //Agregamos el texto del usuario
  tareaTexto.innerText = tareaEntrada.value;

  //Retomamos la estructura de la tarea
  return tareaContenedor;

}

/* Escuchador */
botonAgregar.addEventListener("click", agregarTarea);

/* Funcion Agregar el elemento Tarea */
function agregarTarea() {
  //Traemos elemento retornado por la función crearElementoTarea
  const elementoTarea = crearElementoTarea();
  contenedorTareas.append(elementoTarea);
  console.log(elementoTarea);

  //Reiniciar el value del input
  tareaEntrada.value = "";
}


