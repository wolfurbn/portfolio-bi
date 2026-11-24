// Personalize os links e conteúdos neste arquivo antes de publicar.
const SETTINGS = {
  // Informe os links públicos dos relatórios (ou páginas de detalhes).
  comercialUrl: "https://drive.google.com/file/d/1-zaKNNJX60IG6K3tTkx4kYdD0hDjNZq9/view?usp=drive_link",
  agrovitaUrl: "https://drive.google.com/file/d/1FDmKYi5pEFW3GZxvpLr627Vv2Q2ZYh88/view?usp=drive_link",
  // Urban Ranch: relatório em PDF (se ficar vazio, o botão "Abrir relatório" some).
  urbanranchUrl: "https://drive.google.com/file/d/1t8AnYOfUl8eLprSTTiVUm6DF6n_O0K5Z/view?usp=drivesdk",
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
  urbanranch: {
    title: "Urban Ranch Pecuária",
    description: "Case fictício de pecuária de corte, feito do banco de dados ao dashboard: dados em SQLite, consultas em SQL, limpeza e análise em Python e um relatório de quatro páginas em Power BI.",
    bullets: [
      "Banco SQLite com 16 tabelas (dimensões e fatos) e consultas SQL com CTE e a função LAG para calcular o GMD",
      "Python (pandas): exploração, limpeza e correção da base, com remoção de duplicados e ajuste de sinais e pesos",
      "Análises de margem por unidade e de mortalidade por origem do gado",
      "Power BI: modelo dimensional, medidas DAX e quatro páginas (Visão Executiva, Desempenho Zootécnico, Custos e Rentabilidade e Capex Rural)"
    ],
    pipeline: [
      { title: "SQL", text: "Consulta e confere o banco SQLite" },
      { title: "Python", text: "Explora, limpa, corrige e analisa" },
      { title: "Power BI", text: "Modela, calcula as medidas e apresenta" }
    ],
    url: SETTINGS.urbanranchUrl,
    gallery: [
      { group: "Dashboard", src: "urbanranch-visao-executiva.webp", w: 1445, h: 810,
        alt: "Urban Ranch, página Visão Executiva",
        caption: "Visão Executiva: faturamento, margem, margem %, custo da arroba produzida, GMD e mortalidade dos lotes encerrados, com margem por ano de encerramento e por unidade." },
      { group: "Dashboard", src: "urbanranch-desempenho-zootecnico.webp", w: 1442, h: 810,
        alt: "Urban Ranch, página Desempenho Zootécnico",
        caption: "Desempenho Zootécnico: GMD por unidade e por raça, mortalidade por origem, mortes por causa e raça e chuva média por mês." },
      { group: "Dashboard", src: "urbanranch-custos-rentabilidade.webp", w: 1438, h: 814,
        alt: "Urban Ranch, página Custos e Rentabilidade",
        caption: "Custos e Rentabilidade: custo operacional por categoria e por unidade, ponto de equilíbrio, margem por arroba e lotes com prejuízo." },
      { group: "Dashboard", src: "urbanranch-capex-rural.webp", w: 1441, h: 809,
        alt: "Urban Ranch, página Capex Rural",
        caption: "Capex Rural: orçamento aprovado, comprometido e realizado, saldo disponível, projetos atrasados e avanço físico e financeiro." },
      { group: "SQL", src: "urbanranch-sql-consulta-lote.webp", w: 1600, h: 1016,
        alt: "Consulta SQL no banco SQLite do Urban Ranch",
        caption: "Banco SQLite com as tabelas de dimensões e fatos e uma primeira consulta com SELECT e LIMIT na tabela de lotes." },
      { group: "SQL", src: "urbanranch-sql-gmd-por-unidade.webp", w: 1600, h: 725,
        alt: "Consulta SQL com CTE e LAG para calcular o GMD",
        caption: "CTE com LAG(): calcula o ganho de peso e os dias entre pesagens para chegar ao GMD médio por unidade." },
      { group: "Python", src: "urbanranch-python-explorar-vendas.webp", w: 1262, h: 1003,
        alt: "Script Python que explora a tabela de vendas",
        caption: "Exploração da tabela de vendas com pandas: valores vazios por coluna, embarques repetidos e cabeças vendidas negativas." },
      { group: "Python", src: "urbanranch-python-limpar-vendas.webp", w: 1625, h: 1025,
        alt: "Script Python que limpa a tabela de vendas",
        caption: "Limpeza das vendas: remove embarques duplicados e corrige o sinal das cabeças, com o faturamento antes e depois (de R$ 324,85 mi para R$ 321,15 mi)." },
      { group: "Python", src: "urbanranch-python-limpar-pesagem.webp", w: 1620, h: 1003,
        alt: "Script Python que limpa a tabela de pesagens",
        caption: "Limpeza das pesagens: padroniza tipos, remove duplicadas e registros fora da vida do lote, corrige pesos negativos e com erro de escala (x10) e preenche ausentes." },
      { group: "Python", src: "urbanranch-python-analise-negocio.webp", w: 1620, h: 1037,
        alt: "Script Python com a análise de negócio",
        caption: "Análise de negócio: margem por unidade nos lotes encerrados e mortalidade por origem do gado, com gráfico gerado em Matplotlib." },
      { group: "Python", src: "urbanranch-python-exportar-powerbi.webp", w: 1620, h: 1021,
        alt: "Script Python que exporta os dados tratados para o Power BI",
        caption: "Exportação das tabelas tratadas para um arquivo Excel, com uma aba por tabela, que alimenta o Power BI." },
      { group: "Modelagem de dados", src: "urbanranch-modelagem.webp", w: 1138, h: 771, side: true,
        alt: "Modelo de dados do Urban Ranch no Power BI",
        caption: "Modelo dimensional no Power BI: nove tabelas fato (vendas, pesagem, movimentação, alimentação, sanidade, custos por lote, carcaça, clima e CAPEX) ligadas a sete dimensões (calendário, lote, unidade, piquete, projeto, raça e comprador), mais a tabela de medidas." },
      { group: "Power BI e DAX", src: "urbanranch-powerbi-ano-encerramento.webp", w: 1914, h: 992,
        alt: "Power BI: coluna Ano Encerramento na tabela dim_lote",
        caption: "Power BI: nova coluna Ano Encerramento na tabela dim_lote e a medida de arrobas produzidas." },
      { group: "Power BI e DAX", src: "urbanranch-dax-arrobas-produzidas.png", w: 577, h: 176,
        alt: "Medida DAX Arrobas Produzidas (Encerrados)",
        caption: "Arrobas Produzidas (Encerrados): SUMX nos lotes encerrados, com (peso vendido menos peso de entrada) x rendimento de referência, dividido por 15 kg." },
      { group: "Power BI e DAX", src: "urbanranch-medidas-lista.png", w: 239, h: 460,
        alt: "Lista de medidas do modelo Urban Ranch",
        caption: "Pasta _Medidas do modelo: custo da arroba produzida, custo operacional, faturamento, margem, GMD, mortalidade e outras medidas." }
    ]
  },
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
let lightboxList = [];
let lightboxIndex = 0;
function showLightbox() {
  const item = lightboxList[lightboxIndex];
  lightboxImg.src = IMG + item.src;
  lightboxImg.alt = item.alt;
  lightboxCaption.textContent = (lightboxList.length > 1 ? (lightboxIndex + 1) + " de " + lightboxList.length + " · " : "") + item.caption;
  lightbox.classList.toggle("single", lightboxList.length < 2);
}
function openLightbox(list, index) {
  lightboxList = list;
  lightboxIndex = index;
  showLightbox();
  if (!lightbox.open) lightbox.showModal();
}
function stepLightbox(direction) {
  if (lightboxList.length < 2) return;
  lightboxIndex = (lightboxIndex + direction + lightboxList.length) % lightboxList.length;
  showLightbox();
}
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.querySelector(".lightbox-nav.prev").addEventListener("click", () => stepLightbox(-1));
lightbox.querySelector(".lightbox-nav.next").addEventListener("click", () => stepLightbox(1));
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") stepLightbox(-1);
  if (event.key === "ArrowRight") stepLightbox(1);
});

