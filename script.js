// =======================================================================================
// BANCO DE DADOS DE IDIOMAS (PARTE A)
// =======================================================================================

/**
 * Mapeamento estruturado de traduções para suportar a internacionalização do site.
 * Permite comutação linguística instantânea e off-line para três idiomas independentes.
 */
const traducoes = {
    pt: {
        txtIdioma: "Idioma / Language:",
        txtVisual: "Visual:",
        txtTemaPadrao: "Padrão",
        txtTemaBranco: "Acessível L/W",
        txtTemaPreto: "Acessível D/B",
        txtTexto: "Texto:",
        txtAudio: "Áudio:",
        titulo: "Projeto Agrinho 2026",
        menuInicio: "Início",
        menuEquilibrio: "O Equilíbrio",
        menuTecnologia: "Tecnologia no Campo",
        menuParticipe: "Participe",
        bannerH2: "Agro Forte, Futuro Sustentável",
        bannerP: "Descubra como a produção de alimentos e a preservação do meio ambiente andam juntas para garantir o amanhã.",
        bannerBtn: "Entender o Projeto",
        secaoEquiH3: "O Equilíbrio Necessário",
        secaoEquiP: "Para o nosso futuro ser seguro, o campo precisa produzir alimentos de forma eficiente sem esgotar os recursos naturais da nossa terra.",
        card1H4: "Produção Forte",
        card1P: "O agro abastece as cidades, gera empregos e garante que a comida chegue na mesa de milhões de pessoas todos os dias.",
        card2H4: "Preservação Ativa",
        card2P: "Cuidar das florestas, proteger as nascentes de água e evitar poluição é o que mantém a terra fértil para as próximas gerações."
    },
    en: {
        txtIdioma: "Idioma / Language:",
        txtVisual: "Visual:",
        txtTemaPadrao: "Default",
        txtTemaBranco: "Accessible L/W",
        txtTemaPreto: "Accessible D/B",
        txtTexto: "Text:",
        txtAudio: "Audio:",
        titulo: "Agrinho Project 2026",
        menuInicio: "Home",
        menuEquilibrio: "The Balance",
        menuTecnologia: "Farm Tech",
        menuParticipe: "Join In",
        bannerH2: "Strong Agro, Sustainable Future",
        bannerP: "Discover how food production and environmental preservation work together to guarantee tomorrow.",
        bannerBtn: "Understand the Project",
        secaoEquiH3: "The Necessary Balance",
        secaoEquiP: "For our future to be safe, the countryside must produce food efficiently without depleting our land's natural resources.",
        card1H4: "Strong Production",
        card1P: "Agribusiness supplies cities, creates jobs, and ensures food reaches the tables of millions every day.",
        card2H4: "Active Preservation",
        card2P: "Caring for forests, protecting water sources, and avoiding pollution is what keeps the soil fertile for future generations."
    },
    es: {
        txtIdioma: "Idioma / Language:",
        txtVisual: "Visual:",
        txtTemaPadrao: "Predet.",
        txtTemaBranco: "Accesible L/W",
        txtTemaPreto: "Accesible D/B",
        txtTexto: "Texto:",
        txtAudio: "Audio:",
        titulo: "Proyecto Agrinho 2026",
        menuInicio: "Inicio",
        menuEquilibrio: "El Equilibrio",
        menuTecnologia: "Tecnología de Campo",
        menuParticipe: "Participe",
        bannerH2: "Agro Fuerte, Futuro Sostenible",
        bannerP: "Descubra cómo la producción de alimentos y la preservación del medio ambiente trabajan juntas para garantizar el mañana.",
        bannerBtn: "Entender el Proyecto",
        secaoEquiH3: "El Equilibrio Necessario",
        secaoEquiP: "Para que nuestro futuro sea seguro, el campo debe producir alimentos de manera eficiente sin agotar los recursos naturales de nuestra tierra.",
        card1H4: "Producción Fuerte",
        card1P: "El agronegocio abastece a las ciudades, genera empleos y garantiza que la comida llegue a la mesa de millones todos los días.",
        card2H4: "Preservación Activa",
        card2P: "Cuidar los bosques, proteger las fuentes de agua y evitar la contaminación mantiene el suelo fértil para las próximas generaciones."
    }
};

// Inicialização das variáveis globais para sincronizar o estado da aplicação
let idiomaAtual = "pt";
let numeroDeLikes = 0;
// =======================================================================================
// BLOCO 2 DE 4: BANCO DE DADOS DE IDIOMAS (PARTE B)
// =======================================================================================

