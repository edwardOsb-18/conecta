let nuevo__producto = document.getElementById("nuevoProducto")
let cancelar = document.getElementById("cancelar")

nuevo__producto.addEventListener("click", () => {

    let bloque = document.getElementById("bloque")
    bloque.classList.add("display__nuevo")
})

cancelar.addEventListener("click", () => {
    let bloque = document.getElementById("bloque")
    bloque.classList.remove("display__nuevo")
})