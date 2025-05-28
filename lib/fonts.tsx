import localFont from "next/font/local";

export const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const monserrat = localFont({
  src: "../app/fonts/MontserratVF.woff",
  variable: "--font-montserrat",
  weight: "100 900",
});

export const monserratItalic = localFont({
  src: "../app/fonts/MontserratItalicVF.woff",
  variable: "--font-montserrat-italic",
  weight: "100 900",
});

export const righteous = localFont({
  src: "../app/fonts/RighteousRegularVF.woff",
  variable: "--font-righteous",
});