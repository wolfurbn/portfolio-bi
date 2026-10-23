// Personalize os links e conteúdos neste arquivo antes de publicar.
const SETTINGS = {
  // Informe os links públicos dos relatórios (ou páginas de detalhes).
  comercialUrl: "https://drive.google.com/file/d/1-zaKNNJX60IG6K3tTkx4kYdD0hDjNZq9/view?usp=drive_link",
  agrovitaUrl: "https://drive.google.com/file/d/1FDmKYi5pEFW3GZxvpLr627Vv2Q2ZYh88/view?usp=drive_link",
  // Links opcionais:
  linkedinUrl: "https://www.linkedin.com/in/wolfkurban",
  cvUrl: "https://drive.google.com/file/d/1na0oiq-MqdwezxWSUiWsSjMRnuQsw-YD/view?usp=drive_link"
};

document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

const IMG = "imagens/";
const projects = {
  comercial: {
    title: "Inteligência Comercial",
    description: "Dashboard demonstrativo, com dados fictícios, para acompanhar resultados comerciais e entender a evolução das vendas.",
    bullets: [
      "Receita, total de vendas, ticket médio e quantidade de clientes",
      "Faturamento por mês, com análise temporal da evolução",
      "Segmentação por marca, gênero e continente",
      "Base com tabela fato de mais de 1 milhão de linhas, tratada no Power Query"
    ],
    url: SETTINGS.comercialUrl,
    gallery: [
      { group: "Dashboard", src: "comercial-dashboard.webp", w: 1512, h: 853, wide: true,
        alt: "Dashboard Comercial em Power BI",
        caption: "Dashboard Comercial: receita, total de vendas, ticket médio e clientes, com faturamento por mês, gênero, marca e continente." },
      { group: "Power Query", src: "comercial-powerquery-lojas.png", w: 1735, h: 464, wide: true,
        alt: "Power Query: tratamento do cadastro de lojas",
        caption: "Power Query, cadastro de lojas: renomeação, divisão e mesclagem de colunas (nome e sobrenome do gerente) e remoção de linhas em branco." },
      { group: "Power Query", src: "comercial-powerquery-clientes.png", w: 1730, h: 472, wide: true,
        alt: "Power Query: tratamento do cadastro de clientes",
        caption: "Power Query, cadastro de clientes: cálculo da idade e coluna condicional de faixa etária (Jovem, Adulto e Sênior)." }
    ]
  },
  agrovita: {
    title: "Agrovita | Engenharia & Agro",
    description: "Projeto com dados fictícios de agronegócio e engenharia: quatro páginas de relatório e um modelo dimensional para acompanhar OEE, CAPEX e KPIs de Engenharia.",
    bullets: [
      "OEE (disponibilidade, performance e qualidade) por unidade e por equipamento",
      "CAPEX planejado versus realizado, curva S e avanço físico e financeiro por projeto",
      "KPIs de Engenharia: projetos no prazo, backlog, lead time e economia gerada",
      "Modelo dimensional com três tabelas fato e medidas DAX"
    ],
    url: SETTINGS.agrovitaUrl,
    gallery: [
      { group: "Dashboard", src: "agrovita-visao-executiva.webp", w: 1481, h: 809,
        alt: "AgroVita, página Visão Executiva",
        caption: "Visão Executiva: OEE contra a meta, aderência de CAPEX, projetos no prazo, economia gerada, incidentes e backlog médio." },
      { group: "Dashboard", src: "agrovita-oee.webp", w: 1479, h: 812,
        alt: "AgroVita, página OEE",
        caption: "OEE: disponibilidade, performance e qualidade por unidade, OEE por tipo de equipamento e os 10 equipamentos com menor OEE." },
      { group: "Dashboard", src: "agrovita-capex-projetos.webp", w: 1446, h: 806,
        alt: "AgroVita, página CAPEX e Projetos",
        caption: "CAPEX e Projetos: planejado versus realizado, curva S acumulada, CAPEX por categoria e avanço físico e financeiro por projeto." },
      { group: "Dashboard", src: "agrovita-engenharia.webp", w: 1753, h: 810,
        alt: "AgroVita, página Engenharia",
        caption: "Engenharia: projetos no prazo por equipe, backlog e lead time por mês e economia gerada por equipe e unidade." },
      { group: "Modelagem de dados", src: "agrovita-modelagem.png", w: 923, h: 811, side: true,
        alt: "Modelo de dados do AgroVita no Power BI",
        caption: "Modelo dimensional: tabelas fato de CAPEX, KPIs de Engenharia e OEE ligadas às dimensões de calendário, unidade, projeto, equipe e equipamento." },
      { group: "Medidas DAX", src: "agrovita-dax-avanco-fisico.png", w: 363, h: 124,
        alt: "Medida DAX Avanço Físico",
        caption: "Avanço Físico: ISINSCOPE, CALCULATE e LASTDATE para trazer o último avanço de cada projeto." },
      { group: "Medidas DAX", src: "agrovita-dax-capex-acumulado.png", w: 418, h: 113,
        alt: "Medida DAX CAPEX Realizado Acum",
        caption: "CAPEX Realizado Acum: acumulado no tempo com CALCULATE, FILTER e ALL sobre a tabela calendário." },
      { group: "Medidas DAX", src: "agrovita-dax-status-aderencia.png", w: 670, h: 98,
        alt: "Medida DAX Status Aderência CAPEX",
        caption: "Status Aderência CAPEX: classifica como dentro da faixa quando a aderência fica entre 95% e 105%." }
    ]
  }
};
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
function openLightbox(item) {
  lightboxImg.src = IMG + item.src;
  lightboxImg.alt = item.alt;
  lightboxCaption.textContent = item.caption;
  lightbox.showModal();
}
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) lightbox.close();
});
function renderGallery(items) {
  const gallery = document.getElementById("dialog-gallery");
  gallery.replaceChildren();
  let currentGroup = null, grid = null;
  items.forEach(item => {
    if (item.group !== currentGroup) {
      currentGroup = item.group;
      const title = document.createElement("h3");
      title.className = "gallery-title";
      title.textContent = currentGroup;
      grid = document.createElement("div");
      grid.className = "gallery-grid";
      gallery.append(title, grid);
    }
    const figure = document.createElement("figure");
    figure.className = "gallery-item" + (item.wide ? " wide" : "") + (item.side ? " side" : "");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-thumb";
    button.setAttribute("aria-label", "Ampliar: " + item.alt);
    const img = document.createElement("img");
    img.src = IMG + item.src;
    img.alt = item.alt;
    img.width = item.w;
    img.height = item.h;
    img.loading = "lazy";
    button.appendChild(img);
    button.addEventListener("click", () => openLightbox(item));
    const caption = document.createElement("figcaption");
    caption.textContent = item.caption;
    figure.append(button, caption);
    grid.appendChild(figure);
  });
}
const dialog = document.getElementById("project-dialog");
document.querySelectorAll(".project-link").forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  const project = projects[link.dataset.project];
  document.getElementById("dialog-title").textContent = project.title;
  document.getElementById("dialog-description").textContent = project.description;
  const list = document.getElementById("dialog-list");
  list.replaceChildren(...project.bullets.map(item => {
    const li = document.createElement("li"); li.textContent = item; return li;
  }));
  renderGallery(project.gallery || []);
  const reportLink = document.getElementById("dialog-report");
  if (project.url) {
    reportLink.href = project.url;
    reportLink.style.display = "inline-flex";
  } else {
    reportLink.style.display = "none";
  }
  dialog.showModal();
}));
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
function normalizeUrl(url) {
  if (!url) return url;
  const clean = url.trim();
  return /^(https?:|mailto:|tel:)/i.test(clean) ? clean : "https://" + clean.replace(/^\/+/, "");
}
function configureOptionalLink(id, rawUrl) {
  const el = document.getElementById(id);
  const url = normalizeUrl(rawUrl);
  if (url) {
    el.href = url;
    if (url.startsWith("http")) { el.target = "_blank"; el.rel = "noopener noreferrer"; }
  } else {
    el.addEventListener("click", event => {
      event.preventDefault();
      alert("Adicione seu link no arquivo script.js antes de publicar o portfólio.");
    });
  }
}
configureOptionalLink("linkedin-link", SETTINGS.linkedinUrl);
configureOptionalLink("cv-link", SETTINGS.cvUrl);
