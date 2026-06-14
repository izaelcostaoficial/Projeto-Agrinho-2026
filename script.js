'use strict';

/* ============================================================
   script.js — Agrinho 2026
   Correcoes aplicadas:
   1. Reset obrigatorio de speechSynthesis.cancel() antes de .speak()
   2. Filtragem rigorosa de lang por idioma (pt-BR / en-US / es-ES)
   3. Taxa .rate = 0.9 para processamento correto da fonetica espanhola
   4. Atualizacao de .textContent exclusivamente em spans de texto —
      nunca em nos que contenham <img>, evitando duplicacao ou sumico
   5. Traducao 100% de todos os elementos: barra, nav, secoes, form,
      placeholders, rodape
   ============================================================ */


// ============================================================
// DICIONARIO COMPLETO DE TRADUCOES (PT / EN / ES)
// ============================================================
var TRADUCOES = {

  /* ─────────────────────────────── PORTUGUES ─────────────────────────────── */
  pt: {
    page_title:         'Agrinho 2026 — Agro Forte, Futuro Sustentavel',
    label_idioma:       'Idioma:',
    label_visual:       'Visual:',
    label_texto:        'Texto:',
    label_audio:        'Audio:',
    btn_colorido:       'Padrao',
    btn_branco:         'L/W',
    btn_preto:          'D/B',
    btn_narrar:         '\uD83D\uDD0A Narrar Site',
    btn_parar:          '\uD83D\uDED1 Parar Narracao',
    logo_titulo:        'Agrinho 2026',
    logo_subtitulo:     'SENAR \u00B7 Parana',
    nav_sobre:          'Sobre',
    nav_tema:           'Tema',
    nav_tecnologias:    'Tecnologias',
    nav_video:          'Video',
    nav_apoio:          'Apoiar',
    nav_contato:        'Contato',
    hero_eyebrow:       'Concurso Agrinho 2026',
    hero_titulo:        'Agro forte,\nfuturo sustentavel',
    hero_subtitulo:     'Equilibrio entre producao e meio ambiente',
    hero_btn_conhecer:  'Conhecer o Projeto',
    hero_btn_apoiar:    '\uD83D\uDC4D Apoiar Agora',
    sobre_eyebrow:      'O Programa',
    sobre_titulo:       'O que e o Agrinho?',
    sobre_p1:           'O Programa Agrinho e uma iniciativa do SENAR Parana que existe ha mais de 25 anos, conectando a educacao do campo e da cidade por meio de temas como saude, cidadania e, nesta edicao, sustentabilidade agricola.',
    sobre_p2:           'Em 2026, o tema convida estudantes a refletirem sobre como o agronegocio brasileiro pode ser economicamente forte sem comprometer os recursos naturais para as proximas geracoes. Tecnologia, consciencia e responsabilidade caminham juntas.',
    sobre_p3:           'Este site foi criado como projeto de participacao do Colegio Estadual do Parana, explorando conceitos de producao sustentavel, inovacao tecnologica no campo e o papel de cada cidadao na construcao de um futuro mais verde.',
    estat_anos:         'Anos de Programa',
    estat_municipios:   'Municipios Participantes',
    estat_alunos:       'Alunos Impactados',
    tema_eyebrow:       'O Desafio',
    tema_titulo:        'Producao e Natureza em Equilibrio',
    tema_intro:         'O Brasil e um dos maiores produtores de alimentos do mundo. Mas como garantir que essa producao respeite o planeta? Tres pilares sustentam essa resposta:',
    pilar1_titulo:      'Agropecuaria Responsavel',
    pilar1_desc:        'Praticas como o plantio direto, rotacao de culturas e integracao lavoura-pecuaria-floresta reduzem erosao do solo, poupam agua e aumentam a produtividade ao mesmo tempo.',
    pilar2_titulo:      'Economia Circular',
    pilar2_desc:        'Residuos agricolas como palha e esterco viram energia, compostagem e biofertilizantes. Nada se perde: tudo se transforma em mais producao com menos impacto ambiental.',
    pilar3_titulo:      'Cidadania Ambiental',
    pilar3_desc:        'O campo precisa de guardioes. Desde a escola, cada aluno aprende que escolhas de consumo, descarte correto do lixo e preservacao de nascentes sao atos de cidadania concreta.',
    tec_eyebrow:        'Inovacao no Campo',
    tec_titulo:         'Tecnologias Sustentaveis',
    tec_intro:          'O agricultor moderno conta com ferramentas que antes pareciam ficcao cientifica. Veja tres exemplos que ja transformam o agro brasileiro:',
    drone_credito:      '\uD83D\uDCF7 Foto: Pexels / Foto de Drone Agricola',
    drone_titulo:       'Agricultura de Precisao com Drones',
    drone_desc:         'Drones equipados com cameras multiespectrais sobrevoam as lavouras e identificam areas com deficiencia nutricional, pragas ou estresse hidrico com precisao de centimetros. Isso permite que o produtor aplique insumos somente onde e necessario, reduzindo o uso de defensivos em ate 40% e economizando agua e combustivel. O resultado e uma lavoura mais saudavel e um ambiente mais preservado.',
    irri_credito:       '\uD83D\uDCF7 Foto: Pexels / Foto de Irrigacao por Gotejamento',
    irrigacao_titulo:   'Irrigacao Inteligente por Gotejamento',
    irri_desc:          'O sistema de irrigacao por gotejamento entrega agua diretamente na raiz da planta, gota a gota, controlado por sensores de umidade do solo conectados a internet. Sensores monitoram em tempo real a necessidade hidrica de cada especie e irrigam apenas quando necessario. Comparado a irrigacao convencional por aspersao, o gotejamento inteligente economiza ate 60% de agua, um recurso vital cada vez mais escasso no planeta.',
    solar_credito:      '\uD83D\uDCF7 Foto: Pexels / Foto de Energia Solar Rural',
    solar_titulo:       'Energia Solar Fotovoltaica Rural',
    solar_desc:         'Paineis solares instalados em propriedades rurais geram eletricidade limpa diretamente do sol, eliminando ou reduzindo drasticamente a conta de energia de fazendas e sitios. A energia excedente pode ser injetada na rede eletrica, gerando creditos ao produtor. Com o custo dos paineis caindo mais de 80% na ultima decada, a energia solar se tornou um dos investimentos mais inteligentes e sustentaveis para o agricultor brasileiro do seculo XXI.',
    video_eyebrow:      'Assista',
    video_titulo:       'O Campo em Movimento',
    video_intro:        'Veja a beleza e a forca do agronegocio sustentavel atraves das imagens abaixo.',
    video_credito:      '\uD83C\uDFAC Video por: Fernando Sanchez Aranguren (Pexels)',
    video_fallback:     'Seu navegador nao suporta reproducao de video HTML5.',
    apoio_eyebrow:      'Participe',
    apoio_titulo:       'Apoie Este Projeto',
    apoio_intro:        'Acredita num agro mais sustentavel? Demonstre seu apoio clicando abaixo!',
    apoio_contador:     'Este projeto ja recebeu {N} apoios!',
    apoio_btn:          'Apoiar Projeto',
    contato_eyebrow:    'Fale Conosco',
    contato_titulo:     'Deixe sua Sugestao',
    contato_intro:      'Tem uma ideia para tornar o projeto ainda melhor? Compartilhe com a gente!',
    label_nome:         'Nome completo',
    placeholder_nome:   'Digite seu nome completo',
    label_email:        'E-mail (opcional)',
    placeholder_email:  'seuemail@exemplo.com',
    label_mensagem:     'Sua sugestao ou mensagem',
    placeholder_msg:    'Escreva sua sugestao aqui...',
    btn_enviar:         'Enviar Sugestao',
    form_sucesso:       'Sugestao enviada com sucesso! Obrigado pela sua contribuicao.',
    form_erro_nome:     'Por favor, preencha seu nome.',
    form_erro_msg:      'Por favor, escreva sua mensagem.',
    rodape_titulo:      'Agrinho 2026',
    rodape_subtitulo:   'SENAR \u00B7 Parana',
    rodape_copy:        '\u00A9 2026 Concurso Agrinho \u2014 SENAR Parana \u2014 Colegio Estadual do Parana. Projeto educativo sem fins lucrativos.',
    rodape_nav_sobre:       'Sobre',
    rodape_nav_tema:        'Tema',
    rodape_nav_tecnologias: 'Tecnologias',
    rodape_nav_video:       'Video',
    rodape_nav_contato:     'Contato'
  },

  /* ─────────────────────────────── INGLES ─────────────────────────────── */
  en: {
    page_title:         'Agrinho 2026 — Strong Agro, Sustainable Future',
    label_idioma:       'Language:',
    label_visual:       'Visual:',
    label_texto:        'Text:',
    label_audio:        'Audio:',
    btn_colorido:       'Default',
    btn_branco:         'L/W',
    btn_preto:          'D/B',
    btn_narrar:         '\uD83D\uDD0A Read Site Aloud',
    btn_parar:          '\uD83D\uDED1 Stop Reading',
    logo_titulo:        'Agrinho 2026',
    logo_subtitulo:     'SENAR \u00B7 Parana',
    nav_sobre:          'About',
    nav_tema:           'Theme',
    nav_tecnologias:    'Technologies',
    nav_video:          'Video',
    nav_apoio:          'Support',
    nav_contato:        'Contact',
    hero_eyebrow:       'Agrinho Contest 2026',
    hero_titulo:        'Strong Agro,\nSustainable Future',
    hero_subtitulo:     'Balance between production and the environment',
    hero_btn_conhecer:  'Learn About the Project',
    hero_btn_apoiar:    '\uD83D\uDC4D Support Now',
    sobre_eyebrow:      'The Program',
    sobre_titulo:       'What is Agrinho?',
    sobre_p1:           'The Agrinho Program is an initiative by SENAR Parana that has existed for over 25 years, connecting rural and urban education through topics such as health, citizenship and, in this edition, agricultural sustainability.',
    sobre_p2:           'In 2026, the theme invites students to reflect on how Brazilian agribusiness can be economically strong without compromising natural resources for future generations. Technology, awareness, and responsibility go hand in hand.',
    sobre_p3:           'This website was created as a participation project by the Colegio Estadual do Parana, exploring concepts of sustainable production, technological innovation in agriculture, and the role of every citizen in building a greener future.',
    estat_anos:         'Years of Program',
    estat_municipios:   'Participating Municipalities',
    estat_alunos:       'Students Impacted',
    tema_eyebrow:       'The Challenge',
    tema_titulo:        'Production and Nature in Balance',
    tema_intro:         'Brazil is one of the world\'s largest food producers. But how can we ensure this production respects the planet? Three pillars support this answer:',
    pilar1_titulo:      'Responsible Agriculture',
    pilar1_desc:        'Practices such as no-till farming, crop rotation, and crop-livestock-forest integration reduce soil erosion, save water, and increase productivity at the same time.',
    pilar2_titulo:      'Circular Economy',
    pilar2_desc:        'Agricultural waste such as straw and manure becomes energy, compost, and biofertilizers. Nothing is lost: everything is transformed into more production with less environmental impact.',
    pilar3_titulo:      'Environmental Citizenship',
    pilar3_desc:        'The countryside needs guardians. From school, each student learns that consumer choices, proper waste disposal, and preservation of springs are acts of concrete citizenship.',
    tec_eyebrow:        'Innovation in the Field',
    tec_titulo:         'Sustainable Technologies',
    tec_intro:          'The modern farmer has tools that once seemed like science fiction. See three examples already transforming Brazilian agriculture:',
    drone_credito:      '\uD83D\uDCF7 Photo: Pexels / Agricultural Drone Photo',
    drone_titulo:       'Precision Agriculture with Drones',
    drone_desc:         'Drones equipped with multispectral cameras fly over crops and identify areas with nutritional deficiencies, pests, or water stress with centimeter precision. This allows the producer to apply inputs only where needed, reducing pesticide use by up to 40% and saving water and fuel. The result is healthier crops and a more preserved environment.',
    irri_credito:       '\uD83D\uDCF7 Photo: Pexels / Drip Irrigation Photo',
    irrigacao_titulo:   'Smart Drip Irrigation',
    irri_desc:          'The drip irrigation system delivers water directly to the plant root, drop by drop, controlled by soil moisture sensors connected to the internet. Sensors monitor each species water needs in real time and irrigate only when necessary. Compared to conventional sprinkler irrigation, smart drip saves up to 60% of water, a vital resource that is increasingly scarce on the planet.',
    solar_credito:      '\uD83D\uDCF7 Photo: Pexels / Rural Solar Energy Photo',
    solar_titulo:       'Rural Photovoltaic Solar Energy',
    solar_desc:         'Solar panels installed on rural properties generate clean electricity directly from the sun, eliminating or drastically reducing the energy bills of farms and homesteads. Surplus energy can be fed into the electrical grid, generating credits for the producer. With panel costs falling more than 80% in the last decade, solar energy has become one of the smartest and most sustainable investments for the 21st century Brazilian farmer.',
    video_eyebrow:      'Watch',
    video_titulo:       'The Field in Motion',
    video_intro:        'See the beauty and strength of sustainable agribusiness through the images below.',
    video_credito:      '\uD83C\uDFAC Video by: Fernando Sanchez Aranguren (Pexels)',
    video_fallback:     'Your browser does not support HTML5 video playback.',
    apoio_eyebrow:      'Get Involved',
    apoio_titulo:       'Support This Project',
    apoio_intro:        'Do you believe in a more sustainable agro? Show your support by clicking below!',
    apoio_contador:     'This project has already received {N} endorsements!',
    apoio_btn:          'Support Project',
    contato_eyebrow:    'Contact Us',
    contato_titulo:     'Leave Your Suggestion',
    contato_intro:      'Do you have an idea to make the project even better? Share it with us!',
    label_nome:         'Full name',
    placeholder_nome:   'Enter your full name',
    label_email:        'E-mail (optional)',
    placeholder_email:  'youremail@example.com',
    label_mensagem:     'Your suggestion or message',
    placeholder_msg:    'Write your suggestion here...',
    btn_enviar:         'Send Suggestion',
    form_sucesso:       'Suggestion sent successfully! Thank you for your contribution.',
    form_erro_nome:     'Please fill in your name.',
    form_erro_msg:      'Please write your message.',
    rodape_titulo:      'Agrinho 2026',
    rodape_subtitulo:   'SENAR \u00B7 Parana',
    rodape_copy:        '\u00A9 2026 Agrinho Contest \u2014 SENAR Parana \u2014 Colegio Estadual do Parana. Non-profit educational project.',
    rodape_nav_sobre:       'About',
    rodape_nav_tema:        'Theme',
    rodape_nav_tecnologias: 'Technologies',
    rodape_nav_video:       'Video',
    rodape_nav_contato:     'Contact'
  },

  /* ─────────────────────────────── ESPANHOL ─────────────────────────────── */
  /*
   * NOTA TECNICA — VOZ ES:
   * Todos os textos abaixo foram escritos SEM acentos, tildes ou cedilhas
   * (nenhum caractere especial), pois alguns motores de sintese de voz do
   * sistema operacional interpretam mal a acentuacao ao receber texto UTF-8
   * pelo SpeechSynthesisUtterance. Isso garante pronuncia correta em
   * Chrome, Edge e Safari em todas as plataformas.
   */
  es: {
    page_title:         'Agrinho 2026 — Agro fuerte, futuro sostenible',
    label_idioma:       'Idioma:',
    label_visual:       'Visual:',
    label_texto:        'Texto:',
    label_audio:        'Audio:',
    btn_colorido:       'Estandar',
    btn_branco:         'L/W',
    btn_preto:          'D/B',
    btn_narrar:         '\uD83D\uDD0A Narrar Sitio',
    btn_parar:          '\uD83D\uDED1 Detener Narracion',
    logo_titulo:        'Agrinho 2026',
    logo_subtitulo:     'SENAR \u00B7 Parana',
    nav_sobre:          'Acerca de',
    nav_tema:           'Tema',
    nav_tecnologias:    'Tecnologias',
    nav_video:          'Video',
    nav_apoio:          'Apoyar',
    nav_contato:        'Contacto',
    hero_eyebrow:       'Concurso Agrinho 2026',
    hero_titulo:        'Agro fuerte,\nfuturo sostenible',
    hero_subtitulo:     'Equilibrio entre produccion y medio ambiente',
    hero_btn_conhecer:  'Conocer el Proyecto',
    hero_btn_apoiar:    '\uD83D\uDC4D Apoyar Ahora',
    sobre_eyebrow:      'El Programa',
    sobre_titulo:       'Que es Agrinho?',
    sobre_p1:           'El Programa Agrinho es una iniciativa de SENAR Parana que existe desde hace mas de 25 anos, conectando la educacion del campo y la ciudad a traves de temas como salud, ciudadania y, en esta edicion, sostenibilidad agricola.',
    sobre_p2:           'En 2026, el tema invita a los estudiantes a reflexionar sobre como el agronegocio brasileno puede ser economicamente fuerte sin comprometer los recursos naturales para las proximas generaciones. Tecnologia, conciencia y responsabilidad van de la mano.',
    sobre_p3:           'Este sitio fue creado como proyecto de participacion del Colegio Estadual do Parana, explorando conceptos de produccion sostenible, innovacion tecnologica en el campo y el papel de cada ciudadano en la construccion de un futuro mas verde.',
    estat_anos:         'Anos de Programa',
    estat_municipios:   'Municipios Participantes',
    estat_alunos:       'Alumnos Impactados',
    tema_eyebrow:       'El Desafio',
    tema_titulo:        'Produccion y Naturaleza en Equilibrio',
    tema_intro:         'Brasil es uno de los mayores productores de alimentos del mundo. Pero como garantizar que esa produccion respete el planeta? Tres pilares sostienen esta respuesta:',
    pilar1_titulo:      'Agropecuaria Responsable',
    pilar1_desc:        'Practicas como la siembra directa, la rotacion de cultivos y la integracion cultivo-ganaderia-forestal reducen la erosion del suelo, ahorran agua y aumentan la productividad al mismo tiempo.',
    pilar2_titulo:      'Economia Circular',
    pilar2_desc:        'Los residuos agricolas como la paja y el estiercol se convierten en energia, compostaje y biofertilizantes. Nada se pierde: todo se transforma en mas produccion con menos impacto ambiental.',
    pilar3_titulo:      'Ciudadania Ambiental',
    pilar3_desc:        'El campo necesita guardianes. Desde la escuela, cada alumno aprende que las elecciones de consumo, la correcta eliminacion de residuos y la preservacion de los manantiales son actos de ciudadania concreta.',
    tec_eyebrow:        'Innovacion en el Campo',
    tec_titulo:         'Tecnologias Sostenibles',
    tec_intro:          'El agricultor moderno cuenta con herramientas que antes parecian ciencia ficcion. Vea tres ejemplos que ya transforman el agro brasileno:',
    drone_credito:      '\uD83D\uDCF7 Foto: Pexels / Foto de Dron Agricola',
    drone_titulo:       'Agricultura de Precision con Drones',
    drone_desc:         'Los drones equipados con camaras multiespectrales sobrevuelan los cultivos e identifican areas con deficiencia nutricional, plagas o estres hidrico con precision centimetrica. Esto permite al productor aplicar insumos solo donde es necesario, reduciendo el uso de agroquimicos hasta en un 40% y ahorrando agua y combustible. El resultado es un cultivo mas saludable y un ambiente mas preservado.',
    irri_credito:       '\uD83D\uDCF7 Foto: Pexels / Foto de Riego por Goteo',
    irrigacao_titulo:   'Riego Inteligente por Goteo',
    irri_desc:          'El sistema de riego por goteo entrega agua directamente a la raiz de la planta, gota a gota, controlado por sensores de humedad del suelo conectados a internet. Los sensores monitorean en tiempo real la necesidad hidrica de cada especie y riegan solo cuando es necesario. En comparacion con el riego convencional por aspersion, el goteo inteligente ahorra hasta un 60% de agua, un recurso vital cada vez mas escaso en el planeta.',
    solar_credito:      '\uD83D\uDCF7 Foto: Pexels / Foto de Energia Solar Rural',
    solar_titulo:       'Energia Solar Fotovoltaica Rural',
    solar_desc:         'Los paneles solares instalados en propiedades rurales generan electricidad limpia directamente del sol, eliminando o reduciendo drasticamente la factura energetica de granjas y haciendas. La energia excedente puede inyectarse en la red electrica, generando creditos para el productor. Con el costo de los paneles cayendo mas del 80% en la ultima decada, la energia solar se ha convertido en una de las inversiones mas inteligentes y sostenibles para el agricultor brasileno del siglo XXI.',
    video_eyebrow:      'Mire',
    video_titulo:       'El Campo en Movimiento',
    video_intro:        'Vea la belleza y la fuerza del agronegocio sostenible a traves de las imagenes a continuacion.',
    video_credito:      '\uD83C\uDFAC Video de: Fernando Sanchez Aranguren (Pexels)',
    video_fallback:     'Su navegador no es compatible con la reproduccion de video HTML5.',
    apoio_eyebrow:      'Participa',
    apoio_titulo:       'Apoya Este Proyecto',
    apoio_intro:        'Crees en un agro mas sostenible? Demuestra tu apoyo haciendo clic abajo!',
    apoio_contador:     'Este proyecto ya recibio {N} apoyos!',
    apoio_btn:          'Apoyar Proyecto',
    contato_eyebrow:    'Contactanos',
    contato_titulo:     'Deja tu Sugerencia',
    contato_intro:      'Tienes una idea para hacer el proyecto aun mejor? Compartela con nosotros!',
    label_nome:         'Nombre completo',
    placeholder_nome:   'Escribe tu nombre completo',
    label_email:        'Correo electronico (opcional)',
    placeholder_email:  'tucorreo@ejemplo.com',
    label_mensagem:     'Tu sugerencia o mensaje',
    placeholder_msg:    'Escribe tu sugerencia aqui...',
    btn_enviar:         'Enviar Sugerencia',
    form_sucesso:       'Sugerencia enviada con exito! Gracias por tu contribucion.',
    form_erro_nome:     'Por favor, completa tu nombre.',
    form_erro_msg:      'Por favor, escribe tu mensaje.',
    rodape_titulo:      'Agrinho 2026',
    rodape_subtitulo:   'SENAR \u00B7 Parana',
    rodape_copy:        '\u00A9 2026 Concurso Agrinho \u2014 SENAR Parana \u2014 Colegio Estadual do Parana. Proyecto educativo sin fines de lucro.',
    rodape_nav_sobre:       'Acerca de',
    rodape_nav_tema:        'Tema',
    rodape_nav_tecnologias: 'Tecnologias',
    rodape_nav_video:       'Video',
    rodape_nav_contato:     'Contacto'
  }

};


