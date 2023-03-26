const ProductManager = require('./ProductManager');
// import ProductManager from "./ProductManager";

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