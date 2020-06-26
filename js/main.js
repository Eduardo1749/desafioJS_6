var array = [60, 18, 24]
function mutiplicaValoresArray(array) {
    multiplica = 1;
    for (value of array) {
        multiplica *= value;
    }
    return multiplica;
}
//console.log(mutiplicaValoresArray(array));
function mdcDeArray(array) {
    var resto = array[0] % array[1]
    for (b=1; b <= array.lenght-1; a++) {
        while (resto != 0) {
            array.lenght[b] = array.lenght[b + 1];
            array.lenght[b + 1] = resto;
            resto = array.lenght[b] % array.lenght[b + 1];
        }
    }
    return resto;
}
console.log("Esse é o mdc:"+mdcDeArray(array));

function mmcDeArray(array){
  return (mutiplicaValoresArray(array)) / mdcDeArray(array);
}

console.log("Esse é o mmc:"+mmcDeArray(array));