---
titulo: O bezerro de ouro
resumo: >-
  O Manifesto Ágil é uma confissão de ignorância. A indústria transformou
  essa confissão numa máquina de fingir que sabe — e eu ajudei.
data: 2026-09-21
tags:
  - software
  - carreira
  - gestão
---

Deixei isso pendente num texto anterior. Escrevi que tenho uma implicância com
o manifesto ágil e que ela ficaria para outra hora. Chegou a hora, e começo
desfazendo o que eu mesmo escrevi: minha implicância não é com o manifesto.

É com o que fizeram dele. E, já que este caderno é para ser honesto, é também
com o que eu fiz dele — porque eu fui, durante bastante tempo, o cara que
montava o gráfico.

## Sessenta e oito palavras

Se você nunca leu o manifesto original, leia. Leva menos de um minuto. São
quatro linhas, escritas em 2001, por dezessete pessoas reunidas numa estação
de esqui em Utah, cansadas dos processos pesados da época.

Indivíduos e interações mais que processos e ferramentas. Software
funcionando mais que documentação abrangente. Colaboração com o cliente mais
que negociação de contratos. Responder a mudanças mais que seguir um plano. E
a ressalva que quase ninguém cita: há valor nos itens à direita, só se
valoriza mais os da esquerda.

Mas a frase que interessa não é nenhuma dessas quatro. É a de abertura:

> Estamos descobrindo maneiras melhores de desenvolver software fazendo-o.

Repare no tempo verbal. Não é "descobrimos". É "estamos descobrindo".

O documento fundador de toda essa indústria de certificação, framework e
dashboard é, na origem, **uma confissão de ignorância**. Dezessete sujeitos
experientes dizendo em público que não sabiam direito como se faz aquilo e
que estavam aprendendo enquanto faziam.

Tudo o que veio depois é a história de como a indústria pegou uma confissão e
a transformou numa certidão.

## O problema que eles estavam tentando resolver

Para ser justo, o inimigo era real.

O modelo anterior tentava responder à pergunta "como planejar tudo antes de
construir?". Meses de levantamento, meses de projeto, um ano de
implementação, meses de teste — e, no fim, a descoberta de que o erro havia
sido cometido no segundo mês. Você gastava dois anos para receber a notícia.

A pergunta que o manifesto propõe no lugar é outra:

> Como aprender rápido enquanto construímos?

E isso é acertado, porque software tem uma propriedade que nenhum outro
produto de engenharia tem na mesma medida: o cliente frequentemente só
descobre o que quer depois de ver algo funcionando. Não por incompetência
dele. Porque o conhecimento sobre o problema é **produzido durante a
construção**. Não existia antes. Não dava para levantar antes.

É o mesmo raciocínio que já defendi aqui sobre arquitetura: você constrói para
o provável, não para o possível, porque não tem como saber o possível inteiro.
O ágil é a versão disso aplicada ao cronograma.

Até aqui, assino embaixo. O problema começa no que a organização faz quando
recebe uma resposta honesta.

## O bezerro

Tem uma cena no Êxodo que eu não consigo tirar da cabeça quando vejo certos
dashboards.

Moisés sobe o monte e demora. O povo fica embaixo, esperando, sem prazo e sem
sinal. E a espera sem garantia é insuportável — então eles vão até Aarão e
pedem um deus que se possa ver. Aarão não briga, não explica, não aguenta o
desconforto: manda que tragam o ouro que eles mesmos possuem, funde, e
entrega um bezerro. O povo olha aquilo e comemora.

Nunca li essa passagem como uma história sobre idolatria exótica. É sobre o
que as pessoas fazem quando a incerteza fica intolerável. Elas não inventam
uma nova verdade. Elas **fundem uma imagem com o material que já têm** e
tratam a imagem como se fosse a coisa.

É exatamente isso que acontece numa reunião de planejamento.

O gestor precisa de uma data. A resposta honesta é "não sei ainda, depende da
integração que ninguém validou". Essa resposta é insuportável — não por
maldade, mas porque acima dele tem outro alguém que também precisa de uma
data, e assim por diante até o conselho. Então alguém pergunta:

