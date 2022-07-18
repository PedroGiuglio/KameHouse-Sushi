const rolls = document.querySelector(".lista__Rolls");
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
        document.querySelector(".lista__Especiales").style.display = "none";
    } else {
        OcultarRolls();
    }
}

const btnEspeciales = document.querySelector(".btnEspeciales").addEventListener("click" , Mostrar_Ocultar2);

function Mostrar_Ocultar2(){
    document.querySelector(".lista__Rolls").style.display = "none";
    document.querySelector(".lista__Especiales").style.display = "flex"
}