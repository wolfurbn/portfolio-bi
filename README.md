# Portfólio profissional de BI

Site estático responsivo em HTML, CSS e JavaScript, pronto para publicar no GitHub Pages.

## Estrutura do projeto

```
index.html      página principal
style.css       estilos
script.js       links, janelas de detalhes dos projetos e galeria de imagens
imagens/        prints dos dashboards, modelagem, medidas DAX e Power Query
README.md       este arquivo
```

## Personalização rápida

1. Abra `script.js` e confira os endereços em `SETTINGS`:
   - `comercialUrl` e `agrovitaUrl`: links dos relatórios (abrem pelo botão "Abrir relatório").
   - `linkedinUrl`: use o endereço completo, começando com `https://` (sem isso o link quebra no GitHub Pages).
   - `cvUrl`: link do currículo.
2. Para trocar ou incluir imagens, coloque o arquivo na pasta `imagens/` e registre-o na lista `gallery` do projeto correspondente em `script.js` (arquivo, largura, altura, texto alternativo e legenda).
3. Use nomes de arquivo em minúsculas, sem espaços e sem acentos. O GitHub Pages diferencia maiúsculas de minúsculas.
4. Não publique dados de clientes nem informações confidenciais. Os projetos deste portfólio usam dados fictícios.

## Publicar no GitHub Pages

1. Entre em https://github.com e crie um repositório público chamado `portfolio-bi` (ou `SEU-USUARIO.github.io` para usar o endereço raiz).
2. Envie os arquivos `index.html`, `style.css`, `script.js` e `README.md`, junto com a pasta `imagens/`, para a raiz do repositório.
3. No repositório, acesse **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/(root)`, depois clique em **Save**.
6. Aguarde a publicação. O endereço costuma ser `https://SEU-USUARIO.github.io/portfolio-bi/` (repositório `portfolio-bi`) ou `https://SEU-USUARIO.github.io/` (repositório com o nome exato `SEU-USUARIO.github.io`).

O GitHub Pages hospeda o site estático. O endereço fica público, mas você não precisa pagar por hospedagem para esse uso.

## Sobre os dashboards

O site está preparado para receber links de relatórios. Antes de usar “Publicar na Web” do Power BI, confirme que os relatórios contêm somente dados que podem ficar públicos: esse método torna o conteúdo acessível a qualquer pessoa na internet. Para relatórios privados, escolha um método de compartilhamento autenticado adequado.
