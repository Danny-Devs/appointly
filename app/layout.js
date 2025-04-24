// Import the global CSS file that applies styles across the entire application
import "./globals.css";
// Import the Inter font from Google Fonts using Next.js font optimization
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
// Export metadata for the application that affects SEO and browser display
// This is a Next.js specific feature for App Router
export const metadata = {
  title: "Appointly", // Sets the title that appears in browser tabs
  description: "Appointly is a platform for booking meetings", // Used for SEO and link previews
};

// Initialize the Inter font with Latin character subset
// Next.js optimizes font loading for better performance and no layout shift
const inter = Inter({ subsets: ["latin"] });

// Root layout component that wraps around all pages in the application
// This component provides the HTML structure for every page
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* 
        Apply the Inter font family and enable font smoothing with antialiased
        The children prop represents the page content that will be rendered here
      */}
        <body
          className={`${inter.className} antialiased flex flex-col min-h-screen`}
        >
          {/* Header */}
          <Header />
          <main className="bg-gradient-to-b from-blue-50 to-white flex-grow">
            {children}
          </main>
          {/* Footer */}
          <footer className="bg-blue-100 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with ❤️ by Daniel Ahn</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
