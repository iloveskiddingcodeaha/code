import './globals.css';
import LoginGate from '../components/login-gate';
import Navbar from '../components/navbar';
import { Inter } from 'next/font/google'; // Import the Inter font

const inter = Inter({ subsets: ['latin'] }); // Initialize the Inter font

export const metadata = {
  title: "Purpleware (PRIVATE UNTILL UPDATE)",
  description: "Skidding code since 2024.",
  // ADDED: Viewport configuration for proper scaling and responsiveness
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1, // Optional: Prevents users from zooming in/out
    userScalable: false, // Optional: Further prevents manual scaling
  },
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply the font class to the body */}
      <body className={inter.className}>
        <Navbar /> {/* Render the Navbar component */}
        <LoginGate>{children}</LoginGate>
      </body>
    </html>
  );
}
