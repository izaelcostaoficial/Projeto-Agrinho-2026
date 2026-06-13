// =======================================================================================
// DICIONÁRIO E CONFIGURAÇÕES BASE (PARTE A)
// =======================================================================================

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
        txtIdioma: "Language:",
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
        txtIdioma: "Idioma:",
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
        secaoEquiH3: "El Equilibrio Necesario",
        secaoEquiP: "Para que nuestro futuro sea seguro, el campo debe producir alimentos de manera eficiente sin agotar los recursos naturales de nuestra tierra.",
        card1H4: "Producción Fuerte",
        card1P: "El agronegocio abastece a las ciudades, genera empleos y garantiza que la comida llegue a la mesa de millones todos los días.",
        card2H4: "Preservación Activa",
        card2P: "Cuidar los bosques, proteger las fuentes de agua y evitar la contaminación mantiene el suelo fértil para las próximas generaciones."
    }
};

let idiomaAtual = "pt";
let numeroDeLikes = 0;
let narrando = false;
// =======================================================================================
// MAPEAMENTO E MECANISMO DE IDIOMAS (DOM)
// =======================================================================================

/**
 * Varre o documento e reescreve os elementos textuais com base no idioma ativo.
 * Altera cabeçalhos, menus de navegação, botões e descrições do topo.
 * @param {string} idioma - Código identificador da linguagem ('pt', 'en', 'es').
 */
function alternarIdioma(idioma) {
    idiomaAtual = idioma;
    const txt = traducoes[idioma];

    // Atualização dos rótulos de texto estáticos da Barra de Acessibilidade Superior
    document.getElementById("txt-lbl-idioma").textContent = txt.txtIdioma;
    document.getElementById("txt-lbl-visual").textContent = txt.txtVisual;
    document.getElementById("btn-colorido").textContent = txt.txtTemaPadrao;
    document.getElementById("btn-branco").textContent = txt.txtTemaBranco;
    document.getElementById("btn-preto").textContent = txt.txtTemaPreto;
    document.getElementById("txt-lbl-texto").textContent = txt.txtTexto;
    document.getElementById("txt-lbl-audio").textContent = txt.txtAudio;
    
    // Atualização estrutural dos links do Menu e da Logomarca do Cabeçalho
    document.getElementById("titulo-site").textContent = txt.titulo;
    document.getElementById("menu-inicio").textContent = txt.menuInicio;
    document.getElementById("menu-equilibrio").textContent = txt.menuEquilibrio;
    document.getElementById("menu-tecnologia").textContent = txt.menuTecnologia;
    document.getElementById("menu-participe").textContent = txt.menuParticipe;
    
    // Atualização dos nós do Hero Banner Inicial (Apresentação Principal)
    document.getElementById("banner-h2").textContent = txt.bannerH2;
    document.getElementById("banner-p").textContent = txt.bannerP;
    document.getElementById("banner-btn").textContent = txt.bannerBtn;
    
    // Atualização do Cenário 2 (Seção do Equilíbrio e Cards Narrativos)
    document.getElementById("secao-equi-h3").textContent = txt.secaoEquiH3;
    document.getElementById("secao-equi-p").textContent = txt.secaoEquiP;
    document.getElementById("card1-h4").textContent = txt.card1H4;
    document.getElementById("card1-p").textContent = txt.card1P;
    document.getElementById("card2-h4").textContent = txt.card2H4;
    document.getElementById("card2-p").textContent = txt.card2P;
    document.getElementById("video-h4").textContent = txt.videoH4;
    document.getElementById("txt-vid-credito").textContent = txt.txtVideoCredito;

    // Encaminha a execução para a continuação mapeada no Bloco 3
    completarTraduçãoDOM(txt);
}
// =======================================================================================
// EXTENSÃO DA TRADUÇÃO DE INTERFACES (DOM)
// =======================================================================================

/**
 * Função complementar que traduz as listas de tecnologias, campos de formulário e rodapé.
 * Isola as strings para impedir a duplicação ou quebra estrutural das fotos locais.
 * @param {object} txt - Objeto contendo o pacote de strings do idioma selecionado.
 */
