import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "WEBNS Support Ticketing System",
  description: "WEBNS Support Ticketing System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
