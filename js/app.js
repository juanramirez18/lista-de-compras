const botonCoche = document.querySelector("#hamburguesas");
botonCoche.onclick = (e) =>{
    valorProducto(e.target.id);

};

function valorProducto(value){

    if(value == "op1"){
        mostrarHTML("Hamburguesa 300 GR")
    }else if(value == "op2"){
        mostrarHTML("Hamburguesa mixta")
    }else{
        mostrarHTML("Hamburguesa crispy")
    }

}

function mostrarHTML(mensaje){
    const resultado = document.querySelector("#resultado");
    const parrafo = document.createElement("P");
    parrafo.classList.add("fs-3", "fw-bold", "mt-5")
    parrafo.textContent = mensaje;
    console.log(parrafo)
    resultado.appendChild(parrafo);
}

