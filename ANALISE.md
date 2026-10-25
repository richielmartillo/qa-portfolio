# Análise e validação do portfólio

## Diagnóstico anterior às alterações

Leitura integral de README.md, index.html e script.js concluída antes de editar. Não havia styles.css, embora o HTML o referenciasse (referência quebrada).

- README com erros ortográficos, repetições, árvore de pastas que não representava o checkout e dois links `https://github.com//`.
- HTML com dez projetos, enquanto o README descrevia cinco categorias e apenas três repositórios válidos. A unidade apontava para um projeto diferente do README.
- O card teste-wdio descrevia automação web; a configuração e as especificações remotas correspondem a Android.
- Repositórios mobile e Jenkins apresentados como trabalhos completos estavam vazios.
- Ausência do CSS impedia verificar o layout responsivo original e o tratamento visual de foco e contraste.
- Menu sem aria-controls, fechamento por Escape ou retorno de foco. Não havia suporte explícito a movimento reduzido.
- HTML já usava landmarks e link de salto; esses recursos foram preservados.
- Fonte remota removida para reduzir dependências de rede. Nenhum e-mail constava nos arquivos locais.
- A experiência uTest e a formação precisavam de seções distintas e contextualização dos projetos acadêmicos.

## Alterações

HTML semântico com apresentação, sobre, projetos, competências, experiência/formação e contato. CSS responsivo com identidade industrial, Grid/Flexbox e foco visível. Cards estáticos com objetivos, cenários, tipos e tecnologias; filtros progressivos em JavaScript. Chuva Canvas discreta, limitada a aproximadamente 12 atualizações por segundo, resolução limitada, pausa fora de tela e em aba inativa. Digitação decorativa sem anúncios repetitivos a leitores de tela. Controle para pausar efeitos e preferência de movimento reduzido respeitada.

README reorganizado com projetos confirmados e pendências explícitas. Nenhum percentual, data profissional, certificação ou resultado foi criado. Não há seletor de idioma sem tradução.

## Fontes

Os links dos repositórios no README apontam para as fontes consultadas. Foram lidos os READMEs dos sete projetos em destaque; também foram consultados package.json e testes do exercicio-js, package.json e diretórios config/test/specs do mobile, diretórios das suítes Cypress e scripts/relatórios do k6. As árvores remotas confirmam o plano JMeter e Jenkinsfiles. Nenhuma suíte desses repositórios externos foi executada nesta tarefa. GitHub Actions não foi confirmado pela busca; ausência de resultados não prova ausência em toda a conta.

LinkedIn preservado do projeto original, sem confirmação independente de acesso ou titularidade. Links de repositórios confirmados pelo conector GitHub; repositórios vazios documentados sem destaque.

## Validação executada

- `node --check script.js`: aprovado.
- `git diff --check`: aprovado; aviso de normalização LF/CRLF do Git não é erro de conteúdo.
- Auditoria HTML: IDs únicos, âncoras resolvidas, referências a CSS/JS existentes, sete cards e nenhum link vazio ou placeholder.
- Servidor HTTP local temporário: index.html, styles.css e script.js retornaram 200 com tipos de conteúdo adequados. Servidor encerrado após a verificação.
- Execução isolada do JavaScript com DOM simulado: menu, Escape, retorno de foco, filtro mobile, restauração de todos os projetos e movimento reduzido aprovados. Esse teste não equivale a execução em navegador.
- Inspeção do CSS: breakpoints em 1050, 780 e 520 px, grades flexíveis, quebra de nomes de repositórios e menu progressivo.

## Limites e revisão visual pendente

A ferramenta de controle do Chrome falhou ao capturar a janela minimizada. Não foi possível verificar renderização real, tamanhos de viewport, animação Canvas, console do navegador ou fazer auditoria de acessibilidade automatizada. Não se afirma aprovação visual ou ausência de erros no console. Para revisar no Live Server, usar desktop, tablet e mobile (por exemplo, 1440, 768 e 390 px), Tab/Shift+Tab, Escape, filtros, pausa de efeitos e preferência por movimento reduzido. Confirmar o perfil LinkedIn manualmente.

Todos os arquivos foram alterados somente neste repositório. Nenhum commit, push ou publicação foi realizado; o histórico Git foi preservado.

