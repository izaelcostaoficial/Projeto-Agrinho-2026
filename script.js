/* =====================================================
PROJETO AGRINHO 2026 - JAVASCRIPT PROFISSIONAL
Todas as funções estão integradas ao HTML e CSS enviados
===================================================== */

/* =====================================================
1. DICIONÁRIO DE TRADUÇÃO (PT / EN / ES)
===================================================== */
const traducoes = {
    pt: {
        titulo: "Projeto Agrinho 2026",
        menuInicio: "Início",
        menuEquilibrio: "Equilíbrio",
        menuTecnologia: "Tecnologia",
        menuParticipe: "Participe",
        bannerH2: "Agro forte, futuro sustentável",
        bannerP: "O campo e a tecnologia caminham juntos para garantir um futuro melhor.",
        secaoEquiH3: "O equilíbrio necessário",
        secaoEquiP: "Produção e preservação precisam andar juntas.",
        card1H4: "Produção forte",
        card1P: "O agro alimenta o mundo e gera empregos.",
        card2H4: "Preservação ativa",
        card2P: "Cuidar da natureza garante o futuro.",
        secaoTecH3: "Tecnologia no campo",
        secaoTecP: "Tecnologia ajuda a produzir mais com menos impacto.",
        drone: "Drones monitoram plantações.",
        irrigacao: "Irrigação inteligente economiza água.",
        solar: "Energia solar reduz impacto ambiental.",
        secaoIntH3: "Participe",
        secaoIntP: "Apoie o projeto e envie sugestões.",
        btnLike: "👍 Apoiar",
        alerta: "Preencha todos os campos!",
        sucesso: "Mensagem enviada com sucesso!"
    },

    en: {
        titulo: "Agrinho Project 2026",
        menuInicio: "Home",
        menuEquilibrio: "Balance",
        menuTecnologia: "Technology",
        menuParticipe: "Join",
        bannerH2: "Strong agro, sustainable future",
        bannerP: "Agriculture and technology working together for a better future.",
        secaoEquiH3: "The necessary balance",
        secaoEquiP: "Production and preservation must go together.",
        card1H4: "Strong production",
        card1P: "Agriculture feeds the world and creates jobs.",
        card2H4: "Active preservation",
        card2P: "Caring for nature ensures the future.",
        secaoTecH3: "Farm technology",
        secaoTecP: "Technology helps produce more with less impact.",
        drone: "Drones monitor crops.",
        irrigacao: "Smart irrigation saves water.",
        solar: "Solar energy reduces impact.",
        secaoIntH3: "Join",
        secaoIntP: "Support the project and send ideas.",
        btnLike: "👍 Support",
        alerta: "Fill all fields!",
        sucesso: "Message sent successfully!"
    },

    es: {
        titulo: "Proyecto Agrinho 2026",
        menuInicio: "Inicio",
        menuEquilibrio: "Equilibrio",
        menuTecnologia: "Tecnología",
        menuParticipe: "Participar",
        bannerH2: "Agro fuerte, futuro sostenible",
        bannerP: "La agricultura y la tecnología trabajan juntas para el futuro.",
        secaoEquiH3: "El equilibrio necesario",
        secaoEquiP: "Producción y preservación deben ir juntas.",
        card1H4: "Producción fuerte",
        card1P: "La agricultura alimenta el mundo.",
        card2H4: "Preservación activa",
        card2P: "Cuidar la naturaleza asegura el futuro.",
        secaoTecH3: "Tecnología agrícola",
        secaoTecP: "La tecnología reduce impactos.",
        drone: "Drones monitorean cultivos.",
        irrigacao: "Riego inteligente ahorra agua.",
        solar: "Energía solar reduce impacto.",
        secaoIntH3: "Participar",
        secaoIntP: "Apoya el proyecto y envía ideas.",
        btnLike: "👍 Apoyar",
        alerta: "Complete todos los campos!",
        sucesso: "Mensaje enviado correctamente!"
    }
};

/* =====================================================
2. ESTADO GLOBAL
===================================================== */
let idioma = "pt";
let likes = 0;

