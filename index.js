// Mock de almacenamiento en memoria para las reviews
const reviews = [];

// Middleware para proteger el endpoint (validación de administrador)
const isAdmin = (req, res, next) => {
  const { role } = req.user || {}; // Asume que el usuario está en req.user
  if (role !== 'admin') {
    return res.status(403).send({ error: 'Access denied. Admins only.' });
  }
  next();
};

// Middleware para loguear información de los endpoints
const logRequestInfo = (req, res, next) => {
  const clientIp = req.ip || req.connection.remoteAddress;
  const endpoint = req.originalUrl;
  console.log(`Request received from IP: ${clientIp} - Endpoint: ${endpoint}`);
  next();
};

// Endpoint para guardar reviews
app.post('/api/reviews', logRequestInfo, (req, res) => {
  const { rating, message } = req.body;

  // Validaciones
  if (!['good', 'neutral', 'bad'].includes(rating)) {
    return res.status(400).send({ error: 'Invalid rating value' });
  }
  if (typeof message !== 'string' || message.length > 256) {
    return res.status(400).send({ error: 'Message exceeds character limit' });
  }

  // Almacenar la review
  const review = { rating, message, date: new Date() };
  reviews.push(review);

  res.status(201).send({ message: 'Review saved successfully', review });
});

// Endpoint protegido para obtener todas las reviews
app.get('/api/reviews', logRequestInfo, isAdmin, (req, res) => {
  res.status(200).json(reviews);
});

// Ejemplo de simulación del usuario en req.user
// (En una aplicación real, esto vendría de la autenticación JWT o similar)
app.use((req, res, next) => {
  req.user = { id: 1, role: 'admin' }; // Cambia a 'user' para probar acceso denegado
  next();
});
