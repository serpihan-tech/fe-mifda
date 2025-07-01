// hooks/usePdfViewer.js
import { useEffect, useRef, useState } from 'react';

export function usePdfViewer(numPages) {
  const [pageNumber, setPageNumber] = useState(1);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !numPages) return;

    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const { scrollTop, clientHeight, scrollHeight } = container;
        const pageHeight = scrollHeight / numPages;
        const middleY = scrollTop + clientHeight / 2;
        const page = Math.min(
          numPages,
          Math.max(1, Math.round(middleY / pageHeight))
        );
        setPageNumber(page);
      }, 100);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [numPages]);

  return { pageNumber, setPageNumber, scrollRef };
}