// ============================================================
// ESTADO GLOBAL
// ============================================================
var idiomaAtivo   = 'pt';
var temaAtivo     = 'padrao';
var totalApoios   = 0;
var narratorAtivo = false;
var tamanhoFonte  = 16;

var FONTE_MINIMA = 10;
var FONTE_MAXIMA = 26;
var PASSO_FONTE  = 2;

/*
 * MAPA DE CODIGOS BCP-47 POR IDIOMA
 * es-ES e o unico codigo aceito de forma consistente pelo Chrome,
 * Edge e Safari em todas as plataformas para o espanhol peninsular.
 * Nunca use "es" sem sufixo: o motor pode silenciosamente recusar
 * ou usar a voz errada (portugues / ingles).
 */
var MAPA_VOZ_LANG = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES'
};


// ============================================================
// MAPA DECLARATIVO: ID DO ELEMENTO → CHAVE NO DICIONARIO
// Formato: { id, chave, prop, newline? }
// prop: 'textContent' | 'innerHTML' | 'placeholder'
// newline: true → substitui \n por <br> no innerHTML
// ============================================================
var MAPA_DOM = [
  /* Barra de acessibilidade */
  { id: 'label-idioma',           chave: 'label_idioma',          prop: 'textContent' },
  { id: 'label-visual',           chave: 'label_visual',          prop: 'textContent' },
  { id: 'label-texto',            chave: 'label_texto',           prop: 'textContent' },
  { id: 'label-audio',            chave: 'label_audio',           prop: 'textContent' },
  { id: 'btn-colorido',           chave: 'btn_colorido',          prop: 'textContent' },
  { id: 'btn-branco',             chave: 'btn_branco',            prop: 'textContent' },
  { id: 'btn-preto',              chave: 'btn_preto',             prop: 'textContent' },
  /* Cabecalho */
  { id: 'logo-titulo-txt',        chave: 'logo_titulo',           prop: 'textContent' },
  { id: 'logo-subtitulo-txt',     chave: 'logo_subtitulo',        prop: 'textContent' },
  { id: 'nav-sobre',              chave: 'nav_sobre',             prop: 'textContent' },
  { id: 'nav-tema',               chave: 'nav_tema',              prop: 'textContent' },
  { id: 'nav-tecnologias',        chave: 'nav_tecnologias',       prop: 'textContent' },
  { id: 'nav-video',              chave: 'nav_video',             prop: 'textContent' },
  { id: 'nav-apoio',              chave: 'nav_apoio',             prop: 'textContent' },
  { id: 'nav-contato',            chave: 'nav_contato',           prop: 'textContent' },
  /* Hero */
  { id: 'hero-eyebrow-txt',       chave: 'hero_eyebrow',          prop: 'textContent' },
  { id: 'hero-titulo',            chave: 'hero_titulo',           prop: 'innerHTML',   newline: true },
  { id: 'hero-subtitulo-txt',     chave: 'hero_subtitulo',        prop: 'textContent' },
  { id: 'hero-btn-conhecer',      chave: 'hero_btn_conhecer',     prop: 'textContent' },
  { id: 'hero-btn-apoiar',        chave: 'hero_btn_apoiar',       prop: 'textContent' },
  /* Sobre */
  { id: 'sobre-eyebrow-txt',      chave: 'sobre_eyebrow',         prop: 'textContent' },
  { id: 'sobre-titulo',           chave: 'sobre_titulo',          prop: 'textContent' },
  { id: 'sobre-p1',               chave: 'sobre_p1',              prop: 'textContent' },
  { id: 'sobre-p2',               chave: 'sobre_p2',              prop: 'textContent' },
  { id: 'sobre-p3',               chave: 'sobre_p3',              prop: 'textContent' },
  { id: 'estat-anos',             chave: 'estat_anos',            prop: 'textContent' },
  { id: 'estat-municipios',       chave: 'estat_municipios',      prop: 'textContent' },
  { id: 'estat-alunos',           chave: 'estat_alunos',          prop: 'textContent' },
  /* Tema / Pilares */
  { id: 'tema-eyebrow-txt',       chave: 'tema_eyebrow',          prop: 'textContent' },
  { id: 'tema-titulo',            chave: 'tema_titulo',           prop: 'textContent' },
  { id: 'tema-intro-txt',         chave: 'tema_intro',            prop: 'textContent' },
  { id: 'pilar1-titulo',          chave: 'pilar1_titulo',         prop: 'textContent' },
  { id: 'pilar1-desc',            chave: 'pilar1_desc',           prop: 'textContent' },
  { id: 'pilar2-titulo',          chave: 'pilar2_titulo',         prop: 'textContent' },
  { id: 'pilar2-desc',            chave: 'pilar2_desc',           prop: 'textContent' },
  { id: 'pilar3-titulo',          chave: 'pilar3_titulo',         prop: 'textContent' },
  { id: 'pilar3-desc',            chave: 'pilar3_desc',           prop: 'textContent' },
  /* Tecnologias
     ATENCAO: drone-text-span, irri-text-span e solar-text-span sao <span>
     dentro de <p>. Usar .textContent neles nunca toca no <img> da <figure>
     nem apaga legendas de credito, evitando duplicacao ou sumico de imagens. */
  { id: 'tec-eyebrow-txt',        chave: 'tec_eyebrow',           prop: 'textContent' },
  { id: 'tec-titulo',             chave: 'tec_titulo',            prop: 'textContent' },
  { id: 'tec-intro-txt',          chave: 'tec_intro',             prop: 'textContent' },
  { id: 'drone-credito-txt',      chave: 'drone_credito',         prop: 'textContent' },
  { id: 'drone-titulo',           chave: 'drone_titulo',          prop: 'textContent' },
  { id: 'drone-text-span',        chave: 'drone_desc',            prop: 'textContent' },
  { id: 'irri-credito-txt',       chave: 'irri_credito',          prop: 'textContent' },
  { id: 'irrigacao-titulo',       chave: 'irrigacao_titulo',      prop: 'textContent' },
  { id: 'irri-text-span',         chave: 'irri_desc',             prop: 'textContent' },
  { id: 'solar-credito-txt',      chave: 'solar_credito',         prop: 'textContent' },
  { id: 'solar-titulo',           chave: 'solar_titulo',          prop: 'textContent' },
  { id: 'solar-text-span',        chave: 'solar_desc',            prop: 'textContent' },
  /* Video */
  { id: 'video-eyebrow-txt',      chave: 'video_eyebrow',         prop: 'textContent' },
  { id: 'video-titulo',           chave: 'video_titulo',          prop: 'textContent' },
  { id: 'video-intro-txt',        chave: 'video_intro',           prop: 'textContent' },
  { id: 'video-credito-txt',      chave: 'video_credito',         prop: 'textContent' },
  { id: 'video-fallback-txt',     chave: 'video_fallback',        prop: 'textContent' },
  /* Apoio */
  { id: 'apoio-eyebrow-txt',      chave: 'apoio_eyebrow',         prop: 'textContent' },
  { id: 'apoio-titulo',           chave: 'apoio_titulo',          prop: 'textContent' },
  { id: 'apoio-intro-txt',        chave: 'apoio_intro',           prop: 'textContent' },
  { id: 'apoio-btn-txt',          chave: 'apoio_btn',             prop: 'textContent' },
  /* Contato / Formulario */
  { id: 'contato-eyebrow-txt',    chave: 'contato_eyebrow',       prop: 'textContent' },
  { id: 'contato-titulo',         chave: 'contato_titulo',        prop: 'textContent' },
  { id: 'contato-intro-txt',      chave: 'contato_intro',         prop: 'textContent' },
  { id: 'label-nome',             chave: 'label_nome',            prop: 'textContent' },
  { id: 'label-email',            chave: 'label_email',           prop: 'textContent' },
  { id: 'label-mensagem',         chave: 'label_mensagem',        prop: 'textContent' },
  { id: 'campo-nome',             chave: 'placeholder_nome',      prop: 'placeholder' },
  { id: 'campo-email',            chave: 'placeholder_email',     prop: 'placeholder' },
  { id: 'campo-mensagem',         chave: 'placeholder_msg',       prop: 'placeholder' },
  { id: 'btn-enviar-txt',         chave: 'btn_enviar',            prop: 'textContent' },
  /* Rodape */
  { id: 'rodape-titulo-txt',      chave: 'rodape_titulo',         prop: 'textContent' },
  { id: 'rodape-subtitulo-txt',   chave: 'rodape_subtitulo',      prop: 'textContent' },
  { id: 'rodape-copy-txt',        chave: 'rodape_copy',           prop: 'textContent' },
  { id: 'rodape-nav-sobre',       chave: 'rodape_nav_sobre',      prop: 'textContent' },
  { id: 'rodape-nav-tema',        chave: 'rodape_nav_tema',       prop: 'textContent' },
  { id: 'rodape-nav-tecnologias', chave: 'rodape_nav_tecnologias',prop: 'textContent' },
  { id: 'rodape-nav-video',       chave: 'rodape_nav_video',      prop: 'textContent' },
  { id: 'rodape-nav-contato',     chave: 'rodape_nav_contato',    prop: 'textContent' }
];


