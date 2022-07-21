
const productos = []

mostrarMenu();


function mostrarMenu() {
    let opcion = ""
    while (opcion !== "S") {

        opcion = prompt(`Seleccione una opcion: 
                        A. Ingresar Producto
                        B. Listar Producto
                        C. Buscar Un Producto (Decir si está o no está)
                        D. Borrar Un Producto (dado su nombre)
                        S. SALIR`).toUpperCase();

        switch (opcion) {
            case "A":
                ingresarProducto();
                break;
            case "B":
                listarProducto();
                break;
            case "C":
                buscarProducto();
                break;
            case "D":
                borrarProducto();
                break;
            case "S":
                alert("HASTA LA PROXIMA");
                break;
            default:
                alert("Opcion Inválida")
                break;
        }
    }

}


function ingresarProducto() {
    let nuevoProducto = prompt("Ingrese un nuevo producto: ")
    productos.push(nuevoProducto);
    alert("Producto ingresado con Éxito")
}


function listarProducto() {
    console.log(productos);
}


function buscarProducto()
{
    let productoBuscar = prompt("Ingrese el producto que desea buscar: ")
    const esta = productos.includes(productoBuscar);
    if(esta)
    {
        alert("SI ESTÁ")
    }
    else 
    {
        alert("NO ESTÁ")
    }
}

function borrarProducto()
{
    let productoBorrar = prompt("Ingrese el producto que quiere borrar: ")
    let indice = productos.indexOf(productoBorrar);
    if(indice===-1) 
    {
        alert("EL PRODUCTO NO EXISTE")
    }
    else {
        productos.splice(indice,1)
        alert("EL PRODUCTO FUE BORRADO CON ÉXITO")
    }

}