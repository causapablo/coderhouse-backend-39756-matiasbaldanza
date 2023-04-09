# Desafío clase 2 V2 - Clases con ECMAScript y ECMAScript avanzado

- Curso: Programación Backend (NodeJS, 2023)
- Comisión: 39755
- Profesor: Alex Marín Mendez
- Alumno: Matias Baldanza

## Corrección

Devolución del tutor:

> ¡Felicitaciones! 🎉 Muy buen trabajo. Aprobado.Hola Matías, excelente trabajo. Te felicito. Lo unico que te podría comentar, es una alternativa para ponerle el Id al producto. Haria un metodo IdGenerator() que tenga en cuenta el length del array productos, y apartir de ahí genere un id. Acordate que los array tienen posiciones, o index, definidos y que te pueden ayudar te a llevar un contador de la cantidad de items que hay, y asignarlos como id. Bueno, eso es lo unico, el resto está perfecto. Felicitaciones. Seguí así.

> Saludos.

## Archivos

```bash
ProductManager.js       # ejercicio resuelto
ProductManager.test.js  # suite de tests
index.js                # borrador con pruebas
```

## Tests

Armé una suite de tests usando Jest.

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
