// --- 1. SISTEMA DE CONTRASTE DE CORES ---
const body = document.body;

document.getElementById("btn-colorido").addEventListener("click", function() {
    body.className = ""; // Remove as classes alternativas voltando ao colorido padrão
});

document.getElementById("btn-branco").addEventListener("click", function() {
    body.className = "tema-branco"; // Ativa fundo branco e letras pretas
});

document.getElementById("btn-preto").addEventListener("click", function() {
    body.className = "tema-preto"; // Ativa o modo Dark (fundo preto)
});


// --- 2. SISTEMA DE AUMENTAR E DIMINUIR TEXTO ---
let tamanhoBase = 16; // 16px é o tamanho padrão do navegador

document.getElementById("btn-Amais").addEventListener("click", function() {
    if (tamanhoBase < 24) { // Limite máximo seguro de tamanho
        tamanhoBase = tamanhoBase + 2;
        document.documentElement.style.fontSize = tamanhoBase + "px";
    }
});

document.getElementById("btn-Amenos").addEventListener("click", function() {
    if (tamanhoBase > 12) { // Limite mínimo seguro de tamanho
        tamanhoBase = tamanhoBase - 2;
        document.documentElement.style.fontSize = tamanhoBase + "px";
    }
});


// --- 3. LEITOR DE TELA (NARRAR TEXTOS DO SITE) ---
let narrando = false;
let sinteseVoz = window.speechSynthesis;
let escopoLeitura;

document.getElementById("btn-narrar").addEventListener("click", function() {
    // Se já estiver tocando, ele para a leitura
    if (narrando) {
        sinteseVoz.cancel();
        document.getElementById("btn-narrar").textContent = "🔊 Narrar Site";
        narrando = false;
    } else {
        // Pega todos os blocos de texto principais dentro da tag <main>
        const textoParaLer = document.getElementById("conteudo-principal").innerText;
        
        escopoLeitura = new SpeechSynthesisUtterance(textoParaLer);
        escopoLeitura.lang = "pt-BR"; // Configura a fala em português
        
        // Avisa que terminou de ler para mudar o botão de volta
        escopoLeitura.onend = function() {
            document.getElementById("btn-narrar").textContent = "🔊 Narrar Site";
            narrando = false;
        };

        sinteseVoz.speak(escopoLeitura);
        document.getElementById("btn-narrar").textContent = "🛑 Parar Narração";
        narrando = true;
    }
});


// --- 4. LÓGICA DO BOTÃO DE CURTIDAS (LIKES) ---
let numeroDeLikes = 0;
const botaoLike = document.getElementById("botao-like");
const textoContador = document.getElementById("contador-likes");

botaoLike.addEventListener("click", function() {
    numeroDeLikes = numeroDeLikes + 1;
    textoContador.textContent = numeroDeLikes;
});


// --- 5. VALIDAÇÃO DO FORMULÁRIO ---
const formulario = document.getElementById("formulario-contato");
const campoNome = document.getElementById("nome");
const campoMensagem = document.getElementById("mensagem");
const textoAlerta = document.getElementById("mensagem-alerta");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeDigitado = campoNome.value.trim();
    const mensagemDigitada = campoMensagem.value.trim();

    if (nomeDigitado === "" || mensagemDigitada === "") {
        textoAlerta.textContent = "Por favor, preencha todos os campos antes de enviar!";
        textoAlerta.style.color = "red";
    } else {
        textoAlerta.textContent = "Obrigado por sua sugestão, " + nomeDigitado + "! Juntos pelo agro sustentável.";
        textoAlerta.style.color = "green";

        campoNome.value = "";
        campoMensagem.value = "";
    }
});
