# Agrinho 2026 — Agro forte, futuro sustentável
## Documentação Técnica do Projeto

---

### Visão Geral

Este projeto é um site front-end completo desenvolvido para o **Concurso Agrinho 2026**, cuja temática oficial é "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente". O site foi construído com **HTML5 semântico, CSS3 puro e JavaScript vanilla** — sem nenhum framework externo — seguindo padrões modernos de acessibilidade e internacionalização.

---

### Estrutura de Arquivos

```
agrinho2026/
├── index.html          → Estrutura semântica completa do site
├── style.css           → Estilos, temas e responsividade
├── script.js           → Lógica de idiomas, acessibilidade e interações
├── README.md           → Esta documentação
├── imagens/
│   ├── drone.jpg       → Foto: drone agrícola de precisão
│   ├── irrigacao.jpg   → Foto: sistema de irrigação por gotejamento
│   └── solar.jpg       → Foto: painéis solares em propriedade rural
└── videos/
    └── projeto.mp4     → Vídeo: agronegócio sustentável (Pexels)
```

> **Nota sobre mídias:** As pastas `imagens/` e `videos/` devem ser preenchidas com os arquivos reais antes da publicação. O site exibe ícones SVG de fallback quando as imagens não são encontradas, e o player de vídeo exibe uma mensagem de fallback em caso de ausência do arquivo.

---

### Arquitetura de Acessibilidade

#### Barra de Acessibilidade Superior Fixa

A barra é um elemento `<div>` com `position: fixed` e `z-index: 1000`, posicionada acima do cabeçalho sticky. Ela contém quatro grupos funcionais:

- **Idioma:** botões PT, EN, ES que chamam `mudarIdioma(lang)`.
- **Visual:** botões que chamam `mudarTema('padrao' | 'branco' | 'preto')`.
- **Texto:** botões A+ e A− que chamam `aumentarFonte()` e `diminuirFonte()`.
- **Áudio:** botão que chama `alternarNarracao()` e alterna entre dois estados.

O cabeçalho principal (`position: sticky`) usa `top: 38px` para se posicionar imediatamente abaixo da barra de acessibilidade, evitando sobreposição.

---

### Internacionalização (i18n) — Sistema Trilingue

O sistema de tradução foi implementado manualmente com um objeto JavaScript chamado `traducoes`, que é um dicionário aninhado com três chaves principais: `pt`, `en` e `es`.

#### Como funciona

1. Cada elemento HTML traduzível recebe o atributo `data-i18n="chave"`.
2. Campos de formulário com placeholder recebem `data-i18n-placeholder="chave"`.
3. A função `aplicarTraduzoes(lang)` percorre todos esses elementos com `querySelectorAll('[data-i18n]')` e substitui o `textContent` de cada um pelo valor correspondente no dicionário.
4. O atributo `lang` da tag `<html>` também é atualizado para `pt-BR`, `en-US` ou `es-ES`, o que instrui leitores de tela e ferramentas de acessibilidade sobre a língua do conteúdo.
5. O título da página (`document.title`) é atualizado via a chave `page_title`.
6. O contador de apoios usa um template com `{N}` como placeholder, substituído por `String.replace('{N}', totalApoios)` a cada atualização.

---

### Temas Visuais e Sistema de Cores

A paleta de cores é definida inteiramente por **variáveis CSS** no seletor `:root`. Isso permite que os três temas sejam trocados apenas adicionando ou removendo classes no `<body>`:

- **Tema Padrão:** Verdes orgânicos (`#2e7d32`, `#1b5e20`), azul-céu (`#0277bd`) e amarelo-sol (`#f9a825`) sobre fundo verde muito claro (`#f1f8e9`).
- **Tema Acessível L/W** (classe `tema-branco`): Fundo branco puro (`#ffffff`), texto preto puro (`#000000`). Contraste mínimo de 7:1 para conformidade com WCAG 2.1 AA+.
- **Tema Acessível D/B** (classe `tema-preto`): Fundo preto puro (`#000000`), texto e elementos em amarelo-ouro (`#ffee58`). Contraste extremo para usuários com baixa visão.

