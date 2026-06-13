// =================================================================
// SCRIPT.JS - BLOCO 1: BASE DE DADOS DOS IDIOMAS (PT / EN / ES)
// =================================================================

// Objeto imutável contendo mapeamento integral dos textos para os três idiomas
const traducoes = {
    pt: {
        titulo: "Projeto Agrinho 2026",
        menuInicio: "Início",
        menuEquilibrio: "O Equilíbrio",
        menuTecnologia: "Tecnologia no Campo",
        menuParticipe: "Participe",
        bannerH2: "Agro Forte, Futuro Sustentável",
        bannerP: "Descubra como a produção de alimentos e a preservação do meio ambiente andam juntas para garantir o amanhã.",
        bannerBtn: "Entender o Projeto",
        secaoEquiH3: "O Equilíbrio Necessário",
        secaoEquiP: "Para o nosso futuro ser seguro, o campo precisa produzir alimentos de forma eficiente sem esgotar os recursos naturais da nossa terra.",
        card1H4: "Produção Forte",
        card1P: "O agro abastece as cidades, gera empregos e garante que a comida chegue na mesa de milhões de pessoas todos os dias.",
        card2H4: "Preservação Ativa",
        card2P: "Cuidar das florestas, proteger as nascentes de água e evitar poluição é o que mantém a terra fértil para as próximas gerações.",
        videoH4: "Assista: O Futuro do Agro Sustentável",
        secaoTecH3: "Inovação e Tecnologia Sustentável",
        secaoTecP: "Hoje, o produtor rural usa ferramentas modernas para evitar desperdícios. Veja alguns exemplos de práticas reais:",
        droneTitulo: "Drones agrícolas",
        droneTexto: " Monitoram as plantações de cima, encontrando pragas e evitando o uso exagerado de defensivos agrícolas.",
        irriTitulo: "Irrigação gota a gota",
        irriTexto: " Leva a quantidade exata de água que a planta precisa diretamente na raiz, economizando rios de água.",
        solarTitulo: "Energia Solar",
        solarTexto: " Uso de placas fotovoltaicas para gerar energia limpa nas fazendas e reduzir o impacto no ambiente.",
        secaoIntH3: "Participe da Nossa Ideia",
        secaoIntP: "Apoie o nosso projeto escolar ou envie uma sugestão de prática sustentável para o campo!",
        btnLike: "👍 Apoiar Projeto",
        contadorTextoPre: "Este projeto já recebeu ",
        contadorTextoPos: " apoios!",
        formH4: "Envie sua Sugestão",
        labelNome: "Seu Nome:",
        labelMensagem: "Sua Sugestão Ambiental:",
        btnEnviar: "Enviar Mensagem",
        alertaCampos: "Por favor, preencha todos os campos antes de enviar!",
        alertaSucesso: "Obrigado por sua sugestão, {nome}! Juntos pelo agro sustentável."
    },
    en: {
        titulo: "Agrinho Project 2026",
        menuInicio: "Home",
        menuEquilibrio: "The Balance",
        menuTecnologia: "Farm Tech",
        menuParticipe: "Join In",
        bannerH2: "Strong Agro, Sustainable Future",
        bannerP: "Discover how food production and environmental preservation work together to guarantee tomorrow.",
        bannerBtn: "Understand the Project",
        secaoEquiH3: "The Necessary Balance",
        secaoEquiP: "For our future to be safe, the countryside must produce food efficiently without depleting our land's natural resources.",
        card1H4: "Strong Production",
        card1P: "Agribusiness supplies cities, creates jobs, and ensures food reaches the tables of millions every day.",
        card2H4: "Active Preservation",
        card2P: "Caring for forests, protecting water sources, and avoiding pollution is what keeps the soil fertile for future generations.",
        videoH4: "Watch: The Future of Sustainable Agro",
        secaoTecH3: "Innovation and Sustainable Technology",
        secaoTecP: "Today, rural producers use modern tools to avoid waste. See some examples of real practices:",
        droneTitulo: "Agricultural drones",
        droneTexto: " Monitor crops from above, finding pests and avoiding the excessive use of pesticides.",
        irriTitulo: "Drip irrigation",
        irriTexto: " Delivers the exact amount of water the plant needs directly to the root, saving tons of water.",
        solarTitulo: "Solar Energy",
        solarTexto: " Use of photovoltaic panels to generate clean energy on farms and reduce environmental impact.",
        secaoIntH3: "Join Our Idea",
        secaoIntP: "Support our school project or send a suggestion for a sustainable practice for the countryside!",
        btnLike: "👍 Support Project",
        contadorTextoPre: "This project has already received ",
        contadorTextoPos: " supports!",
        formH4: "Send your Suggestion",
        labelNome: "Your Name:",
        labelMensagem: "Your Environmental Suggestion:",
        btnEnviar: "Send Message",
        alertaCampos: "Please fill in all fields before sending!",
        alertaSucesso: "Thank you for your suggestion, {nome}! Together for sustainable agro."
    },
    es: {
        titulo: "Proyecto Agrinho 2026",
        menuInicio: "Inicio",
        menuEquilibrio: "El Equilibrio",
        menuTecnologia: "Tecnología de Campo",
        menuParticipe: "Participe",
        bannerH2: "Agro Fuerte, Futuro Sostenible",
        bannerP: "Descubra cómo la producción de alimentos y la preservación del medio ambiente trabajan juntas para garantizar el mañana.",
        bannerBtn: "Entender el Proyecto",
        secaoEquiH3: "El Equilibrio Necesario",
        secaoEquiP: "Para que nuestro futuro sea seguro, el campo debe producir alimentos de manera eficiente sin agotar los recursos naturales de nuestra tierra.",
        card1H4: "Producción Fuerte",
        card1P: "El agronegocio abastece a las ciudades, genera empleos y garantiza que la comida llegue a la mesa de millones todos los días.",
        card2H4: "Preservación Activa",
        card2P: "Cuidar los bosques, proteger las fuentes de agua y evitar la contaminación mantiene el suelo fértil para las próximas generaciones.",
        videoH4: "Vea: El Futuro del Agro Sostenible",
        secaoTecH3: "Innovación y Tecnología Sostenible",
        secaoTecP: "Hoy en día, los productores rurales utilizan herramientas modernas para evitar el desperdicio. Vea algunos ejemplos prácticos:",
        droneTitulo: "Drones agrícolas",
        droneTexto: " Monitorean los cultivos desde arriba, encontrando plagas y evitando el uso excesivo de pesticidas.",
        irriTitulo: "Riego por goteo",
        irriTexto: " Lleva la cantidad exacta de agua que la planta necesita directamente a la raíz, ahorrando ríos de agua.",
        solarTitulo: "Energía Solar",
        solarTexto: " Uso de paneles fotovoltaicos para generar energía limpia en las fincas y reducir el impacto ambiental.",
        secaoIntH3: "Participe de Nuestra Idea",
        secaoIntP: "¡Apoye nuestro proyecto escolar o envíe una sugerencia de práctica sostenible para el campo!",
        btnLike: "👍 Apoyar Proyecto",
        contadorTextoPre: "¡Este proyecto ya ha recibido ",
        contadorTextoPos: " apoyos!",
        formH4: "Envíe su Sugerencia",
        labelNome: "Su Nombre:",
        labelMensagem: "Su Sugerencia Ambiental:",
        btnEnviar: "Enviar Mensaje",
        alertaCampos: "¡Por favor, complete todos los campos antes de enviar!",
        alertaSucesso: "¡Gracias por su sugerencia, {nome}! Juntos por el agro sostenible."
    }
};

// Variáveis de controle de estado global que interligam os blocos do script
let idiomaAtual = "pt";
let numeroDeLikes = 0;
// =================================================================
// SCRIPT.JS - BLOCO 2: ENGINE DE TRADUÇÃO DOS TEXTOS DO DOM
// =================================================================

// Função de varredura que atualiza as strings do DOM sem reconstruir ou duplicar os elementos de imagem
function alternarIdioma(idioma) {
    idiomaAtual = idioma;
    const txt = traducoes[idioma];

    // Atualização dos textos dos cabeçalhos, botões e menus nativos
    document.getElementById("titulo-site").textContent = txt.titulo;
    document.getElementById("menu-inicio
