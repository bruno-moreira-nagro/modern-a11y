# Acessibilidade na Web

**Do HTML semântico ao ARIA: o que designer, dev e QA precisam saber**

> Tech Weekly · 30 minutos · 21 slides

---

## Visão geral do cronograma

| Bloco | Slides | Tempo | Acumulado |
|---|---|---|---|
| Abertura (paradoxo do ARIA) | 1–2 | 2 min | 2 |
| Por que importa | 3 | 1 min | 3 |
| HTML semântico | 4–7 | 5 min | 8 |
| Fundações WCAG e anatomia do ARIA | 8–9 | 3 min | 11 |
| 5 regras de ARIA | 10–15 | 5 min | 16 |
| Erros comuns | 16 | 3 min | 19 |
| Foco visível | 17–18 | 4 min | 23 |
| Contraste e cor | 19–20 | 3 min | 26 |
| Q&A / buffer | 21 | 4 min | 30 |

---

## Slide 1 — Capa

**Conteúdo do slide:**

- Título: **Acessibilidade na Web**
- Subtítulo: *Do HTML semântico ao ARIA: o que designer, dev e QA precisam saber*
- Tech Weekly · 30 min

**Roteiro (≈30s):**

"Bom dia/tarde. Hoje quero falar sobre acessibilidade na web — não como teoria distante, mas como prática diária que afeta diretamente o código que a gente escreve, o design que a gente especifica e o teste que a gente faz. A ideia não é virar especialistas em 30 minutos — é sair daqui com três compromissos pequenos que cabem na rotina."

---

## Slide 2 — O paradoxo do ARIA

**Conteúdo do slide:**

- **82,7%** das páginas da web usam ARIA hoje
- Mas páginas com ARIA têm em média **41% mais erros** de acessibilidade que páginas sem ARIA
- Fonte: WebAIM Million 2026

**Roteiro (≈90s):**

"Quero começar com um número que me incomodou bastante quando li. O WebAIM faz todo ano uma auditoria automatizada das 1 milhão de páginas mais acessadas do mundo. No relatório de 2026, eles encontraram o seguinte: 82,7% das páginas usam ARIA. ARIA é aquele conjunto de atributos `aria-label`, `role`, `aria-hidden` que a gente coloca achando que está deixando o site mais acessível.

A surpresa é a próxima estatística: páginas com ARIA têm em média 41% mais erros de acessibilidade que páginas sem ARIA. Quanto mais ARIA, mais erro. A ferramenta criada para resolver acessibilidade virou a principal fonte de problemas — não porque ela seja ruim, mas porque a gente usa errado.

Esse é o tema central de hoje: HTML semântico vem antes de ARIA, e ARIA mal usado é pior que ARIA nenhum."

**Transição:** "Antes de entrar no como, deixa eu te mostrar rapidamente o porquê."

---

## Slide 3 — Por que isso importa

**Conteúdo do slide:**

- **18,6M** brasileiros com algum tipo de deficiência (Censo IBGE)
- **94,8%** das páginas top no mundo falham em WCAG (WebAIM Million 2025)
- **LBI** — Lei 13.146/2015 exige acessibilidade digital no Brasil
- *Acessibilidade não é feature extra. É obrigação legal, alcance de mercado e qualidade técnica.*

**Roteiro (≈60s):**

"Três números que valem três motivos. Primeiro: 18,6 milhões de brasileiros têm algum tipo de deficiência segundo o IBGE. Esse é o tamanho do mercado que a gente exclui quando o produto não é acessível. É maior que a população de muitos países.

Segundo: 94,8% das páginas top do mundo falham em pelo menos um critério WCAG. Ou seja, isso não é problema só nosso — é estado da web. O que significa que quem resolve, se destaca.

Terceiro: aqui no Brasil tem a LBI, Lei 13.146 de 2015. Acessibilidade digital é obrigação legal, não bondade. Já tem processo rolando contra empresa por inacessibilidade.

A frase que fica: acessibilidade não é feature extra. É obrigação legal, alcance de mercado e qualidade técnica. E é responsabilidade de todo mundo na cadeia — não só do dev."

**Transição:** "Vamos para a parte prática. Onde a gente resolve a maioria dos problemas? No HTML semântico."

