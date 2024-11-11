import '@/app/ui/global.css';             // C.2 CSS Styling - 1. Global Styles
import { inter } from '@/app/ui/fonts';   // C.3 Optimizing Fonts and Images - 1. Adding a primary font

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* C.3 Optimizing Fonts and Images - 1. Adding a primary font */}
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