// Extensão do dicionário para o idioma Português (PT)
traducoes.pt.videoH4 = "Assista: O Futuro do Agro Sustentável";
traducoes.pt.txtVideoCredito = "Vídeo por: Fernando Sánchez Aranguren (Pexels)";
traducoes.pt.secaoTecH3 = "Inovação e Tecnologia Sustentável";
traducoes.pt.secaoTecP = "Hoje, o produtor rural usa ferramentas modernas para evitar desperdícios. Veja alguns exemplos de práticas reais:";
traducoes.pt.droneTitulo = "Drones agrícolas";
traducoes.pt.droneTexto = " Monitoram as plantações de cima, encontrando pragas e evitando o uso exagerado de defensivos agrícolas.";
traducoes.pt.txtFotoDrone = "Foto: DRONE EFT / Unsplash";
traducoes.pt.irriTitulo = "Irrigação gota a gota";
traducoes.pt.irriTexto = " Leva a quantidade exata de água que a planta precisa diretamente na raiz, economizando rios de água.";
traducoes.pt.txtFotoIrri = "Foto: Being Organic in EU / Unsplash";
traducoes.pt.solarTitulo = "Energia Solar";
traducoes.pt.solarTexto = " Uso de placas fotovoltaicas para gerar energia limpa nas fazendas e reduzir o impacto no ambiente.";
traducoes.pt.txtFotoSolar = "Foto: American Public Power Assoc. / Unsplash";
traducoes.pt.secaoIntH3 = "Participe da Nossa Ideia";
traducoes.pt.secaoIntP = "Apoie o nosso projeto escolar ou envie uma sugestão de prática sustentável para o campo!";
traducoes.pt.btnLike = "👍 Apoiar Projeto";
traducoes.pt.contadorTextoPre = "Este projeto já recebeu ";
traducoes.pt.contadorTextoPos = " apoios!";
traducoes.pt.formH4 = "Envie sua Sugestão";
traducoes.pt.labelNome = "Seu Nome:";
traducoes.pt.placeholderNome = "Digite seu nome completo";
traducoes.pt.labelMensagem = "Sua Sugestão Ambiental:";
traducoes.pt.placeholderMensagem = "Escreva aqui uma ideia para ajudar o meio ambiente...";
traducoes.pt.btnEnviar = "Enviar Mensagem";
traducoes.pt.btnNarrarTxt = "🔊 Narrar Site";
traducoes.pt.alertaCampos = "Por favor, preencha todos os campos antes de enviar!";
traducoes.pt.alertaSucesso = "Obrigado por sua sugestão, {nome}! Juntos pelo agro sustentável.";
traducoes.pt.creditoDesenvolvedor = "© 2026 - Desenvolvido para o Concurso Agrinho | Categoria Front-End";
traducoes.pt.creditoColegio = "Ensino Médio - Colégio Estadual do Paraná";

// Extensão do dicionário para o idioma Inglês (EN)
traducoes.en.videoH4 = "Watch: The Future of Sustainable Agro";
traducoes.en.txtVideoCredito = "Video by: Fernando Sánchez Aranguren (Pexels)";
traducoes.en.secaoTecH3 = "Innovation and Sustainable Technology";
traducoes.en.secaoTecP = "Today, rural producers use modern tools to avoid waste. See some examples of real practices:";
traducoes.en.droneTitulo = "Agricultural drones";
traducoes.en.droneTexto = " Monitor crops from above, finding pests and avoiding the excessive use of pesticides.";
traducoes.en.txtFotoDrone = "Photo: DRONE EFT / Unsplash";
traducoes.en.irriTitulo = "Drip irrigation";
traducoes.en.irriTexto = " Delivers the exact amount of water the plant needs directly to the root, saving tons of water.";
traducoes.en.txtFotoIrri = "Photo: Being Organic in EU / Unsplash";
traducoes.en.solarTitulo = "Solar Energy";
traducoes.en.solarTexto = " Use of photovoltaic panels to generate clean energy on farms and reduce environmental impact.";
traducoes.en.txtFotoSolar = "Photo: American Public Power Assoc. / Unsplash";
traducoes.en.secaoIntH3 = "Join Our Idea";
traducoes.en.secaoIntP = "Support our school project or send a suggestion for a sustainable practice for the countryside!";
traducoes.en.btnLike = "👍 Support Project";
traducoes.en.contadorTextoPre = "This project has already received ";
traducoes.en.contadorTextoPos = " supports!";
traducoes.en.formH4 = "Send your Suggestion";
traducoes.en.labelNome = "Your Name:";
traducoes.en.placeholderNome = "Enter your full name";
traducoes.en.labelMensagem = "Your Environmental Suggestion:";
traducoes.en.placeholderMensagem = "Write an idea to help the environment here...";
traducoes.en.btnEnviar = "Send Message";
traducoes.en.btnNarrarTxt = "🔊 Narrate Site";
traducoes.en.alertaCampos = "Please fill in all fields before sending!";
traducoes.en.alertaSucesso = "Thank you for your suggestion, {nome}! Together for sustainable agro.";
traducoes.en.creditoDesenvolvedor = "2026 - Developed for the Agrinho Contest | Front-End Category";
traducoes.en.creditoColegio = "High School - Paraná State College";

