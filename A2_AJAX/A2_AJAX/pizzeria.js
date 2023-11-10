

window.onload = function(){
  
      let container = document.getElementById("div_DOM");
      let resultadoPrecioElement = document.getElementById("resultadoPrecio");

        // Buttons
      // Ingredientes
      let tamanos = document.createElement("div");
      tamanos.textContent = "Elije el tamaño tu pizza:";

      // Array vacío para implementar con JSON
      var opcionesTamanos = [];


      // Checkbox
      var ingredientes = document.createElement("div");
      ingredientes.textContent = "Elije los ingredientes de tu pizza: ";

       // Array vacío para implementar con JSON
      var opcionesIngredientes =  [];


const URL_DESTINO = "http://localhost:5500/A2_AJAX/"
const RECURSO = "pizzeria2.json"

function cargarJson(){
    let xmlHttp = new XMLHttpRequest()

    xmlHttp.onreadystatechange = function () {
     if (this.readyState == 4) {
       if (this.status == 200) {
          var data = JSON.parse(xmlHttp.responseText);
          opcionesTamanos = Object.keys(data.pizza.tamanos[0]);
          opcionesIngredientes = Object.keys(data.ingredientes[0]);
          /*opcionesTamanos = data..tamanos;
          opcionesIngredientes = data.ingredientes;*/
     

      // Bucle forEach para crear radio buttons para cada opción
      opcionesTamanos.forEach(function (opcion) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "tamanos";
        radio.value = opcion;

        let labelTamanos = document.createElement("label");
        labelTamanos.textContent = opcion;

       tamanos.appendChild(radio);
       tamanos.appendChild(labelTamanos);
      });
      
     

      opcionesIngredientes.forEach(function (option) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "ingredientes";
        checkbox.value = option;

        var labelIngredientes = document.createElement("label");
        labelIngredientes.textContent = option;

        ingredientes.appendChild(checkbox);
        ingredientes.appendChild(labelIngredientes);
      });
     
     } else {
           alert("ERROR")
    }
   }
 };
  
xmlHttp.open('GET', URL_DESTINO + RECURSO, true);
xmlHttp.send(null);
}

       cargarJson();  
       // Agregamos el contenedor de ingredientes al formulario
        container.appendChild(ingredientes); 
        // Agregamos el contenedor de tamaños al formulario
        container.appendChild(tamanos);

 let refrescarDatosJson = document.getElementById("refrescarJson");
refrescarDatosJson.addEventListener("click", cargarJson);
console.log ("Actualizando datos")
     
} 






 /*
function  calcularPrecio(){
 
    xmlHttp.onreadystatechange = function () {
     if (this.readyState == 4) {
       if (this.status == 200) {
          var data = JSON.parse(xmlHttp.responseText);
          opcionesTamanos = Object.values(data.pizza.tamanos[0]);
          opcionesIngredientes = Object.values(data.ingredientes[0]);
  
  
  //Declaramos ambas variables. Se selecciona un elemento input cuyos atributos name sean 'tamano y 'ingredientes'
  //previamente seleccionados por el usuario y busca entre los que han salido seleccionados
    let precioTamano = document.querySelector('input[name="tamano"]:checked');
    let ingredientes = document.querySelectorAll('input[name="ingredientes"]:checked');
    let precioIngredientes= 0;
   

      //A través de un bucle 'for' recorremos los elementos con name= ingredientes para poder contar
      //cuántos elementos del checkbox se han marcado y así sumarlos al precio final, teniendo en cuenta que el valor
      //de cada ingrediente es '1'.
      for (let i = 0; i < ingredientes.length; i++) {
          precioIngredientes += 1;
      }

      //Declaramos la variable precioTotal que será la suma de las dos anteriores
       let precioTotal = precioTamano + precioIngredientes;

      //Actualizamos el contenido de elemento con id=precioTotal del form 
       document.getElementById("precioTotal").textContent = `Precio Total: ${precioTotal}€`;
   
  } else {
    alert("ERROR");
  }
}
    xmlHttp.open('GET', URL_DESTINO + RECURSO, true);
    xmlHttp.send(null);
}

calcularPrecio();
}
    

*/


        