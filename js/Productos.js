import { renderCard } from './main.js'
let opcion = ''

//Invoco la funcion "loadProducts" --> Esta me devuelve todos los productos de la DB
export const loadProducts = async () => {
    try {
        var response = await fetch('./BD/productos.json')
        return response.json();
    } catch (err) {
        console.error('la base de datos no ha sido cargada correctamente', err);
    }
}
// Le asigno un nombre mas comun a la funcion anterior
const productos_Datos = await loadProducts()


/*
------------------------ Filtro de productos en panel principal -----------------------------------------------------------------------------------//-----------
                                                                                                                                                   
Con el selector de filtro, se ha emulado 2 filtros (por Categoria y por Precio)
El mismo cumple con distintas funciones y se puede combinar entre ellos

Las funcionalidades son:

1- Filtrar y eliminar filtro Precio
2- Filtrar y eliminar filtro Categoria
3- Podemos aplicar un filtro categoria y filtro precio: Esto nos mostrara los productos de dicha categoria en ese rango de precios
4- Podemos aplicar un filtro precio y luego filtro cateogria. Igual que en el caso anterior, mostrara productos por categoria en rango de precio

Cuando realizamos un filtrado doble (caso 3 y 4), al eliminar el segundo filtro, regresara al primer filtro seleccionado.
Ej:
Si filtramos por precio y luego por categoria, se enseñaran los productos en un rango de precio y una categoria especifica.
Si procedemos a eliminar el filtro categoria, quedando solo el filtro precio, se veran solamente los productos en ese rango de precio.
Si aplicaramos nuevamente el filtro categoria, volveremos a ver segun filtro categoria y rango precio.
--------------------------------------------------------------------------------------------------------------------------------------------------
*/

//Al hacer click sobre el nombre, se regresa a la pagina principal,se evita que la pagina recargue//
// y los botones de filtro y texto vuelven a la normalidad.//
$(".nombre").on("click", async (e) => {
    try {
        $('#filtrar_Productos').text('Aplicar Filtro').removeClass().addClass('verde') && eliminarFiltroCategoria()
        $('#filtrar_Precio').text('Aplicar Filtro').removeClass().addClass('verde') && eliminarFiltroPrecio()
        e.preventDefault()
        const data = await loadProducts()
        renderCard(data)
        $('#titulo_productos').html(`<h2>Productos Destacados:</h>`)
    } catch (err) {
        console.error("la pagina no se cargo correctamente", err)
    }
});

//Al apretar sobre el boton filtrado, cambiara la clase del boton y su css (rojo para eliminar filtro y verde para aplicar filtro)
$('#filtrar_Productos').on('click', e => {
    try {
        $('#filtrar_Productos').attr('Class') === 'verde' ?
            $('#filtrar_Productos').text('Eliminar Filtro').toggleClass('rojo') && filtroProductos() :
            $('#filtrar_Productos').text('Aplicar Filtro').toggleClass('rojo') && eliminarFiltroCategoria()
        e.preventDefault()
    } catch (err) {
        console.error("el boton de filtro no funciona correctamente", err)
    }
})

//Al apretar sobre el boton filtrado, cambiara la clase del boton y su css (rojo para eliminar filtro y verde para aplicar filtro)
$('#filtrar_Precio').on('click', e => {
    try {
        $('#filtrar_Precio').attr('Class') === 'verde' ?
            $('#filtrar_Precio').text('Eliminar Filtro').toggleClass('rojo') && filtroPrecio() :
            $('#filtrar_Precio').text('Aplicar Filtro').toggleClass('rojo') && eliminarFiltroPrecio()
        e.preventDefault()
    } catch (err) {
        console.error("El boton de filtro no funciona correctamente", err)
    }
})

