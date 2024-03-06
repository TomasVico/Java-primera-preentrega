url="https://restcountries.com/v3.1/all"

const apicontainer=document.getElementById("api-container")

let mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", function () {
fetch(url)
.then((response)=>response.json())
.then(data=>{   
    let paises=data
    const body=document.getElementById("body")
    body.innerHTML=""
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
            <p>Continente 📍: ${paisdata[0].region}</p>
            <p>Bandera 🏳: </p>
            <img id ="imagenes" src="${paisdata[0].flags.svg}" alt="${paisdata[0].translations.spa.common}">
            <p>Población 👥: ${paisdata[0].population.toLocaleString()} habitantes</p>
            <p>Países limítrofes: ${paisesLimitrofesNombres.join(', ')}</p>
            <p>Superficie 🔍: ${paisdata[0].area.toLocaleString()} km²</p>
            <p>Moneda 💰: ${monedaNombre}. </p>
            <p>Símbolo: (${monedaSimbolo})</p>
            
            `;

        apicontainer.appendChild(elementopais)
        body.appendChild(elementopais)
        
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
                continente.textContent = `Continente 📍: ${x.region}`;
                card.appendChild(continente);             


                const poblacion = document.createElement("p");
                poblacion.textContent = `Población 👥: ${x.population.toLocaleString()} `;
                card.appendChild(poblacion);

                const area = document.createElement("p");
                area.textContent = `Superficie 🔍: ${x.area.toLocaleString()} km²`;
                card.appendChild(area)

                const bandera = document.createElement("p");
                bandera.textContent = "Bandera 🏳: ";
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
                continente.textContent = `Continente 📍: ${x.region}`;
                card.appendChild(continente);             

            

                const poblacion = document.createElement("p");
                poblacion.textContent = `Población 👥: ${x.population.toLocaleString()} `;
                card.appendChild(poblacion);

                const area = document.createElement("p");
                area.textContent = `Superficie 🔍: ${x.area.toLocaleString()} km²`;
                card.appendChild(area)

                const bandera = document.createElement("p");
                bandera.textContent = "Bandera 🏳: ";
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
                continente.textContent = `Continente 📍: ${x.region}`;
                card.appendChild(continente);             


                const poblacion = document.createElement("p");
                poblacion.textContent = `Población 👥: ${x.population.toLocaleString()} `;
                card.appendChild(poblacion);

                const area = document.createElement("p");
                area.textContent = `Superficie 🔍: ${x.area.toLocaleString()} km²`;
                card.appendChild(area)

                const bandera = document.createElement("p");
                bandera.textContent = "Bandera 🏳: ";
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
        body.appendChild(hist)
        botonn.disabled=true;
    } else {
        Swal.fire("No hay nada en el historial");
    }
});

/*
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
*/
