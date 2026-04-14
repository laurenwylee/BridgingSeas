import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bridgingseas.com"),
  title: {
    default: "Bridging Seas",
    template: "%s | Bridging Seas",
  },
  description:
    "Bridging Seas is a youth-led global organization connecting students across the Asian diaspora through cultural exchange, community, and friendship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
          <main className="flex-1">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