---

## Slide 4 — HTML semântico resolve 70% dos problemas

**Conteúdo do slide:**

Comparação de código antes/depois:

```html
<!-- ANTES — div como botão -->
<div class="btn"
     onClick={handleClick}>
  Salvar
</div>
```

```html
<!-- DEPOIS — botão nativo -->
<button
  type="button"
  onClick={handleClick}>
  Salvar
</button>
```

*O `<button>` já vem com: foco visível, ativável por teclado (Espaço/Enter), anunciado como botão pelo leitor de tela.*

**Roteiro (≈80s):**

"Esse é o exemplo mais comum que aparece no código de qualquer projeto. Do lado esquerdo, uma div com onClick que parece um botão. Funciona com o mouse, certo? Sim. Funciona com teclado? Não — não pega Tab, não responde a Espaço, não responde a Enter. O leitor de tela anuncia como 'grupo' ou 'região', não como botão.

Do lado direito, o elemento `<button>` nativo. Ele já vem de fábrica com tudo: foco visível, ativável por teclado, anunciado corretamente pelo leitor de tela. Não é mais código — na verdade é menos. Não tem `tabindex`, não tem `onKeyDown`, não tem `role`.

A regra é: HTML semântico resolve 70% dos problemas de acessibilidade. Antes de pensar em ARIA, pense se já não existe um elemento HTML que resolve."

---

## Slide 5 — Landmarks e hierarquia de cabeçalhos

**Conteúdo do slide:**

Landmarks nativos:
- `<header>` → banner
- `<nav>` → navigation
- `<main>` → main
- `<aside>` → complementary
- `<footer>` → contentinfo
- `<section>` → region (com label)

Hierarquia: um `h1` por página. Não pule níveis ao descer.

⚠️ **39%** das páginas pulam níveis; **16,3%** têm múltiplos h1.

**Roteiro (≈75s):**

"Dois conceitos básicos que mudam tudo. Primeiro, landmarks. O leitor de tela tem um atalho que lista todas as regiões da página — banner, nav, main, footer — e o usuário pula direto para a que interessa. Quando a gente usa `<nav>`, `<main>`, `<aside>`, esses landmarks já existem de graça. Não precisa de `role='navigation'` — o `<nav>` já é isso.

Segundo, hierarquia de cabeçalhos. Um `h1` por página, e ao descer não pula níveis — `h2` vai pra `h3`, não pra `h4`. Por quê? Porque outro atalho do leitor de tela é listar todos os cabeçalhos como sumário. Se a hierarquia tá quebrada, o sumário fica quebrado.

E olha o número: 39% das páginas pulam níveis, 16% têm mais de um `h1`. É erro muito básico, muito comum. No design, isso começa com a especificação visual da hierarquia."

---

## Slide 6 — Flowchart: qual tag semântica usar?

**Conteúdo do slide:**

*Inspirado no flowchart do HTML5 Doctor. Percorra as perguntas — a primeira que for SIM define a tag.*

| Pergunta | Se SIM → |
|---|---|
| Cabeçalho de página ou seção (logo, nav, título)? | `<header>` |
| Bloco principal de navegação (links de menu)? | `<nav>` |
| Conteúdo principal único da página? | `<main>` |
| Conteúdo autocontido, faz sentido fora desta página? | `<article>` |
| Informação tangencial, relacionada mas opcional? | `<aside>` |
| Agrupamento temático com heading próprio? | `<section>` |
| Rodapé com info de contato, copyright, links secundários? | `<footer>` |
| **Se NADA acima se aplica** → apenas para layout/estilização | `<div>` |

**Roteiro (≈75s):**

"Esse flowchart é a ferramenta mental que eu uso toda vez que vou escolher uma tag. É inspirado no clássico do HTML5 Doctor, simplificado pro nosso contexto.

A lógica é: percorre de cima pra baixo. A primeira pergunta que receber SIM define a tag. Se chegou no fim sem nenhum SIM, aí sim você pode usar `<div>` — mas só pra layout/estilização, nunca pra conteúdo estrutural.

