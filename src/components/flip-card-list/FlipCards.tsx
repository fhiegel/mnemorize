import React from "react";
import './FlipCards.scss';
import FlipCard, { QuestionAndAnswer } from "../flip-card/FlipCard";

export type QuestionAndAnswers = Array<QuestionAndAnswer>;

type Props = {
  questionsAndAnswers: QuestionAndAnswers
}

const FlipCards = (props: Props) => {
  const { questionsAndAnswers } = props
  return (
    <div className="flip-cards">
      {questionsAndAnswers.map((questionAndAnswer, index) =>
        <FlipCard key={index}
                  questionAndAnswer={questionAndAnswer}/>
      )}
    </div>
  );
}

export default FlipCards;

