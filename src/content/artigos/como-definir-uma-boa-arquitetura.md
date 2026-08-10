---
titulo: Como definir uma boa arquitetura
resumo: >-
  Não começo olhando para arquitetura. Começo por uma pergunta — e ela
  quase nunca é técnica.
data: 2026-08-10
tags:
  - software
  - arquitetura
---

Não vou citar livro, curso nem palestra. Não porque não existam — mas porque
não é de lá que tiro minhas decisões. Tiro de uma única pergunta, que faço
antes de qualquer diagrama. Vou chegar a ela, mas ainda não.

Já aviso: boa parte disto vai soar amador para quem monta um cadastro de
produtos com quatro camadas, três middlewares, SOLID, clean code e
microsserviços. Sou contra isso — contra a sofisticação que existe só para
parecer sofisticada. Tenho uma implicância parecida com o manifesto ágil, mas
essa fica para outro texto. Aqui o assunto é mais simples e mais difícil:
como eu decido o que, de fato, precisa existir.

## Arquitetura e padrão de projeto não são a mesma coisa

Preciso alinhar dois conceitos antes, senão o resto não se sustenta.

Imagino a arquitetura como o processo de entender a necessidade real de um
software — o que ele é, para quem, por quanto tempo, a que custo. É como
construir uma casa: antes do primeiro tijolo, existem perguntas que não têm
nada a ver com tijolo.

- Quantas pessoas vão morar aqui?
- É para durar cinco anos ou cinquenta?
- Vou querer aumentá-la depois?
- Quanto posso gastar?
- O terreno aguenta o que quero construir?

Nenhuma dessas perguntas é sobre erguer parede. Todas são sobre decidir o que
a casa vai ser. E é respondendo-as que se chega àquela que considero a única
que importa de verdade:

> Hoje, com o meu time, eu sou capaz de construir isso — e de arcar com tudo
> o que essa construção passa a cobrar?

Uma decisão errada aqui custa caro. Às vezes é só um cliente insatisfeito.
Às vezes é um acidente doméstico que deveria ter sido evitado. Você realmente
pesa o que significa se propor a fazer o trabalho antes de aceitá-lo?

Padrão de projeto é outra coisa, e vem depois. Volte à casa, agora em obras:
você precisa de portas, e quer que cômodos diferentes usem portas diferentes.
Podia inventar do zero, mas é quase certo que alguém já resolveu isso mil
vezes. Um padrão é isso — uma solução conhecida para um problema que se
repete. Não é código pronto; é uma ideia de construção.

E não se martirize por não ter inventado nada: é bem provável que qualquer
solução que você pensou já tenha aparecido antes, sido implementada e
melhorada. Isso não te obriga a descartar a sua e sair caçando "a melhor". Se,
no seu julgamento, o padrão escolhido resolve o problema, use — sem culpa.
Afinal, o pecado só existe quando se tem plena consciência de que se está
pecando, não é?

Fecho os dois assim: arquitetura é decidir o que você **não** quer que
aconteça; padrão é reconhecer o que já aconteceu antes e resolver sem
reinventar a roda.

## A pergunta que importa

A pior forma de escolher uma arquitetura é perguntando "qual é a melhor?".
Não existe melhor no vácuo. Uma casa para uma pessoa não se projeta como um
hospital — nem como um cortiço. Arquitetura é adequação ao contexto. Então
olho para o tamanho e a experiência da equipe, a complexidade do domínio, o
número de usuários, o custo, a disponibilidade exigida, o tempo de vida do
sistema e, acima de tudo, a probabilidade de mudança. E só então pergunto:

> Que estrutura torna as mudanças que eu espero mais fáceis, e as mudanças que
> eu temo menos perigosas?

Essa pergunta vale mais que qualquer nome de arquitetura. Porque escolher uma
arquitetura é, no fundo, decidir quais complexidades você aceita carregar — e
escolher um padrão é decidir como lidar com a complexidade que se mostrou
inevitável.

## Todo padrão resolve um problema e cria outro

Aqui mora a ironia. Imagine que você tem `Controller → Service → Database`.
Funciona. Aí bate a tentação de fazer virar isto:

```text
Controller
   ↓
Service
   ↓
Factory
   ↓
Strategy
   ↓
Adapter
   ↓
Repository
   ↓
Database
```

Parece "mais arquitetural". Mas talvez você só tenha transformado um problema
de dez linhas em dez abstrações. Repare: o problema não são as abstrações.
Cada uma delas existe por um bom motivo — quando existe o problema que as
justifica. O erro é invocá-las sem esse problema, pelo prazer de parecer
sofisticado. Isso não é engenharia melhor. É o contrário.

## Construa para o provável, não para o possível

Você não projeta uma casa pensando "talvez um dia eu queira um heliporto".
Você pergunta o que é necessidade e o que é só possibilidade. Se sabe que terá
dois carros, faz garagem para dois. Se existe uma chance remota de ter quatro
daqui a trinta anos, não ergue um galpão hoje.

Software é igual. Não se constrói para toda possibilidade — se constrói para
as mudanças que têm evidência suficiente para justificar o custo de
antecipá-las. E, por baixo disso, uma ordem de prioridade que tento nunca
inverter: antes de procurar a solução, entenda o problema; antes de somar uma
abstração, pergunte se a complexidade existe mesmo; antes de escolher a
arquitetura, entenda o que você está tentando proteger do futuro.

## No fim, não é sobre arquitetura

Chego à parte que os diagramas não mostram — e que, para mim, é o texto
inteiro.

Uma arquitetura pode ser tecnicamente impecável e, ainda assim, ser a errada.
Basta que:

- ninguém no time a entenda por completo;
- ela seja fácil de escrever e difícil de manter;
- o prazo não comporte a complexidade que ela impõe;
- a empresa não consiga pagar a operação que ela exige;
- não haja quem contratar para sustentá-la depois que você sair.

Não importa que o sistema seja grande, ou que seja para a empresa X que
"precisa" de tal coisa. Na esmagadora maioria das vezes, o que define se a
arquitetura foi boa é uma coisa só: o time acompanha? A empresa acompanha?
Por mais que exista um caminho tecnicamente superior, muitas vezes o certo é
abrir mão dele em nome do caminho que as pessoas conseguem carregar. Não é
sobre você. É sobre um todo.

Talvez você tenha reparado numa contradição: eu disse que escrevo aqui para me
entender, não para ensinar — e passei o texto inteiro explicando. É que, no
meu caso, as duas coisas são a mesma. Só entendo de verdade uma decisão quando
consigo dizer, em voz alta, por que ela deveria existir.

O que me leva à pergunta do começo, agora fechada. Quando defino uma
arquitetura, não me prendo a uma forma única de fazer as coisas — daí meus
projetos serem quase sempre soluções mistas, moldadas ao contexto. O critério
é este:

> Se fui eu quem decidiu pôr essa complexidade no sistema, preciso ser capaz
> de dizer por que ela deveria estar lá.

Enquanto eu conseguir responder isso — com o time, o cliente e o futuro
provável na cabeça — a decisão estará de pé. No dia em que eu não conseguir, o
problema nunca foi a arquitetura. Fui eu.