A pergunta mais delicada aqui é a do `<article>` vs `<section>`. A regra prática que funciona: se o conteúdo faria sentido em um leitor de RSS, em uma timeline, ou copiado pra outra página — é `<article>`. Se é só uma sub-divisão temática dentro de um contexto maior — é `<section>`.

Outra confusão comum: `<section>` precisa ter um heading (h2, h3, etc.). Se você tá criando uma 'seção' que não tem título próprio, provavelmente é `<div>`, não `<section>`.

Esse slide vale uma foto. Postem no canal do time pra consultar quando bater dúvida."

**Transição:** "Beleza, vimos a estrutura macro. Agora vamos pros detalhes — formulários e skip link, dois pontos que toda aplicação tem e quase todo mundo erra."

---

## Slide 7 — Formulários e skip link

**Conteúdo do slide:**

❌ **Errado**: `<input type="email" placeholder="Email" />`

✅ **Certo**:
```html
<label for="email">Email</label>
<input id="email" type="email" />
```
*Placeholder não substitui label.*

Skip link:
```html
<a href="#main" class="skip-link">
  Pular para o conteúdo
</a>
...
<main id="main">
```

**13,7%** das páginas têm skip link funcionando. Deveria ser 100%.

*Mensagem-chave: se um HTML nativo já resolve, ARIA é desnecessário.*

**Roteiro (≈70s):**

"Duas coisas práticas que valem ouro. Primeira: todo input precisa de label associado. Não é placeholder dentro do campo — placeholder some quando a pessoa começa a digitar e nunca é anunciado pelo leitor de tela como label. É `<label for>` apontando para o `id` do input. Simples assim.

Segunda: skip link. Cinco linhas de código que permitem que o usuário de teclado pule direto pro conteúdo principal, sem tabular por todo o menu. Só 13,7% das páginas do mundo têm isso funcionando — e é absurdamente simples. Deveria ser 100%.

A mensagem-chave dessa seção: se um HTML nativo já resolve, ARIA é desnecessário. Isso prepara a próxima seção, que é exatamente sobre as regras do ARIA — e a primeira delas é justamente essa."

**Transição:** "Falando em ARIA, ele tem cinco regras oficiais. A maioria das pessoas que usa ARIA nunca ouviu falar delas. Vamos ver."

---

## Slide 8 — As 4 fundações da acessibilidade (POUR)

**Conteúdo do slide:**

WCAG organiza tudo em quatro princípios. ARIA e HTML semântico existem para atender o último — o R.

| Letra | Termo (EN / PT) | O que significa | Onde aparece na apresentação |
|---|---|---|---|
| **P** | Perceivable / Perceptível | Informação precisa ser perceptível pelos sentidos. | Contraste 4.5:1 · alt em imagens · legenda em vídeo |
| **O** | Operable / Operável | Interface inteira navegável e ativável. | Teclado · foco visível · sem tempo limite |
| **U** | Understandable / Compreensível | Informação e operação precisam fazer sentido. | Texto claro · comportamento previsível · erro útil |
| **R** | Robust / Robusto | Conteúdo funciona com diversas tecnologias. | HTML semântico · ARIA correto · padrões web |

*Tudo que vamos discutir cabe em um desses quatro. Acessibilidade é POUR, não receita aleatória.*

**Roteiro (≈75s):**

"Antes de entrar em ARIA propriamente, é importante saber o framework que rege tudo. WCAG, que é a especificação oficial da W3C, organiza acessibilidade em quatro princípios — o acrônimo POUR.

P de Perceivable, perceptível: a informação tem que chegar pelos sentidos. Daí contraste suficiente, alt em imagens, legenda em vídeo.

O de Operable, operável: tudo precisa ser usável. Teclado, foco visível, sem tempo limite punindo quem demora.

U de Understandable, compreensível: a interface precisa fazer sentido. Texto claro, comportamento previsível, mensagens de erro que ajudam — não 'erro 5023'.

R de Robust, robusto: o conteúdo precisa funcionar com várias tecnologias — leitores de tela, navegadores diferentes, ferramentas futuras. É aqui que HTML semântico e ARIA entram em cena.

Esse slide é a régua mental. Tudo que vier depois — as 5 regras, os top 6 erros, foco, contraste — cabe em um desses quatro. Acessibilidade não é receita aleatória; é POUR aplicado."

