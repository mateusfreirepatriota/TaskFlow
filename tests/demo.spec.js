const { test, expect } = require('@playwright/test');

test('DEMO-8MIN - demonstração guiada do TaskFlow', async ({ page }) => {
  const scene = async (title, detail) => {
    await page.evaluate(({title, detail}) => {
      let box = document.getElementById('demo-caption');
      if (!box) {
        box = document.createElement('div');
        box.id = 'demo-caption';
        Object.assign(box.style, {position:'fixed',left:'3%',right:'3%',bottom:'18px',zIndex:'999999',padding:'18px 24px',background:'rgba(20,35,58,.94)',color:'#fff',borderRadius:'12px',font:'16px Arial',boxShadow:'0 8px 30px #0005'});
        document.body.appendChild(box);
      }
      box.innerHTML = '<strong style="font-size:20px">' + title + '</strong><div style="margin-top:7px">' + detail + '</div>';
    }, {title, detail});
    await page.waitForTimeout(48000);
  };

  await page.goto('/');
  await scene('TaskFlow | Demonstração', 'Sistema de gerenciamento de tarefas acadêmicas. Nesta demonstração são apresentados os recursos disponíveis no protótipo.');
  await page.getByRole('button', {name:'Criar uma conta'}).click();
  await page.locator('#name').fill('Usuário de Demonstração');
  await page.locator('#email').fill('demo.taskflow@example.com');
  await page.locator('#password').fill('TaskFlowDemo2026');
  await scene('Cadastro de usuário', 'Preenchimento do nome, e-mail e senha para criar uma conta local de demonstração.');
  await page.locator('#submit').click();
  await page.locator('#email').fill('demo.taskflow@example.com');
  await page.locator('#password').fill('senha-incorreta');
  await page.locator('#submit').click();
  await scene('Validação de acesso', 'A aplicação rejeita credenciais incorretas e apresenta uma mensagem de erro.');
  await page.locator('#email').fill('demo.taskflow@example.com');
  await page.locator('#password').fill('TaskFlowDemo2026');
  await page.locator('#submit').click();
  await expect(page.locator('#app')).toBeVisible();
  await scene('Login realizado', 'Após a autenticação local, o usuário acessa o quadro principal.');
  await page.getByRole('button', {name:'+ Nova tarefa'}).click();
  await page.locator('#title').fill('Preparar trabalho acadêmico');
  await page.locator('#desc').fill('Organizar conteúdo e revisar a entrega.');
  await page.locator('#due').fill('2026-12-10');
  await page.locator('#owner').fill('Usuário de Demonstração');
  await scene('Cadastro de tarefa', 'A tarefa recebe título, descrição, prazo, responsável e situação.');
  await page.getByRole('button', {name:'Salvar'}).click();
  await page.locator('#search').fill('trabalho');
  await scene('Pesquisa de tarefas', 'A busca filtra os cartões conforme o texto digitado.');
  await page.locator('#search').fill('');
  await page.getByRole('button', {name:'Editar'}).click();
  await page.locator('#title').fill('Trabalho acadêmico revisado');
  await page.getByRole('button', {name:'Salvar'}).click();
  await scene('Edição de tarefa', 'Os dados de uma tarefa existente podem ser alterados e salvos.');
  await page.getByRole('button', {name:'Iniciar'}).click();
  await page.getByRole('button', {name:'Concluir'}).click();
  await scene('Fluxo Kanban', 'A tarefa avança de A fazer para Em andamento e depois para Concluído.');
  await page.locator('#reports').click();
  await scene('Relatórios', 'O painel apresenta totais de tarefas e percentuais por situação.');
  await page.locator('#boardNav').click();
  page.once('dialog', d => d.accept());
  await page.getByRole('button', {name:'Excluir'}).click();
  await scene('Exclusão e encerramento', 'O sistema solicita confirmação e remove a tarefa selecionada. Fim da demonstração.');
});
