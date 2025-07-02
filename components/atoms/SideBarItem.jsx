"use client";

import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Komponen SidebarItem
export default function SidebarItem({ title, icon: Icon, url, subItems = [] }) {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubItems = subItems.length > 0;

  const handleClick = () => {
    if (hasSubItems) {
      setIsExpanded(!isExpanded);
    } else if (url) {
      router.push(url);
    }
  };

  const handleSubItemClick = (subItemUrl) => {
    if (subItemUrl) {
      router.push(subItemUrl);
    }
  };

  return (
    <div className={`${montserrat.className} px-5 py-2 bg-[#f2fffa]`}>
      {/* Main Item */}
      <button
        className="group w-full h-11 px-4 py-2 bg-[#f2fffa] hover:bg-[#146168] text-[#146168] hover:text-white rounded-2xl inline-flex justify-between items-center transition-all duration-300 ease-in-out"
        onClick={handleClick}
      >
        <div className="flex justify-start items-center gap-5">
          <div className="flex items-center">
            <Icon
              size="25"
              className="mr-2"
              variant="Bold"
              color="currentColor"
            />
          </div>
          <div className="text-base font-semibold">
            {title}
          </div>
        </div>
        
        {/* Arrow Icon */}
        {hasSubItems && (
          <div className="transition-transform duration-300 ease-in-out">
            {isExpanded ? (
              <ArrowUp2 size="20" color="currentColor" variant="Bold"/>
            ) : (
              <ArrowDown2 size="20" color="currentColor" variant="Bold"/>
            )}
          </div>
        )}
      </button>

      {/* Sub Items */}
      {hasSubItems && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-2 ml-12 space-y-1">
            {subItems.map((subItem, index) => (
              <button
                key={index}
                className="w-full px-4 py-2 text-left text-[#146168] hover:font-semibold transition-all duration-200 ease-in-out text-sm font-medium group"
                onClick={() => handleSubItemClick(subItem.url)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-0.5 bg-current opacity-60 group-hover:opacity-100"></div>
                  {subItem.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}