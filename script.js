// Função que mostra as plantas conforme o mês selecionado
function showPlants(month) {
    const listaPlants = {
        Janeiro: ['Alface', 'Ervilha', 'Rúcula'],
        Fevereiro: ['Cenoura', 'Beterraba', 'Alho-poró'],
        Março: ['Tomate', 'Pepino', 'Alho'],
        Abril: ['Abóbora', 'Batata-doce', 'Espinafre'],
        Maio: ['Pimentão', 'Abobrinha', 'Berinjela'],
        Junho: ['Feijão', 'Milho', 'Couve'],
        Julho: ['Alface', 'Cenoura', 'Rúcula'],
        Agosto: ['Brócolis', 'Repolho', 'Couve-flor'],
        Setembro: ['Alho', 'Cebola', 'Tomate'],
        Outubro: ['Pimentão', 'Beterraba', 'Abóbora'],
        Novembro: ['Cenoura', 'Espinafre', 'Alho-poró'],
        Dezembro: ['Alface', 'Ervilha', 'Rúcula']
    };

    const plantas = listaPlants[month];
    const listaElement = document.getElementById('lista-plants');
    listaElement.innerHTML = '';  // Limpa a lista antes de adicionar novas plantas

    // Adiciona as plantas para o mês selecionado
    plantas.forEach(planta => {
        const li = document.createElement('li');
        li.textContent = planta;
        listaElement.appendChild(li);
    });

    // Atualiza o título da seção
    const titulo = document.querySelector('#plantas-list h2');
    titulo.textContent = `Plantas para ${month}`;
}
