// ==========================================
// PARTE 1: SISTEMA MULTI-IDIOMA (PT / EN)
// ==========================================

// 1. Criamos um objeto simples contendo os textos correspondentes de cada idioma
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
        alertaSucesso: "Obrigado por sua sugestão, {nome}! Juntos pelo agro sustentável."
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
        alertaSucesso: "Thank you for your suggestion, {nome}! Together for sustainable agro."
    }
};

// 2. Variável para rastrear o idioma do site (começa em português)
let idiomaAtual = "pt";

// 3. Função que varre a tela atualizando as tags pelos IDs correspondentes
function alternarIdioma(idioma) {
    idiomaAtual = idioma;
    const txt = traducoes[idioma];

    document.getElementById("titulo-site").textContent = txt.titulo;
    document.getElementById("menu-inicio").textContent = txt.menuInicio;
    document.getElementById("menu-equilibrio").textContent = txt.menuEquilibrio;
    document.getElementById("menu-tecnologia").textContent = txt.menuTecnologia;
    document.getElementById("menu-participe").textContent = txt.menuParticipe;
    document.getElementById("banner-h2").textContent = txt.bannerH2;
    document.getElementById("banner-p").textContent = txt.bannerP;
    document.getElementById("banner-btn").textContent = txt.bannerBtn;
    document.getElementById("secao-equi-h3").textContent = txt.secaoEquiH3;
    document.getElementById("secao-equi-p").textContent = txt.secaoEquiP;
    document.getElementById("card1-h4").textContent = txt.card1H4;
    document.getElementById("card1-p").textContent = txt.card1P;
    document.getElementById("card2-h4").textContent = txt.card2H4;
    document.getElementById("card2-p").textContent = txt.card2P;
    document.getElementById("video-h4").textContent = txt.videoH4;
    document.getElementById("secao-tec-h3").textContent = txt.secaoTecH3;
    document.getElementById("secao-tec-p").textContent = txt.secaoTecP;
    
    // Atualiza a lista de tecnologias aplicando negrito nos termos corretos
    document.getElementById("drone-text").innerHTML = `<strong>${txt.droneTitulo}:</strong>${txt.droneTexto}`;
    document.getElementById("irri-text").innerHTML = `<strong>${txt.irriTitulo}:</strong>${txt.irriTexto}`;
    document.getElementById("solar-text").innerHTML = `<strong>${txt.solarTitulo}:</strong>${txt.solarTexto}`;
    
    document.getElementById("secao-int-h3").textContent = txt.secaoIntH3;
    document.getElementById("secao-int-p").textContent = txt.secaoIntP;
    document.getElementById("botao-like").textContent = txt.btnLike;
    document.getElementById("form-h4").textContent = txt.formH4;
    document.getElementById("label-nome").textContent = txt.labelNome;
    document.getElementById("label-mensagem").textContent = txt.labelMensagem;
    document.getElementById("botao-enviar").textContent = txt.btnEnviar;

    // Atualiza o bloco de curtidas mantendo a numeração ativa
    document.getElementById("texto-apoios").innerHTML = `${txt.contadorTextoPre}<span id="contador-likes">${numeroDeLikes}</span>${txt.contadorTextoPos}`;
}

// 4. Conecta os botões da barra de acessibilidade para rodar a função acima
document.getElementById("btn-pt").addEventListener("click", function() { alternarIdioma("pt"); });
document.getElementById("btn-en").addEventListener("click", function() { alternarIdioma("en"); });
// ==========================================
// PARTE 2: ACESSIBILIDADE VISUAL, LEITOR E INTERAÇÕES
// ==========================================

// --- A. CONTRASTE DE CORES ---
const body = document.body;

document.getElementById("btn-colorido").addEventListener("click", function() { body.className = ""; });
document.getElementById("btn-branco").addEventListener("click", function() { body.className = "tema-branco"; });
document.getElementById("btn-preto").addEventListener("click", function() { body.className = "tema-preto"; });


// --- B. DIMENSIONADOR DE TEXTO (A+ / A-) ---
let tamanhoBase = 16;

document.getElementById("btn-Amais").addEventListener("click", function() {
    if (tamanhoBase < 24) {
        tamanhoBase = tamanhoBase + 2;
        document.documentElement.style.fontSize = tamanhoBase + "px";
    }
});

document.getElementById("btn-Amenos").addEventListener("click", function() {
    if (tamanhoBase > 12) {
        tamanhoBase = tamanhoBase - 2;
        document.documentElement.style.fontSize = tamanhoBase + "px";
    }
});


// --- C. LEITOR DE TELA POR VOZ (NARRADOR) ---
let narrando = false;
let sinteseVoz = window.speechSynthesis;
let escopoLeitura;

document.getElementById("btn-narrar").addEventListener("click", function() {
    if (narrando) {
        sinteseVoz.cancel();
        document.getElementById("btn-narrar").textContent = idiomaAtual === "pt" ? "🔊 Narrar Site" : "🔊 Narrate Site";
        narrando = false;
    } else {
        // Captura todo o texto puro contido na tag principal <main>
        const textoParaLer = document.getElementById("conteudo-principal").innerText;
        escopoLeitura = new SpeechSynthesisUtterance(textoParaLer);
        
        // Aplica o idioma correto para o leitor de voz do computador não falar com sotaque
        escopoLeitura.lang = idiomaAtual === "pt" ? "pt-BR" : "en-US";
        
        escopoLeitura.onend = function() {
            document.getElementById("btn-narrar").textContent = idiomaAtual === "pt" ? "🔊 Narrar Site" : "🔊 Narrate Site";
            narrando = false;
        };

        sinteseVoz.speak(escopoLeitura);
        document.getElementById("btn-narrar").textContent = idiomaAtual === "pt" ? "🛑 Parar Narração" : "🛑 Stop Narration";
        narrando = true;
    }
});


// --- D. SISTEMA DE CONTADOR DE CURTIDAS (LIKES) ---
let numeroDeLikes = 0;

document.getElementById("botao-like").addEventListener("click", function() {
    numeroDeLikes = numeroDeLikes + 1;
    document.getElementById("contador-likes").textContent = numeroDeLikes;
});


// --- E. VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
const formulario = document.getElementById("formulario-contato");
const campoNome = document.getElementById("nome");
const campoMensagem = document.getElementById("mensagem");
const textoAlerta = document.getElementById("mensagem-alerta");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o site de dar refresh na página

    const nomeDigitado = campoNome.value.trim();
    const mensagemDigitada = campoMensagem.value.trim();
    const txt = traducoes[idiomaAtual];

    // Valida se as caixas estão em branco
    if (nomeDigitado === "" || mensagemDigitada === "") {
        textoAlerta.textContent = txt.alertaCampos;
        textoAlerta.style.color = "red";
    } else {
        // Substitui {nome} pela variável digitada pelo usuário na caixa
        textoAlerta.textContent = txt.alertaSucesso.replace("{nome}", nomeDigitado);
        textoAlerta.style.color = "green";

        // Limpa os campos após o envio com sucesso
        campoNome.value = "";
        campoMensagem.value = "";
    }
});
