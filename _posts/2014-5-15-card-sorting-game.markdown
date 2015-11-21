---
layout: post
title:  "Card Sorting Game"
date: 2014-5-15 09:10:03
category: posts
language: Português
current-page: blog-item
---

Há algumas semanas, um colega da ThoughtWorks em Porto Alegre me comentou que o projeto para o qual ele estava trabalhando de maneira voluntária - o redesign do site de um ONG - tinha uma quantidade muito grande de conteúdo de ótima qualidade, mas que a informação estava tornando-se difícil de ser encontrada devido a quantidade de seções. Eu sugeri que rodássemos algumas rodadas de um exercício de Card Sorting para testar a arquitetura de informação - e dar ao cliente um feedback mais empírico para ajudá-los a reorganizar as coisas.

Card Sorting é um método muito fácil e barato de se validar taxonomias e arquiteturas de informação. É basicamente um exercício no qual você descreve todos os menus, submenus e ítems de menu em cartões (ou post-its) e pede para que pessoas (de uma a cinco - Martin e Hanington recomendam grupos de 3-5 em [Universal Methods of Design](http://www.amazon.com/Universal-Methods-Design-Innovative-Effective/dp/1592537561), mas isso pode variar) para ordenar os cartões de uma maneira que eles pensem que faça sentido, pedindo para que eles descrevam em voz alta a razão para cada decisão. Com diferentes rodadas de teste e observação do processo, você pode ter uma boa impressão de como as pessoas esperam encontrar conteúdo em seu website.

<div style="text-align: center;">
	 <img class="image-reduced" src="{{ site.baseurl }}/assets/images/posts/card-sorting/card01.jpg" alt=""/> 
	 <img class="image-reduced" src="{{ site.baseurl }}/assets/images/posts/card-sorting/card02.jpg" alt=""/>
 </div>
 </br>

É muito comum que se use card sorting para validar uma estrutura que o time tenha criado - ou seja, você assume que tenha organizado a informação em uma forma lógica e fácil de se encontrar, e então testa com pessoas para descobrir se as informações estão, de fato, encontráveis. Esse é um caso bastante corriqueiro. Em nosso caso, porém, queríamos validar ]coisas que nós mesmos não entendíamos até investigar a fundo - como algumas seções específicas e itens de menu. Tínhamos tempo e paciência para entrar em cada seção e analisá-la para entendê-la... mas será que o usuário comum teria?

Para simular isso, adicionei uma ideia a mais a atividade de card sorting: atrás dos cartões, adicionei informações explicativas sobre o conteúdo e dei a cada grupo de participantes 4 ou 5 "viradas de carta". Por exemplo, em um cartão chamado "Eu apoio o movimento", adicionei a descrição "lista de pessoas e organizações que apoiam publicamente o movimento". A ideia era simular a quantidade de cliques (e tempo gasto) que um usuário iria dar normalmente para entender onde encontrar o que busca no site.

O primeiro passo, então, foi criar todos os cartões e organizá-los da forma como era, no site. Esse foi o resultado inicial:

<img class="image-reduced image-centered" src="{{ site.baseurl }}/assets/images/posts/card-sorting/card03.jpg" alt=""/>

Então, nós recrutamos pessoas de outros projetos para ajudarmos em duas rodadas de 30 minutos, cada, do exercício. Para o primeiro grupo, tivemos 4 participantes. Recebendo os cartões embaralhados, eles rapidamente chegaram a uma organização que fazia sentido para eles e passaram a mudar a forma como achavam que a organização deveria ser feita, criando novas seções e eliminando outras.

<img class="image-reduced image-centered" src="{{ site.baseurl }}/assets/images/posts/card-sorting/card04.jpg" alt=""/>

Na seção "biblioteca", que tinha um item para cada assunto, eles consideraram transformar os itens em tags, reduzindo a quantidade de de itens e fazendo com que a mudança entre assuntos fosse mais fácil. mas não chegaram a implementar essa ideia. Foi interessante perceber, porém, o quão rápido eles resolveram dividir o conteúdo entre estático e dinâmico.

<img class="image-reduced image-centered" src="{{ site.baseurl }}/assets/images/posts/card-sorting/card05.jpg" alt=""/>

Para o segundo grupo, tivemos 6 voluntários. Apesar desse número poder ser considerado grande, decidimos tentar assim mesmo, especialmente para comparar com o grupo anterior. Naturalmente, as discussões foram mais longas, mas as opiniões e ideias, da mesma forma, foram mais diversas. Dei 5 viradas de cartões para o grupo de 6 pessoas para forçá-los a escolher que cartões virariam coletivamente. O aspecto de jogo foi reforçado por isso, e o grupo, eventualmente, se viu com duas viradas de cartões e pelo menos 5 cartões sobre os quais eles não tinham certeza do significado.

<img class="image-reduced image-centered" src="{{ site.baseurl }}/assets/images/posts/card-sorting/card06.jpg" alt=""/>

Como no primeiro grupo, eles também pensaram em eliminar items sob "biblioteca" e transformá-los em tags. Eles tiveram diversas ideias sobre como separar conteúdos dinâmicos e estáticos, e tentaram mover os cartões enquanto discutiam para ter maior clareza das ideias.

No geral, foi um exercício muito produtivo; os resultados foram levados para os stakeholders da ONG, que gostaram muito das ideias e resolveram tentar reorganizar seu conteúdo usando algumas das sugestões obtidas. O aspecto de gamefication tornou o exercício mais divertido e, no meu ponto de vista, simulou de maneira bem sucedida a comum baixa tolerância dos usuários em ter que desencavar os conteúdos que eles precisam encontrar ao navegar por websites que ainda não conheciam.