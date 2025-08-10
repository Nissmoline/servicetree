import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import PageTransition from "@/components/page-transition";
import { DynamicLangAttribute } from "@/components/dynamic-lang-attribute";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Service Tree Consulting - Fresh Approach to Customer Service Excellence",
  description: "Service Tree Consulting offers innovative solutions and personalized attention for call center services and customer support. A dynamic team ready to help your business grow.",
  icons: {
    icon: '/newLogo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <DynamicLangAttribute />
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
