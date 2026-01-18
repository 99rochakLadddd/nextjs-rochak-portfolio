import type { Metadata } from "next";
import { Geist_Mono, Play, Poppins} from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import localFont from 'next/font/local'
import './globals.css';
import { ThemeProvider } from "next-themes"


/* Fonts */

const rosmatika = localFont({
  src: '../public/fonts/Rosmatika-Bold.woff2',
  variable: '--font-rosmatika',
  display: 'swap',
});
const play = Play({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-play',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${play.variable}
          ${poppins.variable}
          ${geistMono.variable}
          ${rosmatika.variable}
          antialiased
        `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