> Mas me dá uma estimativa.

E o desenvolvedor, sem nada além do próprio ouro, funde um número. Três meses.

Repare no material: o número saiu do time. O bezerro é feito do ouro do povo.
Ninguém trouxe informação nova para aquela sala. A incerteza que existia antes
da pergunta continua exatamente do mesmo tamanho depois dela. A única coisa
que mudou é que agora existe uma imagem para se olhar.

E, a partir do dia seguinte, aquela imagem passa a ser tratada como se fosse a
realidade.

```text
"talvez três meses"
        ↓
    estimativa
        ↓
     previsão
        ↓
   compromisso
        ↓
     promessa
        ↓
     cobrança
```

Cada seta dessas é um degrau em que alguém trocou um pouco de verdade por um
pouco de conforto. Nenhum desses degraus adiciona conhecimento. Todos
adicionam risco. E quando a data chega e o software não está pronto, ninguém
diz "a nossa estimativa estava errada". Dizem "o time não entregou".

Você foi cobrado por não cumprir uma promessa que nunca fez. Você disse
"talvez".

## Não terás na tua bolsa dois pesos

O Deuteronômio tem uma proibição que parece miudeza e é uma das coisas mais
sérias da lei: não terás na tua bolsa duas espécies de peso, um grande e outro
pequeno. Provérbios repete em tom mais duro: peso falso é abominação.

O motivo é óbvio quando você pensa um segundo. Quem controla a unidade de
medida controla a conclusão sem precisar mentir sobre nada. Você não altera o
grão; altera o peso da balança e o grão "aumenta" sozinho.

Agora observe um time sob pressão de velocity.

```text
Antes                    Depois
Feature A = 3            Feature A = 8
Feature B = 5            Feature B = 13
Feature C = 8            Feature C = 21
─────────────            ─────────────
16 pontos                42 pontos
```

O gestor abre o gráfico e vê a produtividade quase triplicar. Comemora. Manda
o print para a diretoria.

Não foi entregue absolutamente nada a mais. O time apenas aprendeu que número
maior vive melhor. Trocou o peso da bolsa.

E aqui está a parte que mais me irrita, porque é onde a coisa deixa de ser
engraçada: **ninguém mentiu**. Cada ponto daquele foi estimado de boa-fé numa
sala de planning. O gráfico está matematicamente correto. A planilha fecha.
Você pode auditar linha por linha e não vai encontrar uma única falsidade.

É por isso que eu acho essa a distorção mais perigosa de todas:

> Dá para mentir com números sem alterar nenhum número.

Basta escolher o que medir, o que não medir, o período, a unidade, o
denominador e a comparação. Tudo verdadeiro, conclusão inteiramente falsa.

Story point nasceu como estimativa relativa, para comparar duas tarefas entre
si dentro de um mesmo time, num mesmo mês. No dia em que vira meta de
desempenho, deixa de medir qualquer coisa — porque as pessoas passam a
otimizar o indicador em vez do resultado. Isso tem nome em gestão desde os
anos setenta, a lei de Goodhart, e todo mundo cita e ninguém aplica.

O mesmo vale para card fechado. Diga a um desenvolvedor que ele será avaliado
por quantidade de cards, e você acabou de ensiná-lo a evitar exatamente o
trabalho que importa: investigação difícil, refatoração, arquitetura,
depuração de bug intermitente. Tudo isso é card único, demorado e feio no
gráfico. A pessoa não ficou pior. Ela ficou obediente à métrica que você
escolheu.

<aside class="nota">Um bom teste, e eu uso ele sempre: se o time soubesse que seria julgado exclusivamente por esse número, conseguiria aumentar o número sem melhorar o produto? Se sim, você não tem uma métrica. Tem um incentivo perverso com aparência de métrica.</aside>

## Os sepulcros caiados

