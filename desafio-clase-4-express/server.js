/* 
- Curso: Programación Backend (NodeJS, 2023)
- Comisión: 39755
- Profesor: Alex Marín Mendez
- Alumno: Matias Baldanza
- Entrega: Desafío clase 4 (2023-04-08)
*/

const express = require('express');
const fs = require('./src/fileAccess');
const ProductManager = require('./src/ProductManager');

const products = async () => {
    const dataProducts = await fs.promises.readFile('./data/products.json', 'utf-8');
    const jsonProducts = await JSON.parse(data);
    return Promise.resolve(jsonProducts)
}

const app = express();

const PORT = 8080;

let productsFromFile = []
let productManager = new ProductManager();

// Iniciar el servidor
const server = app.listen(PORT, async () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
    productsFromFile = await fs.loadProducts();    
    productsFromFile.products.map(product => productManager.addProduct(product));
});
server.on("error", error => console.log(`Error en servidor ${error}`));

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.get('/products', (req, res) => {    
    const limit = req.query.limit ? parseInt(req.query.limit) : null;
    const products = productManager.getProducts();
    
    // Verificar si el parámetro limit es un número válido y devolver los productos limitados, sino, devolver el array completo
    // Nota: Si el parámetro limit es un número negativo, se devuelven todos los productos menos el número indicado
    // (En un array de 40 productos, -30 devuelve los primeros 10 productos)
    const limitedProducts = (typeof limit === 'number' && !isNaN(limit)) ? products.slice(0, limit) : products;
    res.json(limitedProducts);
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id ? parseInt(req.params.id) : null;
    const product = productManager.getProductById(id);
    if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: `Product with ID '${id}' not found.` });
      }
});