**Transição:** "Falando em R de Robust, ARIA é a ferramenta principal pra esse pilar quando HTML semântico não dá conta. Vamos entender o que ARIA é exatamente."

---

## Slide 9 — Anatomia do ARIA: role, state, property

**Conteúdo do slide:**

ARIA tem três tipos de atributos. Saber qual usar quando é metade da batalha.

| Tipo | O que faz | Exemplos | Exemplo de código |
|---|---|---|---|
| **ROLE** | Define **o QUE é**. Função semântica na árvore de acessibilidade. | `role="dialog"`, `role="tablist"`, `role="button"`, `role="alert"` | `<div role="dialog" aria-modal="true">` |
| **STATE** | Define **como ESTÁ agora**. Estado atual, muda dinamicamente. | `aria-expanded`, `aria-checked`, `aria-disabled`, `aria-hidden` | `<button aria-expanded="false">` |
| **PROPERTY** | Define **como É**. Característica do elemento, mais estática. | `aria-label`, `aria-labelledby`, `aria-required`, `aria-haspopup` | `<button aria-label="Fechar">` |

**Roteiro (≈90s):**

"ARIA não é uma coisa só. São três tipos de atributos com propósitos diferentes, e a maior parte da confusão com ARIA vem de não saber qual é qual.

**Role** define o QUE o elemento é. Você pega uma `<div>` que não significa nada e dá um significado pra ela: `role='dialog'` diz que é um diálogo, `role='tablist'` diz que é uma lista de abas. É a identidade semântica que vai pra árvore de acessibilidade — que o leitor de tela usa pra anunciar 'isso é um diálogo'.

**State** descreve COMO O ELEMENTO ESTÁ agora. Estado muda. O accordion fechou? `aria-expanded='false'`. Abriu? `aria-expanded='true'`. O checkbox tá marcado? `aria-checked='true'`. Esses atributos vão e vêm conforme a pessoa interage. O dev precisa atualizar via JavaScript quando o estado muda.

**Property** descreve COMO O ELEMENTO É. Característica mais estável, raramente muda. `aria-label` dá um nome acessível. `aria-required` diz que o campo é obrigatório. `aria-haspopup` diz que o botão abre um menu. São como adjetivos descrevendo o componente.

Regra mnemônica: **role** = substantivo (o que é), **state** = verbo de ação (como está agora), **property** = adjetivo (como é). 

Por que isso importa? Porque a primeira coisa que você faz num custom widget é definir o role. Depois, conforme a interação acontece, você atualiza os states. As properties você define uma vez no markup e mantém. Confundir os três é o que gera os 41% de erros a mais que vimos no início."

**Transição:** "Sabendo da anatomia, agora as cinco regras de ARIA fazem muito mais sentido."

---

## Slide 10 — As 5 Regras do ARIA (overview)

**Conteúdo do slide:**

**Especificação oficial W3C**

1. Use HTML nativo quando existir
2. Não sobrescreva semântica nativa
3. Controles ARIA precisam funcionar com teclado
4. Não esconda elementos focáveis
5. Todo elemento interativo precisa de nome acessível

*"No ARIA is better than bad ARIA"*

**Roteiro (≈45s):**

"Essas cinco regras vêm direto da especificação oficial do W3C, o consórcio que define os padrões da web. Não é opinião — é a documentação. Vou passar uma por uma com exemplo de código. Memoriza essas cinco e você já evita 80% dos erros de ARIA que aparecem no WebAIM Million.

E a frase que circula entre acessibilistas: *No ARIA is better than bad ARIA*. ARIA nenhum é melhor que ARIA errado. A estatística que vimos no início confirma isso ano após ano."

---

## Slide 11 — Regra 1: Se existe HTML nativo, use-o

**Conteúdo do slide:**

❌ **Evite:**
```html
<div role="button"
     tabindex="0"
     onClick={salvar}
     onKeyDown={handleKey}>
  Salvar
</div>
```

✅ **Prefira:**
```html
<button
  type="button"
  onClick={salvar}>
  Salvar
</button>
```

*Você não precisa reimplementar foco, teclado e role. O HTML já fez isso.*

**Roteiro (≈55s):**