Jesus foi particularmente pouco diplomático com os fariseus, e sempre pelo
mesmo motivo. Não era que eles seguissem regras demais. É que eles limpavam o
exterior do copo e deixavam o interior sujo. Que pagavam dízimo da hortelã, do
endro e do cominho — contando folhinha por folhinha — e deixavam de lado o que
era mais pesado na lei. Que por fora pareciam bonitos e por dentro estavam
cheios de ossos.

Eu não conheço imagem melhor para o que se convencionou chamar de ágil
corporativo.

Existe empresa com daily, planning, review, retrospectiva, refinement, product
owner, scrum master, story point, velocity, burndown, burnup, WIP limit,
quadro colorido, OKR e dashboard em tela de TV no corredor — e que não é
minimamente ágil. Tem todos os mecanismos e nenhum dos princípios. É um
velocímetro instalado num carro sem motor: o ponteiro se move, o carro não sai
do lugar.

E o pior é que o exterior limpo funciona. Funciona socialmente. A empresa
parece organizada, o cliente vê profissionalismo, a diretoria vê governança.
Ninguém abre o copo.

Enquanto isso, por dentro:

- a retrospectiva onde ninguém fala a verdade, porque quem fala vira o
  problema da próxima retrospectiva;
- a daily de quinze minutos que dura quarenta e cinco e virou reunião de
  status para o gestor, não sincronização do time;
- o burndown que desce lindamente porque removeram itens da sprint;
- o "pronto" que significa "funciona na minha máquina";
- o MVP, que no original era a menor versão capaz de **gerar aprendizado**, e
  virou apelido corporativo para produto inacabado que se cobra como acabado.

Esse último merece raiva própria. Servir um hambúrguer cru e chamar de MVP não
é iteração. O cliente não aprendeu nada e ainda passou mal.

## Babel

Tem outra cena que explica a parte do vocabulário.

Em Babel a humanidade está construindo alguma coisa alta, e a construção não
para por falta de material nem de mão de obra. Para porque a linguagem se
confunde. Todo mundo continua falando — só que ninguém mais entende ninguém, e
a obra é abandonada com os tijolos no chão.

Passei por reuniões inteiras em que se falou em throughput, cycle time, lead
time, capacity, forecast, epic, initiative, enabler, spike, definition of
ready, refinamento e capacidade normalizada — e ao final ninguém sabia dizer o
que ia ser entregue, para quem, por quê e como saberíamos que deu certo.

O jargão não é o problema em si. Cada uma dessas palavras existe por um bom
motivo, como cada padrão de projeto existe por um bom motivo. O problema é
invocá-las sem o problema que as justifica — e eu já escrevi aqui que essa é a
minha implicância mais antiga, a sofisticação que existe só para parecer
sofisticada.

Só que em gestão essa sofisticação tem um uso que em código ela não tem:
**ela protege quem a usa**. Um vocabulário que só os iniciados dominam torna
qualquer pergunta ingênua constrangedora. E uma sala onde é constrangedor
perguntar "o que a gente está entregando, afinal?" é uma sala onde a obra vai
parar com os tijolos no chão, todo mundo falando muito.

Um caso concreto: WIP. A ideia é ótima e velha como o mundo — não comece mais
trabalho do que você consegue terminar. Numa cozinha com dois cozinheiros e
dez pratos começados, você não tem produtividade, tem dez pratos frios e
nenhum cliente servido. Limitar WIP revela o gargalo.

Agora veja o que acontece na prática:

```text
No quadro          Na realidade
WIP = 3            3 cards
                   + 5 reuniões
                   + 2 incidentes de produção
                   + 1 pedido do chefe no privado
                   + suporte
                   + "só uma coisinha rápida"
                   = WIP real ≈ 20
```

O quadro está correto. A representação da realidade é que é falsa. E como o
planejamento de capacidade é calculado em cima do trabalho visível, a
capacidade planejada é sempre maior que a real. Toda semana. Aí o gestor
pergunta por que não entregaram, e a resposta honesta — "o modelo de
capacidade está errado desde o começo" — é uma resposta que quase ninguém tem
coragem de dar duas vezes.

