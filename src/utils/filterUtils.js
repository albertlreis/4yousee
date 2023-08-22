// Módulo com funções utilitárias para filtrar e priorizar planos.


// Função para verificar se a data de início é válida.
export function isValidStartDate(startDate) {
    const currentTimestamp = new Date().getTime();
    const planTimestamp = new Date(startDate).getTime();
    return planTimestamp < currentTimestamp;
}

// Função para priorizar as localidades de acordo com a hierarquia e data de início.

export function prioritizeLocation(locations) {
    // Lista de prioridades
    const locationPriorities = ['CITY', 'STATE', 'COUNTRY'];

    // Ordena as localidades com base na hierarquia e data de início.
    return locations.sort((a, b) => {
        // Organizar por prioridade
        const priorityA = locationPriorities.indexOf(a.localidade.prioridade);
        const priorityB = locationPriorities.indexOf(b.localidade.prioridade);

        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }

        // Se as prioridades forem iguais, compara pela data de início.
        const startDateA = new Date(a.schedule.startDate).getTime();
        const startDateB = new Date(b.schedule.startDate).getTime();
        return startDateB - startDateA;
    });
}
