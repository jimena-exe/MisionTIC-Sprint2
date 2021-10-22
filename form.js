function checkNumDocumento(valor, tipo){
    let regex = /([0-9]){8,10}/;

    switch (tipo){
        case "CC":
            return regex.test(valor);
        case "TI":
            return regex.test(valor)
        case "TR":
            return regex.test(valor)
        case "PP":
            return regex.test(valor)
        default:
            return false;
    }
}

function  checkCorreo(valor) {
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(valor)
}

function  checkContrasena(valor){
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(valor)
}

//Para probarlo
//let isValid= checkContrasena("Juandara1914");
//console.log (isValid)

module.exports = {checkNumDocumento,checkCorreo,checkContrasena}
