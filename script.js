// Selecionando o botão pelo ID
const button = document.getElementById('changeColorBtn');

// Função para mudar a cor de fundo
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F4D03F'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Adicionando um ouvinte de evento para o clique do botão
button.addEventListener('click', changeBackgroundColor);
