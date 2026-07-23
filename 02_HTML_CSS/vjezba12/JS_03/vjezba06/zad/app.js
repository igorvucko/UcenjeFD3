
const rez = document.getElementById("rezultat");

document.getElementById("izvedi").addEventListener("click", () => {
    rez.innerHTML = "hello";
    const aString = document.getElementById("a").value;
    const zad = Number(document.getElementById("zadatak").value);

    switch (zad) {
        case 1:
            if (!aString) {
                rez.innerHTML = "obavezan unos ";
                rez.style.color = "red";
                return;
            }
            aString = aString.toLowerCase();
                switch(aString) {
                    case "start":
                        rez.innerHTML = "Pokreni program";
                        rez.style.color = "green";
                        break;
                    case "stop":
                        rez.innerHTML = "Zaustavi program";
                        rez.style.color = "green";
                        break;  
                    case "pauza":
                        rez.innerHTML = "Pauza programa";
                        rez.style.color = "green";
                        break;
            }
})


// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).


// 4. zadatak
// Za uneseno ime namirnice ispisi dali je voće ili meso ili nemozes odrediti
// npr. ulaz janjetina, svinjetina, teletina ispis Meso
// npr. ulaz jabuka, kruška, šljiva, jagoda ispis Voće
// npr. žablji kraci ispis Ne može se odrediti 


