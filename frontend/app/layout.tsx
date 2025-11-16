import { Montserrat } from "next/font/google";
import "./globals.css";

// Load Montserrat with Next.js optimization
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // optional
});

export const metadata = {
  title: "Banca Sistema",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}    
      </body>
    </html>
  );
}
