/* 
- Curso: Programación Backend (NodeJS, 2023)
- Comisión: 39755
- Profesor: Alex Marín Mendez
- Alumno: Matias Baldanza
- Entrega: Desafío clase 2 (2023-03-25)
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
});
