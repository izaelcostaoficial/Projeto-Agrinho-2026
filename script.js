// ============================================================
// JS PROFISSIONAL - AGRINHO 2026
// ============================================================

// ============================================================
// BLOCO 1: DICIONÁRIO DE TRADUÇÃO MULTI-IDIOMA
// ============================================================
const traducoes = {
    pt: { /* ... mesmo conteúdo do seu pt ... */ },
    en: { /* ... mesmo conteúdo do seu en ... */ },
    es: { /* ... mesmo conteúdo do seu es ... */ }
};

// ============================================================
// BLOCO 2: ESTADO GLOBAL
// ============================================================
const estado = {
    idiomaAtual: "pt",
    numeroDeLikes: 0,
    tamanhoFonte: 16,
    narrando: false
};

// ============================================================
// BLOCO 3: FUNÇÕES DE TRADUÇÃO
// ============================================================
const tradutor = {
    atualizarIdioma: function(idioma) {
        estado.idiomaAtual = idioma;
        const txt = traducoes[idioma];

        const mapIDs = {
            titulo: "titulo-site",
            menuInicio: "menu-inicio",
            menuEquilibrio: "menu-equilibrio",
            menuTecnologia: "menu-tecnologia",
            menuParticipe: "menu-participe",
            bannerH2: "banner-h2",
            bannerP: "banner-p",
            bannerBtn: "banner-btn",
            secaoEquiH3: "secao-equi-h3",
            secaoEquiP: "secao-equi-p",
            card1H4: "card1-h4",
            card1P: "card1-p",
            card2H4: "card2-h4",
            card2P: "card2-p",
            videoH4: "video-h4",
            secaoTecH3: "secao-tec-h3",
            secaoTecP: "secao-tec-p",
            secaoIntH3: "secao-int-h3",
            secaoIntP: "secao-int-p",
            botaoLike: "botao-like",
            formH4: "form-h4",
            labelNome: "label-nome",
            labelMensagem: "label-mensagem",
            botaoEnviar: "botao-enviar"
        };

        // Atualiza todos os textos via mapeamento
        Object.entries(mapIDs).forEach(([chave, id]) => {
            const elemento = document.getElementById(id);
            if (elemento) elemento.textContent = txt[chave];
        });

        // Atualiza cards de tecnologia sem tocar nas imagens
        const techMap = [
            { id: "drone-text", titulo: "droneTitulo", texto: "droneTexto" },
            { id: "irri-text", titulo: "irriTitulo", texto: "irriTexto" },
            { id: "solar-text", titulo: "solarTitulo", texto: "solarTexto" }
        ];

        techMap.forEach(item => {
            const el = document.getElementById(item.id);
            if (el) el.innerHTML = `<strong>${txt[item.titulo]}:</strong>${txt[item.texto]}`;
        });

        // Atualiza contador de likes mantendo o número atual
        const contadorEl = document.getElementById("texto-apoios");
        if (contadorEl) {
            contadorEl.innerHTML = `${txt.contadorTextoPre}<span id="contador-likes">${estado.numeroDeLikes}</span>${txt.contadorTextoPos}`;
        }
    },
    vincularBotoes: function() {
        ["pt", "en", "es"].forEach(idioma => {
            const btn = document.getElementById(`btn-${idioma}`);
            if (btn) btn.addEventListener("click", () => this.atualizarIdioma(idioma));
        });
    }
};

// ============================================================
// BLOCO 4: ACESSIBILIDADE VISUAL E FONTES
// ============================================================
const acessibilidade = {
    temas: {
        colorido: "",
        branco: "tema-branco",
        preto: "tema-preto"
    },
    init: function() {
        Object.entries(this.temas).forEach(([chave, classe]) => {
            const btn = document.getElementById(`btn-${chave}`);
            if (btn) btn.addEventListener("click", () => document.body.className = classe);
        });

        // Controle de tamanho de fonte
        const aumentar = document.getElementById("btn-Amais");
        const diminuir = document.getElementById("btn-Amenos");
        if (aumentar) aumentar.addEventListener("click", () => this.alterarFonte(2));
        if (diminuir) diminuir.addEventListener("click", () => this.alterarFonte(-2));
    },
    alterarFonte: function(valor) {
        const novoTamanho = estado.tamanhoFonte + valor;
        if (novoTamanho >= 12 && novoTamanho <= 24) {
            estado.tamanhoFonte = novoTamanho;
            document.documentElement.style.fontSize = `${estado.tamanhoFonte}px`;
        }
    }
};

// ============================================================
// BLOCO 5: NARRADOR DE VOZ
// ============================================================
const narrador = {
    init: function() {
        const btn = document.getElementById("btn-narrar");
        if (btn) btn.addEventListener("click", () => this.toggleNarracao(btn));
    },
    toggleNarracao: function(btn) {
        const txt = traducoes[estado.idiomaAtual];
        if (estado.narrando) {
            speechSynthesis.cancel();
            btn.textContent = this.textoBotao();
            estado.narrando = false;
        } else {
            const utterance = new SpeechSynthesisUtterance(document.getElementById("conteudo-principal").innerText);
            utterance.lang = this.getIdioma();
            utterance.onend = () => {
                btn.textContent = this.textoBotao();
                estado.narrando = false;
            };
            speechSynthesis.speak(utterance);
            btn.textContent = this.textoBotao(true);
            estado.narrando = true;
        }
    },
    getIdioma: function() {
        return estado.idiomaAtual === "pt" ? "pt-BR" : estado.idiomaAtual === "en" ? "en-US" : "es-ES";
    },
    textoBotao: function(parando = false) {
        if (!parando) {
            return estado.idiomaAtual === "pt" ? "🔊 Narrar Site" :
                   estado.idiomaAtual === "en" ? "🔊 Narrate Site" : "🔊 Narrar Sitio";
        } else {
            return estado.idiomaAtual === "pt" ? "🛑 Parar Narração" :
                   estado.idiomaAtual === "en" ? "🛑 Stop Narration" : "🛑 Parar Narración";
        }
    }
};

// ============================================================
// BLOCO 6: CURTIDAS (LIKES)
// ============================================================
const likes = {
    init: function() {
        const btn = document.getElementById("botao-like");
        if (btn) btn.addEventListener("click", () => this.adicionarLike());
    },
    adicionarLike: function() {
        estado.numeroDeLikes++;
        const contador = document.getElementById("contador-likes");
        if (contador) contador.textContent = estado.numeroDeLikes;
    }
};

// ============================================================
// BLOCO 7: FORMULÁRIO DE SUGESTÕES
// ============================================================
const formularioSustentavel = {
    init: function() {
        const form = document.getElementById("formulario-contato");
        if (form) form.addEventListener("submit", this.enviar);
    },
    enviar: function(event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        const alerta = document.getElementById("mensagem-alerta");
        const txt = traducoes[estado.idiomaAtual];

        if (!nome || !mensagem) {
            alerta.textContent = txt.alertaCampos;
            alerta.style.color = "red";
        } else {
            alerta.textContent = txt.alertaSucesso.replace("{nome}", nome);
            alerta.style.color = "green";
            document.getElementById("nome").value = "";
            document.getElementById("mensagem").value = "";
        }
    }
};

// ============================================================
// BLOCO 8: INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    tradutor.vincularBotoes();
    tradutor.atualizarIdioma(estado.idiomaAtual);
    acessibilidade.init();
    narrador.init();
    likes.init();
    formularioSustentavel.init();
});
