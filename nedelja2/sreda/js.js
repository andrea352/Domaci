//1.
let brzinaPuza = 3
let visinad = 100
let dan = 1


while (brzinaPuza <= visinad) {

    console.log(`Dan ${dan} : Puz je presao ${brzinaPuza} cm , visina drveta ${visinad}cm `)
    brzinaPuza++
    brzinaPuza += 2
    dan++
    visinad++
}

console.log(`Puz se popeo na drvo za ${dan} dana`)

//2.
let kupac = 'firme'
let danUnedelji = 6
let cena = 7000
let popust = ''
let novaCena = ''
let dodatniPopust = ''

switch (kupac) {
    case 'zaposlena lica':
        
        if (danUnedelji < 6 && cena > 5000) {
            console.log(`popust : ${popust = cena * 5 / 100} din ,  racun : ${novaCena = cena - popust} din`)
        }
        
        if ((danUnedelji == 6 || danUnedelji == 7) && cena > 5000) {
            popust = cena * 5 / 100
            novaCena = cena - popust
            console.log(`popust : ${dodatniPopust = (novaCena * 5 / 100) + popust} din , racun : ${novaCena = cena - dodatniPopust} din`)
        }
        if(danUnedelji<1 || danUnedelji>7){
            console.log(`greska`)
        }
        
        break;

    case 'studenti':
        if (danUnedelji < 6 && cena > 3000) {
            console.log(`popust : ${popust = cena * 20 / 100} din , racun: ${novaCena = cena - popust} din`)
        }
        if ((danUnedelji == 6 || danUnedelji == 7) && cena > 3000) {
            popust = cena * 20 / 100
            novaCena = cena - popust
            console.log(`popust : ${dodatniPopust = (novaCena * 5 / 100) + popust} din , racun: ${novaCena = cena - dodatniPopust} din`)
        }
        if(danUnedelji<1 || danUnedelji>7){
            console.log(`greska`)
        }
        
        
        break;

    case 'penzioneri':
        if (danUnedelji < 6 && cena > 2000) {
            console.log(`popust: ${popust = cena * 30 / 100} din , racun: ${novaCena = cena - popust} din`)
        }
        if ((danUnedelji == 6 || danUnedelji == 7) && cena > 2000) {
            popust = cena * 30 / 100
            novaCena = cena - popust
            console.log(`popust : ${dodatniPopust = (novaCena * 5 / 100) + popust} din , racun: ${novaCena = cena - dodatniPopust} din`)
        }
        
        if(danUnedelji<1 || danUnedelji>7){
            console.log(`greska`)
        }
        
        break;

    case 'firme':
        if (danUnedelji < 6 && cena > 10000) {
            console.log(`popust : ${popust = cena * 10 / 100} din , racun: ${novaCena = cena - popust} din`)
        }
        if ((danUnedelji == 6 || danUnedelji == 7 ) && cena > 5000) {
            popust = cena * 10 / 100
            novaCena = cena - popust
            console.log(`popust : ${dodatniPopust = (novaCena * 5 / 100) + popust} din , racun: ${novaCena = cena - dodatniPopust} din`)
        }
        if(danUnedelji<1 || danUnedelji>7){
            console.log(`greska`)
        }
       
        
        break;

        default: console.log(`Nije moguce ostvariti popust`)
        break;

}

