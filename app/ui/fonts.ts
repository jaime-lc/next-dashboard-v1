import { Inter, Lusitana } from 'next/font/google'; // C.3 Optimizing Fonts and Images - 1. Adding a primary font
 
export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});