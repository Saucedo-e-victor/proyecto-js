
const productos = [
  {nombre:"mesa", precio:25},
  {nombre:"forga", precio:50},
  {nombre:"cama", precio:100},
  {nombre:"madera", precio:5},
  {nombre:"carbon", precio:10},
];

let carrito=[]

let seleccion = prompt("Bienvenido te gustaria comprar un mueble para tu casa si o no")

while (seleccion !="si"&& seleccion !="no") {
  alert("por favor ingresa si o no")
  seleccion=prompt("Hola te Gustaria comprar muebles si o no")
}
if (seleccion=="si"){
  alert("a continuacion lista de los productos")
      let todoslosProductos =productos.map(
        (productos) => productos.nombre + " "+productos.precio + "$");
  alert(todoslosProductos.join(" - "))      
} else if (seleccion=="no"){
  alert("Gracias por venir, nos vemos")

}

while (seleccion!="no") {
    let productos = prompt("agrega un producto")
    let precio=0

    if (productos=="mesa"||productos=="forga"|| productos== "cama"||
    productos== "madera" || productos=="carbon") {
      switch (productos) {
        case "mesa":
          precio=25;
          break;
        case "forga":
            precio=50;
            break;
          case "cama":
          precio=100;
          break;
        case "madera":
          precio=5;
          break;
        case "carbon":
            precio=10;
            break;        
        default:
          break;
      } 
    let unidades =parseInt(prompt("cuantas unidades quiere llevar"))
    
    
    carrito.push({productos, unidades, precio})
    console.log(carrito);
  }
  else{
    alert("producto no encontrado")
  }

  seleccion = prompt("desea seguir comprando?")
  while (seleccion==="no") {
    
  
  alert("gracias por su compra")
  carrito.forEach((carritoFinal)=>{
    console.log(`productos:${carritoFinal.productos}, unidades:${carrito.unidades},total${carritoFinal.unidades * carritoFinal.precio}
    `)
  }) 
  break;
  }
}

const total = carrito.reduce((acc, el)=>acc+el.precio*el.unidades,0)
alert(`total:${total}`);

