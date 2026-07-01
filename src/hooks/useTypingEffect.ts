import { useEffect, useState } from "react";

export function useTypingEffect(words: string[], speed = 80, pause = 1400) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] ?? "";
    const isWordComplete = !isDeleting && letterIndex === currentWord.length;
    const isWordDeleted = isDeleting && letterIndex === 0;

    const timeout = window.setTimeout(
      () => {
        if (isWordComplete) {
          setIsDeleting(true);
          return;
        }

        if (isWordDeleted) {
          setIsDeleting(false);
          setWordIndex((index) => (index + 1) % words.length);
          return;
        }

        setLetterIndex((index) => index + (isDeleting ? -1 : 1));
      },
      isWordComplete ? pause : isDeleting ? speed / 2 : speed,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, letterIndex, pause, speed, wordIndex, words]);

  return (words[wordIndex] ?? "").slice(0, letterIndex);
}
