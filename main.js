

/*function Auto(marca, color, modelo, kilometros) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}

let autos = [
    new Auto("Camaro", "Amarillo", "2013"),
    new Auto("Lamborghini", "Amarillo", "2023"),
    new Auto("Ferrari", "Rojo", "2015"),
    new Auto("Mustang", "Violeta", "2020"),
    new Auto("Mercedes", "Gris", "2003")
];


    let autosIniciales= [
      {
        "marca": "Toyota",
        "modelo": "Camry",
        "anio": 2022,
        "color": "Azul",
        "imagen": "Autos/CAMRY.jpg"
      },
      {
        "marca": "Honda",
        "modelo": "Civic",
        "anio": 2021,
        "color": "Rojo",
        "imagen": "Autos/CIVIC.jpg"
      },
      {
        "marca": "Ford",
        "modelo": "Mustang",
        "anio": 2023,
        "color": "Negro",
        "imagen": "Autos/MUSTANG.jpg"
      },
      {
        "marca": "Chevrolet",
        "modelo": "Camaro",
        "anio": 2022,
        "color": "Blanco",
        "imagen": "Autos/CAMARO.jpg"
      },
      {
        "marca": "Volkswagen",
        "modelo": "Golf",
        "anio": 2020,
        "color": "Gris",
        "imagen": "Autos/GOLF.jpg"
      },
      {
        "marca": "BMW",
        "modelo": "X5",
        "anio": 2023,
        "color": "Plata",
        "imagen": "Autos/BMW.jpg"
      },
      {
        "marca": "Mercedes-Benz",
        "modelo": "C-Class",
        "anio": 2021,
        "color": "Negro",
        "imagen": "Autos/MERCEDES.webp"
      },
      {
        "marca": "Audi",
        "modelo": "A4",
        "anio": 2022,
        "color": "Azul",
        "imagen": "Autos/AUDI.jpg"
      },
      {
        "marca": "Tesla",
        "modelo": "Model 3",
        "anio": 2022,
        "color": "Blanco",
        "imagen": "Autos/TESLA.jpg"
      },
      {
        "marca": "Nissan",
        "modelo": "Altima",
        "anio": 2021,
        "color": "Plata",
        "imagen": "Autos/ALTIMA.webp"
      }
    ]
  
let listaAutos = obtenerListaAutos();
listaAutos.id="listaautos"
function obtenerListaAutos() {
    const stockAutos = localStorage.getItem("vehiculos");
    return stockAutos ? JSON.parse(stockAutos) : autosIniciales;
}

let botoncito = document.getElementById("buscar");
botoncito.addEventListener("click", function filtrar() {
    listaAutos = obtenerListaAutos(); 

    const body = document.getElementById("body");
    let input = document.getElementById("buscando").value;
    let palabraClave = input.trim().toLowerCase();
    let resultado = listaAutos.filter((x) => x.marca.toLowerCase().includes(palabraClave))
    body.innerHTML=""
    ;
    
    if (input === "") {
        Swal.fire("Escribe algo para buscar");
    } else {
        if (resultado.length > 0) {
            const container = document.createElement("div");
            resultado.forEach((x) => {
                const card = document.createElement("ul");
                const marca = document.createElement("li");
                marca.textContent = "Marca: " + x.marca;
                card.appendChild(marca);

                const modelo = document.createElement("li");
                modelo.textContent = "Modelo: " + x.modelo;
                card.appendChild(modelo);

                const color = document.createElement("li");
                color.textContent = `Color: ${x.color}`;
                card.appendChild(color);

                const anio = document.createElement("li");
                anio.textContent = `Año: ${x.anio}`;
                card.appendChild(anio);

                const imagen = document.createElement("img")
                imagen.id="imgbusqueda";
                imagen.src = x.imagen;
                imagen.alt = "Imagen del auto";
                card.appendChild(imagen);

                container.appendChild(card);
            });

            body.appendChild(container);
        } else {
            Swal.fire("No hay coincidencias para tu búsqueda");
        }
    }
    const botonvolver=document.createElement("button")
    botonvolver.innerHTML=`Volver al inicio`
    botonvolver.addEventListener("click",()=>{
        window.location.href = document.referrer
    })
    body.appendChild(botonvolver)
});

let botonagregar = document.getElementById("boton");
botonagregar.addEventListener("click", function agregar() {
    const body = document.querySelector("body");
    body.innerHTML = '';
    
    const formulario = document.createElement("form");
    formulario.innerHTML = `
        <label for="marca-input">Ingresá la marca: </label>
        <input id="marca-input" type="text" step="0.01" required><br>
        <label for="modelo-input"> Ingresá el modelo: </label>
        <input id="modelo-input" type="text" step="0.01" required><br>
        <label for="color-input"> Ingresá el color: </label>
        <input id="color-input" type="text" step="0.01" required><br>
        <label for="anio-input"> Ingresá el año: </label>
        <input id="anio-input" type="number" step="0.01" required>

        <button type="submit" id="css"> Agregar </button><br>
        
    `;

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        const marcainput = document.getElementById("marca-input").value.trim().toLowerCase();
        const modeloinput = document.getElementById("modelo-input").value;
        const anioinput = parseFloat(document.getElementById("anio-input").value);
        const colorinput = document.getElementById("color-input").value.trim();

        if (marcainput === "" || colorinput === "" || isNaN(anioinput) || modeloinput === "") {
            Swal.fire("Ingresa datos validos");
            return;
        }

        const nuevoAuto = {
            "marca": marcainput,
            "modelo": modeloinput,
            "anio": anioinput,
            "color": colorinput,
        }
        autosIniciales.push(nuevoAuto)
       
        localStorage.setItem("vehiculos", JSON.stringify(autosIniciales));

        const container = document.createElement("div");
        Swal.fire("Se agrego tu vehículo a la lista");
    });

    body.appendChild(formulario);


    const botonvolver=document.createElement("button")
    botonvolver.innerHTML=`Volver al inicio`
    botonvolver.addEventListener("click",()=>{
        window.location.href = document.referrer
    })
    body.appendChild(botonvolver)
    
});

let mostrar = document.getElementById("mostrar");
listaAutos.id= "lista"
mostrar.addEventListener("click", function () {
    
    const body=document.getElementById("body")
    
    const container = document.createElement("div");
    
    listaAutos.forEach((x) => {
        const card = document.createElement("ul");
        const marca = document.createElement("li");
        
        marca.textContent = "Marca: " + x.marca;
        card.appendChild(marca);

        const modelo = document.createElement("li");
        modelo.textContent = "Modelo: " + x.modelo;
        card.appendChild(modelo);

        const color = document.createElement("li");
        color.textContent = `Color: ${x.color}`;
        card.appendChild(color);

        container.appendChild(card);
    });
    body.appendChild(container)
    
    
    
    
    ;
    


    

    

    
})


let mostrar = document.getElementById("mostrarm");
mostrar.addEventListener("click", function () {
url = "autos.json"
fetch(url)
.then((response)=>response.json())
.then(datosAuto=>{
    const autos= datosAuto.autos
    const autoscontainer=document.getElementById("autos-container")
    autos.forEach( auto => {
        const elementoauto= document.createElement("div")
        elementoauto.innerHTML=`<p>Marca: ${auto.marca}</p>
        <p>Modelo: ${auto.modelo}</p>
        <p>Color: ${auto.color}</p>
        <p>Año: ${auto.anio}</p>
        <img src="${auto.imagen}" id="imagenes">`
        autoscontainer.appendChild(elementoauto)
    });
})
.catch((error) => {
    console.error("Error al obtener datos:");
    swal.fire("Nazi")

})
const botonvolver=document.createElement("button")
    botonvolver.innerHTML=`Volver al inicio`
    botonvolver.addEventListener("click",()=>{
        window.location.href = document.referrer
    })
    body.appendChild(botonvolver)
    mostrar.disabled=true
});


let autos= data.results
    autos.forEach((autos) => {
        fetch(autos.url)
        .then((response)=>response.json)
        .then(datosAuto=>  {
            const elementosAuto= document.createElement("div")
            elementosAuto.innerHTML= `<h6>
            
            ${datosAuto.marca}
            </h2>
            <img src="${datosAuto.imagen}">`
            autoscontainer.appendChild(elementosAuto)

        } )
        .catch(error=>{ 
            console.error("Exploto todo")
        })
        
    });
})
.catch(error=>{
    console.error("exploto todito")
})

<h4>${}</h4>
            <h4>${}</h4>
            <h4>${}</h4>
            <h4>${}</h4>
            <h4>${}</h4>
            <h4>${}</h4>
            <h4>${}</h4>
            <h4>${}</h4>
 &#9733
*/
url="https://restcountries.com/v3.1/all"

