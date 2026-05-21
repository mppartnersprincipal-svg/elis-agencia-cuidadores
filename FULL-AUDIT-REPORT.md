# Auditoria SEO Completa — Elis Agência de Cuidadores

**URL auditada:** https://elisagenciacuidadores.com.br/
**Data:** 2026-05-21
**Tipo de negócio detectado:** Local Service Business (Home Care / Saúde Domiciliar) — Salvador, BA
**Páginas no escopo:** 1 (SPA single-page; rotas `/servicos`, `/precos`, etc. servem o mesmo HTML)

---

## 1. Sumário Executivo

### SEO Health Score: **42/100** — Crítico

A landing page tem **excelente estrutura on-page** (headings, schema, copy local, acessibilidade), mas sofre de **3 problemas catastróficos** que estão derrubando a indexação:

1. **Canonical, og:url, schema URL e e-mail apontam para um domínio inexistente** (`elis-cuidadores.com`). O DNS desse domínio falha. Isso instrui o Google a indexar uma URL morta em vez do site real.
2. **robots.txt e sitemap.xml não existem** — o Vercel está servindo o `index.html` em qualquer rota desconhecida (SPA rewrite). Crawlers não têm guia algum.
3. **og:image aponta para arquivo inexistente** — sem preview no WhatsApp/Facebook/LinkedIn.

Há ainda risco de penalidade por **review schema com 200 avaliações sem comprovação visível** e **fotos de depoimentos do Unsplash atribuídas a clientes reais**.

### Top 5 Critical Issues

| # | Issue | Impacto | Onde corrigir |
|---|-------|---------|---------------|
| 1 | Canonical → `elis-cuidadores.com` (DNS NXDOMAIN) | Bloqueia indexação | `index.html:22, 32, 56, 88` |
| 2 | `robots.txt` ausente (200 mas serve HTML) | Crawlers sem guia | `public/robots.txt` (criar) |
| 3 | `sitemap.xml` ausente (200 mas serve HTML) | Discovery prejudicada | `public/sitemap.xml` (criar) |
| 4 | `og:image` → arquivo 404 (`elis-cuidadores.com/og-image.jpg`) | Sem rich preview social | `index.html:35` + criar imagem |
| 5 | E-mail no schema usa domínio quebrado (`contato@elis-cuidadores.com`) | E-E-A-T + leads perdidos | `index.html:58` |

### Top 5 Quick Wins

| # | Quick Win | Esforço | Ganho |
|---|-----------|---------|-------|
| 1 | Corrigir todas as URLs para `elisagenciacuidadores.com.br` | 5 min | Destrava indexação |
| 2 | Adicionar `robots.txt` + `sitemap.xml` em `public/` | 10 min | Crawl previsível |
| 3 | Adicionar `fetchpriority="high"` na imagem LCP do Hero + preload | 5 min | LCP −1.5s estimado |
| 4 | Adicionar `width`/`height` em todas as `<img>` | 15 min | Elimina CLS |
| 5 | Hospedar fotos de depoimento reais (ou trocar para iniciais) | 30 min | Remove risco de spam policy |

---

## 2. Technical SEO (peso 22%)

### Score parcial: **35/100**

#### ✅ Pontos fortes
- HTTPS ativo + HSTS (`Strict-Transport-Security: max-age=63072000`)
- Servidor Vercel rápido com cache (`X-Vercel-Cache: HIT`)
- `lang="pt-BR"` correto
- Skip link de acessibilidade implementado
- Resposta 200 limpa, sem redirects desnecessários

#### ❌ Problemas críticos

**[CRITICAL] Canonical em domínio fantasma**
```html
<link rel="canonical" href="https://elis-cuidadores.com" />
```
- Domínio `elis-cuidadores.com` **não resolve DNS** (`curl: (6) Could not resolve host`).
- Google trata canonical como sinal forte: vai tentar indexar a URL canonical e, ao falhar, pode desindexar ou marcar como "Página alternativa com tag canônica adequada".
- **Replicado em 4 lugares:** `<link rel="canonical">`, `og:url`, schema `"url"`, schema `"image"`, e-mail no schema.

**[CRITICAL] robots.txt e sitemap.xml ausentes**
```
GET /robots.txt  → 200 OK, Content-Type: text/html, retorna index.html
GET /sitemap.xml → 200 OK, Content-Type: text/html, retorna index.html
```
- O `vercel.json` faz rewrite de `(.*)` → `/index.html`. Sem arquivos físicos em `public/`, qualquer URL "desconhecida" devolve a homepage com status 200 — incluindo `/robots.txt` e `/sitemap.xml`.
- Crawlers buscam esses arquivos primeiro. Receber HTML em vez de texto é tratado como ausência.

