




//-----SIMULADOR DE ORDEN-----------------




    


const productos = [
    {
        "Id": 1,
        "Nombre": "Jugo Esprimido",
        "Descripcion": "Deliciosas frutas esprimida",
        "Precio": 150,
        "Foto": "./img/menu-9.jpg",
        "Categoria": "Bebidas"
    },
    {
        "Id": 2,
        "Nombre": "Hanburgesas- (Queso y panceta)",
        "Descripcion": "Una riquisima Hambuegesa con queso y panceta",
        "Precio": 850.99,
        "Foto": "./img/dish-1.png",
        "Categoria": "Minutas"
    },
    {
        "Id": 3,
        "Nombre": "Snack",
        "Descripcion": "Pollo rebosado y frito",
        "Precio": 750.99,
        "Foto": "./img/dish-2.png",
        "Categoria": "Minutas"
    },
    {
        "Id": 4,
        "Nombre": "Aves",
        "Descripcion": "Pollo al horno",
        "Precio": 1500.99,
        "Foto": "./img/dish-3.png",
        "Categoria": "Plato principal"
    },
    {
        "Id": 5,
        "Nombre": "Pizzas",
        "Descripcion": "Pizza de muzarela",
        "Precio": 950.99,
        "Foto": "./img/dish-4.png",
        "Categoria": "Plato principal"
    },
    {
        "Id": 6,
        "Nombre": "Postres",
        "Descripcion": "Galletitas rellena de chocolate",
        "Precio": 715.99,
        "Foto": "./img/dish-5.png",
        "Categoria": "Postre"
    },
    {
        "Id": 7,
        "Nombre": "Pollo Frito",
        "Descripcion": "La mejor pieza de pollo frito y crocante",
        "Precio": 850.99,
        "Foto": "./img/dish-6.png",
        "Categoria": "Minutas"
    },
    {
        "Id": 8,
        "Nombre": "Pizzas Especiales",
        "Descripcion": "Pizza con longaniza",
        "Precio": 812.99,
        "Foto": "./img/menu-1.jpg",
        "Categoria": "Platos Principal"
    },
    {
        "Id": 9,
        "Nombre": "Especial Hanburgesas",
        "Descripcion": "Tiene tomate, lechuga y pepino",
        "Precio": 300,
        "Foto": "./img/menu-2.jpg",
        "Categoria": "Minutas"
    },
    {
        "Id": 10,
        "Nombre": "Panqueques",
        "Descripcion": "Panqueque con dulce de leche",
        "Precio": 910.99,
        "Foto": "./img/menu-3.jpg",
        "Categoria": "Postres"
    },
    {
        "Id": 11,
        "Nombre": "Helado Especial",
        "Descripcion": "Una bocha de Helado arriba de un galletita",
        "Precio": 612.99,
        "Foto": "./img/menu-4.jpg",
        "Categoria": "Postres"
    },
    {
        "Id": 12,
        "Nombre": "Torta de frutos rojos",
        "Descripcion": "Deliciosa torta de frutos rojos",
        "Precio": 550.99,
        "Foto": "./img/menu-5.jpg",
        "Categoria": "Postres"
    },
    {
        "Id": 13,
        "Nombre": "Mix de frutos y cereales",
        "Descripcion": "Un riquisimo mix natural",
        "Precio": 812.99,
        "Foto": "./img/menu-8.jpg",
        "Categoria": "Postres"
    },
    {
        "Id": 14,
        "Nombre": "Jugos",
        "Descripcion": "Una riquisima bariedad de jugos ",
        "Precio": 512.99,
        "Foto": "./img/menu-7.jpg",
        "Categoria": "Bebidas"
    }
    
]



let carrito = []

//Utilizo ciclo,  map y reduce
const agregarProductoCarrito = (id) => {
    let productoEncontrado = productos.find(producto => producto.Id === id)
    let productoCarrito = carrito.find(producto => producto.Id === id)
    if (productoCarrito === undefined) {
        alert("el producto " + productoEncontrado.Nombre + " fue agregado a su carrito")
        carrito.push({
            Cantidad: 1,
            ...productoEncontrado
        })
    } else {
        const prodIndex = carrito.findIndex((prod => prod.Id === id))
        carrito[prodIndex].Cantidad = carrito[prodIndex].Cantidad + 1
        carrito[prodIndex].Precio = carrito[prodIndex].Precio + productoEncontrado.Precio
    }
}


