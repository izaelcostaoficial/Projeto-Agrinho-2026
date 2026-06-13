// =======================================================================================
// JAVASCRIPT ULTRA PROFISSIONAL - BLOCO 1 DE 3: DICIONÁRIO E MAPEAMENTO TRILINGUE
// =======================================================================================

/**
 * Mapeamento centralizado de traduções para suportar a internacionalização do site.
 * Estrutura baseada em objetos chave-valor para garantir carregamento e comutação off-line.
 */
const traducoes = {
    pt: {
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
        card2P: "Cuidar das florestas, proteger as nascentes de água e evitar poluição é o que mantém a terra fértil para as próximas gerações.",
        videoH4: "Assista: O Futuro do Agro Sustentável",
        secaoTecH3: "Inovação e Tecnologia Sustentável",
        secaoTecP: "Hoje, o produtor rural usa ferramentas modernas para evitar desperdícios. Veja alguns exemplos de práticas reais:",
        droneTitulo: "Drones agrícolas",
        droneTexto: " Monitoram as plantações de cima, encontrando pragas e evitando o uso exagerado de defensivos agrícolas.",
        irriTitulo: "Irrigação gota a gota",
        irriTexto: " Leva a quantidade exata de água que a planta precisa diretamente na raiz, economizando rios de água.",
        solarTitulo: "Energia Solar",
        solarTexto: " Uso de placas fotovoltaicas para gerar energia limpa nas fazendas e reduzir o impacto no ambiente.",
        secaoIntH3: "Participe da Nossa Ideia",
        secaoIntP: "Apoie o nosso projeto escolar ou envie uma sugestão de prática sustentável para o campo!",
        btnLike: "👍 Apoiar Projeto",
        contadorTextoPre: "Este projeto já recebeu ",
        contadorTextoPos: " apoios!",
        formH4: "Envie sua Sugestão",
        labelNome: "Seu Nome:",
        labelMensagem: "Sua Sugestão Ambiental:",
        btnEnviar: "Enviar Mensagem",
        alertaCampos: "Por favor, preencha todos os campos antes de enviar!",
        alertaSucesso: "Obrigado por sua sugestão, {nome}! Juntos pelo agro sustentável.",
        creditoDesenvolvedor: "2026 - Desenvolvido para o Concurso Agrinho | Categoria Front-End",
        creditoColegio: "Ensino Médio - Colégio Estadual do Paraná"
    },
    en: {
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
        card2P: "Caring for forests, protecting water sources, and avoiding pollution is what keeps the soil fertile for future generations.",
        videoH4: "Watch: The Future of Sustainable Agro",
        secaoTecH3: "Innovation and Sustainable Technology",
        secaoTecP: "Today, rural producers use modern tools to avoid waste. See some examples of real practices:",
        droneTitulo: "Agricultural drones",
        droneTexto: " Monitor crops from above, finding pests and avoiding the excessive use of pesticides.",
        irriTitulo: "Drip irrigation",
        irriTexto: " Delivers the exact amount of water the plant needs directly to the root, saving tons of water.",
        solarTitulo: "Solar Energy",
        solarTexto: " Use of photovoltaic panels to generate clean energy on farms and reduce environmental impact.",
        secaoIntH3: "Join Our Idea",
        secaoIntP: "Support our school project or send a suggestion for a sustainable practice for the countryside!",
        btnLike: "👍 Support Project",
        contadorTextoPre: "This project has already received ",
        contadorTextoPos: " supports!",
        formH4: "Send your Suggestion",
        labelNome: "Your Name:",
        labelMensagem: "Your Environmental Suggestion:",
        btnEnviar: "Send Message",
        alertaCampos: "Please fill in all fields before sending!",
        alertaSucesso: "Thank you for your suggestion, {nome}! Together for sustainable agro.",
        creditoDesenvolvedor: "2026 - Developed for the Agrinho Contest | Front-End Category",
        creditoColegio: "High School - Paraná State College"
    },
    es: {
        titulo: "Proyecto Agrinho 2026",
        menuInicio: "Inicio",
        menuEquilibrio: "El Equilibrio",
        menuTecnologia: "Tecnología de Campo",
        menuParticipe: "Participe",
        bannerH2: "Agro Fuerte, Futuro Sostenible",
        bannerP: "Descubra cómo la producción de alimentos y la preservación del medio ambiente trabajan juntas para garantizar el mañana.",
        bannerBtn: "Entender el Proyecto",
        secaoEquiH3: "El Equilibrio Necesario",
        secaoEquiP: "Para que nuestro futuro sea seguro, el campo debe producir alimentos de manera eficiente sin agotar los recursos naturales de nuestra tierra.",
        card1H4: "Producción Fuerte",
        card1P: "El agronegocio abastece a las ciudades, genera empleos y garantiza que la comida llegue a la mesa de millones todos los días.",
        card2H4: "Preservación Activa",
        card2P: "Cuidar los bosques, proteger las fuentes de agua y evitar la contaminación mantiene el suelo fértil para las próximas generaciones.",
        videoH4: "Vea: El Futuro del Agro Sostenible",
        secaoTecH3: "Innovación y Tecnología Sostenible",
        secaoTecP: "Hoy en día, los productores rurales utilizan herramientas modernas para evitar el desperdicio. Vea algunos ejemplos prácticos:",
        droneTitulo: "Drones agrícolas",
        droneTexto: " Monitorean los cultivos desde arriba, encontrando plagas y evitando el uso excesivo de pesticidas.",
        irriTitulo: "Riego por goteo",
        irriTexto: " Lleva la cantidad exacta de agua que la planta necesita directamente a la raíz, ahorrando ríos de agua.",
        solarTitulo: "Energía Solar",
        solarTexto: " Uso de paneles fotovoltaicos para generar energía limpia en las fincas y reducir el impacto ambiental.",
        secaoIntH3: "Participe de Nuestra Idea",
        secaoIntP: "¡Apoye nuestro proyecto escolar o envíe una sugerencia de práctica sostenible para el campo!",
        btnLike: "👍 Apoyar Proyecto",
        contadorTextoPre: "¡Este proyecto ya ha recibido ",
        contadorTextoPos: " apoyos!",
        formH4: "Envíe su Sugerencia",
        labelNome: "Su Nombre:",
        labelMensagem: "Su Sugerencia Ambiental:",
        btnEnviar: "Enviar Mensaje",
        alertaCampos: "¡Por favor, complete todos los campos antes de enviar!",
        alertaSucesso: "¡Gracias por su sugerencia, {nome}! Juntos por el agro sostenible.",
        creditoDesenvolvedor: "2026 - Desarrollado para el Concurso Agrinho | Categoría Front-End",
        creditoColegio: "Escuela Secundaria - Colegio Estatal de Paraná"
    }
};

