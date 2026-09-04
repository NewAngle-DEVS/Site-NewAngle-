import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://newangle-devs.github.io/Site-NewAngle-/'),
  title: 'NewAngle — Um novo ângulo para sua presença digital',
  description: 'Criamos e redesenhamos experiências digitais que transformam a forma como sua empresa é percebida.',
  keywords: ['criação de sites', 'redesign de sites', 'sites institucionais', 'web design', 'landing pages'],
  openGraph: {
    title: 'NewAngle — Um novo ângulo para sua presença digital',
    description: 'Seu negócio evoluiu. Seu site também deveria.',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: 'https://newangle-devs.github.io/Site-NewAngle-/og.png', width: 1536, height: 1024, alt: 'NewAngle — Um novo ângulo para sua presença digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NewAngle — Um novo ângulo para sua presença digital',
    description: 'Seu negócio evoluiu. Seu site também deveria.',
    images: ['https://newangle-devs.github.io/Site-NewAngle-/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
