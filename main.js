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
    const syote = parseFloat(document.querySelector("input[name='nayttoalue']").value);

    switch (muunnos) {
        case 'C-F':
            if (syote < alarajaCelsius) {
                alerting();
            }
            tulo = syote*1.800+32;
            tuloste();
            break;

        case 'F-C':
            if (syote < alarajaFahrenheit) {
                alerting();
            }
            tulo = (syote-32)/1.800;
            tuloste();
            break;

        case 'C-K':
            if (syote < alarajaCelsius) {
                alerting();
            }
            tulo = syote+273.150;
            tuloste();
            break; 
        
        case 'K-C':
            if (syote < alarajaKelvin) {
                alerting();
            }
            tulo = syote-273.150;
            tuloste();
            break;

        case 'F-K':
            if (syote < alarajaFahrenheit) {
                alerting();
            }
            tulo = (syote+459.670)*(5/9);
            tuloste();
            break; 

        case 'K-F':
            if (syote < alarajaKelvin) {
                alerting();
            }
            tulo = 1.8*(syote-273.150)+32;
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
    let tuloDesimaali;
    let desimaaliValue = document.querySelector("input[name='valittu']:checked").value;

    if (desimaaliValue === "1") {
        tuloDesimaali = tulo.toFixed(1);
    } if (desimaaliValue === "2") {
        tuloDesimaali = tulo.toFixed(2);
    } if (desimaaliValue === "3") {
        tuloDesimaali = tulo.toFixed(3);
    }
    document.getElementById("vastausalue").innerHTML = tuloDesimaali;
}

