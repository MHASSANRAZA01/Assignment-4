 
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Blog Website</Link>
      </div>
      <nav>
        <ul className="list">
          <li>
            <Link href="/" className="home">Home</Link>
          </li>
          
          <li>
            <Link href="/About" className="about">About</Link>
          </li>
          <li>
            <Link href="/contact" className="contact">Contact</Link>
          </li>
          <li>
            <Link href="/Blogs" className="Blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
