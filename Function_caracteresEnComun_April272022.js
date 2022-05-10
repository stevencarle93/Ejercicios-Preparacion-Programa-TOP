function caracteresEnComun(str1, str2){
    var arreglo = [];
    for (let i = 0; i < str1.length; i++) {
        let ocurrencias = 0;
        ocurrencias = (str2.split(str1[i]).length - 1);
        if (ocurrencias >= 1 && arreglo.includes(str1[i]) === false){
            arreglo.push(str1[i]);
        }
    }
    return (arreglo);
}