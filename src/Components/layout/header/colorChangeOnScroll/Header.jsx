// how to use this header:
{
  /* <Header
  logo={{ title: "MEHEDI PORTFOLIO", subtitle: "Frontend Dev", link: "/" }}
  navLinks={[
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ]}
  cartCount={3}
  userName="Logout"
/>; */
}

import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom"; // make sure to use react-router-dom

const Header = ({
  logo = { title: "BISTRO BOSS", subtitle: "RESTAURANT", link: "/" },
  navLinks = [],
  cartCount = 0,
  userName = "SIGN OUT",
  colorOnScroll = "bg-black/80",
  defaultColor = "bg-black",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky w-full top-0 z-50 ${
        scrolled ? colorOnScroll : defaultColor
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link to={logo.link} className="block">
              <div className="text-white">
                <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
                  {logo.title}
                </h1>
                <p className="text-xs md:text-sm tracking-widest mt-1">
                  {logo.subtitle}
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-white hover:text-yellow-300 text-sm font-semibold transition-colors duration-200"
              >
                {link.name}
              </NavLink>
            ))}

            {/* Cart */}
            <Link
              to="#cart"
              className="relative text-white hover:text-yellow-300 transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User */}
            <Link
              to="#signout"
              className="flex items-center gap-2 text-white hover:text-yellow-300 text-sm font-semibold transition-colors duration-200"
            >
              <span>{userName}</span>
              <User className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <Link to="#cart" className="relative text-yellow-400">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-400 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 text-yellow-400 hover:text-yellow-300 hover:bg-gray-700 rounded font-semibold transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="#signout"
            className="flex items-center gap-2 px-3 py-2 text-yellow-400 hover:text-yellow-300 hover:bg-gray-700 rounded font-semibold transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>{userName}</span>
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