"Regra 1 da especificação: se você pode usar um elemento HTML ou atributo nativo com a semântica que precisa, use. Não recrie.

Olha o tamanho da economia. Do lado esquerdo, para fazer uma div virar botão, você precisa: `role`, `tabindex`, `onClick`, e um `onKeyDown` que escuta Enter e Espaço. Quatro coisas para reimplementar o que `<button>` já faz nativamente. E ainda fica faltando foco visível, fica faltando estado disabled, e por aí vai.

Do lado direito: `<button>`. Acabou. O HTML já resolveu há 30 anos."

---

## Slide 12 — Regra 2: Não sobrescreva semântica nativa

**Conteúdo do slide:**

❌ **Evite:**
```html
<ul role="navigation">
  <li><a href="/">Home</a></li>
  <li><a>...</a></li>
</ul>

// Perde semântica de lista.
```

✅ **Prefira:**
```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a>...</a></li>
  </ul>
</nav>
```

*Aplicar role em elemento semântico apaga a semântica original. Envolva, não substitua.*

**Roteiro (≈60s):**

"Regra 2: se o HTML já tem semântica, não sobrescreva. Esse exemplo vem direto do WebAIM. Quando você aplica `role='navigation'` num `<ul>`, o leitor de tela passa a tratar aquele `<ul>` como navegação — mas perde a semântica de lista. O usuário não sabe mais que tem 5 itens, não consegue navegar item a item com os atalhos de lista.

A solução é envolver, não substituir. Coloca o `<ul>` dentro de um `<nav>`. Agora você tem os dois benefícios: a navegação como landmark, e a lista como lista."

---

## Slide 13 — Regra 3: Controles ARIA precisam funcionar com teclado

**Conteúdo do slide:**

❌ **Evite:**
```html
<div role="button"
     tabindex="0"
     onClick={open}>
  Abrir modal
</div>

// Mouse OK. Teclado: ❌
```

✅ **Prefira:**
```jsx
<div role="button"
  tabindex="0"
  onClick={open}
  onKeyDown={e =>
    ['Enter',' '].includes(e.key)
      && open()
  }>Abrir modal</div>
```

*Melhor ainda: use `<button>` ou um componente headless (Radix, React Aria).*

**Roteiro (≈60s):**

"Regra 3: se você insistir em usar uma div com role, você é responsável por fazer ela funcionar com teclado. Não basta `tabindex='0'` — isso só faz o Tab parar nela. Você precisa de um `onKeyDown` que escute Enter e Espaço e dispare o mesmo `onClick`.

O ponto principal aqui é: se você tá tendo todo esse trabalho, por que não usa `<button>`? Ou — e aqui é um conselho de carreira — use uma biblioteca headless como Radix UI ou React Aria, que já resolveu todos esses casos e ainda lida com edge cases que a gente não pensa, tipo high contrast mode do Windows."

---

## Slide 14 — Regra 4: Não esconda elementos focáveis

**Conteúdo do slide:**

❌ **Evite:**
```html
<button aria-hidden="true">
  Fechar
</button>

// Visível por teclado,
// invisível pro leitor.
// Confusão total.
```

✅ **Prefira:**
```html
<button>
  Fechar
</button>

// aria-hidden só é válido
// em itens decorativos ou
// fora do fluxo de Tab.
```

*Se a pessoa pode chegar no elemento com Tab, o leitor de tela precisa anunciá-lo.*

**Roteiro (≈45s):**

"Regra 4: nunca coloque `aria-hidden='true'` em algo que seja focável. Isso cria uma situação esquizofrênica: o usuário tabula até o elemento, o foco para lá, mas o leitor de tela não anuncia nada. A pessoa fica perdida sem entender onde tá.

`aria-hidden` é só pra ícone decorativo dentro de um botão com texto, ou pra elemento que não tá no fluxo do Tab. Em qualquer elemento interativo focável, é proibido."

---

## Slide 15 — Regra 5: Todo elemento interativo precisa de nome acessível

**Conteúdo do slide:**

❌ **Evite:**
```html
<button>
  <svg>...</svg>
</button>

// Leitor de tela anuncia:
// "botão" — sem dizer o quê
```

