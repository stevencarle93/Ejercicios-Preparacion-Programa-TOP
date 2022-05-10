function ajustarTexto(str, numero){
    var resultado = "";
    for (let j = 0; j < numero && j < str.length; j++){
        resultado = resultado + str[j];
    }
    if (str.length < numero){
        for (let i = 0; i <= (numero - str.length); i++){
            resultado = resultado + " ";
        }
    }
    return (resultado);
}