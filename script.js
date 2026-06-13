/* ============================================================
   script.js — Agrinho 2026
   Funções: Multi-idioma, Temas, Zoom de Fonte, Narração, Apoios, Formulário
   ============================================================ */

'use strict';


// ══════════════════════════════════════════════════════════════
// 1. DICIONÁRIO COMPLETO DE TRADUÇÕES (PT / EN / ES)
// ══════════════════════════════════════════════════════════════
const traducoes = {

  pt: {
    page_title:           'Agrinho 2026 — Agro Forte, Futuro Sustentável',
    acesso_idioma:        'Idioma / Language:',
    acesso_visual:        'Visual:',
    acesso_texto:         'Texto:',
    acesso_audio:         'Áudio:',
    tema_padrao:          'Padrão',
    tema_branco:          'Acessível L/W',
    tema_preto:           'Acessível D/B',
    btn_narrar:           '🔊 Narrar Site',
    btn_parar:            '🛑 Parar Narração',

    logo_titulo:          'Agrinho 2026',
    logo_subtitulo:       'SENAR · Paraná',
    menu_sobre:           'Sobre',
    menu_tema:            'Tema',
    menu_tecnologias:     'Tecnologias',
    menu_video:           'Vídeo',
    menu_apoio:           'Apoiar',
    menu_contato:         'Contato',

    hero_eyebrow:         'Concurso Agrinho 2026',
    hero_titulo:          'Agro forte,\nfuturo sustentável',
    hero_subtitulo:       'Equilíbrio entre produção e meio ambiente',
    hero_btn_conhecer:    'Conhecer o Projeto',
    hero_btn_apoiar:      '👍 Apoiar Agora',

    sobre_eyebrow:        'O Programa',
    sobre_titulo:         'O que é o Agrinho?',
    sobre_p1:             'O Programa Agrinho é uma iniciativa do SENAR Paraná que existe há mais de 25 anos, conectando a educação do campo e da cidade por meio de temas como saúde, cidadania e, nesta edição, sustentabilidade agrícola.',
    sobre_p2:             'Em 2026, o tema convida estudantes a refletirem sobre como o agronegócio brasileiro pode ser economicamente forte sem comprometer os recursos naturais para as próximas gerações. Tecnologia, consciência e responsabilidade caminham juntas.',
    sobre_p3:             'Este site foi criado como projeto de participação, explorando conceitos de produção sustentável, inovação tecnológica no campo e o papel de cada cidadão na construção de um futuro mais verde.',
    estat_anos:           'Anos de Programa',
    estat_municipios:     'Municípios Participantes',
    estat_alunos:         'Alunos Impactados',

    tema_eyebrow:         'O Desafio',
    tema_titulo:          'Produção e Natureza em Equilíbrio',
    tema_intro:           'O Brasil é um dos maiores produtores de alimentos do mundo. Mas como garantir que essa produção respeite o planeta? Três pilares sustentam essa resposta:',
    pilar1_titulo:        'Agropecuária Responsável',
    pilar1_desc:          'Práticas como o plantio direto, rotação de culturas e integração lavoura-pecuária-floresta reduzem erosão do solo, poupam água e aumentam a produtividade ao mesmo tempo.',
    pilar2_titulo:        'Economia Circular',
    pilar2_desc:          'Resíduos agrícolas como palha e esterco viram energia, compostagem e biofertilizantes. Nada se perde: tudo se transforma em mais produção com menos impacto ambiental.',
    pilar3_titulo:        'Cidadania Ambiental',
    pilar3_desc:          'O campo precisa de guardiões. Desde a escola, cada aluno aprende que escolhas de consumo, descarte correto do lixo e preservação de nascentes são atos de cidadania concreta.',

    tec_eyebrow:          'Inovação no Campo',
    tec_titulo:           'Tecnologias Sustentáveis',
    tec_intro:            'O agricultor moderno conta com ferramentas que antes pareciam ficção científica. Veja três exemplos que já transformam o agro brasileiro:',
    drone_credito:        '📷 Foto: Pexels / Foto de Drone Agrícola',
    drone_titulo:         'Agricultura de Precisão com Drones',
    drone_desc:           'Drones equipados com câmeras multiespectrais sobrevoam as lavouras e identificam áreas com deficiência nutricional, pragas ou estresse hídrico com precisão de centímetros. Isso permite que o produtor aplique insumos somente onde é necessário, reduzindo o uso de defensivos em até 40% e economizando água e combustível. O resultado é uma lavoura mais saudável e um ambiente mais preservado.',
    irrigacao_credito:    '📷 Foto: Pexels / Foto de Irrigação por Gotejamento',
    irrigacao_titulo:     'Irrigação Inteligente por Gotejamento',
    irrigacao_desc:       'O sistema de irrigação por gotejamento entrega água diretamente na raiz da planta, gota a gota, controlado por sensores de umidade do solo conectados à internet. Sensores monitoram em tempo real a necessidade hídrica de cada espécie e irrigam apenas quando necessário. Comparado à irrigação convencional por aspersão, o gotejamento inteligente economiza até 60% de água — um recurso vital cada vez mais escasso no planeta.',
    solar_credito:        '📷 Foto: Pexels / Foto de Energia Solar Rural',
    solar_titulo:         'Energia Solar Fotovoltaica Rural',
    solar_desc:           'Painéis solares instalados em propriedades rurais geram eletricidade limpa diretamente do sol, eliminando ou reduzindo drasticamente a conta de energia de fazendas e sítios. A energia excedente pode ser injetada na rede elétrica, gerando créditos ao produtor. Com o custo dos painéis caindo mais de 80% na última década, a energia solar se tornou um dos investimentos mais inteligentes e sustentáveis para o agricultor brasileiro do século XXI.',

    video_eyebrow:        'Assista',
    video_titulo:         'O Campo em Movimento',
    video_intro:          'Veja a beleza e a força do agronegócio sustentável através das imagens abaixo.',
    video_credito:        '🎬 Vídeo por: Fernando Sánchez Aranguren (Pexels)',
    video_fallback:       'Seu navegador não suporta reprodução de vídeo HTML5.',

    apoio_eyebrow:        'Participe',
    apoio_titulo:         'Apoie Este Projeto',
    apoio_intro:          'Acredita num agro mais sustentável? Demonstre seu apoio clicando abaixo!',
    apoio_contador:       'Este projeto já recebeu {N} apoios!',
    apoio_btn:            'Apoiar Projeto',

    contato_eyebrow:      'Fale Conosco',
    contato_titulo:       'Deixe sua Sugestão',
    contato_intro:        'Tem uma ideia para tornar o projeto ainda melhor? Compartilhe com a gente!',
    form_label_nome:      'Nome completo',
    form_placeholder_nome:'Digite seu nome completo',
    form_label_email:     'E-mail (opcional)',
    form_placeholder_email:'seuemail@exemplo.com',
    form_label_msg:       'Sua sugestão ou mensagem',
    form_placeholder_msg: 'Escreva sua sugestão aqui...',
    form_btn_enviar:      '✉️ Enviar Sugestão',
    form_sucesso:         '✅ Sugestão enviada com sucesso! Obrigado pela sua contribuição.',
    form_erro_nome:       '⚠️ Por favor, preencha seu nome.',
    form_erro_msg:        '⚠️ Por favor, escreva sua mensagem.',

    rodape_titulo:        'Agrinho 2026',
    rodape_subtitulo:     'SENAR · Paraná',
    rodape_copy:          '© 2026 Concurso Agrinho — SENAR Paraná. Projeto educativo sem fins lucrativos.'
  },

  en: {
    page_title:           'Agrinho 2026 — Strong Agro, Sustainable Future',
    acesso_idioma:        'Language:',
    acesso_visual:        'Visual:',
    acesso_texto:         'Text:',
    acesso_audio:         'Audio:',
    tema_padrao:          'Default',
    tema_branco:          'Accessible L/W',
    tema_preto:           'Accessible D/B',
    btn_narrar:           '🔊 Read Site Aloud',
    btn_parar:            '🛑 Stop Reading',

    logo_titulo:          'Agrinho 2026',
    logo_subtitulo:       'SENAR · Paraná',
    menu_sobre:           'About',
    menu_tema:            'Theme',
    menu_tecnologias:     'Technologies',
    menu_video:           'Video',
    menu_apoio:           'Support',
    menu_contato:         'Contact',

    hero_eyebrow:         'Agrinho Contest 2026',
    hero_titulo:          'Strong Agro,\nSustainable Future',
    hero_subtitulo:       'Balance between production and the environment',
    hero_btn_conhecer:    'Learn About the Project',
    hero_btn_apoiar:      '👍 Support Now',

    sobre_eyebrow:        'The Program',
    sobre_titulo:         'What is Agrinho?',
    sobre_p1:             'The Agrinho Program is an initiative by SENAR Paraná that has existed for over 25 years, connecting rural and urban education through topics such as health, citizenship and, in this edition, agricultural sustainability.',
    sobre_p2:             'In 2026, the theme invites students to reflect on how Brazilian agribusiness can be economically strong without compromising natural resources for future generations. Technology, awareness, and responsibility go hand in hand.',
    sobre_p3:             'This website was created as a participation project, exploring concepts of sustainable production, technological innovation in agriculture, and the role of every citizen in building a greener future.',
    estat_anos:           'Years of Program',
    estat_municipios:     'Participating Municipalities',
    estat_alunos:         'Students Impacted',

    tema_eyebrow:         'The Challenge',
    tema_titulo:          'Production and Nature in Balance',
    tema_intro:           'Brazil is one of the world\'s largest food producers. But how can we ensure this production respects the planet? Three pillars support this answer:',
    pilar1_titulo:        'Responsible Agriculture',
    pilar1_desc:          'Practices such as no-till farming, crop rotation, and crop-livestock-forest integration reduce soil erosion, save water, and increase productivity at the same time.',
    pilar2_titulo:        'Circular Economy',
    pilar2_desc:          'Agricultural waste such as straw and manure becomes energy, compost, and biofertilizers. Nothing is lost: everything is transformed into more production with less environmental impact.',
    pilar3_titulo:        'Environmental Citizenship',
    pilar3_desc:          'The countryside needs guardians. From school, each student learns that consumer choices, proper waste disposal, and preservation of springs are acts of concrete citizenship.',

    tec_eyebrow:          'Innovation in the Field',
    tec_titulo:           'Sustainable Technologies',
    tec_intro:            'The modern farmer has tools that once seemed like science fiction. See three examples already transforming Brazilian agriculture:',
    drone_credito:        '📷 Photo: Pexels / Agricultural Drone Photo',
    drone_titulo:         'Precision Agriculture with Drones',
    drone_desc:           'Drones equipped with multispectral cameras fly over crops and identify areas with nutritional deficiencies, pests, or water stress with centimeter precision. This allows the producer to apply inputs only where needed, reducing pesticide use by up to 40% and saving water and fuel. The result is healthier crops and a more preserved environment.',
    irrigacao_credito:    '📷 Photo: Pexels / Drip Irrigation Photo',
    irrigacao_titulo:     'Smart Drip Irrigation',
    irrigacao_desc:       'The drip irrigation system delivers water directly to the plant root, drop by drop, controlled by soil moisture sensors connected to the internet. Sensors monitor each species\' water needs in real time and irrigate only when necessary. Compared to conventional sprinkler irrigation, smart drip saves up to 60% of water — a vital resource that is increasingly scarce on the planet.',
    solar_credito:        '📷 Photo: Pexels / Rural Solar Energy Photo',
    solar_titulo:         'Rural Photovoltaic Solar Energy',
    solar_desc:           'Solar panels installed on rural properties generate clean electricity directly from the sun, eliminating or drastically reducing the energy bills of farms and homesteads. Surplus energy can be fed into the electrical grid, generating credits for the producer. With panel costs falling more than 80% in the last decade, solar energy has become one of the smartest and most sustainable investments for the 21st century Brazilian farmer.',

    video_eyebrow:        'Watch',
    video_titulo:         'The Field in Motion',
    video_intro:          'See the beauty and strength of sustainable agribusiness through the images below.',
    video_credito:        '🎬 Video by: Fernando Sánchez Aranguren (Pexels)',
    video_fallback:       'Your browser does not support HTML5 video playback.',

    apoio_eyebrow:        'Get Involved',
    apoio_titulo:         'Support This Project',
    apoio_intro:          'Do you believe in a more sustainable agro? Show your support by clicking below!',
    apoio_contador:       'This project has already received {N} endorsements!',
    apoio_btn:            'Support Project',

    contato_eyebrow:      'Contact Us',
    contato_titulo:       'Leave Your Suggestion',
    contato_intro:        'Do you have an idea to make the project even better? Share it with us!',
    form_label_nome:      'Full name',
    form_placeholder_nome:'Enter your full name',
    form_label_email:     'E-mail (optional)',
    form_placeholder_email:'youremail@example.com',
    form_label_msg:       'Your suggestion or message',
    form_placeholder_msg: 'Write your suggestion here...',
    form_btn_enviar:      '✉️ Send Suggestion',
    form_sucesso:         '✅ Suggestion sent successfully! Thank you for your contribution.',
    form_erro_nome:       '⚠️ Please fill in your name.',
    form_erro_msg:        '⚠️ Please write your message.',

    rodape_titulo:        'Agrinho 2026',
    rodape_subtitulo:     'SENAR · Paraná',
    rodape_copy:          '© 2026 Agrinho Contest — SENAR Paraná. Non-profit educational project.'
  },

  es: {
    page_title:           'Agrinho 2026 — Agro fuerte, futuro sostenible',
    acesso_idioma:        'Idioma / Language:',
    acesso_visual:        'Visual:',
    acesso_texto:         'Texto:',
    acesso_audio:         'Audio:',
    tema_padrao:          'Estándar',
    tema_branco:          'Accesible L/W',
    tema_preto:           'Accesible D/B',
    btn_narrar:           '🔊 Narrar Sitio',
    btn_parar:            '🛑 Detener Narración',

    logo_titulo:          'Agrinho 2026',
    logo_subtitulo:       'SENAR · Paraná',
    menu_sobre:           'Acerca de',
    menu_tema:            'Tema',
    menu_tecnologias:     'Tecnologías',
    menu_video:           'Video',
    menu_apoio:           'Apoyar',
    menu_contato:         'Contacto',

    hero_eyebrow:         'Concurso Agrinho 2026',
    hero_titulo:          'Agro fuerte,\nfuturo sostenible',
    hero_subtitulo:       'Equilibrio entre producción y medio ambiente',
    hero_btn_conhecer:    'Conocer el Proyecto',
    hero_btn_apoiar:      '👍 Apoyar Ahora',

    sobre_eyebrow:        'El Programa',
    sobre_titulo:         '¿Qué es Agrinho?',
    sobre_p1:             'El Programa Agrinho es una iniciativa de SENAR Paraná que existe desde hace más de 25 años, conectando la educación del campo y la ciudad a través de temas como salud, ciudadanía y, en esta edición, sostenibilidad agrícola.',
    sobre_p2:             'En 2026, el tema invita a los estudiantes a reflexionar sobre cómo el agronegocio brasileño puede ser económicamente fuerte sin comprometer los recursos naturales para las próximas generaciones. Tecnología, conciencia y responsabilidad van de la mano.',
    sobre_p3:             'Este sitio fue creado como proyecto de participación, explorando conceptos de producción sostenible, innovación tecnológica en el campo y el papel de cada ciudadano en la construcción de un futuro más verde.',
    estat_anos:           'Años de Programa',
    estat_municipios:     'Municipios Participantes',
    estat_alunos:         'Alumnos Impactados',

    tema_eyebrow:         'El Desafío',
    tema_titulo:          'Producción y Naturaleza en Equilibrio',
    tema_intro:           'Brasil es uno de los mayores productores de alimentos del mundo. ¿Pero cómo garantizar que esa producción respete el planeta? Tres pilares sostienen esta respuesta:',
    pilar1_titulo:        'Agropecuaria Responsable',
    pilar1_desc:          'Prácticas como la siembra directa, la rotación de cultivos y la integración cultivo-ganadería-forestal reducen la erosión del suelo, ahorran agua y aumentan la productividad al mismo tiempo.',
    pilar2_titulo:        'Economía Circular',
    pilar2_desc:          'Los residuos agrícolas como la paja y el estiércol se convierten en energía, compostaje y biofertilizantes. Nada se pierde: todo se transforma en más producción con menos impacto ambiental.',
    pilar3_titulo:        'Ciudadanía Ambiental',
    pilar3_desc:          'El campo necesita guardianes. Desde la escuela, cada alumno aprende que las elecciones de consumo, la correcta eliminación de residuos y la preservación de los manantiales son actos de ciudadanía concreta.',

    tec_eyebrow:          'Innovación en el Campo',
    tec_titulo:           'Tecnologías Sostenibles',
    tec_intro:            'El agricultor moderno cuenta con herramientas que antes parecían ciencia ficción. Vea tres ejemplos que ya transforman el agro brasileño:',
    drone_credito:        '📷 Foto: Pexels / Foto de Dron Agrícola',
    drone_titulo:         'Agricultura de Precisión con Drones',
    drone_desc:           'Los drones equipados con cámaras multiespectrales sobrevuelan los cultivos e identifican áreas con deficiencia nutricional, plagas o estrés hídrico con precisión centimétrica. Esto permite al productor aplicar insumos solo donde es necesario, reduciendo el uso de agroquímicos hasta en un 40% y ahorrando agua y combustible. El resultado es un cultivo más saludable y un ambiente más preservado.',
    irrigacao_credito:    '📷 Foto: Pexels / Foto de Riego por Goteo',
    irrigacao_titulo:     'Riego Inteligente por Goteo',
    irrigacao_desc:       'El sistema de riego por goteo entrega agua directamente a la raíz de la planta, gota a gota, controlado por sensores de humedad del suelo conectados a internet. Los sensores monitorean en tiempo real la necesidad hídrica de cada especie y riegan solo cuando es necesario. En comparación con el riego convencional por aspersión, el goteo inteligente ahorra hasta un 60% de agua, un recurso vital cada vez más escaso en el planeta.',
    solar_credito:        '📷 Foto: Pexels / Foto de Energía Solar Rural',
    solar_titulo:         'Energía Solar Fotovoltaica Rural',
    solar_desc:           'Los paneles solares instalados en propiedades rurales generan electricidad limpia directamente del sol, eliminando o reduciendo drásticamente la factura energética de granjas y haciendas. La energía excedente puede inyectarse en la red eléctrica, generando créditos para el productor. Con el costo de los paneles cayendo más del 80% en la última década, la energía solar se ha convertido en una de las inversiones más inteligentes y sostenibles para el agricultor brasileño del siglo XXI.',

    video_eyebrow:        'Mire',
    video_titulo:         'El Campo en Movimiento',
    video_intro:          'Vea la belleza y la fuerza del agronegocio sostenible a través de las imágenes a continuación.',
    video_credito:        '🎬 Video de: Fernando Sánchez Aranguren (Pexels)',
    video_fallback:       'Su navegador no es compatible con la reproducción de video HTML5.',

    apoio_eyebrow:        'Participa',
    apoio_titulo:         'Apoya Este Proyecto',
    apoio_intro:          '¿Crees en un agro más sostenible? ¡Demuestra tu apoyo haciendo clic abajo!',
    apoio_contador:       '¡Este proyecto ya recibió {N} apoyos!',
    apoio_btn:            'Apoyar Proyecto',

    contato_eyebrow:      'Contáctanos',
    contato_titulo:       'Deja tu Sugerencia',
    contato_intro:        '¿Tienes una idea para hacer el proyecto aún mejor? ¡Compártela con nosotros!',
    form_label_nome:      'Nombre completo',
    form_placeholder_nome:'Escribe tu nombre completo',
    form_label_email:     'Correo electrónico (opcional)',
    form_placeholder_email:'tucorreo@ejemplo.com',
    form_label_msg:       'Tu sugerencia o mensaje',
    form_placeholder_msg: 'Escribe tu sugerencia aquí...',
    form_btn_enviar:      '✉️ Enviar Sugerencia',
    form_sucesso:         '✅ ¡Sugerencia enviada con éxito! Gracias por tu contribución.',
    form_erro_nome:       '⚠️ Por favor, completa tu nombre.',
    form_erro_msg:        '⚠️ Por favor, escribe tu mensaje.',

    rodape_titulo:        'Agrinho 2026',
    rodape_subtitulo:     'SENAR · Paraná',
    rodape_copy:          '© 2026 Concurso Agrinho — SENAR Paraná. Proyecto educativo sin fines de lucro.'
  }

};


