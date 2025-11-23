import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AmbientAudio } from "@/components/ambient-audio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel"
});

export const metadata: Metadata = {
  title: "Crime Scene Investigation Dashboard",
  description:
    "Step into an immersive investigative workspace with forensic files, timelines, moodboard, and suspect analysis."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cinzel.variable} font-sans bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AmbientAudio />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
