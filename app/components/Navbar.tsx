import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          NUTTHACHAI
        </Link>

        <nav className="navbar-menu">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/lab">Lab</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}