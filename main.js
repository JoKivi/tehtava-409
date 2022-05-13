const valitutDesimaalit = document.querySelectorAll("input[name='valittu']");
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
if (valittuKoko === ) {
    
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
            break;
    
        default:
            break;
    }


}

function alerting() {
    alert("Arvo on alle absoluuttisen nollapisteen!!! Et voi mennä sen alle.");
}

