import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          {/* Minimalist Black & White Background */}
          <div className="fixed inset-0 z-[-2] bg-white dark:bg-black"></div>
          {/* Grain texture overlay */}
          <div className="pointer-events-none fixed inset-0 z-[-1] opacity-[0.025] dark:opacity-[0.04]" style={{ backgroundImage: "url('/noise.svg')", backgroundSize: "200px 200px" }} aria-hidden="true"></div>
          
          <Aoscompo>
            {children}
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
