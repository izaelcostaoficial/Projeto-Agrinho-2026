/* =====================================================
   ESTADO GLOBAL DO SISTEMA
===================================================== */

let idiomaAtual = "pt";
let likes = 0;
let fonteBase = 16;

/* =====================================================
   TRADUÇÕES (SEM ALTERAR SEUS TEXTOS ORIGINAIS)
===================================================== */

const textos = {
    pt: {
        titulo: "Projeto Agrinho 2026",
        menu: ["Início", "O Equilíbrio", "Tecnologia no Campo", "Participe"],
        bannerH2: "Agro Forte, Futuro Sustentável",
        bannerP: "Descubra como a produção de alimentos e a preservação do meio ambiente andam juntas para garantir o amanhã.",
        botao: "Entender o Projeto",
        equilibrioH3: "O Equilíbrio Necessário",
        equilibrioP: "Para o nosso futuro ser seguro, o campo precisa produzir alimentos de forma eficiente sem esgotar os recursos naturais da nossa terra.",
        card1: "Produção Forte",
        card2: "Preservação Ativa",
        tecH3: "Inovação e Tecnologia Sustentável",
        tecP: "Hoje, o produtor rural usa ferramentas modernas para evitar desperdícios. Veja alguns exemplos de práticas reais:",
        drone: "Drones agrícolas: Monitoram as plantações de cima, encontrando pragas e evitando o uso exagerado de defensivos agrícolas.",
        irrigacao: "Irrigação gota a gota: Leva a quantidade exata de água que a planta precisa diretamente na raiz, economizando rios de água.",
        solar: "Energia Solar: Uso de placas fotovoltaicas para gerar energia limpa nas fazendas e reduzir o impacto no ambiente.",
        interacaoH3: "Participe da Nossa Ideia",
        interacaoP: "Apoie o nosso projeto escolar ou envie uma sugestão de prática sustentável para o campo!",
        botaoLike: "👍 Apoiar Projeto",
        formH4: "Envie sua Sugestão",
        sucesso: "Obrigado pela sua contribuição!"
    },

    en: {
        titulo: "Agrinho Project 2026",
        menu: ["Home", "Balance", "Farm Technology", "Join"],
        bannerH2: "Strong Agro, Sustainable Future",
        bannerP: "Discover how food production and environmental preservation work together for tomorrow.",
        botao: "Understand the Project",
        equilibrioH3: "The Necessary Balance",
        equilibrioP: "For a safe future, farming must produce efficiently without exhausting natural resources.",
        card1: "Strong Production",
        card2: "Active Preservation",
        tecH3: "Innovation and Sustainable Technology",
        tecP: "Modern tools help reduce waste in agriculture. See real examples:",
        drone: "Agricultural drones: Monitor crops from above, detecting pests and reducing pesticide use.",
        irrigacao: "Drip irrigation: Delivers exact water to plant roots, saving large amounts of water.",
        solar: "Solar Energy: Clean energy generation using photovoltaic panels in farms.",
        interacaoH3: "Join Our Idea",
        interacaoP: "Support our school project or send sustainable ideas!",
        botaoLike: "👍 Support Project",
        formH4: "Send Your Suggestion",
        sucesso: "Thank you for your contribution!"
    },

    es: {
        titulo: "Proyecto Agrinho 2026",
        menu: ["Inicio", "Equilibrio", "Tecnología del Campo", "Participa"],
        bannerH2: "Agro Fuerte, Futuro Sostenible",
        bannerP: "Descubra cómo la producción y la preservación trabajan juntas.",
        botao: "Entender el Proyecto",
        equilibrioH3: "El Equilibrio Necesario",
        equilibrioP: "El campo debe producir sin agotar los recursos naturales.",
        card1: "Producción Fuerte",
        card2: "Preservación Activa",
        tecH3: "Innovación y Tecnología Sostenible",
        tecP: "La tecnología ayuda a reducir desperdicios en el campo.",
        drone: "Drones agrícolas: Monitorean cultivos y reducen pesticidas.",
        irrigacao: "Riego por goteo: Usa solo el agua necesaria para cada planta.",
        solar: "Energía Solar: Energía limpia en las fincas.",
        interacaoH3: "Participa de Nuestra Idea",
        interacaoP: "Apoya nuestro proyecto o envía ideas sostenibles.",
        botaoLike: "👍 Apoyar Proyecto",
        formH4: "Enviar Sugerencia",
        sucesso: "¡Gracias por tu contribución!"
    }
};

