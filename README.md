# Richard Marlon Balestrim | Portfólio de QA

QA Tester freelancer em crowdtesting pela uTest, com experiência em testes funcionais e exploratórios. Formação em Engenharia de Qualidade de Software pela EBAC, Brasil.

Este portfólio demonstra pensamento crítico, estratégia de testes, análise de riscos, automação e qualidade de software. Os repositórios abaixo são projetos técnicos desenvolvidos durante a formação e em práticas independentes; não representam vínculos profissionais contratados. A atuação profissional em crowdtesting é apresentada separadamente no site.

### Detalhes
![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=richielmartillo&show_icons=true&theme=dark)](https://github.com/anuraghazra/github-readme-stats)

### Projetos

[![QA Portfolio](https://github-readme-stats.vercel.app/api/pin/?username=richielmartillo&repo=qa-portfolio&theme=dark)](https://github.com/richielmartillo/qa-portfolio)

### Automação web — Hub de Leitura · Interface

Validar os fluxos críticos do leitor, da autenticação à cesta.

- **Tipo:** E2E · funcional.
- **Cenários:** Cadastro e login; busca no catálogo; cesta e detalhes de livros; campos obrigatórios no contato.
- **Tecnologias:** Cypress, JavaScript, Faker.
- **Código:** [hub-de-leitura-testes-ui-cypress](https://github.com/richielmartillo/hub-de-leitura-testes-ui-cypress).

### Testes de API — Hub de Leitura · API REST

Verificar contratos de resposta e regras de usuários e livros.

- **Tipo:** API · positivo e negativo.
- **Cenários:** Autenticação por token; CRUD; filtros e paginação; e-mail inválido e título vazio.
- **Tecnologias:** Cypress, REST, JavaScript.
- **Código:** [hub-de-leitura-api-cypress](https://github.com/richielmartillo/hub-de-leitura-api-cypress).

### Testes unitários — Regras de cadastro sob teste

Validar regras isoladas de cadastro e os endpoints de uma API de usuários.

- **Tipo:** Unitário · integração de API.
- **Cenários:** Limites de idade, e-mail e usuário ativo; criação, consulta, atualização e exclusão com respostas de sucesso e erro.
- **Tecnologias:** Jest, Supertest, Express, Swagger.
- **Código:** [exercicio-js](https://github.com/richielmartillo/exercicio-js).

### Automação mobile — Android · Interações reais

Exercitar interações de uma aplicação Android com uma estrutura Page Object.

- **Tipo:** Mobile · funcional.
- **Cenários:** Login, formulários, swipe e drag; configuração Android com UiAutomator2.
- **Tecnologias:** Appium, WebdriverIO, Android, Allure.
- **Código:** [teste-wdio](https://github.com/richielmartillo/teste-wdio).

### Performance — Carga, estabilidade e limites

Investigar o comportamento da aplicação sob diferentes perfis de carga.

- **Tipo:** Carga · soak · spike · breakpoint.
- **Cenários:** Scripts com métricas, checks, thresholds, token dinâmico e relatórios de execução.
- **Tecnologias:** k6, JavaScript.
- **Código:** [modulo-22-k6-performance-tests](https://github.com/richielmartillo/modulo-22-k6-performance-tests).

### Performance — BlazeDemo · Jornada de reserva

Simular a jornada de reserva de voo com dados parametrizados.

- **Tipo:** Carga · fluxo transacional.
- **Cenários:** Origem e destino via CSV; seleção de voo, compra e confirmação da operação.
- **Tecnologias:** JMeter, CSV.
- **Código:** [jmeter-ebac](https://github.com/richielmartillo/jmeter-ebac).

### Integração contínua — Da execução à evidência

Integrar testes de interface à execução automatizada e à análise de evidências.

- **Tipo:** E2E · pipeline de CI.
- **Cenários:** Cadastro, login, catálogo e contato; pipeline Jenkins e geração de relatórios Allure.
- **Tecnologias:** Jenkins, Cypress, Allure, Cypress Cloud.
- **Código:** [hub-de-leitura-ui-cypress-allure](https://github.com/richielmartillo/hub-de-leitura-ui-cypress-allure).

## Práticas complementares

- [cypressAvancado](https://github.com/richielmartillo/cypressAvancado): repositório complementar de automação.
- [testes-unitarios-jest](https://github.com/richielmartillo/testes-unitarios-jest): repositório complementar de testes unitários.

Os desafios e estudos complementares exercitam raciocínio de testes, organização, tomada de decisão, automação e priorização por risco. Não são apresentados como experiência profissional contratada.

## Competências técnicas

| Categoria | Ferramentas e tecnologias |
| --- | --- |
| Automação web | Cypress · JavaScript · WebdriverIO |
| Testes de API | Postman · REST · Swagger |
| Testes unitários | Jest |
| Automação mobile | Appium · Android Studio · ADB · WebdriverIO |
| Performance | JMeter · k6 |
| CI/CD | Jenkins · GitHub Actions · Docker · Git · GitHub |
| Relatórios | Allure |
| Banco de dados | SQL · SQLite · MongoDB |

O quadro reúne o repertório técnico informado, sem atribuir resultados às ferramentas que não foram verificadas nos projetos. Não são publicados percentuais de cobertura, quantidades de testes ou métricas de desempenho neste portfólio.

## Verificação dos repositórios e pendências

Consulta realizada em 25/10/2026, por leitura dos READMEs, estruturas e arquivos relevantes no GitHub:

- `exercicio-js`: Jest e Supertest confirmados no `package.json`, `usuario.test.js` e `api.test.js`; regras de idade, e-mail e status ativo e testes CRUD da API.
- Performance: links incompletos substituídos pelos projetos k6 e JMeter confirmados. O projeto k6 contém scripts e relatórios; o JMeter contém plano `.jmx` e massa CSV.
- Mobile: `teste-wdio` contém configuração Android, dependências Appium/WebdriverIO e especificações de login, formulários, swipe e drag. A descrição anterior como automação web foi corrigida.
- CI: `hub-de-leitura-ui-cypress-allure` contém Jenkinsfile e documentação de integração com Jenkins, Cypress Cloud e Allure. Há também Jenkinsfile no projeto de UI e no mobile. A presença do pipeline não comprova o sucesso de uma execução atual.
- `testes-mobile-qa` e `qa-cypress-jenkins-ci` retornaram repositório vazio. Seus endereços originais são preservados neste registro: https://github.com/richielmartillo/testes-mobile-qa e https://github.com/richielmartillo/qa-cypress-jenkins-ci. Não são usados como projetos em destaque.
- GitHub Actions: a busca por workflows na conta não retornou evidência. Uso em projeto específico permanece pendente de confirmação.
- LinkedIn: endereço preservado do HTML original e informado pelo projeto; a titularidade e o acesso público não foram verificados de forma independente.
- Nenhum e-mail profissional foi encontrado nos arquivos locais. Nenhum endereço de e-mail foi criado.
- O endereço do site publicado será incluído apenas após confirmação de funcionamento e aprovação para publicação.

## Experiência, formação e idiomas

- **Experiência:** QA Tester Freelancer — uTest. Testes funcionais, exploratórios e identificação de defeitos em projetos reais de crowdtesting.
- **Formação:** Engenharia de Qualidade de Software — EBAC, Brasil.
- **Idiomas:** português e espanhol fluentes; inglês intermediário.
- **Interesse:** oportunidades profissionais remotas e internacionais.

## Executar localmente

Abra a pasta `qa-portfolio` no VS Code e use **Open with Live Server** no `index.html`. Não é necessário instalar dependências ou compilar.

Alternativamente, na pasta do repositório:

```bash
python -m http.server 5500
```

Acesse `http://localhost:5500`. O site usa caminhos relativos e é compatível com GitHub Pages. A publicação é uma etapa posterior, sujeita à aprovação do autor.

## Estrutura

```text
qa-portfolio/
├── index.html       # Conteúdo semântico e projetos acessíveis sem JavaScript
├── styles.css       # Identidade visual e layouts responsivos
├── script.js        # Menu, filtros, digitação e chuva digital
├── README.md
└── ANALISE.md       # Diagnóstico e registro de validação
```

## Interface e acessibilidade

Identidade tecnológica inspirada em terminais e painéis industriais, com preto profundo, verde Matrix, vermelho industrial e cinza metálico. Não utiliza personagens, logotipos ou imagens de franquias.

- Layout responsivo com Grid e Flexbox; navegação por teclado e link de salto.
- Menu mobile com estado expandido, fechamento por Escape e retorno de foco.
- Conteúdo principal disponível sem JavaScript; filtros são melhoria progressiva.
- Animações respeitam `prefers-reduced-motion`; chuva digital limitada e pausada fora da área visível e em abas inativas.
- Botão para pausar os efeitos animados.
- Sem bibliotecas de interface, fontes remotas ou dependências de execução.
- Português implementado com `lang="pt-BR"`. Uma versão espanhola poderá reutilizar a estrutura semântica e os mesmos estilos; não há seletor até que a tradução integral seja implementada.

## Boas práticas e evolução

Organização por objetivo e tipo de teste, descrições baseadas em evidências, separação entre experiência e formação, código simples e revisão de links. O portfólio continuará recebendo novos projetos e melhorias, preservando a clareza técnica e a análise de risco.

## Contato

- [GitHub](https://github.com/richielmartillo)
- [LinkedIn](https://www.linkedin.com/in/richard-marlon-balestrim)

## Créditos

Projetos desenvolvidos durante a formação em Engenharia de Qualidade de Software da EBAC e em estudos independentes. Autoria do portfólio: Richard Marlon Balestrim.
