const botonCoche = document.querySelector("#hamburguesas");
botonCoche.onclick = (e) =>{
    valorProducto(e.target.id, precios);

};
let total = [];
const precios = {
    precio1 : 2300,
    precio2 : 1300,
    precio3: 1200
}

function valorProducto(value, precios){
    const {precio1, precio2, precio3} = precios;

    if(value == "op1"){
        mostrarHTML("Hamburguesa 300 gr $" ,  precio1)
        total.push(precio1)
        
    }else if(value == "op2"){
        mostrarHTML("Hamburguesa mixta ", precio2)
        total.push(precio2)
    }else{
        mostrarHTML("Hamburguesa crispy $23.5k", precio3)
        total.push(precio3)
    }

    mostrarTotal(total);

    console.log(total)

}

function mostrarHTML(mensaje, precio){
    const resultado = document.querySelector("#resultado");
    const parrafo = document.createElement("P");
    parrafo.classList.add("fs-5")
    parrafo.textContent = `${mensaje} ${precio}`;
    resultado.appendChild(parrafo);
};

function mostrarTotal(total){
    console.log(total)
    let totalPagar;
    total.forEach(element => totalPagar += element )
    console.log(parseInt(totalPagar))

}

