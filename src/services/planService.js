// Módulo com a lógica de serviço para filtrar e priorizar planos.

import * as filterUtils from '../utils/filterUtils.js';

class PlanService {
    constructor(plans) {
        this.plans = plans;
    }

    // Obtém os planos filtrados e priorizados.
    getFilteredAndPrioritizedPlans() {
        // Filtra os planos com base na data de início válida.
        const filteredPlans = this.plans.filter((plan) =>
            filterUtils.isValidStartDate(plan.schedule.startDate)
        );

        // Prioriza os planos com base na hierarquia de localidades e data de início.
        return filterUtils.prioritizeLocation(filteredPlans);
    }
}

export default PlanService;
