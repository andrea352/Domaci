//Sa casa zadaci

//prvi
 let kolicina = 300;
 let cena = 10;
 let ukupnaCena;

 console.log(`${ ukupnaCena= (kolicina/1000)*cena}`)

 //dopuna prvog zadatka
  
 let kolnovca = 20;

 if(kolnovca > ukupnaCena){
     console.log(`racun je ${ukupnaCena}`)
 }
 else{
     console.log(`nemate dovoljno novca`)
 }

 //1.

 let string1 = "neki prvi string"
 let string2 = "neki drugi string koji je i duzi string"
 let string3 = "neki treci string koji je dugacak"
 let string4 = "neki cetvrti"

 if( string1.length > string2.length && string1.length >string3.lenght && string1.length > string4.length ){
     console.log(`${string1}`)
 }
 else if(string2.length > string1.length && string2.length > string3.length && string2.length > string4.length){
     console.log(`${string2}`)
 }
 else if (string3.length > string1.length && string3.length > string2.length && string3.length > string4.length){
     console.log(`${string3}`)
 }
 else{
     console.log(`${string4}`)
 }

//2.

if((string4.length < string3.length && string4.length < string2.length && string4.length < string1.length) && (string4.includes("string"))){
    console.log(`${string4}`)
}
else if ((string3.length < string2.length && string3.length < string1.length) && (string3.includes("string"))){
    console.log(`${string3}`)
}
else if ((string2.length < string1.length)  && (string2.includes("string"))){
    console.log(`${string2}`)
}
else if( string1.includes("string")){
    console.log(`${string1}`)
}

//3.

let novStr1 = string1.replace("neki","")
let novStr2 = string2.replace("neki","")
let novStr3 = string3.replace("neki","")
let novStr4 = string4.replace("neki","")
let str = ""
let str1,str2,str3,str4

if(!(string1.includes("string koji je"))){
  str1=novStr1 
}
else{
 str1=""
}
if (!(string2.includes("string koji je"))){
    str2 =  novStr2
}
  else{
      str2 = ""
  }
  if(!(string3.includes("string koji je"))){
    str3 =  novStr3
    
  }

else{
    str3=""
}
if(!(string4.includes("string koji je"))){
    str4 = novStr4
}
else{
    str4=""
}
console.log(str1 + str2 + str3 + str4)


    






