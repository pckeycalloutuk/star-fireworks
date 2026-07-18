import { Anton, Inter } from "next/font/google";

export const displayFont = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
