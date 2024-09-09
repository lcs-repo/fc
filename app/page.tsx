'use client';

import { useState } from 'react';
import Flashcard from '../components/Flashcard';

const flashcards = [
  { question: "Teratogen: Renal Damage", answer: "ACE inhibitors" },
  { question: "Teratogen: Hypocalvaria", answer: "ACE inhibitors" },
  { question: "Teratogen: Multiple major malformations", answer: "Aminopterin" },
  { question: "Teratogen: Suspected abnormal developmental patterns", answer: "Amphetamines" },
  { question: "Teratogen: Decreased School performance", answer: "Amphetamines" },
  { question: "Teratogen: Masculinization of female fetus", answer: "Androgens" },
  { question: "Teratogen: Neonatal withdrawal symptoms have been reported ina few cases with clomipramine, desipramine, and imipramine", answer: "Antidepressants, TCA" },
  { question: "Teratogen: Chronic use can lead to neonatal dependence", answer: "Barbiturates" },
  { question: "Teratogen: Various major malformations", answer: "Busulfan" },
  { question: "Teratogen: Neural Tube Defects", answer: "Carbamazepine" },
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