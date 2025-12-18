// Importamos Express
const express = require('express');

// Inicializamos la aplicación
const app = express();

// Middleware para leer JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de autenticación funcionando correctamente'
  });
});

// Puerto del servidor
const PORT = 3000;

// Levantamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
