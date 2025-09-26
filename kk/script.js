// cria uma div "conteiner" e adicionar ao body
const container = document.createElement('div');
container.id = 'lista-container';
document.body.appendChild(container);

//  esttilo direto no js
container.style.backgroundColor = '#f9f9'; // cor e fundo
container.style.border = '2px solid #f188f2'; // borda
container.style.borderRadius = '10px'; //cantos arredondados
container.style.padding = '20px'; //espaçamento interno
container.style.maxWidth = '400px'; // largura máxima
container.style.margin = '20px auto'; // centraliza horizontalmente
container.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'; // sobra

// criar titulo
const titulo = document.createElement('h1');
titulo.textContent = 'Lista de compras';
titulo.style.textAlign = 'center'; // exemplo de estilo no titulo
container.appendChild(titulo);

//criar imput de texto
const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = 'digite um item';
inputItem.style.width ='70%'
container.appendChild(inputItem);

// criar botão de adicionar
const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
btnAdd.style.backgroundColor = '#f188f2';
btnAdd.style.border ='#ed6cef';
btnAdd.style.margin ='15px'
container.appendChild(btnAdd);

// cria lista 
const lista = document.createElement('ol');
container.appendChild(lista);

// função para adicionar tem
function adicionarItem() {
    const valor = inputItem.value.trim();
    if (valor !== '') {
        const li = document.createElement('li');
        li.textContent = valor;
        lista.appendChild(li);
        inputItem.value = '';
        inputItem.focus(); // volta o foco para o campo
    }
};

// evento do botão 
btnAdd.addEventListener('click', adicionarItem);

// evento para tecla enter no input
inputItem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarItem();
    }
}); 