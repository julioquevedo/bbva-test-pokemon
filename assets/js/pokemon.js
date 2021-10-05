
// Invocacion al api con Fetch
fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(json => {
            showItems(json.results);
        });

const showItems = (items) => {
    const cotenido = document.getElementById('wr-items')
    items.forEach(pokemon => {
        cotenido.innerHTML = `
        ${cotenido.innerHTML}
        <div class="col-sm-6">
        <h4>${pokemon.name}</h4>
        </div>
        <div class="col-sm-6">
            <button class="btn btn-primary detalle" onclick="muestraAlerta('${pokemon.url}')">Ver detalles</button>
        </div>        
    `;
    });
    }    
    
    const boton = document.getElementsByClassName("detalle");


    const muestraAlerta = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(json => {
            showDetail(json);
        });
    }

    const showDetail = (detalle) => {
        console.log(detalle)
        const cotenidoDetalle = document.getElementById('wr-detail')
            cotenidoDetalle.innerHTML = `
            <div class="card">
            <h4>Nombres: ${detalle.abilities[0].ability.name}</h4>
            <h4>Alto: ${detalle.height}</h4>
            <img width= "100" src="${detalle.sprites.front_default}">
        `;
        }    
        