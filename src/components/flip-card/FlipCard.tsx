import React, { useState } from "react";
import './FlipCard.scss';

export type QuestionOrAnswer = {
  title: string,
  content?: string
}

export type QuestionAndAnswer = {
  question: QuestionOrAnswer,
  answer: QuestionOrAnswer
}

type Props = {
  questionAndAnswer: QuestionAndAnswer
}

const FlipCard = (props: Props) => {
  const [face, setFace] = useState('front');
  const flip = () => setFace(face === 'front' ? 'back' : 'front');

  const { questionAndAnswer } = props;

  return (
    <div className="flip-card" onClick={() => flip()} data-face={face}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <FlipCardContent content={questionAndAnswer.question}/>
        </div>
        <div className="flip-card-back">
          <FlipCardContent content={questionAndAnswer.answer}/>
        </div>
      </div>
    </div>
  );
};

const FlipCardContent = (props: { content: QuestionOrAnswer }) => {
  const { title, content } = props.content
  return <>
    <h3>{title}</h3>
    {content && <p>{content}</p>}
  </>;
}

export default FlipCard