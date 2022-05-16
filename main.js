const valitutDesimaalit = document.querySelectorAll("input[name='valittu']");
let tulo;

const alarajaCelsius = -273.15;
const alarajaKelvin = 0;
const alarajaFahrenheit = -459.67;

let valittuKoko;
for (const valittuDesimaali of valitutDesimaalit) {
    if (valittuDesimaali.checked) {
        valittuKoko = valittuDesimaali.value;
        break;
    }
}


document.getElementById("button").addEventListener("click", muunna);



function muunna(event) {
    event.preventDefault();
    const muunnos = document.querySelector(".form-select").value;
    const syote = document.querySelector("input[name='nayttoalue']").value;

    switch (muunnos) {
        case 'C-F':
            if (syote < alarajaCelsius) {
                alerting();
            }
            tulo = syote*1.8+32;
            tuloste();
            break;

        case 'F-C':
            if (syote < alarajaFahrenheit) {
                alerting();
            }
            tulo = (syote-32)/1.8;
            tuloste();
            break;

        case 'C-K':
            if (syote < alarajaCelsius) {
                alerting();
            }
            tulo = syote+273.15;
            tuloste();
            break; 
        
        case 'K-C':
            if (syote < alarajaKelvin) {
                alerting();
            }
            tulo = syote-273.15;
            tuloste();
            break;

        case 'F-K':
            if (syote < alarajaFahrenheit) {
                alerting();
            }
            tulo = (syote+459.67)*(5/9);
            tuloste();
            break; 

        case 'K-F':
            if (syote < alarajaKelvin) {
                alerting();
            }
            tulo = 1.8*(syote-273.15)+32;
            tuloste();
            break;

        default:
            break;
    }


}

function alerting() {
    alert("Arvo on alle absoluuttisen nollapisteen!!! Et voi mennä sen alle.");
}

function tuloste() {
    if (valittuKoko) {
        
    }
    
    document.getElementById("vastausalue").innerHTML = tulo;
}

