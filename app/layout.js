import { Inter } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics/GoogleAnalytics';

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://vivekgawande.in';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vivek Gawande',
    template: '%s | Vivek Gawande',
  },
  description:
    'Personal site of Vivek Gawande, a software engineer in Navi Mumbai. Side projects and writing about software.',
  keywords: [
    'Vivek Gawande',
    'Senior Software Engineer',
    'C#',
    '.NET',
    'React',
    'Full Stack Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Vivek Gawande' }],
  creator: 'Vivek Gawande',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Vivek Gawande',
    title: 'Vivek Gawande',
    description:
      'Personal site of Vivek Gawande, a software engineer in Navi Mumbai. Side projects and writing about software.',
  },
  twitter: {
    card: 'summary',
    title: 'Vivek Gawande',
    description:
      'Personal site of Vivek Gawande, a software engineer in Navi Mumbai. Side projects and writing about software.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