✅ **Prefira:**
```html
<button aria-label="Fechar">
  <svg aria-hidden="true">
    ...
  </svg>
</button>

// "botão, Fechar" ✓
```

*Ícone decorativo dentro? `aria-hidden`. Botão sem texto? `aria-label`. Nunca os dois sem nada.*

**Roteiro (≈55s):**

"Regra 5, talvez a mais negligenciada: todo elemento interativo precisa de nome acessível. Isso é o que o leitor de tela vai anunciar.

Botão de ícone — aquele 'X' de fechar modal, aquele lápis de editar, aquele hamburger menu — sem texto. Se você não colocar nada, o leitor anuncia 'botão' e ponto. Botão pra fazer o quê? Mistério.

Solução: `aria-label` no botão dizendo o que ele faz. E como o ícone SVG dentro é decorativo, ele leva `aria-hidden='true'` para não duplicar a leitura. É o único caso em que `aria-hidden` é correto: ícone decorativo dentro de botão que já tem aria-label."

**Transição:** "Beleza, vimos as cinco regras. Mas o que efetivamente quebra na web hoje? O WebAIM tem essa resposta também."

---

## Slide 16 — Os 6 erros que dominam a web

**Conteúdo do slide:**

96% de todos os erros de acessibilidade caem nestas seis categorias (WebAIM Million 2025):

| % | Erro | Detalhe |
|---|---|---|
| 79,1% | Texto com baixo contraste | Razão < 4.5:1 |
| 55,5% | Imagens sem alt text | Ou alt mal escrito |
| 48,2% | Labels de formulário faltando | Input sem `<label>` |
| 45,4% | Links vazios | Sem texto descritivo |
| 29,4% | Botões vazios | Só ícone, sem nome |
| 14,6% | Idioma não declarado | Falta `lang="pt-BR"` |

*Resolver SÓ estes seis tipos já melhora drasticamente a web.*

**Roteiro (≈75s):**

"Essa tabela aqui é a coisa mais importante da apresentação inteira. O WebAIM achou que 96% — repito, noventa e seis por cento — de todos os erros de acessibilidade detectados em 1 milhão de páginas caem em apenas seis categorias.

Baixo contraste: 79% das páginas. Imagem sem alt: 55%. Label de formulário faltando: 48%. Link vazio, tipo `<a><img></a>` sem texto: 45%. Botão vazio: 29%. Idioma do documento não declarado, sem `<html lang='pt-BR'>`: 15%.

Quase tudo nessa lista é trivial de resolver. Adicionar `alt` numa imagem demora cinco segundos. Adicionar `<label>` num input, idem. Se a gente combinar de resolver SÓ essas seis coisas no nosso produto, a gente já passa na frente da maior parte da web."

---

## Slide 17 — Foco é o cursor do teclado

**Conteúdo do slide:**

WCAG 2.4.7 (Nível A): toda interface operável por teclado deve mostrar onde está o foco.

❌ **O erro clássico:**
```css
/* Nunca faça isso */
*:focus {
  outline: none;
}
```

✅ **A solução moderna:**
```css
/* Foco só no teclado */
:focus-visible {
  outline: 2px solid #06f;
  outline-offset: 2px;
}
```

**Requisitos mínimos do indicador (WCAG 2.2):**
- Pelo menos 2px CSS de espessura
- Razão de contraste de 3:1 contra o elemento e o fundo
- Não pode ser totalmente coberto (sticky headers/footers — WCAG 2.4.11 AA)

**Roteiro (≈90s):**

"Foco é o cursor do teclado. Sem indicador de foco, a pessoa que usa teclado fica perdida — não sabe onde tá, não sabe o que vai acontecer ao apertar Enter.

A WCAG 2.4.7 é Nível A, ou seja, o mínimo absoluto: precisa ter indicador visível. E olha o erro mais clássico do mundo, que tá em CSS reset do mundo inteiro: `*:focus { outline: none }`. Removendo o foco padrão do navegador sem colocar nada no lugar. Isso é violação direta de WCAG, Nível A.

A solução moderna é `:focus-visible`. Essa pseudo-classe só aplica o foco quando o usuário tá navegando pelo teclado — quando ele clica com mouse, o foco não aparece. Isso resolve a única queixa válida que designers tinham do foco padrão: 'aparece feio quando clico'.

