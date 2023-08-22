// Ponto de entrada da aplicação. Define rotas e inicia o servidor.

import express from 'express';
import PlanController from './controllers/planController.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Define a rota para obter os planos filtrados e priorizados.
app.get('/plans', PlanController.getFilteredAndPrioritizedPlans);

// Inicia o servidor.
try {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.error('Error starting the server:', error);
}
