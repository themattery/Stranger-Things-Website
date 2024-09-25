import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/img/Stranger-Things-Logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Teko:wght@300..700&display=swap" rel="stylesheet" />
        <title>Arcadia</title>
      </head>
      <body>
        <header class="header">
          <a class="logo" href="#">
            <img src="./img/Stranger-Things-Logo.png" alt="" width="120px" />
          </a>
          <nav>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/characters">CHARACTERS</a></li>
              <li><a href="/news">NEWS</a></li>
              <li><a href="/about">ABOUT</a></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
