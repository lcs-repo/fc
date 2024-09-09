'use client';

import { useState, useEffect } from 'react';

interface FlashcardProps {
  question: string;
  answer: string;
  onNext: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer, onNext }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [content, setContent] = useState(question);

  useEffect(() => {
    setIsFlipped(false);
    setContent(question);
  }, [question]);

  const handleClick = () => {
    if (isFlipped) {
      onNext();
    } else {
      setIsFlipped(true);
      setTimeout(() => setContent(answer), 150);
    }
  };

  return (
    <div className="flashcard-wrapper" onClick={handleClick}>
      <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-face card-front">
          <div className="card-content">{content}</div>
        </div>
        <div className="card-face card-back">
          <div className="card-content">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;