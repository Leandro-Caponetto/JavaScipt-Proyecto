export const enviarMail = (Orden) => {
  //Definiremos 2 contadores, para agregarlos al cuerpo del mensaje a modo de leyenda//
  //Indicando el precio total de productos y la cantidad total de productos comprados//
  let precioTotal = Orden.reduce((acc, { Precio }) => acc + (Precio), 0)
  let cantidadProductosTotal = Orden.reduce((acc, { Cantidad }) => acc + (Cantidad), 0)

  //Como estamos haciendo uso de una API para enviar correos SMTP, debemos formatear lo que enviaremos, antes de mandarlo.//
  //En este caso, formateamos la tabla de productos, que luego enviaremos//
  $('.table td img').css({"width": "80%" ,"height": "auto"})
  $('.table td').css({'font-size': '0.8rem','vertical-align': 'middle', 'text-align': 'center', 'width':'1%', 'height': 'auto%', 'border': '1px solid black'})
  $('.table tr th').css({'font-size': '0.8rem','vertical-align': 'middle', 'text-align': 'center', 'width':'auto', 'height': '100%', 'border': '1px solid black'})
  $('.table').css({'width': '90%', 'border': '1px solid black'})

  //Se envia la el recibo de la compra mediante la API "Emailjs"
    emailjs.init('aRzIOsicfDfpquvcQ')
    emailjs.send("service_fum4ewf","template_9qeuuxp",{
      nombre: `${$('#inputNombre').val()}`,
      message: `${$('.carritoOrdenes').html()}`,
      total: `$${precioTotal}`,
      cantidad: `${cantidadProductosTotal}`,
      to_name: `${$('#inputEmail').val()}`,
      from_name: "Japoneando",
      imagen:  `<img src=https://drive.google.com/uc?export=donwload&id=1vtGNg8p-lAMut2ckEDXJF9Orp-mFSCXz style="width: 450px; height: 100px; margin-left: 20px"></img>`
      })
    .then(function(response) {
      //En caso de exito al mandar correo, muestro por consola "SUCCESS"
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      //En caso de falla al mandar correo, muestro por consola "FAILED"
       console.error('FAILED...', error);
    });    
    
}
