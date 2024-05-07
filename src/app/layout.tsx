import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './_globals.scss';
import DefaultTemplate from './_defaultTemplate';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'RH99 - Preview',
    description: ''
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>): JSX.Element {
    return (
        <html lang="en">
            <body className={inter.className}>
                <DefaultTemplate>{children}</DefaultTemplate>
            </body>
        </html>
    );
}
