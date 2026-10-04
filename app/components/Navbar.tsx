"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/lab", label: "Lab" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link
          href="/"
          className="navbar-logo"
          onClick={() => setOpen(false)}
        >
          NUTTHACHAI
        </Link>

        <button
          type="button"
          className={`navbar-toggle${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="navbar-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="navbar-menu"
          className={`navbar-menu${open ? " is-open" : ""}`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                isActive(pathname, link.href) ? "page" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
