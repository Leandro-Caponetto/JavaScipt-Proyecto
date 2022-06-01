let user = prompt ("Ingrese su usuario");
let pass = prompt ("Ingrese tu password");
let usuarioGuardado = "Leandro";
let password = "12345";

if (user != "" && pass != "") {
    if (user == "Leandro" || user == "LEANDRO" && pass == "12345") {
        console.log("hola Leandro como estas?");
    }else {
        alert("Usuario Desconocido");
    }
    if(user != "" && pass != "") {
        alert("Hola usuario: " + user);
    }
    console.log("\t ---BIEN VENIDO AL SISTEMA DE VENTAS USUARIO---\n \t \t \t "  + user)



    let produ = parseInt(prompt("Ingrese la cantidad de productos")); 
    let total = 0;
    while(produ != 0) {
        for(let i = 1; i <= produ; i++ ){
            let pro = prompt("Ingrese el producto " + i);
            for(let j = pro; j <= pro; j++){
                let pre = parseInt(prompt("Ingrese el precio del producto Nº " + i + j));
                for(let c = pre; c <= pre; c++){

                    console.log("El producto " + i + " es : " + j + ":" + "$" + c);
                    total += pre; 
                }

               
            }
            
            
           
        }
        console.log("El total es: $" + total) ;
        let fpago = parseInt(prompt("\t ---FORMAS DE PAGO--- \n 1)- TARJETA DE CREDITO. \n 2)- EFECTIVO. \n 3)- MECADO PAGO.\n 4)- DEVITO."));
        
        let int = 0;
        let tint = 0;
        let desc = 0;
        switch(fpago){
            case 1:
                int = total * 0.15;
                tint = total + int;
                console.log(" El %15 de interes es de: $" + int);
                console.log("El total a pagar es de: $" + tint);
                break;
            case 2:
                desc = total * 0.05;
                let tsin = total - desc;
                console.log("El total a pagar con el descuento del %5 es de: $" + tsin);
                break;
            case 3:
                int = total * 0.20;
                tint = total + int;
                console.log(" El %15 de interes es de: $" + int);
                console.log("El total a pagar es de: $" + tint);
                break; 
            case 4:
                console.log("El total a pagar es de: $" + total);
                break;
            default:
                alert("Igreso incorrecto" );
                break;
            
                          
        }
        if(fpago < 1 || fpago > 4) {
            prompt("\t ---FORMAS DE PAGO--- \n 1)- TARJETA DE CREDITO. \n 2)- EFECTIVO. \n 3)- MECADO PAGO.\n 4)- DEVITO.");
        }
        
       produ = prompt("Ingrese la cantidad de productos que decea agregar");  
    }
    

    
    



}else {
    alert("Campo Vacio");
      
}



 