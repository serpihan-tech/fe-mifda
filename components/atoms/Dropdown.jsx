"use client";
import React, { useState, useRef, useEffect } from "react";
import Text from "@/components/atoms/Text";

export default function Dropdown({ 
  options = [], 
  placeholder = "Pilih opsi...",
  onSelect 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup function
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button 
        onClick={toggleDropdown}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="flex items-center justify-between">
          <Text className={selectedOption ? "text-[#394142]" : "text-[#616768] text-base font-normal"}>
            {selectedOption ? selectedOption.label : placeholder}
          </Text>
          <svg 
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
          {options.length === 0 ? (
            <div className="px-4 py-2 text-gray-500">
              Tidak ada opsi tersedia
            </div>
          ) : (
            options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`px-4 py-2 hover:bg-[#c5e6e4] cursor-pointer text-[#616768] ${
                  selectedOption?.value === option.value ? 'bg-[#c5e6e4] text-[#146168]' : ''
                }`}
              >
                {option.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}