// Import the global CSS file that applies styles across the entire application
import "./globals.css";
// Import the Inter font from Google Fonts using Next.js font optimization
import { Inter } from "next/font/google";


// Export metadata for the application that affects SEO and browser display
// This is a Next.js specific feature for App Router
export const metadata = {
  title: "Appointly", // Sets the title that appears in browser tabs
  description: "Appointly is a platform for booking appointments", // Used for SEO and link previews
};

// Initialize the Inter font with Latin character subset
// Next.js optimizes font loading for better performance and no layout shift
const inter = Inter({ subsets: ["latin"] });

// Root layout component that wraps around all pages in the application
// This component provides the HTML structure for every page
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 
        Apply the Inter font family and enable font smoothing with antialiased
        The children prop represents the page content that will be rendered here
      */}
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
