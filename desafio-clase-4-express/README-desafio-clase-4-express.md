# Desafío clase 4 - Express

- Curso: Programación Backend (NodeJS, 2023)
- Comisión: 39755
- Profesor: Alex Marín Mendez
- Alumno: Matias Baldanza
- Fecha: 2023-04-08

## Notas:

- Implementado servidor usando express
- Implementada lectura de archivo json usando promesas
- Agregados los siguientes endpoints:
  - `/` <br/>
    _Un archivo HTML con la descripción de los endpoints_
  - `GET /products` <br/>
    _incluye el parámetro limit para limitar la lista de resultados_
  - `GET /product/:pid` <br/>
    _recibe por queryParams el pid (Product ID) y devuelve el producto solicitado_

## Archivos

```bash
server.js               # server express configurado con rutas
fileAccess.js           # funciones de lectura y escritura de archivos
ProductManager.js       # del ejercicio anterior, sin cambios
ProductManager.test.js  # del ejercicio anterior, sin cambios (tests)
```
