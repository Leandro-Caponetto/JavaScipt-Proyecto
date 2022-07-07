import { loadProducts } from './Productos.js'
import { add_Product } from './Carrito.js'
const divisa = "$"

//Evento que sucede cuando se carga el DOM. Se recupera la totalidad de productos en el JSON productos y se envia la informacion a la funcion renderCard.
$(document).ready(async () => {
  try {
    const data = await loadProducts()
    renderCard(data)
  } catch (err) {
    console.error("la pagina no se cargo correctamente", err)
  }
})

//Por cada producto(objeto) en el archivo JSON, dibuja la tarjeta con los datos del objeto producto.
export const renderCard = (data) => {
  $('#productos').html('')
  try {
    let detalleProductos = ''
    $.each(data, (index, producto) => {
      detalleProductos += `
      <div class="col-12 mb-2 col-md-4 col-sm-4 ">
            <div class="card">
                <div class="card-body">
                    <img id="fotoProducto" src="${producto.Foto}" class="card-img-top" width="50">
                    <h5 id="tituloProducto">${producto.Nombre}</h5>
                    <p id="descripcionProducto" >${producto.Descripcion} </p>
                    <p id="precioProducto">${divisa}${producto.Precio}</p>
                    <p id="categoriaProducto">${producto.Categoria}</p>
                    <button data-id="${producto.Id}" id="mybtn" name="btnComprar" class="btn btn-success">Comprar</button>
                </div>
              </div>
        </div>
                `})

    $('#productos').html(detalleProductos)
  } catch (err) {
    console.error("No se ha logrado renderizar correctamente la lista de productos", err)
  }
}

//Al detectar el evento, envio al carrito la informacion del producto seleccionado.
$('#productos').on('click', e => {
  try {
    $('.btn-success').has(e.target) && add_Product(e.target.parentElement);
    flyToElement($(e.target.parentElement).find('#fotoProducto'), $('#carrito'))   
    e.stopPropagation()
  } catch (err) {
    console.error("Es posible que el boton no funcione correctamente", err)
  }
})

//Movimiento de slider de filtro de precio Min
$('#sliderMin').on('input', function () {
  $('#slider_valueMin').html($(this).val());
});

//Movimiento de slider de filtro de precio Max
$('#sliderMax').on('input', function () {
  $('#slider_valueMax').html($(this).val());
});

//Ingresan 2 parametros. La imagen y el lugar de destino
const flyToElement = (flyer, flyingTo) => {
  const divider = 5;
  const flyerClone = $(flyer).clone();
  //Se setean propiedades de la imagen del producto a "volar"
  $(flyerClone).css({ position: 'absolute', width: '50px', height: 'auto', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 1000 });
  $('body').append($(flyerClone));
  const gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width() / divider) / 2;
  const gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height() / divider) / 2;

  //Se da animacion a la imagen seteada anteriormente
  $(flyerClone).animate({
    opacity: 0.5,
    left: gotoX,
    top: gotoY,
  }, 700,
    function () {
      $(flyingTo).fadeOut('fast', function () {
        $(flyingTo).fadeIn('fast', function () {
          $(flyerClone).fadeOut('fast', function () {
            $(flyerClone).remove();
          });
        });
      });
    });
}

//Al realizar scroll se modifica propiedad de header, para que pase a ser movil
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $('#header').addClass('sticky');
  } else {
    $('#header').removeClass('sticky');
  }
});