/* =====================================================
   TROCA DE IDIOMA
===================================================== */

function mudarIdioma(lang) {
    idiomaAtual = lang;
    const t = textos[lang];

    document.getElementById("titulo-site").textContent = t.titulo;

    const menu = document.querySelectorAll(".menu a");
    menu.forEach((el, i) => el.textContent = t.menu[i]);

    document.getElementById("banner-h2").textContent = t.bannerH2;
    document.getElementById("banner-p").textContent = t.bannerP;
    document.getElementById("banner-btn").textContent = t.botao;

    document.getElementById("secao-equi-h3").textContent = t.equilibrioH3;
    document.getElementById("secao-equi-p").textContent = t.equilibrioP;
    document.getElementById("card1-h4").textContent = t.card1;
    document.getElementById("card2-h4").textContent = t.card2;

    document.getElementById("secao-tec-h3").textContent = t.tecH3;
    document.getElementById("secao-tec-p").textContent = t.tecP;

    document.getElementById("drone-text").textContent = t.drone;
    document.getElementById("irri-text").textContent = t.irrigacao;
    document.getElementById("solar-text").textContent = t.solar;

    document.getElementById("secao-int-h3").textContent = t.interacaoH3;
    document.getElementById("secao-int-p").textContent = t.interacaoP;
    document.getElementById("botao-like").textContent = t.botaoLike;
    document.getElementById("form-h4").textContent = t.formH4;
}

/* =====================================================
   EVENTOS DE IDIOMA
===================================================== */

document.getElementById("btn-pt").onclick = () => mudarIdioma("pt");
document.getElementById("btn-en").onclick = () => mudarIdioma("en");
document.getElementById("btn-es").onclick = () => mudarIdioma("es");

/* =====================================================
   TEMAS
===================================================== */

document.getElementById("btn-colorido").onclick = () => {
    document.body.className = "tema-colorido";
};

document.getElementById("btn-branco").onclick = () => {
    document.body.className = "tema-claro";
};

document.getElementById("btn-preto").onclick = () => {
    document.body.className = "tema-escuro";
};

/* =====================================================
   FONTE (A+ / A-)
===================================================== */

document.getElementById("btn-Amais").onclick = () => {
    if (fonteBase < 24) fonteBase += 2;
    document.documentElement.style.fontSize = fonteBase + "px";
};

document.getElementById("btn-Amenos").onclick = () => {
    if (fonteBase > 12) fonteBase -= 2;
    document.documentElement.style.fontSize = fonteBase + "px";
};

/* =====================================================
   LIKES
===================================================== */

document.getElementById("botao-like").onclick = () => {
    likes++;
    document.getElementById("contador-likes").textContent = likes;
};

/* =====================================================
   NARRADOR (IDIOMA AUTOMÁTICO)
===================================================== */

document.getElementById("btn-narrar").onclick = () => {
    const synth = window.speechSynthesis;
    synth.cancel();

    let texto = `
        ${document.getElementById("banner-h2").textContent}.
        ${document.getElementById("banner-p").textContent}.
        ${document.getElementById("secao-equi-h3").textContent}.
        ${document.getElementById("secao-tec-p").textContent}.
        ${document.getElementById("secao-int-p").textContent}.
    `;

    const fala = new SpeechSynthesisUtterance(texto);

    if (idiomaAtual === "pt") fala.lang = "pt-BR";
    if (idiomaAtual === "en") fala.lang = "en-US";
    if (idiomaAtual === "es") fala.lang = "es-ES";

    synth.speak(fala);
};

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

mudarIdioma("pt");
