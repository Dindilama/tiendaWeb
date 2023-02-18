//variables para selecionar
let btn_comprar = document.querySelectorAll(".boton-carrito");
let alerta = document.querySelector(".alerta");
let conAlerta = 0;

for (let x = 0; x < btn_comprar.length; x++) {
    btn_comprar[x].addEventListener("click", ()=>{
        conAlerta++;
        alerta.textContent = conAlerta;
    })
}