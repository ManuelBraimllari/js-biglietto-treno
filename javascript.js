const distanza = parseFloat(prompt('Quanti chilometri devi fare'))
const età = parseFloat(prompt('quanti anni hai?'))

const pXchilometro = 0.21;
const prezzobase = pXchilometro * distanza;
let sconto = 0;

if (età < 18){
    const sconto = 20;
} else if (età >= 65){
    const sconto = 40;
} else {
    const sconto = 0;
}

const prezzofinale = prezzobase - prezzobase * distanza / 100;
console.log('il prezzo del biglietto è:', prezzofinale);