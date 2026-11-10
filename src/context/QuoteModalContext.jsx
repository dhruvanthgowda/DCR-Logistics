import React, { createContext, useContext, useState } from 'react';

const QuoteModalContext = createContext();

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialService, setInitialService] = useState('');

  const openQuoteModal = (service = '') => {
    setInitialService(service);
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setInitialService('');
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, initialService, openQuoteModal, closeQuoteModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
}

