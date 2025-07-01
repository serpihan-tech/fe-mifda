'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { usePdfViewer } from '@/stores/userPdfViewer';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function MyPDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const { pageNumber, scrollRef } = usePdfViewer(numPages);

  return (
    <div className="max-w-fit mx-auto">
      <div
        ref={scrollRef}
        className="h-[80vh] overflow-y-scroll border rounded shadow"
      >
        <Document
          file="/storage/pdf/003.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {numPages ? (
            Array.from({ length: numPages }, (_, index) => (
              <Page key={index} pageNumber={index + 1} />
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
