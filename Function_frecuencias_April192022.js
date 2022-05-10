function frecuencias(palabra){
    var obj = {};
    let ocurrencias = 0;
    for (let i = 0; i < palabra.length; i++) {
    	ocurrencias = (palabra.split(palabra[i]).length - 1);
        if (palabra[i] !== "") {
            obj [palabra[i]] = ocurrencias;
        }
    }
    return (obj);
}