// ============================================================
// SISTEMA MULTI-IDIOMA
// ============================================================

/**
 * Muda o idioma ativo, aplica todas as traducoes, atualiza o
 * estado dos botoes e reinicia mensagens de formulario.
 * @param {string} lang — 'pt' | 'en' | 'es'
 */
function mudarIdioma(lang) {
  if (!TRADUCOES[lang]) return;
  idiomaAtivo = lang;

  aplicarTraduzoes(lang);
  atualizarBotoesIdioma(lang);
  atualizarContadorApoios();
  atualizarBotaoNarrador();

  /* Atualiza atributo lang do <html> para melhorar leitores de tela */
  document.documentElement.lang = MAPA_VOZ_LANG[lang] || lang;
  document.title = TRADUCOES[lang].page_title;

  /* Limpa mensagens de validacao do formulario ao trocar idioma */
  var erroNome = document.getElementById('erro-nome');
  var erroMsg  = document.getElementById('erro-msg');
  var retorno  = document.getElementById('form-retorno');
  if (erroNome) erroNome.textContent = '';
  if (erroMsg)  erroMsg.textContent  = '';
  if (retorno)  { retorno.textContent = ''; retorno.className = ''; }
}

/**
 * Percorre MAPA_DOM e aplica cada traducao ao elemento correto.
 * Usa estritamente .textContent ou .placeholder para elementos de texto,
 * jamais .innerHTML em elementos que possam conter filhos de midia (<img>).
 * Para o hero-titulo, usa .innerHTML com newline → <br> por ser seguro
 * (o valor vem inteiramente do dicionario interno, sem input do usuario).
 */
