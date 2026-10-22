// Personalize os links e conteúdos neste arquivo antes de publicar.
const SETTINGS = {
  // Informe os links públicos dos relatórios (ou páginas de detalhes).
  comercialUrl: "https://drive.google.com/file/d/1-zaKNNJX60IG6K3tTkx4kYdD0hDjNZq9/view?usp=drive_link",
  agrovitaUrl: "https://drive.google.com/file/d/1FDmKYi5pEFW3GZxvpLr627Vv2Q2ZYh88/view?usp=drive_link",
  // Links opcionais:
  linkedinUrl: "www.linkedin.com/in/wolfkurban",
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

const projects = {
  comercial: {
    title: "Inteligência Comercial",
    description: "Dashboard demonstrativo para acompanhar resultados comerciais e explorar indicadores que ajudam a entender a evolução das vendas.",
    bullets: ["Faturamento, margem e pedidos", "Análise temporal e comparação de desempenho", "Segmentação por produtos, clientes ou regiões", "Preparação dos dados, medidas e construção dos visuais"],
    url: SETTINGS.comercialUrl
  },
  agrovita: {
    title: "Agrovita | Engenharia & Agro",
    description: "Projeto conceitual voltado ao acompanhamento de indicadores operacionais, produtividade e investimentos em um contexto fictício de agronegócio e engenharia.",
    bullets: ["Indicadores de produtividade e eficiência (OEE)", "CAPEX planejado versus realizado", "Acompanhamento de tendências e desvios", "Visão gerencial para apoiar a priorização de ações"],
    url: SETTINGS.agrovitaUrl
  }
};
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
function configureOptionalLink(id, url) {
  const el = document.getElementById(id);
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