//Funcion para filtrar productos por categoria. 
const filtroProductos = async () => {    
    try {
        //Se declaran las varaibles que se utilizaran dentro del filtro. Para este caso se declaran:
        // Precio mayor (si existe filtro de precio aplicado)
        // Precio menor (si existe filtro de precio aplicado)
        // Las distintas categorias que engloban al producto
        const precioMenor = $('#slider_valueMin').text()
        const precioMayor = $('#slider_valueMax').text()  
        $('.Comidas').is(':checked') && (opcion = $('.Comidas').val()) && ($('#titulo_productos').html(`<h2>Plato principal:</h>`))
        $('.utensillosCocina').is(':checked') && (opcion = $('.utensillosCocina').val()) && ($('#titulo_productos').html(`<h2>Minutas</h>`))
        $('.bebidas').is(':checked') && (opcion = $('.bebidas').val()) && ($('#titulo_productos').html(`<h2>Bebidas:</h>`))
        $('.golosinas').is(':checked') && (opcion = $('.golosinas').val()) && ($('#titulo_productos').html(`<h2>Postres:</h>`))
        
        //Si existe ya un filtro aplicado por precio del producto, el texto del boton habra cambiado a "Eliminar Filtro"
        //Para este caso se filtra sobre ese precio en la categoria seleccionada
        if($('#filtrar_Precio').text() === 'Eliminar Filtro'){
            const productos = productos_Datos.filter((el) => el.Categoria === opcion && (el.Precio >= precioMenor && el.Precio <= precioMayor)) 
            renderCard(productos)        
        }else{        
        //En caso que no se haya aplicado un filtro por precio, el texto del boton aparecera como "Aplicar Filtro",
        // Por lo que la condicion anterior no se aplicara. Para este caso se filtraran los productos solo por la categoria del producto.
            const data = productos_Datos.filter((el) => el.Categoria === opcion);                 
            renderCard(data)
        }
    } catch (err) {
        console.error("El filtro no funciona correctamente", err)
    }
}

//Funcion para filtrar productos por precio
const filtroPrecio = async () => {
    try {
        const precioMenor = $('#slider_valueMin').text()
        const precioMayor = $('#slider_valueMax').text()  

        //Si existe ya un filtro aplicado por categoria de producto, el texto del boton habra cambiado a "Eliminar Filtro"
        //Para este caso se filtra sobre esa categoria en el rango de precio indicado
        if ($('#filtrar_Productos').text()=== 'Eliminar Filtro') {
            const prod = productos_Datos.filter(el => (el.Categoria === opcion) && (el.Precio >= precioMenor && el.Precio <= precioMayor));
            renderCard(prod)


        //En caso que no se haya aplicado un filtro por categoria, el texto del boton aparecera como "Aplicar Filtro",
        // Por lo que la condicion anterior no se aplicara. Para este caso se filtraran los productos solo por rango de precio.
        } else {
            const data = productos_Datos.filter(el => (el.Precio >= precioMenor && el.Precio <= precioMayor));
            $('#titulo_productos').html(`<h2>Productos entre $${$('#slider_valueMin').text()} y $${$('#slider_valueMax').text()}</h>`)
            renderCard(data)            
        }
    } catch (err) {
        console.error("El filtro no funciona correctamente", err)
    }
}

//Funcion que elimina el filtro por precio de productos
const eliminarFiltroPrecio = async () => {
    try {

        //Reinicio los sliders de modificador de precio
        $('#sliderMin').val(1) &&  $('#slider_valueMin').text("1")
        $('#sliderMax').val(10000) && $('#slider_valueMax').text("10000") 

        //Si al momento de eliminar el filtro por precio, se encuentra algun filtro por categoria seleccionado
        //Se eliminara el filtro por precio mostrando los productos seleccionados por la categoria que se encuentra establecida
        if ($('#filtrar_Productos').text()=== 'Eliminar Filtro') {
            filtroProductos()   
        }else{

        //Si al momento de eliminar el filtro por precio, NO encuentra algun filtro por categoria seleccionado
        //Se eliminara el filtro por precio mostrando todos los productos

            $('#titulo_productos').html(`<h2>Productos Destacados:</h>`)
            renderCard(productos_Datos)
        }
    } catch (err) {
        console.error("Fue imposible eliminar el filtro", err)
    }
}

//La siguiente funcion funcionara dependiendo de algunas condiciones que se hayan aplicado durante el filtrado

//Esta funcion elimina el filtro "Categoria". Depeniendo de si lo hemos combinado o no con el filtro precio, realizaremos distintas funciones
const eliminarFiltroCategoria = async () => {
    try {

        //Reinicio los modificadores de categoria (opcion elegida y que el input se deseleccione)
        $("input[name='productos']").each((index, x) => {x.checked=false})
        opcion = ''

        //Si al momento de eliminar el filtro por Categoria, se encuentra algun filtro por precio seleccionado,
        //Se eliminara el filtro por categoria mostrando los productos seleccionados por el rango de precio se encuentra establecida
        if(($('#filtrar_Precio').text()=== 'Eliminar Filtro')){
            $('#titulo_productos').html(`<h2>Productos entre $${$('#slider_valueMin').text()} y $${$('#slider_valueMax').text()}</h>`)
            filtroPrecio()
            //
        }else{
        //Si al momento de eliminar el filtro por categoria, NO encuentra algun filtro por precio seleccionado
        //Se eliminara el filtro por categoria mostrando todos los productos

            $('#titulo_productos').html(`<h2>Productos Destacados:</h>`)
            renderCard(productos_Datos)
        }
    } catch (err) {
        console.error("Fue imposible eliminar el filtro", err)
    }
}
