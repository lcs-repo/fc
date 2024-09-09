export interface Flashcard {
    question: string;
    answer: string;
  }
  
  export interface FlashcardTopics {
    [key: string]: Flashcard[];
  }