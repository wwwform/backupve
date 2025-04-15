// Lista de aniversariantes
const aniversariantes = [
    { nome: "João Silva", dataAniversario: "2025-04-16", foto: "assets/foto_joao.jpg" },
    { nome: "Maria Santos", dataAniversario: "2025-04-17", foto: "assets/foto_maria.jpg" }
];

// Função para exibir o aniversariante do dia
function exibirAniversariante() {
    const hoje = new Date().toISOString().split("T")[0];
    const aniversariante = aniversariantes.find(pessoa => pessoa.dataAniversario === hoje);

    if (aniversariante) {
        const container = document.getElementById("aniversarianteDoDia");
        container.innerHTML = `
            <h3>🎉 Feliz Aniversário! 🎉</h3>
            <img src="${aniversariante.foto}" alt="Foto de ${aniversariante.nome}" width="200">
            <p>${aniversariante.nome}</p>
        `;
    }
}

// Executar a função ao carregar a página
window.onload = exibirAniversariante;
