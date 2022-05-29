let user = prompt ("Ingrese su usuario");
let pass = prompt ("Ingrese tu password");
let usuarioGuardado = "Leandro";
let password = "12345";

if (user != "" && pass != "") {
    if (user == "Leandro" || user == "LEANDRO") {
        console.log("hola Leandro como estas?");
    }else {
        console.log( "Hola usuario "  + user);
    }
}else {
    console.log("Campo Vacio");
}