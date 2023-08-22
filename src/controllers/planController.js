// Módulo com o controlador para lidar com as requisições da API.


import PlanService from '../services/planService.js';
import plansData from '../../data.json' assert { type: "json" };

class PlanController {
    static async getFilteredAndPrioritizedPlans(req, res) {
        // Cria uma instância do serviço de plano com os dados do JSON.
        const planService = new PlanService(plansData.plans);

        // Obtém os planos filtrados e priorizados.
        const plans = planService.getFilteredAndPrioritizedPlans();

        return res.json(plans);
    }
}

export default PlanController;
