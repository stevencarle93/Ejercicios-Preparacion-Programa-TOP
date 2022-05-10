function numDuplicados(palabra){
    let ocurrencias = 0;
    let i = 0; 
    while (i < palabra.length){
    		let j = palabra.length - 1;
        while (j > i){
            if (palabra[i] === palabra[j] && palabra[i]!==palabra[j-1]){
                ocurrencias++;
            }
            j--;
        }
        i++;
    }
    return (ocurrencias);
}
console.log(numDuplicados("aabcdefghijkaaalmnopqrstuvxyz"));