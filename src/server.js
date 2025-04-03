const express = require('express');
const dotenv = require('dotenv');
const { createContact } = require('./controllers/contactController');
const path = require('path');

// Cargar variables de entorno
dotenv.config();

// Crear aplicación Express
const app = express();

// Configurar middleware básico
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Obtener puerto desde variables de entorno o usar valor predeterminado
const PORT = process.env.PORT || 3005;

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Ruta para crear contacto
app.post('/contact', createContact);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
}); 