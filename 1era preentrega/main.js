

function darNota(){
    let nombre= prompt("Ingresá tu nombre: ")
    while(nombre!="salir"){    
        
        let nota= prompt("Ingresa que nota obtuviste en el examen: ")
            if(nota>=6){
                alert("Felicitaciones " + nombre+ ", estas aprobado.")
            }
        
            else{
                alert("Lo lamento "+nombre+ ", no aprobaste")
                
            }
        nombre=prompt("Ingrese nombre de otro alumno: ")
        
        }
        
    
    }

    


darNota()


