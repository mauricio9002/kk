// criar titulo
const titulo = document.createElement('h1');
titulo.textContent = 'Lista de compras';
document.body.appendChild(titulo);

//criar imput de texto
const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = 'digite um item';
document.body.appendChild(inputItem);

// criar botão de adicionar
const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
document.body.appendChild(btnAdd);

// cria lista 
const lista = document.createElement('ul');
document.body.appendChild(lista);

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