const apicontainer=document.getElementById("api-container")

let mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", function () {
fetch(url)
.then((response)=>response.json())
.then(data=>{   
    let paises=data
    const body=document.getElementById("body")
    const botonvolver=document.createElement("button")
    botonvolver.innerHTML=`Volver al inicio`
    botonvolver.addEventListener("click",()=>{
        window.location.href = document.referrer
    })
    body.appendChild(botonvolver)
    
    paises.forEach( (x)=>{
        const paisUrl = `https://restcountries.com/v3.1/name/${x.name.common}`;
        fetch(paisUrl)
        .then((response)=>response.json())
        .then(paisdata=> {
            const body=document.getElementById("body")
            const elementopais=document.createElement("div")
            elementopais.id="elementopais"
            const paisesLimitrofes = paisdata[0].borders;
            const paisesLimitrofesNombres = paisesLimitrofes
            ? paisesLimitrofes.map((border) => {
            const nombrePaisLimite = data.find((d) => d.cca3 === border)?.translations.spa.common;
            return nombrePaisLimite;
            
         })
        : ["No tiene"];

            const monedaInfo = paisdata[0].currencies ? Object.values(paisdata[0].currencies)[0] : null;
            const monedaNombre = monedaInfo ? monedaInfo.name : 'No disponible';
            const monedaSimbolo = monedaInfo ? monedaInfo.symbol : 'No disponible';
            const paisnombre=paisdata[0].translations.spa.common
            elementopais.innerHTML=`<h4>País: ${paisnombre}</h4>
            <p>Capital (en inglés): ${paisdata[0].capital}</p>
            <p>Continente: ${paisdata[0].region}</p>
            <p>Bandera: </p>
            <img id ="imagenes" src="${paisdata[0].flags.svg}" alt="${paisdata[0].translations.spa.common}">
            <p>Población: ${paisdata[0].population.toLocaleString()} habitantes</p>
            <p>Países limítrofes: ${paisesLimitrofesNombres.join(', ')}</p>
            <p>Superficie: ${paisdata[0].area.toLocaleString()} km²</p>
            <p>Moneda: ${monedaNombre}. Símbolo: (${monedaSimbolo})</p>
            <button class="fav-btn">Agregar a favoritos &#9733 </button>
            `;

        apicontainer.appendChild(elementopais)
        body.appendChild(elementopais)
        let agregarfav = elementopais.querySelector(".fav-btn");
            agregarfav.addEventListener("click", function () {
                let guardado = JSON.parse(localStorage.getItem("favoritos")) || [];
                guardado.push(paisnombre);
                localStorage.setItem("favoritos", JSON.stringify(guardado));
            });
            agregarfav.disabled=true
        })
        
    })
    
    mostrar.disabled=true
    
})

})