// ══════════════════════════════════════════════════════════════
// 2. ESTADO GLOBAL DA APLICAÇÃO
// ══════════════════════════════════════════════════════════════
var idiomaAtivo    = 'pt';     // idioma atual
var temaAtivo      = 'padrao'; // tema visual atual
var totalApoios    = 0;        // contador de apoios
var narratorAtivo  = false;    // se a narração está rodando
var tamanhoFonte   = 16;       // tamanho base da fonte em px


// ══════════════════════════════════════════════════════════════
// 3. FUNÇÃO PRINCIPAL — INICIALIZAÇÃO DO SITE
// ══════════════════════════════════════════════════════════════
function iniciarSite() {
  aplicarTraduzoes('pt');
  atualizarBotoesIdioma('pt');
}


// ══════════════════════════════════════════════════════════════
// 4. SISTEMA MULTI-IDIOMA
// ══════════════════════════════════════════════════════════════

// Muda o idioma do site inteiro
function mudarIdioma(lang) {
  idiomaAtivo = lang;
  aplicarTraduzoes(lang);
  atualizarBotoesIdioma(lang);
  atualizarContadorApoios(); // atualiza a frase do contador no novo idioma
  atualizarNarradorBotao();  // atualiza o texto do botão de narração
}

// Percorre todos os elementos com data-i18n e substitui o texto
function aplicarTraduzoes(lang) {
  var dicionario = traducoes[lang];

  // Atualiza o título da página
  document.title = dicionario['page_title'];

  // Atualiza o atributo lang do HTML (para acessibilidade e pronúncia)
  var mapaLang = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };
  document.documentElement.lang = mapaLang[lang];

  // Atualiza todos os elementos com data-i18n
  var elementos = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < elementos.length; i++) {
    var el       = elementos[i];
    var chave    = el.getAttribute('data-i18n');
    var traducao = dicionario[chave];

    if (traducao === undefined) continue; // chave não encontrada: pula

    // O contador usa {N} como placeholder — tratado separadamente
    if (chave === 'apoio_contador') continue;

    // O h1 do hero usa \n para quebra de linha
    if (chave === 'hero_titulo') {
      el.innerHTML = traducao.replace('\n', '<br>');
    } else {
      el.textContent = traducao;
    }
  }

  // Atualiza placeholders dos campos do formulário
  var inputsComPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');
  for (var j = 0; j < inputsComPlaceholder.length; j++) {
    var inp    = inputsComPlaceholder[j];
    var chaveP = inp.getAttribute('data-i18n-placeholder');
    if (dicionario[chaveP]) {
      inp.placeholder = dicionario[chaveP];
    }
  }

  // Limpa mensagens de erro e sucesso do formulário ao mudar idioma
  var erroNome = document.getElementById('erro-nome');
  var erroMsg  = document.getElementById('erro-msg');
  var retorno  = document.getElementById('form-retorno');
  if (erroNome) erroNome.textContent = '';
  if (erroMsg)  erroMsg.textContent  = '';
  if (retorno)  { retorno.textContent = ''; retorno.className = ''; }
}

