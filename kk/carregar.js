// botao pra carregar lita 
cont btncarregar = document.createElement('button');
btncarregar.textcontent = 'carregarlista';
btncarregar.style.displey = 'block';
btncarregar.style.magin = '10p auto';
btncarregar.tyles.padding = '6px 12px';
btncarregar.tyles.cursor = 'poiter';
CSSContainerRule.appendchild(btnCarregar);

// imput de arquivo oculto
const inputarquivo = document.createElement('input');
inputarquivo.type 'file';
inputarquivo.accept = '.txt'; // apenes arquivo de texto
inputarquivo.style.display = 'none';
document.body.appendChild(inputAquvo);

// funçao para procesar o arquivo selecionado
function 