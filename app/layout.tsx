import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Chatbot from "./components/Chatbot";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Xplendev',
  description: '© 2023 XplenDev | Code By Luis Rivera Araya',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Xplendev</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />

        {/* Script de Metricool - Seguimiento de Analíticas */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function loadScript(a){
                var b=document.getElementsByTagName("head")[0],
                c=document.createElement("script");
                c.type="text/javascript";
                c.src="https://tracker.metricool.com/resources/be.js";
                c.onreadystatechange=a;
                c.onload=a;
                b.appendChild(c);
              }
              loadScript(function(){
                if (window.beTracker) {
                  beTracker.t({hash:"de38f1094602e400e52e7a85a6a20aff"});
                }
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <main className="mx-w-4xl mx-auto">
          {children}
          {/* Chatbot Xelisse integrado */}
          <Chatbot />
        </main>
      </body>
    </html>
  );
}
