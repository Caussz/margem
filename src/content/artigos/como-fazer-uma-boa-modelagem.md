---
titulo: Como modelar (e otimizar) um bom banco de dados
resumo: >-
  A arquitetura decide a casa. A modelagem decide o terreno — e terreno errado
  não se conserta com tijolo bom.
data: 2026-09-20
tags:
  - banco
  - arquitetura
---

Este talvez seja o assunto mais importante que eu vá tratar aqui. Considero a
modelagem de dados o grande começo: errando nela, não importa arquitetura,
padrão, time ou orçamento — o projeto está fadado, cedo ou tarde. A decisão
errada de modelagem não se resolve com gambiarra nem com tecnologia nova. Pode
ser que você nunca tenha chegado no ponto em que o volume de dados exige uma
estrutura específica para ser performático, estrutura essa que precisava ter
sido escolhida lá atrás. Quando chega, o custo é alto. Dependendo de onde você
entrou na história, é impagável.

Mas não é sobre performance que quero falar. Performance é consequência. Vou
demorar para chegar na pergunta que interessa, e ela também não é técnica.

## O terreno, não a casa

Já escrevi aqui que arquitetura é como construir uma casa: antes do primeiro
tijolo existem perguntas que não têm nada a ver com tijolo. Quantas pessoas vão
morar, por quanto tempo, a que custo. Uma dessas perguntas ficou solta naquele
texto, e é ela que abre este:

> O terreno aguenta o que eu quero construir?

Arquitetura é a casa. Modelagem é o terreno. E a diferença entre os dois é a
única coisa que você precisa levar deste texto: casa se reforma. Terreno, não.

Você pode trocar o framework inteiro, reescrever o backend em outra linguagem,
jogar fora o frontend e refazer do zero. Já fiz isso. Dói, custa, mas é
possível, porque código é substituível por natureza — ele não guarda nada, ele
só passa. Agora tente mudar a chave primária de uma tabela com quarenta milhões
de linhas e sete sistemas lendo dela. Você não está editando um arquivo. Está
negociando com tudo o que já aconteceu.

É por isso que tanta gente boa erra aqui: modelagem parece a parte fácil, a que
se faz em vinte minutos no começo do projeto para poder ir logo para a parte
divertida. É exatamente o contrário. É a única decisão do projeto que você toma
enquanto sabe menos e que custará mais para desfazer.

## Modelar é nomear

Antes de qualquer diagrama, modelar é decidir o que existe.

Tem uma cena no começo do Gênesis que sempre me pareceu estranhamente técnica.
Deus forma os animais e os leva ao homem para ver como ele os chamaria, e o
nome que o homem desse a cada criatura, esse seria o seu nome. Não é um detalhe
decorativo. É o primeiro trabalho que aparece na história: não criar as coisas,
mas nomeá-las. Ordenar o que já existe, dizendo o que é o quê.

Modelagem é isso, e não é metáfora. Quando você escreve:

```text
usuarios
clientes
pessoas
contas
```

você não está criando quatro tabelas. Está afirmando que existem quatro coisas
no mundo — ou, se criou só uma, que as quatro são a mesma. Essa afirmação vai
valer para sempre, para todo mundo que chegar depois, inclusive para quem
discordar dela.

E o que você não nomeia não existe. Pense num campo aparentemente inocente:

```sql
status VARCHAR(20)
```

Você acabou de declarar que o mundo tem estados, que eles são texto livre, que
ninguém precisa saber quais são, e que "PAGO", "pago" e "Pago " são três
realidades diferentes. Parece economia. É uma opinião sobre o negócio inteiro,
escrita em vinte caracteres, por alguém que provavelmente estava com pressa.

<aside class="nota">Não estou dizendo para transformar todo status em tabela. Estou dizendo para saber que você decidiu — e conseguir dizer por quê.</aside>