function aplicarTraduzoes(lang) {
  var dict = TRADUCOES[lang];

  for (var i = 0; i < MAPA_DOM.length; i++) {
    var entrada = MAPA_DOM[i];
    var el = document.getElementById(entrada.id);
    if (!el) continue;

    var valor = dict[entrada.chave];
    if (valor === undefined) continue;

    if (entrada.prop === 'placeholder') {
      el.placeholder = valor;
    } else if (entrada.prop === 'innerHTML' && entrada.newline) {
      /* Unico uso de innerHTML: hero-titulo, valor 100% controlado */
      el.innerHTML = valor.replace('\n', '<br>');
    } else {
      el.textContent = valor;
    }
  }
}

/**
 * Atualiza o estado visual e aria-pressed dos botoes de idioma.
 */
function atualizarBotoesIdioma(lang) {
  var ids  = ['btn-pt', 'btn-en', 'btn-es'];
  var langs = ['pt', 'en', 'es'];

  for (var i = 0; i < ids.length; i++) {
    var btn = document.getElementById(ids[i]);
    if (!btn) continue;
    var ativo = (langs[i] === lang);
    btn.classList.toggle('btn-ativo', ativo);
    btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');
  }
}


// ============================================================
// SISTEMA DE TEMAS VISUAIS
// ============================================================

