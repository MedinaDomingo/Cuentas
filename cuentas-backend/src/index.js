// src/index.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Función para generar un número aleatorio entre un rango
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Endpoint para obtener un problema matemático
app.get('/problema', (req, res) => {
    const num1 = getRandomInt(5, 10000);
    const num2 = getRandomInt(5, 10000);
    const operation = ['+', '-'][Math.floor(Math.random() * 2)];
    
    let problem;
    switch(operation) {
        case '+':
            problem = `${num1} + ${num2}`;
            result = num1 + num2;
            break;
        case '-':
            problem = `${num1} - ${num2}`;
            result = num1 - num2;
            break;
    }

    res.json({ problem, result });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
