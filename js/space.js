let inputBuscar = document.getElementById("inputBuscar");
let images_nasa;


// BOTONES
let btnBuscar = document.getElementById("btnBuscar");
const div_contenedor = document.getElementById("contenedor");



btnBuscar.addEventListener("click", async function(){
  if (inputBuscar.value != ''){
    images_nasa = await fetch(`https://images-api.nasa.gov/search?q=${inputBuscar.value}`).then(response => response.json());
    show(images_nasa.collection.items);
  }
  else{
    show([]);
  }
})


function show(items) {

  let contentToAppend = '';
  for (let i = 0; i < items.length; i++) {
    if (items[i].links == undefined) continue;
    contentToAppend += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${items[i].links.href}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
  }

  div_contenedor.innerHTML = contentToAppend;
}


