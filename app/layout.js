import { Inter } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vivek Gawande | Senior Software Engineer',
  description:
    'Portfolio of Vivek Gawande — Senior Software Engineer with 6+ years of experience building enterprise applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
