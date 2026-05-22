let Productos = ['arroz','azucar','leche','aceite','pan','bebidas','galletas']
let VProductos = []
let dimension = 7

let BtnCargarNum = document.getElementById('id-btn-cargar-Num')
let BtnPresentarNum = document.getElementById('id-btn-presentar-Num')
let TablaTxt = document.getElementById('id-listado-num')

BtnCargarNum.addEventListener('click', function (e) {
function cargarNum(dimension) {
  for (let i = 0; i < dimension; i++) {
    let numEntero = Math.floor(Math.random() * (500 - 10 + 1)) + 10;
    VProductos[i] = numEntero
  }
}
}
)

BtnPresentarNum.addEventListener('click', function (e) 
{
 function PresentarNum(dimension) {
  for(let i= 0; i<dimension, i++;)
  {
    Document.write(Productos[i], "= ", VProductos[i])
  }
 }
}
)