// Instanciação das variáveis de controle global para sincronizar os dados dinâmicos do escopo
let idiomaAtual = "pt";
let numeroDeLikes = 0;
// =======================================================================================
// JAVASCRIPT ULTRA PROFISSIONAL - BLOCO 2 DE 3: GERENCIADOR DINÂMICO DE IDIOMAS (DOM)
// =======================================================================================

/**
 * Varre o documento HTML atualizando as propriedades textContent e innerHTML 
 * com base na linguagem selecionada. Protege elementos de mídia contra reinicialização.
 * @param {string} idioma - Código identificador da linguagem ('pt', 'en', 'es').
 */
function alternarIdioma(idioma) {
    idiomaAtual = idioma;
    const txt = traducoes[idioma];

    // Atualização de cabeçalhos, menus e botões de navegação
    document.getElementById("titulo-site").textContent = txt.titulo;
    document.getElementById("menu-inicio").textContent = txt.menuInicio;
    document.getElementById("menu-equilibrio").textContent = txt.menuEquilibrio;
    document.getElementById("menu-tecnologia").textContent = txt.menuTecnologia;
    document.getElementById("menu-participe").textContent = txt.menuParticipe;
    
    // Atualização do Hero Banner (Introdução)
    document.getElementById("banner-h2").textContent = txt.bannerH2;
    document.getElementById("banner-p").textContent = txt.bannerP;
    document.getElementById("banner-btn").textContent = txt.bannerBtn;
    
    // Atualização do Bloco do Cenário 2 (Equilíbrio e Cards)
    document.getElementById("secao-equi-h3").textContent = txt.secaoEquiH3;
    document.getElementById("secao-equi-p").textContent = txt.secaoEquiP;
    document.getElementById("card1-h4").textContent = txt.card1H4;
    document.getElementById("card1-p").textContent = txt.card1P;
    document.getElementById("card2-h4").textContent = txt.card2H4;
    document.getElementById("card2-p").textContent = txt.card2P;
    document.getElementById("video-h4").textContent = txt.videoH4;
    
    // Atualização do Bloco do Cenário 3 (Tecnologias na Lista)
    document.getElementById("secao-tec-h3").textContent = txt.secaoTecH3;
    document.getElementById("secao-tec-p").textContent = txt.secaoTecP;
    document.getElementById("drone-text").innerHTML = `<strong>${txt.droneTitulo}:</strong>${txt.droneTexto}`;
    document.getElementById("irri-text").innerHTML = `<strong>${txt.irriTitulo}:</strong>${txt.irriTexto}`;
    document.getElementById("solar-text").innerHTML = `<strong>${txt.solarTitulo}:</strong>${txt.solarTexto}`;
    
    // Atualização do Bloco do Cenário 4 (Interações, Formulário e Votos)
    document.getElementById("secao-int-h3").textContent = txt.secaoIntH3;
    document.getElementById("secao-int-p").textContent = txt.secaoIntP;
    document.getElementById("botao-like").textContent = txt.btnLike;
    document.getElementById("form-h4").textContent = txt.formH4;
    document.getElementById("label-nome").textContent = txt.labelNome;
    document.getElementById("label-mensagem").textContent = txt.labelMensagem;
    document.getElementById("botao-enviar").textContent = txt.btnEnviar;
    
    // Atualização dos nós textuais estruturais do Rodapé institucional
    document.getElementById("credito-dev").textContent = txt.creditoDesenvolvedor;
    document.getElementById("credito-col").textContent = txt.creditoColegio;

    // Atualiza a frase dinâmica de apoios injetando o span com a variável numérica ativa
    document.getElementById("texto-apoios").innerHTML = `${txt.contadorTextoPre}<span id="contador-likes">${numeroDeLikes}</span>${txt.contadorTextoPos}`;
}