E olha os requisitos da WCAG 2.2: o indicador precisa ter pelo menos 2 pixels de espessura, contraste 3:1, e não pode ficar escondido atrás de header sticky. Esse último é novo na 2.2 e pega muita gente."

---

## Slide 18 — Gerenciamento de foco em modais

**Conteúdo do slide:**

Onde mais se erra. As três regras inegociáveis:

1. **Ao abrir**: mover foco para dentro do modal (primeiro elemento interativo ou o heading com `tabindex="-1"`).
2. **Enquanto aberto**: trapar o Tab dentro do modal. O foco não pode escapar para o resto da página.
3. **Ao fechar**: devolver foco ao elemento que abriu o modal (geralmente o botão).

💡 **Dica:** Não reimplemente isso. Use Radix UI, React Aria ou Headless UI — resolvem foco, teclado e ARIA de fábrica.

**Roteiro (≈60s):**

"Modal é onde mais se erra com foco. Três regras inegociáveis:

Primeira: ao abrir o modal, o foco precisa pular pra dentro dele. Senão, o usuário de teclado tabula no escuro tentando achar onde tá o modal.

Segunda: enquanto o modal tá aberto, o Tab tem que ficar preso dentro dele. Não pode escapar pra navegar nos elementos atrás. Isso chama 'focus trap'.

Terceira: ao fechar o modal, devolver foco pro botão que abriu. Senão, o foco vai pro início da página e a pessoa perde o contexto.

A dica final é prática: ninguém deveria reimplementar modal do zero em 2026. Radix UI, React Aria, Headless UI — todos resolvem modal acessível com 5 linhas de código. Use."

---

## Slide 19 — Contraste: os números que importam

**Conteúdo do slide:**

WCAG 1.4.3 e 1.4.11 (Nível AA). Não são números arbitrários — são baseados em fisiologia.

| Razão | Aplicação | Tamanho |
|---|---|---|
| **4.5:1** | Texto normal | < 18pt ou < 14pt bold |
| **3:1** | Texto grande | ≥ 18pt ou ≥ 14pt bold |
| **3:1** | UI e gráficos | Bordas, ícones, foco |

**Por que 4.5:1?** A razão compensa a perda de sensibilidade ao contraste equivalente a visão 20/40 — comum em pessoas com cerca de 80 anos. (Fonte: W3C Understanding 1.4.3)

**Roteiro (≈80s):**

"Esses números não são chute. A WCAG define três razões de contraste para o Nível AA, que é o padrão que a maioria das leis exige.

Texto normal: 4.5 pra 1. Texto grande, acima de 18pt ou 14pt em negrito: 3 pra 1. Elementos de interface — borda de input, ícones funcionais, indicador de foco — também 3 pra 1.

Por que 4.5 e não 5 ou 4? O W3C explica: essa razão compensa a perda de sensibilidade ao contraste equivalente a uma visão 20/40, que é a visão típica de uma pessoa com 80 anos. Ou seja, é baseado em fisiologia, não em achismo.

E lembrando: 79% das páginas da web falham nesse critério. É o erro mais comum. E é o erro mais fácil de resolver — ferramenta no Figma testa em 2 cliques."

---

## Slide 20 — Cor não pode ser o único meio de informação

**Conteúdo do slide:**

WCAG 1.4.1 (Nível A). Pessoas com daltonismo, baixa visão ou contexto adverso não distinguem só pela cor.

❌ **Evite:**
- Campo Email
- Borda vermelha
- Texto "Inválido" em vermelho
- *Só a cor diz que tem erro.*

✅ **Prefira:**
- Campo Email
- Borda vermelha
- ❌ ícone + "Erro: formato de email inválido" em vermelho
- *Ícone + texto + cor. Funciona pra qualquer pessoa.*

*Regra simples: cor + texto + forma. Sempre os três, nunca só a cor.*

**Roteiro (≈75s):**

"WCAG 1.4.1, Nível A. A cor não pode ser o único meio de transmitir informação. Por quê? Daltonismo (8% dos homens), baixa visão, modo escuro, tela com brilho alto sob sol, monitor barato. Várias situações em que cor sozinha falha.

