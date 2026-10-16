# Precificador Relimax — PWA

App web instalável no celular (iPhone e Android) e no computador. Funciona offline depois da primeira abertura.

## Publicar no GitHub Pages (uma vez)
1. No GitHub, crie um repositório chamado `precificador` (pode ser privado? **Não** — GitHub Pages grátis exige repositório público; os dados que você digita ficam só no seu aparelho, o arquivo publicado não contém seus números).
2. Clique em **Add file → Upload files**, arraste TODOS os arquivos desta pasta (index.html, manifest.webmanifest, sw.js, os 4 PNG) e clique em **Commit changes**.
3. Vá em **Settings → Pages**. Em *Build and deployment*, Source = **Deploy from a branch**, Branch = **main** / **(root)**, Save.
4. Em 1–2 minutos o endereço aparece ali mesmo: `https://SEU-USUARIO.github.io/precificador/`.

## Instalar no celular
- iPhone: abra o endereço no Safari → botão Compartilhar → **Adicionar à Tela de Início**.
- Android: abra no Chrome → menu ⋮ → **Instalar app** (ou "Adicionar à tela inicial").

## Atualizar depois
Suba o novo `index.html` por cima (Upload files de novo) e mude o número `VERSION` dentro de `sw.js` (ex.: v7-...). O app avisa "Nova versão disponível" na próxima abertura.