## Como isso destrói uma operação

Até aqui pode parecer que estou falando de chateação. Não estou. Já vi isso
demolir operação inteira, e o mecanismo é sempre o mesmo, em quatro tempos.

**Primeiro, vende-se certeza.** Escopo fechado, prazo fixo, preço fechado, em
cima de um sistema que ainda não existe e de integrações que ninguém validou.
A palavra "ágil" aparece na proposta comercial como se fosse garantia de que
dará tempo.

**Segundo, a incerteza se materializa.** Sempre se materializa. Aparece a
dependência que ninguém mapeou, o ambiente que não existe, a regra de negócio
que o cliente descobriu ao ver a tela.

**Terceiro, como a data virou promessa e a promessa virou contrato, o que
sobra para ceder é a qualidade** — porque é a única variável que não tem
ninguém defendendo na reunião. Data tem o comercial defendendo. Escopo tem o
cliente defendendo. Qualidade não tem advogado, porque o custo dela aparece
depois e o custo do atraso aparece agora. Então se corta teste, revisão,
tratamento de erro, observabilidade. Tudo isso com uma frase tranquilizadora:
a gente ajusta na próxima sprint.

**Quarto, chega a fatura.** E a fatura de dívida técnica não vem em parcela
fixa, vem em juros compostos: cada funcionalidade nova quebra três antigas,
cada correção gera dois chamados, o time passa mais tempo apagando incêndio do
que construindo. O gráfico de entrega despenca. E aí a organização olha o
gráfico e conclui:

> O time ficou lento.

O time não ficou lento. O time está pagando juros de decisões que a própria
organização tomou por ele, uma sprint de cada vez, com o consentimento de todo
mundo, sempre por um motivo razoável.

E existe um estrago pior que o técnico. Numa operação assim, as pessoas
aprendem uma lição e aprendem rápido: **a verdade é cara e a aparência é
barata**. Quem diz "não vai dar" na quinta-feira tem uma semana ruim. Quem diz
"vai dar" e falha na sexta seguinte tem uma semana igual à de todo mundo. Não
precisa de mais nada além disso para que, em poucos meses, ninguém no time
reporte problema antes que ele seja inevitável. A organização cega a si mesma
e chama isso de cultura de resultado.

Foi quando entendi uma coisa que hoje me parece óbvia: nada disso é culpa do
manifesto. O manifesto pede o contrário em quase todas as linhas. É que ele
pressupõe uma coisa que muita empresa não tem, e que nenhum framework
instala — a capacidade de ouvir "não sei" sem punir quem disse.

## A ironia, em quatro linhas

Vale colocar lado a lado, porque é quase cômico:

O manifesto diz: aceite a mudança. A empresa diz: mas você prometeu.

O manifesto diz: software funcionando é a medida do progresso. A empresa diz:
o dashboard está verde.

O manifesto diz: colaboração com o cliente acima de negociação de contrato. A
empresa diz: o contrato já está assinado.

O manifesto diz: responda a mudanças. A empresa diz: não dá, o roadmap já foi
aprovado.

Antes, o plano dizia que terminaríamos em dezembro. Agora, a velocity indica
que terminaremos em dezembro. Trocou-se a estrutura e manteve-se a ilusão
intacta — só que agora com nome em inglês e um gráfico junto.

## Sendo justo

Não quero que este texto seja lido como desprezo por método, porque não é.
Aquele que abandona processo porque "somos ágeis" costuma estar fazendo coisa
pior do que o waterfall: está fazendo improviso com álibi. E o manifesto nunca
disse "em vez de processos". Disse "mais que processos". Os itens da direita
continuam tendo valor; só perdem a disputa quando há conflito.

O ágil funciona muito bem — melhor que qualquer coisa que eu conheça — quando
existe incerteza real, feedback rápido de usuário de verdade, um produto que
aceita ser construído aos pedaços, um cliente disponível para colaborar e um
time com maturidade técnica para mudar o sistema sem quebrá-lo toda vez.

