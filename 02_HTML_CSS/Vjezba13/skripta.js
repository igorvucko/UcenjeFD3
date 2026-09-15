// console.log('početak');

// const i = 7; 

// const rezultat = i + varijabla ;

// console.log('rezultat'); 

// console.log('kraj');

try{
console.log('početak')
const i = 7;
const rezultat = i + varijabla 
console.log(rezultat)
}
catch(e)
{
console.log('Greška:' ,e.name , e.message, e)
};
console.log('kraj');

let brojac = 0 ;

function rekurzija (){
    let  a=1,b=2,c=3,d='asdasdasasdsadfwgwqgwrewqfedsag'
    brojac++;
    rekurzija();
};



rekurzija();

try {
    rekurzija();
} catch (error) {
    console.log('prepunjeno' , brojac);
}