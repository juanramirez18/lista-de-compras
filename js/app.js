const botonHamburguesa = document.querySelector("#hamburguesas");
const bebidas = document.querySelector("#bebidas")
botonHamburguesa.addEventListener("click", (e) => valorProducto(e.target.id, precios))


bebidas.onclick = (e) => {
    valorProducto(e.target.id, precios)
}
let total = [];
const precios = {
    precio1 : 21000,
    precio2 : 23000,
    precio3: 25000, 
    precio4: 8000,
    precio5: 3000,
    precio6: 3500
}

function valorProducto(value, precios){
    const {precio1, precio2, precio3, precio4, precio5, precio6} = precios;

    if(value == "op1"){
        mostrarHTML("Hamburguesa 300gr $" ,  precio1)
        total.push(precio1)
        
    }else if(value == "op2"){
        mostrarHTML("Hamburguesa mixta $", precio2)
        total.push(precio2)
    }else if(value == "op3"){
        mostrarHTML("Hamburguesa crispy $", precio3)
        total.push(precio3)
    }else if(value == "op4"){
        mostrarHTML("Cerveza $", precio4)
        total.push(precio4)
    }else if(value == "op5"){
        mostrarHTML("Gaseosa $", precio5)
        total.push(precio5)
    }else if(value == "op6"){
        mostrarHTML("Botella de agua $", precio6)
        total.push(precio6)
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
    let totalPagar = 0;
    total.forEach(element => totalPagar += element )
    console.log(parseInt(totalPagar))
    const totalP = document.querySelector("#total-pagar");
    const pafTotal = document.createElement("P");
    pafTotal.classList.add("fs-4", "fw-bold")
    pafTotal.textContent = `Total a pagar: ${totalPagar}`;
    limpiarHTML()
    totalP.appendChild(pafTotal);

}

function limpiarHTML(){
    const totalP = document.querySelector("#total-pagar");
    while(totalP.firstChild){
        totalP.removeChild(totalP.firstChild)
    }
    
}

