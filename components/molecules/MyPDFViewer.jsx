'use client';

import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function MyPDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const containerRef = useRef(null);
  const pageRefs = useRef([]);
  // const [totalPage, setTotalPage] = useState([]);

  // 🔄 Update lebar container
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // 👁️ Deteksi halaman aktif pakai IntersectionObserver
  useEffect(() => {
    if (!numPages) return;

    const observer = new IntersectionObserver((entries) => {
      const visiblePages = entries
        .filter(entry => entry.isIntersecting && entry.intersectionRatio > 0.5)
        .map(entry => Number(entry.target.getAttribute('data-page')));
      if (visiblePages.length > 0) {
        const current = Math.min(...visiblePages);
        setPageNumber(current);
      }
    }, {
      root: containerRef.current,
      threshold: 0.51,
    });

    pageRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, [numPages, setPageNumber]);

  return (
    <div className="w-full max-w-[50vw] mx-auto">
      <div
        ref={containerRef}
        className="h-[80vh] overflow-y-scroll overflow-x-hidden border rounded shadow"
      >
        <Document
          file="/storage/pdf/003.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {numPages ? (
            Array.from({ length: numPages }, (_, index) => (
              <div
                key={index}
                ref={el => pageRefs.current[index] = el}
                data-page={index + 1}
              >
                <Page
                  pageNumber={index + 1}
                  width={containerWidth}
                  onRenderSuccess={(page) => {
                    const { width, height } = page;
                    // console.log(`Ukuran halaman ${index + 1}:`, width, height);
                    setTotalPage(prevPages => [...prevPages, { width, height }]);
                  }}
                />
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
