import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const bodyFont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    appearance={{
      elements: {
        formButtonPrimary: {
          fontSize: 14,
          textTransform: "none",
          backgroundColor: "#c69749",
          "&:hover, &:focus, &:active": {
            backgroundColor: "#8f6d35",
          },
        },
      },
      baseTheme: dark,
    }}
    >
      <html lang="en">
        <body className={bodyFont.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
