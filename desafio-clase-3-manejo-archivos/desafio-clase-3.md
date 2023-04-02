# Desafío clase 3 - Manejo de archivos en JavaScript

- Curso: Programación Backend (NodeJS, 2023)
- Comisión: 39755
- Profesor: Alex Marín Mendez
- Alumno: Matias Baldanza
- Fecha: 2023-04-01

> NOTA: Estoy confundido, porque la clase es "Manejo de archivos" pero la consigna de este desafío no indica más que agregar los métodos **updateProduct** y **deleteProduct**. No hay mención ni criterio de evaluación de persistencia usando _fs.writeFileSync()_

## Archivos

```bash
ProductManager.js       # ejercicio resuelto
ProductManager.test.js  # suite de tests
```

Se crearon funciones:

- **updateProduct:** debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID.

- **updateProduct:** debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.

## Tests

Se agregaron los siguientes tests en `ProductMaanger.test.js`

**updateProduct:**

- 'updateProduct devuelve "Product to be updated not found" cuando se le pasa un id inexistente'
- 'updateProduct cambia los campos suministrados de un producto, pero mantiene el resto y el id'

**updateProduct:**

- 'deleteProduct devuelve "Product to be deleted not found" cuando se le pasa un id inexistente'
- 'luego que deleteProduct elimina un producto existente, getProductById devuelve "Not found"'

### Para instalar:

```bash
npm install
```

o

```bash
pnpm install
```

### Para ejecutar tests:

```bash
npm test
```

o

```bash
pnpm test
```

Debería dar un resultado como el siguiente:

```bash
PASS desafio-clase-2/ProductManager.test.js
ProductManager
✓ clase inicializada devuelve un arreglo vacío (1 ms)
✓ addProduct agrega un producto válido
✓ addProduct valida los campos requeridos (24 ms)
✓ addProduct valida código de producto único
✓ getProducts devuelve todos los productos (1 ms)
✓ getProductById devuelve un producto por id (1 ms)
✓ getProductById devuelve "Not found" cuando se le pasa un id inexistente (1 ms)

Test Suites: 1 passed, 1 total
Tests: 7 passed, 7 total
Snapshots: 0 total
Time: 0.236 s, estimated 1 s
Ran all test suites.
```

## Consigna

Realizar una clase “ProductManager” que gestione un conjunto de productos.

1. Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
   2 Cada producto que gestione debe contar con las propiedades:

- title (nombre del producto)
- description (descripción del producto)
- price (precio)
- thumbnail (ruta de imagen)
- code (código identificador)
- stock (número de piezas disponibles)

3. Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.

   - Validar que no se repita el campo “code” y que todos los campos sean obligatorios
   - Al agregarlo, debe crearse con un id autoincrementable

4. Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

5. Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
   - En caso de no coincidir ningún id, mostrar en consola un error “Not found”