// Destaca visualmente o botão do idioma ativo
function atualizarBotoesIdioma(lang) {
  var btnPt = document.getElementById('btn-pt');
  var btnEn = document.getElementById('btn-en');
  var btnEs = document.getElementById('btn-es');

  btnPt.classList.remove('btn-ativo');
  btnEn.classList.remove('btn-ativo');
  btnEs.classList.remove('btn-ativo');

  btnPt.setAttribute('aria-pressed', 'false');
  btnEn.setAttribute('aria-pressed', 'false');
  btnEs.setAttribute('aria-pressed', 'false');

  if (lang === 'pt') { btnPt.classList.add('btn-ativo'); btnPt.setAttribute('aria-pressed', 'true'); }
  if (lang === 'en') { btnEn.classList.add('btn-ativo'); btnEn.setAttribute('aria-pressed', 'true'); }
  if (lang === 'es') { btnEs.classList.add('btn-ativo'); btnEs.setAttribute('aria-pressed', 'true'); }
}


// ══════════════════════════════════════════════════════════════
// 5. SISTEMA DE TEMAS VISUAIS
// ══════════════════════════════════════════════════════════════
function mudarTema(tema) {
  var corpo = document.body;

  // Remove todos os temas anteriores
  corpo.classList.remove('tema-branco', 'tema-preto');

  // Aplica o tema solicitado
  if (tema === 'branco') {
    corpo.classList.add('tema-branco');
  } else if (tema === 'preto') {
    corpo.classList.add('tema-preto');
  }
  // 'padrao' não precisa de classe — usa as variáveis padrão do :root

  temaAtivo = tema;
}


