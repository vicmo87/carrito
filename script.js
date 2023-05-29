let productos = [
    {
        nombre: "Harina",
        precio:35
    },
    {
        nombre: "Pan",
        precio:25
    },
    {
        nombre: "Papa",
        precio:52
    },
    {
        nombre: "Palta",
        precio:55
    },
    {
        nombre: "Fideos",
        precio:85
    },
    {
        nombre: "Aceite",
        precio:350
    },
    {
        nombre: "Sopa",
        precio:86
    },
    {
        nombre: "Mermelada",
        precio:108
    },
    {
        nombre: "Porotos",
        precio:69
    },
    {
        nombre: "Lentejas",
        precio:85
    },
    {
        nombre: "Mandarina",
        precio:43
    },
    {
        nombre: "Banana",
        precio:79
    },
    {
        nombre: "Leche de almendras",
        precio:145
    },
    {
        nombre: "Papel higienico",
        precio:147
    },
    {
        nombre: "Lavandina",
        precio:55
    },
    {
        nombre: "Alcohol en gel",
        precio:123
    },
    {
        nombre: "Shampoo",
        precio:400
    },
    {
        nombre: "Arroz",
        precio:66
    },
    {
        nombre: "Harina",
        precio:35
    },
    {
        nombre: "Salsa de tomate",
        precio:35
    },
    
];

const productosContainer = document.getElementById("productos");
const carritoList = document.getElementById("lista-compra");
const comprarBtn = document.getElementById("comprar-btn");
const limpiarBtn = document.getElementById("limpiar-btn");
const verListaBtn = document.getElementById("ver-lista-btn");

// mostrar los productos en el HTML
function mostrarProductos() {
    productosContainer.innerHTML = "";
    productos.forEach((producto, index) => {
        const productoDiv = document.createElement("div");
        productoDiv.className = "producto";
        productoDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
        `;
        productosContainer.appendChild(productoDiv);
    });
}

// agregar un producto al carrito
function agregarAlCarrito(index) {
    const producto = productos[index];
    const carritoItem = document.createElement("li");
    carritoItem.textContent = `${producto.nombre} - $${producto.precio}`;
    carritoList.appendChild(carritoItem);
}

// para comprar los productos
function comprar() {
    alert("Compra realizada correctamente");
    limpiarCarrito();
}

// limpiar el carrito
function limpiarCarrito() {
    carritoList.innerHTML = "";
}


// Event listeners para los botones
comprarBtn.addEventListener("click", comprar);
limpiarBtn.addEventListener("click", limpiarCarrito);


// Mostrar los productos al cargar la página
mostrarProductos();
