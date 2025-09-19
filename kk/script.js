// criar titulo
const titulo = document.createElement('h1');
titulo.textContent = 'lista de compras';
document.body.appendChild(titulo);

//criar imput de texto
const inputItem = document.createElement('imput');
inputItem.type = 'text';
imputItem.placeholder = 'digite um item';
document.body.appendChild(inputitem);

// criar botão de adicionar
const btnadd = document.createElement('button');
btnadd.textContent - 'adicionar';
document.body.appendChild(btnadd);

// cria lista 
const lista = document.createElement('ul');
document.body.appendChild(lista);

// função para adicionar tem
function adicionaritem() {
    const valor = inputItem.ariaValueMax.trim();
    if (valor !== '') {
        const li = document = valor;
        li.textcontent = valor;
        lista.appendchild(li);
        inputitem.value = ''
        inputitem.focus(); // volta o foco para o campo
    }
}

// evento do botão 
btna.addeventlistener('click', adicionaritem);

// evento para tecla enter no input
inputitem.addEventListener('keydown', (event) => {
    if (event.key === 'enter') {
        adicionarItem();
    }
}); 