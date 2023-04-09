/* 
- Curso: Programación Backend (NodeJS, 2023)
- Comisión: 39755
- Profesor: Alex Marín Mendez
- Alumno: Matias Baldanza
- Entrega: Desafío clase 4 (2023-04-08)
*/

/* 
  fileAccess
  Incluye las funciones para leer y escribir datos en un archivo json
  Versión: 0.1.0

  A pesar que en esta entrega solo se pide implementar GET,
  me entusiasmé y escribí una función para guardar productos en un archivo json y 
  una función middleware para sincronizar cambios.
*/

const fs = require('fs');
const path = require('path');
const fileName = 'data/products.json';

// Lee el archivo de productos y devuelve un array de productos
function readProductsFile() {
    return new Promise((resolve, reject) => {
      const filePath = path.join(__dirname, fileName);
      console.log(__dirname); 
      
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          return reject(err);
        }
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  
  // Escribe el array de productos en el archivo de productos
  function writeProductsFile(products) {
    return new Promise((resolve, reject) => {
      const filePath = path.join(__dirname, fileName);
      const jsonData = JSON.stringify(products, null, 2);
      
      fs.writeFile(filePath, jsonData, 'utf-8', (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }

// Carga los productos en un array en memoria cuando inicia el servidor
async function loadProducts() {
  try {
    products = await readProductsFile();
    return products;
  } catch (err) {
    console.error('Error al leer el archivo de productos:', err);
    process.exit(1);
  }
}

// Middleware para sincronizar los productos en memoria con el archivo de productos
function syncProducts(req, res, next) {
  writeProductsFile(products)
    .then(() => next())
    .catch((err) => {
      console.error('Error al sincronizar el archivo de productos:', err);
      res.status(500).json({ message: 'Error al sincronizar el archivo de productos.' });
    });
}

module.exports = {
  loadProducts,
  syncProducts,
};
