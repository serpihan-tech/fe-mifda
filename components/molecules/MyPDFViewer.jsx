'use client';

import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function MyPDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [ pageNumber, setPageNumber ] = useState(1);
  const containerRef = useRef(null);
  const pageRefs = useRef([]);

  const handleObserve = (entries) => {
    const visiblePages = entries
      .filter(entry => entry.isIntersecting && entry.intersectionRatio > 0.5)
      .map(entry => Number(entry.target.getAttribute('data-page')));

    if (visiblePages.length > 0) {
      const topMost = Math.min(...visiblePages);
      setPageNumber(topMost);
    }
  };

  useEffect(() => {
    if (!numPages) return;

    const observer = new IntersectionObserver(handleObserve, {
      root: containerRef.current,
      threshold: 0.51,
    });

    pageRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [numPages]);

  return (
    <div className="max-w-fit mx-auto">
      <div
        ref={containerRef}
        className="h-[80vh] overflow-y-scroll border rounded shadow"
      >
        <Document
          file="/storage/pdf/003.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {numPages ? (
            Array.from({ length: numPages }, (_, index) => (
              <div
                key={index}
                ref={(el) => (pageRefs.current[index] = el)}
                data-page={index + 1}
              >
                <Page pageNumber={index + 1} />
              </div>
            ))
          ) : (
            <p className="text-center py-4">Loading pages...</p>
          )}
        </Document>
      </div>
      <p className="text-center mt-4 text-sm text-gray-600">
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