// ══════════════════════════════════════════════════════════════
// 6. DIMENSIONADOR DINÂMICO DE TEXTO (REM / Zoom)
// ══════════════════════════════════════════════════════════════
var FONTE_MINIMA = 10; // px
var FONTE_MAXIMA = 26; // px
var PASSO_FONTE  = 2;  // px por clique

function aumentarFonte() {
  if (tamanhoFonte < FONTE_MAXIMA) {
    tamanhoFonte += PASSO_FONTE;
    aplicarTamanhoFonte();
  }
}

function diminuirFonte() {
  if (tamanhoFonte > FONTE_MINIMA) {
    tamanhoFonte -= PASSO_FONTE;
    aplicarTamanhoFonte();
  }
}

function aplicarTamanhoFonte() {
  document.documentElement.style.fontSize = tamanhoFonte + 'px';
}


// ══════════════════════════════════════════════════════════════
// 7. API DE SÍNTESE DE VOZ (NARRADOR DE TELA)
// ══════════════════════════════════════════════════════════════

// Mapeia os idiomas para os códigos BCP-47 corretos
var mapaVozLang = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES'
};

// Alterna entre iniciar e parar a narração
function alternarNarracao() {
  if (!window.speechSynthesis) {
    alert('Seu navegador não suporta a API de síntese de voz.');
    return;
  }

  if (narratorAtivo) {
    pararNarracao();
  } else {
    iniciarNarracao();
  }
}

