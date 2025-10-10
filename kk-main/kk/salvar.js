// batão para salvar
const btnSalvar = document.createElement('button');
btnSalvar.textContent = 'salvar lista';
btnSalvar.style.display = 'block';
btnSalvar.style.margin = '20px auto';
btnSalvar.style.padding = '6px 12px';
btnSalvar.style.cursor = 'poiter';
container.appendChild(btnSalvar);

// função para salvar a lista em um arquivo .txt
function salvarLista() {
    // pega todos os <li> e monta o texto (cada item em uma linha 
    const itens = Array.from(lista.querySelectorAll('li'))
                        .map(li => li.textContent)
                        .join('\n');

    if (!itens) {
        alert('a lista está vazia!');
        return;
    }

    // cria um bloco com o conteudo de texto 
    const blob = new Blob([itens], { type: 'text/plain'});
    const url = URL.createObjectURL(blob);

    // cria um link temporario para download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lista.txt'; // nome do arquivo
    document.body.appendChild(a);
    a.click(); // dispara o dowload
    document.body.removeChild(a);

    // libera o obleto url
    url.revokeObjetcURL(url);
}

// evento do botão
btnSalvar.addEventListener('click', salvarLista);