**[HIGH] Pages "duplicadas" para sitelinks Ads**
- O App.tsx mapeia `/servicos`, `/como-funciona`, `/precos`, etc. para a mesma SPA (scroll para seção). Todas retornam o mesmo HTML com o mesmo canonical, mas o Google pode tratá-las como duplicate pages se descobrir as URLs.
- Sem prerendering, todas têm o mesmo `<title>` e `<meta description>`.

#### Core Web Vitals (estimativa lab)
Sem CrUX field data disponível. Análise lab baseada no HTML:

| Métrica | Estado provável | Razão |
|---------|----------------|-------|
| LCP | Ruim (4-6s) | Imagem hero externa Unsplash sem preload nem `fetchpriority` |
| INP | Bom | Sem listeners pesados |
| CLS | Médio | Imagens sem dimensões explícitas, fontes externas sem `font-display` declarado |

---

## 3. Content Quality / E-E-A-T (peso 23%)

### Score parcial: **55/100**

#### ✅ Pontos fortes
- Copy claro, focado no usuário ("Você vai trabalhar, dormir e viver a sua vida...")
- Linguagem específica do nicho (paliativos, Alzheimer, pós-cirúrgico, escaras)
- FAQ com 8 perguntas reais cobrindo objeções
- Diferenciais quantificados (resposta em 2h, 98% satisfação)

#### ⚠️ Problemas

