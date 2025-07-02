import { useState } from 'react'
import { createPortal } from 'react-dom'
import dynamic from 'next/dynamic';
import { CloseSquare } from 'iconsax-react';
import Image from 'next/image';

const MyPDFViewer = dynamic(() => import('@/components/molecules/MyPDFViewer'), { ssr: false });

export default function Modal({ onClose }) {
  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-[99] text-black">
      <div className="bg-white p-6 rounded w-[80vw]">
        {/* Top Bar */}
        <div className='flex justify-between bg-black/50 py-2 px-4 text-white items-center'>
          <div>
            <h2>Modal</h2>
          </div>
          <button onClick={onClose}><CloseSquare size={32}/></button>
        </div>
        <div className='flex flex-row'>
          <div className='basis-1/2 max-h-[80vh] flex justify-center items-center'>
            <Image src="/storage/images/1.jpeg" width={100} height={100} className='w-[50%] object-cover' alt="" />
          </div>
          <div className='basis-1/2'>
            <MyPDFViewer />
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}