# Portfólio profissional de BI

Site estático responsivo em HTML, CSS e JavaScript, pronto para publicar no GitHub Pages.

## Estrutura do projeto

```
index.html      página principal
style.css       estilos (inclui o modo escuro)
script.js       links, dados dos projetos, galeria de imagens, tema e animações
imagens/        prints dos dashboards, SQL, Python, modelagem, medidas DAX e Power Query
README.md       este arquivo
```

O `index.html` precisa ficar na raiz do repositório, com a pasta `imagens/` ao lado dele.

## Personalização rápida

1. Abra `script.js` e confira os endereços em `SETTINGS`:
   - `comercialUrl`, `agrovitaUrl` e `urbanranchUrl`: links dos relatórios (abrem pelo botão "Abrir relatório"). Se `urbanranchUrl` ficar vazio, o botão não aparece.
   - `linkedinUrl`: use o endereço completo, começando com `https://`.
   - `cvUrl`: link do currículo.
2. Para incluir um print novo em um projeto, coloque o arquivo em `imagens/` e adicione uma linha na lista `gallery` do projeto em `script.js` (grupo, arquivo, largura, altura, texto alternativo e legenda). O grupo vira uma aba na janela de detalhes.
3. Use nomes de arquivo em minúsculas, sem espaços e sem acentos. O GitHub Pages diferencia maiúsculas de minúsculas.
4. Antes de publicar um print, confira se não aparecem dados pessoais, caminhos de pastas do seu computador, contas ou dados reais de empresas.
5. O site abre no tema claro ou escuro conforme a preferência do dispositivo, e o botão no topo alterna e lembra a escolha.

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