// Extensão do dicionário para o idioma Espanhol (ES)
traducoes.es.videoH4 = "Vea: El Futuro del Agro Sostenible";
traducoes.es.txtVideoCredito = "Video por: Fernando Sánchez Aranguren (Pexels)";
traducoes.es.secaoTecH3 = "Innovación y Tecnología Sostenible";
traducoes.es.secaoTecP = "Hoy en día, los productores rurales utilizan herramientas modernas para evitar el desperdicio. Vea algunos ejemplos prácticos:";
traducoes.es.droneTitulo = "Drones agrícolas";
traducoes.es.droneTexto = " Monitorean los cultivos desde arriba, encontrando plagas y evitando el uso excesivo de pesticidas.";
traducoes.es.txtFotoDrone = "Foto: DRONE EFT / Unsplash";
traducoes.es.irriTitulo = "Riego por goteo";
traducoes.es.irriTexto = " Lleva la cantidad exacta de agua que la planta necesita directamente a la raíz, ahorrando ríos de agua.";
traducoes.es.txtFotoIrri = "Foto: Being Organic in EU / Unsplash";
traducoes.es.solarTitulo = "Energía Solar";
traducoes.es.solarTexto = " Uso de paneles fotovoltaicos para generar energía limpia en las fincas y reducir el impacto ambiental.";
traducoes.es.txtFotoSolar = "Foto: American Public Power Assoc. / Unsplash";
traducoes.es.secaoIntH3 = "Participe de Nuestra Idea";
traducoes.es.secaoIntP = "¡Apoye nuestro proyecto escolar o envíe una sugerencia de práctica sostenible para el campo!";
traducoes.es.btnLike = "👍 Apoyar Proyecto";
traducoes.es.contadorTextoPre = "¡Este proyecto ya ha recibido ";
traducoes.es.contadorTextoPos = " apoyos!";
traducoes.es.formH4 = "Envíe su Sugerencia";
traducoes.es.labelNome = "Su Nombre:";
traducoes.es.placeholderNome = "Escriba su nombre completo";
traducoes.es.labelMensagem = "Su Sugerencia Ambiental:";
traducoes.es.placeholderMensagem = "Escriba aquí una idea para ayudar al medio ambiente...";
traducoes.es.btnEnviar = "Enviar Mensaje";
traducoes.es.btnNarrarTxt = "🔊 Narrar Sitio";
traducoes.es.alertaCampos = "¡Por favor, complete todos los campos antes de enviar!";
traducoes.es.alertaSucesso = "¡Gracias por su sugerencia, {nome}! Juntos por el agro sostenible.";
traducoes.es.creditoDesenvolvedor = "© 2026 - Desarrollado para el Concurso Agrinho | Categoría Front-End";
traducoes.es.creditoColegio = "Escuela Secundaria - Colegio Estatal de Paraná";
// =======================================================================================
// TRADUÇÃO E MANIPULAÇÃO DINÂMICA DO DOM
// =======================================================================================

/**
 * Varre o documento e reescreve os elementos textuais e placeholders com base no idioma ativo.
 * Protege mídias contra recarregamento alterando apenas strings específicas.
 * @param {string} idioma - Código identificador ('pt', 'en', 'es').
 */