// Captura o texto do <main> e inicia a narração
function iniciarNarracao() {
  var conteudo = document.getElementById('conteudo-principal');
  if (!conteudo) return;

  var textoCompleto = conteudo.innerText || conteudo.textContent;
  if (!textoCompleto || textoCompleto.trim() === '') return;

  // Para qualquer narração anterior antes de iniciar nova
  window.speechSynthesis.cancel();

  var fala      = new SpeechSynthesisUtterance(textoCompleto);
  fala.lang     = mapaVozLang[idiomaAtivo] || 'pt-BR';
  fala.rate     = 0.92;  // velocidade ligeiramente mais lenta para clareza
  fala.pitch    = 1.0;
  fala.volume   = 1.0;

  // Quando a narração terminar naturalmente, reseta o estado
  fala.onend = function() {
    narratorAtivo = false;
    atualizarNarradorBotao();
  };

  // Se houver erro na síntese de voz, reseta o estado
  fala.onerror = function() {
    narratorAtivo = false;
    atualizarNarradorBotao();
  };

  window.speechSynthesis.speak(fala);
  narratorAtivo = true;
  atualizarNarradorBotao();
}

// Para a narração em andamento
function pararNarracao() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  narratorAtivo = false;
  atualizarNarradorBotao();
}

// Atualiza o texto do botão conforme o estado ativo/inativo
function atualizarNarradorBotao() {
  var btn = document.getElementById('btn-narrar');
  if (!btn) return;

  var dicionario = traducoes[idiomaAtivo];
  if (narratorAtivo) {
    btn.textContent = dicionario['btn_parar'];
  } else {
    btn.textContent = dicionario['btn_narrar'];
  }
}


