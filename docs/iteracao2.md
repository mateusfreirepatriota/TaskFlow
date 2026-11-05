# Iteração 2 — Implementação

A segunda iteração apresenta um protótipo web responsivo para organização de tarefas acadêmicas.

## Funcionalidades implementadas
- Cadastro e autenticação demonstrativa por e-mail e senha.
- Criação, edição e exclusão de tarefas.
- Definição de título, descrição, prazo e responsável.
- Quadro Kanban com A fazer, Em andamento e Concluído.
- Movimentação das tarefas entre colunas.
- Pesquisa de tarefas.
- Relatórios com totais e distribuição percentual.

## Tecnologias
HTML5, CSS3 e JavaScript ES6. Persistência via localStorage e resumo SHA-256 via Web Crypto API.

## Execução
Abra index.html no navegador ou execute npx http-server . -p 4173 -c-1 e acesse http://localhost:4173. Consulte o README para as instruções detalhadas.

## Limitações
Protótipo acadêmico local, sem servidor, banco remoto ou sincronização entre dispositivos. O resumo SHA-256 no cliente é demonstrativo e não substitui autenticação de produção.
