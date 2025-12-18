// Importacion de express
const express = required('express');
const app = express();

// Middleware para leer JSON
app.use(express.json());

// Uso de rutas
app.use('/api/auth', authRoutes);

// Puerto del servidor
const PORT = 3000;

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});