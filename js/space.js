let inputBuscar = document.getElementById("inputBuscar");
// const input_value = inputBuscar.value;
const images_nasa = await fetch(`https://images-api.nasa.gov/search?q=andromeda`)
.then(response => response.json());
// console.log(images_nasa.collection.items[0].href)
let imagen = images_nasa.collection.items[0].href


// BOTONES
let btnBuscar = document.getElementById("btnBuscar");
const div_contenedor = document.getElementById("contenedor");

const imagen_de_nasa = await fetch(`${imagen}`)
.then(response => response.json());
console.log(imagen_de_nasa[0])


function search() {
    
}

// btnBuscar.addEventListener("click", search)

// search()

/* div_contenedor.innerHTML = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${imagen_de_nasa[0]}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>` */

