const nbrmonnaie1 = document.querySelector(".number1");
const valmonnaie1 = document.querySelector("#monnaie1");
const valmonnaie2 = document.querySelector("#monnaie2");
const btnconvertir = document.querySelector("#btnconvertir");
const res = document.querySelector("#res");
console.log(nbrmonnaie1.value);
console.log(valmonnaie1.value);
console.log(valmonnaie2.value);
console.log(btnconvertir)

btnconvertir.addEventListener("click", ()=>{
    if(valmonnaie1.value == "euro"){
        if(valmonnaie2.value == "euro"){
            res.innerHTML = nbrmonnaie1.value;
        } else if(valmonnaie2.value == "livst"){
            res.innerHTML = nbrmonnaie1.value*0.84;
        } else if(valmonnaie2.value == "dollar"){
            res.innerHTML = nbrmonnaie1.value*1.09;
        } else if(valmonnaie2.value == "yen"){
            res.innerHTML = nbrmonnaie1.value*165.84;
        }
    } else if(valmonnaie1.value == "livst"){
        if(valmonnaie2.value == "livst"){
            res.innerHTML = nbrmonnaie1.value;
        } else if(valmonnaie2.value == "euro"){
            res.innerHTML = nbrmonnaie1.value*1.19;
        } else if(valmonnaie2.value == "dollar"){
            res.innerHTML = nbrmonnaie1.value*1.3;
        } else if(valmonnaie2.value == "yen"){
            res.innerHTML = nbrmonnaie1.value*197.84;
        }
    } else if(valmonnaie1.value == "dollar"){
        if(valmonnaie2.value == "dollar"){
            res.innerHTML = nbrmonnaie1.value;
        } else if(valmonnaie2.value == "livst"){
            res.innerHTML = nbrmonnaie1.value*0.84;
        } else if(valmonnaie2.value == "euro"){
            res.innerHTML = nbrmonnaie1.value*0.77;
        } else if(valmonnaie2.value == "yen"){
            res.innerHTML = nbrmonnaie1.value*151.78;
        }
    } if(valmonnaie1.value == "yen"){
        if(valmonnaie2.value == "yen"){
            res.innerHTML = nbrmonnaie1.value;
        } else if(valmonnaie2.value == "livst"){
            res.innerHTML = nbrmonnaie1.value*0.0051;
        } else if(valmonnaie2.value == "dollar"){
            res.innerHTML = nbrmonnaie1.value*0.0066;
        } else if(valmonnaie2.value == "euro"){
            res.innerHTML = nbrmonnaie1.value*0.006;
        }
    }
    })


