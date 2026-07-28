//while petlja
//radi s boolean tipom podatka
//sve dok je true ostaje u petlji

while (true) {
    console.log("edunova");
    break;
}

let brojac = 0;

console.time('while petlja');
while (brojac++<10000000){
   // if(brojac % 10 === 0){
    //console.log(brojac);
    //}

}
console.timeEnd('while petlja');

let brojUnos = '1262';
let suma = 0 ;
console.time('zb1');

for(let i = 0; i < brojUnos.length; i++){

    suma += Number(brojUnos[i]);

}
console.timeEnd('zb1');
console.log(suma);

console.time('zb2');

let broj = Number(brojUnos);


const x = 5

for (let i = 0; i> x; i++){
    console.log('usao u petlju');
}
const podaciApi =[
    {
        ime : 'Pero',
    },
    {
        ime: 'Ivo',
    }
]
while (podaciApi.length > 0){
    console.log('usao u petlju', podaciApi.pop()?.ime)
}