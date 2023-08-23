// Módulo com funções utilitárias para filtrar e priorizar planos.


// Função para verificar se a data de início é válida.
export function isValidStartDate(startDate) {
    const currentTimestamp = new Date().getTime();
    const planTimestamp = new Date(startDate).getTime();
    return planTimestamp < currentTimestamp;
}


// Função para priorizar as localidades com base na prioridade (invertida) e data de início.
export function prioritizeLocation(locations) {
    // Ordena as localidades com base na prioridade invertida e data de início.
    return locations.sort((a, b) => {
        // Comparar prioridade (invertida)
        if (a.localidade.prioridade !== b.localidade.prioridade) {
            return a.localidade.prioridade - b.localidade.prioridade; // Invertido
        }

        // Se as prioridades forem iguais, compara pela data de início.
        const startDateA = new Date(a.schedule.startDate).getTime();
        const startDateB = new Date(b.schedule.startDate).getTime();
        return startDateB - startDateA;
    });
}