##  Sobre o projeto

Este repositório contém um pequeno projeto "to do list" feito como um exercício, usando HTML, CSS e TypeScript. É inspirado no jogo The Sims.

##  Tecnologias utilizadas

- **HTML** – Marcações estruturais do site;  
- **CSS** – Estilização e layout visual; 
- **TypeScript** – Interatividade.


## Funcionalidades
- **Lista de Receitas** – O usuário pode organizar comidas em duas listas: "Quero fazer" e "Já fiz";

- **Adicionar Receitas** – Campo de entrada permite digitar o nome de uma comida e adicioná-la a lista escolhida, com validação automática para **impedir itens duplicados** e **Verificar se o nome existe no arquivo comidas.json** ;

- **Remover Itens** – Cada item das listas possui um botão de remoção que exclui a comida da lista;

- **Seleção de Lista** – Um botão “Escolha uma opção” abre um menu suspenso para selecionar entre “Quero fazer” e “Já fiz”, atualizando o status atual;

- **Persistência Temporária** – As listas são mantidas em memória durante a execução;

- **Dados (JSON)** – – O arquivo comidas.json serve como “banco de dados base” com nomes válidos de comidas que podem ser adicionadas.

## Estrutura Modular (TypeScript)
- **Comida.ts** - define o tipo das comidas;

- **GerenciadorDeComidas.ts** - implementa a lógica de controle;

- **main.ts** conecta o código à interface HTML e lida com os eventos do usuário.


---

##  Estrutura do Projeto

```
📂 img/
   ├─ delete.png
   ├─ icone.png
   ├─ ListaDeReceitas.png
   └─ logo.png
📂 src/
   ├─ Comida.ts
   ├─ GerenciadorDeComidas.ts   
   └─ main.ts
📜 comidas.json  
📄 index.html    
📜 package-lock.json      
📜 package.json    
📑 style.css 
📜 tsconfig.json
 ```

## Screenshots

Escolhendo uma opção:
![Escolhendo uma opção](https://i.imgur.com/zUWAg4h.png)
Receita adicionada:
![Comida adicionada](https://i.imgur.com/m1VDxh0.png)
Escolhendo outra opção:
![Escolhendo outra opção](https://i.imgur.com/SYzRGpq.png)
Receita adicionada:
![Comida adicionada](https://i.imgur.com/VQaMlcD.png)
ERRO ao tentar colocar uma receita que já foi adicionada:
![ERRO ao repetir comida](https://i.imgur.com/ZMUVAKl.png)
ERRO ao tentar colocar uma receita que não está no arquivo comidas.json:
![ERRO ao colocar uma receita fora do json](https://i.imgur.com/tSasUU9.png)





## 🚀 Como rodar o projeto

### 1. Instale o Node a partir do Site do Node (Opcional) - Já irá instalar o NPM junto dele

### 2 Copiar arquivos pra pasta da sua escolha

### 3 Abrir a pasta no terminal

### 4. Instalar Servidor de testes

npm install -g serve

### 5. Instalar dependências

npm install

### 6. Gerar build de produção

npm run build

### 7. Rodar server

serve
