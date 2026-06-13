# Agrinho 2026 — Agro Forte, Futuro Sustentavel

Projeto educativo criado para o Concurso Agrinho 2026 — SENAR Parana, pelo Colegio Estadual do Parana. O tema central e o equilibrio entre a forca do agronegocio brasileiro e a preservacao do meio ambiente. O site e 100% estatico (HTML, CSS e JavaScript puro), sem dependencia de servidores, frameworks ou bibliotecas externas, o que o torna totalmente funcional em modo offline e compativel com hospedagem gratuita no GitHub Pages.

---

## Estrutura de Arquivos

```
/
|-- index.html       Estrutura semantica do site
|-- style.css        Estilos, temas e responsividade
|-- script.js        Logica de idioma, acessibilidade e interacao
|-- README.md        Esta documentacao
|-- imagens/
|   |-- drone.jpg    Foto de drone agricola (Pexels)
|   |-- irrigacao.jpg Foto de irrigacao por gotejamento (Pexels)
|   |-- solar.jpg    Foto de energia solar rural (Pexels)
|-- videos/
    |-- projeto.mp4  Video do agronegocio sustentavel (Pexels)
```

---

## Engenharia de Acessibilidade Nativa

Todo o sistema de acessibilidade foi construido com APIs nativas do navegador, sem nenhuma biblioteca externa. Cada recurso foi pensado para funcionar tanto online quanto offline.

### Sistema Multi-Idioma (PT / EN / ES)

O dicionario de traducoes vive inteiramente dentro do arquivo script.js, na variavel TRADUCOES. Cada idioma tem um objeto com todas as chaves de texto do site, incluindo barra de acessibilidade, navegacao, secoes de conteudo, legendas de fotos, placeholders de formulario e rodape.

Ao clicar em um botao de idioma (PT, EN ou ES), a funcao mudarIdioma() e chamada. Ela percorre um mapa declarativo chamado MAPA_DOM, que associa cada chave do dicionario ao ID exato do elemento HTML. Para cada entrada desse mapa, o script localiza o elemento pelo ID, verifica a propriedade de destino (textContent, innerHTML ou placeholder) e aplica o texto traduzido. Isso garante que absolutamente todo o conteudo visivel do site seja atualizado, incluindo os proprios botoes da barra de acessibilidade.

O atributo lang do elemento html tambem e atualizado (pt-BR, en-US ou es-ES), o que melhora a pronuncia dos leitores de tela nativos do sistema operacional.

### Temas Visuais (Padrao / Alto Contraste Claro / Alto Contraste Escuro)

