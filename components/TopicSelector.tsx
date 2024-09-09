import React from 'react';
import { FlashcardTopics } from '../types';

interface TopicSelectorProps {
  topics: Array<keyof FlashcardTopics>;
  onSelectTopic: (topic: keyof FlashcardTopics) => void;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ topics, onSelectTopic }) => {
  return (
    <div className="topic-selector">
      {topics.map((topic) => (
        <button
          key={topic}
          onClick={() => onSelectTopic(topic)}
          className="px-4 py-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {topic}
        </button>
      ))}
    </div>
  );
};

export default TopicSelector;