**[HIGH] Depoimentos com fotos de estoque atribuídas a pessoas reais**
- Os depoimentos têm nomes ("Ana Clara Souza, Filha de paciente, Pituba") + foto de uma pessoa do Unsplash.
- Isso é tecnicamente uma **violação de [Google Spam Policies — Misleading Content](https://developers.google.com/search/docs/essentials/spam-policies)** e pode disparar review schema penalty.
- Risco maior porque o schema declara `aggregateRating: 4.9, reviewCount: 200` — Google compara com depoimentos visíveis na página.

**[HIGH] `aggregateRating: 200 reviews` sem evidência verificável**
- Apenas 7 depoimentos visíveis vs 200 reivindicados no schema.
- Google Spam Policy: reviews precisam ser verificáveis ou removidos do schema.
- Risco: perda de stars no SERP + manual action por structured data spam.

**[MEDIUM] Sem páginas/seção "Sobre", "Equipe" ou "Quem somos"**
- Falta E-E-A-T: quem é a Elis, quem responde técnico, registros (COREN, CNES se houver), formação dos cuidadores.
- Para Medical/Health business, Google aplica YMYL — exige autoridade explícita.

**[MEDIUM] Sem conteúdo informacional**
- Sem blog, guias ("o que faz um cuidador de idosos", "Alzheimer em casa: 7 cuidados"), sem ranking por queries informacionais.
- Site puramente transacional perde tráfego de topo de funil.

---

## 4. On-Page SEO (peso 20%)

### Score parcial: **75/100**

#### ✅ Pontos fortes
- Title 88 caracteres: `"Cuidador de Idosos em Salvador BA | Home Care 24h | Elis Agência de Cuidadores"` — bom, próximo do limite ideal (60-70 char visíveis)
- Meta description 269 caracteres — **acima do limite recomendado (155-160)** mas semanticamente forte
- H1 único e descritivo no Hero
- Hierarquia H2/H3/H4 bem estruturada por seção
- `aria-labelledby` em todas as sections (acessibilidade + parsing)
- Internal anchor links funcionam (`#servicos`, `#valores`, etc.)

#### ⚠️ Problemas

**[MEDIUM] Meta description longa demais**
- 269 chars. Google trunca em ~155-160 mobile, ~158 desktop. Os bairros listados ao final ("Pituba, Barra, Graça, Itaigara e toda Salvador") podem ser cortados.

**[MEDIUM] `meta name="keywords"` obsoleto**
- Google ignora desde 2009. Não prejudica diretamente mas vaza estratégia para concorrentes.

**[LOW] Imagens com alt genérico em Hero**
- Avatares de "famílias atendidas" todos com mesmo alt: "Família atendida pela Elis". Aceitável mas pode ser mais descritivo.

**[LOW] Internal linking entre sections via scroll-to**
- Não há `<a href="#servicos">` reais — são `<button onClick>`. Crawlers não seguem isso como link interno. Perda de link equity entre seções.

---

## 5. Schema / Structured Data (peso 10%)

### Score parcial: **45/100**

#### ✅ Pontos fortes
- 2 blocos JSON-LD válidos no HTML estático (LocalBusiness+MedicalBusiness e FAQPage)
- `areaServed` com 18 bairros listados
- `openingHoursSpecification`, `geo`, `priceRange`, `sameAs` presentes
- FAQ schema espelha o conteúdo visível da página

#### ❌ Problemas

**[CRITICAL] URLs do schema apontam para domínio inexistente**
- Toda referência a `https://elis-cuidadores.com` precisa ir para `https://elisagenciacuidadores.com.br`.

**[HIGH] `aggregateRating` sem reviews individuais**
- Schema declara 200 reviews mas não inclui `review[]` array. Google está mais rigoroso desde 2024 — pode rejeitar a stars no SERP.
- Solução: ou (a) adicionar 5-10 reviews `Review` schema individuais reais, ou (b) baixar `reviewCount` para número realista (ex: 7 = depoimentos visíveis) e adicionar `review[]`.

**[MEDIUM] Sem `@id` no LocalBusiness**
- Sem `@id` global, o Google não consegue conectar a entidade com Google Business Profile, Knowledge Graph, etc.

**[MEDIUM] Faltam schemas auxiliares**
- Sem `Organization` separado
- Sem `WebSite` com `potentialAction: SearchAction`
- Sem `BreadcrumbList` (mesmo SPA, pode injetar)
- Sem `Service` schemas individuais com `provider`/`areaServed`/`offers` por bairro

**[LOW] Tipo combinado `["LocalBusiness", "MedicalBusiness"]`**
- Tecnicamente válido mas pode preferir `MedicalBusiness` puro (que herda de LocalBusiness) + `additionalType` para mais clareza.

---

## 6. Performance (Core Web Vitals) (peso 10%)

### Score parcial: **45/100**

#### Bundle sizes
- `index-CvYAlMeD.js`: ~150KB (bom, code-split corretamente com `vendor-motion` e `vendor-react`)
- HTML inicial: 9.9KB (excelente)

#### ❌ Problemas

**[HIGH] LCP image externa sem otimização**
```html
<img
  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1400&q=80"
  loading="eager"
/>
```
- Sem `fetchpriority="high"`
- Sem `<link rel="preload">` no `<head>`
- Sem `srcset` responsivo
- Sem `width`/`height` explícitos
- Domínio externo (Unsplash) — DNS lookup + TCP/TLS extras
- LCP estimado: 4-6s em 3G/4G

**[HIGH] Google Fonts bloqueante**
```html
<link href="...Montserrat...Atkinson...Manrope..." rel="stylesheet" />
```
- 3 famílias carregadas síncronamente
- Sem `media="print" onload="this.media='all'"` trick para non-blocking
- Sem `font-display: swap` declarado (provavelmente herdado mas não garantido)

**[MEDIUM] GTM no `<head>` síncrono**
- Embora não seja `async`-false, o script tag se inicia bloqueante na varredura. Para landing pages de conversão, GTM idealmente carrega depois de `DOMContentLoaded`.

**[MEDIUM] Sem `<meta name="theme-color">`**
- Sem cor da navegação no Chrome mobile, sem PWA-readiness.

---

## 7. Images (peso 5%)

### Score parcial: **40/100**

#### ❌ Problemas

**[HIGH] Todas as imagens hospedadas externamente (Unsplash CDN)**
- Hero, Services, Testimonials — todas vêm de `images.unsplash.com`.
- Implica:
  - Dependência de servidor terceiro (uptime, política de retirada)
  - Sem otimização própria (WebP/AVIF)
  - Domínio extra na DNS/TCP/TLS handshake → impact LCP/INP
  - **Risco de copyright/uso**: Unsplash é licenciado mas atribuir como "cliente real" é problema separado

**[HIGH] Sem dimensões explícitas (`width`/`height`)**
- Causa CLS quando as imagens carregam.

**[MEDIUM] Sem formatos modernos (WebP/AVIF) nem `<picture>`**
- Unsplash devolve JPG por padrão. Self-hostando, dá pra servir WebP.

**[MEDIUM] og-image.jpg apontado para 404**
- Compartilhamento social fica sem thumbnail.

---

## 8. AI Search Readiness (GEO) (peso 10%)

### Score parcial: **50/100**

#### ✅ Pontos fortes
- HTML server-rendered (SPA Vite, mas root HTML tem head completo) — crawlers AI (Perplexity, ChatGPT) leem
- Conteúdo bem estruturado em parágrafos curtos
- FAQ schema dá passages citáveis

#### ⚠️ Problemas

**[MEDIUM] Sem `llms.txt`**
- Convenção emergente para AI crawlers. Falta arquivo `/llms.txt` com sinopse do negócio para LLMs.

**[MEDIUM] Conteúdo do body só vem via JavaScript**
- Crawlers que não executam JS (alguns AI bots) só veem o head + skip link. O conteúdo principal (`<div id="root">`) é populado client-side.
- Solução: prerendering, SSR (Next.js), ou static generation.

**[MEDIUM] Sem `Article`/`HowTo` schemas**
- Sem páginas informacionais para citação por AI (ChatGPT, Perplexity preferem citar conteúdo educativo).

**[LOW] Sem brand mention em fontes terceiras detectáveis**
- Limite à análise: requer backlink data.

---

## 9. Local SEO (Salvador, BA)

### Score parcial: **60/100**

#### ✅ Pontos fortes
- Geo meta tags presentes (region, position, ICBM)
- `areaServed` lista 18 bairros no schema
- NAP parcial (Name, Phone) — sem rua/CEP mas Salvador inteiro é áreade serviço
- Componente `CoverageArea.tsx` visível na página

#### ⚠️ Problemas

**[HIGH] Sem Google Business Profile mencionado**
- Sem link para GBP no Footer/Contato. GBP é o pilar #1 de Local SEO para serviços.
- Verificar se a Elis tem GBP ativo e linkar (`sameAs`).

**[MEDIUM] NAP incompleto**
- Sem endereço (mesmo que seja "Atende em domicílio" — usar `serviceArea` + endereço administrativo).
- Sem CNPJ visível (E-E-A-T para Health).

**[MEDIUM] Inconsistência neighborhoods**
- `SALVADOR_NEIGHBORHOODS` em constants.ts tem 21 bairros incluindo "Canela, Garcia, Tororó, Cabula" que NÃO estão no schema `areaServed`.
- `areaServed` lista "Lauro de Freitas" mas constants não inclui.
- Padronizar.

**[MEDIUM] Sem páginas dedicadas por bairro**
- "Cuidador de idosos na Pituba" é uma query com volume. Sem landing pages programáticas por bairro, perde-se ranking long-tail.

---

## 10. Resumo de Findings (todos)

| Severidade | Categoria | Issue | File:Line |
|------------|-----------|-------|-----------|
| 🔴 Critical | Technical | Canonical → domínio NXDOMAIN | `index.html:22` |
| 🔴 Critical | Technical | og:url → domínio NXDOMAIN | `index.html:32` |
| 🔴 Critical | Schema | schema `url` → domínio NXDOMAIN | `index.html:56` |
| 🔴 Critical | Schema | schema `image` → 404 | `index.html:88` |
| 🔴 Critical | Schema | E-mail em domínio inexistente | `index.html:58` |
| 🔴 Critical | Technical | robots.txt ausente | `public/robots.txt` |
| 🔴 Critical | Technical | sitemap.xml ausente | `public/sitemap.xml` |
| 🔴 Critical | On-page | og:image → 404 | `index.html:35` + `public/og-image.jpg` |
| 🟠 High | Content | Fotos Unsplash em depoimentos com nomes reais | `src/lib/constants.ts:162-205` |
| 🟠 High | Schema | aggregateRating sem reviews verificáveis | `index.html:89-94` |
| 🟠 High | Performance | LCP image sem preload/fetchpriority | `Hero.tsx:22` |
| 🟠 High | Performance | Google Fonts bloqueante | `index.html:47` |
| 🟠 High | Images | Sem `width`/`height` | múltiplos arquivos |
| 🟠 High | Local | Sem link para GBP | `Footer.tsx` |
| 🟡 Medium | On-page | Meta description >160 chars | `index.html:18` |
| 🟡 Medium | Schema | Sem `Organization`/`WebSite`/`BreadcrumbList` | `index.html` |
| 🟡 Medium | Content | Sem páginas "Sobre"/E-E-A-T | (criar) |
| 🟡 Medium | Local | Inconsistência neighborhoods schema vs componente | `constants.ts` vs `index.html` |
| 🟡 Medium | GEO | Conteúdo só via JS — crawlers AI veem só head | (SSR/prerender) |
| 🟡 Medium | Images | Imagens externas no Unsplash | toda LP |
| 🟡 Medium | Technical | Rotas SPA duplicadas sem canonical correto | `App.tsx` |
| 🟢 Low | On-page | meta keywords obsoleto | `index.html:19` |
| 🟢 Low | On-page | `<button>` em vez de `<a>` para anchors | `Navbar.tsx`, `Footer.tsx` |
| 🟢 Low | Technical | Sem `theme-color`, `manifest.json` | `index.html` |
| 🟢 Low | GEO | Sem llms.txt | `public/llms.txt` |
| 🟢 Low | Technical | tel: sem prefixo +55 no mobile | `Navbar.tsx:139` |

---

## 11. Próximos passos

Veja o **ACTION-PLAN.md** para a sequência priorizada de correções com estimativa de esforço e código pronto.
