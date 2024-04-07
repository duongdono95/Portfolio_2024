import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Provider from "@/GlobalStyles/Provider";
import Head from "next/head";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duong Dono",
  description: "Duong Dono Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning={true}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        suppressContentEditableWarning={true}
        style={{
          minHeight: "100vh",
          backgroundColor: "black",
        }}
        className={inter.className}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