let botoncito = document.getElementById("buscar");
botoncito.addEventListener("click", function filtrar() {
fetch(url)
.then((response)=>response.json())
.then(data=>{
    let filtro=document.getElementById("filtro")
    if(filtro.value==="País"){
        const body = document.getElementById("body");
    let input = document.getElementById("buscando").value
    let paisesdata= data
    let palabraClave = input.trim().toLowerCase()
    let busqueda=paisesdata.filter((x)=>x.translations.spa.common.toLowerCase().includes(palabraClave))
    body.innerHTML=""
    if (input === "") {
        Swal.fire("Escribe algo para buscar");
    } else {
        if (busqueda.length > 0) {
            
            busqueda.forEach((x) => {
                const container = document.createElement("div")
            container.id="container";
                const card = document.createElement("p");
                const pais = document.createElement("p");
                pais.textContent = "Pais: " + x.translations.spa.common;
                card.appendChild(pais);
                
                const capital = document.createElement("p");
                capital.textContent = "Capital: " + x.capital;
                card.appendChild(capital);

                const continente = document.createElement("p");
                continente.textContent = `Continente: ${x.region}`;
                card.appendChild(continente);             


                const poblacion = document.createElement("p");
                poblacion.textContent = `Población: ${x.population.toLocaleString()} `;
                card.appendChild(poblacion);

                const area = document.createElement("p");
                area.textContent = `Superficie: ${x.area.toLocaleString()} km²`;
                card.appendChild(area)

                const bandera = document.createElement("p");
                bandera.textContent = "Bandera: ";
                card.appendChild(bandera)

                

                const imgbandera = document.createElement("img")
                imgbandera.id="imgbusqueda"
                imgbandera.src = x.flags.svg;
                imgbandera.alt = x.translations.spa.common;
                card.appendChild(imgbandera)

                

                container.appendChild(card);
                body.appendChild(container)
            });
                const historialbusquedas = JSON.parse(localStorage.getItem("busqueda")) || [];
                historialbusquedas.push(palabraClave);
                localStorage.setItem("busqueda", JSON.stringify(historialbusquedas));
                const historialGuardado = JSON.parse(localStorage.getItem("busqueda")) || [];

            ;
        } else {
            Swal.fire("No hay coincidencias para tu búsqueda");
        }

    }
    
    }else if(filtro.value==="Capital"){
        const body = document.getElementById("body");
    let input = document.getElementById("buscando").value
    let paisesdata= data
    let palabraClave = input.trim().toLowerCase()
    
    let busqueda = paisesdata.filter((x) => {
        if (x.capital && Array.isArray(x.capital)) {
            
            for (let capital of x.capital) {
                if (capital.toLowerCase().includes(palabraClave)) {
                    return true; 
                }
            }
        }
        return false; 
    });
    body.innerHTML=""
    if (input === "") {
        Swal.fire("Escribe algo para buscar");
    } else {
        if (busqueda.length > 0) {
            
            busqueda.forEach((x) => {
                const container = document.createElement("div")
            container.id="container";
                const card = document.createElement("p");
                const pais = document.createElement("p");
                pais.textContent = "Pais: " + x.translations.spa.common;
                card.appendChild(pais);
                
                const capital = document.createElement("p");
                capital.textContent = "Capital: " + x.capital;
                card.appendChild(capital);

                const continente = document.createElement("p");
                continente.textContent = `Continente: ${x.region}`;
                card.appendChild(continente);             


                const poblacion = document.createElement("p");
                poblacion.textContent = `Población: ${x.population.toLocaleString()} `;
                card.appendChild(poblacion);

                const area = document.createElement("p");
                area.textContent = `Superficie: ${x.area.toLocaleString()} km²`;
                card.appendChild(area)

                const bandera = document.createElement("p");
                bandera.textContent = "Bandera: ";
                card.appendChild(bandera)

                

                const imgbandera = document.createElement("img")
                imgbandera.id="imgbusqueda"
                imgbandera.src = x.flags.svg;
                imgbandera.alt = x.translations.spa.common;
                card.appendChild(imgbandera)

                

                container.appendChild(card);
                body.appendChild(container)
            });
            const historialbusquedas = JSON.parse(localStorage.getItem("busqueda")) || [];
                historialbusquedas.push(palabraClave);
                localStorage.setItem("busqueda", JSON.stringify(historialbusquedas));
                const historialGuardado = JSON.parse(localStorage.getItem("busqueda")) || [];
            ;
            ;
        } else {
            Swal.fire("No hay coincidencias para tu búsqueda");
        }

    }
        
    }else if(filtro.value==="Continente"){
        const body = document.getElementById("body");
    let input = document.getElementById("buscando").value
    let paisesdata= data
    let palabraClave = input.trim().toLowerCase()
    
    let busqueda=paisesdata.filter((x)=>x.region.toLowerCase().includes(palabraClave))
    body.innerHTML=""
    if (input === "") {
        Swal.fire("Escribe algo para buscar");
    } else {
        if (busqueda.length > 0) {
            ;
            busqueda.forEach((x) => {
                const container = document.createElement("div")
                container.id="container"
                const card = document.createElement("p");
                const pais = document.createElement("p");
                pais.textContent = "Pais: " + x.translations.spa.common;
                card.appendChild(pais);
                
                const capital = document.createElement("p");
                capital.textContent = "Capital: " + x.capital;
                card.appendChild(capital);

                const continente = document.createElement("p");
                continente.textContent = `Continente: ${x.region}`;
                card.appendChild(continente);             


                const poblacion = document.createElement("p");
                poblacion.textContent = `Población: ${x.population.toLocaleString()} `;
                card.appendChild(poblacion);

                const area = document.createElement("p");
                area.textContent = `Superficie: ${x.area.toLocaleString()} km²`;
                card.appendChild(area)

                const bandera = document.createElement("p");
                bandera.textContent = "Bandera: ";
                card.appendChild(bandera)

                

                const imgbandera = document.createElement("img")
                imgbandera.id="imgbusqueda"
                imgbandera.src = x.flags.svg;
                imgbandera.alt = x.translations.spa.common;
                card.appendChild(imgbandera)

                

                container.appendChild(card);
                body.appendChild(container);
            });
            const historialbusquedas = JSON.parse(localStorage.getItem("busqueda")) || [];
                historialbusquedas.push(palabraClave);
                localStorage.setItem("busqueda", JSON.stringify(historialbusquedas));
                const historialGuardado = JSON.parse(localStorage.getItem("busqueda")) || [];
            ;
            
        } else {
            Swal.fire("No hay coincidencias para tu búsqueda");
        }

    }
    }
    const botonvolver=document.createElement("button")
    botonvolver.innerHTML=`Volver al inicio`
    botonvolver.addEventListener("click",()=>{
        window.location.href = document.referrer
    })
    body.appendChild(botonvolver)
    botoncito.disabled=true
})
.catch(error=>console.error("Hubo un error al buscar el país"))

})


let historial = JSON.parse(localStorage.getItem("busqueda"));
let botonn = document.getElementById("hist");

botonn.addEventListener("click", function () {
    const body = document.getElementById("body");
    if (historial && historial.length > 0) {
        let hist = document.createElement("ul");
        hist.innerHTML = `<h1>HISTORIAL (Últimos 5 buscados): </h1>`;
        for (let i = Math.max(0, historial.length - 5); i < historial.length; i++) {
            let li = document.createElement("li");
            li.textContent = historial[i].toUpperCase(); 
            hist.appendChild(li);
        }
        body.appendChild(hist);
    } else {
        Swal.fire("No hay nada en el historial");
    }
});


let mostrarfav=document.getElementById("favs")
mostrarfav.addEventListener("click",function(){
    const body= document.getElementById("body")
    
    if (localStorage.getItem("favoritos")===null){
        Swal.fire("No hay ningun elemento marcado como favorito")
    }else{
        let favoritoss= document.createElement("ul")
    favoritoss.innerHTML=`<h1> Tu lista de países favoritos</h1>
    
    <li> ${JSON.parse(localStorage.getItem("favoritos"))}</li>`
    body.appendChild(favoritoss)

    }

})

