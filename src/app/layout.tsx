import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { TooltipProvider } from '@/components/ui/tooltip';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export const metadata: Metadata = {
  title: 'Signal Studio',
  description: 'Creator platform with integrated market research tools',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const app = <TooltipProvider delayDuration={0}>{children}</TooltipProvider>;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {publishableKey ? (
          <ClerkProvider publishableKey={publishableKey}>{app}</ClerkProvider>
        ) : (
          app
        )}
      </body>
    </html>
  );
}
