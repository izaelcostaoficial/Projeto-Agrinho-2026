# Agrinho 2026 — Agro Forte, Futuro Sustentavel

Projeto educativo criado para o **Concurso Agrinho 2026 — SENAR Parana**, pelo **Colegio Estadual do Parana**.

O tema central e o equilibrio entre a forca do agronegocio brasileiro e a preservacao do meio ambiente. O site e 100% estatico (HTML, CSS e JavaScript puro), sem dependencia de servidores, frameworks ou bibliotecas externas, tornando-o totalmente funcional em modo offline e compativel com hospedagem gratuita no **GitHub Pages**.

---

## Estrutura de Arquivos

```
/
├── index.html          Estrutura semantica do site
├── style.css           Estilos, temas e responsividade
├── script.js           Logica de idioma, acessibilidade e interacao
├── README.md           Esta documentacao
├── imagens/
│   ├── drone.jpg       Foto de drone agricola (Pexels)
│   ├── irrigacao.jpg   Foto de irrigacao por gotejamento (Pexels)
│   └── solar.jpg       Foto de energia solar rural (Pexels)
└── videos/
    └── projeto.mp4     Video do agronegocio sustentavel (Pexels)
```

> **ATENCAO — PASTA DE VIDEO:** A pasta deve se chamar `videos` (sem acento, tudo minusculo). O GitHub Pages e case-sensitive e trata URLs com caracteres especiais como acentos de forma inconsistente entre sistemas operacionais. O caminho `videos/projeto.mp4` funciona corretamente tanto online (GitHub Pages) quanto offline (arquivo local no computador).

---

## Engenharia de Acessibilidade Nativa

Todo o sistema de acessibilidade foi construido com APIs nativas do navegador, sem nenhuma biblioteca externa. Cada recurso funciona tanto online quanto offline.

---

### 1. Sistema Multi-Idioma (PT / EN / ES)

O dicionario de traducoes vive inteiramente dentro do arquivo `script.js`, na variavel `TRADUCOES`. Cada idioma tem um objeto com todas as chaves de texto do site, incluindo barra de acessibilidade, navegacao, secoes de conteudo, legendas de fotos, placeholders de formulario e rodape.

Ao clicar em um botao de idioma (PT, EN ou ES), a funcao `mudarIdioma()` e chamada. Ela percorre um mapa declarativo chamado `MAPA_DOM`, que associa cada chave do dicionario ao ID exato do elemento HTML. Para cada entrada desse mapa, o script localiza o elemento pelo ID, verifica a propriedade de destino (`textContent`, `innerHTML` ou `placeholder`) e aplica o texto traduzido. Isso garante que absolutamente todo o conteudo visivel do site seja atualizado, incluindo os proprios botoes da barra de acessibilidade.

O atributo `lang` do elemento `<html>` tambem e atualizado (`pt-BR`, `en-US` ou `es-ES`), o que melhora a pronuncia dos leitores de tela nativos do sistema operacional.

---

### 2. Temas Visuais (Padrao / Alto Contraste Claro / Alto Contraste Escuro)

O sistema de temas usa variaveis CSS declaradas no seletor `:root`. O tema padrao tem fundo verde-claro (`#f1f8e9`) com texto quase-preto (`#212121`). O tema L/W (claro/branco) substitui as variaveis por valores de maximo contraste com fundo branco puro e texto preto puro. O tema D/B (escuro/preto) usa fundo preto com texto e elementos em amarelo-neon (`#ffee58`), seguindo as diretrizes WCAG para usuarios com deficiencia visual severa.

A troca de tema e feita adicionando ou removendo as classes `tema-branco` e `tema-preto` do elemento `body`. O CSS cascateia automaticamente, sobrescrevendo as variaveis do `:root` sem precisar tocar em nenhum elemento individualmente.

---

### 3. Dimensionador de Fonte (A+ / A-)

O tamanho de fonte e controlado pela propriedade `font-size` do elemento `html`, que serve como base para todas as unidades `rem` do site. Ao clicar em A+, o JavaScript aumenta essa base em 2px (ate o limite de 26px). Ao clicar em A-, diminui em 2px (ate o minimo de 10px). Como todo o site usa `rem` nas medidas de texto e espacamentos relevantes, o efeito de zoom e propagado automaticamente para todos os elementos, sem excecao.

---

### 4. Narrador de Tela (Web Speech API) — Correcao de Sotaque Espanhol

O narrador usa a `SpeechSynthesisUtterance`, uma API nativa disponivel nos navegadores modernos Chrome, Edge, Firefox e Safari.

#### Problema corrigido: travamento de fila e sotaque errado

O motor `window.speechSynthesis` acumula utterances em fila. Ao mudar de idioma sem limpar essa fila, o navegador pode:

- Ignorar silenciosamente a nova solicitacao de fala.
- Manter o sotaque do idioma anterior (o portugues contaminava o espanhol).
- Entrar em estado de travamento sem falar nada.

**Solucao implementada:** antes de qualquer chamada a `.speak()`, o codigo executa obrigatoriamente `window.speechSynthesis.cancel()`. Isso limpa o canal de audio e garante que a nova utterance seja processada do zero.

#### Configuracao rigorosa por idioma

