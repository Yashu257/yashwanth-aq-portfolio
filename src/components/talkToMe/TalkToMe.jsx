import React, { useState, useEffect } from 'react';

const TalkToMe = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);
  let recognition;

  if ('webkitSpeechRecognition' in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
  }

  const startListening = () => {
    if (recognition) {
      setIsListening(true);
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      setIsListening(false);
      recognition.stop();
    }
  };

  if (recognition) {
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  }

  return (
    <div className="text-center py-10 bg-darkBrown text-white">
      <h2 className="text-3xl font-bold mb-4 text-orange">Talk to Me</h2>
      <p className="mb-4 text-lightGrey">Click the mic and speak, I’ll listen 👂</p>
      <button
        onClick={isListening ? stopListening : startListening}
        className="bg-cyan text-white px-6 py-2 rounded hover:scale-105 duration-300"
      >
        {isListening ? '🛑 Stop Listening' : '🎤 Start Talking'}
      </button>
      <p className="mt-6 text-lg">{text}</p>
    </div>
  );
};

export default TalkToMe;
