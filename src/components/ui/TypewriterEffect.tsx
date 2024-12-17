'use client';

import { useEffect, useState, useCallback } from 'react';

const TYPING_SPEED = 50;
const DELETING_SPEED = 15;
const PAUSE_TIME = 2000;

interface TypewriterEffectProps {
  words: string[];
  className?: string;
}

export function TypewriterEffect({ words, className = '' }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const type = useCallback(() => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        const nextText = currentWord.slice(0, currentText.length + 1);
        setCurrentText(nextText);
      } else {
        setTimeout(() => setIsDeleting(true), PAUSE_TIME); // Pause at end of word
        return;
      }
    } else {
      if (currentText.length > 0) {
        const nextText = currentWord.slice(0, currentText.length - 1);
        setCurrentText(nextText);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [currentText, isDeleting, currentWordIndex, words]);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        type();
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timer);
  }, [type, isDeleting]);

  return <div className={className}>{currentText || '\u00A0'}</div>;
}
