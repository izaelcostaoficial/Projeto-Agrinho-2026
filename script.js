// ======================================================
// PROJETO AGRINHO 2026 - JAVASCRIPT PROFISSIONAL
// ======================================================

// -------------------------
// ESTADO GLOBAL
// -------------------------
const state = {
  idioma: localStorage.getItem("idioma") || "pt",
  tema: localStorage.getItem("tema") || "colorido",
  fontSize: Number(localStorage.getItem("fontSize")) || 16,
  likes: Number(localStorage.getItem("likes")) || 0,
  narrando: false
};

// -------------------------
// ELEMENTOS
// -------------------------
const body = document.body;
const html = document.documentElement;
const btnNarrar = document.getElementById("btn-narrar");
const contadorLikes = document.getElementById("contador-likes");
const botaoLike = document.getElementById("botao-like");

// -------------------------
// IDIOMAS
// -------------------------
const textos = {
  pt: { narrar: "🔊 Narrar Site", parar: "🛑 Parar Narração" },
  en: { narrar: "🔊 Narrate Site", parar: "🛑 Stop Narration" },
  es: { narrar: "🔊 Narrar Sitio", parar: "🛑 Detener Narración" }
};

// -------------------------
// APLICAR TEMA
// -------------------------
function aplicarTema(tema) {
  body.classList.remove("tema-branco", "tema-preto");

  if (tema === "branco") body.classList.add("tema-branco");
  if (tema === "preto") body.classList.add("tema-preto");

  state.tema = tema;
  localStorage.setItem("tema", tema);
}

// -------------------------
// APLICAR FONTE
// -------------------------
function aplicarFonte(tamanho) {
  html.style.fontSize = tamanho + "px";
  state.fontSize = tamanho;
  localStorage.setItem("fontSize", tamanho);
}

// -------------------------
// ALTERAR IDIOMA (BÁSICO + EXTENSÍVEL)
// -------------------------
function alterarIdioma(lang) {
  state.idioma = lang;
  localStorage.setItem("idioma", lang);

  // Aqui você pode expandir depois com tradução completa
}

// -------------------------
// LIKES
// -------------------------
function atualizarLikes() {
  contadorLikes.textContent = state.likes;
  localStorage.setItem("likes", state.likes);
}

function curtir() {
  state.likes++;
  atualizarLikes();
}

// -------------------------
// NARRADOR INTELIGENTE
// -------------------------
function narrarSite() {
  const synth = window.speechSynthesis;

  if (state.narrando) {
    synth.cancel();
    state.narrando = false;
    btnNarrar.textContent = textos[state.idioma].narrar;
    return;
  }

  const texto = document.body.innerText;
  const utter = new SpeechSynthesisUtterance(texto);

  utter.lang =
    state.idioma === "pt" ? "pt-BR" :
    state.idioma === "en" ? "en-US" :
    "es-ES";

  utter.onend = () => {
    state.narrando = false;
    btnNarrar.textContent = textos[state.idioma].narrar;
  };

  state.narrando = true;
  btnNarrar.textContent = textos[state.idioma].parar;

  synth.speak(utter);
}

// -------------------------
// EVENTOS
// -------------------------

// Tema
document.querySelectorAll("[data-theme]").forEach(btn => {
  btn.addEventListener("click", e => {
    aplicarTema(e.target.dataset.theme);
  });
});

// Fonte
document.querySelectorAll("[data-font]").forEach(btn => {
  btn.addEventListener("click", e => {
    if (e.target.dataset.font === "increase") {
      aplicarFonte(state.fontSize + 2);
    } else {
      aplicarFonte(state.fontSize - 2);
    }
  });
});

// Idioma
document.querySelectorAll("[data-id]").forEach(btn => {
  btn.addEventListener("click", e => {
    alterarIdioma(e.target.dataset.id);
  });
});

// Like
botaoLike.addEventListener("click", curtir);

// Narrador
btnNarrar.addEventListener("click", narrarSite);

// -------------------------
// INICIALIZAÇÃO
// -------------------------
function init() {
  aplicarTema(state.tema);
  aplicarFonte(state.fontSize);
  atualizarLikes();
  alterarIdioma(state.idioma);
}

init();
