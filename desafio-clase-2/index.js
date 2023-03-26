/* 
- Curso: Programación Backend (NodeJS, 2023)
- Comisión: 39755
- Profesor: Alex Marín Mendez
- Alumno: Matias Baldanza
- Entrega: Desafío clase 2 (2023-03-25)
*/

const ProductManager = require('./ProductManager');

const sampleProduct = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'sin imagen',
    code: 'abc123',
    stock: 25,
  };

const productManager = new ProductManager(sampleProduct);

const invalidProduct = {...sampleProduct, 
                        code: 'abc124',
                        description: undefined };

console.log(productManager.getProducts());

productManager.addProduct(sampleProduct);
productManager.addProduct(invalidProduct);

console.log(productManager.getProducts());