// ══════════════════════════════════════════════════════════════
// 8. CONTADOR DE APOIOS
// ══════════════════════════════════════════════════════════════
function incrementarApoio() {
  totalApoios++;

  // Animação visual no botão
  var btn = document.getElementById('btn-apoiar');
  if (btn) {
    btn.classList.remove('apoiar-animado');
    // Força o browser a reconhecer a remoção antes de readicionar
    void btn.offsetWidth;
    btn.classList.add('apoiar-animado');
  }

  atualizarContadorApoios();
}

// Atualiza o texto do contador respeitando o idioma ativo e o número atual
function atualizarContadorApoios() {
  var dicionario = traducoes[idiomaAtivo];
  var template   = dicionario['apoio_contador'];
  var textoFinal = template.replace('{N}', totalApoios);

  var elTexto = document.getElementById('texto-apoios');
  if (elTexto) {
    elTexto.textContent = textoFinal;
  }
}


// ══════════════════════════════════════════════════════════════
// 9. VALIDAÇÃO E ENVIO DO FORMULÁRIO
// ══════════════════════════════════════════════════════════════
function enviarFormulario() {
  var dicionario = traducoes[idiomaAtivo];

  var campNome = document.getElementById('campo-nome');
  var campMsg  = document.getElementById('campo-mensagem');
  var erroNome = document.getElementById('erro-nome');
  var erroMsg  = document.getElementById('erro-msg');
  var retorno  = document.getElementById('form-retorno');

  // Limpa mensagens anteriores
  erroNome.textContent = '';
  erroMsg.textContent  = '';
  retorno.textContent  = '';
  retorno.className    = '';

  var nomeValor = campNome.value.trim();
  var msgValor  = campMsg.value.trim();

  var temErro = false;

  // Valida o campo Nome
  if (nomeValor === '') {
    erroNome.textContent = dicionario['form_erro_nome'];
    campNome.focus();
    temErro = true;
  }

  // Valida o campo Mensagem
  if (msgValor === '') {
    erroMsg.textContent = dicionario['form_erro_msg'];
    if (!temErro) campMsg.focus();
    temErro = true;
  }

  // Se houver erros, para aqui
  if (temErro) {
    return;
  }

  // Tudo válido — exibe mensagem de sucesso
  retorno.textContent = dicionario['form_sucesso'];
  retorno.className   = 'sucesso';

  // Limpa os campos após o envio bem-sucedido
  campNome.value = '';
  campMsg.value  = '';

  // Remove a mensagem de sucesso após alguns segundos
  setTimeout(function() {
    retorno.textContent = '';
    retorno.className   = '';
  }, 6000);
}


