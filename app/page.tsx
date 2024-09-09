'use client';

import { useState } from 'react';
import Flashcard from '../components/Flashcard';

const flashcards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
];

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <main className="main">
      <h1 className="title">Flashcards</h1>
      <div className="flashcard-container">
        <Flashcard
          question={flashcards[currentCardIndex].question}
          answer={flashcards[currentCardIndex].answer}
          onNext={nextCard}
        />
      </div>
    </main>
  );
}