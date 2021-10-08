import React from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FlipCards from "./components/flip-card-list/FlipCards";
import FlipCard from "./components/flip-card/FlipCard";
import './App.css';

const questionsAndAnswers = [
  {
    question: {
      title: "TDD - RED",
      content: ""
    },
    answer: {
      title: "Make it fail",
      content: "No code without a failing test"
    },
  },
  {
    question: {
      title: "TDD - GREEN",
      content: ""
    },
    answer: {
      title: "Make it work",
      content: "As simply as possible"
    }
  },
  {
    answer: {
      title: "Make it better",
      content: "No new functionality"
    },
    question: {
      title: "TDD - REFACTOR",
      content: ""
    }
  },
  {
    question: {
      title: "TDD - Règle #1",
      content: ""
    },
    answer: {
      title: "Red First !",
      content: "Vous n’avez pas le droit d’écrire une ligne de code de production si ce n’est pour faire passer un test d’échec à réussite."
    },
  },
  {
    question: {
      title: "TDD - Règle #2",
      content: ""
    },
    answer: {
      title: "Un seul à la fois !",
      content: "Vous n’avez pas le droit d’écrire plus d’un test unitaire en échec, une erreur de compilation est un échec."
    },
  },
  {
    question: {
      title: "TDD - Règle #3",
      content: ""
    },
    answer: {
      title: "Ça est frugal !",
      content: "Vous n’avez pas le droit d’écrire plus de code de production que nécessaire pour faire passer le test d’échec à réussite."
    },
  },
  {
    question: {
      title: "4 règles du Simple Design",
      content: ""
    },
    answer: {
      title: "",
      content: "1. Passes the tests\n" +
        "2. Reveals intention (should be easy to understand)\n" +
        "3. No duplication in same context (DRY)\n" +
        "4. Fewest elements (remove anything that doesn’t serve the three previous rules)"
    },
  },
  {
    question: {
      title: "The 8 Core Drives of Gamification",
      content: "Octalysis Framework"
    },
    answer: {
      title: "",
      content: "1) Epic Meaning & Calling\n"
        + "2) Development & Accomplishment\n"
        + "3) Empowerment of Creativity & Feedback\n"
        + "4) Ownership & Possession\n"
        + "5) Social Influence & Relatedness\n"
        + "6) Scarcity & Impatience\n"
        + "7) Unpredictability & Curiosity\n"
        + "8) Loss & Avoidance"
    },
  },
  {
    question: {
      title: "La cinquième discipline - Levier des organisations apprenantes",
      content: "Peter Senge"
    },
    answer: {
      title: "",
      content:
          "La maîtrise personnelle : clarifier notre approche de la réalité.\n"
        + "Les modèles mentaux : apprendre à nous défaire de nos préjugés.\n"
        + "La vision partagée : savoir relier des individus ensemble.\n"
        + "L'apprenance en équipe : favoriser la réflexion collective par le dialogue.\n"
        + "La pensée systémique : voir les problèmes dans leur ensemble.\n"
    },
  },
  {
    question: {
      title: "Les différentes sortes de test",
      content: ""
    },
    answer: {
      title: "",
      content:
          "Unitaires\n"
        + "Composants.\n"
        + "Intégration.\n"
        + "Contrat.\n"
        + "Bout-en-bout.\n"
        + "Exploratoires.\n"
        + "...\n"
    },
  },
  {
    question: {
      title: "SOLID",
      content: ""
    },
    answer: {
      title: "",
      content:
          "Single responsibility principle"
        + "Open/closed principle"
        + "Liskov substitution principle"
        + "Interface segregation principle"
    },
  },
  {
    question: {
      title: "SRP: Single responsibility principle",
      content: "Responsabilité unique"
    },
    answer: {
      title: "",
      content:
          "une classe, une fonction ou une méthode doit avoir une et une seule responsabilité"
    },
  },
  {
    question: {
      title: "OCP: Open/closed principle",
      content: "Ouvert/fermé"
    },
    answer: {
      title: "",
      content:
          "une entité applicative (classe, fonction, module ...) doit être fermée à la modification directe mais ouverte à l'extension"
    },
  },
  {
    question: {
      title: "LSP: Liskov substitution principle)",
      content: ""
    },
    answer: {
      title: "Substitution de Liskov",
      content:
          "une instance de type T doit pouvoir être remplacée par une instance de type G, tel que G sous-type de T, sans que cela ne modifie la cohérence du programme"
    },
  },
  {
    question: {
      title: "ISP: Interface segregation principle",
      content: "Ségrégation des interfaces"
    },
    answer: {
      title: "",
      content:
        "préférer plusieurs interfaces spécifiques pour chaque client plutôt qu'une seule interface générale"
    },
  },
  {
    question: {
      title: "DIP: Dependency inversion principle",
      content: "Inversion des dépendances"
    },
    answer: {
      title: "",
      content:
        "il faut dépendre des abstractions, pas des implémentations"
    },
  },
  {
    question: {
      title: "Loi de Déméter",
      content: "Principe de connaissance minimale"
    },
    answer: {
      title: "« Ne parlez qu'à vos amis immédiats »",
      content:
        "pour les fonctions requiert que toute méthode {\\displaystyle M}M d'un objet {\\displaystyle O}O peut simplement invoquer les méthodes des types suivants d'objets :\n" +
        "\n" +
        "{\\displaystyle O}O lui-même\n" +
        "les paramètres de {\\displaystyle M}M\n" +
        "les objets que {\\displaystyle M}M crée/instancie\n" +
        "les objets membres de {\\displaystyle O}O"
    },
  },
  {
    question: {
      title: "Avantage de la Loi de Déméter",
      content: ""
    },
    answer: {
      title: "",
      content:
        "L'avantage de suivre la règle de Déméter est que le logiciel résultat est plus maintenable et plus adaptable." +
        " Puisque les objets sont moins dépendants de la structure interne des autres objets, ceux-ci peuvent être changés sans changer le code de leurs appelants"
    },
  },
  {
    question: {
      title: "Inconvénient de la Loi de Déméter",
      content: ""
    },
    answer: {
      title: "",
      content:
        "Un désavantage de la règle de Déméter est qu'elle requiert l'écriture d'un grand nombre de petites méthodes \"wrapper\" pour propager les appels de méthodes à leurs composants. " +
        "Cela peut augmenter le temps de développement initial, accroître l'espace mémoire utilisé, et notablement diminuer les performances."
    },
  },
  {
    question: {
      title: "Splitter vs Lumper",
      content: ""
    },
    answer: {
      title: "",
      content:
        ""
    },
  },

  {
    question: {
      title: "KISS",
      content: ""
    },
    answer: {
      title: "",
      content:
        ""
    },
  },

  {
    question: {
      title: "DRY",
      content: ""
    },
    answer: {
      title: "",
      content:
        ""
    },
  },

  {
    question: {
      title: "YAGNI",
      content: ""
    },
    answer: {
      title: "",
      content:
        ""
    },
  },
  {
    question: {
      title: "GRASP ",
      content: "General responsibility assignment software patterns"
    },
    answer: {
      title: "",
      content:
        "https://fr.wikipedia.org/wiki/GRASP_(programmation)"
    },
  },
  {
    question: {
      title: "SLAP",
      content: "Single Level of Abstraction Principle\n"
    },
    answer: {
      title: "Don’t mix levels of abstraction !\n",
      content:
        "It is difficult to read the code when you have to jump mentally between abstraction levels, which is what the SLAP principle tries to avoid.\n" +
        "Functions should do just one thing, and they should do it well.\n" +
        "— Robert C. Martin\n"
    },
  },
];

const App = () => <div className="App">
  <Tabs>
    <TabList>
      <Tab>Carte seule</Tab>
      <Tab>Liste</Tab>
      <Tab>Deck</Tab>
    </TabList>

    <TabPanel>
      <FlipCard questionAndAnswer={{
        question: {title: 'Comment se souvenir de tout pour quasiment toujours ?'},
        answer: {title: 'Utiliser le mécanisme de la répétition espacée, et des flip-cards'},
      }}/>
    </TabPanel>
    <TabPanel>
      <FlipCards questionsAndAnswers={questionsAndAnswers}/>
    </TabPanel>
    <TabPanel>
      <p>TODO : un deck n'est pas une liste</p>
    </TabPanel>
  </Tabs>
</div>;

export default App;
