const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('API de Perros en Node.js');
});

app.get('/dog/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const response = await axios.get(`https://dog.ceo/dog-api/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Perro no encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