/* =====================================================
3. FUNÇÃO DE TROCA DE IDIOMA
===================================================== */
function mudarIdioma(lang) {
    idioma = lang;
    const t = traducoes[lang];

    document.getElementById("titulo-site").textContent = t.titulo;

    document.getElementById("menu-inicio").textContent = t.menuInicio;
    document.getElementById("menu-equilibrio").textContent = t.menuEquilibrio;
    document.getElementById("menu-tecnologia").textContent = t.menuTecnologia;
    document.getElementById("menu-participe").textContent = t.menuParticipe;

    document.getElementById("banner-h2").textContent = t.bannerH2;
    document.getElementById("banner-p").textContent = t.bannerP;

    document.getElementById("secao-equi-h3").textContent = t.secaoEquiH3;
    document.getElementById("secao-equi-p").textContent = t.secaoEquiP;

    document.getElementById("card1-h4").textContent = t.card1H4;
    document.getElementById("card1-p").textContent = t.card1P;
    document.getElementById("card2-h4").textContent = t.card2H4;
    document.getElementById("card2-p").textContent = t.card2P;

    document.getElementById("secao-tec-h3").textContent = t.secaoTecH3;
    document.getElementById("secao-tec-p").textContent = t.secaoTecP;

    document.getElementById("drone-text").textContent = t.drone;
    document.getElementById("irri-text").textContent = t.irrigacao;
    document.getElementById("solar-text").textContent = t.solar;

    document.getElementById("secao-int-h3").textContent = t.secaoIntH3;
    document.getElementById("secao-int-p").textContent = t.secaoIntP;

    document.getElementById("botao-like").textContent = t.btnLike;
}

/* eventos idioma */
document.getElementById("btn-pt").onclick = () => mudarIdioma("pt");
document.getElementById("btn-en").onclick = () => mudarIdioma("en");
document.getElementById("btn-es").onclick = () => mudarIdioma("es");

/* =====================================================
4. TEMAS (COLORIDO / BRANCO / PRETO)
===================================================== */
document.getElementById("btn-colorido").onclick = () =>
    document.body.className = "tema-colorido";

document.getElementById("btn-branco").onclick = () =>
    document.body.className = "tema-branco";

document.getElementById("btn-preto").onclick = () =>
    document.body.className = "tema-preto";

/* =====================================================
5. FONTE (+ / -)
===================================================== */
let fonte = 16;

document.getElementById("btn-Amais").onclick = () => {
    if (fonte < 24) {
        fonte += 2;
        document.documentElement.style.fontSize = fonte + "px";
    }
};

document.getElementById("btn-Amenos").onclick = () => {
    if (fonte > 12) {
        fonte -= 2;
        document.documentElement.style.fontSize = fonte + "px";
    }
};

/* =====================================================
6. LIKE
===================================================== */
document.getElementById("botao-like").onclick = () => {
    likes++;
    document.getElementById("contador-likes").textContent = likes;
};

/* =====================================================
7. NARRAÇÃO (ÁUDIO MULTI-IDIOMA)
===================================================== */
let falando = false;
let synth = window.speechSynthesis;

document.getElementById("btn-narrar").onclick = () => {

    if (falando) {
        synth.cancel();
        falando = false;
        return;
    }

    const texto = document.body.innerText;

    let utter = new SpeechSynthesisUtterance(texto);

    if (idioma === "pt") utter.lang = "pt-BR";
    if (idioma === "en") utter.lang = "en-US";
    if (idioma === "es") utter.lang = "es-ES";

    synth.speak(utter);
    falando = true;

    utter.onend = () => {
        falando = false;
    };
};

/* =====================================================
8. FORMULÁRIO
===================================================== */
document.getElementById("formulario-contato").onsubmit = (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const msg = document.getElementById("mensagem").value.trim();
    const alerta = document.getElementById("mensagem-alerta");

    if (!nome || !msg) {
        alerta.textContent = traducoes[idioma].alerta;
        alerta.style.color = "red";
        return;
    }

    alerta.textContent = traducoes[idioma].sucesso;
    alerta.style.color = "green";

    document.getElementById("nome").value = "";
    document.getElementById("mensagem").value = "";
};
