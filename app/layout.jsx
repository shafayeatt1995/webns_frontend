import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import { AuthProvider } from "../context/authProvider";
import { ThemeProvider } from "../context/themeProvider";
import { SearchProvider } from "../context/searchProvider";

const font = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "WEBNS Support Ticketing System",
  description: "WEBNS Support Ticketing System",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated">
      <body className={`${font.className} antialiased`}>
        <AuthProvider>
          <SearchProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </SearchProvider>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
