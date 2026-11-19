const { test, expect } = require('@playwright/test');

async function registerAndLogin(page) {
  await page.goto('/');
  await page.getByRole('button', { name: 'Criar uma conta' }).click();
  await page.locator('#name').fill('Usuário de Teste');
  await page.locator('#email').fill('teste.taskflow@example.com');
  await page.locator('#password').fill('SenhaTeste123');
  await page.locator('#submit').click();
  await page.locator('#email').fill('teste.taskflow@example.com');
  await page.locator('#password').fill('SenhaTeste123');
  await page.locator('#submit').click();
  await expect(page.locator('#app')).toBeVisible();
}

test('cadastro, login inválido e login válido', async ({ page }) => {
  await page.goto('/');
  await page.locator('#email').fill('invalido@example.com');
  await page.locator('#password').fill('SenhaErrada123');
  await page.locator('#submit').click();
  await expect(page.locator('#msg')).toContainText('inválidos');
  await registerAndLogin(page);
});

test('criar, pesquisar, editar, mover e excluir tarefa; consultar relatório', async ({ page }) => {
  await registerAndLogin(page);
  await page.getByRole('button', { name: '+ Nova tarefa' }).click();
  await page.locator('#title').fill('Trabalho de Engenharia');
  await page.locator('#desc').fill('Entrega da disciplina');
  await page.locator('#due').fill('2026-12-10');
  await page.locator('#owner').fill('Mateus');
  await page.getByRole('button', { name: 'Salvar' }).click();
  await expect(page.locator('#board')).toContainText('Trabalho de Engenharia');

  await page.locator('#search').fill('Engenharia');
  await expect(page.locator('#board')).toContainText('Trabalho de Engenharia');
  await page.locator('#search').fill('');

  await page.getByRole('button', { name: 'Editar' }).click();
  await page.locator('#title').fill('Trabalho de Engenharia Atualizado');
  await page.getByRole('button', { name: 'Salvar' }).click();
  await expect(page.locator('#board')).toContainText('Trabalho de Engenharia Atualizado');

  await page.getByRole('button', { name: 'Iniciar' }).click();
  await expect(page.locator('#board')).toContainText('Em andamento');
  await page.getByRole('button', { name: 'Concluir' }).click();
  await expect(page.locator('#board')).toContainText('Concluído');

  await page.locator('#reports').click();
  await expect(page.locator('#report')).toBeVisible();
  await expect(page.locator('#stats')).toContainText('1');

  await page.locator('#boardNav').click();
  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: 'Excluir' }).click();
  await expect(page.locator('#board')).not.toContainText('Trabalho de Engenharia Atualizado');
});

test('validação de título obrigatório e layout mobile', async ({ page }) => {
  await registerAndLogin(page);
  await page.getByRole('button', { name: '+ Nova tarefa' }).click();
  await page.locator('#title').evaluate(el => el.removeAttribute('required'));
  await page.locator('#title').fill('');
  await page.getByRole('button', { name: 'Salvar' }).click();
  await expect(page.locator('#dialog')).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator('.board')).toBeVisible();
});
