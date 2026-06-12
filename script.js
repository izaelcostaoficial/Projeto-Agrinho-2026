// --- LÓGICA DO BOTÃO DE CURTIDAS (LIKES) ---
let numeroDeLikes = 0;
const botaoLike = document.getElementById("botao-like");
const textoContador = document.getElementById("contador-likes");

botaoLike.addEventListener("click", function() {
    numeroDeLikes = numeroDeLikes + 1;
    textoContador.textContent = numeroDeLikes;
});

// --- LÓGICA DA VALIDAÇÃO DO FORMULÁRIO ---
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
