# Plano de Ação SEO — Elis Agência de Cuidadores

**Health Score atual:** 42/100
**Health Score projetado pós-correções P0+P1:** 78/100

---

## 🔴 P0 — Críticos (corrigir HOJE, bloqueiam indexação)

### 1. Substituir TODAS as URLs `elis-cuidadores.com` por `elisagenciacuidadores.com.br`
**Esforço:** 5 min
**Arquivos:** `index.html` (linhas 22, 32, 35, 56, 88)
**Razão:** Domínio `elis-cuidadores.com` não tem DNS configurado. Google está indexando uma URL morta.

### 2. Criar `public/robots.txt`
**Esforço:** 2 min
**Conteúdo recomendado:**
```
User-agent: *
Allow: /

Sitemap: https://elisagenciacuidadores.com.br/sitemap.xml
```

### 3. Criar `public/sitemap.xml`
**Esforço:** 5 min
**Conteúdo recomendado:** sitemap mínimo com a homepage e as rotas-anchor para sitelinks.

### 4. Criar `public/og-image.jpg` (1200×630)
**Esforço:** 15 min (gerar imagem)
**Razão:** Compartilhamento social fica sem preview.

### 5. Atualizar e-mail no schema para domínio real
**Esforço:** 1 min
**Atual:** `contato@elis-cuidadores.com` → ou remover, ou trocar para `contato@elisagenciacuidadores.com.br` (depois de criar a caixa).

---

## 🟠 P1 — Alta prioridade (corrigir esta semana)

### 6. Corrigir `aggregateRating` para valor verificável
**Esforço:** 10 min
**Opções:**
- **(A)** Remover o `aggregateRating` por enquanto até ter reviews comprováveis publicados.
- **(B)** Trocar `reviewCount: 200` por `reviewCount: 7` (depoimentos visíveis) e adicionar `review[]` array com cada testimonial. Isto mantém as estrelas no SERP sem risco.

**Recomendação:** opção B.

### 7. Trocar fotos de depoimento do Unsplash
**Esforço:** 30 min
**Razão:** Atribuir foto de pessoa aleatória a "Ana Clara Souza, filha de paciente em Pituba" pode disparar Google Spam Policy.

**Opções:**
- **(A)** Remover as fotos e usar avatar com iniciais (já tem `AvatarFallback` no código).
- **(B)** Coletar fotos reais com consentimento dos clientes (caminho ideal).
- **(C)** Usar ícone genérico (silhueta).

**Recomendação:** A para já + B como meta de 60 dias.

### 8. Otimizar LCP image do Hero
**Esforço:** 20 min
**Mudanças:**
- Adicionar `<link rel="preload" as="image" href="..." fetchpriority="high">` no `<head>` do `index.html`
- Adicionar `fetchpriority="high"` na `<img>` do Hero
- Considerar self-hostar a imagem (mover para `public/hero-bg.jpg` em formato WebP)
- Adicionar `width` e `height` explícitos

### 9. Adicionar `width`/`height` em todas as imagens
**Esforço:** 25 min
**Arquivos:** `Hero.tsx`, `Services.tsx`, `Testimonials.tsx`, `DetailedServices.tsx`
**Razão:** Elimina CLS (Cumulative Layout Shift).

### 10. Carregar Google Fonts non-blocking
**Esforço:** 5 min
**Mudança:** Trocar `<link rel="stylesheet">` por padrão preload+swap, ou self-host. Garantir `display=swap` (já tem) e idealmente reduzir para 2 famílias.

### 11. Adicionar link para Google Business Profile
**Esforço:** 5 min (se GBP existe) ou criar GBP primeiro
**Local:** Footer, `sameAs` do schema
**Razão:** GBP é o pilar #1 de SEO local para home care.

---

## 🟡 P2 — Médio (corrigir este mês)

### 12. Encurtar meta description para ~155 chars
**Esforço:** 5 min
**Sugestão:**
```
Cuidadores de idosos em Salvador BA: home care 24h, enfermagem domiciliar, Alzheimer e paliativos. Avaliação domiciliar gratuita em até 24h.
```

### 13. Adicionar schemas auxiliares
**Esforço:** 30 min
**O quê:**
- `Organization` separado com logo/founder
- `WebSite` com `potentialAction` (search)
- `BreadcrumbList` (mesmo SPA)
- `Service` individuais com `provider`

### 14. Padronizar lista de bairros
**Esforço:** 10 min
**Mudança:** Alinhar `SALVADOR_NEIGHBORHOODS` em `src/lib/constants.ts` com `areaServed` do schema em `index.html`.

### 15. Criar seção/página "Sobre Nós"
**Esforço:** 2-4h
**Conteúdo:** história, equipe responsável, formação dos cuidadores, parcerias, certificações (COREN se houver).
**Razão:** YMYL — Google exige E-E-A-T explícito para Health.

### 16. Remover `meta name="keywords"`
**Esforço:** 1 min

### 17. Considerar prerendering / SSR
**Esforço:** 1-2 dias (mudança de stack)
**Opções:** Migrar para Next.js, ou usar `vite-plugin-prerender`, ou `react-snap`.
**Razão:** AI crawlers (Perplexity, ChatGPT, alguns Googlebots) podem não executar JS.

### 18. Self-hostar imagens
**Esforço:** 1h
**Razão:** Performance + controle + risco zero de retirada do Unsplash.

---

## 🟢 P3 — Backlog (boas práticas)

### 19. Adicionar `llms.txt`
**Esforço:** 10 min
**Conteúdo:** sinopse curta do negócio para AI crawlers.

### 20. Criar landing pages por bairro
**Esforço:** 4-6h (5-10 bairros prioritários)
**Páginas:** `/cuidador-de-idosos-pituba`, `/home-care-barra`, etc.
**Razão:** Long-tail local domina busca de home care.

### 21. Criar blog/conteúdo informacional
**Esforço:** contínuo
**Tópicos:** "Como escolher um cuidador", "Alzheimer em casa: rotina", "Cuidados paliativos: o que esperar", etc.

### 22. Adicionar `theme-color` + `manifest.json`

### 23. Trocar `<button onClick scrollTo>` por `<a href="#section">` em Navbar/Footer
**Razão:** Crawlers seguem links, não cliques.

### 24. Adicionar prefixo `+55` em todos os `tel:` links

---

## Roadmap visual

```
Semana 1  ████████████ P0 + P1 (1-11)     →  Score 42 → 78
Semana 2  ████████     P2 (12-16)          →  Score 78 → 85
Mês 2     ████████████ P2 (17-18) + P3     →  Score 85 → 92+
```

---

## Como medir o sucesso

1. **Google Search Console**: solicitar reindexação após P0. Acompanhar:
   - "Coverage" → erros de indexação devem zerar
   - "Enhancements → FAQ"/"Local Business" → status válido
2. **Rich Results Test** (https://search.google.com/test/rich-results): rodar com a URL real para validar schemas.
3. **PageSpeed Insights**: medir CWV antes/depois das otimizações.
4. **Brand search**: monitorar SERP para "cuidador de idosos Salvador", "home care Salvador", "Elis Agência de Cuidadores".
