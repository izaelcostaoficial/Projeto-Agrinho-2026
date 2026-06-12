
/* =========================================================
   ESTADO GLOBAL DO SITE
   Aqui guardamos idioma, likes e tamanho da fonte
========================================================= */

let idiomaAtual = "pt";
let likes = 0;
let fonteBase = 16;

/* =========================================================
   TRADUÇÕES HUMANIZADAS (ESTILO ALUNO, NATURAL)
========================================================= */

const textos = {
    pt: {
        titulo: "Projeto Agrinho 2026",
        menu: ["Início", "O Equilíbrio", "Tecnologia no Campo", "Participe"],

        bannerH2: "Agro Forte, Futuro Sustentável",
        bannerP: "O campo é muito mais do que plantar e colher. Ele mostra como a gente pode produzir alimentos com responsabilidade, cuidando da natureza ao mesmo tempo e pensando nas próximas gerações.",
        bannerBtn: "Entender o Projeto",

        equilibrioH3: "O Equilíbrio Necessário",
        equilibrioP: "Para o futuro dar certo, é preciso equilibrar produção de alimentos com cuidado da natureza. Usar água com consciência, cuidar do solo e respeitar o meio ambiente faz toda a diferença.",

        card1H4: "Produção Forte",
        card1P: "O campo ajuda a alimentar milhões de pessoas. Com tecnologia e organização, os agricultores conseguem produzir mais sem desperdiçar recursos.",

        card2H4: "Preservação Ativa",
        card2P: "Cuidar da natureza também faz parte do trabalho no campo. Proteger rios, árvores e o solo garante que tudo continue fértil por muito tempo.",

        videoH4: "Projeto em Vídeo",

        secaoTecH3: "Inovação e Tecnologia Sustentável",
        secaoTecP: "Hoje a tecnologia ajuda muito no campo. Ela permite produzir mais, gastar menos recursos e cuidar melhor da natureza.",

        droneTitulo: "Drones agrícolas",
        droneTexto: "Eles sobrevoam as plantações e ajudam a identificar pragas ou problemas nas plantas sem precisar destruir nada.",

        irriTitulo: "Irrigação gota a gota",
        irriTexto: "Cada planta recebe exatamente a quantidade de água que precisa, evitando desperdício e economizando recursos naturais.",

        solarTitulo: "Energia Solar",
        solarTexto: "As fazendas usam energia do sol para funcionar, diminuindo a poluição e ajudando o meio ambiente.",

        secaoIntH3: "Participe da Nossa Ideia",
        secaoIntP: "Você também pode ajudar o meio ambiente. Envie ideias, sugestões ou apenas apoie nosso projeto.",

        botaoLike: "👍 Apoiar Projeto",

        formH4: "Envie sua Sugestão",
        labelNome: "Seu Nome:",
        labelMensagem: "Sua Sugestão Ambiental:",
        botaoEnviar: "Enviar Mensagem",

        alertaSucesso: "Obrigado pela sua contribuição, {nome}!",
        alertaErro: "Preencha todos os campos antes de enviar."
    },

    en: {
        titulo: "Agrinho Project 2026",
        menu: ["Home", "Balance", "Farm Technology", "Join"],

        bannerH2: "Strong Agriculture, Sustainable Future",
        bannerP: "The countryside shows how we can produce food responsibly while taking care of nature and thinking about future generations.",
        bannerBtn: "Understand the Project",

        equilibrioH3: "The Necessary Balance",
        equilibrioP: "For a better future, we need to balance food production and nature care.",

        card1H4: "Strong Production",
        card1P: "The countryside feeds millions of people using technology and organization to reduce waste.",

        card2H4: "Active Preservation",
        card2P: "Protecting rivers, soil and trees ensures long-term fertility of the land.",

        videoH4: "Project Video",

        secaoTecH3: "Innovation and Sustainable Technology",
        secaoTecP: "Technology helps farmers produce more while using fewer resources.",

        droneTitulo: "Agricultural drones",
        droneTexto: "They fly over crops and detect problems without damaging plants.",

        irriTitulo: "Drip irrigation",
        irriTexto: "Each plant receives only the water it needs, reducing waste.",

        solarTitulo: "Solar Energy",
        solarTexto: "Farms use solar power to reduce pollution.",

        secaoIntH3: "Join Our Idea",
        secaoIntP: "You can help by sending ideas or supporting the project.",

        botaoLike: "👍 Support Project",

        formH4: "Send Your Suggestion",
        labelNome: "Your Name:",
        labelMensagem: "Your Suggestion:",
        botaoEnviar: "Send Message",

        alertaSucesso: "Thank you for your contribution, {name}!",
        alertaErro: "Please fill all fields before sending."
    },

    es: {
        titulo: "Proyecto Agrinho 2026",
        menu: ["Inicio", "Equilibrio", "Tecnología", "Participa"],

        bannerH2: "Agro Fuerte, Futuro Sostenible",
        bannerP: "El campo muestra cómo producir alimentos cuidando la naturaleza y pensando en el futuro.",

        bannerBtn: "Entender el Proyecto",

        equilibrioH3: "El Equilibrio Necesario",
        equilibrioP: "El futuro depende del equilibrio entre producción y naturaleza.",

        card1H4: "Producción Fuerte",
        card1P: "El campo alimenta a millones usando tecnología para evitar desperdicios.",

        card2H4: "Preservación Activa",
        card2P: "Cuidar la naturaleza mantiene el suelo fértil.",

        videoH4: "Video del Proyecto",

        secaoTecH3: "Tecnología Sostenible",
        secaoTecP: "La tecnología ayuda a producir más con menos impacto ambiental.",

        droneTitulo: "Drones agrícolas",
        droneTexto: "Detectan problemas en cultivos sin dañarlos.",

        irriTitulo: "Riego por goteo",
        irriTexto: "Cada planta recibe el agua necesaria.",

        solarTitulo: "Energía Solar",
        solarTexto: "Energía limpia para las granjas.",

        secaoIntH3: "Participa",
        secaoIntP: "Envía ideas o apoya el proyecto.",

        botaoLike: "👍 Apoyar Proyecto",

        formH4: "Enviar Sugerencia",
        labelNome: "Tu Nombre:",
        labelMensagem: "Tu Sugerencia:",

        botaoEnviar: "Enviar",

        alertaSucesso: "¡Gracias por tu contribución, {name}!",
        alertaErro: "Complete todos los campos."
    }
};