// Registro e escuta de gatilhos para os botões de idioma da interface superior
document.getElementById("btn-pt").addEventListener("click", function() { alternarIdioma("pt"); });
document.getElementById("btn-en").addEventListener("click", function() { alternarIdioma("en"); });
document.getElementById("btn-es").addEventListener("click", function() { alternarIdioma("es"); });
// =======================================================================================
// JAVASCRIPT ULTRA PROFISSIONAL - BLOCO 3 DE 3: ACESSIBILIDADE, SÍNTESE DE VOZ E EVENTOS
// =======================================================================================

// --- A. SISTEMA DE COMUTAÇÃO DE ALTO CONTRASTE (TEMAS CSS) ---
const elementoBody = document.body;

document.getElementById("btn-colorido").addEventListener("click", function() { elementoBody.className = ""; });
document.getElementById("btn-branco").addEventListener("click", function() { elementoBody.className = "tema-branco"; });
document.getElementById("btn-preto").addEventListener("click", function() { elementoBody.className = "tema-preto"; });

// --- B. GERENCIADOR DE MÉTRICA DE TEXTO (A+ / A- RESPONSIVO) ---
let escalaMetricaFonte = 16; // Inicializa com a fonte padrão do documento em 16px

document.getElementById("btn-Amais").addEventListener("click", function() {
    if (escalaMetricaFonte < 24) { // Teto máximo para não romper contêineres elásticos
        escalaMetricaFonte = escalaMetricaFonte + 2;
        document.documentElement.style.fontSize = escalaMetricaFonte + "px";
    }
});