function alternarIdioma(idioma) {
    idiomaAtual = idioma;
    const txt = traducoes[idioma];

    // Atualização dos rótulos fixos da Barra de Acessibilidade Superior
    document.getElementById("txt-lbl-idioma").textContent = txt.txtIdioma;
    document.getElementById("txt-lbl-visual").textContent = txt.txtVisual;
    document.getElementById("btn-colorido").textContent = txt.txtThemePadrão || txt.txtTemaPadrao;
    document.getElementById("btn-branco").textContent = txt.txtTemaBranco;
    document.getElementById("btn-preto").textContent = txt.txtTemaPreto;
    document.getElementById("txt-lbl-texto").textContent = txt.txtTexto;
    document.getElementById("txt-lbl-audio").textContent = txt.txtAudio;
    
    // Atualização estrutural do Cabeçalho e Menu
    document.getElementById("titulo-site").textContent = txt.titulo;
    document.getElementById("menu-inicio").textContent = txt.menuInicio;
    document.getElementById("menu-equilibrio").textContent = txt.menuEquilibrio;
    document.getElementById("menu-tecnologia").textContent = txt.menuTecnologia;
    document.getElementById("menu-participe").textContent = txt.menuParticipe;
    
    // Atualização textual do Hero Banner Principal (Cenário 1)
    document.getElementById("banner-h2").textContent = txt.bannerH2;
    document.getElementById("banner-p").textContent = txt.bannerP;
    document.getElementById("banner-btn").textContent = txt.bannerBtn;
    
    // Atualização textual do Cenário 2 (Cards e Vídeos Locais)
    document.getElementById("secao-equi-h3").textContent = txt.secaoEquiH3;
    document.getElementById("secao-equi-p").textContent = txt.secaoEquiP;
    document.getElementById("card1-h4").textContent = txt.card1H4;
    document.getElementById("card1-p").textContent = txt.card1P;
    document.getElementById("card2-h4").textContent = txt.card2H4;
    document.getElementById("card2-p").textContent = txt.card2P;
    document.getElementById("video-h4").textContent = txt.videoH4;
    document.getElementById("txt-vid-credito").textContent = txt.txtVideoCredito;
    
    // Atualização das Legendas e Parágrafos do Cenário 3 (Práticas Tecnológicas)
    document.getElementById("secao-tec-h3").textContent = txt.secaoTecH3;
    document.getElementById("secao-tec-p").textContent = txt.secaoTecP;
    document.getElementById("drone-lbl-credito").textContent = txt.txtFotoDrone;
    document.getElementById("irri-lbl-credito").textContent = txt.txtFotoIrri;
    document.getElementById("solar-lbl-credito").textContent = txt.txtFotoSolar;
    document.getElementById("drone-text-span").innerHTML = `<strong>${txt.droneTitulo}:</strong>${txt.droneTexto}`;
    document.getElementById("irri-text-span").innerHTML = `<strong>${txt.irriTitulo}:</strong>${txt.irriTexto}`;
    document.getElementById("solar-text-span").innerHTML = ` = <strong>${txt.solarTitulo}:</strong>${txt.solarTexto}`;
    document.getElementById("solar-text-span").innerHTML = `<strong>${txt.solarTitulo}:</strong>${txt.solarTexto}`;
    
    // Atualização dos Rótulos, Botões e Placeholders do Cenário 4 (Formulário e Likes)
    document.getElementById("secao-int-h3").textContent = txt.secaoIntH3;
    document.getElementById("secao-int-p").textContent = txt.secaoIntP;
    document.getElementById("botao-like").textContent = txt.btnLike;
    document.getElementById("form-h4").textContent = txt.formH4;
    document.getElementById("label-nome").textContent = txt.labelNome;
    document.getElementById("nome").placeholder = txt.placeholderNome; // Corrigido sem erros
    document.getElementById("label-mensagem").textContent = txt.labelMensagem;
    document.getElementById("mensagem").placeholder = txt.placeholderMensagem; // Corrigido sem erros
    document.getElementById("botao-enviar").textContent = txt.btnEnviar;
    
    // Sincronização condicional do botão do leitor de áudio estático
    if (!narrando) { document.getElementById("btn-narrar").textContent = txt.btnNarrarTxt; }
    
    // Atualização institucional do Rodapé
    document.getElementById("credito-dev").textContent = txt.creditoDesenvolvedor;
    document.getElementById("credito-col").textContent = txt.creditoColegio;

    // Atualização da string dinâmica de apoios injetando as curtidas atuais
    document.getElementById("texto-apoios").innerHTML = `${txt.contadorTextoPre}<span id="contador-likes">${numeroDeLikes}</span>${txt.contadorTextoPos}`;
}

