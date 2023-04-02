/* 
- Curso: Programación Backend (NodeJS, 2023)
- Comisión: 39755
- Profesor: Alex Marín Mendez
- Alumno: Matias Baldanza
- Entrega: Desafío clase 3 (2023-04-01)
*/

class ProductManager {
    #products;
    #nextId;
  
    constructor() {
      this.#products = [];
      this.#nextId = 1;
    }

    #validateProductCodeDoesNotExist(product, productArray) {
      if (this.#products.some((existingProduct) => existingProduct.code === product.code)) {
        throw new Error('El código de producto debe ser único.');
      }
    }
  
    #validateProduct(product) {
      const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
      for (const field of requiredFields) {
        if (!product.hasOwnProperty(field) || product[field] === null || product[field] === undefined) {
          console.log(`Se requiere el campo '${field}'`);
          throw new Error(`Se requiere el campo '${field}'`);
        }
      }
  
      this.#validateProductCodeDoesNotExist(product, this.#products);
    }
  
    addProduct(product) {
      this.#validateProduct(product);
      const newProduct = {
        id: this.#nextId,
        ...product,
      };
  
      this.#products.push(newProduct);
      this.#nextId += 1;
      return newProduct;
    }
  
    getProducts() {
      return this.#products;
    }
  
    getProductById(id) {
      const product = this.#products.find((product) => product.id === id);
      if (!product) {
        console.log('Not found');
        return;
      }
      return product;
    }

    updateProduct(id, updatedProductData) {
      const productIndex = this.#products.findIndex((product) => product.id === id)
      if (productIndex === -1) {
        console.log('Product to be updated not found');
        return;
      } 
      
      // Asegurarse que updatedProductData no traiga un id que sobreescriba el existente
      const { id: _, ...updatedProductWithoutId } = updatedProductData; 

      const existingProduct = this.#products[productIndex];
      const updatedProduct = { 
        ...existingProduct, 
        ...updatedProductWithoutId
      }
      
      // Asegurarse que si updatedProductData no traiga un código igual al de otro producto existente
      if (existingProduct.code !== updatedProduct.code) {
        const productsWithoutCurrentProduct = [...this.#products.slice(0, productIndex), ...this.#products.slice(productIndex + 1)];
        this.#validateProductCodeDoesNotExist(updatedProductWithoutId, productsWithoutCurrentProduct)
      }

      this.#products[productIndex] = updatedProduct;

      return updatedProduct;
    }

    deleteProduct(id) {
      const productIndex = this.#products.findIndex((product) => product.id === id)
      if (productIndex === -1) {
        console.log('Product to be deleted not found');
        return;
      } 

      this.#products = [...this.#products.slice(0, productIndex), ...this.#products.slice(productIndex + 1)];
    }
  }
  
  module.exports = ProductManager;