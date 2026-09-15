const skupPitanja = [

    {
        pitanje: 'Kojom ključnom riječi definiramo varijablu čiju vrijednost možemo mijenjati?',
        tocno: 'let',
        odgovori: ['const', 'let', 'var']
    },

    {
        pitanje: 'Kojom ključnom riječi definiramo varijablu čiju vrijednost ne možemo ponovno dodijeliti?',
        tocno: 'const',
        odgovori: ['let', 'var', 'const']
    },

    {
        pitanje: 'Koji je index prvog elementa u nizu?',
        tocno: '0',
        odgovori: ['1', '0', '-1']
    },

    {
        pitanje: 'Kako provjeravamo koliko elemenata ima u nizu "niz"?',
        tocno: 'niz.length',
        odgovori: ['niz.size', 'niz.count', 'niz.length']
    },

    {
        pitanje: 'Koji operator koristimo za strogu jednakost?',
        tocno: '===',
        odgovori: ['=', '==', '===']
    },

    {
        pitanje: 'Koji operator koristimo za strogu nejednakost?',
        tocno: '!==',
        odgovori: ['!=', '!==', '=!']
    },

    {
        pitanje: 'Što će ispisati console.log(5 + "5")?',
        tocno: '55',
        odgovori: ['10', '55', 'Error']
    },

    {
        pitanje: 'Što će ispisati console.log(5 - "2")?',
        tocno: '3',
        odgovori: ['52', '3', 'Error']
    },

    {
        pitanje: 'Kako ispravno pišemo if izjavu?',
        tocno: 'if (x == 5)',
        odgovori: ['if x = 5 then', 'if (x == 5)', 'if [x == 5]']
    },

    {
        pitanje: 'Kako se zove petlja koja se izvršava dok je uvjet true?',
        tocno: 'while',
        odgovori: ['while', 'repeat', 'loop']
    },

    {
        pitanje: 'Koji operator predstavlja logičko I (AND)?',
        tocno: '&&',
        odgovori: ['||', '&&', '!']
    },

    {
        pitanje: 'Koji operator predstavlja logičko ILI (OR)?',
        tocno: '||',
        odgovori: ['&&', '||', '!']
    },

    {
        pitanje: 'Koji operator predstavlja logičko NE (NOT)?',
        tocno: '!',
        odgovori: ['?', '!', '&&']
    },

    {
        pitanje: 'Što radi naredba break u petlji?',
        tocno: 'Prekida petlju',
        odgovori: ['Preskače jedan krug', 'Prekida petlju', 'Vraća petlju na početak']
    },

    {
        pitanje: 'Što radi naredba continue u petlji?',
        tocno: 'Preskače trenutnu iteraciju',
        odgovori: ['Prekida petlju', 'Preskače trenutnu iteraciju', 'Pokreće novu petlju']
    },

    {
        pitanje: 'Koji je rezultat operacije 10 % 3?',
        tocno: '1',
        odgovori: ['0', '1', '3']
    },

    {
        pitanje: 'Koji operator koristimo za zbrajanje?',
        tocno: '+',
        odgovori: ['+', '*', '%']
    },

    {
        pitanje: 'Koji operator koristimo za množenje?',
        tocno: '*',
        odgovori: ['x', '*', '#']
    },

    {
        pitanje: 'Koji operator koristimo za dijeljenje?',
        tocno: '/',
        odgovori: ['/', '\\', ':']
    },

    {
        pitanje: 'Koji operator koristimo za ostatak pri dijeljenju?',
        tocno: '%',
        odgovori: ['/', '%', '&']
    },

    {
        pitanje: 'Što će ispisati console.log(2 + 3 * 4)?',
        tocno: '14',
        odgovori: ['20', '14', '24']
    },

    {
        pitanje: 'Što će ispisati console.log((2 + 3) * 4)?',
        tocno: '20',
        odgovori: ['14', '20', '24']
    },

    {
        pitanje: 'Koji operator povećava vrijednost za 1?',
        tocno: '++',
        odgovori: ['+', '++', '+=']
    },

    {
        pitanje: 'Koji operator smanjuje vrijednost za 1?',
        tocno: '--',
        odgovori: ['-', '--', '-=']
    },

    {
        pitanje: 'Koji operator koristimo za dodjeljivanje vrijednosti varijabli?',
        tocno: '=',
        odgovori: ['==', '===', '=']
    },

    {
        pitanje: 'Što znači operator +=?',
        tocno: 'Dodaje vrijednost postojećoj varijabli',
        odgovori: ['Oduzima vrijednost', 'Dodaje vrijednost postojećoj varijabli', 'Uspoređuje dvije vrijednosti']
    },

    {
        pitanje: 'Kako provjeravamo je li broj veći od 10?',
        tocno: 'broj > 10',
        odgovori: ['broj < 10', 'broj > 10', 'broj = 10']
    },

    {
        pitanje: 'Kako provjeravamo je li broj manji ili jednak 10?',
        tocno: 'broj <= 10',
        odgovori: ['broj < 10', 'broj >= 10', 'broj <= 10']
    },

    {
        pitanje: 'Koja je zadana grana u switch naredbi?',
        tocno: 'default',
        odgovori: ['else', 'default', 'otherwise']
    },

    {
        pitanje: 'Kako se završava pojedini case u switch naredbi?',
        tocno: 'break',
        odgovori: ['stop', 'break', 'exit']
    },

    {
        pitanje: 'Kako ispravno pozivamo funkciju koja se zove izracunaj?',
        tocno: 'izracunaj()',
        odgovori: ['call izracunaj', 'izracunaj()', 'function izracunaj']
    },

    {
        pitanje: 'Kako definiramo funkciju pod nazivom pozdrav?',
        tocno: 'function pozdrav() {}',
        odgovori: ['function pozdrav() {}', 'def pozdrav() {}', 'func pozdrav() {}']
    },

    {
        pitanje: 'Čemu služi return u funkciji?',
        tocno: 'Vraća vrijednost iz funkcije',
        odgovori: ['Pokreće funkciju', 'Vraća vrijednost iz funkcije', 'Zaustavlja cijeli program']
    },

    {
        pitanje: 'Kako funkciji šaljemo argument?',
        tocno: 'pozdrav("Marko")',
        odgovori: ['pozdrav = "Marko"', 'pozdrav("Marko")', 'argument pozdrav "Marko"']
    },

    {
        pitanje: 'Što je parametar funkcije?',
        tocno: 'Vrijednost navedena u definiciji funkcije',
        odgovori: ['Vrijednost navedena u definiciji funkcije', 'Ime funkcije', 'Rezultat funkcije']
    },

    {
        pitanje: 'Što će vratiti funkcija function zbroj(a, b) { return a + b; } kada pozovemo zbroj(2, 3)?',
        tocno: '5',
        odgovori: ['23', '5', '6']
    },

    {
        pitanje: 'Koji je ispravan način pisanja arrow funkcije?',
        tocno: 'const zbroj = (a, b) => a + b',
        odgovori: ['const zbroj = (a, b) => a + b', 'const zbroj => (a, b) a + b', 'arrow zbroj(a, b) => a + b']
    },

    {
        pitanje: 'Što predstavlja NaN?',
        tocno: 'Not a Number',
        odgovori: ['New and Null', 'Not a Number', 'Number and Null']
    },

    {
        pitanje: 'Koji tip podatka predstavlja true ili false?',
        tocno: 'boolean',
        odgovori: ['string', 'boolean', 'number']
    },

    {
        pitanje: 'Koji tip podatka predstavlja tekst?',
        tocno: 'string',
        odgovori: ['text', 'string', 'char']
    },

    {
        pitanje: 'Koji tip podatka predstavlja cijele i decimalne brojeve u JavaScriptu?',
        tocno: 'number',
        odgovori: ['integer', 'number', 'float']
    },

    {
        pitanje: 'Koja vrijednost predstavlja namjerno praznu vrijednost?',
        tocno: 'null',
        odgovori: ['empty', 'null', 'void']
    },

    {
        pitanje: 'Što znači vrijednost undefined?',
        tocno: 'Vrijednost nije definirana',
        odgovori: ['Vrijednost je 0', 'Vrijednost nije definirana', 'Vrijednost je null']
    },

    {
        pitanje: 'Kako provjeravamo tip podatka neke vrijednosti?',
        tocno: 'typeof',
        odgovori: ['type', 'typeof', 'getType']
    },

    {
        pitanje: 'Što vraća typeof "Pozdrav"?',
        tocno: 'string',
        odgovori: ['text', 'string', 'word']
    },

    {
        pitanje: 'Što vraća typeof 25?',
        tocno: 'number',
        odgovori: ['integer', 'number', 'numeric']
    },

    {
        pitanje: 'Što vraća typeof true?',
        tocno: 'boolean',
        odgovori: ['bool', 'boolean', 'true']
    },

    {
        pitanje: 'Što će ispisati console.log(!true)?',
        tocno: 'false',
        odgovori: ['true', 'false', 'null']
    },

    {
        pitanje: 'Što će ispisati console.log(!false)?',
        tocno: 'true',
        odgovori: ['true', 'false', 'undefined']
    },

    {
        pitanje: 'Koji tip petlje koristimo kada unaprijed znamo broj ponavljanja?',
        tocno: 'for',
        odgovori: ['while', 'for', 'if']
    },

    {
        pitanje: 'Koji dio for petlje povećava brojač?',
        tocno: 'i++',
        odgovori: ['i--', 'i++', 'i==']
    },

    {
        pitanje: 'Koliko puta će se izvršiti for (let i = 0; i < 5; i++)?',
        tocno: '5',
        odgovori: ['4', '5', '6']
    },

    {
        pitanje: 'Koja će vrijednost biti posljednja vrijednost i u petlji for (let i = 0; i < 3; i++) prije završetka?',
        tocno: '2',
        odgovori: ['2', '3', '4']
    },

    {
        pitanje: 'Koja petlja će se izvršiti barem jednom čak i ako je uvjet odmah false?',
        tocno: 'do...while',
        odgovori: ['while', 'for', 'do...while']
    },

    {
        pitanje: 'Kako započinjemo do...while petlju?',
        tocno: 'do',
        odgovori: ['do', 'while', 'repeat']
    },

    {
        pitanje: 'Koji je prvi element niza [' + "'jabuka'" + ', ' + "'kruška'" + ']?',
        tocno: 'jabuka',
        odgovori: ['jabuka', 'kruška', '0']
    },

    {
        pitanje: 'Kako pristupamo prvom elementu niza niz?',
        tocno: 'niz[0]',
        odgovori: ['niz[1]', 'niz[0]', 'niz.first']
    },

    {
        pitanje: 'Kako pristupamo trećem elementu niza?',
        tocno: 'niz[2]',
        odgovori: ['niz[2]', 'niz[3]', 'niz.third']
    },

    {
        pitanje: 'Koja metoda dodaje element na kraj niza?',
        tocno: 'push()',
        odgovori: ['push()', 'add()', 'append()']
    },

    {
        pitanje: 'Koja metoda uklanja zadnji element iz niza?',
        tocno: 'pop()',
        odgovori: ['remove()', 'delete()', 'pop()']
    },

    {
        pitanje: 'Koja metoda uklanja prvi element iz niza?',
        tocno: 'shift()',
        odgovori: ['shift()', 'removeFirst()', 'popFirst()']
    },

    {
        pitanje: 'Koja metoda dodaje element na početak niza?',
        tocno: 'unshift()',
        odgovori: ['pushFirst()', 'unshift()', 'prepend()']
    },

    {
        pitanje: 'Što radi metoda push()?',
        tocno: 'Dodaje element na kraj niza',
        odgovori: ['Dodaje element na početak niza', 'Dodaje element na kraj niza', 'Briše zadnji element']
    },

    {
        pitanje: 'Što radi metoda pop()?',
        tocno: 'Uklanja zadnji element niza',
        odgovori: ['Uklanja prvi element niza', 'Uklanja zadnji element niza', 'Dodaje element na kraj']
    },

    {
        pitanje: 'Koja metoda vraća poziciju određenog elementa u nizu?',
        tocno: 'indexOf()',
        odgovori: ['findIndex()', 'indexOf()', 'positionOf()']
    },

    {
        pitanje: 'Što vraća indexOf() ako element ne postoji u nizu?',
        tocno: '-1',
        odgovori: ['0', '-1', 'null']
    },

    {
        pitanje: 'Koja metoda provjerava postoji li određeni element u nizu?',
        tocno: 'includes()',
        odgovori: ['contains()', 'includes()', 'exists()']
    },

    {
        pitanje: 'Što vraća niz.includes("jabuka") ako se jabuka nalazi u nizu?',
        tocno: 'true',
        odgovori: ['true', 'false', '1']
    },

    {
        pitanje: 'Koja metoda pretvara sve elemente niza u jedan string?',
        tocno: 'join()',
        odgovori: ['combine()', 'join()', 'merge()']
    },

    {
        pitanje: 'Što radi metoda slice()?',
        tocno: 'Vraća dio niza bez mijenjanja originalnog niza',
        odgovori: ['Briše cijeli niz', 'Vraća dio niza bez mijenjanja originalnog niza', 'Dodaje element u niz']
    },

    {
        pitanje: 'Koja metoda prolazi kroz svaki element niza?',
        tocno: 'forEach()',
        odgovori: ['forEach()', 'eachLoop()', 'loop()']
    },

    {
        pitanje: 'Koja metoda stvara novi niz tako da obradi svaki element postojećeg niza?',
        tocno: 'map()',
        odgovori: ['map()', 'change()', 'convert()']
    },

    {
        pitanje: 'Koja metoda vraća samo elemente koji zadovoljavaju određeni uvjet?',
        tocno: 'filter()',
        odgovori: ['filter()', 'select()', 'where()']
    },

    {
        pitanje: 'Koja metoda pronalazi prvi element koji zadovoljava uvjet?',
        tocno: 'find()',
        odgovori: ['find()', 'search()', 'first()']
    },

    {
        pitanje: 'Koja metoda provjerava zadovoljavaju li svi elementi niza određeni uvjet?',
        tocno: 'every()',
        odgovori: ['all()', 'every()', 'checkAll()']
    },

    {
        pitanje: 'Koja metoda provjerava zadovoljava li barem jedan element niza određeni uvjet?',
        tocno: 'some()',
        odgovori: ['some()', 'any()', 'exists()']
    },

    {
        pitanje: 'Što radi metoda sort()?',
        tocno: 'Sortira elemente niza',
        odgovori: ['Briše elemente', 'Sortira elemente niza', 'Kopira niz']
    },

    {
        pitanje: 'Što radi metoda reverse()?',
        tocno: 'Obrnuto posloži elemente niza',
        odgovori: ['Obriše niz', 'Obrnuto posloži elemente niza', 'Sortira niz abecedno']
    },

    {
        pitanje: 'Kako stvaramo prazan objekt?',
        tocno: '{}',
        odgovori: ['[]', '{}', '()']
    },

    {
        pitanje: 'Kako stvaramo prazan niz?',
        tocno: '[]',
        odgovori: ['{}', '()', '[]']
    },

    {
        pitanje: 'Kako pristupamo svojstvu ime objekta osoba?',
        tocno: 'osoba.ime',
        odgovori: ['osoba->ime', 'osoba.ime', 'osoba[ime]']
    },

    {
        pitanje: 'Kako alternativno pristupamo svojstvu ime objekta osoba?',
        tocno: 'osoba["ime"]',
        odgovori: ['osoba("ime")', 'osoba["ime"]', 'osoba->"ime"']
    },

    {
        pitanje: 'Kako mijenjamo vrijednost svojstva ime objekta osoba?',
        tocno: 'osoba.ime = "Ivan"',
        odgovori: ['osoba.ime == "Ivan"', 'osoba.ime = "Ivan"', 'set osoba.ime "Ivan"']
    },

    {
        pitanje: 'Kako dodajemo novo svojstvo godine objektu osoba?',
        tocno: 'osoba.godine = 25',
        odgovori: ['osoba.add(godine, 25)', 'osoba.godine = 25', 'osoba.godine == 25']
    },

    {
        pitanje: 'Koja vrijednost predstavlja istinu u JavaScriptu?',
        tocno: 'true',
        odgovori: ['yes', 'true', '1true']
    },

    {
        pitanje: 'Koja vrijednost predstavlja neistinu u JavaScriptu?',
        tocno: 'false',
        odgovori: ['no', 'false', 'null']
    },

    {
        pitanje: 'Što će ispisati console.log(10 > 5)?',
        tocno: 'true',
        odgovori: ['true', 'false', '10']
    },

    {
        pitanje: 'Što će ispisati console.log(10 < 5)?',
        tocno: 'false',
        odgovori: ['true', 'false', 'Error']
    },

    {
        pitanje: 'Što će ispisati console.log(5 === "5")?',
        tocno: 'false',
        odgovori: ['true', 'false', 'Error']
    },

    {
        pitanje: 'Što će ispisati console.log(5 == "5")?',
        tocno: 'true',
        odgovori: ['true', 'false', 'Error']
    },

    {
        pitanje: 'Koja je glavna razlika između == i ===?',
        tocno: '=== provjerava i tip i vrijednost',
        odgovori: ['Nema razlike', '=== provjerava i tip i vrijednost', '== provjerava samo tip']
    },

    {
        pitanje: 'Što radi ternarni operator?',
        tocno: 'Omogućuje kratki zapis if/else uvjeta',
        odgovori: ['Ponavlja petlju', 'Omogućuje kratki zapis if/else uvjeta', 'Stvara funkciju']
    },

    {
        pitanje: 'Koji je ispravan ternarni izraz?',
        tocno: 'x > 5 ? "da" : "ne"',
        odgovori: ['x > 5 : "da" ? "ne"', 'x > 5 ? "da" : "ne"', 'if x > 5 ? "da"']
    },

    {
        pitanje: 'Što će ispisati console.log(10 > 5 && 3 > 1)?',
        tocno: 'true',
        odgovori: ['true', 'false', 'undefined']
    },

    {
        pitanje: 'Što će ispisati console.log(10 < 5 || 3 > 1)?',
        tocno: 'true',
        odgovori: ['true', 'false', 'Error']
    },

    {
        pitanje: 'Što će ispisati console.log(false || true)?',
        tocno: 'true',
        odgovori: ['true', 'false', 'null']
    },

    {
        pitanje: 'Što će ispisati console.log(true && false)?',
        tocno: 'false',
        odgovori: ['true', 'false', 'undefined']
    },

    {
        pitanje: 'Koja naredba ispisuje nešto u konzolu preglednika?',
        tocno: 'console.log()',
        odgovori: ['print()', 'console.log()', 'log.console()']
    },

    {
        pitanje: 'Kako pretvaramo string "123" u broj?',
        tocno: 'Number("123")',
        odgovori: ['String("123")', 'Number("123")', 'parseString("123")']
    },

    {
        pitanje: 'Kako pretvaramo broj 123 u string?',
        tocno: 'String(123)',
        odgovori: ['Number(123)', 'String(123)', 'ToText(123)']
    },

    {
        pitanje: 'Koja metoda pretvara string u mala slova?',
        tocno: 'toLowerCase()',
        odgovori: ['lower()', 'toLowerCase()', 'lowerCase()']
    },

    {
        pitanje: 'Koja metoda pretvara string u velika slova?',
        tocno: 'toUpperCase()',
        odgovori: ['upper()', 'toUpperCase()', 'upperCase()']
    },

    {
        pitanje: 'Što vraća "JavaScript".length?',
        tocno: '10',
        odgovori: ['9', '10', '11']
    },

    {
        pitanje: 'Koja metoda uklanja razmake s početka i kraja stringa?',
        tocno: 'trim()',
        odgovori: ['removeSpaces()', 'trim()', 'clean()']
    },

    {
        pitanje: 'Koja metoda provjerava počinje li string određenim tekstom?',
        tocno: 'startsWith()',
        odgovori: ['beginsWith()', 'startsWith()', 'start()']
    },

    {
        pitanje: 'Koja metoda provjerava završava li string određenim tekstom?',
        tocno: 'endsWith()',
        odgovori: ['endsWith()', 'finishWith()', 'lastWith()']
    },

    {
        pitanje: 'Koja metoda provjerava sadrži li string određeni tekst?',
        tocno: 'includes()',
        odgovori: ['contains()', 'includes()', 'hasText()']
    },

    {
        pitanje: 'Koja metoda izdvaja dio stringa?',
        tocno: 'slice()',
        odgovori: ['cut()', 'slice()', 'extract()']
    },

    {
        pitanje: 'Što radi Math.round()?',
        tocno: 'Zaokružuje broj na najbliži cijeli broj',
        odgovori: ['Uvijek zaokružuje prema dolje', 'Zaokružuje broj na najbliži cijeli broj', 'Uvijek zaokružuje prema gore']
    },

    {
        pitanje: 'Što radi Math.floor()?',
        tocno: 'Zaokružuje broj prema dolje',
        odgovori: ['Zaokružuje broj prema dolje', 'Zaokružuje broj prema gore', 'Zaokružuje na najbliži broj']
    },

    {
        pitanje: 'Što radi Math.ceil()?',
        tocno: 'Zaokružuje broj prema gore',
        odgovori: ['Zaokružuje prema dolje', 'Zaokružuje prema gore', 'Briše decimalni dio']
    },

    {
        pitanje: 'Kako generiramo slučajan broj između 0 i 1?',
        tocno: 'Math.random()',
        odgovori: ['random()', 'Math.random()', 'Math.number()']
    },

    {
        pitanje: 'Što vraća Math.max(5, 10, 3)?',
        tocno: '10',
        odgovori: ['3', '5', '10']
    },

    {
        pitanje: 'Što vraća Math.min(5, 10, 3)?',
        tocno: '3',
        odgovori: ['3', '5', '10']
    },

    {
        pitanje: 'Što znači scope varijable?',
        tocno: 'Područje u kojem je varijabla dostupna',
        odgovori: ['Vrijednost varijable', 'Područje u kojem je varijabla dostupna', 'Tip varijable']
    },

    {
        pitanje: 'Koje ključne riječi imaju block scope?',
        tocno: 'let i const',
        odgovori: ['samo var', 'let i const', 'samo function']
    },

    {
        pitanje: 'Koja ključna riječ nema block scope?',
        tocno: 'var',
        odgovori: ['let', 'const', 'var']
    },

    {
        pitanje: 'Što je array?',
        tocno: 'Niz elemenata',
        odgovori: ['Funkcija', 'Niz elemenata', 'Uvjetna naredba']
    },

    {
        pitanje: 'Što je objekt u JavaScriptu?',
        tocno: 'Struktura koja sadrži svojstva i vrijednosti',
        odgovori: ['Samo jedan broj', 'Struktura koja sadrži svojstva i vrijednosti', 'Vrsta petlje']
    },

    {
        pitanje: 'Što je metoda objekta?',
        tocno: 'Funkcija koja pripada objektu',
        odgovori: ['Varijabla izvan objekta', 'Funkcija koja pripada objektu', 'Vrsta niza']
    },

    {
        pitanje: 'Koji način deklaracije varijable je preporučen kada se vrijednost neće mijenjati?',
        tocno: 'const',
        odgovori: ['var', 'let', 'const']
    },

    {
        pitanje: 'Koji način deklaracije varijable je preporučen kada će se vrijednost mijenjati?',
        tocno: 'let',
        odgovori: ['const', 'let', 'static']
    },

    {
        pitanje: 'Što će se dogoditi ako pokušamo ponovno dodijeliti vrijednost const varijabli?',
        tocno: 'Dogodit će se greška',
        odgovori: ['Vrijednost će se promijeniti', 'Dogodit će se greška', 'Ništa se neće dogoditi']
    },

    {
        pitanje: 'Što vraća funkcija koja nema return naredbu?',
        tocno: 'undefined',
        odgovori: ['null', 'undefined', 'false']
    },

    {
        pitanje: 'Što će ispisati console.log(3 + 2 * 2)?',
        tocno: '7',
        odgovori: ['10', '7', '12']
    },

    {
        pitanje: 'Što će ispisati console.log(10 / 2)?',
        tocno: '5',
        odgovori: ['5', '20', '8']
    },

    {
        pitanje: 'Što će ispisati console.log(10 % 4)?',
        tocno: '2',
        odgovori: ['1', '2', '4']
    },

    {
        pitanje: 'Što će ispisati console.log("Hello" + " " + "World")?',
        tocno: 'Hello World',
        odgovori: ['HelloWorld', 'Hello World', 'Hello + World']
    },

    {
        pitanje: 'Koji je ispravan način stvaranja template stringa?',
        tocno: '`Pozdrav ${ime}`',
        odgovori: ['"Pozdrav ${ime}"', '`Pozdrav ${ime}`', "'Pozdrav $(ime)'"]
    },

    {
        pitanje: 'Čemu služi ${} unutar template stringa?',
        tocno: 'Za umetanje vrijednosti ili izraza',
        odgovori: ['Za komentare', 'Za umetanje vrijednosti ili izraza', 'Za stvaranje funkcije']
    },

    {
        pitanje: 'Koji simbol koristimo za template string?',
        tocno: '`',
        odgovori: ['"', '`', "'"]
    },

    {
        pitanje: 'Kako pišemo komentar u jednoj liniji?',
        tocno: '// komentar',
        odgovori: ['<!-- komentar -->', '// komentar', '## komentar']
    },

    {
        pitanje: 'Kako pišemo višelinijski komentar?',
        tocno: '/* komentar */',
        odgovori: ['// komentar //', '/* komentar */', '<!-- komentar -->']
    },

    {
        pitanje: 'Koja metoda pretvara JSON string u JavaScript objekt?',
        tocno: 'JSON.parse()',
        odgovori: ['JSON.object()', 'JSON.parse()', 'JSON.convert()']
    },

    {
        pitanje: 'Koja metoda pretvara JavaScript objekt u JSON string?',
        tocno: 'JSON.stringify()',
        odgovori: ['JSON.toString()', 'JSON.stringify()', 'JSON.parse()']
    },

    {
        pitanje: 'Koji DOM element dohvaćamo pomoću document.getElementById("naslov")?',
        tocno: 'Element s ID-em "naslov"',
        odgovori: ['Sve elemente klase naslov', 'Element s ID-em "naslov"', 'Cijeli dokument']
    },

    {
        pitanje: 'Koja metoda dohvaća prvi element koji odgovara CSS selektoru?',
        tocno: 'querySelector()',
        odgovori: ['getFirst()', 'querySelector()', 'selectFirst()']
    },

    {
        pitanje: 'Koja metoda dohvaća sve elemente koji odgovaraju CSS selektoru?',
        tocno: 'querySelectorAll()',
        odgovori: ['querySelectorAll()', 'getEvery()', 'selectAllElements()']
    },

    {
        pitanje: 'Koji događaj koristimo kada korisnik klikne na element?',
        tocno: 'click',
        odgovori: ['hover', 'click', 'press']
    },

    {
        pitanje: 'Koji događaj se događa kada se sadržaj input polja promijeni?',
        tocno: 'input',
        odgovori: ['changeText', 'input', 'write']
    },

    {
        pitanje: 'Čemu služi addEventListener()?',
        tocno: 'Za dodavanje reakcije na događaj',
        odgovori: ['Za brisanje elementa', 'Za dodavanje reakcije na događaj', 'Za stvaranje varijable']
    },

    {
        pitanje: 'Kako mijenjamo tekst HTML elementa pomoću textContent?',
        tocno: 'element.textContent = "Novi tekst"',
        odgovori: ['element.text = "Novi tekst"', 'element.textContent = "Novi tekst"', 'element.content = "Novi tekst"']
    },

    {
        pitanje: 'Što će vratiti Boolean(0)?',
        tocno: 'false',
        odgovori: ['true', 'false', '0']
    },

    {
        pitanje: 'Što će vratiti Boolean(1)?',
        tocno: 'true',
        odgovori: ['true', 'false', '1']
    },

    {
        pitanje: 'Što je truthy vrijednost?',
        tocno: 'Vrijednost koja se ponaša kao true u boolean kontekstu',
        odgovori: ['Vrijednost koja je uvijek true', 'Vrijednost koja se ponaša kao true u boolean kontekstu', 'Vrijednost koja je uvijek 1']
    },

    {
        pitanje: 'Što je falsy vrijednost?',
        tocno: 'Vrijednost koja se ponaša kao false u boolean kontekstu',
        odgovori: ['Vrijednost koja se ponaša kao false u boolean kontekstu', 'Vrijednost koja je uvijek null', 'Vrijednost koja je uvijek 0']
    },

    {
        pitanje: 'Koje su među navedenima falsy vrijednosti?',
        tocno: '0, false, null i undefined',
        odgovori: ['1, true i "hello"', '0, false, null i undefined', ['10, 20 i 30'].join(', ')]
    },

    {
        pitanje: 'Što radi operator ??',
        tocno: 'Vraća desnu vrijednost ako je lijeva null ili undefined',
        odgovori: ['Provjerava jednakost', 'Vraća desnu vrijednost ako je lijeva null ili undefined', 'Pretvara broj u string']
    },

    {
        pitanje: 'Što radi operator ?.?',
        tocno: 'Omogućuje siguran pristup svojstvu koje možda ne postoji',
        odgovori: ['Množi dvije vrijednosti', 'Omogućuje siguran pristup svojstvu koje možda ne postoji', 'Uspoređuje objekte']
    }

];