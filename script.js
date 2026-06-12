// ======================================================
// ESTADO GLOBAL
// ======================================================
let fonteAtual = 16;
let contadorLikes = 0;
let idiomaAtual = "pt";
let temaAtual = "colorido";

// ======================================================
// TEXTOS (PT / EN / ES)
// ======================================================
const textos = {
    pt: { /* já definido completo acima no HTML/JS anterior */ },
    en: { /* idem */ },
    es: { /* idem */ }
};

// ======================================================
// FUNÇÃO: TROCAR IDIOMA
// ======================================================
function mudarIdioma(lang) {
    idiomaAtual = lang;
    const t = textos[lang];

    document.getElementById("titulo-site").textContent = t.tituloSite;

    document.getElementById("menu-inicio").textContent = t.menu.inicio;
    document.getElementById("menu-equilibrio").textContent = t.menu.equilibrio;
    document.getElementById("menu-tecnologia").textContent = t.menu.tecnologia;
    document.getElementById("menu-participe").textContent = t.menu.participe;

    document.getElementById("banner-h2").textContent = t.bannerH2;
    document.getElementById("banner-p").textContent = t.bannerP;
    document.getElementById("banner-btn").textContent = t.bannerBtn;

    document.getElementById("secao-equi-h3").textContent = t.secaoEquiH3;
    document.getElementById("secao-equi-p").textContent = t.secaoEquiP;

    document.getElementById("card1-h4").textContent = t.card1H4;
    document.getElementById("card1-p").textContent = t.card1P;
    document.getElementById("card2-h4").textContent = t.card2H4;
    document.getElementById("card2-p").textContent = t.card2P;

    document.getElementById("secao-tec-h3").textContent = t.secaoTecH3;
    document.getElementById("secao-tec-p").textContent = t.secaoTecP;

    document.getElementById("drone-text").textContent = t.droneText;
    document.getElementById("irri-text").textContent = t.irriText;
    document.getElementById("solar-text").textContent = t.solarText;

    document.getElementById("secao-int-h3").textContent = t.secaoIntH3;
    document.getElementById("secao-int-p").textContent = t.secaoIntP;

    document.getElementById("botao-like").textContent = t.botaoLike;

    document.getElementById("form-h4").textContent = t.formH4;
    document.getElementById("label-nome").textContent = t.labelNome;
    document.getElementById("label-mensagem").textContent = t.labelMensagem;
    document.getElementById("botao-enviar").textContent = t.botaoEnviar;

    atualizarLikes();
}

// ======================================================
// TEMAS
// ======================================================
function mudarTema(tema) {
    temaAtual = tema;
    document.body.className = "tema-" + tema;
}

// ======================================================
// FONTE
// ======================================================
function aumentarFonte() {
    if (fonteAtual < 24) {
        fonteAtual += 2;
        document.documentElement.style.fontSize = fonteAtual + "px";
    }
}

function diminuirFonte() {
    if (fonteAtual > 12) {
        fonteAtual -= 2;
        document.documentElement.style.fontSize = fonteAtual + "px";
    }
}

// ======================================================
// LIKES
// ======================================================
function curtir() {
    contadorLikes++;
    atualizarLikes();
}

function atualizarLikes() {
    const t = textos[idiomaAtual];
    document.getElementById("contador-likes").textContent =
        t.textoApoios + contadorLikes + t.mensagemApoios;
}

// ======================================================
// NARRAÇÃO (VOZ)
// ======================================================
function narrarSite() {
    const synth = window.speechSynthesis;
    synth.cancel();

    const texto =
        document.getElementById("banner-h2").textContent + ". " +
        document.getElementById("banner-p").textContent + ". " +
        document.getElementById("secao-equi-h3").textContent + ". " +
        document.getElementById("secao-equi-p").textContent;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang =
        idiomaAtual === "pt" ? "pt-BR" :
        idiomaAtual === "en" ? "en-US" :
        "es-ES";

    synth.speak(fala);
}

// ======================================================
// EVENTOS
// ======================================================
document.getElementById("btn-pt").onclick = () => mudarIdioma("pt");
document.getElementById("btn-en").onclick = () => mudarIdioma("en");
document.getElementById("btn-es").onclick = () => mudarIdioma("es");

document.getElementById("btn-colorido").onclick = () => mudarTema("colorido");
document.getElementById("btn-branco").onclick = () => mudarTema("branco");
document.getElementById("btn-preto").onclick = () => mudarTema("preto");

document.getElementById("btn-Amais").onclick = aumentarFonte;
document.getElementById("btn-Amenos").onclick = diminuirFonte;

document.getElementById("botao-like").onclick = curtir;

document.getElementById("btn-narrar").onclick = narrarSite;

// ======================================================
// FORMULÁRIO
// ======================================================
document.getElementById("formulario-contato").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const msg = document.getElementById("mensagem").value.trim();
    const alerta = document.getElementById("mensagem-alerta");

    if (!nome || !msg) {
        alerta.textContent = textos[idiomaAtual].alertaVazio;
        alerta.style.color = "red";
        return;
    }

    alerta.textContent = "✔ Enviado com sucesso!";
    alerta.style.color = "green";

    document.getElementById("nome").value = "";
    document.getElementById("mensagem").value = "";
});

// iniciar
mudarIdioma("pt");
