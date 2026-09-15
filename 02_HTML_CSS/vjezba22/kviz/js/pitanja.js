function kreirajPitanja() {
    return [
        {
            pitanje: 'Što će biti vrijednost varijable x nakon naredbe x = 5 + 3?',
            tocno: '8',
            odgovori: ['53', '8', '2', 'promjeni']
        },
        {
            pitanje: 'Koji operator povećava vrijednost varijable za 1?',
            tocno: '++',
            odgovori: ['+', '++', '--', 'promjeni']
        },
        {
            pitanje: 'Što vraća Math.max(3, 7, 5)?',
            tocno: '7',
                odgovori: ['3', '7', '5', 'promjeni']
            },
            {
                pitanje: 'Što vraća Math.min(3, 7, 5)?',
                tocno: '3',
                odgovori: ['3', '7', '5', 'promjeni']
        },
        {
            pitanje: 'Što radi operator % u JavaScriptu?',
            tocno: 'Vraća ostatak dijeljenja',
            odgovori: [
                'Vraća rezultat dijeljenja',
                'Vraća ostatak dijeljenja',
                'Množi dva broja',
                'promjeni'
            ]
        },
        {
            pitanje: 'Što će biti vrijednost x nakon naredbe x = 10 - 3?',
            tocno: '7',
            odgovori: ['13', '7', '30', 'promjeni']
        },
        {
            pitanje: 'Koja metoda vraća broj elemenata u nizu?',
            tocno: 'length',
            odgovori: ['size()', 'length', 'count()', 'promjeni']
        },
        {
            pitanje: 'Što radi metoda pop() nad nizom?',
            tocno: 'Uklanja zadnji element',
            odgovori: [
                'Dodaje element na kraj',
                'Uklanja zadnji element',
                'Uklanja prvi element',
                'promjeni'
            ]
        },
        {
            pitanje: 'Što će ispisati console.log(10 > 5)?',
            tocno: 'true',
            odgovori: ['true', 'false', '10', 'promjeni']
        },
        {
            pitanje: 'Što će se dogoditi nakon @click="broj = Math.max(0, broj - 1)" ako je broj jednak 0?',
            tocno: 'broj ostaje 0',
            odgovori: [
                'broj postaje -1',
                'broj ostaje 0',
                'broj postaje 1',
                'promjeni'
            ]
        }
    ];
}