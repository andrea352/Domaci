//1.
{
    let zbir = 0
    let proizvod = 1
    let niz3 = []
    function sumImnozenje(niz) {
        for (let i = 0; i < niz.length; i++) {
            zbir += niz[i]

            proizvod *= niz[i]
        }
        niz3.push(zbir)
        niz3.push(proizvod)
        return niz3
    }


    let niz2 = sumImnozenje([1, 2, 3, 4, 5])
    console.log(niz2);

    console.log('---------');
}
//2.
{

    function izbacivanjeEl(niz) {
        let niz1 = []
        for (let i = 0; i < niz.length; i++) {
            if (niz[i]) {
                niz1.push(niz[i])
            }
        }
        return niz1

    }
    console.log(izbacivanjeEl([1, 2, undefined, 89, null, 'string', NaN, '']))
}

console.log('---------');
//3.
{
    let N = 100
    for (let i = 0; i < N; i++) {
        if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
            console.log(`FizzBuzzZazz`);
        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log(`FizzBuzz`);
        } else if (i % 3 == 0 && i % 7 == 0) {
            console.log(`FizzZazz`);
        } else if (i % 5 == 0 && i % 7 == 0) {
            console.log(`BuzzZazz`);
        } else if (i % 3 == 0) {
            console.log(`Fizz`);
        } else if (i % 5 == 0) {
            console.log(`Buzz`);
        }
    }
}

console.log('-----------');
//4.
{
    let x = 10
    let y = 5
    x = x + y
    y = x - y
    x = x - y
    console.log(`x=${x},y=${y}`);
}

