"use client"
import Image from "next/image";
import { ArrowLeft2, LogoutCurve, ArrowDown2, Home3, ProfileAdd, WalletMinus, WalletAdd1, Cards } from "iconsax-react";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


// Komponen HoverDropdown
const HoverDropdown = ({ items, position = 'right' }) => {
  return (
    <div 
      className={`absolute z-50 bg-white dark:bg-dark_net-pri shadow-lg rounded-xl 
      ${position === 'right' ? 'left-full ml-2' : 'right-full mr-2'} 
      top-0 min-w-[200px] py-2`}
    >
      {items.map((item, index) => (
        <div 
          key={index} 
          className="px-4 py-2 hover:bg-pri-main hover:text-white cursor-pointer"
          onClick={() => window.location.href = item.url}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

// Komponen SidebarDropdown
const SidebarDropdown = ({ items, open }) => {
  const pathname = usePathname();
  const [shouldRenderText, setShouldRenderText] = useState(open);

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => setShouldRenderText(true), 300);
      return () => clearTimeout(timeout);
    } else {
      setShouldRenderText(false);
    }
  }, [open]);

  return (
    <div>
      {items.map((item, index) => {
        const isActive = pathname.startsWith(item.url);
        return (
          <a
            key={index}
            href={item.url}
            className={`block p-2 pl-8 text-sm rounded-xl transition 
              ${isActive ? 'text-pri-main dark:text-pri-border' : 'text-black dark:text-white hover:text-pri-main'}
            `}
          >
            {shouldRenderText && <>- {item.label}</>}
          </a>
        );
      })}
    </div>
  );
};

// Komponen SidebarItem
const SidebarItem = ({ 
  title, 
  icon: Icon, 
  dropdownItems, 
  colorIcon, 
  url, 
  open = true 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isActive = url && pathname === url;
  const isDropdownActive = dropdownItems?.some(item => pathname.startsWith(item.url));
  const [shouldRenderText, setShouldRenderText] = useState(open);

  useEffect(() => {
    if (isDropdownActive) {
      setIsOpen(true);
    }
  }, [isDropdownActive]);

  const handleClick = () => {
    if (dropdownItems) {
      if (open) {
        setIsOpen(!isOpen);
      } else {
        setIsHovered(!isHovered);
      }
    } else if (url) {
      router.push(url);
    }
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => setShouldRenderText(true), 300);
    } else {
      setShouldRenderText(false);
    }
  }, [open]);

  return (
    <div 
      className={`${montserrat.className} relative`}
      onMouseEnter={() => !open && dropdownItems && setIsHovered(true)}
      onMouseLeave={() => !open && dropdownItems && setIsHovered(false)}
    >
      <button
        className={`w-full flex items-center p-2 rounded-xl transition relative ${
          isActive || isDropdownActive 
            ? 'bg-pri-main text-netral-0' 
            : 'text-black dark:text-white hover:bg-pri-main hover:text-netral-0'
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center">
          <Icon 
            size="25" 
            className="mr-2" 
            variant="Bold" 
            color={colorIcon}
          />
          {shouldRenderText && <span className="transition-opacity font-semibold">{title}</span>}
        </div>

        {dropdownItems && open && (
          <span className="ml-auto">
            {isOpen ? (
              <ArrowDown2 size="20" color="currentColor" variant="Bold"/>
            ) : (
              <ArrowRight2 size="20" color="currentColor" variant="Bold"/>
            )}
          </span>
        )}
      </button>
      
      {dropdownItems && isOpen && open && (
        <SidebarDropdown items={dropdownItems} open={open}/>
      )}

      {dropdownItems && !open && isHovered && (
        <HoverDropdown 
          items={dropdownItems} 
          position="right"
        />
      )}
    </div>
  );
};

// Komponen LogoutButton
const LogoutButton = ({ title, icon: Icon, colorIcon, open = true, onConfirm }) => {
  const [shouldRenderText, setShouldRenderText] = useState(open);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setShouldRenderText(true), 300); 
    } else {
      setShouldRenderText(false); 
    }
  }, [open]);

  return (
    <button
      className={`${
        open ? "flex" : "hidden md:flex"
      } w-full items-center p-2 text-err-main dark:text-[#ff4022] hover:bg-err-main rounded-xl hover:text-netral-0 dark:hover:text-slate-100 transition`}
      onClick={onConfirm}
    >
      <div className="flex items-center">
        <Icon size="25" className="mr-2" variant="Bold" color={colorIcon} />
        {loading ? "Proses logout...." : shouldRenderText && <span className="transition-opacity text-[#e40514] font-semibold">{title}</span>}
      </div>
    </button>
  );
};

// Komponen LogOutPopUp (placeholder - sesuaikan dengan implementasi Anda)
const LogOutPopUp = ({ onCancel, onConfirm, isLoading }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Konfirmasi Logout</h3>
      <p className="mb-6">Apakah Anda yakin ingin keluar?</p>
      <div className="flex gap-4 justify-end">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          disabled={isLoading}
        >
          Batal
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Logout"}
        </button>
      </div>
    </div>
  );
};

