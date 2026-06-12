/* =========================
   CONFIGURAÇÃO DE TEMA
========================= */
const btnTemaColorido = document.getElementById('tema-colorido');
const btnTemaBranco = document.getElementById('tema-branco');
const btnTemaPreto = document.getElementById('tema-preto');

function aplicarTema(tema) {
    document.body.classList.remove('colorido', 'claro', 'escuro');
    document.body.classList.add(tema);
}

// Eventos dos botões de tema
btnTemaColorido.addEventListener('click', () => aplicarTema('colorido'));
btnTemaBranco.addEventListener('click', () => aplicarTema('claro'));
btnTemaPreto.addEventListener('click', () => aplicarTema('escuro'));


/* =========================
   AJUSTE DE FONTE
========================= */
const btnAumentar = document.getElementById('aumentar-fonte');
const btnDiminuir = document.getElementById('diminuir-fonte');

function ajustarFonte(aumento) {
    const html = document.querySelector('html');
    let fontSize = parseFloat(window.getComputedStyle(html).fontSize);
    fontSize += aumento;
    if (fontSize < 12) fontSize = 12;  // limite mínimo
    if (fontSize > 24) fontSize = 24;  // limite máximo
    html.style.fontSize = fontSize + 'px';
}

btnAumentar.addEventListener('click', () => ajustarFonte(2));
btnDiminuir.addEventListener('click', () => ajustarFonte(-2));


/* =========================
   CONTADOR DE LIKES
========================= */
const btnLike = document.getElementById('botao-like');
const contador = document.getElementById('contador-likes');

let totalLikes = 0;

btnLike.addEventListener('click', () => {
    totalLikes++;
    contador.textContent = totalLikes;
});


/* =========================
   TROCA DE IDIOMA
========================= */
const btnPT = document.getElementById('idioma-pt');
const btnEN = document.getElementById('idioma-en');
const btnES = document.getElementById('idioma-es');

const textos = {
    pt: {
        bannerH2: "Bem-vindo ao Nosso Site",
        bannerP: "Descubra conteúdos incríveis e interaja com nossa comunidade.",
        secaoConteudoH3: "Seção de Conteúdo",
        secaoConteudoP: "Aqui você encontra informações detalhadas sobre nossos serviços.",
        secaoTecnologiaH3: "Tecnologias",
        listaTecnologia1: "Inteligência Artificial",
        listaTecnologia2: "Desenvolvimento Web",
        secaoInteracaoH3: "Participe",
        formH4: "Formulário Sustentável",
        botaoEnviar: "Enviar",
        botaoSaberMais: "Saiba Mais"
    },
    en: {
        bannerH2: "Welcome to Our Website",
        bannerP: "Discover amazing content and interact with our community.",
        secaoConteudoH3: "Content Section",
        secaoConteudoP: "Here you find detailed information about our services.",
        secaoTecnologiaH3: "Technologies",
        listaTecnologia1: "Artificial Intelligence",
        listaTecnologia2: "Web Development",
        secaoInteracaoH3: "Join Us",
        formH4: "Sustainable Form",
        botaoEnviar: "Submit",
        botaoSaberMais: "Learn More"
    },
    es: {
        bannerH2: "Bienvenido a Nuestro Sitio",
        bannerP: "Descubre contenido increíble e interactúa con nuestra comunidad.",
        secaoConteudoH3: "Sección de Contenido",
        secaoConteudoP: "Aquí encuentras información detallada sobre nuestros servicios.",
        secaoTecnologiaH3: "Tecnologías",
        listaTecnologia1: "Inteligencia Artificial",
        listaTecnologia2: "Desarrollo Web",
        secaoInteracaoH3: "Participa",
        formH4: "Formulario Sostenible",
        botaoEnviar: "Enviar",
        botaoSaberMais: "Más Información"
    }
};

function trocarIdioma(lang) {
    document.getElementById('banner-h2').textContent = textos[lang].bannerH2;
    document.getElementById('banner-p').textContent = textos[lang].bannerP;
    document.getElementById('conteudo-h3').textContent = textos[lang].secaoConteudoH3;
    document.getElementById('conteudo-p').textContent = textos[lang].secaoConteudoP;
    document.getElementById('tecnologia-h3').textContent = textos[lang].secaoTecnologiaH3;
    document.getElementById('tec1').textContent = textos[lang].listaTecnologia1;
    document.getElementById('tec2').textContent = textos[lang].listaTecnologia2;
    document.getElementById('interacao-h3').textContent = textos[lang].secaoInteracaoH3;
    document.getElementById('form-h4').textContent = textos[lang].formH4;
    document.getElementById('botao-enviar').textContent = textos[lang].botaoEnviar;
    document.getElementById('botao-saber-mais').textContent = textos[lang].botaoSaberMais;
}

// Eventos de idioma
btnPT.addEventListener('click', () => trocarIdioma('pt'));
btnEN.addEventListener('click', () => trocarIdioma('en'));
btnES.addEventListener('click', () => trocarIdioma('es'));


/* =========================
   AUDIO / NARRADOR
========================= */
const btnNarrar = document.getElementById('narrar-site');
let synth = window.speechSynthesis;

btnNarrar.addEventListener('click', () => {
    if(synth.speaking) synth.cancel();

    let lang = 'pt-BR';
    if(btnEN.classList.contains('ativo')) lang = 'en-US';
    if(btnES.classList.contains('ativo')) lang = 'es-ES';

    // Pega todo texto visível das seções principais
    let texto = document.getElementById('banner-h2').textContent + ". " +
                document.getElementById('banner-p').textContent + ". " +
                document.getElementById('conteudo-h3').textContent + ". " +
                document.getElementById('conteudo-p').textContent;

    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = lang;
    synth.speak(utterance);
});
