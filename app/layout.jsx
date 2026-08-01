import "./globals.css";

export const metadata = {
  title: "Amira Tarek — Front-End Developer",
  description:
    "Amira Tarek — Front-end developer specializing in React.js and Next.js. Portfolio of projects, skills, and contact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