// Komponen Utama SideBar
export default function SideBar({ isOpen, toggleSidebar }) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false);

  const handleLogout = () => {
    setLogoutOpen(true);
  };
  
  const confirmLogOut = async () => {
    setLoading(true);
    try {
      // Implementasi logout sesuai kebutuhan
      // const response = await logout(); 
      // if(response){
      //   sessionStorage.setItem("log_out", response.message)
      //   router.push("/login")
      // }
      
      // Sementara untuk demo
      setTimeout(() => {
        sessionStorage.clear();
        router.push("/login");
      }, 1000);
      
    } catch (error) {
      console.error("Gagal logout:", error);
    } finally {
      setLoading(false);
      setLogoutOpen(false);
    }
  };

  return (
    <>
      {/* Pop-up Konfirmasi Logout */}
      {isLogoutOpen && (
        <div className="z-30 fixed inset-0 bg-black/50 flex justify-center items-center">
          <LogOutPopUp
            onCancel={() => setLogoutOpen(false)}
            onConfirm={confirmLogOut}
            isLoading={isLoading}
          />
        </div>
      )}

      <div
        className={`${
          isOpen ? "w-52 lg:w-64" : "w-5 md:w-16 lg:w-20"
        } fixed bg-[#f2fffa] dark:bg-dark_net-ter p-3 lg:p-5 min-h-screen transition-all duration-300 ease-in-out z-20`}
      >
        {/* Toggle Button */}
        <div
          className={`absolute top-8 ${
            isOpen ? "-right-5" : "-right-6 rotate-180"
          } p-2 rounded-full bg-pri-main cursor-pointer transition-transform duration-300 ease-in-out`}
          onClick={toggleSidebar}
        >
          <ArrowLeft2 color="white" className="w-[18px] md:w-[18px] lg:w-[22px]" />
        </div>

        {/* Logo dan Judul */}
        <div className={`${
            isOpen ? "flex" : "hidden md:flex"
          } gap-4 items-center justify-center`}>
          <Image src="/svg/e-mifda.svg" alt="e-mifda" width={50} height={50} priority />
          <h1
            className={`text-[#146168] text-xl font-semibold transition-all duration-300 ease-in-out ${
              !isOpen && "hidden"
            }`}
          >
            E-mifda
          </h1>
        </div>

        {/* Menu Items */}
        <div className={`${
            isOpen ? "flex" : "hidden md:flex"
          } flex-col pt-5 pb-3 gap-4`}>
          
          {/* Dashboard */}
          <SidebarItem 
            title="Dashboard" 
            icon={Home3} 
            colorIcon="#146168" 
            url="/dashboard" 
            open={isOpen} 
          />

          {/* Pendaftaran */}
          <SidebarItem 
            title="Pendaftaran" 
            icon={ProfileAdd} 
            colorIcon="#146168" 
            url="/pendaftaran" 
            open={isOpen} 
          />

          {/* Pemasukan */}
          <SidebarItem 
            title="Pemasukan" 
            icon={WalletAdd1} 
            colorIcon="#146168" 
            url="/pemasukan" 
            open={isOpen} 
          />

          {/* Pengeluaran */}
          <SidebarItem 
            title="Pengeluaran" 
            icon={WalletMinus} 
            colorIcon="#146168" 
            url="/pengeluaran" 
            open={isOpen} 
          />
          
          {/* Rekening */}
          <SidebarItem 
            title="Rekening" 
            icon={Cards} 
            colorIcon="#146168" 
            url="/rekening" 
            open={isOpen} 
          />

          {/* Kepegawaian
          <SidebarItem
            title="Kepegawaian"
            icon={Profile2User}
            colorIcon="currentColor"
            open={isOpen}
            dropdownItems={[
              { label: "Data Pegawai", url: "/kepegawaian/data-pegawai"},
              { label: "Presensi Pegawai", url: "/kepegawaian/presensi-pegawai"},
              { label: "Ruangan", url: "/kepegawaian/ruangan"},
            ]}
          /> */}

        </div>
        
        {/* Theme Switcher */}
        <div className={`${
            isOpen ? "flex" : "hidden md:flex"
          } mb-7`}>
          {/* <ThemeSwitcher open={isOpen}/> */}
        </div>
        
        {/* Logout Button */}
        <LogoutButton 
          title='Log out' 
          open={isOpen} 
          icon={LogoutCurve} 
          colorIcon="#dc1010"  
          // onConfirm={handleLogout}
        />
      </div>
    </>
  );
}