// ══════════════════════════════════════════════════════════════
// 10. MENU MOBILE (HAMBÚRGUER)
// ══════════════════════════════════════════════════════════════
function toggleMenuMobile() {
  var menu = document.getElementById('menu-nav');
  var btn  = document.getElementById('btn-hamburger');

  var estaAberto = menu.classList.contains('menu-aberto');

  if (estaAberto) {
    menu.classList.remove('menu-aberto');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = '☰';
  } else {
    menu.classList.add('menu-aberto');
    btn.setAttribute('aria-expanded', 'true');
    btn.textContent = '✕';
  }
}

// Fecha o menu mobile ao clicar em qualquer link da navegação
function configurarFechamentoMenu() {
  var links = document.querySelectorAll('#menu-nav a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      var menu = document.getElementById('menu-nav');
      var btn  = document.getElementById('btn-hamburger');
      menu.classList.remove('menu-aberto');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '☰';
    });
  }
}

// Fecha o menu ao clicar fora dele
function configurarClickFora() {
  document.addEventListener('click', function(evento) {
    var menu    = document.getElementById('menu-nav');
    var btnMenu = document.getElementById('btn-hamburger');
    var cabec   = document.getElementById('cabecalho');

    if (!cabec) return;

    var clicouDentro = cabec.contains(evento.target);

    if (!clicouDentro && menu.classList.contains('menu-aberto')) {
      menu.classList.remove('menu-aberto');
      btnMenu.setAttribute('aria-expanded', 'false');
      btnMenu.textContent = '☰';
    }
  });
}


