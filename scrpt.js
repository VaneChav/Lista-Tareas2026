/* Referencias al docucmento del Dom */

const tareaEntrada = document.getElementById("tareaEntrada");
const botonAgregar = document.getElementById("botonAgregar");
const contenedorTareas = document.getElementById("contenedorTareas");
const mensaje = document.getElementById("mensaje");
const contadorTotales = document.getElementById("contadorTotales");
const contadorTerminadas = document.getElementById("contadorTerminadas");



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

  //Escuchadores de los iconos
  iconoCompletada.addEventListener("click", (e) => {
    //Codigo que se ejecuta
    const tareaElemento = e.target.parentNode.parentNode; 
    const esCompletada = tareaElemento.classList.contains("tarea-completada");

    tareaElemento.classList.toggle("tarea-completada");

    if(esCompletada) {
      e.target.classList.remove("bi-check-circle");
      e.target.classList.add("bi-bi-dash-circle");
    } else {
      e.target.classList.remove("bi-check-circle");
      e.target.classList.add("bi-bi-dash-circle");
    }

    // Actualizamos los contadores
    actualizarContadores();
  })

  iconoEliminar.addEventListener("click", (e) => {
    //Codigo que se ejecuta
    const tareaElemento = e.target.parentNode.parentNode;
    tareaElemento.remove();

    // Actualizamos los contadores
    actualizarContadores();
  })

  //Retomamos la estructura de la tarea
  return tareaContenedor;

}
/* Función actualizar  contenedores */

function actualizarContadores() {
  // Contamos los elementos con la clase tarea 
  const tareasTotales = document.querySelectorAll(".tarea");
  const tareasTerminadas = document.querySelectorAll(".tarea-completada");

  // Actualizamos los contadores en el DOM
  contadorTotales.textContent = tareasTotales.length;
  contadorTerminadas.textContent = tareasTerminadas.length; 
}

/* Escuchador Boton*/
botonAgregar.addEventListener("click", agregarTarea);

/* Funcion Agregar el elemento Tarea */
function agregarTarea() {
  //Generar la constante para evaluar si hay texto o no
  const texto = tareaEntrada.value.trim(); 
  
  //Evaluar la constante de texto
  if(texto) {
 
    //Traemos elemento retornado por la función crearElementoTarea
    const elementoTarea = crearElementoTarea();
    contenedorTareas.append(elementoTarea);

    //Reiniciar el valor del Input
    tareaEntrada.evalue = "";

    //Mostrar el mensaje de tarea creada satisfactoriamente
    mensaje.textContent = "Tarea creada satisfactoriamente"; 

    // Actualizamos los contadores
    actualizarContadores();
    
  }else{
    //Ejecutas esto otro
    mensaje.textContent = "No escribiste nada chamaco";
  }
}

/* Hcaemos que al presionar la tecla Enter en el Input se agregue la trarea */

document.addEventListener("keydown", (e) => {
  // Evaluar la tecla presionada
  if(e.key == "Enter") {
    // Esto ocurre
    agregarTarea();
  }
})

/* Mostrar el mensaje al escribir */

tareaEntrada.addEventListener("input", () => {
  //Evaluamos si el valor del input esta vacio
  if(tareaEntrada.value.trim() === ""){
   
    mensaje.textContent = "Escribe tu proxima tarea! 😺";
    
  }else{
    mensaje.textContent = "Al finalizar presiona Enter"
  }
})
