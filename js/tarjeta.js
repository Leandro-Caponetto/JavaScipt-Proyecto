// * Rotacion de la tarjeta
$('#tarjeta').on('click', () => {
	$('#tarjeta').toggleClass('active');
});

// * Boton de abrir formulario
$('#btn-abrir-formulario').on('click', () => {
	$('#btn-abrir-formulario').toggleClass('active');
	$('#formulario-tarjeta').toggleClass('active');
});

// * Select del mes generado dinamicamente.
for (let i = 1; i <= 12; i++) {
	$("#selectMes").append($('<option>').text(i))
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
	$("#selectYear").append($('<option>').text(i))
}

// * Input numero de tarjeta
$('#formulario-tarjeta').on('keyup', () => {
	$('#inputNumero').val($('#inputNumero').val()
		// Eliminamos espacios en blanco
		.replace(/\s/g, '')
		// Eliminar las letras
		.replace(/\D/g, '')
		// Ponemos espacio cada cuatro numeros
		.replace(/([0-9]{4})/g, '$1 ')
		// Elimina el ultimo espaciado
		.trim())

	$('.numero').text($("#inputNumero").val());
	if ($("#inputNumero").val() == '') {
		$('.numero').text('#### #### #### ####')
		$('#foto').hide()
	}
})


// Segun la entidad emisora de la tarjeta seleccionada, aparecera en el frente de la tarjeta el nombre de la entidad.//
// Si no hay ninguna tarjeta seleccionada, no se mostrara el nombre.
$('#formulario-tarjeta').on('change', ()=> {	
	if ($("#tarjeta_entidad").val() == '1') {
		$('#foto').attr("src", "../img/logos/visa.png").show()
	} else if ($("#tarjeta_entidad").val() == '2') {
		$('#foto').attr("src", "../img/logos/mastercard.png").show()
	} else if ($("#tarjeta_entidad").val() == '3') {
		$('#foto').attr("src", "../img/logos/americanExpress.png").show()
	}else{
		$('#foto').hide()
	}
})

// Volteamos la tarjeta para que el usuario vea el frente.
// * Input nombre de tarjeta
$('#inputNombre').on('keyup', (e) => {
	$('#inputNombre').val($(e.target).val().replace(/[0-9]/g, ''))
	$('#nombre').text($(e.target).val())
	$('.firma p').text($(e.target).val())
	if ($(e.target).val() == '') {
		$('#nombre').html(`<p class="label">Nombre Tarjeta</p>`)
	}
});

// * Select mes
$("#selectMes").on('change', (e) => {
	$('.mes').text($(e.target).val())
});

// * Select Año
$("#selectYear").on('change', (e) => {
	$('.year').text($(e.target).val().slice(2))
});

// * CCV
$('#inputCCV').on('keyup', () => {
	$('#inputCCV').val($('#inputCCV').val()
		// Eliminar los espacios
		.replace(/\s/g, '')
		// Eliminar las letras
		.replace(/\D/g, ''))
	$('#ccvtrasero').text($('#inputCCV').val())
});
