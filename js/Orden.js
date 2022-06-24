import { enviarMail } from './email.js'
let Orden = []
const divisa = "$"

$(document).ready(() => {
    try {
        productosOrden()
    } catch (err) {
        console.error("La pagina no se cargo correctamente", err)
    }
})


//Arma un  nuevo Array con los productos que estaban en carrito
const productosOrden = () => {
    try {
        Orden.length = 0
        for (let i = 0; i < sessionStorage.length; i++) {
            let key = sessionStorage.key(i)
            typeof JSON.parse(sessionStorage.getItem(key)) == 'object' && Orden.push(JSON.parse(sessionStorage.getItem(key)))
        }
        renderOrden()
    } catch (err) {
        console.error("Algo no salio como se esperaba", err)
    }
}


//Renderiza los productos en el sesssionStorage en la pagina de finalizarCompra 
const renderOrden = () => {
    let productosOrden = ''
    $('#productos-orden').html('')
    try {
        $.each(Orden, (index, producto) => {
            //Al recorrer el carrito, primero corrobora que la cantidad del producto es igual o mayor que 1. En caso afirmativo, renderiza el producto. Caso contrario elimina el objeto del seassionStorage
            productosOrden += `
                <tr>
                    <td><img id="fotoProductoOrden" src="${producto.Foto}" class="card-img-top"></td>
                    <td id="producto-nombre">${producto.Nombre}</td>
                    <td id="producto-descripcion">${producto.Descripcion}</td>
                    <td id="producto-cantidad">${producto.Cantidad}</td>
                    <td id="producto-precio">${divisa}${producto.Precio}</td>
                </tr>

            `
        });
        $('#productos-orden').html(productosOrden)
        precioTotal()
    } catch (err) {
        console.error("El carrito no se ha logrado renderizar correctamente", err)
    }
}

$('#cuotas').change(() => {
    let cuotas = $('#cuotas').val();
    precioTotal(cuotas)

});
//Genera un acumulador de los precios de los productos y en relacion a las cuotas seleccionadas
//modificara su valor por una tasa de interes
const precioTotal = (cuotas) => {
    let nPrecio = Orden.reduce((acc, { Precio }) => acc + (Precio), 0)
    if (!cuotas) {
        $('#total-orden').text(`El total es: ${divisa}${nPrecio}`)
    } else if (cuotas === '1') {
        $('#total-orden').text(`El total es: ${divisa}${(nPrecio * cuotas)}`)// en 1 cuota - Sin tasa de interes --> El valor permanece igual
    } else if (cuotas === '3') {
        $('#total-orden').text(`El total es: ${divisa}${(nPrecio + nPrecio * 0.203).toFixed(2)}`)// En 3 cuotas - CFT 20,3% ---> valor con recargo
    } else if (cuotas === '6') {
        $('#total-orden').text(`El total es: ${divisa}${(nPrecio + nPrecio * 0.2311).toFixed(2)}`)// En 6 cuotas - CFT 23,11% ---> valor con recargo
    } else if (cuotas === '12') {
        console.log(cuotas, (nPrecio + ((nPrecio) * 0.203)))
        $('#total-orden').text(`El total es: ${divisa}${(nPrecio + nPrecio * 0.2506).toFixed(2)}`)// En 12 cuotas - CFT 25,06% ---> valor con recargo
    } else if (cuotas === '18') {
        $('#total-orden').text(`El total es: ${divisa}${(nPrecio + nPrecio * 0.2589).toFixed(2)}`)// En 18 cuotas - CFT 25,89% ---> valor con recargo
    }
}

//Al hacer click sobre finalizar compra, verifica que no falte ningun dato
//En caso de no faltar datos, enviara un email con el recibo de la compra a la direccion de email indicada en el formulario
//y sera redireccionado luego de 3 segundos a la pagina compraFinalizada
$('#finalizar').on('click', (e) => {
    e.preventDefault()
    Swal.fire({
        backdrop:false,            
        title: "Esta seguro que desea finalizar su compra?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, estoy seguro",
        cancelButtonText: "No, no lo deseo.",
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                backdrop:false,            
                title: "Compra finalizada",
                icon: "success",
                showConfirmButton: false,
                allowOutsideClick: false,
                timer: 2500,
            })
            if (($('#inputCCV').val()) && ($('#inputNombre').val()) && ($("#inputNumero").val()) && ($(".year").text()) && ($('.mes').text()) != '') {
                sessionStorage.clear()
                enviarMail(Orden)
                setTimeout(() => {
                    $(location).attr('href', '../html/compraFinalizada.html')
                }, 3000)
            }
            else {
                Swal.fire({
                    backdrop:false,            
                    title: "Faltan datos que completar",
                    icon: "warning",
                    confirmButtonText: "Completarlos",
                    allowOutsideClick: false
                })
            }
        }
    })
})