// ══════════════════════════════════════════════════════════════
// 11. ANIMAÇÃO SUAVE DAS SEÇÕES AO ROLAR (SCROLL)
// ══════════════════════════════════════════════════════════════
function configurarAnimacaoScroll() {
  // Verifica suporte ao IntersectionObserver
  if (!window.IntersectionObserver) return;

  // Adiciona estilo inicial de entrada invisível via JS
  var estilo = document.createElement('style');
  estilo.textContent =
    '.secao-animada { opacity: 0; transform: translateY(28px); transition: opacity 0.55s ease, transform 0.55s ease; }' +
    '.secao-animada.visivel { opacity: 1; transform: translateY(0); }' +
    '@media (prefers-reduced-motion: reduce) { .secao-animada { opacity: 1; transform: none; transition: none; } }';
  document.head.appendChild(estilo);

  var secoes = document.querySelectorAll('section:not(#hero), .pilar-card, .tec-item, .estatistica-card');

  var observador = new IntersectionObserver(function(entradas) {
    for (var k = 0; k < entradas.length; k++) {
      var entrada = entradas[k];
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target); // para de observar após entrar
      }
    }
  }, { threshold: 0.12 });

  for (var m = 0; m < secoes.length; m++) {
    secoes[m].classList.add('secao-animada');
    observador.observe(secoes[m]);
  }
}


// ══════════════════════════════════════════════════════════════
// 12. PONTO DE ENTRADA — AGUARDA O DOM ESTAR PRONTO
// ══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  iniciarSite();
  configurarFechamentoMenu();
  configurarClickFora();
  configurarAnimacaoScroll();
});