O melhor teste que conheço para uma modelagem não é o diagrama. É ler as
tabelas em voz alta para alguém do negócio, sem explicar nada, e ver se a
pessoa reconhece a empresa dela ali dentro. Se ela não reconhece, o problema
nunca foi o banco. É que você modelou uma realidade que não é a dela.

## Toda tabela é uma opinião, e toda cópia é uma dívida

Normalização é fácil de decorar e difícil de entender. A versão curta: cada
fato deve morar em um lugar só. Se o nome do cliente está em `customers`, ele
não deveria estar também em `orders`, porque no dia em que ele mudar você vai
ter duas verdades e nenhuma forma de saber qual delas venceu.

Só que normalizar tem preço. Se cada consulta de tela precisa amarrar cinco
tabelas, e essa tela abre vinte mil vezes por segundo, a pureza começa a
cobrar. Aí entra a desnormalização, que costuma ser apresentada como truque de
performance e que eu prefiro chamar pelo nome:

> Toda desnormalização é uma mentira que você se compromete a sustentar.

Não é pecado. Guardar `customer_name` dentro de `orders` pode ser a decisão
certa — inclusive porque, em muitos casos, aquilo nem é cópia: é o nome que o
cliente tinha no dia da compra, e uma nota fiscal não deve mudar de nome porque
alguém casou. Repare que são duas coisas totalmente diferentes escritas com o
mesmo SQL: uma é cache, outra é história. A primeira você precisa sincronizar;
a segunda você precisa congelar. Confundir as duas é como querer que o garçom
volte na cozinha a cada prato e, ao mesmo tempo, que a comanda de ontem mude
sozinha quando o cardápio muda.

O critério aqui é o mesmo que uso para arquitetura: se fui eu quem decidiu
duplicar esse dado, preciso ser capaz de dizer quem é o dono dele, quando ele
pode divergir e quem paga a conta quando divergir. Enquanto eu conseguir
responder, a mentira está de pé. No dia em que não conseguir, ela deixou de ser
decisão e virou bug esperando data.

## O índice é uma aposta

Índice costuma ser explicado como catálogo de biblioteca, e a analogia funciona
até o ponto em que engana. O catálogo não é neutro: alguém decidiu ordená-lo
por autor, e não por cor da capa, porque previu que as perguntas viriam por
autor.

Um índice é uma aposta em uma pergunta.

Você cria `idx_users_email` porque aposta que vão buscar por e-mail. Se
buscarem por telefone, o índice não erra — ele simplesmente não foi convidado.
E ele não é grátis: ocupa espaço, precisa ser atualizado, encarece todo INSERT,
UPDATE e DELETE. Dez índices não deixam a tabela dez vezes mais rápida. Deixam
a escrita mais lenta dez vezes, para acelerar as leituras que você acertou.

Duas coisas que quase ninguém olha, e que decidem tudo:

- **Seletividade.** Índice em `email` elimina quase todo mundo; índice em
  `status` onde 99% está `ACTIVE` elimina quase ninguém. Filtrar por "mora no
  Brasil" não é filtrar.
- **Ordem das colunas no índice composto.** `(customer_id, status)` é uma
  organização por cidade e depois bairro. Se a pergunta chega pelo bairro, o
  catálogo está lá e não serve.

E, principalmente: pare de achar que uma query é rápida porque ela parece
rápida. Isso é fé, e fé no lugar errado.

```sql
EXPLAIN ANALYZE
SELECT id, name FROM orders WHERE customer_id = 123;
```

O `EXPLAIN` é humildade institucionalizada. Ele mostra o caminho que o banco
percorreu de verdade, e não o que você imaginou que ele percorreria. É a
câmera de segurança do supermercado: o produto chegou ao caixa, ótimo — mas por
onde o funcionário passou para achá-lo?

Vale para o volume também. Uma query de 10ms rodando cem mil vezes por segundo
é um problema muito maior que uma de 5 segundos que roda uma vez por dia.
Performance não é um número, é um número vezes uma frequência. O pior gargalo
que já vi na vida foi uma consulta inocente dentro de um `map`, gerando uma
query por item, escondida por um ORM que estava só fazendo o trabalho dele. O
ORM não mente; ele só não conta.

