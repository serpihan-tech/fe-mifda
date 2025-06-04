"use client"
import { useState, useRef, useEffect } from 'react';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function Periode() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPeriode, setSelectedPeriode] = useState('Periode 2024/2025');
  const dropdownRef = useRef(null);

  const periodeOptions = [
    'Periode 2024/2025',
    'Periode 2023/2024',
    'Periode 2022/2023',
    'Periode 2021/2022',
    'Periode 2020/2021'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${montserrat.className} px-5 py-3 bg-[#146168] h-[46px] text-[#f9fbff] text-lg font-semibold rounded-[15px] inline-flex items-center hover:bg-[#0f4d52] transition-colors`}
      >
        {selectedPeriode}
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-[15px] shadow-lg overflow-hidden z-10">
          {periodeOptions.map((periode, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedPeriode(periode);
                setIsOpen(false);
              }}
              className={`${montserrat.className} w-full px-5 py-3 text-left text-lg font-medium hover:bg-[#146168] hover:text-white transition-colors
                ${selectedPeriode === periode ? 'bg-[#146168] text-white' : 'text-gray-700'}`}
            >
              {periode}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};