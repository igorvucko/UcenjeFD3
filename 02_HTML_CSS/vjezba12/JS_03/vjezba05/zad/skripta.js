const rezultat = document.getElementById('rezultat');

document.getElementById('izvedi').addEventListener('click', () => {
    rezultat.innerHTML = ''
    const aString = document.getElementById('a')
    const bString = document.getElementById('b')
    const cString = document.getElementById('c')
    const dString = document.getElementById('d')

    const zadatak = document.getElementById('zadatak').value;
    if (zadatak === '1') {{

    const a = Number(aString);

    if(!a) {
        rezultat.innerHTML='a nije broj';
        return;
    }
    const b = Number(bString);
    if(!b) {
        rezultat.innerHTML='b nije broj';
        return;
    }

    rezultat.innerHTML =  a>=b ? a:b ;
    }}
});
