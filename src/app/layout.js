import '../styles/globals.css';
import Link from "next/link";
import Image from 'next/image';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/Stranger-Things-Website/img/Stranger-Things-Logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Teko:wght@300..700&display=swap" rel="stylesheet" />
        <title>Arcadia</title>
      </head>
      <body> 
        <header className="header">
          <a className="logo" href="#">
            <Image src="/Stranger-Things-Website/img/Stranger-Things-Logo.png" alt="Logo" width={100} height={60} />
          </a>
          <nav>
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/characters">CHARACTERS</Link></li>
              <li><Link href="/news">NEWS</Link></li>
              <li><Link href="/about">ABOUT</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
