(this.webpackJsonpmnemorize=this.webpackJsonpmnemorize||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),o=n(11),r=n.n(o),a=(n(24),n(25),n(3)),c=(n(28),n(29),n(17)),l=(n(30),n(16)),u=n(2),d=function(e){var t=e.content,n=t.title,i=t.content;return Object(u.jsxs)("div",{className:"flip-card-content",children:[n&&Object(u.jsx)("h3",{children:n}),i&&Object(u.jsx)(l.a,{children:i})]})},p=function(e){var t=Object(i.useState)("front"),n=Object(c.a)(t,2),s=n[0],o=n[1],r=e.questionAndAnswer;return Object(u.jsx)("div",{className:"flip-card",onClick:function(){return o("front"===s?"back":"front")},"data-face":s,children:Object(u.jsxs)("div",{className:"flip-card-inner",children:[Object(u.jsx)("div",{className:"flip-card-front",children:Object(u.jsx)(d,{content:r.question})}),Object(u.jsx)("div",{className:"flip-card-back",children:Object(u.jsx)(d,{content:r.answer})})]})})},m=function(e){var t=e.questionsAndAnswers;return Object(u.jsx)("div",{className:"flip-cards",children:t.map((function(e,t){return Object(u.jsx)(p,{questionAndAnswer:e},t)}))})},b=(n(34),[{question:{title:"TDD - RED",content:""},answer:{title:"Make it fail",content:"No code without a failing test"}},{question:{title:"TDD - GREEN",content:""},answer:{title:"Make it work",content:"As simply as possible"}},{answer:{title:"Make it better",content:"No new functionality"},question:{title:"TDD - REFACTOR",content:""}},{question:{title:"TDD - R\xe8gle #1",content:""},answer:{title:"Red First !",content:"Vous n\u2019avez pas le droit d\u2019\xe9crire une ligne de code de production si ce n\u2019est pour faire passer un test d\u2019\xe9chec \xe0 r\xe9ussite."}},{question:{title:"TDD - R\xe8gle #2",content:""},answer:{title:"Un seul \xe0 la fois !",content:"Vous n\u2019avez pas le droit d\u2019\xe9crire plus d\u2019un test unitaire en \xe9chec, une erreur de compilation est un \xe9chec."}},{question:{title:"TDD - R\xe8gle #3",content:""},answer:{title:"\xc7a est frugal !",content:"Vous n\u2019avez pas le droit d\u2019\xe9crire plus de code de production que n\xe9cessaire pour faire passer le test d\u2019\xe9chec \xe0 r\xe9ussite."}},{question:{title:"4 r\xe8gles du Simple Design",content:""},answer:{title:"",content:"1. Passes the tests\n2. Reveals intention (should be easy to understand)\n3. No duplication in same context (DRY)\n4. Fewest elements (remove anything that doesn\u2019t serve the three previous rules)"}},{question:{title:"The 8 Core Drives of Gamification",content:"Octalysis Framework"},answer:{title:"",content:"1) Epic Meaning & Calling\n2) Development & Accomplishment\n3) Empowerment of Creativity & Feedback\n4) Ownership & Possession\n5) Social Influence & Relatedness\n6) Scarcity & Impatience\n7) Unpredictability & Curiosity\n8) Loss & Avoidance"}},{question:{title:"La cinqui\xe8me discipline - Levier des organisations apprenantes",content:"Peter Senge"},answer:{title:"",content:"- La ma\xeetrise personnelle : clarifier notre approche de la r\xe9alit\xe9.\n- Les mod\xe8les mentaux : apprendre \xe0 nous d\xe9faire de nos pr\xe9jug\xe9s.\n- La vision partag\xe9e : savoir relier des individus ensemble.\n- L'apprenance en \xe9quipe : favoriser la r\xe9flexion collective par le dialogue.\n- La pens\xe9e syst\xe9mique : voir les probl\xe8mes dans leur ensemble.\n"}},{question:{title:"Les diff\xe9rentes sortes de test",content:""},answer:{title:"",content:"- Unitaires\n- Composants.\n- Int\xe9gration.\n- Contrat.\n- Bout-en-bout.\n- Exploratoires.\n...\n"}},{question:{title:"SOLID",content:""},answer:{title:"",content:"- Single responsibility principle\n- Open/closed principle\n- Liskov substitution principle\n- Interface segregation principle\n- Dependency inversion principle\n"}},{question:{title:"SRP: Single responsibility principle",content:"Responsabilit\xe9 unique"},answer:{title:"",content:"une classe, une fonction ou une m\xe9thode doit avoir une et une seule responsabilit\xe9"}},{question:{title:"OCP: Open/closed principle",content:"Ouvert/ferm\xe9"},answer:{title:"",content:"une entit\xe9 applicative (classe, fonction, module ...) doit \xeatre ferm\xe9e \xe0 la modification directe mais ouverte \xe0 l'extension"}},{question:{title:"LSP: Liskov substitution principle)",content:""},answer:{title:"Substitution de Liskov",content:"une instance de type T doit pouvoir \xeatre remplac\xe9e par une instance de type G, tel que G sous-type de T, sans que cela ne modifie la coh\xe9rence du programme"}},{question:{title:"",content:"### ISP \n##### Interface Segregation Principle\nS\xe9gr\xe9gation des interfaces"},answer:{title:"",content:"pr\xe9f\xe9rer plusieurs interfaces sp\xe9cifiques pour chaque client plut\xf4t qu'une seule interface g\xe9n\xe9rale"}},{question:{title:"DIP: Dependency inversion principle",content:"Inversion des d\xe9pendances"},answer:{title:"",content:"il faut d\xe9pendre des abstractions, pas des impl\xe9mentations"}},{question:{title:"Loi de D\xe9m\xe9ter",content:"Principe de connaissance minimale"},answer:{title:"\xab Ne parlez qu'\xe0 vos amis imm\xe9diats \xbb",content:"pour les fonctions requiert que toute m\xe9thode M d'un objet O peut simplement invoquer les m\xe9thodes des types suivants d'objets :\n\n- O lui-m\xeame\n- les param\xe8tres de M\n- les objets que M cr\xe9e/instancie\n- les objets membres de O"}},{question:{title:"Avantage de la Loi de D\xe9m\xe9ter",content:""},answer:{title:"",content:"L'avantage de suivre la r\xe8gle de D\xe9m\xe9ter est que le logiciel r\xe9sultat est plus maintenable et plus adaptable. Puisque les objets sont moins d\xe9pendants de la structure interne des autres objets, ceux-ci peuvent \xeatre chang\xe9s sans changer le code de leurs appelants"}},{question:{title:"Inconv\xe9nient de la Loi de D\xe9m\xe9ter",content:""},answer:{title:"",content:"Un d\xe9savantage de la r\xe8gle de D\xe9m\xe9ter est qu'elle requiert l'\xe9criture d'un grand nombre de petites m\xe9thodes \"wrapper\" pour propager les appels de m\xe9thodes \xe0 leurs composants. Cela peut augmenter le temps de d\xe9veloppement initial, accro\xeetre l'espace m\xe9moire utilis\xe9, et notablement diminuer les performances."}},{question:{title:"Splitter vs Lumper",content:""},answer:{title:"",content:""}},{question:{title:"KISS",content:""},answer:{title:"",content:""}},{question:{title:"DRY",content:""},answer:{title:"",content:""}},{question:{title:"YAGNI",content:""},answer:{title:"",content:""}},{question:{title:"GRASP ",content:"General responsibility assignment software patterns"},answer:{title:"",content:"https://fr.wikipedia.org/wiki/GRASP_(programmation)"}},{question:{title:"SLAP",content:"Single Level of Abstraction Principle\n"},answer:{title:"Don\u2019t mix levels of abstraction !\n",content:"It is difficult to read the code when you have to jump mentally between abstraction levels, which is what the SLAP principle tries to avoid.\n\n> Functions should do just one thing, and they should do it well.\n> \u2014 Robert C. Martin\n"}}]),f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(a.d,{children:[Object(u.jsxs)(a.b,{children:[Object(u.jsx)(a.a,{children:"Carte seule"}),Object(u.jsx)(a.a,{children:"Liste"}),Object(u.jsx)(a.a,{children:"Deck"})]}),Object(u.jsx)(a.c,{children:Object(u.jsx)(p,{questionAndAnswer:{question:{title:"Comment se souvenir de tout pour quasiment toujours ?"},answer:{title:"Utiliser le m\xe9canisme de la r\xe9p\xe9tition espac\xe9e, et des flip-cards"}}})}),Object(u.jsx)(a.c,{children:Object(u.jsx)(m,{questionsAndAnswers:b})}),Object(u.jsx)(a.c,{children:Object(u.jsx)("p",{children:"TODO : un deck n'est pas une liste"})})]})})};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ec004620.chunk.js.map