// --- 1. LÓGICA DO BOTÃO DE CURTIDAS (LIKES) ---

// Criamos uma variável para guardar o número de curtidas começando em zero
let numeroDeLikes = 0;

// Pegamos o botão e o texto do contador do HTML usando os IDs
const botaoLike = document.getElementById("botao-like");
const textoContador = document.getElementById("contador-likes");

// Avisamos ao navegador para escutar quando o usuário clicar no botão
botaoLike.addEventListener("click", function() {
    // Toda vez que clicar, soma 1 ao número atual
    numeroDeLikes = numeroDeLikes + 1;
    
    // Atualiza o texto que aparece na tela do site com o novo número
    textoContador.textContent = numeroDeLikes;
});


// --- 2. LÓGICA DA VALIDAÇÃO DO FORMULÁRIO ---

// Pegamos o formulário, os campos de texto e o parágrafo de alerta pelos IDs
const formulario = document.getElementById("formulario-contato");
const campoNome = document.getElementById("nome");
const campoMensagem = document.getElementById("mensagem");
const textoAlerta = document.getElementById("mensagem-alerta");

// Escutamos o momento em que o usuário tenta enviar (submit) o formulário
formulario.addEventListener("submit", function(event) {
    // event.preventDefault() serve para o site NÃO recarregar a página antes da nossa verificação
    event.preventDefault();

    // Pegamos os valores digitados e tiramos espaços vazios usando .trim()
    const nomeDigitado = campoNome.value.trim();
    const mensagemDigitada = campoMensagem.value.trim();

    // Testamos se algum dos campos ficou em branco
    if (nomeDigitado === "" || mensagemDigitada === "") {
        // Se estiver vazio, exibe uma mensagem em vermelho avisando o erro
        textoAlerta.textContent = "Por favor, preencha todos os campos antes de enviar!";
        textoAlerta.style.color = "red";
    } else {
        // Se estiver tudo preenchido, exibe mensagem verde de sucesso
        textoAlerta.textContent = "Obrigado por sua sugestão, " + nomeDigitado + "! Juntos pelo agro sustentável.";
        textoAlerta.style.color = "green";

        // Limpa as caixas de texto para o usuário poder digitar de novo se quiser
        campoNome.value = "";
        campoMensagem.value = "";
    }
});
