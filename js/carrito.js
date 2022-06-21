

const contador = document.querySelector('#contador'),
btnMas = document.querySelector('#aumentar'),
btnMenos = document.querySelector('#disminuir')
platoImg = document.querySelector("#fotoProducto"),
platoNombre = document.querySelector("#tituloProducto"),
platoDescripcion = document.querySelector("#discripcionProducto"),
platoPrecio = document.querySelector("#precioProducto"),
btnGuardar = document.querySelector("#btnGuardar"),
carrito = document.querySelector("#carrito");









document.addEventListener(`DOMContentLoaded`, async () =>{
    renderTable(platos)
})



const renderTable = productos => {
    let productosPanelVista = ''
    productos.forEach(productos => {
        {
            productosPanelVista += `
            
                <thead>
                <tr>
                    <td>Imagen</td>
                    <td class="table-active">Plato</td>
                    <td>Descripcion</td>
                    <td class="table-active">Precio</td>
                </tr>
                </thead>
                <tbody >
                <tr >
                
                    
                    <th scope="row">  
    
                        <div class="cont">
                            <p id="contador" >0</p>
                            <img src= "${productos.Foto}" alt="foto" width="50">

                            <div class="direc">
                                <button id="aumentar" class="mas">+</button>
                                <button id="disminuir" class="menos">-</button>

                            </div>
                                


                        </div>
                             
                       
                            
                        
                       
                    </th>
                    <td  class="table-active">Hamburgesas</td>
                    <td>Hambuegesa con queso y panceta</td>
                    <td  class="table-active">$850</td>
                    
                    <td><a href="#" class="x">x</a></td>
    
                </tr>
                
                <tr>
                    <th class="table-active" scope="row">TOTAL</th>
                    <td  class="table-active"></td>
                    <td class="table-active"></td>
                    <td  class="table-active">$ 850</td>
                    
                </tr>
                <tr>
                    <td></td>
                    <td> <button class="btn">Aceptar</button></td>
                    <td><button class="btn">Borrar</button></td>
                    <td></td>
                    
                
                </tr>
                </tbody>
                
           
                


           `

        }
        document.getElementById('productos').innerHTML = productosPanelVista
    });

}



let cont = 0
function cambio(num){
    cont = cont + num;
    if(cont >= 0){
        contador.innerHTML = cont;

    }else{
        cont === 0;
    }
    
}



btnMas.addEventListener("click", ()=>{
    cambio(1);
});


btnMenos.addEventListener("click", ()=>{
    cambio(-1);

});