Repare que a última condição é técnica, não gerencial. O próprio manifesto tem
um princípio dizendo que atenção contínua à excelência técnica e ao bom design
aumenta a agilidade. É o princípio menos citado de todos, e não por acaso: é o
único que não dá para implementar com uma cerimônia.

**Agile não substitui engenharia.** Ele exige mais engenharia, não menos. E
exige gestão melhor, não menos gestão — que é exatamente o oposto do que se
vende em empresa pequena, onde ele costuma ser adotado como forma educada de
não ter processo nenhum.

Uma equipe de cinco desenvolvedores não precisa de sete papéis em volta para
explicar o que os cinco estão fazendo. A pergunta certa para uma operação
pequena nunca foi "qual framework vamos implementar?". É:

> Qual é o menor processo que transforma demanda em valor entregue com
> qualidade?

No meu caso, com times pequenos, isso costuma caber em pouca coisa: entender o
problema antes de propor solução; não começar mais do que se consegue
terminar; não chamar de pronto o que não está em produção; toda estimativa sai
acompanhada da incerteza que ela carrega; e medir fluxo e falha em vez de
atividade — quanto tempo leva de uma ideia até a produção, com que frequência
conseguimos publicar, quantas mudanças quebram alguma coisa e quanto tempo
demoramos para recuperar. Essas quatro últimas não são invenção minha; são as
métricas que a pesquisa da área vem apontando há anos, e a virtude delas é
simples: são muito difíceis de maquiar sem melhorar o sistema de verdade.

## No fim, não é sobre ágil

Chego onde eu queria.

O manifesto é bom porque é honesto, e é honesto porque é humilde: dezessete
pessoas dizendo que estavam descobrindo. A deturpação inteira cabe numa frase:
pegaram um instrumento criado para **lidar com a incerteza** e passaram a usá-lo
para **esconder a incerteza**. O que deveria aumentar a transparência virou a
melhor máquina de fabricar aparência de previsibilidade que essa indústria já
produziu.

E aqui está a coisa mais perigosa de todas, que eu demorei a enxergar porque
ela é confortável demais:

> Um processo sofisticado dá a uma organização imatura a sensação de que ela
> é madura.

É a pior das mentiras, porque ela é indolor. A empresa não sabe que está
mentindo. Ela olha o quadro, vê colunas, vê métricas, vê cerimônias no
calendário, e conclui sinceramente que tem método. O que ela tem é caos
organizado em colunas coloridas — e caos organizado é mais difícil de
diagnosticar do que caos declarado, porque parece saudável.

Já escrevi aqui que engenharia não está no crachá, está no julgamento. Agora
diria a versão de processo disso: agilidade não está no quadro, está na
honestidade. Não é uma técnica de velocidade. É uma técnica de dizer a verdade
sobre o que você não sabe, cedo o bastante para que ainda dê tempo de mudar de
ideia.

Por isso o resumo de tudo, para mim, não está em livro nenhum de gestão. Está
naquela instrução do Sermão da Montanha, que eu levo para reunião de
planejamento com uma frequência que me constrange um pouco admitir:

> Seja o vosso falar: sim, sim; não, não. O que passa disso vem do maligno.

Se você não sabe quanto custa, não invente precisão. Se não sabe quando fica
pronto, não transforme "talvez" em "prometo". Se não tem teste, não chame de
pronto. Se não está em produção, não chame de entregue. Se o usuário ainda não
recebeu valor, não chame de resultado.

Tudo o que passa disso — e é muito, e tem nome bonito, e rende gráfico — vem
do desconforto de ficar um tempo no pé do monte, sem saber, esperando.

Eu fundi meus bezerros. Alguns por pressão, outros porque era mais fácil dar o
número do que sustentar o silêncio depois da pergunta. Não faço mais, e o
custo disso é constante: dizer "não sei" numa sala em que todos querem uma
data é uma das coisas mais desconfortáveis da profissão.

Mas é a única que não cobra juros depois.