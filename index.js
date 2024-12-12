const express = require('express');
const app = express();

// Middleware para registrar la IP y el endpoint
const logClientInfo = (req, res, next) => {
    const clientIp = req.ip || req.connection.remoteAddress; // Obtiene la IP del cliente
    const endpoint = req.originalUrl; // Obtiene el endpoint que visitó

    console.log(`Cliente IP: ${clientIp}, Endpoint visitado: ${endpoint}`);

    next(); // Llama al siguiente middleware o controlador
};

// Usar el middleware en toda la aplicación
app.use(logClientInfo);

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.get('/about', (req, res) => {
    res.send('Acerca de nosotros');
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});