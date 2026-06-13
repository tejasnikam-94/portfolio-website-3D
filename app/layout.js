import "./globals.css";

export const metadata = {
  title: "Tejas Nikam",
  description: "Senior Data Scientist | AI Researcher | Patent Inventor"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}