/**
 * Troca o tema visual adicionando/removendo classes no <body>.
 * As variaveis CSS em :root sao sobrescritas pelos seletores
 * body.tema-branco e body.tema-preto definidos no style.css.
 * @param {string} tema — 'padrao' | 'branco' | 'preto'
 */
function mudarTema(tema) {
  var corpo = document.body;
  corpo.classList.remove('tema-branco', 'tema-preto');

  /* Atualiza estado visual dos botoes de tema */
  var btnColorido = document.getElementById('btn-colorido');
  var btnBranco   = document.getElementById('btn-branco');
  var btnPreto    = document.getElementById('btn-preto');

  if (btnColorido) { btnColorido.classList.remove('btn-ativo'); }
  if (btnBranco)   { btnBranco.classList.remove('btn-ativo');   }
  if (btnPreto)    { btnPreto.classList.remove('btn-ativo');    }

  if (tema === 'branco') {
    corpo.classList.add('tema-branco');
    if (btnBranco) btnBranco.classList.add('btn-ativo');
  } else if (tema === 'preto') {
    corpo.classList.add('tema-preto');
    if (btnPreto) btnPreto.classList.add('btn-ativo');
  } else {
    if (btnColorido) btnColorido.classList.add('btn-ativo');
  }

  temaAtivo = tema;
}


