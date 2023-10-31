/*
En esta función llamada comprar, el usuario ingresará su nombre a través de un prompt.
Luego ingresará el precio del producto que desea comprar
A continuación la cantidad de cuotas en las que desea comprarlo
Una vez ingrese todos esos requerimientos, el sistema a través de consola le indicará al cliente que precio
final de producto le quedará (segun la cantidad de cuotas se calcula un cierto interés), y además
el precio de cada cuota. Si el usuario ingresa ´salir´ automaticamente se envia un mensaje de despedida
por consola y se interrumpira la ejecución.

*/
function Comprar(){
    while(true){
        let nombre=prompt("Ingrese su nombre para una atencion personalizada, o 'salir' para terminar: ")
        if(nombre=="salir"){
            console.log("Gracias por su visita!.")
            break
        }
        var precio=  prompt("Ingrese el precio del producto que le interesa comprar: ")
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

}

Comprar()



    
    
    

    
