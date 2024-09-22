import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header class="header">
          <a class="logo" href="#">
            <img src="./img/Stranger-Things-Logo.png" alt="" width="120px"/>
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
