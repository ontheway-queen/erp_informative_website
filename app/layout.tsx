import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ERP | Smart ERP Software Guide',
    template: '%s | ERP',
  },
  description:
    'Explore ERP software modules, benefits, implementation strategy, demo requests, and selection guidance for finance, inventory, HR, manufacturing, sales, and supply chain teams.',
  keywords: [
    'ERP',
    'ERP software',
    'enterprise resource planning',
    'business management software',
    'finance ERP',
    'inventory ERP',
    'HR payroll ERP',
    'manufacturing ERP',
    'ERP implementation',
    'ERP demo',
  ],
  authors: [{ name: 'ERP' }],
  creator: 'ERP',
  publisher: 'ERP',
  applicationName: 'ERP',
  category: 'Business Software',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'ERP | Smart ERP Software Guide',
    description:
      'A visual ERP guide covering modules, business benefits, implementation roadmap, selection criteria, and demo requests.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ERP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 800,
        alt: 'ERP analytics dashboard and business intelligence preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP | Smart ERP Software Guide',
    description:
      'Learn ERP modules, benefits, implementation steps, and how to request a focused ERP demo.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
