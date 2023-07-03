import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import {
  Inter,
  Berkshire_Swash,
  Hubballi,
  Italiana,
} from 'next/font/google';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

const inter = Inter({ subsets: ['latin'] });
const berkshire = Berkshire_Swash({
  weight: '400',
  subsets: ['latin'],
});
const hubbali = Hubballi({ weight: '400', subsets: ['latin'] });
const italiana = Italiana({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Michel Gilbert',
  description: 'Development and testing',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={hubbali.className}>
        <ThemeProvider>
          <AuthProvider>
            <header>
              <Navbar />
            </header>
            <div className='lg:h-screen lg:overflow-y-auto'>
              {children}
            </div>
            <footer>
              <Footer />
            </footer>
          </AuthProvider>
        </ThemeProvider>
        {/* <Script src={script} /> */}
      </body>
    </html>
  );
}
