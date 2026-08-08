import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LegalBot",
  description:
    "AI Consumer Legal Assistant powered by Gemini and RAG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,

            style: {
              background: "#ffffff",
              color: "#0f172a",
              border: "1px solid #e2e8f0",
              borderRadius: "14px",
              fontSize: "14px",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.08)",
            },

            success: {
              iconTheme: {
                primary: "#16a34a",
                secondary: "#ffffff",
              },
            },

            error: {
              iconTheme: {
                primary: "#dc2626",
                secondary: "#ffffff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}