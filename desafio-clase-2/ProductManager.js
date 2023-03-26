class ProductManager {
    #products;
    #nextId;
  
    constructor() {
      this.#products = [];
      this.#nextId = 1;
    }
  
    #validateProduct(product) {
      const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
      for (const field of requiredFields) {
        if (!product.hasOwnProperty(field) || product[field] === null || product[field] === undefined) {
          console.log(`Se requiere el campo '${field}'`);
          throw new Error(`Se requiere el campo '${field}'`);
        }
      }
  
      if (this.#products.some((existingProduct) => existingProduct.code === product.code)) {
        throw new Error('El código de producto debe ser único.');
      }
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
  }
  
  module.exports = ProductManager;