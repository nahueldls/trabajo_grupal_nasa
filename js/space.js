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
    <div class="col">
      <div class="card" style="width: 25rem; height: 30rem; margin-top: 1rem
      ">
      <img class="card-img-top" src="${items[i].links[0].href}" alt="Card image cap">
      <div class="card-body" style="overflow: auto">
        <h5 class="card-title">${items[i].data[0].title}</h5>
        <p class="card-text">${items[i].data[0].description}</p>
      </div>
      <div class="card-footer">
        <small>${items[i].data[0].date_created}</small>
      </div>
      </div>
    </div>`
  }

  div_contenedor.innerHTML = contentToAppend;
}