// Vinculação de escuta de eventos nativos para os disparadores superiores de idioma
document.getElementById("btn-pt").addEventListener("click", function() { alternarIdioma("pt"); });
document.getElementById("btn-en").addEventListener("click", function() { alternarIdioma("en"); });
document.getElementById("btn-es").addEventListener("click", function() { alternarIdioma("es"); });
// =======================================================================================
// CONTROLE DE ACESSIBILIDADE E EVENTOS
// =======================================================================================

// --- A. GERENCIAMENTO DE ALTO CONTRASTE (TEMAS DE CORES) ---
const elementoBody = document.body;
document.getElementById("btn-colorido").addEventListener("click", function() { elementoBody.className = ""; });
document.getElementById("btn-branco").addEventListener("click", function() { elementoBody.className = "tema-branco"; });
document.getElementById("btn-preto").addEventListener("click", function() { elementoBody.className = "tema-preto"; });

// --- B. DIMENSIONADOR METRICO DE FONTES (A+ / A- EM SITE INTEIRO) ---
let escalaMetricaFonte = 16;
document.getElementById("btn-Amais").addEventListener("click", function() {
    if (escalaMetricaFonte < 24) { escalaMetricaFonte = escalaMetricaFonte + 2; document.documentElement.style.fontSize = escalaMetricaFonte + "px"; }
});
document.getElementById("btn-Amenos").addEventListener("click", function() {
    if (escalaMetricaFonte > 12) { escalaMetricaFonte = escalaMetricaFonte - 2; document.documentElement.style.fontSize = escalaMetricaFonte + "px"; }
});

// --- C. API SÍNTESE DE VOZ NATIVA (MOTOR DE NARRAÇÃO MULTI-IDIOMA) ---
let narrando = false;
let motorSinteseVoz = window.speechSynthesis;
let instanciaFala;

document.getElementById("btn-narrar").addEventListener("click", function() {
    const txt = traducoes[idiomaAtual];
    if (narrando) {
        motorSinteseVoz.cancel(); // Aborta a reprodução de áudio imediatamente
        document.getElementById("btn-narrar").textContent = txt.btnNarrarTxt;
        narrando = false;
    } else {
        // Captura o texto puro contido exclusivamente dentro da tag estrutural elástica <main>
        const stringTextoPuro = document.getElementById("conteudo-principal").innerText;
        instanciaFala = new SpeechSynthesisUtterance(stringTextoPuro);
        
        // Atribui o sotaque, velocidade e fonética adequada à linguagem em exibição
        instanciaFala.lang = idiomaAtual === "pt" ? "pt-BR" : (idiomaAtual === "en" ? "en-US" : "es-ES");
        
        instanciaFala.onend = function() {
            document.getElementById("btn-narrar").textContent = txt.btnNarrarTxt;
            narrando = false;
        };

        motorSinteseVoz.speak(instanciaFala);
        document.getElementById("btn-narrar").textContent = idiomaAtual === "pt" ? "🛑 Parar Narração" : (idiomaAtual === "en" ? "🛑 Stop Narration" : "🛑 Parar Narración");
        narrando = true;
    }
});

// --- D. GATILHO DAS CURTIDAS (VOTOS DE APOIO) ---
document.getElementById("botao-like").addEventListener("click", function() {
    numeroDeLikes = numeroDeLikes + 1;
    document.getElementById("contador-likes").textContent = numeroDeLikes;
});

// --- E. VALIDAÇÃO DO FORMULÁRIO SUSTENTÁVEL ---
const domFormulario = document.getElementById("formulario-contato");
const domCampoNome = document.getElementById("nome");
const domCampoMensagem = document.getElementById("mensagem");
const domTextoAlerta = document.getElementById("mensagem-alerta");

domFormulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Inibe o reload forçado nativo da página
    const stringNome = domCampoNome.value.trim();
    const stringMensagem = domCampoMensagem.value.trim();
    const dicionarioAtivo = traducoes[idiomaAtual];

    if (stringNome === "" || stringMensagem === "") {
        domTextoAlerta.textContent = dicionarioAtivo.alertaCampos;
        domTextoAlerta.style.color = "red";
    } else {
        domTextoAlerta.textContent = dicionarioAtivo.alertaSucesso.replace("{nome}", stringNome);
        domTextoAlerta.style.color = "green";
        domCampoNome.value = "";
        domCampoMensagem.value = "";
    }
});