let nombre = prompt("ingrese su nombre")

const saludar = (nombre) => {
    alert("Bienvenido: " + nombre)
}
saludar(nombre)



while (nombre !== "salir") {
    let idProducto = Number(prompt("Ingrese el numero del plato que desea comprar:" + "\n" + productos.map((producto) => ` \n ${producto.Id} - ${producto.Nombre} - $ ${producto.Precio}`)))
    agregarProductoCarrito(idProducto)
    let opcion = prompt("Si desea seguir comprando, introduzca: si" + "\n" + "para finalizar introduzca: salir")
    if (opcion === "si") {
        idProducto = Number(prompt("Ingrese el numero del plato que desea comprar:" + "\n" + productos.map((producto) => ` \n ${producto.Id} - ${producto.Nombre} - $ ${producto.Precio}`)))
        agregarProductoCarrito(idProducto)
        opcion = prompt("Si desea seguir comprando, introduzca: si" + "\n" + "para finalizar introduzca: salir")
    }
    if (opcion === "salir") {
        alert("Gracias por su compra. Su recibo es: " +
            "Pedido : "  + "\n" +
            "\n" + carrito.map((producto) => producto.Cantidad > 3
                ? ` \n Cantidad: ${producto.Cantidad} - Nombre: ${producto.Nombre} - Precio: $ ${(producto.Precio - producto.Precio * 0.3)}`
                : ` \n Cantidad: ${producto.Cantidad} - Nombre: ${producto.Nombre} - Precio: $ ${producto.Precio}`)
            + "\n" +
            "Precio Total: $" + carrito.reduce((acc, { Precio }) => acc + Precio, 0))
        break
    }
} 





























/*
function ingresarDatos(mensaje){
    return prompt(mensaje)
}

function saludar(nombre){
    alert("Hola " + nombre)
}

let nombre = ingresarDatos("Ingrese su nombre");

saludar(nombre)
let resu = 0;

function Ploducto(plato, precio){
    this.plato = plato;
    this.precio = precio;
}


const platos = new Producto("hanburgesa", 850.99)


function calcularIva(valor){
    console.log("El total con IVA es: $" + valor * 1.21);
}  

let plato = parseInt(ingresarDatos("\t ---Ingrese el plato deceado--- \n 0)-SALIR \n 1)- HANBUERGESAS $850.99. \n 2)- SNACK $750.99 . \n 3)- AVES $1500.99 .\n 4)- PIZZAS $950.99. \n 5)- POSTRES $715.99 \n 6)- POLLO FRITO $850.99 \n "));
while(plato !=0){
    switch(plato){
        case 1:
            
            calcularIva(850.99)
            break;
        case 2:
            calcularIva(750.99);
            
            break;
        case 3:
            calcularIva(1500.99);
            
            break; 
        case 4:
            calcularIva(950.99);
            break;
        case 5:
            calcularIva(715.99);
            break;
        case 6:
            calcularIva(850.99);
            break;
        default:
            alert("Igreso incorrecto" );
            break;
        
                    
    }

    let fpago = parseInt(ingresarDatos("\t ---FORMAS DE PAGO--- \n 1)- TARJETA DE CREDITO.  \n 2)- MECADO PAGO.\n 3)- DEVITO."));
        

    switch(fpago){
        case 1:
            alert("Su pago fue procesado correctamente");
            break;
        case 2:
            alert("Su pago fue procesado correctamente");
            break;
        case 3:
            alert("Su pago fue procesado correctamente");
            break; 
    
        default:
            alert("Igreso incorrecto" );
            break;
        
                    
    }
    if(fpago < 1 || fpago > 4) {
        prompt("\t ---FORMAS DE PAGO--- \n 0)-SALIR \n 1)- TARJETA DE CREDITO. \n 2)-DEVITO. \n 3)- MECADO PAGO.\n ");
        alert("Su pago fue procesado correctamente")
    }


    plato = parseInt(ingresarDatos("\t ---Ingrese el plato deceado--- \n 0)-SALIR \n 1)- HANBUERGESAS $850.99. \n 2)- SNACK $750.99 . \n 3)- AVES $1500.99 .\n 4)- PIZZAS $950.99. \n 5)- POSTRES $715.99 \n 6)- POLLO FRITO $850.99 \n "));
}    

*/