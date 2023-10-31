/*
Que el usuario ingrese el costo del producto que quiere comprar
Luego que ingrese la cantidad de cuotas en las que desea pagarlo
y el sistema le indique el porcentaje de interés total,el precio final y el precio de cada cuota
*/
/*function darNota(){
    let nombre= prompt("Ingresá tu nombre: ")
    while(nombre!="salir"){    
        
        let nota= prompt("Ingresa que nota obtuviste en el examen: ")
            if(nota>=6){
                alert("Felicitaciones " + nombre+ ", estas aprobado.")
            }
        
            else{
                alert("Lo lamento "+nombre+ ", no aprobaste")
                
        }        
    }
}
*/


while(true){
    let nombre=prompt("Ingrese su nombre para una atencion personalizada, o 'salir' para terminar: ")
    if(nombre=="salir"){
        console.log("Gracias por su visita!.")
        break
    }
    var precio= prompt("Ingrese el precio del producto que le interesa comprar: ") 
    let cuotas=prompt("Ingrese en la cantidad de cuotas que desea comprarlo: ")
    let preciocuotas= precio/cuotas
    if (cuotas>=1 && cuotas <=24){ 
        if (cuotas<=6){
            var precio= precio
            console.log("Hola "+nombre+"! el precio de su producto será $"+precio+" y lo pagarás en "+cuotas+" cuotas de $"+ preciocuotas+" cada una")
        }else if(cuotas >6 && cuotas <=12){
            var precio= precio * 1.3
            console.log("Hola "+nombre+"! el precio de su producto será $"+precio+" y lo pagarás en "+cuotas+" cuotas de $"+ preciocuotas+" cada una")
        }else{
            var precio = precio *2
            console.log("Hola "+nombre+"! el precio de su producto será $"+precio+" y lo pagarás en "+cuotas+" cuotas de $"+ preciocuotas+" cada una")
        }
    

        
    }else{
        console.log("Debes elegir de 1 a 24 cuotas")
        break
    }
}

    
    
    

    
/* if(cuotas <=6){
    preciocuotas=precio /cuotas;
}else if(cuotas >6 && cuotas <=12){
    preciocuotas= precio/ cuotas; 
}else (cuotas >12 && cuotas <=24);{
    preciocuotas= precio / cuotas;
    */