O exemplo mais clássico: formulário com erro. Do lado esquerdo, a borda do input ficou vermelha e tem 'Inválido' em vermelho embaixo. Só a cor sinaliza. Daltônico não vê.

Do lado direito, o que muda? Adicionou um ícone de erro e o texto diz 'Erro: formato de email inválido' — explicando o que tá errado. Agora funciona pra qualquer pessoa: vidente, daltônico, leitor de tela, todos.

A regra mnemônica é: cor + texto + forma. Sempre os três. Verde com check é diferente de vermelho com X é diferente de amarelo com triângulo. Nunca só cor."

---

## Slide 21 — Obrigado / Q&A

**Conteúdo do slide:**

**Obrigado.**

*Perguntas?*

**Recursos para aprofundar:**
- **WCAG 2.2 oficial** · w3.org/TR/WCAG22/
- **WebAIM — Introduction to ARIA** · webaim.org/techniques/aria/
- **WebAIM Million 2026 (dados)** · webaim.org/projects/million/
- **MDN Accessibility** · developer.mozilla.org/docs/Web/Accessibility
- **Sara Soueidan — Focus Indicators** · sarasoueidan.com/blog/focus-indicators/

**Roteiro (≈30s + Q&A):**

"É isso. Os links aqui são as fontes que eu citei durante a apresentação — todos confiáveis, todos atualizados. Vou compartilhar esse doc no canal depois.

Alguma pergunta?"

---

## Perguntas frequentes (cole no doc de follow-up)

### "Isso atrasa entrega, né?"
Não. Os exemplos que mostrei — `<button>` em vez de `<div>`, label em input, `aria-label` em ícone — todos têm o mesmo custo de implementação ou menor. O que atrasa é descobrir que tá inacessível depois e refazer.

### "Design system não resolve sozinho?"
Resolve parte — componentes acessíveis no DS evitam erros de implementação. Mas não substitui revisão. Hierarquia de cabeçalhos, alt de imagens, ordem do Tab, foco em fluxos — tudo isso é decisão de cada tela, não do DS.

### "Tem custo de bundle pelo ARIA extra?"
Atributos HTML não pesam quase nada. O custo de bundle vem da biblioteca headless (Radix etc), que pesa de 5KB a 30KB gzipado — irrelevante perto do que ganha em acessibilidade testada e edge cases cobertos.

### "Precisa testar com pessoa com deficiência?"
Idealmente sim, mas não é o ponto de partida. O ponto de partida é eliminar os erros básicos — os 6 do WebAIM. Depois disso, teste com usuários reais é o próximo nível, e o resultado é muito mais rico.

### "Acessibilidade vs SEO — tem trade-off?"
Não. Praticamente todo bom padrão de acessibilidade é bom para SEO. HTML semântico, hierarquia de cabeçalhos, alt em imagens, link com texto descritivo — Google adora tudo isso. Acessibilidade é SEO para humanos.

### "WCAG 2.2 vs 2.1, devo me preocupar com a diferença?"
Não muito. WCAG 2.2 adiciona 9 critérios (a maioria sobre foco e autenticação) e tira 1 antigo. Se você atende 2.1 AA, está muito próximo de 2.2 AA. Vise 2.2 sabendo que 2.1 já é o piso.

---

## Notas finais para o apresentador

**Antes da apresentação:**
- Instale axe DevTools no navegador (Chrome/Firefox)
- Tenha uma página do produto pronta numa aba
- Teste a navegação por teclado dela antes (pra saber o que vai acontecer)
- Confira que o projetor mostra a tela inteira
- Tenha esse doc aberto em outro monitor ou no celular

**Durante:**
- Cronometre os blocos. Se passar do tempo num bloco, corte slides do próximo.
- Nas duas demos ao vivo, se algo der errado tecnicamente, ria, comente que isso prova o ponto, e siga em frente.
- Quando alguém citar uma exceção ("mas no nosso caso..."), responda com curiosidade, não defensivamente. Acessibilidade tem nuances reais.

**Depois:**
- Compartilhe esse doc no canal do time.
- Marque revisão em 30 dias pra ver o que mudou.

---

*Documento gerado como complemento à apresentação `acessibilidade-web.pptx`.*
