import { gerenciadorDeComidas } from './GerenciadorDeComidas.js';

// Elementos do HTML
const entradaComida = document.getElementById('entrada-comida') as HTMLInputElement;
const botaoAdicionar = document.getElementById('botao-adicionar') as HTMLButtonElement;
const listaQuero = document.getElementById('lista-comidas-quero') as HTMLUListElement;
const listaJa = document.getElementById('lista-comidas-ja') as HTMLUListElement;

const botaoEscolher = document.getElementById('botao-escolher') as HTMLButtonElement;
const divOpcoes = document.getElementById('opcoes') as HTMLDivElement;
const botaoQuero = document.getElementById('opcao-quero') as HTMLButtonElement;
const botaoJa = document.getElementById('opcao-ja') as HTMLButtonElement;

// Valor inicial do "escolher" começa nulo
let statusSelecionado: null | 'quero' | 'ja' = null;

// Inicializando o botão com "ESCOLHA"
botaoEscolher.textContent = 'Escolha uma opção';

// -------------------- Funções --------------------

// Renderiza a lista de comidas
function renderizarLista(
  comidas: { id: number; nome: string }[],
  container: HTMLUListElement,
  removerFunc: (id: number) => void
): void {
  container.innerHTML = '';

  comidas.forEach(comida => {
    const item = document.createElement('li');
    const nomeSpan = document.createElement('span');
    nomeSpan.textContent = comida.nome;
    item.appendChild(nomeSpan);

    const botaoRemover = document.createElement('button');
    const img = document.createElement('img');
    img.src = '../img/delete.png';
    img.alt = 'Remover';
    img.style.width = '15px';
    img.style.height = '20px';
    botaoRemover.appendChild(img);

    botaoRemover.addEventListener('click', () => {
      removerFunc(comida.id);
      renderizarComidas();
    });

    item.appendChild(botaoRemover);
    container.appendChild(item);
  });
}

// Renderiza as duas listas
function renderizarComidas(): void {
  renderizarLista(
    gerenciadorDeComidas.obterComidas(),
    listaQuero,
    gerenciadorDeComidas.removerComida.bind(gerenciadorDeComidas)
  );

  renderizarLista(
    gerenciadorDeComidas.obterComidasJa(),
    listaJa,
    gerenciadorDeComidas.removerComidaJa.bind(gerenciadorDeComidas)
  );
}

// Adiciona nova comida
async function adicionarNovaComida(): Promise<void> {
  const nome = entradaComida.value.trim();
  if (!nome) return;

  // Valida se a comida existe no JSON
  const response = await fetch("comidas.json");
  const listaJson: string[] = await response.json();
  const listaLower = listaJson.map(item => item.toLowerCase());

  if (!listaLower.includes(nome.toLowerCase())) {
    alert("Comida não encontrada");
    return;
  }

  let mensagem: string | null = null;
  if (statusSelecionado === 'quero') {
    mensagem = gerenciadorDeComidas.adicionarComida(nome);
  } else if (statusSelecionado === 'ja') {
    mensagem = gerenciadorDeComidas.adicionarComidaJa(nome);
  } else {
    alert("Escolha primeiro 'Quero fazer' ou 'Já fiz'");
    return;
  }

  if (mensagem) alert(mensagem);
  entradaComida.value = '';
  renderizarComidas();
}

// -------------------- Eventos --------------------

// Botão adicionar
botaoAdicionar.addEventListener('click', adicionarNovaComida);
entradaComida.addEventListener('keypress', e => {
  if (e.key === 'Enter') adicionarNovaComida();
});

// Dropdown escolher
botaoEscolher.addEventListener('click', () => {
  divOpcoes.style.display = divOpcoes.style.display === 'block' ? 'none' : 'block';
});

// Seleciona "Quero fazer"
botaoQuero.addEventListener('click', () => {
  statusSelecionado = 'quero';
  botaoEscolher.textContent = 'Quero fazer';
  divOpcoes.style.display = 'none';
});

// Seleciona "Já fiz"
botaoJa.addEventListener('click', () => {
  statusSelecionado = 'ja';
  botaoEscolher.textContent = 'Já fiz';
  divOpcoes.style.display = 'none';
});

// Fecha se clicar fora
window.addEventListener('click', e => {
  if (!botaoEscolher.contains(e.target as Node) && !divOpcoes.contains(e.target as Node)) {
    divOpcoes.style.display = 'none';
  }
});

// Inicialização
renderizarComidas();