// ============================================================
// ZOOM DE FONTE VIA REM
// ============================================================

/**
 * Aumenta a fonte base do html em PASSO_FONTE px.
 * Como todo o site usa rem, o efeito propaga-se automaticamente.
 */
function aumentarFonte() {
  if (tamanhoFonte < FONTE_MAXIMA) {
    tamanhoFonte += PASSO_FONTE;
    document.documentElement.style.fontSize = tamanhoFonte + 'px';
  }
}

/**
 * Diminui a fonte base do html em PASSO_FONTE px.
 */
function diminuirFonte() {
  if (tamanhoFonte > FONTE_MINIMA) {
    tamanhoFonte -= PASSO_FONTE;
    document.documentElement.style.fontSize = tamanhoFonte + 'px';
  }
}


// ============================================================
// NARRADOR DE TELA (WEB SPEECH API)
// ============================================================

/**
 * Alterna entre iniciar e parar a narracao.
 */
function alternarNarracao() {
  if (!window.speechSynthesis) {
    alert('Seu navegador nao suporta a API de sintese de voz.');
    return;
  }
  if (narratorAtivo) {
    pararNarracao();
  } else {
    iniciarNarracao();
  }
}

/**
 * Inicia a narracao do conteudo principal.
 *
 * CORRECAO CRITICA — RESET DE FILA:
 * window.speechSynthesis.cancel() DEVE ser chamado antes de .speak().
 * Sem isso, o motor acumula utterances na fila e pode:
 *   1. Ignorar a nova solicitacao silenciosamente.
 *   2. Manter o sotaque do idioma anterior (pt → es falha).
 *   3. Entrar em estado de "travamento" sem falar nada.
 * O cancel() limpa o canal de audio e garante que a nova
 * utterance seja processada do zero com o .lang correto.
 *
 * CORRECAO CRITICA — LANG + RATE PARA ESPANHOL:
 * .lang = 'es-ES' e o codigo BCP-47 aceito por Chrome/Edge/Safari.
 * .rate = 0.9 garante que o motor processe fonetica espanhola
 * sem misturar com o sotaque portugues (que tem taxa padrao 1.0).
 */
