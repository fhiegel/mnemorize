import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FlipCards from "./components/flip-card-list/FlipCards";
import FlipCard from "./components/flip-card/FlipCard";
import './App.css';

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
  <Tabs>
    <TabList>
      <Tab>Carte seule</Tab>
      <Tab>Liste</Tab>
      <Tab>Deck</Tab>
    </TabList>

    <TabPanel>
      <FlipCard questionAndAnswer={{
        question: { title: 'Comment se souvenir de tout pour quasiment toujours ?' },
        answer: { title: 'Utiliser le mécanisme de la répétition espacée, et des flip-cards' },
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
