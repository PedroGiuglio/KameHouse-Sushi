const rolls = document.querySelector(".lista__Rolls");
const especiales = document.querySelector(".lista__Especiales");
const niguiris = document.querySelector(".lista__Niguiris");
const sashimis = document.querySelector(".lista__Sashimis");
const geishas = document.querySelector(".lista__Geishas");
const temakis = document.querySelector(".lista__Temakis");
const veggie = document.querySelector(".lista__Veggie");
const veganPlant = document.querySelector(".lista__VeganPlant");


const btnRolls = document.querySelector(".btnRolls").addEventListener("click", Mostrar_Ocultar);

function MostrarRolls() {
    document.querySelector(".lista__Rolls").style.display = "flex";
}

function OcultarRolls() {
    document.querySelector(".lista__Rolls").style.display = "none";
}

function Mostrar_Ocultar(){
    let lista = document.querySelector(".lista__Rolls");

    if (lista.style.display == "none"){
        MostrarRolls();
        especiales.style.display = "none";
        niguiris.style.display = "none";
        sashimis.style.display = "none";
        geishas.style.display = "none";
        temakis.style.display = "none";
        veggie.style.display = "none";
        veganPlant.style.display = "none";
    } else {
        OcultarRolls();
    }
}

const btnEspeciales = document.querySelector(".btnEspeciales").addEventListener("click" , Mostrar_Ocultar2);

function Mostrar_Ocultar2(){
    rolls.style.display = "none";
    especiales.style.display = "flex"
    niguiris.style.display = "none";
    sashimis.style.display = "none";
    geishas.style.display = "none";
    temakis.style.display = "none";
    veggie.style.display = "none";
    veganPlant.style.display = "none";
}

const btnNiguiris = document.querySelector(".btn_Niguiris").addEventListener("click" , Mostrar_Ocultar3);

function Mostrar_Ocultar3(){
    rolls.style.display = "none";
    especiales.style.display = "none"
    niguiris.style.display = "flex";
    sashimis.style.display = "none";
    geishas.style.display = "none";
    temakis.style.display = "none";
    veggie.style.display = "none";
    veganPlant.style.display = "none";
}

const btnSashimis = document.querySelector(".btnSashimis").addEventListener("click" , Mostrar_Ocultar4);

function Mostrar_Ocultar4(){
    rolls.style.display = "none";
    especiales.style.display = "none"
    niguiris.style.display = "none";
    sashimis.style.display = "flex";
    geishas.style.display = "none";
    temakis.style.display = "none";
    veggie.style.display = "none";
    veganPlant.style.display = "none";
}

const btnGeishas = document.querySelector(".btnGeishas").addEventListener("click" , Mostrar_Ocultar5);

function Mostrar_Ocultar5(){
    rolls.style.display = "none";
    especiales.style.display = "none"
    niguiris.style.display = "none";
    sashimis.style.display = "none";
    geishas.style.display = "flex";
    temakis.style.display = "none";
    veggie.style.display = "none";
    veganPlant.style.display = "none";
}

const btnTemakis = document.querySelector(".btnTemakis").addEventListener("click" , Mostrar_Ocultar6);

function Mostrar_Ocultar6(){
    rolls.style.display = "none";
    especiales.style.display = "none"
    niguiris.style.display = "none";
    sashimis.style.display = "none";
    geishas.style.display = "none";
    temakis.style.display = "flex";
    veggie.style.display = "none";
    veganPlant.style.display = "none";
}

const btnVeggie = document.querySelector(".btnVeggie").addEventListener("click" , Mostrar_Ocultar7);

function Mostrar_Ocultar7(){
    rolls.style.display = "none";
    especiales.style.display = "none"
    niguiris.style.display = "none";
    sashimis.style.display = "none";
    geishas.style.display = "none";
    temakis.style.display = "none";
    veggie.style.display = "flex";
    veganPlant.style.display = "none";
}

const btnVeganPlant = document.querySelector(".btnVeganPlant").addEventListener("click" , Mostrar_Ocultar8);

function Mostrar_Ocultar8(){
    rolls.style.display = "none";
    especiales.style.display = "none"
    niguiris.style.display = "none";
    sashimis.style.display = "none";
    geishas.style.display = "none";
    temakis.style.display = "none";
    veggie.style.display = "none";
    veganPlant.style.display = "flex";    
}


