import React from 'react';
import './App.css';
import FlipCards from "./components/flip-card-list/FlipCards";

const questionsAndAnswers = [
  {
    answer: {
      title: "AWS Health Events - Comment recevoir les alertes de santé aws",
      content: "Les alertes de santé vous informent d'un changement, qui a ou qui aura, un impact sur ce que vous avez déployé sur AWS. C'est pourquoi il important de les prendre en charge au plus tôt. Pour ce faire nous vous présentons la solution aws health events."
    },
    question: {
      title: "A quoi servent les AWS Health events ?"
    }
  },
  {
    answer: {
      title: "AWS Health Events - Comment recevoir les alertes de santé aws",
      content: "Les alertes de santé vous informent d'un changement, qui a ou qui aura, un impact sur ce que vous avez déployé sur AWS. C'est pourquoi il important de les prendre en charge au plus tôt. Pour ce faire nous vous présentons la solution aws health events."
    },
    question: {
      title: "Comment savoir si ce que je déploie sur AWS aura un impact ?"
    }
  },
];

const App = () => <div className="App">
  <FlipCards questionsAndAnswers={questionsAndAnswers}/>
</div>;

export default App;