O sistema de temas usa variaveis CSS declaradas no seletor :root. O tema padrao tem fundo verde-claro (#f1f8e9) com texto quase-preto (#212121). O tema L/W (claro/branco) substitui as variaveis por valores de maximo contraste com fundo branco puro e texto preto puro. O tema D/B (escuro/preto) usa fundo preto com texto e elementos em amarelo-neon (#ffee58), seguindo as diretrizes WCAG para usuarios com deficiencia visual severa.

A troca de tema e feita adicionando ou removendo as classes tema-branco e tema-preto do elemento body. O CSS cascateia automaticamente, sobrescrevendo as variaveis do :root sem precisar tocar em nenhum elemento individualmente.

### Dimensionador de Fonte (A+ / A-)

O tamanho de fonte e controlado pela propriedade font-size do elemento html, que serve como base para todas as unidades rem do site. Ao clicar em A+, o JavaScript aumenta essa base em 2px (ate o limite de 26px). Ao clicar em A-, diminui em 2px (ate o minimo de 10px). Como todo o site usa rem nas medidas de texto e espacamentos relevantes, o efeito de zoom e propagado automaticamente para todos os elementos, sem excecao.

### Narrador de Tela (Web Speech API)

O narrador usa a SpeechSynthesisUtterance, uma API nativa disponivel nos navegadores modernos Chrome, Edge, Firefox e Safari. Ao clicar no botao de narracao, o script captura o texto completo da tag main e envia para a fila de fala do sistema operacional.

O idioma da voz e definido pela propriedade .lang da utterance. Para portugues, o valor e pt-BR. Para ingles, en-US. Para espanhol, o valor e estritamente es-ES, que e o codigo BCP-47 padrao aceito pelo Chrome e pelo Edge em todas as plataformas. Todos os textos do dicionario de espanhol foram escritos sem caracteres acentuados ou especiais (tildes, enes, cedilhas) para evitar falhas de codificacao na sintese de voz, que em alguns sistemas operacionais interpreta mal a acentuacao ao receber o texto.

O botao alterna entre o estado ativo (mostrando o texto de parar) e o estado inativo (mostrando o texto de narrar), conforme o idioma atual.

### Video Local no GitHub Pages

O elemento video usa os atributos controls, muted, autoplay, loop e playsinline juntos. O atributo muted e obrigatorio para que o autoplay funcione em navegadores modernos, que bloqueiam reproducao automatica de midia com audio por politica de seguranca. O atributo playsinline impede que o iOS abra o video em tela cheia automaticamente, mantendo-o embutido na pagina. O arquivo de video deve estar na pasta videos/ com o nome projeto.mp4, e o caminho relativo videos/projeto.mp4 e suficiente para funcionar tanto no servidor do GitHub Pages quanto aberto diretamente como arquivo local no computador.

### Prevencao de Duplicacao de Imagens

Na secao de Tecnologias, as imagens (drone.jpg, irrigacao.jpg, solar.jpg) estao dentro de tags figure e nunca sao tocadas pelo JavaScript. O script atualiza apenas os elementos de texto adjacentes, cada um com seu proprio ID dedicado: drone-text-span, irri-text-span e solar-text-span. Isso garante que a troca de idioma nunca interfira no src das imagens nem apague ou duplique as tags img.

### Sincronizacao Total de IDs e Event Listeners

Todos os nove botoes interativos da barra de acessibilidade (btn-pt, btn-en, btn-es, btn-colorido, btn-branco, btn-preto, btn-Amais, btn-Amenos, btn-narrar) tem seus event listeners registrados na funcao registrarEventListeners(), que e chamada uma unica vez no evento DOMContentLoaded. Nenhum atributo onclick inline e usado no HTML, o que elimina qualquer possibilidade de conflito entre o HTML e o script.

### Formulario de Contato

O formulario valida os campos Nome e Mensagem antes de processar o envio. As mensagens de erro e sucesso sao exibidas em elementos com aria-live="polite", garantindo que leitores de tela anunciem o resultado sem interromper o fluxo de leitura. Todas as mensagens sao traduzidas de acordo com o idioma ativo no momento do envio.

### Animacao de Scroll Acessivel

As secoes entram suavemente na tela usando a IntersectionObserver API, que observa quando cada elemento entra na area visivel do viewport e adiciona a classe visivel. A animacao e desativada automaticamente para usuarios que configuraram prefers-reduced-motion: reduce no sistema operacional, respeitando a preferencia de quem tem sensibilidade a movimento ou condicoes vestibulares.

---

## Compatibilidade

O site foi desenvolvido e testado para funcionar nos seguintes ambientes: Chrome 100+, Edge 100+, Firefox 100+, Safari 15+, Chrome para Android e Safari para iOS. A unica funcionalidade com suporte variavel e a API de narracao por voz, que depende das vozes instaladas no sistema operacional do usuario.

---

## Hospedagem no GitHub Pages

Para publicar o site no GitHub Pages, basta fazer o upload de todos os arquivos para um repositorio publico do GitHub, acessar as configuracoes do repositorio, ir em Pages e selecionar a branch principal como fonte. O GitHub Pages servia automaticamente o arquivo index.html como pagina inicial. Nenhuma configuracao adicional e necessaria, pois o site nao usa nenhuma linguagem de servidor.

---

Concurso Agrinho 2026 — SENAR Parana — Colegio Estadual do Parana.
Projeto educativo sem fins lucrativos.
