import type { Metadata } from 'next';
import { DM_Sans, Inter, JetBrains_Mono, Space_Grotesk, Syne } from 'next/font/google';
import './globals.scss';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'YOLO STUDIO',
  description: 'Advanced Training Wizard for YOLO Models',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {children}
      </body>
    </html>
  );
}