---

### Dimensionador de Fonte (REM Dinâmico)

O zoom de texto funciona ajustando o `font-size` do elemento `html` via `document.documentElement.style.fontSize`. Como todos os tamanhos de fonte no CSS usam a unidade `rem` (que é relativa ao `font-size` do `html`), aumentar ou diminuir esse valor único causa um efeito de "zoom tipográfico" em cascata por todo o site.

- Tamanho inicial: 16px
- Passo por clique: 2px
- Mínimo: 10px | Máximo: 26px

---

### API de Síntese de Voz (Narrador)

A narração usa a **Web Speech API** nativa dos navegadores modernos, especificamente a interface `SpeechSynthesis`. O processo é:

1. O texto é capturado com `element.innerText` do elemento `<main id="conteudo-principal">`.
2. Um objeto `SpeechSynthesisUtterance` é criado com esse texto.
3. O atributo `lang` da fala é definido dinamicamente (`pt-BR`, `en-US` ou `es-ES`) com base no idioma ativo na variável `idiomaAtivo`.
4. A função `window.speechSynthesis.speak(fala)` inicia a narração.
5. `window.speechSynthesis.cancel()` para a narração imediatamente.
6. Os eventos `onend` e `onerror` garantem que o estado da interface seja sempre sincronizado com a realidade da API.

> A API é offline e não requer conexão com internet.

---

### Contador de Apoios

A variável `totalApoios` persiste durante a sessão (enquanto a página não for recarregada). Ao clicar no botão, `incrementarApoio()` incrementa o contador e chama `atualizarContadorApoios()`, que monta a string de exibição a partir do template do idioma ativo. A mudança de idioma não zera o contador pois `totalApoios` é uma variável global independente das traduções.

---

### Validação de Formulário

A função `enviarFormulario()` realiza validação no lado do cliente (front-end):

1. Captura os valores dos campos com `element.value.trim()` para eliminar espaços em branco.
2. Se Nome ou Mensagem estiverem vazios, exibe a mensagem de erro correspondente no idioma ativo dentro de um `<span class="form-erro">` posicionado abaixo do campo.
3. O foco é movido para o primeiro campo com erro via `element.focus()`.
4. Se tudo estiver válido, exibe uma mensagem de sucesso em verde e limpa os campos.
5. A mensagem de sucesso some automaticamente após 6 segundos via `setTimeout`.

---

### Responsividade

O layout usa **Flexbox** como sistema principal de grid. As Media Queries cobrem três breakpoints:

- `max-width: 900px` — Tablet: pilares e itens de tecnologia empilham verticalmente.
- `max-width: 640px` — Mobile: menu colapsa para hambúrguer, seções recebem padding reduzido, botões do hero empilham.
- `max-width: 380px` — Mobile pequeno: barra de acessibilidade com fontes e espaçamentos menores.

---

### Animação de Scroll

A função `configurarAnimacaoScroll()` usa a **Intersection Observer API** para detectar quando seções e cards entram na viewport e aplicar a classe `.visivel`, que ativa uma transição CSS de `opacity` e `translateY`. O observer se desregistra após a primeira visibilidade (`unobserve`), evitando processamento desnecessário. A animação é completamente desativada para usuários com `prefers-reduced-motion: reduce` ativo no sistema operacional.

---

### Créditos de Mídia

- **Vídeo:** Fernando Sánchez Aranguren via Pexels
- **Fotos:** Pexels (drone agrícola, irrigação por gotejamento, energia solar rural)

---

### Compatibilidade

Testado e funcional nos navegadores: Google Chrome 120+, Mozilla Firefox 121+, Microsoft Edge 120+, Safari 17+ e Opera 106+. A narração por voz pode não estar disponível em todos os navegadores mobile — nesses casos, um `alert()` informa o usuário.

---

*Projeto desenvolvido para o Concurso Agrinho 2026 — SENAR Paraná. Fins educativos.*
