/* 
- Curso: Programación Backend (NodeJS, 2023)
- Comisión: 39755
- Profesor: Alex Marín Mendez
- Alumno: Matias Baldanza
- Entrega: Desafío clase 4 (2023-04-08)
*/

const ProductManager = require('./ProductManager');

describe('ProductManager', () => {
  let productManager;

  beforeEach(() => {
    productManager = new ProductManager();
  });

  const sampleProduct = {
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'sin imagen',
    code: 'abc123',
    stock: 25,
  };

  const updatedProductTitleDescription = {
    title: 'producto prueba modificado',
    description: 'Este es un producto prueba modificado',
  };

  test('clase inicializada devuelve un arreglo vacío', () => {
    expect(productManager.getProducts()).toHaveLength(0);
  })

  test('addProduct agrega un producto válido', () => {
    const newProduct = productManager.addProduct(sampleProduct);
    expect(newProduct.id).toBe(1);
    expect(productManager.getProducts()).toHaveLength(1);
  });

  test('addProduct valida los campos requeridos', () => {
    const invalidProduct = {
      ...sampleProduct,
      code: 'abc124',
      description: undefined,
    };
    expect(() => productManager.addProduct(invalidProduct)).toThrowError(/Se requiere el campo 'description'/);
  });

  test('addProduct valida código de producto único', () => {
    productManager.addProduct(sampleProduct);
    const duplicateProduct = { ...sampleProduct, id: 2 };
    expect(() => productManager.addProduct(duplicateProduct)).toThrowError(/El código de producto debe ser único/);
  });

  test('getProducts devuelve todos los productos', () => {
    productManager.addProduct(sampleProduct);
    const products = productManager.getProducts();
    expect(products).toHaveLength(1);
    expect(products[0]).toMatchObject(sampleProduct);
  });

  test('getProductById devuelve un producto por id', () => {
    const addedProduct = productManager.addProduct(sampleProduct);
    const foundProduct = productManager.getProductById(addedProduct.id);
    expect(foundProduct).toMatchObject(sampleProduct);
  });

  test('getProductById devuelve "Not found" cuando se le pasa un id inexistente', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    productManager.getProductById(999);
    expect(logSpy).toHaveBeenCalledWith('Not found');
    logSpy.mockRestore();
  });

  test('updateProduct devuelve "Product to be updated not found" cuando se le pasa un id inexistente', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    productManager.updateProduct(999, updatedProductTitleDescription);
    expect(logSpy).toHaveBeenCalledWith('Product to be updated not found');
    logSpy.mockRestore();
  })

  test('updateProduct cambia los campos suministrados de un producto, pero mantiene el resto y el id', () => {
    const addedProduct = productManager.addProduct(sampleProduct);
    const productBeforeChange = productManager.getProductById(1);
    const updatedProduct = productManager.updateProduct(1, updatedProductTitleDescription);
    expect(updatedProduct.title).toBe(updatedProductTitleDescription.title);
    expect(updatedProduct.description).toBe(updatedProductTitleDescription.description);
    expect(updatedProduct.id).toBe(productBeforeChange.id);
    expect(updatedProduct.price).toBe(productBeforeChange.price);
    expect(updatedProduct.thumbnail).toBe(productBeforeChange.thumbnail);
    expect(updatedProduct.code).toBe(productBeforeChange.code);
    expect(updatedProduct.stock).toBe(productBeforeChange.stock);
  })

  test('deleteProduct devuelve "Product to be deleted not found" cuando se le pasa un id inexistente', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    productManager.deleteProduct(999);
    expect(logSpy).toHaveBeenCalledWith('Product to be deleted not found');
    logSpy.mockRestore();
  })

  test('luego que deleteProduct elimina un producto existente, getProductById devuelve "Not found"', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    productManager.addProduct(sampleProduct);
    productManager.deleteProduct(1);
    productManager.getProductById(1);
    expect(logSpy).toHaveBeenCalledWith('Not found');
    logSpy.mockRestore();
  })
});
