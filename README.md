# ⌨ GraphQL

Aplicación de Carrito de Compras

## 📝 Detalle
Esta aplicación permite a los usuarios crear y gestionar carritos de compras. Los carritos de compras pueden incluir diferentes productos y esta aplicación 
proporciona una interfaz para agregar, eliminar, y visualizar los productos dentro de un carrito. Esta aplicación puede ser utilizada tanto a través de GraphQL. 
La app permite a los usuarios realizar consultas complejas y obtener exactamente la información que necesitan en un formato flexible.

## ⌨🖱 Instalación
- Para correr la app puedes:

1. Clonar el repositorio y utilizarlo de manera local

    `git clone https://github.com/fedekrenn/memory-game-JS.git`
    
2. Levantar el servidor de manera local con el comando:

    `npm run dev`
    
3. En la ruta raíz podrás acceder en una vista desde el front, pero puedes acceder a graphiQL para hacer las consultas desde el IDE en el path `/graphQL`

## Funcionalidades: Query y mutaciones:

<br>

### Productos

1 . Obtener todos los productos
```
query {
  getAll{
    id
    descripcion
  }
}
```
2 . Obtener un producto por ID
```
query {
  getById(id: 1){
    nombre
    id
  }
}
```
3 . Modificar un producto
```
mutation {
  updateById(id: 2, datos: {
    nombre: "Nuevo nombre",
    descripcion: "Nueva descripción",
    codigo: 12345,
    foto: "nueva-foto.jpg",
    precio: 5000,
    stock: 10
  }) {
    id
    message
  }
}
```
4 . Eliminar un producto
```
mutation {
  deleteById(id: 1){
    message
    id
    error
  }
}
```
<br>
### Carrito

1. Obtener los productos de un carrito puntual
```
query{
  getProducts(id: 1) {
    error
    message
    id
    productos {
      id
      nombre
      descripcion
    }
  }
}
```
2 . Obtener todos los carritos
```
query{
  getAllCarts {
    id
    productos {
      id
      nombre
      stock
    }
  }
}
```
3 . Crear un nuevo carrito
```
mutation{
  createCart {
    message
    id
  }
}
```
4 . Agregar un producto a un carrito
```
mutation{
  addProductToCart(id: 1, idProducto: 2){
    message
    error
  }
}
```
5 . Eliminar un producto del carrito
```
mutation {
  deleteProductFromCart(id: 12, productId: 1) {
    message
    error
  }
}

```
6 . Eliminar un carrito entero
```
mutation {
  deleteCart(id: 1){
    message
    error
    id
  }
}
```
    
<br>
<br>

<h2> 🙋‍♂️ Hola, Soy Federico Krenn</h2>
:nerd_face: Me encuentro cursando la carrera de fullstack developer en Coderhouse 
<br>
🌱 Actualmente estoy cursando Backend
<br></br>
📫 Conectemos en Linkedin: https://www.linkedin.com/in/fkrenn/
