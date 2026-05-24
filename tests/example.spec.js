// @ts-check
import { test, expect } from '@playwright/test';

//MUITAS INFORMAÇÕES SOBRE O PLAYWRIGHT VOCE ENCONTRA EM
//https://playwright.dev/docs/intro

//test.use({
//  viewport: {width: 1600, height: 1200},
//})

//test.use({
//  geolocation: { longitude: -24.1166, latitude: -46.6875},
//  permissions: ['geolocation'],
//})

test.beforeEach(async({page})=>{
  await page.goto('https://automationpratice.com.br/');
})

test('login', async ({ page }) => {

  const button = await page.getByRole("button", {name: 'Send Mail'})
  await button.scrollIntoViewIfNeeded()
  

  //para buscar um item que voce ainda nao sabe onde está
  //const texto = await page.waitForSelector('text = NEWSLETTER")
  //await texto.scrollIntoViewIfNeeded()

  await page.getByRole('link', { name: ' Login' }).click();

  await page.locator('#user').click();
  await page.locator('#user').fill('email@email.com');
  await page.screenshot({ path: 'screenshots/screenshot.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshots/screenshot3.png' });
  await page.screenshot({ path: 'screenshots/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
});

// test('login com sucesso 1 @login', async ({ page }) => {
//   await page.goto('https://automationpratice.com.br/');
  

//   await page.getByRole('link', { name: ' Login' }).click();
//   await page.locator('#user').click();
//   await page.locator('#user').fill('email@email.com');
//   await page.screenshot({ path: 'screenshots/screenshot.png' });
//   await page.locator('#password').click();
//   await page.locator('#password').fill('123456');
//   await page.locator('#password').screenshot({ path: 'screenshots/screenshot3.png' });
//   await page.screenshot({ path: 'screenshots/screenshot2.png' });
//   await page.getByRole('button', { name: 'login' }).click();
// });

// test('login com sucesso 2', async ({ page }) => {
//   await page.goto('https://automationpratice.com.br/');
  
//   await page.getByRole('link', { name: ' Login' }).click();

//   await page.locator('#user').click();
//   await page.locator('#user').fill('email@email.com');
//   await page.screenshot({ path: 'screenshots/screenshot.png' });
//   await page.locator('#password').click();
//   await page.locator('#password').fill('123456');
//   await page.locator('#password').screenshot({ path: 'screenshots/screenshot3.png' });
//   await page.screenshot({ path: 'screenshots/screenshot2.png' });
//   await page.getByRole('button', { name: 'login' }).click();
// });

test.afterEach(async({page})=>{
  //seu codigo
})

//ABAIXO VOCE VERA OS COMANDOS DE INSTALAÇÃO E EXPLICAÇÕES DE COMADOS NPX

/*
========================================
INSTALAÇÃO DO PLAYWRIGHT
========================================

1) Criar projeto Playwright
----------------------------------------

npm init playwright@latest

Cria:
- projeto Playwright
- dependências
- configuração
- exemplos de testes

========================================

2) Entrar na pasta do projeto
----------------------------------------

cd NOME_DO_PROJETO

Exemplo:
cd PLAY

========================================

3) Instalar browsers
----------------------------------------

npx playwright install

Instala:
- Chromium
- Firefox
- WebKit

========================================

4) Reinstalar browsers
----------------------------------------

npx playwright install --force

Usado quando:
- browser corrompe
- antivírus remove arquivos
- aparece:
  "Executable doesn't exist"

========================================

5) Verificar versão
----------------------------------------

npx playwright --version

========================================
*/


/*
========================================
PLAYWRIGHT - RESUMO DOS COMANDOS E ERROS
========================================

FRAMEWORK:
Playwright = framework de automação E2E (End-to-End).

========================================
COMANDOS NPX
========================================

1) Rodar todos os testes
----------------------------------------

npx playwright test

Executa:
- todos os arquivos .spec
- todos os browsers configurados
- execução paralela

Exemplo:
Running 9 tests using 4 workers

----------------------------------------

2) UI Mode
----------------------------------------

npx playwright test --ui

Abre interface visual do Playwright:
- executar testes clicando
- visualizar traces
- debug visual
- rerun
- logs

Obs:
A interface abre em outra janela/browser.

----------------------------------------

3) Debug Mode
----------------------------------------

npx playwright test --debug

Executa lentamente com inspector aberto.

Usado para:
- investigar erros
- analisar locators
- acompanhar execução passo a passo

----------------------------------------

4) Workers
----------------------------------------

npx playwright test --workers=1

Executa os testes em sequência.

Sem isso:
using 4 workers

Com isso:
using 1 worker

Usado para:
- debug
- evitar concorrência
- estabilizar testes

----------------------------------------

5) Instalar browsers
----------------------------------------

npx playwright install

Baixa:
- Chromium
- Firefox
- WebKit

Erro comum:
Executable doesn't exist

----------------------------------------

6) Reinstalar browsers
----------------------------------------

npx playwright install --force

Força reinstalação completa dos browsers.

Resolve:
- browsers corrompidos
- arquivos apagados pelo antivírus
- erros de WebKit/Firefox

----------------------------------------

7) Filtrar testes por nome/tag
----------------------------------------

ERRADO:
npx playwright test --group "@login"

Correto:
npx playwright test --grep "@login"

Executa apenas testes contendo:
@login

Exemplo:
test('@login usuário loga', async ({ page }) => {})

----------------------------------------

8) Abrir relatório HTML
----------------------------------------

npx playwright show-report

Mostra:
- screenshots
- timeline
- traces
- erros
- logs
- passos do teste

========================================
APIs / COMANDOS DENTRO DO TESTE
========================================

1) test()
----------------------------------------

test('login', async ({ page }) => {})

Cria um teste.

----------------------------------------

2) expect()
----------------------------------------

await expect(page).toHaveTitle(/Playwright/)

Assertion.
Verifica comportamento esperado.

Erro encontrado:
Expected: /Playwright/
Received: "QAZANDO Shop E-Commerce"

Motivo:
o título real da página era diferente.

----------------------------------------

3) page.goto()
----------------------------------------

await page.goto('https://site.com')

Abre uma página.

----------------------------------------

4) getByRole()
----------------------------------------

page.getByRole('link', { name: 'Login' })

Locator moderno baseado em acessibilidade.

Recomendado pelo Playwright.

----------------------------------------

5) locator()
----------------------------------------

page.locator('#user')

Seleciona elemento via CSS.

----------------------------------------

6) click()
----------------------------------------

await page.locator('#user').click()

Clica em elemento.

----------------------------------------

7) fill()
----------------------------------------

await page.locator('#password').fill('123456')

Preenche input.

----------------------------------------

8) scrollIntoViewIfNeeded()
----------------------------------------

await button.scrollIntoViewIfNeeded()

Faz scroll automático até o elemento.

Útil quando:
- botão está escondido
- elemento está fora da viewport

========================================
BROWSERS UTILIZADOS
========================================

1) Chromium
----------------------------------------

[chromium]

Baseado no Chrome.
Mais usado.

----------------------------------------

2) Firefox
----------------------------------------

[firefox]

Motor Gecko.

----------------------------------------

3) WebKit
----------------------------------------

[webkit]

Motor do Safari.

========================================
ERROS IMPORTANTES
========================================

1) Executable doesn't exist
----------------------------------------

Erro:
Executable doesn't exist

Motivo:
browser não instalado/corrompido.

Solução:
npx playwright install --force

----------------------------------------

2) No tests found
----------------------------------------

Erro:
No tests found

Motivo:
grep/tag não encontrou teste correspondente.

----------------------------------------

3) Playwright Test did not expect test() to be called here
----------------------------------------

Motivo:
comando executado fora da pasta do projeto.

ERRADO:
~/Downloads/PLAYWRIGHT

CORRETO:
~/Downloads/PLAYWRIGHT/PLAY

----------------------------------------

4) Target page, context or browser has been closed
----------------------------------------

Motivo:
browser fechou durante execução.

----------------------------------------

5) Test ended
----------------------------------------

Motivo:
teste foi interrompido:
- Ctrl+C
- fechamento do browser
- parada manual
- debug interrompido

----------------------------------------

6) locator.click: Test ended
----------------------------------------

O teste terminou enquanto a ação executava.

----------------------------------------

7) Slow test file
----------------------------------------

Playwright detectou teste muito lento.

========================================
O QUE FOI APRENDIDO
========================================

Já utilizado:
- execução paralela
- workers
- debug
- locators
- assertions
- browsers múltiplos
- HTML report
- grep/tag
- instalação de browsers
- scrolling
- inspector
- tracing básico

========================================
COMANDOS MAIS IMPORTANTES
========================================

npx playwright test

npx playwright test --debug

npx playwright test --ui

npx playwright install

npx playwright install --force

npx playwright show-report

npx playwright test --workers=1

npx playwright test --grep "@login"

========================================
*/