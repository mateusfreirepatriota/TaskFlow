# TaskFlow — Iteração 2

Integrantes: Mateus Freire Patriota e Caio Henrique Hahnemann de Souza Kraetze.

## Funcionalidades
Cadastro e autenticação demonstrativa; criação, edição e exclusão de tarefas; prazos e responsáveis; quadro Kanban (A fazer, Em andamento e Concluído); pesquisa; relatórios de totais e distribuição percentual.

## Tecnologias
HTML5, CSS3 e JavaScript ES6. Persistência local via localStorage e resumo SHA-256 via Web Crypto API.

## Requisitos
Navegador atualizado. Para servidor local, Node.js 18+ e npm. Não é necessário banco de dados ou serviço externo.

## Obter e executar
    git clone https://github.com/mateusfreirepatriota/TaskFlow.git
    cd TaskFlow
    git checkout iteracao2
Abra index.html no navegador. Alternativamente, execute:
    npx http-server . -p 4173 -c-1
Acesse http://localhost:4173. O npx poderá baixar temporariamente o pacote http-server.

## Utilização
1. Selecione Criar uma conta e informe nome, e-mail e senha.
2. Entre com as credenciais.
3. Clique em Nova tarefa e informe título, descrição, prazo, responsável e situação.
4. Use Editar, Excluir, Iniciar e Concluir nos cartões.
5. Use a busca para localizar atividades.
6. Acesse Relatórios para consultar totais e percentuais.
7. Clique em Sair para encerrar a sessão.

## Arquivos
index.html (interface), styles.css (estilos responsivos), app.js (regras e persistência), docs/iteracao2.md (registro da iteração).

## Testes manuais
Cadastro; login válido e inválido; CRUD de tarefas; prazos e responsáveis; movimentação no Kanban; pesquisa; relatório; responsividade.

## Segurança e limitações
Protótipo acadêmico executado no navegador. Os dados ficam no dispositivo e não sincronizam entre computadores. O resumo SHA-256 no cliente é demonstrativo, não substitui autenticação de produção. Um serviço real requer servidor, HTTPS, banco de dados, hash de senha com salt e fator de custo (Argon2id/bcrypt), sessões seguras e validação no servidor. Não utilize senhas reais.

## Requisitos contemplados
RF01 autenticação demonstrativa; RF02 gerenciamento de tarefas; RF03 prazos e responsáveis; RF04 indicadores visuais; RNF01 interface responsiva; RNF02 arquivos estáticos leves; RNF03 resumo criptográfico local com limitações documentadas.

GitHub: https://github.com/mateusfreirepatriota/TaskFlow
Trello: https://trello.com/b/uMpWrK0t/meu-quadro-do-trello