function iniciarNarracao() {
  var conteudo = document.getElementById('conteudo-principal');
  if (!conteudo) return;

  var textoCompleto = (conteudo.innerText || conteudo.textContent || '').trim();
  if (textoCompleto === '') return;

  /* ── RESET OBRIGATORIO DA FILA ── */
  window.speechSynthesis.cancel();

  var fala = new SpeechSynthesisUtterance(textoCompleto);

  /* ── CONFIGURACAO RIGOROSA DE LANG POR IDIOMA ── */
  fala.lang = MAPA_VOZ_LANG[idiomaAtivo] || 'pt-BR';

  /*
   * Taxa de fala:
   * - pt: 0.92 (velocidade natural para portugues)
   * - en: 0.92
   * - es: 0.90 (ligeiramente mais lenta para correta fonetica espanhola
   *             e evitar contaminacao com sotaque portugues)
   */
  fala.rate   = (idiomaAtivo === 'es') ? 0.90 : 0.92;
  fala.pitch  = 1.0;
  fala.volume = 1.0;

  fala.onend = function () {
    narratorAtivo = false;
    atualizarBotaoNarrador();
  };

  fala.onerror = function () {
    narratorAtivo = false;
    atualizarBotaoNarrador();
  };

  window.speechSynthesis.speak(fala);
  narratorAtivo = true;
  atualizarBotaoNarrador();
}

/**
 * Para a narracao imediatamente e cancela a fila de audio.
 */
function pararNarracao() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  narratorAtivo = false;
  atualizarBotaoNarrador();
}

/**
 * Atualiza o texto do botao de narracao conforme o estado atual.
 */
function atualizarBotaoNarrador() {
  var btn = document.getElementById('btn-narrar');
  if (!btn) return;
  var dict = TRADUCOES[idiomaAtivo];
  btn.textContent = narratorAtivo ? dict.btn_parar : dict.btn_narrar;
}


// ============================================================
// CONTADOR DE APOIOS
// ============================================================

/**
 * Incrementa o contador de apoios, dispara animacao CSS e
 * atualiza o texto do contador no idioma ativo.
 */
function incrementarApoio() {
  totalApoios++;

  var btn = document.getElementById('btn-apoiar');
  if (btn) {
    btn.classList.remove('apoiar-animado');
    /* Forca reflow para reiniciar a animacao */
    void btn.offsetWidth;
    btn.classList.add('apoiar-animado');
  }

  atualizarContadorApoios();
}

/**
 * Atualiza o texto do contador substituindo {N} pelo valor atual.
 */
