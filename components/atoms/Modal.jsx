import { useState } from 'react'
import { createPortal } from 'react-dom'
import dynamic from 'next/dynamic';


export default function Modal({ onClose }) {
  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-[99] text-black">
      <div className="bg-white p-6 rounded">
        <h2>Modal</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <div>
        <MyPDFViewer />
      </div>
    </div>,
    document.body
  )
}