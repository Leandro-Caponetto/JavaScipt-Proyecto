const card = document.querySelector(".card");

const contador = document.querySelector('#contador'),
btnMas = document.querySelector('#aumentar'),
btnMenos = document.querySelector('#disminuir')
platoImg = document.querySelector("#fotoProducto"),
platoNombre = document.querySelector("#tituloProducto"),
platoDescripcion = document.querySelector("#discripcionProducto"),
platoPrecio = document.querySelector("#precioProducto"),
btnGuardar = document.querySelector("#btnGuardar"),
carrito = document.querySelector("#carrito");










//-----SIMULADOR DE ORDEN-----------------



const productos = [
    {
        "Id": 1,
        "Nombre": "Jugo Esprimido",
        "Descripcion": "Deliciosas frutas esprimida",
        "Precio": "$" + 850,
        "Foto": "./img/menu-9.jpg",
        "Categoria": "Bebidas"
    },
    {
        "Id": 2,
        "Nombre": "Haburgesas",
        "Descripcion": " Hambuegesa con queso y panceta",
        "Precio": "$" + 850,
        "Foto": "./img/dish-1.png",
        "Categoria": "Minutas"
    },
    {
        "Id": 3,
        "Nombre": "Snack",
        "Descripcion": "Pollo rebosado y frito",
        "Precio": "$" + 750,
        "Foto": "./img/dish-2.png",
        "Categoria": "Minutas"
    },
    {
        "Id": 4,
        "Nombre": "Aves",
        "Descripcion": "Pollo al horno",
        "Precio": "$" + 1500,
        "Foto": "./img/dish-3.png",
        "Categoria": "Plato principal"
    },
    {
        "Id": 5,
        "Nombre": "Pizzas",
        "Descripcion": "Pizza de muzarela",
        "Precio": "$" + 950,
        "Foto": "./img/dish-4.png",
        "Categoria": "Plato principal"
    },
    {
        "Id": 6,
        "Nombre": "Postres",
        "Descripcion": "Galletitas rellena de chocolate",
        "Precio": "$" + 715,
        "Foto": "./img/dish-5.png",
        "Categoria": "Postre"
    },
    {
        "Id": 7,
        "Nombre": "Pollo Frito",
        "Descripcion": "Pollo frito y crocante",
        "Precio": "$" + 850,
        "Foto": "./img/dish-6.png",
        "Categoria": "Minutas"
    },
    {
        "Id": 8,
        "Nombre": "Pizzas Especiales",
        "Descripcion": "Pizza con longaniza",
        "Precio": "$" + 812,
        "Foto": "./img/menu-1.jpg",
        "Categoria": "Platos Principal"
    },
    {
        "Id": 9,
        "Nombre": "Especial Hamburgesas",
        "Descripcion": "Tiene tomate, lechuga y pepino",
        "Precio": "$" + 800,
        "Foto": "./img/menu-2.jpg",
        "Categoria": "Minutas"
    },
    {
        "Id": 10,
        "Nombre": "Panqueques",
        "Descripcion": "Panqueque con dulce de leche",
        "Precio": "$" + 910,
        "Foto": "./img/menu-3.jpg",
        "Categoria": "Postres"
    },
    {
        "Id": 11,
        "Nombre": "Helado Especial",
        "Descripcion": "Una bocha de Helado ",
        "Precio": "$" + 612,
        "Foto": "./img/menu-4.jpg",
        "Categoria": "Postres"
    },
    {
        "Id": 12,
        "Nombre": "Torta de frutos rojos",
        "Descripcion": "Deliciosa torta de frutos rojos",
        "Precio":"$" + 550,
        "Foto": "./img/menu-5.jpg",
        "Categoria": "Postres"
    },
    {
        "Id": 13,
        "Nombre": "Mix de frutos ",
        "Descripcion": "Un mix natural",
        "Precio":"$" + 812,
        "Foto": "./img/menu-8.jpg",
        "Categoria": "Postres"
    },
    {
        "Id": 14,
        "Nombre": "Jugos",
        "Descripcion": "Una riquisima bariedad de jugos ",
        "Precio":"$" + 512,
        "Foto": "./img/menu-7.jpg",
        "Categoria": "Bebidas"
    },
    {
        "Id": 15,
        "Nombre": "Pastas",
        "Descripcion": "Riquisimas pastas casera ",
        "Precio": "$" + 1500,
        "Foto": "./img/home-img-1.png",
        "Categoria": "Pastas"
    }   
    
]









document.addEventListener(`DOMContentLoaded`, async () =>{
    renderCard(productos)
})

const renderCard = productos => {
    let productosPanelVista = ''
    productos.forEach(productos => {
        {
            productosPanelVista += `
            
            <div class="col-12 mb-2 col-md-4 col-sm-4 ">
                <section class="menu" id="menu">
                    <div class="box-container">
                        <div class="content card ">
                            
                            <div class=" box content card-body ">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <div class="image">
                                    <img id="fotoProducto" src="${productos.Foto}" class=" validate card-img-top">
                                    <a href="#" class="fas fa-heart image"></a>
                                </div>
                                <h3 id="tituloProducto" class="validate">${productos.Nombre}</h3>
                                <p id="discripcionProducto" class="validate">${productos.Descripcion}</p>
                                <p id="precioProducto" class="validate"> <span class="price">${productos.Precio}</span></p>
                                <input type="button"  id="btnGuardar ${productos.id}"  class="btn " value="Guardar">
                            </div>
                        </div>
                    </div>    
                </section>
                            
                
                

            </div>
            
           

           `

        }
        document.getElementById('productos').innerHTML = productosPanelVista
    });

}














/*
function ingresarDatos(mensaje){
    return prompt(mensaje)
}

let carrito = []

//Utilizo ciclo, find, findIndex, map y reduce
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


let nombre = ingresarDatos("Ingrese su nombre")

const saludar = (nombre) => {
    alert("Bienvenido: " + nombre)
}
saludar(nombre)



while (nombre !== "salir") {
    let idProducto = Number(ingresarDatos("Ingrese el numero del plato que desea comprar:" + "\n" + productos.map((producto) => ` \n ${producto.Id} - ${producto.Nombre} - $ ${producto.Precio}`)))
    agregarProductoCarrito(idProducto)
    let opcion = ingresarDatos("Si desea seguir comprando, introduzca: si" + "\n" + "para finalizar introduzca: salir")
    if (opcion === "si") {
        idProducto = Number(ingresarDatos("Ingrese el numero del plato que desea comprar:" + "\n" + productos.map((producto) => ` \n ${producto.Id} - ${producto.Nombre} - $ ${producto.Precio}`)))
        agregarProductoCarrito(idProducto)
        opcion = ingresarDatos("Si desea seguir comprando, introduzca: si" + "\n" + "para finalizar introduzca: salir")
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




let pagos = ingresarDatos("Ingrese:  \n 1)-Si para ir a las formas de pagos: \n 2)- Salir  : ");

while(pagos !== "salir"){
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



   pagos = ingresarDatos("Ingrese:  \n 1)-Si para ir a las formas de pagos: \n 2)-Salir   : ");
   
    

}    


*/

