function completarTraduçãoDOM(txt) {
    // Atualização das Legendas de Direitos Autorais das Imagens Locais (Cenário 3)
    document.getElementById("drone-lbl-credito").textContent = txt.txtFotoDrone;
    document.getElementById("irri-lbl-credito").textContent = txt.txtFotoIrri;
    document.getElementById("solar-lbl-credito").textContent = txt.txtFotoSolar;
    
    // Injeção de textos puros com a tag strong preservada nos blocos de tecnologias
    document.getElementById("drone-text-span").innerHTML = `<strong>${txt.droneTitulo}:</strong>${txt.droneTexto}`;
    document.getElementById("irri-text-span").innerHTML = `<strong>${txt.irriTitulo}:</strong>${txt.irriTexto}`;
    document.getElementById("solar-text-span").innerHTML = `<strong>${txt.solarTitulo}:</strong>${txt.solarTexto}`;
    
    // Atualização do Bloco do Cenário 4 (Inscrições, Área de Likes e Interação Social)
    document.getElementById("secao-int-h3").textContent = txt.secaoIntH3;
    document.getElementById("secao-int-p").textContent = txt.secaoIntP;
    document.getElementById("botao-like").textContent = txt.btnLike;
    document.getElementById("form-h4").textContent = txt.formH4;
    document.getElementById("label-nome").textContent = txt.labelNome;
    document.getElementById("nome").placeholder = txt.placeholderNome; 
    document.getElementById("label-mensagem").textContent = txt.labelMensagem;
    document.getElementById("mensagem").placeholder = txt.placeholderMensagem; 
    document.getElementById("botao-enviar").textContent = txt.btnEnviar;
    
    // Atualização textual do botão do narrador e dos textos institucionais do Rodapé
    if (!narrando) { document.getElementById("btn-narrar").textContent = txt.btnNarrarTxt; }
    document.getElementById("credito-dev").textContent = txt.creditoDesenvolvedor;
    document.getElementById("credito-col").textContent = txt.creditoColegio;

    // Atualização da string de curtidas sem reiniciar o contador do estado ativo
    document.getElementById("texto-apoios").innerHTML = `${txt.contadorTextoPre}<span id="contador-likes">${numeroDeLikes}</span>${txt.contadorTextoPos}`;
}

// Vinculação de escuta de eventos para os gatilhos dos botões de idioma superiores
document.getElementById("btn-pt").addEventListener("click", function() { alternarIdioma("pt"); });
document.getElementById("btn-en").addEventListener("click", function() { alternarIdioma("en"); });
document.getElementById("btn-es").addEventListener("click", function() { alternarIdioma("es"); });
// =======================================================================================
// TEMAS, ZOOM, VOZ E ACÇÕES DE ENTRADA
// =======================================================================================

// --- A. GERENCIAMENTO DE ALTO CONTRASTE VIA FOLHAS DE ESTILO (TEMAS CSS) ---
const elementoBody = document.body;
document.getElementById("btn-colorido").addEventListener("click", function() { elementoBody.className = ""; });
document.getElementById("btn-branco").addEventListener("click", function() { elementoBody.className = "tema-branco"; });
document.getElementById("btn-preto").addEventListener("click", function() { elementoBody.className = "tema-preto"; });

// --- B. CONTROLE DINÂMICO DE DIMENSIONAMENTO ELÁSTICO DE TEXTO (A+ / A-) ---
let escalaMetricaFonte = 16;
document.getElementById("btn-Amais").addEventListener("click", function() {
    if (escalaMetricaFonte < 24) { escalaMetricaFonte = escalaMetricaFonte + 2; document.documentElement.style.fontSize = escalaMetricaFonte + "px"; }
});
document.getElementById("btn-Amenos").addEventListener("click", function() {
    if (escalaMetricaFonte > 12) { escalaMetricaFonte = escalaMetricaFonte - 2; document.documentElement.style.fontSize = escalaMetricaFonte + "px"; }
});

// --- C. API NATIVA DE SÍNTESE DE VOZ (MOTOR DE NARRAÇÃO MULTI-IDIOMA OFF-LINE) ---
let narrando = false;
let motorSinteseVoz = window.speechSynthesis;
let instanciaFala;

document.getElementById("btn-narrar").addEventListener("click", function() {
    const txt = traducoes[idiomaAtual];
    if (narrando) {
        motorSinteseVoz.cancel(); // Para o áudio imediatamente
        document.getElementById("btn-narrar").textContent = txt.btnNarrarTxt;
        narrando = false;
    } else {
        // Captura o texto puro contido dentro do contêiner principal para leitura por fala
        const stringTextoPuro = document.getElementById("conteudo-principal").innerText;
        instanciaFala = new SpeechSynthesisUtterance(stringTextoPuro);
        
        // Atribui o sotaque nativo correto para o leitor de voz com base no idioma do site
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

// --- D. CONTADOR DINÂMICO DE VOTOS (SISTEMA DE LIKES DO PROJETO) ---
document.getElementById("botao-like").addEventListener("click", function() {
    numeroDeLikes = numeroDeLikes + 1;
    document.getElementById("contador-likes").textContent = numeroDeLikes;
});

// --- E. VALIDAÇÃO E FILTRAGEM DO FORMULÁRIO SUSTENTÁVEL ---
const domFormulario = document.getElementById("formulario-contato");
const domCampoNome = document.getElementById("nome");
const domCampoMensagem = document.getElementById("mensagem");
const domTextoAlerta = document.getElementById("mensagem-alerta");

domFormulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Bloqueia o reload automático do formulário
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
