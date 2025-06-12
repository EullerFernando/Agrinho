// Função que mostra as plantas conforme o mês selecionado
function showPlants(month) {
    const listaPlants = {
        Janeiro: [
            { nome: 'Alface', imagem: 'alface.jpeg' },
            { nome: 'Ervilha', imagem: 'https://via.placeholder.com/50x50.png?text=Ervilha' },
            { nome: 'Rúcula', imagem: 'https://via.placeholder.com/50x50.png?text=Rúcula' }
        ],
        Fevereiro: [
            { nome: 'Cenoura', imagem: 'https://via.placeholder.com/50x50.png?text=Cenoura' },
            { nome: 'Beterraba', imagem: 'https://via.placeholder.com/50x50.png?text=Beterraba' },
            { nome: 'Alho-poró', imagem: 'https://via.placeholder.com/50x50.png?text=Alho-poró' }
        ],
        Março: [
            { nome: 'Tomate', imagem: 'https://via.placeholder.com/50x50.png?text=Tomate' },
            { nome: 'Pepino', imagem: 'https://via.placeholder.com/50x50.png?text=Pepino' },
            { nome: 'Alho', imagem: 'https://via.placeholder.com/50x50.png?text=Alho' }
        ],
        Abril: [
            { nome: 'Abóbora', imagem: 'https://via.placeholder.com/50x50.png?text=Abóbora' },
            { nome: 'Batata-doce', imagem: 'https://via.placeholder.com/50x50.png?text=Batata-doce' },
            { nome: 'Espinafre', imagem: 'https://via.placeholder.com/50x50.png?text=Espinafre' }
        ],
        Maio: [
            { nome: 'Pimentão', imagem: 'https://via.placeholder.com/50x50.png?text=Pimentão' },
            { nome: 'Abobrinha', imagem: 'https://via.placeholder.com/50x50.png?text=Abobrinha' },
            { nome: 'Berinjela', imagem: 'https://via.placeholder.com/50x50.png?text=Berinjela' }
        ],
        Junho: [
            { nome: 'Feijão', imagem: 'https://via.placeholder.com/50x50.png?text=Feijão' },
            { nome: 'Milho', imagem: 'https://via.placeholder.com/50x50.png?text=Milho' },
            { nome: 'Couve', imagem: 'https://via.placeholder.com/50x50.png?text=Couve' }
        ],
        Julho: [
            { nome: 'Alface', imagem: 'https://via.placeholder.com/50x50.png?text=Alface' },
            { nome: 'Cenoura', imagem: 'https://via.placeholder.com/50x50.png?text=Cenoura' },
            { nome: 'Rúcula', imagem: 'https://via.placeholder.com/50x50.png?text=Rúcula' }
        ],
        Agosto: [
            { nome: 'Brócolis', imagem: 'https://via.placeholder.com/50x50.png?text=Brócolis' },
            { nome: 'Repolho', imagem: 'https://via.placeholder.com/50x50.png?text=Repolho' },
            { nome: 'Couve-flor', imagem: 'https://via.placeholder.com/50x50.png?text=Couve-flor' }
        ],
        Setembro: [
            { nome: 'Alho', imagem: 'https://via.placeholder.com/50x50.png?text=Alho' },
            { nome: 'Cebola', imagem: 'https://via.placeholder.com/50x50.png?text=Cebola' },
            { nome: 'Tomate', imagem: 'https://via.placeholder.com/50x50.png?text=Tomate' }
        ],
        Outubro: [
            { nome: 'Pimentão', imagem: 'https://via.placeholder.com/50x50.png?text=Pimentão' },
            { nome: 'Beterraba', imagem: 'https://via.placeholder.com/50x50.png?text=Beterraba' },
            { nome: 'Abóbora', imagem: 'https://via.placeholder.com/50x50.png?text=Abóbora' }
        ],
        Novembro: [
            { nome: 'Cenoura', imagem: 'https://via.placeholder.com/50x50.png?text=Cenoura' },
            { nome: 'Espinafre', imagem: 'https://via.placeholder.com/50x50.png?text=Espinafre' },
            { nome: 'Alho-poró', imagem: 'https://via.placeholder.com/50x50.png?text=Alho-poró' }
        ],
        Dezembro: [
            { nome: 'Alface', imagem: 'https://via.placeholder.com/50x50.png?text=Alface' },
            { nome: 'Ervilha', imagem: 'https://via.placeholder.com/50x50.png?text=Ervilha' },
            { nome: 'Rúcula', imagem: 'https://via.placeholder.com/50x50.png?text=Rúcula' }
        ]
    };

    const plantas = listaPlants[month];
    const listaElement = document.getElementById('lista-plants');
    listaElement.innerHTML = '';  // Limpa a lista antes de adicionar novas plantas

    // Adiciona as plantas para o mês selecionado
    plantas.forEach(planta => {
        const li = document.createElement('li');
        
        // Cria a imagem e o nome
        const img = document.createElement('img');
        img.src = planta.im
