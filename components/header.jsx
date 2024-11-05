"use client";

import Link from "next/link";

const Header = () => {
  return (
    <nav style={{ display: "flex", padding: "20px", backgroundColor: "#333", color: "#fff" }}>
      {/* Logo */}
      <Link href="/" style={{ fontSize: "24px", fontWeight: "bold" }}>
        SMAXX
      </Link>

      {/* Desktop Navigation Links - no responsive classes */}
      <ul style={{ display: "flex", gap: "20px", listStyleType: "none", marginLeft: "auto" }}>
        <li><Link href="#">Home</Link></li>
        {/* <li><Link href="#about">About</Link></li> */}
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
