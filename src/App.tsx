import React, { useState, useRef } from 'react';
import ChatBot from './ChatBot';
import Trivia from './Trivia';
import { Sun, Moon, Bot, Brain } from 'lucide-react';
import { ThemeProvider, useTheme } from './ThemeContext';

function AppContent() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTriviaOpen, setIsTriviaOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const chatBotRef = useRef<{ focusInput: () => void } | null>(null);
  const triviaRef = useRef<{ focusInput: () => void } | null>(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setIsTriviaOpen(false);
    if (!isChatOpen) {
      setTimeout(() => chatBotRef.current?.focusInput(), 0);
    }
  };

  const toggleTrivia = () => {
    setIsTriviaOpen(!isTriviaOpen);
    setIsChatOpen(false);
    if (!isTriviaOpen) {
      setTimeout(() => triviaRef.current?.focusInput(), 0);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center relative p-4 transition-colors duration-200 ${theme === 'dark' ? 'bg-newport-700 text-newport-100' : 'bg-newport-100 text-newport-600'}`}>
      <h1 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-newport-300' : 'text-newport-500'}`}>
        Discover Newport Vermont
      </h1>
      <h2 className={`text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 max-w-2xl ${theme === 'dark' ? 'text-newport-300' : 'text-newport-400'}`}>
        Where Lake Memphremagog's pristine waters meet the rolling hills of the Northeast Kingdom, creating Vermont's most enchanting four-season destination
      </h2>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <button
          onClick={toggleChat}
          className="bg-newport-accent text-white px-6 py-3 rounded-full shadow-lg hover:bg-newport-500 transition-colors text-lg font-semibold flex items-center justify-center"
        >
          <Bot size={20} className="mr-2" />
          Explore Newport
        </button>
        
        <button
          onClick={toggleTrivia}
          className="bg-newport-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-newport-600 transition-colors text-lg font-semibold flex items-center justify-center"
        >
          <Brain size={20} className="mr-2" />
          Test Your Newport Knowledge
        </button>
      </div>
      
      {(isChatOpen || isTriviaOpen) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className={`w-11/12 max-w-4xl h-5/6 rounded-lg shadow-lg overflow-hidden flex flex-col ${theme === 'dark' ? 'bg-newport-600' : 'bg-newport-100'}`}>
            {isChatOpen && <ChatBot onClose={toggleChat} ref={chatBotRef} />}
            {isTriviaOpen && <Trivia onClose={toggleTrivia} ref={triviaRef} />}
          </div>
        </div>
      )}
      
      <button
        onClick={toggleTheme}
        className={`fixed top-2 right-2 md:top-4 md:right-4 p-2 rounded-full shadow-lg transition-colors ${theme === 'dark' ? 'bg-newport-600 text-yellow-300 hover:bg-newport-500' : 'bg-newport-200 text-newport-600 hover:bg-newport-300'}`}
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;