function renderPipeline(steps) {
  const list = document.getElementById("dialog-pipeline");
  list.replaceChildren();
  list.hidden = !steps || steps.length === 0;
  (steps || []).forEach(step => {
    const li = document.createElement("li");
    const title = document.createElement("b");
    title.textContent = step.title;
    const text = document.createElement("span");
    text.textContent = step.text;
    li.append(title, text);
    list.appendChild(li);
  });
}

function renderGallery(items) {
  const gallery = document.getElementById("dialog-gallery");
  gallery.replaceChildren();
  const groups = [...new Set(items.map(item => item.group))];
  const panel = document.createElement("div");
  panel.className = "gallery-panel";

  function showGroup(group) {
    gallery.querySelectorAll(".gallery-tab").forEach(tab => tab.setAttribute("aria-selected", String(tab.dataset.group === group)));
    const groupItems = items.filter(item => item.group === group);
    panel.replaceChildren();
    const grid = document.createElement("div");
    grid.className = "gallery-grid";
    groupItems.forEach((item, index) => {
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
      img.decoding = "async";
      button.appendChild(img);
      button.addEventListener("click", () => openLightbox(groupItems, index));
      const caption = document.createElement("figcaption");
      caption.textContent = item.caption;
      figure.append(button, caption);
      grid.appendChild(figure);
    });
    panel.appendChild(grid);
  }

  if (groups.length > 1) {
    const tabs = document.createElement("div");
    tabs.className = "gallery-tabs";
    tabs.setAttribute("role", "tablist");
    groups.forEach(group => {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "gallery-tab";
      tab.setAttribute("role", "tab");
      tab.dataset.group = group;
      tab.textContent = group + " (" + items.filter(item => item.group === group).length + ")";
      tab.addEventListener("click", () => showGroup(group));
      tabs.appendChild(tab);
    });
    gallery.appendChild(tabs);
  }
  gallery.appendChild(panel);
  if (groups.length) showGroup(groups[0]);
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
  renderPipeline(project.pipeline);
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


// ===== Tema claro / escuro =====
const themeButton = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
function applyTheme(theme, save) {
  document.documentElement.dataset.theme = theme;
  themeButton.querySelector("span").textContent = theme === "dark" ? "☀" : "☾";
  themeButton.setAttribute("aria-label", theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro");
  if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#0c1622" : "#ffffff");
  if (save) { try { localStorage.setItem("theme", theme); } catch (error) { /* sem armazenamento: segue sem salvar */ } }
}
applyTheme(document.documentElement.dataset.theme || "light", false);
themeButton.addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark", true));

// ===== Menu: destaca a seção que está na tela =====
const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]:not(.nav-cta)')];
const spySections = navAnchors.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
if ("IntersectionObserver" in window && spySections.length) {
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  spySections.forEach(section => spy.observe(section));
}

// ===== Animação de entrada ao rolar (respeita "reduzir movimento") =====
const reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion && "IntersectionObserver" in window) {
  const targets = document.querySelectorAll(".hero-stats > div, .section-heading, .project-card, .timeline-item, .education, .skill-item, .about-grid > div, .contact-panel");
  const reveal = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("in"); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  targets.forEach(el => { el.classList.add("reveal"); reveal.observe(el); });
}