| Idioma | `.lang`  | `.rate` | Motivo                                                           |
|--------|---------|---------|------------------------------------------------------------------|
| PT     | `pt-BR` | `0.92`  | Velocidade natural para portugues brasileiro                     |
| EN     | `en-US` | `0.92`  | Velocidade natural para ingles americano                         |
| ES     | `es-ES` | `0.90`  | Ligeiramente mais lenta para fonetica espanhola sem contaminacao |

O codigo BCP-47 `es-ES` e o unico aceito de forma consistente pelo Chrome, Edge e Safari em todas as plataformas para espanhol. Usar apenas `es` sem sufixo faz o motor usar a voz errada ou recusar silenciosamente.

Todos os textos do dicionario espanhol foram escritos sem caracteres acentuados (sem tildes, enes ou cedilhas) para evitar falhas de codificacao na sintese de voz em sistemas operacionais que interpretam mal a acentuacao UTF-8.

---

### 5. Video Local no GitHub Pages — Correcao de Caminho

#### Problema corrigido: acento na pasta

O GitHub Pages e case-sensitive e trata URLs com caracteres especiais (como o acento em `vídeos`) de forma inconsistente entre sistemas operacionais. No Windows, o sistema de arquivos ignora o acento; no Linux (onde rodam os servidores do GitHub), a pasta `vídeos` e diferente de `videos`. Isso faz o video funcionar localmente no Windows mas falhar no GitHub Pages.

**Solucao implementada:** a pasta foi renomeada para `videos` (sem acento, tudo minusculo) e o caminho no HTML foi atualizado para `videos/projeto.mp4`.

#### Atributos obrigatorios no elemento `<video>`

```html
<video
  controls
  muted
  autoplay
  loop
  playsinline
  preload="auto"
  style="pointer-events: auto;">
```

| Atributo              | Motivo                                                                             |
|-----------------------|------------------------------------------------------------------------------------|
| `muted`               | Obrigatorio para autoplay funcionar no Chrome, Safari e Edge (politica anti-spam)  |
| `autoplay`            | Inicia o video automaticamente quando a pagina carrega                             |
| `loop`                | Reproduz em loop continuo                                                          |
| `playsinline`         | Impede que o iOS abra o video em tela cheia automaticamente                       |
| `preload="auto"`      | Forca o pre-carregamento do video mesmo em conexoes lentas ou GitHub Pages         |
| `pointer-events: auto`| Garante que os controles nativos do browser respondam a cliques/toques             |

---

### 6. Prevencao de Duplicacao de Imagens

Na secao de Tecnologias, as imagens (`drone.jpg`, `irrigacao.jpg`, `solar.jpg`) ficam dentro de tags `<figure>` e nunca sao tocadas pelo JavaScript. O script atualiza apenas elementos de texto com IDs dedicados:

- `drone-text-span` — `<span>` dentro do `<p>` de descricao
- `irri-text-span` — `<span>` dentro do `<p>` de descricao
- `solar-text-span` — `<span>` dentro do `<p>` de descricao

Esses spans usam exclusivamente `.textContent`, que nunca reescreve o HTML interno de nos pais. Isso garante que a troca de idioma nunca interfira no `src` das imagens nem apague ou duplique as tags `<img>`.

---

### 7. Sincronizacao Total de IDs e Event Listeners

Todos os doze botoes interativos (idioma, tema, fonte, narracao, hamburger, apoio, enviar) tem seus event listeners registrados na funcao `registrarEventListeners()`, chamada uma unica vez no evento `DOMContentLoaded`. Nenhum atributo `onclick` inline e usado no HTML, eliminando qualquer possibilidade de conflito entre HTML e script.

---

### 8. Formulario de Contato

O formulario valida os campos Nome e Mensagem antes de processar o envio. As mensagens de erro e sucesso sao exibidas em elementos com `aria-live="polite"`, garantindo que leitores de tela anunciem o resultado sem interromper o fluxo de leitura. Todas as mensagens sao traduzidas de acordo com o idioma ativo no momento do envio.

---

### 9. Animacao de Scroll Acessivel

As secoes entram suavemente na tela usando a `IntersectionObserver` API, que observa quando cada elemento entra na area visivel do viewport e adiciona a classe `.visivel`. A animacao e desativada automaticamente para usuarios que configuraram `prefers-reduced-motion: reduce` no sistema operacional, respeitando a preferencia de quem tem sensibilidade a movimento ou condicoes vestibulares.

---

## Compatibilidade

O site foi desenvolvido e testado para funcionar nos seguintes ambientes:

- Chrome 100+
- Edge 100+
- Firefox 100+
- Safari 15+
- Chrome para Android
- Safari para iOS

A unica funcionalidade com suporte variavel e a API de narracao por voz, que depende das vozes instaladas no sistema operacional do usuario.

---

## Hospedagem no GitHub Pages

Para publicar o site no GitHub Pages:

1. Faca o upload de todos os arquivos para um repositorio publico do GitHub, mantendo a estrutura de pastas exata (`imagens/` e `videos/` em minusculo, sem acentos).
2. Acesse as configuracoes do repositorio (`Settings`).
3. Va em `Pages` e selecione a branch principal (`main` ou `master`) como fonte.
4. Clique em `Save`. O GitHub Pages serve automaticamente o `index.html` como pagina inicial.

Nenhuma configuracao adicional e necessaria, pois o site nao usa nenhuma linguagem de servidor.

---

**Concurso Agrinho 2026 — SENAR Parana — Colegio Estadual do Parana.**
*Projeto educativo sem fins lucrativos.*