## NULL, ou a única honestidade do banco

Gosto de `NULL` de um jeito quase afetivo, porque ele é a única palavra que um
sistema tem para dizer "eu não sei".

Não é zero. Não é string vazia. Não é falso. É ausência de conhecimento. Tanto
que nem se compara com igual:

```sql
WHERE name = NULL   -- não faz o que você acha
WHERE name IS NULL  -- faz
```

Isso irrita muita gente, e é exatamente aí que está a beleza: o banco se recusa
a afirmar que um desconhecido é igual a outro desconhecido. Duas pessoas cujo
telefone eu não sei não têm o mesmo telefone. Elas têm, as duas, um vazio meu.

Passei bastante tempo da minha vida preenchendo `NULL` com zero para o gráfico
não quebrar. Depois entendi o que estava fazendo: trocando uma ignorância
honesta por uma certeza falsa, porque a certeza falsa era mais fácil de somar.
Sistemas fazem isso. Pessoas também — e nas pessoas o estrago costuma ser
maior.

## Quando a verdade acontece duas vezes

Quase todo bug sério que já peguei tinha a mesma assinatura: funcionava
perfeitamente com um usuário.

```text
estoque = 1

A lê  → 1
B lê  → 1
A grava → 0
B grava → 0
```

Vendemos dois. Tínhamos um. Ninguém errou de lógica — as duas transações
fizeram exatamente o que o código mandava. É a vaga de estacionamento que duas
pessoas veem livre ao mesmo tempo: a informação estava certa quando cada uma
olhou, e errada no instante seguinte.

Daí as duas posturas possíveis, que são quase temperamentos:

```sql
-- otimista: eu grava se ninguém mexeu
UPDATE products SET stock = 0, version = 6
WHERE id = 10 AND version = 5;

-- pessimista: ninguém mexe enquanto eu penso
SELECT * FROM products WHERE id = 10 FOR UPDATE;
```

A otimista assume que conflito é raro e trata quando acontece. A pessimista
assume que conflito é provável e impede antes. Nenhuma é superior; as duas são
apostas sobre a frequência do conflito. E o pessimismo cobra caro: quanto mais
você tranca, menos gente passa, até o dia em que duas transações se travam
esperando uma pela outra e ninguém passa — duas pessoas educadas demais no
mesmo corredor.

O que aprendi a fazer, e que mudou mais meu código do que qualquer padrão, foi
trocar a pergunta do teste. Não "isso funciona?", mas: **o que acontece se mil
disso chegarem no mesmo milissegundo?** Você vai descobrir que aquela linha
única de configuração que todo serviço atualiza vira um gargalo; que ter cem
pods não adianta se o banco continua sendo um; que vinte serviços com pool de
cem conexões pedem duas mil conexões de um PostgreSQL que não quer isso. Escala
de aplicação não é escala de banco. O elevador não resolve, se o botão é um só.

## Nenhuma verdade chega ao mesmo tempo para todo mundo

A parte que mais me fascina em sistemas distribuídos é essa, e ela é
filosoficamente mais interessante do que parece.

A réplica atrasa. O cache envelhece. O evento chega com um segundo de diferença
para o estoque, dois para o analytics. A loja mudou o preço e o cartaz da
vitrine ainda diz o antigo. Nada disso é defeito — é o formato do mundo quando
a informação precisa viajar.

Então consistência deixa de ser uma propriedade técnica e vira uma pergunta
adulta:

> Quem, neste sistema, pode estar errado — e por quanto tempo?

O saldo bancário do cliente: ninguém, nunca. O contador de curtidas: todo
mundo, por um minuto, sem problema. A resposta muda por campo, não por sistema,
e quem responde isso é o negócio, não o banco.

