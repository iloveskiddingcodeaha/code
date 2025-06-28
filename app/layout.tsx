import "./globals.css";
import LoginGate from "../components/login-gate"; // Adjust path if needed

export const metadata = {
  title: "Purpleware (PRIVATE UNTILL UPDATE)",
  description: "Skidding code since 2024.",
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LoginGate>{children}</LoginGate>
      </body>
    </html>
  );
}