function atualizarContadorApoios() {
  var dict     = TRADUCOES[idiomaAtivo];
  var template = dict.apoio_contador;
  var texto    = template.replace('{N}', totalApoios);

  var el = document.getElementById('texto-apoios');
  if (el) el.textContent = texto;
}


// ============================================================
// FORMULARIO — VALIDACAO E ENVIO
// ============================================================

/**
 * Valida os campos obrigatorios (Nome e Mensagem) e exibe
 * feedback de sucesso ou erro no idioma ativo.
 * Os campos de erro usam aria-live="polite" para anuncio
 * acessivel em leitores de tela.
 */
function enviarFormulario() {
  var dict     = TRADUCOES[idiomaAtivo];
  var campNome = document.getElementById('campo-nome');
  var campMsg  = document.getElementById('campo-mensagem');
  var erroNome = document.getElementById('erro-nome');
  var erroMsg  = document.getElementById('erro-msg');
  var retorno  = document.getElementById('form-retorno');

  /* Limpa estado anterior */
  erroNome.textContent = '';
  erroMsg.textContent  = '';
  retorno.textContent  = '';
  retorno.className    = '';

  var nomeValor = campNome.value.trim();
  var msgValor  = campMsg.value.trim();
  var temErro   = false;

  if (nomeValor === '') {
    erroNome.textContent = dict.form_erro_nome;
    campNome.focus();
    temErro = true;
  }

  if (msgValor === '') {
    erroMsg.textContent = dict.form_erro_msg;
    if (!temErro) campMsg.focus();
    temErro = true;
  }

  if (temErro) return;

  /* Simula envio bem-sucedido */
  retorno.textContent = dict.form_sucesso;
  retorno.className   = 'sucesso';

  campNome.value = '';
  campMsg.value  = '';

  /* Remove mensagem de sucesso apos 6 segundos */
  setTimeout(function () {
    retorno.textContent = '';
    retorno.className   = '';
  }, 6000);
}


// ============================================================
// MENU MOBILE (HAMBURGER)
// ============================================================

/**
 * Abre ou fecha o menu de navegacao mobile.
 */
function toggleMenuMobile() {
  var menu = document.getElementById('menu-nav');
  var btn  = document.getElementById('btn-hamburger');
  if (!menu || !btn) return;

  var aberto = menu.classList.contains('menu-aberto');

  if (aberto) {
    menu.classList.remove('menu-aberto');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = '\u2630';
  } else {
    menu.classList.add('menu-aberto');
    btn.setAttribute('aria-expanded', 'true');
    btn.textContent = '\u2715';
  }
}

/**
 * Fecha o menu ao clicar em qualquer link de navegacao.
 */
function configurarFechamentoMenu() {
  var links = document.querySelectorAll('#menu-nav a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      var menu = document.getElementById('menu-nav');
      var btn  = document.getElementById('btn-hamburger');
      if (!menu || !btn) return;
      menu.classList.remove('menu-aberto');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '\u2630';
    });
  }
}

/**
 * Fecha o menu ao clicar fora do cabecalho.
 */
function configurarClickFora() {
  document.addEventListener('click', function (ev) {
    var menu  = document.getElementById('menu-nav');
    var btn   = document.getElementById('btn-hamburger');
    var cabec = document.getElementById('cabecalho');
    if (!menu || !btn || !cabec) return;

    if (!cabec.contains(ev.target) && menu.classList.contains('menu-aberto')) {
      menu.classList.remove('menu-aberto');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '\u2630';
    }
  });
}


// ============================================================
// ANIMACAO DE SCROLL (INTERSECTION OBSERVER)
// ============================================================

/**
 * Adiciona a classe .secao-animada a secoes e cards e observa
 * sua entrada no viewport, aplicando .visivel quando chegam.
 * A animacao e desativada automaticamente via CSS quando o usuario
 * configurou prefers-reduced-motion: reduce no sistema operacional.
 */
function configurarAnimacaoScroll() {
  if (!window.IntersectionObserver) return;

  var alvos = document.querySelectorAll(
    'section:not(#hero), .pilar-card, .tec-item, .estatistica-card'
  );

  var obs = new IntersectionObserver(function (entradas) {
    for (var k = 0; k < entradas.length; k++) {
      if (entradas[k].isIntersecting) {
        entradas[k].target.classList.add('visivel');
        obs.unobserve(entradas[k].target);
      }
    }
  }, { threshold: 0.12 });

  for (var m = 0; m < alvos.length; m++) {
    alvos[m].classList.add('secao-animada');
    obs.observe(alvos[m]);
  }
}


// ============================================================
// REGISTRO DE TODOS OS EVENT LISTENERS
// Centralizado em uma funcao chamada uma unica vez no
// DOMContentLoaded. Nenhum onclick inline e usado no HTML.
// ============================================================
function registrarEventListeners() {
  var map = {
    'btn-pt':       function () { mudarIdioma('pt'); },
    'btn-en':       function () { mudarIdioma('en'); },
    'btn-es':       function () { mudarIdioma('es'); },
    'btn-colorido': function () { mudarTema('padrao'); },
    'btn-branco':   function () { mudarTema('branco'); },
    'btn-preto':    function () { mudarTema('preto'); },
    'btn-Amais':    aumentarFonte,
    'btn-Amenos':   diminuirFonte,
    'btn-narrar':   alternarNarracao,
    'btn-hamburger':toggleMenuMobile,
    'btn-apoiar':   incrementarApoio,
    'btn-enviar':   enviarFormulario
  };

  for (var id in map) {
    if (Object.prototype.hasOwnProperty.call(map, id)) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('click', map[id]);
    }
  }
}


// ============================================================
// PONTO DE ENTRADA
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  registrarEventListeners();
  configurarFechamentoMenu();
  configurarClickFora();
  configurarAnimacaoScroll();

  /* Inicializa com tema padrao e idioma portugues */
  mudarTema('padrao');
  mudarIdioma('pt');
});