Daí também nasce a única garantia que eu exijo de qualquer integração que passa
por evento: **idempotência**. Mensagem chega duas vezes. Vai chegar. Se o seu
`PaymentApproved` cobra duas vezes, você não tem um problema de fila, tem um
problema de modelagem — faltou onde registrar que aquilo já aconteceu. E se
você salva no banco e publica o evento em dois passos separados, um dia o
processo morre no meio: pedido salvo, evento perdido. Por isso a caixa de saída
mora dentro da mesma transação que o pedido. A carta fica no cesto mesmo que o
carteiro não volte.

## O sistema que não esquece

Aqui o texto vira, e é onde eu queria chegar.

Tudo no seu stack é descartável, menos uma coisa. Pod morre e sobe outro.
Serviço é reescrito. Frontend é redesenhado a cada dois anos por motivos de
moda. Só o banco carrega o passado — ele é a memória do sistema, e memória é
justamente o que não se recria.

Repare no que isso significa na prática. `deleted_at` não é um detalhe de
implementação: é a decisão de que o sistema **não esquece**. A pessoa pediu
para sair, o sistema diz que saiu, e a linha continua lá, com o nome, o e-mail,
o histórico, esperando um `WHERE deleted_at IS NULL` que alguém um dia vai
esquecer de escrever. Auditoria é a mesma coisa em escala maior: quem fez o
quê, quando, de onde, valor antigo e valor novo, para sempre. Eu defendo
auditoria, uso auditoria, acho quase irresponsável um sistema crítico sem ela.
Só não finjo que é uma escolha neutra. Estou decidindo o que vai ser lembrado
sobre alguém, e por quanto tempo, geralmente sem nunca ter olhado para essa
pessoa.

E já que entrei no terreno religioso lá no começo, fico com a observação e sem
a lição: é curioso que a tradição em que acredito descreva o perdão como não
levar mais em conta o que passou, enquanto o nosso ofício inteiro consiste em
garantir que nada jamais deixe de ser levado em conta. Não sei o que fazer com
isso. Só sei que quem escreve `soft delete` deveria pelo menos perceber que
está escrevendo uma posição sobre memória, e não uma linha de SQL.

<aside class="nota">Um detalhe prático que quase ninguém separa: réplica não é backup. Se você apagar a tabela, a réplica replica o apagão com competência exemplar.</aside>

## No fim, não é sobre banco de dados

Chego onde eu queria, e vou pelo caminho mais curto.

Código é rascunho. Dado é testemunho.

Tudo que escrevemos como programadores é provisório por construção — existe
até alguém ter uma ideia melhor, e essa pessoa frequentemente somos nós mesmos
seis meses depois. A modelagem é a única parte do trabalho em que a gente
escreve algo que vai sobreviver a todas as nossas opiniões. O schema é o mais
perto que um engenheiro chega de dizer, em definitivo, "o mundo é assim".

Por isso, das minhas decisões técnicas, é a única em que a humildade deixou de
ser virtude e virou requisito. Não humildade de postura — humildade
operacional: saber que estou escrevendo uma interpretação da realidade de outra
pessoa, com a informação incompleta de quem chegou na semana passada, e que
essa gente vai morar dentro da minha interpretação por anos. O usuário nunca
vai ler meu código. Vai sentir minha modelagem todo dia, em cada campo que não
existe para o caso dele, em cada tela que o obriga a mentir um pouco para
conseguir salvar.

Já fui, também, uma linha que mudou de status no sistema de outra pessoa.
Contrato, carga horária, data de desligamento. Do lado de dentro, é uma vida
inteira; do lado do banco, é um `UPDATE` bem indexado. As duas descrições estão
corretas, e essa distância é exatamente o tamanho da responsabilidade de quem
desenha a tabela.

Então a régua que levo comigo, e que encerra o texto:

> Antes de criar qualquer coisa nesse banco, eu preciso saber dizer de quem é
> esse dado, que pergunta ele responde, quando ele pode estar errado e o que
> acontece com uma pessoa concreta se ele estiver.

Enquanto eu conseguir responder isso, a modelagem está de pé. E no dia em que
eu não conseguir, já sei como termina: o problema nunca foi o banco.