/* =========================================================
   TROCA DE IDIOMA
========================================================= */

function mudarIdioma(lang) {
    idiomaAtual = lang;
    const t = textos[lang];

    document.getElementById("titulo-site").textContent = t.titulo;

    const menu = document.querySelectorAll(".menu a");
    menu.forEach((el, i) => el.textContent = t.menu[i]);

    document.getElementById("banner-h2").textContent = t.bannerH2;
    document.getElementById("banner-p").textContent = t.bannerP;
    document.getElementById("banner-btn").textContent = t.bannerBtn;

    document.getElementById("secaoEquiH3").textContent = t.equilibrioH3;
    document.getElementById("secaoEquiP").textContent = t.equilibrioP;

    document.getElementById("card1H4").textContent = t.card1H4;
    document.getElementById("card2H4").textContent = t.card2H4;

    document.getElementById("card1P").textContent = t.card1P;
    document.getElementById("card2P").textContent = t.card2P;

    document.getElementById("secaoTecH3").textContent = t.secaoTecH3;
    document.getElementById("secaoTecP").textContent = t.secaoTecP;

    document.getElementById("droneTitulo").textContent = t.droneTitulo;
    document.getElementById("droneTexto").textContent = t.droneTexto;

    document.getElementById("irriTitulo").textContent = t.irriTitulo;
    document.getElementById("irriTexto").textContent = t.irriTexto;

    document.getElementById("solarTitulo").textContent = t.solarTitulo;
    document.getElementById("solarTexto").textContent = t.solarTexto;

    document.getElementById("secaoIntH3").textContent = t.secaoIntH3;
    document.getElementById("secaoIntP").textContent = t.secaoIntP;

    document.getElementById("botao-like").textContent = t.botaoLike;

    document.getElementById("formH4").textContent = t.formH4;
    document.getElementById("labelNome").textContent = t.labelNome;
    document.getElementById("labelMensagem").textContent = t.labelMensagem;
    document.getElementById("btnEnviar").textContent = t.botaoEnviar;
}

/* =========================================================
   BOTÕES DE IDIOMA
========================================================= */

document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
        mudarIdioma(btn.dataset.lang);
    });
});

/* =========================================================
   TEMAS
========================================================= */

document.querySelectorAll("[data-theme]").forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.className = "tema-" + btn.dataset.theme;
    });
});

/* =========================================================
   FONTE
========================================================= */

document.getElementById("aumentarFonte").onclick = () => {
    if (fonteBase < 24) fonteBase += 2;
    document.documentElement.style.fontSize = fonteBase + "px";
};

document.getElementById("diminuirFonte").onclick = () => {
    if (fonteBase > 12) fonteBase -= 2;
    document.documentElement.style.fontSize = fonteBase + "px";
};

/* =========================================================
   LIKES
========================================================= */

document.getElementById("botao-like").onclick = () => {
    likes++;
    document.getElementById("contador-likes").textContent =
        `Este projeto já recebeu ${likes} apoios!`;
};

/* =========================================================
   NARRADOR (VOZ POR IDIOMA)
========================================================= */

document.getElementById("narrar").onclick = () => {
    const synth = window.speechSynthesis;
    synth.cancel();

    const texto =
        document.getElementById("banner-h2").textContent + ". " +
        document.getElementById("banner-p").textContent + ". " +
        document.getElementById("secaoEquiH3").textContent + ". " +
        document.getElementById("secaoTecP").textContent + ". " +
        document.getElementById("secaoIntP").textContent;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang =
        idiomaAtual === "pt" ? "pt-BR" :
        idiomaAtual === "en" ? "en-US" :
        "es-ES";

    synth.speak(fala);
};

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

mudarIdioma("pt");