document.getElementById("btn-Amenos").addEventListener("click", function() {
    if (escalaMetricaFonte > 12) { // Piso mínimo para manter as regras de legibilidade
        escalaMetricaFonte = escalaMetricaFonte - 2;
        document.documentElement.style.fontSize = escalaMetricaFonte + "px";
    }
});

// --- C. API DE SÍNTESE DE VOZ NATIVA (MOTOR DE NARAÇÃO MULTI-IDIOMA) ---
let estadoNarrando = false;
let motorSinteseVoz = window.speechSynthesis;
let instanciaFala;

document.getElementById("btn-narrar").addEventListener("click", function() {
    if (estadoNarrando) {
        motorSinteseVoz.cancel(); // Interrompe a execução do áudio imediatamente
        document.getElementById("btn-narrar").textContent = idiomaAtual === "pt" ? "🔊 Narrar Site" : (idiomaAtual === "en" ? "🔊 Narrate Site" : "🔊 Narrar Sitio");
        estadoNarrando = false;
    } else {
        // Captura o texto puro serializado apenas da área interna do nó principal <main>
        const stringTextoPuro = document.getElementById("conteudo-principal").innerText;
        instanciaFala = new SpeechSynthesisUtterance(stringTextoPuro);
        
        // Define o sotaque e fonética correta do motor nativo com base no idioma selecionado
        instanciaFala.lang = idiomaAtual === "pt" ? "pt-BR" : (idiomaAtual === "en" ? "en-US" : "es-ES");
        
        // Callback acionado de forma nativa ao encerrar a leitura completa da string
        instanciaFala.onend = function() {
            document.getElementById("btn-narrar").textContent = idiomaAtual === "pt" ? "🔊 Narrar Site" : (idiomaAtual === "en" ? "🔊 Narrate Site" : "🔊 Narrar Sitio");
            estadoNarrando = false;
        };

        motorSinteseVoz.speak(instanciaFala);
        document.getElementById("btn-narrar").textContent = idiomaAtual === "pt" ? "🛑 Parar Narração" : (idiomaAtual === "en" ? "🛑 Stop Narration" : "🛑 Parar Narración");
        estadoNarrando = true;
    }
});

// --- D. GATILHO DO CONTADOR DE CURTIDAS (VOTOS) ---
document.getElementById("botao-like").addEventListener("click", function() {
    numeroDeLikes = numeroDeLikes + 1;
    document.getElementById("contador-likes").textContent = numeroDeLikes;
});

// --- E. VALIDAÇÃO DO FORMULÁRIO SUSTENTÁVEL COM MENSAGENS TRADUZIDAS ---
const domFormulario = document.getElementById("formulario-contato");
const domCampoNome = document.getElementById("nome");
const domCampoMensagem = document.getElementById("mensagem");
const domTextoAlerta = document.getElementById("mensagem-alerta");

domFormulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Inibe o reload forçado padrão da página
    
    const stringNome = domCampoNome.value.trim();
    const stringMensagem = domCampoMensagem.value.trim();
    const dicionarioAtivo = traducoes[idiomaAtual];

    // Validação lógica contra campos vazios ou preenchidos com espaços
    if (stringNome === "" || stringMensagem === "") {
        domTextoAlerta.textContent = dicionarioAtivo.alertaCampos;
        domTextoAlerta.style.color = "red";
    } else {
        // Injeta o nome do usuário capturado na caixa dentro do token da string correspondente
        domTextoAlerta.textContent = dicionarioAtivo.alertaSucesso.replace("{nome}", stringNome);
        domTextoAlerta.style.color = "green";
        
        // Limpa os elementos de input para novos envios do usuário
        domCampoNome.value = "";
        domCampoMensagem.value = "";
    }
});
