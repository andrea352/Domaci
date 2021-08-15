//1.
{
    function elementiDeljiviSa5(niz) {
        niz.forEach(broj => {
            if (broj % 5 == 0) {
                console.log(broj);
            }
        });

    }

    elementiDeljiviSa5([1, 5, 8, 15, 98, 75, 55, 34])
}

//2.
{
    let pokemon1 = {
        ime: 'Bulbasaur',
        vrsta: 'Grass',
        sposobnosti: ['overgrow', 'chlolophyll'],
        karakteristike: {
            napad: 49,
            odbrana: 49,
            brzina: 45
        }
    }
    let pokemon2 = {
        ime: 'Pikachu',
        vrsta: 'Electric',
        sposobnosti: ['static', 'lightning rod'],
        karakteristike: {
            napad: 55,
            odbrana: 40,
            brzina: 90
        }

    }
    let pokemon3 = {
        ime: 'Minun',
        vrsta: 'Electric',
        sposobnosti: ['minus', 'volt absorb'],
        karakteristike: {
            napad: 40,
            odbrana: 50,
            brzina: 95
        }
    }
    let pokemon4 = {
        ime: 'Arctozolt',
        vrsta: 'Electric',
        sposobnosti: ['static', 'volt absorb', 'slushRush'],
        karakteristike: {
            napad: 100,
            odbrana: 90,
            brzina: 55
        }
    }
    let pokemoni=[pokemon1,pokemon2,pokemon3,pokemon4]

   //3.
   function nizSposobnostiPokemona(niz){
       let p = []
       for(let i = 0; i<pokemoni.length;i++){
           let tmp=pokemoni[i].sposobnosti
           for(let j=0; j< tmp.length;j++){
               p.push(tmp[j]) 
           }
       }return p
   }
 
 console.log(nizSposobnostiPokemona(pokemoni));

 //4.
 
 

 
 





}